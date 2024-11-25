import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, Clock } from 'lucide-react';

// Função para buscar horários disponíveis no backend
const getAvailableTimes = async (date: string): Promise<string[]> => {
  try {
    const response = await fetch(`https://n702.onrender.com/agendamento/${date}`);
    if (response.ok) {
      return response.json(); // Retorna a resposta do backend com os horários disponíveis
    } else {
      console.error('Erro ao buscar horários:', response.statusText);
      return [];
    }
  } catch (error) {
    console.error('Erro ao comunicar com o backend:', error);
    return [];
  }
};


export const Agendamento: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [existingAppointments, setExistingAppointments] = useState<Array<{ date: Date; time: string }>>([]);
  const navigate = useNavigate();

  const handleDateSelect = async (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      const formattedDate = format(date, 'yyyy-MM-dd'); // Formata a data para 'YYYY-MM-DD'
      const times = await getAvailableTimes(formattedDate); // Chama o backend para buscar horários disponíveis
      setAvailableTimes(times);
    } else {
      setAvailableTimes([]);
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setIsDialogOpen(true);
  };
  const getPessoaFisicaId = () => {
    return sessionStorage.getItem('cd_pessoa_fisica');
  };

  const handleConfirmAppointment = async () => {
    const cdPessoaFisica = getPessoaFisicaId();
    console.log('user logado',cdPessoaFisica);
    if (selectedDate && selectedTime) {
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      try {
        const response = await fetch('https://n702.onrender.com/confirmar-agendamento', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // Adicionado cabeçalho
          },
          body: JSON.stringify({
            dt_agenda: formattedDate,
            hr_agenda: selectedTime,
            cd_pessoa_fisica: cdPessoaFisica,
          }),
        });

        if (response.ok) {
          const result = await response.json();
          console.log(result.message);
          setExistingAppointments([...existingAppointments, { date: selectedDate, time: selectedTime }]);
        } else {
          const error = await response.json();
          console.error('Erro ao confirmar agendamento:', error.detail);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      } finally {
        setIsDialogOpen(false);
        setSelectedTime(null);
      }
    }
  };
  const handleLogout = () => {
    sessionStorage.clear(); // Remove todas as informações do sessionStorage
    navigate('/login'); // Redireciona para a página de login
  };

  const handleCancelAppointment = (date: Date, time: string) => {
    setExistingAppointments(existingAppointments.filter(
      app => !(app.date.getTime() === date.getTime() && app.time === time)
    ));
    // Aqui você pode fazer uma requisição para cancelar o agendamento no backend
  };

  return (
    <Tabs defaultValue="schedule" className="w-full max-w-4xl mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="schedule">Realizar Agendamento</TabsTrigger>
        <TabsTrigger value="manage">Agendamentos Realizados</TabsTrigger>
      </TabsList>
      <TabsContent value="schedule">
        <Card>
          <CardHeader>
            <CardTitle>Data</CardTitle>
            <CardDescription>Escolha uma data para realizar o agendamento.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row gap-6">
          <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              locale={ptBR}
              className="rounded-md border"
            />
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Horários Disponíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-72">
                  {availableTimes.length > 0 ? (
                    <div className="grid grid-cols-2 gap-2">
                      {availableTimes.map((time) => (
                        <Button
                          key={time}
                          variant="outline"
                          onClick={() => handleTimeSelect(time)}
                          className="justify-start"
                        >
                          <Clock className="mr-2 h-4 w-4" />
                          {time}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-center text-muted-foreground">Não existe horários disponíveis para a data selecionada.</p>
                  )}
                </ScrollArea>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="manage">
        <Card>
          <CardHeader>
            <CardTitle>Agendamentos</CardTitle>
            <CardDescription>Gerencie seus agendamentos.</CardDescription>
          </CardHeader>
          <CardContent>
            {existingAppointments.length > 0 ? (
              <ul className="space-y-4">
                {existingAppointments.map((appointment, index) => (
                  <li key={index} className="flex items-center justify-between p-4 border rounded-md">
                    <div className="flex items-center space-x-4">
                      <CalendarDays className="h-6 w-6 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{format(appointment.date, 'PPPP', { locale: ptBR })}</p>
                        <p className="text-sm text-muted-foreground">{appointment.time}</p>
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      onClick={() => handleCancelAppointment(appointment.date, appointment.time)}
                    >
                      Cancelar
                    </Button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-muted-foreground">Nenhum agendamento realizado.</p>
            )}
            
          </CardContent>
        </Card>
      </TabsContent>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar Agendamento</DialogTitle>
            <DialogDescription>
              Deseja confirmar o agendamento para{' '}
              {selectedDate && format(selectedDate, 'PPPP', { locale: ptBR })} às {selectedTime}?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleConfirmAppointment}>Confirmar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Tabs>
    
  );
};
