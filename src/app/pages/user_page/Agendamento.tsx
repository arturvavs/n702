import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { ptBR } from "date-fns/locale";
import { ptBR as ptBRPicker } from "@mui/x-date-pickers/locales";
import { Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import {format} from "date-fns/format";
import { getAvailableTimes } from "../../authService";

export const Agendamento: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [horariosDisponiveis, setHorariosDisponiveis] = React.useState<string[]>([]);
  const [selectedHorario, setSelectedHorario] = React.useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // Função para buscar horários disponíveis no backend
  const fetchHorariosDisponiveis = async (date: Date) => {
    const formattedDate = format(date, "yyyy-MM-dd"); // Formata a data para o formato YYYY-MM-DD
    try {
      const horarios = await getAvailableTimes(formattedDate); // Passa apenas a data formatada para a função
      setHorariosDisponiveis(horarios); // Atualiza o estado com os horários recebidos
    } catch (error) {
      console.error("Erro ao buscar horários disponíveis:", error);
      setHorariosDisponiveis([]); // Limpa os horários em caso de erro
    }
  };

  // Atualizar data e buscar horários ao selecionar uma data
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

  return (
    <div style={{ background: "#f5f5f5", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "80%", maxWidth: "1000px", padding: 30 }}>
        <Typography variant="h4" align="center" style={{ marginBottom: 30, color: "#333", fontFamily: "'Trebuchet MS', sans-serif" }}>
          Agendamento de Consultas
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 30 }}>
          <div style={{ flex: 1 }}>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR} localeText={ptBRPicker.components.MuiLocalizationProvider.defaultProps.localeText}>
              <Card style={{ padding: 20, borderRadius: 8, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
                <Typography variant="h6" align="center" style={{ marginBottom: 20 }}>
                  Selecione a Data
                </Typography>
                <StaticDatePicker value={selectedDate} onChange={handleChangeDate} />
              </Card>
            </LocalizationProvider>
          </div>
          <div style={{ flex: 1 }}>
            <Card style={{ padding: 20, borderRadius: 8, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <Typography variant="h6" align="center" style={{ marginBottom: 20 }}>
                Horários Disponíveis
              </Typography>
              <List>
                {horariosDisponiveis.length > 0 ? (
                  horariosDisponiveis.map((horario, index) => (
                    <React.Fragment key={index}>
                      <ListItemButton onClick={() => handleHorarioClick(horario)}>
                        <ListItemText primary={horario} style={{ textAlign: "center", fontSize: 16, fontWeight: "bold" }} />
                      </ListItemButton>
                      {index < horariosDisponiveis.length - 1 && <Divider />}
                    </React.Fragment>
                  ))
                ) : (
                  <Typography style={{ textAlign: "center", fontStyle: "italic", marginTop: 20 }}>Nenhum horário disponível</Typography>
                )}
              </List>
            </Card>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle style={{ backgroundColor: "#1976d2", color: "white" }}>Confirmar Agendamento</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Deseja agendar a consulta para o dia <strong>{selectedDate?.toLocaleDateString()}</strong> às <strong>{selectedHorario}</strong>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
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
