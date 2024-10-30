import * as React from "react";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { ptBR } from "date-fns/locale";
import { ptBR as ptBRPicker } from "@mui/x-date-pickers/locales"; 



export const Agendamento: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR} localeText={ptBRPicker.components.MuiLocalizationProvider.defaultProps.localeText}>
            <StaticDatePicker/>
        </LocalizationProvider>
        </div>
    </div>
  );
};
