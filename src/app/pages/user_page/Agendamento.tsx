import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { ptBR } from "date-fns/locale";
import { ptBR as ptBRPicker } from "@mui/x-date-pickers/locales";
import { Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import Parse from "parse/dist/parse.min.js";

export const Agendamento: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [horariosDisponiveis, setHorariosDisponiveis] = React.useState<string[]>([]);
  const [selectedHorario, setSelectedHorario] = React.useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Buscar horários disponíveis que estão como 'True' no Back4App
  const fetchHorariosDisponiveis = async (date: Date) => {
    const Agenda = Parse.Object.extend("Agenda");
    const query = new Parse.Query(Agenda);

    // Tratamento para considerar somente a DATA selecionada no Back4App (aqui foi chatgpt)
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    // Filtro de StatusAgenda e DataAgenda no intervalo do dia (aqui foi chatgpt)
    query.equalTo("StatusAgenda", true);
    query.greaterThanOrEqualTo("DataAgenda", startOfDay);
    query.lessThanOrEqualTo("DataAgenda", endOfDay);
    query.ascending("HoraAgenda");

    try {
      const results = await query.find();
      const horarios = results.map((result: any) => result.get("HoraAgenda"));
      setHorariosDisponiveis(horarios);
    } catch (error) {
      console.error("Erro ao buscar horários disponíveis:", error);
    }
  };

  const handleChangeDate = (date: Date | null) => {
    setSelectedDate(date);
    if (date) fetchHorariosDisponiveis(date);
  };
  const handleHorarioClick = (horario: string) => {
    setSelectedHorario(horario);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedHorario(null);
  };

  // Função para confirmar o agendamento
  const handleConfirmAgendamento = () => {
    console.log("Agendamento confirmado para:", selectedDate, selectedHorario);
    setIsModalOpen(false);
    // Incluir posteriormente a lógica para trocar o horário agendado de True para False
  };

  const handleClick = () => {
    console.log('Clicou')
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-start", padding: 30, flexDirection: "row" }}>
        <div>
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            adapterLocale={ptBR}
            localeText={ptBRPicker.components.MuiLocalizationProvider.defaultProps.localeText}
          >
            <Card style={{ height: 400, width: 300 }}>
              <StaticDatePicker value={selectedDate} onChange={handleChangeDate} />
            </Card>
          </LocalizationProvider>
        </div>
        <div style={{ marginLeft: 25 }}>
          <Card style={{ height: 400, width: 150 }}>
            <Typography variant="h6" style={{ textAlign: "center", marginTop: 10 }}>
              Horários Disponíveis
            </Typography>
            <List>
              {horariosDisponiveis.length > 0 ? (
                horariosDisponiveis.map((horario, index) => (
                  <React.Fragment key={index}>
                    <ListItemButton onClick={() => handleHorarioClick(horario)}>
                      <ListItemText primary={horario} style={{ textAlign: "center" }} />
                    </ListItemButton>
                    {index < horariosDisponiveis.length - 1 && <Divider />}
                  </React.Fragment>
                ))
              ) : (
                <Typography style={{ textAlign: "center", marginTop: 20 }}>Nenhum horário disponível</Typography>
              )}
            </List>
          </Card>
        </div>
      </div>
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Confirmar Agendamento</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Deseja agendar a consulta para o dia <strong>{selectedDate?.toLocaleDateString()}</strong> às <strong>{selectedHorario}</strong>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleConfirmAgendamento} color="primary">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
