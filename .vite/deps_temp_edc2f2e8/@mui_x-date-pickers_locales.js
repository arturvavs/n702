import {
  DEFAULT_LOCALE,
  enUS,
  getPickersLocalization
} from "./chunk-CKZRKA2Z.js";
import "./chunk-72JO3JMQ.js";
import "./chunk-LK32TJAX.js";

// node_modules/@mui/x-date-pickers/locales/beBY.js
var views = {
  // maps TimeView to its translation
  hours: "гадзіны",
  minutes: "хвіліны",
  seconds: "секунды",
  meridiem: "мерыдыем"
};
var beBYPickers = {
  // Calendar navigation
  previousMonth: "Папярэдні месяц",
  nextMonth: "Наступны месяц",
  // View navigation
  openPreviousView: "Aдкрыць папярэдні выгляд",
  openNextView: "Aдкрыць наступны выгляд",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "гадавы выгляд адкрыты, перайсці да каляндарнага выгляду" : "каляндарны выгляд адкрыты, перайсці да гадавога выгляду",
  // DateRange labels
  start: "Пачатак",
  end: "Канец",
  // startDate: 'Start date',
  // startTime: 'Start time',
  // endDate: 'End date',
  // endTime: 'End time',
  // Action bar
  cancelButtonLabel: "Адмена",
  clearButtonLabel: "Ачысціць",
  okButtonLabel: "OK",
  todayButtonLabel: "Сёння",
  // Toolbar titles
  datePickerToolbarTitle: "Абраць дату",
  dateTimePickerToolbarTitle: "Абраць дату і час",
  timePickerToolbarTitle: "Абраць час",
  dateRangePickerToolbarTitle: "Абраць каляндарны перыяд",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Абярыце ${views[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Час не абраны" : `Абраны час ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} гадзін`,
  minutesClockNumberText: (minutes) => `${minutes} хвілін`,
  secondsClockNumberText: (seconds) => `${seconds} секунд`,
  // Digital clock labels
  selectViewText: (view) => `Абярыце ${views[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Нумар тыдня",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Тыдзень ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Абраць дату, абрана дата  ${formattedDate ?? utils.format(value, "fullDate")}` : "Абраць дату",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Абраць час, абрыны час  ${formattedTime ?? utils.format(value, "fullTime")}` : "Абраць час",
  // fieldClearLabel: 'Clear',
  // Table labels
  timeTableLabel: "абраць час",
  dateTableLabel: "абраць дату",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
  // View names
  // year: 'Year',
  // month: 'Month',
  // day: 'Day',
  // weekDay: 'Week day',
  // hours: 'Hours',
  // minutes: 'Minutes',
  // seconds: 'Seconds',
  // meridiem: 'Meridiem',
  // Common
  // empty: 'Empty',
};
var beBY = getPickersLocalization(beBYPickers);

// node_modules/@mui/x-date-pickers/locales/bgBG.js
var views2 = {
  hours: "часове",
  minutes: "минути",
  seconds: "секунди",
  meridiem: "преди обяд/след обяд"
};
var bgBGPickers = {
  // Calendar navigation
  previousMonth: "Предишен месец",
  nextMonth: "Следващ месец",
  // View navigation
  openPreviousView: "Отвори предишен изглед",
  openNextView: "Отвори следващ изглед",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "отворен е изглед на година, премини на изглед на календар" : "отворен е изглед на календар, премини на изглед на година",
  // DateRange labels
  start: "Начало",
  end: "Край",
  startDate: "Начална дата",
  startTime: "Начален час",
  endDate: "Крайна дата",
  endTime: "Краен час",
  // Action bar
  cancelButtonLabel: "Отказ",
  clearButtonLabel: "Изчисти",
  okButtonLabel: "ОК",
  todayButtonLabel: "Днес",
  // Toolbar titles
  datePickerToolbarTitle: "Избери дата",
  dateTimePickerToolbarTitle: "Избери дата и час",
  timePickerToolbarTitle: "Избери час",
  dateRangePickerToolbarTitle: "Избери времеви период",
  // Clock labels
  clockLabelText: (view, time, adapter) => `Избери ${views2[view]}. ${time === null ? "Не е избран час" : `Избраният час е ${adapter.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} часа`,
  minutesClockNumberText: (minutes) => `${minutes} минути`,
  secondsClockNumberText: (seconds) => `${seconds} секунди`,
  // Digital clock labels
  selectViewText: (view) => `Избери ${views2[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Седмица",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Седмица ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Избери дата, избраната дата е ${utils.format(value, "fullDate")}` : "Избери дата",
  openTimePickerDialogue: (value, utils) => value !== null && utils.isValid(value) ? `Избери час, избраният час е ${utils.format(value, "fullTime")}` : "Избери час",
  fieldClearLabel: "Изчисти стойност",
  // Table labels
  timeTableLabel: "избери час",
  dateTableLabel: "избери дата",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Г".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "ММММ" : "ММ",
  fieldDayPlaceholder: () => "ДД",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "СССС" : "СС",
  fieldHoursPlaceholder: () => "чч",
  fieldMinutesPlaceholder: () => "мм",
  fieldSecondsPlaceholder: () => "сс",
  fieldMeridiemPlaceholder: () => "пс",
  // View names
  year: "Година",
  month: "Месец",
  day: "Ден",
  weekDay: "Ден от седмицата",
  hours: "Часове",
  minutes: "Минути",
  seconds: "Секунди",
  meridiem: "Преди обяд/след обяд",
  // Common
  empty: "Празно"
};
var bgBG = getPickersLocalization(bgBGPickers);

// node_modules/@mui/x-date-pickers/locales/caES.js
var views3 = {
  hours: "Hores",
  minutes: "Minuts",
  seconds: "Segons",
  meridiem: "Meridià"
};
var caESPickers = {
  // Calendar navigation
  previousMonth: "Mes anterior",
  nextMonth: "Mes següent",
  // View navigation
  openPreviousView: "Obrir l'última vista",
  openNextView: "Obrir la següent vista",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "la vista anual està oberta, canvia a la vista de calendari" : "la vista de calendari està oberta, canvia a la vista anual",
  // DateRange labels
  start: "Començar",
  end: "Terminar",
  startDate: "Data inicial",
  startTime: "Hora inicial",
  endDate: "Data final",
  endTime: "Hora final",
  // Action bar
  cancelButtonLabel: "Cancel·lar",
  clearButtonLabel: "Netejar",
  okButtonLabel: "OK",
  todayButtonLabel: "Avuí",
  // Toolbar titles
  datePickerToolbarTitle: "Seleccionar data",
  dateTimePickerToolbarTitle: "Seleccionar data i hora",
  timePickerToolbarTitle: "Seleccionar hora",
  dateRangePickerToolbarTitle: "Seleccionar rang de dates",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Selecciona ${views3[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Hora no seleccionada" : `L'hora seleccionada és ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} hores`,
  minutesClockNumberText: (minutes) => `${minutes} minuts`,
  secondsClockNumberText: (seconds) => `${seconds} segons`,
  // Digital clock labels
  selectViewText: (view) => `Seleccionar ${views3[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Número de la setmana",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Setmana ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Tria la data, la data triada és ${formattedDate ?? utils.format(value, "fullDate")}` : "Tria la data",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Tria l'hora, l'hora triada és ${formattedTime ?? utils.format(value, "fullTime")}` : "Tria l'hora",
  fieldClearLabel: "Netega el valor",
  // Table labels
  timeTableLabel: "tria la data",
  dateTableLabel: "tria l'hora",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Any",
  month: "Mes",
  day: "Dia",
  weekDay: "Dia de la setmana",
  hours: "Hores",
  minutes: "Minuts",
  seconds: "Segons",
  meridiem: "Meridià",
  // Common
  empty: "Buit"
};
var caES = getPickersLocalization(caESPickers);

// node_modules/@mui/x-date-pickers/locales/csCZ.js
var timeViews = {
  hours: "Hodiny",
  minutes: "Minuty",
  seconds: "Sekundy",
  meridiem: "Odpoledne"
};
var csCZPickers = {
  // Calendar navigation
  previousMonth: "Předchozí měsíc",
  nextMonth: "Další měsíc",
  // View navigation
  openPreviousView: "Otevřít předchozí zobrazení",
  openNextView: "Otevřít další zobrazení",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "roční zobrazení otevřeno, přepněte do zobrazení kalendáře" : "zobrazení kalendáře otevřeno, přepněte do zobrazení roku",
  // DateRange labels
  start: "Začátek",
  end: "Konec",
  startDate: "Datum začátku",
  startTime: "Čas začátku",
  endDate: "Datum konce",
  endTime: "Čas konce",
  // Action bar
  cancelButtonLabel: "Zrušit",
  clearButtonLabel: "Vymazat",
  okButtonLabel: "Potvrdit",
  todayButtonLabel: "Dnes",
  // Toolbar titles
  datePickerToolbarTitle: "Vyberte datum",
  dateTimePickerToolbarTitle: "Vyberte datum a čas",
  timePickerToolbarTitle: "Vyberte čas",
  dateRangePickerToolbarTitle: "Vyberete rozmezí dat",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `${timeViews[view] ?? view} vybrány. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Není vybrán čas" : `Vybraný čas je ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} hodin`,
  minutesClockNumberText: (minutes) => `${minutes} minut`,
  secondsClockNumberText: (seconds) => `${seconds} sekund`,
  // Digital clock labels
  selectViewText: (view) => `Vyberte ${timeViews[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Týden v roce",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `${weekNumber} týden v roce`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Vyberte datum, vybrané datum je ${formattedDate ?? utils.format(value, "fullDate")}` : "Vyberte datum",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Vyberte čas, vybraný čas je ${formattedTime ?? utils.format(value, "fullTime")}` : "Vyberte čas",
  fieldClearLabel: "Vymazat",
  // Table labels
  timeTableLabel: "vyberte čas",
  dateTableLabel: "vyberte datum",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Rok",
  month: "Měsíc",
  day: "Den",
  weekDay: "Pracovní den",
  hours: "Hodiny",
  minutes: "Minuty",
  seconds: "Sekundy",
  meridiem: "Odpoledne",
  // Common
  empty: "Prázdný"
};
var csCZ = getPickersLocalization(csCZPickers);

// node_modules/@mui/x-date-pickers/locales/daDK.js
var timeViews2 = {
  hours: "Timer",
  minutes: "Minutter",
  seconds: "Sekunder",
  meridiem: "Meridiem"
};
var daDKPickers = {
  // Calendar navigation
  previousMonth: "Forrige måned",
  nextMonth: "Næste måned",
  // View navigation
  openPreviousView: "Åben forrige visning",
  openNextView: "Åben næste visning",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "årsvisning er åben, skift til kalendervisning" : "kalendervisning er åben, skift til årsvisning",
  // DateRange labels
  start: "Start",
  end: "Slut",
  startDate: "Start dato",
  startTime: "Start tid",
  endDate: "Slut date",
  endTime: "Slut tid",
  // Action bar
  cancelButtonLabel: "Annuller",
  clearButtonLabel: "Ryd",
  okButtonLabel: "OK",
  todayButtonLabel: "I dag",
  // Toolbar titles
  datePickerToolbarTitle: "Vælg dato",
  dateTimePickerToolbarTitle: "Vælg dato & tidspunkt",
  timePickerToolbarTitle: "Vælg tidspunkt",
  dateRangePickerToolbarTitle: "Vælg datointerval",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Vælg ${timeViews2[view] ?? view}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Intet tidspunkt valgt" : `Valgte tidspunkt er ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} timer`,
  minutesClockNumberText: (minutes) => `${minutes} minutter`,
  secondsClockNumberText: (seconds) => `${seconds} sekunder`,
  // Digital clock labels
  selectViewText: (view) => `Vælg ${timeViews2[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Ugenummer",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Uge ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Vælg dato, valgte dato er ${formattedDate ?? utils.format(value, "fullDate")}` : "Vælg dato",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Vælg tidspunkt, valgte tidspunkt er ${formattedTime ?? utils.format(value, "fullTime")}` : "Vælg tidspunkt",
  fieldClearLabel: "ryd felt",
  // Table labels
  timeTableLabel: "vælg tidspunkt",
  dateTableLabel: "vælg dato",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "år",
  month: "måned",
  day: "dag",
  weekDay: "ugedag",
  hours: "timer",
  minutes: "minutter",
  seconds: "sekunder",
  meridiem: "middag",
  // Common
  empty: "tom"
};
var daDK = getPickersLocalization(daDKPickers);

// node_modules/@mui/x-date-pickers/locales/deDE.js
var timeViews3 = {
  hours: "Stunden",
  minutes: "Minuten",
  seconds: "Sekunden",
  meridiem: "Meridiem"
};
var deDEPickers = {
  // Calendar navigation
  previousMonth: "Letzter Monat",
  nextMonth: "Nächster Monat",
  // View navigation
  openPreviousView: "Letzte Ansicht öffnen",
  openNextView: "Nächste Ansicht öffnen",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "Jahresansicht ist geöffnet, zur Kalenderansicht wechseln" : "Kalenderansicht ist geöffnet, zur Jahresansicht wechseln",
  // DateRange labels
  start: "Beginn",
  end: "Ende",
  startDate: "Startdatum",
  startTime: "Startzeit",
  endDate: "Enddatum",
  endTime: "Endzeit",
  // Action bar
  cancelButtonLabel: "Abbrechen",
  clearButtonLabel: "Löschen",
  okButtonLabel: "OK",
  todayButtonLabel: "Heute",
  // Toolbar titles
  datePickerToolbarTitle: "Datum auswählen",
  dateTimePickerToolbarTitle: "Datum & Uhrzeit auswählen",
  timePickerToolbarTitle: "Uhrzeit auswählen",
  dateRangePickerToolbarTitle: "Datumsbereich auswählen",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `${timeViews3[view] ?? view} auswählen. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Keine Uhrzeit ausgewählt" : `Gewählte Uhrzeit ist ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} ${timeViews3.hours}`,
  minutesClockNumberText: (minutes) => `${minutes} ${timeViews3.minutes}`,
  secondsClockNumberText: (seconds) => `${seconds}  ${timeViews3.seconds}`,
  // Digital clock labels
  selectViewText: (view) => `${timeViews3[view]} auswählen`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Kalenderwoche",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Woche ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Datum auswählen, gewähltes Datum ist ${formattedDate ?? utils.format(value, "fullDate")}` : "Datum auswählen",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Uhrzeit auswählen, gewählte Uhrzeit ist ${formattedTime ?? utils.format(value, "fullTime")}` : "Uhrzeit auswählen",
  fieldClearLabel: "Wert leeren",
  // Table labels
  timeTableLabel: "Uhrzeit auswählen",
  dateTableLabel: "Datum auswählen",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "J".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "TT",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Jahr",
  month: "Monat",
  day: "Tag",
  weekDay: "Wochentag",
  hours: "Stunden",
  minutes: "Minuten",
  seconds: "Sekunden",
  meridiem: "Tageszeit",
  // Common
  empty: "Leer"
};
var deDE = getPickersLocalization(deDEPickers);

// node_modules/@mui/x-date-pickers/locales/elGR.js
var views4 = {
  hours: "ώρες",
  minutes: "λεπτά",
  seconds: "δευτερόλεπτα",
  meridiem: "μεσημβρία"
};
var elGRPickers = {
  // Calendar navigation
  previousMonth: "Προηγούμενος μήνας",
  nextMonth: "Επόμενος μήνας",
  // View navigation
  openPreviousView: "Άνοίγμα προηγούμενης προβολή",
  openNextView: "Άνοίγμα επόμενης προβολή",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "η προβολή έτους είναι ανοιχτή, μεταβείτε στην προβολή ημερολογίου" : "η προβολή ημερολογίου είναι ανοιχτή, μεταβείτε στην προβολή έτους",
  // DateRange labels
  start: "Αρχή",
  end: "Τέλος",
  // startDate: 'Start date',
  // startTime: 'Start time',
  // endDate: 'End date',
  // endTime: 'End time',
  // Action bar
  cancelButtonLabel: "Άκυρο",
  clearButtonLabel: "Καθαρισμός",
  okButtonLabel: "OK",
  todayButtonLabel: "Σήμερα",
  // Toolbar titles
  datePickerToolbarTitle: "Επιλέξτε ημερομηνία",
  dateTimePickerToolbarTitle: "Επιλέξτε ημερομηνία και ώρα",
  timePickerToolbarTitle: "Επιλέξτε ώρα",
  dateRangePickerToolbarTitle: "Επιλέξτε εύρος ημερομηνιών",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Επιλέξτε ${views4[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Δεν έχει επιλεγεί ώρα" : `Η επιλεγμένη ώρα είναι ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} ώρες`,
  minutesClockNumberText: (minutes) => `${minutes} λεπτά`,
  secondsClockNumberText: (seconds) => `${seconds} δευτερόλεπτα`,
  // Digital clock labels
  selectViewText: (view) => `Επιλέξτε ${views4[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Αριθμός εβδομάδας",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Εβδομάδα ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Επιλέξτε ημερομηνία, η επιλεγμένη ημερομηνία είναι ${formattedDate ?? utils.format(value, "fullDate")}` : "Επιλέξτε ημερομηνία",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Επιλέξτε ώρα, η επιλεγμένη ώρα είναι ${formattedTime ?? utils.format(value, "fullTime")}` : "Επιλέξτε ώρα",
  // fieldClearLabel: 'Clear',
  // Table labels
  timeTableLabel: "επιλέξτε ώρα",
  dateTableLabel: "επιλέξτε ημερομηνία",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
  // View names
  // year: 'Year',
  // month: 'Month',
  // day: 'Day',
  // weekDay: 'Week day',
  // hours: 'Hours',
  // minutes: 'Minutes',
  // seconds: 'Seconds',
  // meridiem: 'Meridiem',
  // Common
  // empty: 'Empty',
};
var elGR = getPickersLocalization(elGRPickers);

// node_modules/@mui/x-date-pickers/locales/esES.js
var views5 = {
  hours: "Horas",
  minutes: "Minutos",
  seconds: "Segundos",
  meridiem: "Meridiano"
};
var esESPickers = {
  // Calendar navigation
  previousMonth: "Mes anterior",
  nextMonth: "Mes siguiente",
  // View navigation
  openPreviousView: "Abrir la última vista",
  openNextView: "Abrir la siguiente vista",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "la vista anual está abierta, cambie a la vista de calendario" : "la vista de calendario está abierta, cambie a la vista anual",
  // DateRange labels
  start: "Empezar",
  end: "Terminar",
  startDate: "Fecha inicio",
  startTime: "Hora inicio",
  endDate: "Fecha final",
  endTime: "Hora final",
  // Action bar
  cancelButtonLabel: "Cancelar",
  clearButtonLabel: "Limpiar",
  okButtonLabel: "OK",
  todayButtonLabel: "Hoy",
  // Toolbar titles
  datePickerToolbarTitle: "Seleccionar fecha",
  dateTimePickerToolbarTitle: "Seleccionar fecha y hora",
  timePickerToolbarTitle: "Seleccionar hora",
  dateRangePickerToolbarTitle: "Seleccionar rango de fecha",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Seleccione ${views5[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "No hay hora seleccionada" : `La hora seleccionada es ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} horas`,
  minutesClockNumberText: (minutes) => `${minutes} minutos`,
  secondsClockNumberText: (seconds) => `${seconds} segundos`,
  // Digital clock labels
  selectViewText: (view) => `Seleccionar ${views5[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Número de semana",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Semana ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Elige fecha, la fecha elegida es ${formattedDate ?? utils.format(value, "fullDate")}` : "Elige fecha",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Elige hora, la hora elegida es ${formattedTime ?? utils.format(value, "fullTime")}` : "Elige hora",
  fieldClearLabel: "Limpiar valor",
  // Table labels
  timeTableLabel: "elige hora",
  dateTableLabel: "elige fecha",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "A".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Año",
  month: "Mes",
  day: "Dia",
  weekDay: "Dia de la semana",
  hours: "Horas",
  minutes: "Minutos",
  seconds: "Segundos",
  meridiem: "Meridiano",
  // Common
  empty: "Vacío"
};
var esES = getPickersLocalization(esESPickers);

// node_modules/@mui/x-date-pickers/locales/eu.js
var views6 = {
  hours: "orduak",
  minutes: "minutuak",
  seconds: "segunduak",
  meridiem: "meridianoa"
};
var euPickers = {
  // Calendar navigation
  previousMonth: "Azken hilabetea",
  nextMonth: "Hurrengo hilabetea",
  // View navigation
  openPreviousView: "azken bista ireki",
  openNextView: "hurrengo bista ireki",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "urteko bista irekita dago, aldatu egutegi bistara" : "egutegi bista irekita dago, aldatu urteko bistara",
  // DateRange labels
  start: "Hasi",
  end: "Bukatu",
  // startDate: 'Start date',
  // startTime: 'Start time',
  // endDate: 'End date',
  // endTime: 'End time',
  // Action bar
  cancelButtonLabel: "Utxi",
  clearButtonLabel: "Garbitu",
  okButtonLabel: "OK",
  todayButtonLabel: "Gaur",
  // Toolbar titles
  datePickerToolbarTitle: "Data aukeratu",
  dateTimePickerToolbarTitle: "Data eta ordua aukeratu",
  timePickerToolbarTitle: "Ordua aukeratu",
  dateRangePickerToolbarTitle: "Data tartea aukeratu",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Aukeratu ${views6[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Ez da ordurik aukertau" : `Aukeratutako ordua ${formattedTime ?? utils.format(time, "fullTime")} da`}`,
  hoursClockNumberText: (hours) => `${hours} ordu`,
  minutesClockNumberText: (minutes) => `${minutes} minutu`,
  secondsClockNumberText: (seconds) => `${seconds} segundu`,
  // Digital clock labels
  selectViewText: (view) => `Aukeratu ${views6[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Astea zenbakia",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `${weekNumber} astea`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Data aukeratu, aukeratutako data ${formattedDate ?? utils.format(value, "fullDate")} da` : "Data aukeratu",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Ordua aukeratu, aukeratutako ordua ${formattedTime ?? utils.format(value, "fullTime")} da` : "Ordua aukeratu",
  fieldClearLabel: "Balioa garbitu",
  // Table labels
  timeTableLabel: "ordua aukeratu",
  dateTableLabel: "data aukeratu",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
  // View names
  // year: 'Year',
  // month: 'Month',
  // day: 'Day',
  // weekDay: 'Week day',
  // hours: 'Hours',
  // minutes: 'Minutes',
  // seconds: 'Seconds',
  // meridiem: 'Meridiem',
  // Common
  // empty: 'Empty',
};
var eu = getPickersLocalization(euPickers);

// node_modules/@mui/x-date-pickers/locales/faIR.js
var timeViews4 = {
  hours: "ساعت‌ها",
  minutes: "دقیقه‌ها",
  seconds: "ثانیه‌ها",
  meridiem: "بعد از ظهر"
};
var faIRPickers = {
  // Calendar navigation
  previousMonth: "ماه گذشته",
  nextMonth: "ماه آینده",
  // View navigation
  openPreviousView: "نمای قبلی",
  openNextView: "نمای بعدی",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "نمای سال باز است، رفتن به نمای تقویم" : "نمای تقویم باز است، رفتن به نمای سال",
  // DateRange labels
  start: "شروع",
  end: "پایان",
  startDate: "تاریخ شروع",
  startTime: "ساعت شروع",
  endDate: "تاریخ پایان",
  endTime: "ساعت پایان",
  // Action bar
  cancelButtonLabel: "لغو",
  clearButtonLabel: "پاک کردن",
  okButtonLabel: "اوکی",
  todayButtonLabel: "امروز",
  // Toolbar titles
  datePickerToolbarTitle: "تاریخ را انتخاب کنید",
  dateTimePickerToolbarTitle: "تاریخ و ساعت را انتخاب کنید",
  timePickerToolbarTitle: "ساعت را انتخاب کنید",
  dateRangePickerToolbarTitle: "محدوده تاریخ را انتخاب کنید",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => ` را انتخاب کنید ${timeViews4[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "هیچ ساعتی انتخاب نشده است" : `ساعت انتخاب ${formattedTime ?? utils.format(time, "fullTime")} می باشد`}`,
  hoursClockNumberText: (hours) => `${hours} ساعت‌ها`,
  minutesClockNumberText: (minutes) => `${minutes} دقیقه‌ها`,
  secondsClockNumberText: (seconds) => `${seconds} ثانیه‌ها`,
  // Digital clock labels
  selectViewText: (view) => ` را انتخاب کنید ${timeViews4[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "عدد هفته",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `هفته ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `تاریخ را انتخاب کنید، تاریخ انتخاب شده ${formattedDate ?? utils.format(value, "fullDate")} می‌باشد` : "تاریخ را انتخاب کنید",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `ساعت را انتخاب کنید، ساعت انتخاب شده ${formattedTime ?? utils.format(value, "fullTime")} می‌باشد` : "ساعت را انتخاب کنید",
  fieldClearLabel: "پاک کردن مقدار",
  // Table labels
  timeTableLabel: "انتخاب تاریخ",
  dateTableLabel: "انتخاب ساعت",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "سال",
  month: "ماه",
  day: "روز",
  weekDay: "روز هفته",
  hours: "ساعت‌ها",
  minutes: "دقیقه‌ها",
  seconds: "ثانیه‌ها",
  meridiem: "نیم‌روز",
  // Common
  empty: "خالی"
};
var faIR = getPickersLocalization(faIRPickers);

// node_modules/@mui/x-date-pickers/locales/fiFI.js
var views7 = {
  hours: "tunnit",
  minutes: "minuutit",
  seconds: "sekuntit",
  meridiem: "iltapäivä"
};
var fiFIPickers = {
  // Calendar navigation
  previousMonth: "Edellinen kuukausi",
  nextMonth: "Seuraava kuukausi",
  // View navigation
  openPreviousView: "Avaa edellinen näkymä",
  openNextView: "Avaa seuraava näkymä",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "vuosinäkymä on auki, vaihda kalenterinäkymään" : "kalenterinäkymä on auki, vaihda vuosinäkymään",
  // DateRange labels
  start: "Alku",
  end: "Loppu",
  startDate: "Alkamispäivämäärä",
  startTime: "Alkamisaika",
  endDate: "Päättymispäivämäärä",
  endTime: "Päättymisaika",
  // Action bar
  cancelButtonLabel: "Peruuta",
  clearButtonLabel: "Tyhjennä",
  okButtonLabel: "OK",
  todayButtonLabel: "Tänään",
  // Toolbar titles
  datePickerToolbarTitle: "Valitse päivä",
  dateTimePickerToolbarTitle: "Valitse päivä ja aika",
  timePickerToolbarTitle: "Valitse aika",
  dateRangePickerToolbarTitle: "Valitse aikaväli",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Valitse ${views7[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Ei aikaa valittuna" : `Valittu aika on ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} tuntia`,
  minutesClockNumberText: (minutes) => `${minutes} minuuttia`,
  secondsClockNumberText: (seconds) => `${seconds} sekuntia`,
  // Digital clock labels
  selectViewText: (view) => `Valitse ${views7[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Viikko",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Viikko ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Valitse päivä, valittu päivä on ${formattedDate ?? utils.format(value, "fullDate")}` : "Valitse päivä",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Valitse aika, valittu aika on ${formattedTime ?? utils.format(value, "fullTime")}` : "Valitse aika",
  fieldClearLabel: "Tyhjennä arvo",
  // Table labels
  timeTableLabel: "valitse aika",
  dateTableLabel: "valitse päivä",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "V".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "KKKK" : "KK",
  fieldDayPlaceholder: () => "PP",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "tt",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Vuosi",
  month: "Kuukausi",
  day: "Päivä",
  weekDay: "Viikonpäivä",
  hours: "Tunnit",
  minutes: "Minuutit",
  seconds: "Sekunnit",
  meridiem: "Iltapäivä",
  // Common
  empty: "Tyhjä"
};
var fiFI = getPickersLocalization(fiFIPickers);

// node_modules/@mui/x-date-pickers/locales/frFR.js
var views8 = {
  hours: "heures",
  minutes: "minutes",
  seconds: "secondes",
  meridiem: "méridien"
};
var frFRPickers = {
  // Calendar navigation
  previousMonth: "Mois précédent",
  nextMonth: "Mois suivant",
  // View navigation
  openPreviousView: "Ouvrir la vue précédente",
  openNextView: "Ouvrir la vue suivante",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "La vue année est ouverte, ouvrir la vue calendrier" : "La vue calendrier est ouverte, ouvrir la vue année",
  // DateRange labels
  start: "Début",
  end: "Fin",
  startDate: "Date de début",
  startTime: "Heure de début",
  endDate: "Date de fin",
  endTime: "Heure de fin",
  // Action bar
  cancelButtonLabel: "Annuler",
  clearButtonLabel: "Vider",
  okButtonLabel: "OK",
  todayButtonLabel: "Aujourd'hui",
  // Toolbar titles
  datePickerToolbarTitle: "Choisir une date",
  dateTimePickerToolbarTitle: "Choisir la date et l'heure",
  timePickerToolbarTitle: "Choisir l'heure",
  dateRangePickerToolbarTitle: "Choisir la plage de dates",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Choix des ${views8[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Aucune heure choisie" : `L'heure choisie est ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} heures`,
  minutesClockNumberText: (minutes) => `${minutes} minutes`,
  secondsClockNumberText: (seconds) => `${seconds} secondes`,
  // Digital clock labels
  selectViewText: (view) => `Choisir ${views8[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Semaine",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Semaine ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Choisir la date, la date sélectionnée est ${formattedDate ?? utils.format(value, "fullDate")}` : "Choisir la date",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime ? `Choisir l'heure, l'heure sélectionnée est ${formattedTime ?? utils.format(value, "fullTime")}` : "Choisir l'heure",
  fieldClearLabel: "Effacer la valeur",
  // Table labels
  timeTableLabel: "choix de l'heure",
  dateTableLabel: "choix de la date",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "A".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "JJ",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Année",
  month: "Mois",
  day: "Jour",
  weekDay: "Jour de la semaine",
  hours: "Heures",
  minutes: "Minutes",
  seconds: "Secondes",
  meridiem: "Méridien",
  // Common
  empty: "Vider"
};
var frFR = getPickersLocalization(frFRPickers);

// node_modules/@mui/x-date-pickers/locales/heIL.js
var views9 = {
  hours: "שעות",
  minutes: "דקות",
  seconds: "שניות",
  meridiem: "מרידיאם"
};
var heILPickers = {
  // Calendar navigation
  previousMonth: "חודש קודם",
  nextMonth: "חודש הבא",
  // View navigation
  openPreviousView: "תצוגה קודמת",
  openNextView: "תצוגה הבאה",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "תצוגת שנה פתוחה, מעבר לתצוגת לוח שנה" : "תצוגת לוח שנה פתוחה, מעבר לתצוגת שנה",
  // DateRange labels
  start: "תחילה",
  end: "סיום",
  startDate: "תאריך תחילה",
  startTime: "שעת תחילה",
  endDate: "תאריך סיום",
  endTime: "שעת סיום",
  // Action bar
  cancelButtonLabel: "ביטול",
  clearButtonLabel: "ניקוי",
  okButtonLabel: "אישור",
  todayButtonLabel: "היום",
  // Toolbar titles
  datePickerToolbarTitle: "בחירת תאריך",
  dateTimePickerToolbarTitle: "בחירת תאריך ושעה",
  timePickerToolbarTitle: "בחירת שעה",
  dateRangePickerToolbarTitle: "בחירת טווח תאריכים",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `בחירת ${views9[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "לא נבחרה שעה" : `השעה הנבחרת היא ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} שעות`,
  minutesClockNumberText: (minutes) => `${minutes} דקות`,
  secondsClockNumberText: (seconds) => `${seconds} שניות`,
  // Digital clock labels
  selectViewText: (view) => `בחירת ${views9[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "שבוע מספר",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `שבוע ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `בחירת תאריך, התאריך שנבחר הוא ${formattedDate ?? utils.format(value, "fullDate")}` : "בחירת תאריך",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `בחירת שעה, השעה שנבחרה היא ${formattedTime ?? utils.format(value, "fullTime")}` : "בחירת שעה",
  fieldClearLabel: "נקה ערך",
  // Table labels
  timeTableLabel: "בחירת שעה",
  dateTableLabel: "בחירת תאריך",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "שנה",
  month: "חודש",
  day: "יום",
  weekDay: "יום בשבוע",
  hours: "שעות",
  minutes: "דקות",
  seconds: "שניות",
  meridiem: "יחידת זמן",
  // Common
  empty: "ריק"
};
var heIL = getPickersLocalization(heILPickers);

// node_modules/@mui/x-date-pickers/locales/hrHR.js
var timeViews5 = {
  hours: "sati",
  minutes: "minute",
  seconds: "sekunde",
  meridiem: "meridiem"
};
var hrHRPickers = {
  // Calendar navigation
  previousMonth: "Prethodni mjesec",
  nextMonth: "Naredni mjesec",
  // View navigation
  openPreviousView: "Otvori prethodni prikaz",
  openNextView: "Otvori naredni prikaz",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "Otvoren je godišnji prikaz, promijeni na kalendarski prikaz" : "Otvoren je kalendarski prikaz, promijeni na godišnji prikaz",
  // DateRange labels
  start: "Početak",
  end: "Kraj",
  startDate: "Početni datum",
  startTime: "Početno vrijeme",
  endDate: "Krajnji datum",
  endTime: "Krajnje vrijeme",
  // Action bar
  cancelButtonLabel: "Otkaži",
  clearButtonLabel: "Izbriši",
  okButtonLabel: "U redu",
  todayButtonLabel: "Danas",
  // Toolbar titles
  datePickerToolbarTitle: "Odaberi datum",
  dateTimePickerToolbarTitle: "Odaberi datum i vrijeme",
  timePickerToolbarTitle: "Odaberi vrijeme",
  dateRangePickerToolbarTitle: "Odaberi vremenski okvir",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Odaberi ${timeViews5[view] ?? view}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Vrijeme nije odabrano" : `Odabrano vrijeme je ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => {
    let suffix = "sati";
    if (Number(hours) === 1) {
      suffix = "sat";
    } else if (Number(hours) < 5) {
      suffix = "sata";
    }
    return `${hours} ${suffix}`;
  },
  minutesClockNumberText: (minutes) => `${minutes} ${Number(minutes) > 1 && Number(minutes) < 5 ? "minute" : "minuta"}`,
  secondsClockNumberText: (seconds) => {
    let suffix = "sekundi";
    if (Number(seconds) === 1) {
      suffix = "sekunda";
    } else if (Number(seconds) < 5) {
      suffix = "sekunde";
    }
    return `${seconds} ${suffix}`;
  },
  // Digital clock labels
  selectViewText: (view) => `Odaberi ${timeViews5[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Broj tjedna",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Tjedan ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Odaberi datum, odabrani datum je ${formattedDate ?? utils.format(value, "fullDate")}` : "Odaberi datum",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Odaberi vrijeme, odabrano vrijeme je ${formattedTime ?? utils.format(value, "fullTime")}` : "Odaberi vrijeme",
  fieldClearLabel: "Izbriši",
  // Table labels
  timeTableLabel: "Odaberi vrijeme",
  dateTableLabel: "Odaberi datum",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "G".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Godina",
  month: "Mjesec",
  day: "Dan",
  weekDay: "Dan u tjednu",
  hours: "Sati",
  minutes: "Minute",
  seconds: "Sekunde",
  meridiem: "Meridiem",
  // Common
  empty: "Isprazni"
};
var hrHR = getPickersLocalization(hrHRPickers);

// node_modules/@mui/x-date-pickers/locales/huHU.js
var timeViews6 = {
  hours: "Óra",
  minutes: "Perc",
  seconds: "Másodperc",
  meridiem: "Délután"
};
var huHUPickers = {
  // Calendar navigation
  previousMonth: "Előző hónap",
  nextMonth: "Következő hónap",
  // View navigation
  openPreviousView: "Előző nézet megnyitása",
  openNextView: "Következő nézet megnyitása",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "az évválasztó már nyitva, váltson a naptárnézetre" : "a naptárnézet már nyitva, váltson az évválasztóra",
  // DateRange labels
  start: "Kezdő dátum",
  end: "Záró dátum",
  startDate: "Kezdő dátum",
  startTime: "Kezdő idő",
  endDate: "Záró dátum",
  endTime: "Záró idő",
  // Action bar
  cancelButtonLabel: "Mégse",
  clearButtonLabel: "Törlés",
  okButtonLabel: "OK",
  todayButtonLabel: "Ma",
  // Toolbar titles
  datePickerToolbarTitle: "Dátum kiválasztása",
  dateTimePickerToolbarTitle: "Dátum és idő kiválasztása",
  timePickerToolbarTitle: "Idő kiválasztása",
  dateRangePickerToolbarTitle: "Dátumhatárok kiválasztása",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `${timeViews6[view] ?? view} kiválasztása. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Nincs kiválasztva idő" : `A kiválasztott idő ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} ${timeViews6.hours.toLowerCase()}`,
  minutesClockNumberText: (minutes) => `${minutes} ${timeViews6.minutes.toLowerCase()}`,
  secondsClockNumberText: (seconds) => `${seconds}  ${timeViews6.seconds.toLowerCase()}`,
  // Digital clock labels
  selectViewText: (view) => `${timeViews6[view]} kiválasztása`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Hét",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `${weekNumber}. hét`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Válasszon dátumot, a kiválasztott dátum: ${formattedDate ?? utils.format(value, "fullDate")}` : "Válasszon dátumot",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Válasszon időt, a kiválasztott idő: ${formattedTime ?? utils.format(value, "fullTime")}` : "Válasszon időt",
  fieldClearLabel: "Tartalom ürítése",
  // Table labels
  timeTableLabel: "válasszon időt",
  dateTableLabel: "válasszon dátumot",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "É".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "HHHH" : "HH",
  fieldDayPlaceholder: () => "NN",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "NNNN" : "NN",
  fieldHoursPlaceholder: () => "óó",
  fieldMinutesPlaceholder: () => "pp",
  fieldSecondsPlaceholder: () => "mm",
  fieldMeridiemPlaceholder: () => "dd",
  // View names
  year: "Év",
  month: "Hónap",
  day: "Nap",
  weekDay: "Hétköznap",
  hours: timeViews6.hours,
  minutes: timeViews6.minutes,
  seconds: timeViews6.seconds,
  meridiem: timeViews6.meridiem,
  // Common
  empty: "Üres"
};
var huHU = getPickersLocalization(huHUPickers);

// node_modules/@mui/x-date-pickers/locales/isIS.js
var timeViews7 = {
  hours: "klukkustundir",
  minutes: "mínútur",
  seconds: "sekúndur",
  meridiem: "eftirmiðdagur"
};
var isISPickers = {
  // Calendar navigation
  previousMonth: "Fyrri mánuður",
  nextMonth: "Næsti mánuður",
  // View navigation
  openPreviousView: "Opna fyrri skoðun",
  openNextView: "Opna næstu skoðun",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "ársskoðun er opin, skipta yfir í dagatalsskoðun" : "dagatalsskoðun er opin, skipta yfir í ársskoðun",
  // DateRange labels
  start: "Upphaf",
  end: "Endir",
  // startDate: 'Start date',
  // startTime: 'Start time',
  // endDate: 'End date',
  // endTime: 'End time',
  // Action bar
  cancelButtonLabel: "Hætta við",
  clearButtonLabel: "Hreinsa",
  okButtonLabel: "OK",
  todayButtonLabel: "Í dag",
  // Toolbar titles
  datePickerToolbarTitle: "Velja dagsetningu",
  dateTimePickerToolbarTitle: "Velja dagsetningu og tíma",
  timePickerToolbarTitle: "Velja tíma",
  dateRangePickerToolbarTitle: "Velja tímabil",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Velja ${timeViews7[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Enginn tími valinn" : `Valinn tími er ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} klukkustundir`,
  minutesClockNumberText: (minutes) => `${minutes} mínútur`,
  secondsClockNumberText: (seconds) => `${seconds} sekúndur`,
  // Digital clock labels
  selectViewText: (view) => `Velja ${timeViews7[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Vikunúmer",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Vika ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Velja dagsetningu, valin dagsetning er ${formattedDate ?? utils.format(value, "fullDate")}` : "Velja dagsetningu",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Velja tíma, valinn tími er ${formattedTime ?? utils.format(value, "fullTime")}` : "Velja tíma",
  // fieldClearLabel: 'Clear',
  // Table labels
  timeTableLabel: "velja tíma",
  dateTableLabel: "velja dagsetningu",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Á".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "kk",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "ee"
  // View names
  // year: 'Year',
  // month: 'Month',
  // day: 'Day',
  // weekDay: 'Week day',
  // hours: 'Hours',
  // minutes: 'Minutes',
  // seconds: 'Seconds',
  // meridiem: 'Meridiem',
  // Common
  // empty: 'Empty',
};
var isIS = getPickersLocalization(isISPickers);

// node_modules/@mui/x-date-pickers/locales/itIT.js
var views10 = {
  hours: "le ore",
  minutes: "i minuti",
  seconds: "i secondi",
  meridiem: "il meridiano"
};
var itITPickers = {
  // Calendar navigation
  previousMonth: "Mese precedente",
  nextMonth: "Mese successivo",
  // View navigation
  openPreviousView: "Apri la vista precedente",
  openNextView: "Apri la vista successiva",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "la vista dell'anno è aperta, passare alla vista del calendario" : "la vista dell'calendario è aperta, passare alla vista dell'anno",
  // DateRange labels
  start: "Inizio",
  end: "Fine",
  startDate: "Data di inizio",
  startTime: "Ora di inizio",
  endDate: "Data di fine",
  endTime: "Ora di fine",
  // Action bar
  cancelButtonLabel: "Cancellare",
  clearButtonLabel: "Sgomberare",
  okButtonLabel: "OK",
  todayButtonLabel: "Oggi",
  // Toolbar titles
  datePickerToolbarTitle: "Seleziona data",
  dateTimePickerToolbarTitle: "Seleziona data e orario",
  timePickerToolbarTitle: "Seleziona orario",
  dateRangePickerToolbarTitle: "Seleziona intervallo di date",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Seleziona ${views10[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Nessun orario selezionato" : `L'ora selezionata è ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} ore`,
  minutesClockNumberText: (minutes) => `${minutes} minuti`,
  secondsClockNumberText: (seconds) => `${seconds} secondi`,
  // Digital clock labels
  selectViewText: (view) => `Seleziona ${views10[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Numero settimana",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Settimana ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Scegli la data, la data selezionata è ${formattedDate ?? utils.format(value, "fullDate")}` : "Scegli la data",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Scegli l'ora, l'ora selezionata è ${formattedTime ?? utils.format(value, "fullTime")}` : "Scegli l'ora",
  fieldClearLabel: "Cancella valore",
  // Table labels
  timeTableLabel: "scegli un'ora",
  dateTableLabel: "scegli una data",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "A".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "GG",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "GGGG" : "GG",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Anno",
  month: "Mese",
  day: "Giorno",
  weekDay: "Giorno della settimana",
  hours: "Ore",
  minutes: "Minuti",
  seconds: "Secondi",
  meridiem: "Meridiano",
  // Common
  empty: "Vuoto"
};
var itIT = getPickersLocalization(itITPickers);

// node_modules/@mui/x-date-pickers/locales/jaJP.js
var timeViews8 = {
  hours: "時間",
  minutes: "分",
  seconds: "秒",
  meridiem: "メリディム"
};
var jaJPPickers = {
  // Calendar navigation
  previousMonth: "先月",
  nextMonth: "来月",
  // View navigation
  openPreviousView: "前の表示を開く",
  openNextView: "次の表示を開く",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "年選択表示からカレンダー表示に切り替える" : "カレンダー表示から年選択表示に切り替える",
  // DateRange labels
  start: "開始",
  end: "終了",
  startDate: "開始日",
  startTime: "開始時間",
  endDate: "終了日",
  endTime: "終了時間",
  // Action bar
  cancelButtonLabel: "キャンセル",
  clearButtonLabel: "クリア",
  okButtonLabel: "確定",
  todayButtonLabel: "今日",
  // Toolbar titles
  datePickerToolbarTitle: "日付を選択",
  dateTimePickerToolbarTitle: "日時を選択",
  timePickerToolbarTitle: "時間を選択",
  dateRangePickerToolbarTitle: "日付の範囲を選択",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `${timeViews8[view] ?? view}を選択してください ${!formattedTime && (time === null || !utils.isValid(time)) ? "時間が選択されていません" : `選択した時間は ${formattedTime ?? utils.format(time, "fullTime")} です`}`,
  hoursClockNumberText: (hours) => `${hours} ${timeViews8.hours}`,
  minutesClockNumberText: (minutes) => `${minutes} ${timeViews8.minutes}`,
  secondsClockNumberText: (seconds) => `${seconds} ${timeViews8.seconds}`,
  // Digital clock labels
  selectViewText: (view) => `を選択 ${timeViews8[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "週番号",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `${weekNumber}週目`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `日付を選択してください。選択した日付は ${formattedDate ?? utils.format(value, "fullDate")} です` : "日付を選択してください",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `時間を選択してください。選択した時間は ${formattedTime ?? utils.format(value, "fullTime")} です` : "時間を選択してください",
  fieldClearLabel: "クリア",
  // Table labels
  timeTableLabel: "時間を選択",
  dateTableLabel: "日付を選択",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "年",
  month: "月",
  day: "日",
  weekDay: "平日",
  hours: "時間",
  minutes: "分",
  seconds: "秒",
  meridiem: "メリディム",
  // Common
  empty: "空"
};
var jaJP = getPickersLocalization(jaJPPickers);

// node_modules/@mui/x-date-pickers/locales/koKR.js
var views11 = {
  hours: "시간을",
  minutes: "분을",
  seconds: "초를",
  meridiem: "오전/오후를"
};
var koKRPickers = {
  // Calendar navigation
  previousMonth: "이전 달",
  nextMonth: "다음 달",
  // View navigation
  openPreviousView: "이전 화면 보기",
  openNextView: "다음 화면 보기",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "연도 선택 화면에서 달력 화면으로 전환하기" : "달력 화면에서 연도 선택 화면으로 전환하기",
  // DateRange labels
  start: "시작",
  end: "종료",
  startDate: "시작 날짜",
  startTime: "시작 시간",
  endDate: "종료 날짜",
  endTime: "종료 시간",
  // Action bar
  cancelButtonLabel: "취소",
  clearButtonLabel: "초기화",
  okButtonLabel: "확인",
  todayButtonLabel: "오늘",
  // Toolbar titles
  datePickerToolbarTitle: "날짜 선택하기",
  dateTimePickerToolbarTitle: "날짜 & 시간 선택하기",
  timePickerToolbarTitle: "시간 선택하기",
  dateRangePickerToolbarTitle: "날짜 범위 선택하기",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `${views11[view]} 선택하세요. ${!formattedTime && (time === null || !utils.isValid(time)) ? "시간을 선택하지 않았습니다." : `현재 선택된 시간은 ${formattedTime ?? utils.format(time, "fullTime")}입니다.`}`,
  hoursClockNumberText: (hours) => `${hours}시`,
  minutesClockNumberText: (minutes) => `${minutes}분`,
  secondsClockNumberText: (seconds) => `${seconds}초`,
  // Digital clock labels
  selectViewText: (view) => `${views11[view]} 선택하기`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "주 번호",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `${weekNumber}번째 주`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `날짜를 선택하세요. 현재 선택된 날짜는 ${formattedDate ?? utils.format(value, "fullDate")}입니다.` : "날짜를 선택하세요",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `시간을 선택하세요. 현재 선택된 시간은 ${formattedTime ?? utils.format(value, "fullTime")}입니다.` : "시간을 선택하세요",
  fieldClearLabel: "지우기",
  // Table labels
  timeTableLabel: "선택한 시간",
  dateTableLabel: "선택한 날짜",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "년",
  month: "월",
  day: "일",
  weekDay: "평일",
  hours: "시간",
  minutes: "분",
  seconds: "초",
  // meridiem: 'Meridiem',
  // Common
  empty: "공란"
};
var koKR = getPickersLocalization(koKRPickers);

// node_modules/@mui/x-date-pickers/locales/kzKZ.js
var timeViews9 = {
  hours: "Сағатты",
  minutes: "Минутты",
  seconds: "Секундты",
  meridiem: "Меридием"
};
var kzKZPickers = {
  // Calendar navigation
  previousMonth: "Алдыңғы ай",
  nextMonth: "Келесі ай",
  // View navigation
  openPreviousView: "Алдыңғы көріністі ашу",
  openNextView: "Келесі көріністі ашу",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "жылдық көріністі ашу, күнтізбе көрінісіне ауысу" : "күнтізбе көрінісін ашу, жылдық көрінісіне ауысу",
  // DateRange labels
  start: "Бастау",
  end: "Cоңы",
  // startDate: 'Start date',
  // startTime: 'Start time',
  // endDate: 'End date',
  // endTime: 'End time',
  // Action bar
  cancelButtonLabel: "Бас тарту",
  clearButtonLabel: "Тазарту",
  okButtonLabel: "Ок",
  todayButtonLabel: "Бүгін",
  // Toolbar titles
  datePickerToolbarTitle: "Күнді таңдау",
  dateTimePickerToolbarTitle: "Күн мен уақытты таңдау",
  timePickerToolbarTitle: "Уақытты таңдау",
  dateRangePickerToolbarTitle: "Кезеңді таңдаңыз",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `${timeViews9[view]} таңдау. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Уақыт таңдалмаған" : `Таңдалған уақыт ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} сағат`,
  minutesClockNumberText: (minutes) => `${minutes} минут`,
  secondsClockNumberText: (seconds) => `${seconds} секунд`,
  // Digital clock labels
  selectViewText: (view) => `${timeViews9[view]} таңдау`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Апта нөмірі",
  calendarWeekNumberHeaderText: "№",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Апта ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Күнді таңдаңыз, таңдалған күн ${formattedDate ?? utils.format(value, "fullDate")}` : "Күнді таңдаңыз",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Уақытты таңдаңыз, таңдалған уақыт ${formattedTime ?? utils.format(value, "fullTime")}` : "Уақытты таңдаңыз",
  // fieldClearLabel: 'Clear',
  // Table labels
  timeTableLabel: "уақытты таңдау",
  dateTableLabel: "күнді таңдау",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Ж".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "AAAA" : "AA",
  fieldDayPlaceholder: () => "КК",
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => "сс",
  fieldMinutesPlaceholder: () => "мм",
  fieldSecondsPlaceholder: () => "сс",
  fieldMeridiemPlaceholder: () => "(т|к)"
  // View names
  // year: 'Year',
  // month: 'Month',
  // day: 'Day',
  // weekDay: 'Week day',
  // hours: 'Hours',
  // minutes: 'Minutes',
  // seconds: 'Seconds',
  // meridiem: 'Meridiem',
  // Common
  // empty: 'Empty',
};
var kzKZ = getPickersLocalization(kzKZPickers);

// node_modules/@mui/x-date-pickers/locales/mk.js
var mkPickers = {
  // Calendar navigation
  previousMonth: "Предходен месец",
  nextMonth: "Следен месец",
  // View navigation
  openPreviousView: "отвори претходен приказ",
  openNextView: "отвори следен приказ",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "годишен приказ, отвори календарски приказ" : "календарски приказ, отвори годишен приказ",
  // DateRange labels
  start: "Почеток",
  end: "Крај",
  // startDate: 'Start date',
  // startTime: 'Start time',
  // endDate: 'End date',
  // endTime: 'End time',
  // Action bar
  cancelButtonLabel: "Откажи",
  clearButtonLabel: "Избриши",
  okButtonLabel: "OK",
  todayButtonLabel: "Денес",
  // Toolbar titles
  datePickerToolbarTitle: "Избери датум",
  dateTimePickerToolbarTitle: "Избери датум и време",
  timePickerToolbarTitle: "Избери време",
  dateRangePickerToolbarTitle: "Избери временски опсег",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Select ${view}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Нема избрано време" : `Избраното време е ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} часа`,
  minutesClockNumberText: (minutes) => `${minutes} минути`,
  secondsClockNumberText: (seconds) => `${seconds} секунди`,
  // Digital clock labels
  selectViewText: (view) => `Избери ${view}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Недела број",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Недела ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Избери датум, избраниот датум е ${formattedDate ?? utils.format(value, "fullDate")}` : "Избери датум",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Избери време, избраното време е ${formattedTime ?? utils.format(value, "fullTime")}` : "Избери време",
  fieldClearLabel: "Избриши",
  // Table labels
  timeTableLabel: "одбери време",
  dateTableLabel: "одбери датум",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Г".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "ДД",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "чч",
  fieldMinutesPlaceholder: () => "мм",
  fieldSecondsPlaceholder: () => "сс",
  fieldMeridiemPlaceholder: () => "aa"
  // View names
  // year: 'Year',
  // month: 'Month',
  // day: 'Day',
  // weekDay: 'Week day',
  // hours: 'Hours',
  // minutes: 'Minutes',
  // seconds: 'Seconds',
  // meridiem: 'Meridiem',
  // Common
  // empty: 'Empty',
};
var mk = getPickersLocalization(mkPickers);

// node_modules/@mui/x-date-pickers/locales/nbNO.js
var timeViews10 = {
  hours: "timer",
  minutes: "minutter",
  seconds: "sekunder",
  meridiem: "meridiem"
};
var nbNOPickers = {
  // Calendar navigation
  previousMonth: "Forrige måned",
  nextMonth: "Neste måned",
  // View navigation
  openPreviousView: "Åpne forrige visning",
  openNextView: "Åpne neste visning",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "årsvisning er åpen, bytt til kalendervisning" : "kalendervisning er åpen, bytt til årsvisning",
  // DateRange labels
  start: "Start",
  end: "Slutt",
  // startDate: 'Start date',
  // startTime: 'Start time',
  // endDate: 'End date',
  // endTime: 'End time',
  // Action bar
  cancelButtonLabel: "Avbryt",
  clearButtonLabel: "Fjern",
  okButtonLabel: "OK",
  todayButtonLabel: "I dag",
  // Toolbar titles
  datePickerToolbarTitle: "Velg dato",
  dateTimePickerToolbarTitle: "Velg dato & klokkeslett",
  timePickerToolbarTitle: "Velg klokkeslett",
  dateRangePickerToolbarTitle: "Velg datoperiode",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Velg ${timeViews10[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Ingen tid valgt" : `Valgt tid er ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} timer`,
  minutesClockNumberText: (minutes) => `${minutes} minutter`,
  secondsClockNumberText: (seconds) => `${seconds} sekunder`,
  // Digital clock labels
  selectViewText: (view) => `Velg ${timeViews10[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Ukenummer",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Uke ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Velg dato, valgt dato er ${formattedDate ?? utils.format(value, "fullDate")}` : "Velg dato",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Velg tid, valgt tid er ${formattedTime ?? utils.format(value, "fullTime")}` : "Velg tid",
  // fieldClearLabel: 'Clear',
  // Table labels
  timeTableLabel: "velg tid",
  dateTableLabel: "velg dato",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Å".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "tt",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
  // View names
  // year: 'Year',
  // month: 'Month',
  // day: 'Day',
  // weekDay: 'Week day',
  // hours: 'Hours',
  // minutes: 'Minutes',
  // seconds: 'Seconds',
  // meridiem: 'Meridiem',
  // Common
  // empty: 'Empty',
};
var nbNO = getPickersLocalization(nbNOPickers);

// node_modules/@mui/x-date-pickers/locales/nlNL.js
var timeViews11 = {
  hours: "uren",
  minutes: "minuten",
  seconds: "seconden",
  meridiem: "meridium"
};
var nlNLPickers = {
  // Calendar navigation
  previousMonth: "Vorige maand",
  nextMonth: "Volgende maand",
  // View navigation
  openPreviousView: "Open vorige view",
  openNextView: "Open volgende view",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "jaarweergave is geopend, schakel over naar kalenderweergave" : "kalenderweergave is geopend, switch naar jaarweergave",
  // DateRange labels
  start: "Start",
  end: "Einde",
  startDate: "Start datum",
  startTime: "Start tijd",
  endDate: "Eind datum",
  endTime: "Eind tijd",
  // Action bar
  cancelButtonLabel: "Annuleren",
  clearButtonLabel: "Resetten",
  okButtonLabel: "OK",
  todayButtonLabel: "Vandaag",
  // Toolbar titles
  datePickerToolbarTitle: "Selecteer datum",
  dateTimePickerToolbarTitle: "Selecteer datum & tijd",
  timePickerToolbarTitle: "Selecteer tijd",
  dateRangePickerToolbarTitle: "Selecteer datumbereik",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Selecteer ${timeViews11[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Geen tijd geselecteerd" : `Geselecteerde tijd is ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} uren`,
  minutesClockNumberText: (minutes) => `${minutes} minuten`,
  secondsClockNumberText: (seconds) => `${seconds} seconden`,
  // Digital clock labels
  selectViewText: (view) => `Selecteer ${timeViews11[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Weeknummer",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Week ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Kies datum, geselecteerde datum is ${formattedDate ?? utils.format(value, "fullDate")}` : "Kies datum",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Kies tijd, geselecteerde tijd is ${formattedTime ?? utils.format(value, "fullTime")}` : "Kies tijd",
  fieldClearLabel: "Wissen",
  // Table labels
  timeTableLabel: "kies tijd",
  dateTableLabel: "kies datum",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Jaar",
  month: "Maand",
  day: "Dag",
  weekDay: "Weekdag",
  hours: "Uren",
  minutes: "Minuten",
  seconds: "Seconden",
  meridiem: "Middag",
  // Common
  empty: "Legen"
};
var nlNL = getPickersLocalization(nlNLPickers);

// node_modules/@mui/x-date-pickers/locales/nnNO.js
var timeViews12 = {
  hours: "timar",
  minutes: "minuttar",
  seconds: "sekundar",
  meridiem: "meridiem"
};
var nnNOPickers = {
  // Calendar navigation
  previousMonth: "Forrige månad",
  nextMonth: "Neste månad",
  // View navigation
  openPreviousView: "Opne forrige visning",
  openNextView: "Opne neste visning",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "årsvisning er open, byt til kalendervisning" : "kalendervisning er open, byt til årsvisning",
  // DateRange labels
  start: "Start",
  end: "Slutt",
  startDate: "Startdato",
  startTime: "Starttid",
  endDate: "Sluttdato",
  endTime: "Slutttid",
  // Action bar
  cancelButtonLabel: "Avbryt",
  clearButtonLabel: "Fjern",
  okButtonLabel: "OK",
  todayButtonLabel: "I dag",
  // Toolbar titles
  datePickerToolbarTitle: "Vel dato",
  dateTimePickerToolbarTitle: "Vel dato & klokkeslett",
  timePickerToolbarTitle: "Vel klokkeslett",
  dateRangePickerToolbarTitle: "Vel datoperiode",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Vel ${timeViews12[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Ingen tid vald" : `Vald tid er ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} timar`,
  minutesClockNumberText: (minutes) => `${minutes} minuttar`,
  secondsClockNumberText: (seconds) => `${seconds} sekundar`,
  // Digital clock labels
  selectViewText: (view) => `Vel ${timeViews12[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Vekenummer",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Veke ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Vel dato, vald dato er ${formattedDate ?? utils.format(value, "fullDate")}` : "Vel dato",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Vel tid, vald tid er ${formattedTime ?? utils.format(value, "fullTime")}` : "Vel tid",
  fieldClearLabel: "Fjern verdi",
  // Table labels
  timeTableLabel: "vel tid",
  dateTableLabel: "vel dato",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Å".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "tt",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "År",
  month: "Månad",
  day: "Dag",
  weekDay: "Vekedag",
  hours: "Timar",
  minutes: "Minuttar",
  seconds: "Sekundar",
  meridiem: "Meridiem",
  // Common
  empty: "Tom"
};
var nnNO = getPickersLocalization(nnNOPickers);

// node_modules/@mui/x-date-pickers/locales/plPL.js
var timeViews13 = {
  hours: "godzin",
  minutes: "minut",
  seconds: "sekund",
  meridiem: "popołudnie"
};
var plPLPickers = {
  // Calendar navigation
  previousMonth: "Poprzedni miesiąc",
  nextMonth: "Następny miesiąc",
  // View navigation
  openPreviousView: "Otwórz poprzedni widok",
  openNextView: "Otwórz następny widok",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "otwarty jest widok roku, przełącz na widok kalendarza" : "otwarty jest widok kalendarza, przełącz na widok roku",
  // DateRange labels
  start: "Początek",
  end: "Koniec",
  // startDate: 'Start date',
  // startTime: 'Start time',
  // endDate: 'End date',
  // endTime: 'End time',
  // Action bar
  cancelButtonLabel: "Anuluj",
  clearButtonLabel: "Wyczyść",
  okButtonLabel: "Zatwierdź",
  todayButtonLabel: "Dzisiaj",
  // Toolbar titles
  datePickerToolbarTitle: "Wybierz datę",
  dateTimePickerToolbarTitle: "Wybierz datę i czas",
  timePickerToolbarTitle: "Wybierz czas",
  dateRangePickerToolbarTitle: "Wybierz zakres dat",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Wybierz ${timeViews13[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Nie wybrano czasu" : `Wybrany czas to ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} godzin`,
  minutesClockNumberText: (minutes) => `${minutes} minut`,
  secondsClockNumberText: (seconds) => `${seconds} sekund`,
  // Digital clock labels
  selectViewText: (view) => `Wybierz ${timeViews13[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Numer tygodnia",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Tydzień ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => value != null && utils.isValid(value) ? `Wybierz datę, obecnie wybrana data to ${formattedDate ?? utils.format(value, "fullDate")}` : "Wybierz datę",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Wybierz czas, obecnie wybrany czas to ${formattedTime ?? utils.format(value, "fullTime")}` : "Wybierz czas",
  // fieldClearLabel: 'Clear',
  // Table labels
  timeTableLabel: "wybierz czas",
  dateTableLabel: "wybierz datę"
  // Field section placeholders
  // fieldYearPlaceholder: params => 'Y'.repeat(params.digitAmount),
  // fieldMonthPlaceholder: params => params.contentType === 'letter' ? 'MMMM' : 'MM',
  // fieldDayPlaceholder: () => 'DD',
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  // fieldHoursPlaceholder: () => 'hh',
  // fieldMinutesPlaceholder: () => 'mm',
  // fieldSecondsPlaceholder: () => 'ss',
  // fieldMeridiemPlaceholder: () => 'aa',
  // View names
  // year: 'Year',
  // month: 'Month',
  // day: 'Day',
  // weekDay: 'Week day',
  // hours: 'Hours',
  // minutes: 'Minutes',
  // seconds: 'Seconds',
  // meridiem: 'Meridiem',
  // Common
  // empty: 'Empty',
};
var plPL = getPickersLocalization(plPLPickers);

// node_modules/@mui/x-date-pickers/locales/ptBR.js
var timeViews14 = {
  hours: "horas",
  minutes: "minutos",
  seconds: "segundos",
  meridiem: "meridiano"
};
var ptBRPickers = {
  // Calendar navigation
  previousMonth: "Mês anterior",
  nextMonth: "Próximo mês",
  // View navigation
  openPreviousView: "Abrir seleção anterior",
  openNextView: "Abrir próxima seleção",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "Seleção de ano está aberta, alternando para seleção de calendário" : "Seleção de calendários está aberta, alternando para seleção de ano",
  // DateRange labels
  start: "Início",
  end: "Fim",
  startDate: "Data de início",
  startTime: "Hora de início",
  endDate: "Data de Término",
  endTime: "Hora de Término",
  // Action bar
  cancelButtonLabel: "Cancelar",
  clearButtonLabel: "Limpar",
  okButtonLabel: "OK",
  todayButtonLabel: "Hoje",
  // Toolbar titles
  datePickerToolbarTitle: "Selecione a data",
  dateTimePickerToolbarTitle: "Selecione data e hora",
  timePickerToolbarTitle: "Selecione a hora",
  dateRangePickerToolbarTitle: "Selecione o intervalo entre datas",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Selecione ${timeViews14[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Hora não selecionada" : `Selecionado a hora ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} horas`,
  minutesClockNumberText: (minutes) => `${minutes} minutos`,
  secondsClockNumberText: (seconds) => `${seconds} segundos`,
  // Digital clock labels
  selectViewText: (view) => `Selecione ${timeViews14[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Número da semana",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Semana ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Escolha uma data, data selecionada ${formattedDate ?? utils.format(value, "fullDate")}` : "Escolha uma data",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Escolha uma hora, hora selecionada ${formattedTime ?? utils.format(value, "fullTime")}` : "Escolha uma hora",
  fieldClearLabel: "Limpar valor",
  // Table labels
  timeTableLabel: "escolha uma hora",
  dateTableLabel: "escolha uma data",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "A".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "SSSS" : "SS",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Ano",
  month: "Mês",
  day: "Dia",
  weekDay: "Dia da Semana",
  hours: "Horas",
  minutes: "Minutos",
  seconds: "Segundos",
  meridiem: "Meio dia",
  // Common
  empty: "Vazio"
};
var ptBR = getPickersLocalization(ptBRPickers);

// node_modules/@mui/x-date-pickers/locales/ptPT.js
var timeViews15 = {
  hours: "horas",
  minutes: "minutos",
  seconds: "segundos",
  meridiem: "meridiano"
};
var ptPTPickers = {
  // Calendar navigation
  previousMonth: "Mês anterior",
  nextMonth: "Próximo mês",
  // View navigation
  openPreviousView: "Abrir seleção anterior",
  openNextView: "Abrir próxima seleção",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "A seleção do ano está aberta, altere para a seleção do calendário" : "A seleção do calendários está aberta, altere para a seleção do ano",
  // DateRange labels
  start: "Início",
  end: "Fim",
  startDate: "Data de início",
  startTime: "Hora de início",
  endDate: "Data de fim",
  endTime: "Hora de fim",
  // Action bar
  cancelButtonLabel: "Cancelar",
  clearButtonLabel: "Limpar",
  okButtonLabel: "OK",
  todayButtonLabel: "Hoje",
  // Toolbar titles
  datePickerToolbarTitle: "Selecione a data",
  dateTimePickerToolbarTitle: "Selecione a data e a hora",
  timePickerToolbarTitle: "Selecione a hora",
  dateRangePickerToolbarTitle: "Selecione o intervalo de datas",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Selecione ${timeViews15[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Hora não selecionada" : `Selecionado a hora ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} horas`,
  minutesClockNumberText: (minutes) => `${minutes} minutos`,
  secondsClockNumberText: (seconds) => `${seconds} segundos`,
  // Digital clock labels
  selectViewText: (view) => `Selecione ${timeViews15[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Número da semana",
  calendarWeekNumberHeaderText: "N.º",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Semana ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Escolha uma data, a data selecionada é ${formattedDate ?? utils.format(value, "fullDate")}` : "Escolha uma data",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Escolha uma hora, a hora selecionada é ${formattedTime ?? utils.format(value, "fullTime")}` : "Escolha uma hora",
  fieldClearLabel: "Limpar valor",
  // Table labels
  timeTableLabel: "escolha uma hora",
  dateTableLabel: "escolha uma data",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "A".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "SSSS" : "SS",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Ano",
  month: "Mês",
  day: "Dia",
  weekDay: "Dia da Semana",
  hours: "Horas",
  minutes: "Minutos",
  seconds: "Segundos",
  meridiem: "Meridiano",
  // Common
  empty: "Vazio"
};
var ptPT = getPickersLocalization(ptPTPickers);

// node_modules/@mui/x-date-pickers/locales/roRO.js
var timeViews16 = {
  hours: "Ore",
  minutes: "Minute",
  seconds: "Secunde",
  meridiem: "Meridiane"
};
var roROPickers = {
  // Calendar navigation
  previousMonth: "Luna anterioară",
  nextMonth: "Luna următoare",
  // View navigation
  openPreviousView: "Deschideți vizualizarea anterioară",
  openNextView: "Deschideți vizualizarea următoare",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "Vizualizarea anuală este deschisă, comutați la vizualizarea calendarului" : "Vizualizarea calendarului este deschisă, comutați la vizualizarea anuală",
  // DateRange labels
  start: "Început",
  end: "Sfârșit",
  // startDate: 'Start date',
  // startTime: 'Start time',
  // endDate: 'End date',
  // endTime: 'End time',
  // Action bar
  cancelButtonLabel: "Anulare",
  clearButtonLabel: "Ștergere",
  okButtonLabel: "OK",
  todayButtonLabel: "Astăzi",
  // Toolbar titles
  datePickerToolbarTitle: "Selectați data",
  dateTimePickerToolbarTitle: "Selectați data și ora",
  timePickerToolbarTitle: "Selectați ora",
  dateRangePickerToolbarTitle: "Selectați intervalul de date",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Selectați ${timeViews16[view] ?? view}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Nicio oră selectată" : `Ora selectată este ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} ${timeViews16.hours}`,
  minutesClockNumberText: (minutes) => `${minutes} ${timeViews16.minutes}`,
  secondsClockNumberText: (seconds) => `${seconds}  ${timeViews16.seconds}`,
  // Digital clock labels
  selectViewText: (view) => `Selectați ${timeViews16[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Număr săptămână",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Săptămâna ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Selectați data, data selectată este ${formattedDate ?? utils.format(value, "fullDate")}` : "Selectați data",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Selectați ora, ora selectată este ${formattedTime ?? utils.format(value, "fullTime")}` : "Selectați ora",
  fieldClearLabel: "Golire conținut",
  // Table labels
  timeTableLabel: "Selectați ora",
  dateTableLabel: "Selectați data",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "A".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "LLLL" : "LL",
  fieldDayPlaceholder: () => "ZZ",
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
  // View names
  // year: 'Year',
  // month: 'Month',
  // day: 'Day',
  // weekDay: 'Week day',
  // hours: 'Hours',
  // minutes: 'Minutes',
  // seconds: 'Seconds',
  // meridiem: 'Meridiem',
  // Common
  // empty: 'Empty',
};
var roRO = getPickersLocalization(roROPickers);

// node_modules/@mui/x-date-pickers/locales/ruRU.js
var timeViews17 = {
  hours: "часы",
  minutes: "минуты",
  seconds: "секунды",
  meridiem: "меридием"
};
var ruRUPickers = {
  // Calendar navigation
  previousMonth: "Предыдущий месяц",
  nextMonth: "Следующий месяц",
  // View navigation
  openPreviousView: "Открыть предыдущий вид",
  openNextView: "Открыть следующий вид",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "открыт годовой вид, переключить на календарный вид" : "открыт календарный вид, переключить на годовой вид",
  // DateRange labels
  start: "Начало",
  end: "Конец",
  startDate: "Начальная дата",
  startTime: "Начальное время",
  endDate: "Конечная дата",
  endTime: "Конечное время",
  // Action bar
  cancelButtonLabel: "Отмена",
  clearButtonLabel: "Очистить",
  okButtonLabel: "Ок",
  todayButtonLabel: "Сегодня",
  // Toolbar titles
  datePickerToolbarTitle: "Выбрать дату",
  dateTimePickerToolbarTitle: "Выбрать дату и время",
  timePickerToolbarTitle: "Выбрать время",
  dateRangePickerToolbarTitle: "Выбрать период",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Выбрать ${timeViews17[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Время не выбрано" : `Выбрано время ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} часов`,
  minutesClockNumberText: (minutes) => `${minutes} минут`,
  secondsClockNumberText: (seconds) => `${seconds} секунд`,
  // Digital clock labels
  selectViewText: (view) => `Выбрать ${timeViews17[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Номер недели",
  calendarWeekNumberHeaderText: "№",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Неделя ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Выберите дату, выбрана дата ${formattedDate ?? utils.format(value, "fullDate")}` : "Выберите дату",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Выберите время, выбрано время ${formattedTime ?? utils.format(value, "fullTime")}` : "Выберите время",
  fieldClearLabel: "Очистить значение",
  // Table labels
  timeTableLabel: "выбрать время",
  dateTableLabel: "выбрать дату",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Г".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "ММММ" : "ММ",
  fieldDayPlaceholder: () => "ДД",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "ДДДД" : "ДД",
  fieldHoursPlaceholder: () => "чч",
  fieldMinutesPlaceholder: () => "мм",
  fieldSecondsPlaceholder: () => "сс",
  fieldMeridiemPlaceholder: () => "(д|п)п",
  // View names
  year: "Год",
  month: "Месяц",
  day: "День",
  weekDay: "День недели",
  hours: "Часы",
  minutes: "Минуты",
  seconds: "Секунды",
  meridiem: "Меридием",
  // Common
  empty: "Пустой"
};
var ruRU = getPickersLocalization(ruRUPickers);

// node_modules/@mui/x-date-pickers/locales/skSK.js
var timeViews18 = {
  hours: "Hodiny",
  minutes: "Minúty",
  seconds: "Sekundy",
  meridiem: "Popoludnie"
};
var skSKPickers = {
  // Calendar navigation
  previousMonth: "Ďalší mesiac",
  nextMonth: "Predchádzajúci mesiac",
  // View navigation
  openPreviousView: "Otvoriť predchádzajúce zobrazenie",
  openNextView: "Otvoriť ďalšie zobrazenie",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "ročné zobrazenie otvorené, prepnite do zobrazenia kalendára" : "zobrazenie kalendára otvorené, prepnite do zobrazenia roka",
  // DateRange labels
  start: "Začiatok",
  end: "Koniec",
  // startDate: 'Start date',
  // startTime: 'Start time',
  // endDate: 'End date',
  // endTime: 'End time',
  // Action bar
  cancelButtonLabel: "Zrušiť",
  clearButtonLabel: "Vymazať",
  okButtonLabel: "Potvrdiť",
  todayButtonLabel: "Dnes",
  // Toolbar titles
  datePickerToolbarTitle: "Vyberte dátum",
  dateTimePickerToolbarTitle: "Vyberte dátum a čas",
  timePickerToolbarTitle: "Vyberte čas",
  dateRangePickerToolbarTitle: "Vyberete rozmedzie dátumov",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `${timeViews18[view] ?? view} vybraný. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Nie je vybraný čas" : `Vybraný čas je ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} hodín`,
  minutesClockNumberText: (minutes) => `${minutes} minút`,
  secondsClockNumberText: (seconds) => `${seconds} sekúnd`,
  // Digital clock labels
  selectViewText: (view) => `Vyberte ${timeViews18[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Týždeň v roku",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `${weekNumber} týždeň v roku`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Vyberte dátum, vybraný dátum je ${formattedDate ?? utils.format(value, "fullDate")}` : "Vyberte dátum",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Vyberte čas, vybraný čas je ${formattedTime ?? utils.format(value, "fullTime")}` : "Vyberte čas",
  // fieldClearLabel: 'Clear',
  // Table labels
  timeTableLabel: "vyberte čas",
  dateTableLabel: "vyberte dátum",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
  // View names
  // year: 'Year',
  // month: 'Month',
  // day: 'Day',
  // weekDay: 'Week day',
  // hours: 'Hours',
  // minutes: 'Minutes',
  // seconds: 'Seconds',
  // meridiem: 'Meridiem',
  // Common
  // empty: 'Empty',
};
var skSK = getPickersLocalization(skSKPickers);

// node_modules/@mui/x-date-pickers/locales/svSE.js
var timeViews19 = {
  hours: "timmar",
  minutes: "minuter",
  seconds: "sekunder",
  meridiem: "meridiem"
};
var svSEPickers = {
  // Calendar navigation
  previousMonth: "Föregående månad",
  nextMonth: "Nästa månad",
  // View navigation
  openPreviousView: "Öppna föregående vy",
  openNextView: "Öppna nästa vy",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "årsvyn är öppen, byt till kalendervy" : "kalendervyn är öppen, byt till årsvy",
  // DateRange labels
  start: "Start",
  end: "Slut",
  startDate: "Startdatum",
  startTime: "Starttid",
  endDate: "Slutdatum",
  endTime: "Sluttid",
  // Action bar
  cancelButtonLabel: "Avbryt",
  clearButtonLabel: "Rensa",
  okButtonLabel: "OK",
  todayButtonLabel: "Idag",
  // Toolbar titles
  datePickerToolbarTitle: "Välj datum",
  dateTimePickerToolbarTitle: "Välj datum & tid",
  timePickerToolbarTitle: "Välj tid",
  dateRangePickerToolbarTitle: "Välj datumintervall",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Välj ${timeViews19[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Ingen tid vald" : `Vald tid är ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} timmar`,
  minutesClockNumberText: (minutes) => `${minutes} minuter`,
  secondsClockNumberText: (seconds) => `${seconds} sekunder`,
  // Digital clock labels
  selectViewText: (view) => `Välj ${timeViews19[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Vecka nummer",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Vecka ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Välj datum, valt datum är ${formattedDate ?? utils.format(value, "fullDate")}` : "Välj datum",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Välj tid, vald tid är ${formattedTime ?? utils.format(value, "fullTime")}` : "Välj tid",
  fieldClearLabel: "Rensa värde",
  // Table labels
  timeTableLabel: "välj tid",
  dateTableLabel: "välj datum",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Å".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "tt",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "År",
  month: "Månad",
  day: "Dag",
  weekDay: "Veckodag",
  hours: "Timmar",
  minutes: "Minuter",
  seconds: "Sekunder",
  meridiem: "Meridiem",
  // Common
  empty: "Tom"
};
var svSE = getPickersLocalization(svSEPickers);

// node_modules/@mui/x-date-pickers/locales/trTR.js
var timeViews20 = {
  hours: "saat",
  minutes: "dakika",
  seconds: "saniye",
  meridiem: "öğleden sonra"
};
var trTRPickers = {
  // Calendar navigation
  previousMonth: "Önceki ay",
  nextMonth: "Sonraki ay",
  // View navigation
  openPreviousView: "Sonraki görünüm",
  openNextView: "Önceki görünüm",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "yıl görünümü açık, takvim görünümüne geç" : "takvim görünümü açık, yıl görünümüne geç",
  // DateRange labels
  start: "Başlangıç",
  end: "Bitiş",
  // startDate: 'Start date',
  // startTime: 'Start time',
  // endDate: 'End date',
  // endTime: 'End time',
  // Action bar
  cancelButtonLabel: "iptal",
  clearButtonLabel: "Temizle",
  okButtonLabel: "Tamam",
  todayButtonLabel: "Bugün",
  // Toolbar titles
  datePickerToolbarTitle: "Tarih Seç",
  dateTimePickerToolbarTitle: "Tarih & Saat seç",
  timePickerToolbarTitle: "Saat seç",
  dateRangePickerToolbarTitle: "Tarih aralığı seçin",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `${timeViews20[view]} seç.  ${!formattedTime && (time === null || !utils.isValid(time)) ? "Zaman seçilmedi" : `Seçilen zaman: ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} saat`,
  minutesClockNumberText: (minutes) => `${minutes} dakika`,
  secondsClockNumberText: (seconds) => `${seconds} saniye`,
  // Digital clock labels
  selectViewText: (view) => `Seç ${timeViews20[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Hafta numarası",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Hafta ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Tarih seçin, seçilen tarih: ${formattedDate ?? utils.format(value, "fullDate")}` : "Tarih seç",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Saat seçin, seçilen saat: ${formattedTime ?? utils.format(value, "fullTime")}` : "Saat seç",
  // fieldClearLabel: 'Clear',
  // Table labels
  timeTableLabel: "saat seç",
  dateTableLabel: "tarih seç",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "AAA" : "AA",
  fieldDayPlaceholder: () => "GG",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "HHH" : "HH",
  fieldHoursPlaceholder: () => "ss",
  fieldMinutesPlaceholder: () => "dd",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
  // View names
  // year: 'Year',
  // month: 'Month',
  // day: 'Day',
  // weekDay: 'Week day',
  // hours: 'Hours',
  // minutes: 'Minutes',
  // seconds: 'Seconds',
  // meridiem: 'Meridiem',
  // Common
  // empty: 'Empty',
};
var trTR = getPickersLocalization(trTRPickers);

// node_modules/@mui/x-date-pickers/locales/ukUA.js
var timeViews21 = {
  hours: "годин",
  minutes: "хвилин",
  seconds: "секунд",
  meridiem: "Південь"
};
var ukUAPickers = {
  // Calendar navigation
  previousMonth: "Попередній місяць",
  nextMonth: "Наступний місяць",
  // View navigation
  openPreviousView: "Відкрити попередній вигляд",
  openNextView: "Відкрити наступний вигляд",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "річний вигляд відкрито, перейти до календарного вигляду" : "календарний вигляд відкрито, перейти до річного вигляду",
  // DateRange labels
  start: "Початок",
  end: "Кінець",
  startDate: "День початку",
  startTime: "Час початку",
  endDate: "День закінчення",
  endTime: "Час закінчення",
  // Action bar
  cancelButtonLabel: "Відміна",
  clearButtonLabel: "Очистити",
  okButtonLabel: "OK",
  todayButtonLabel: "Сьогодні",
  // Toolbar titles
  datePickerToolbarTitle: "Вибрати дату",
  dateTimePickerToolbarTitle: "Вибрати дату і час",
  timePickerToolbarTitle: "Вибрати час",
  dateRangePickerToolbarTitle: "Вибрати календарний період",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Вибрати ${timeViews21[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Час не вибраний" : `Вибрано час ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} годин`,
  minutesClockNumberText: (minutes) => `${minutes} хвилин`,
  secondsClockNumberText: (seconds) => `${seconds} секунд`,
  // Digital clock labels
  selectViewText: (view) => `Вибрати ${timeViews21[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Номер тижня",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Тиждень ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Оберіть дату, обрана дата  ${formattedDate ?? utils.format(value, "fullDate")}` : "Оберіть дату",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Оберіть час, обраний час  ${formattedTime ?? utils.format(value, "fullTime")}` : "Оберіть час",
  fieldClearLabel: "Очистити дані",
  // Table labels
  timeTableLabel: "оберіть час",
  dateTableLabel: "оберіть дату",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Рік",
  month: "Місяць",
  day: "День",
  weekDay: "День тижня",
  hours: "Годин",
  minutes: "Хвилин",
  seconds: "Секунд",
  meridiem: "Меридіем",
  // Common
  empty: "Порожній"
};
var ukUA = getPickersLocalization(ukUAPickers);

// node_modules/@mui/x-date-pickers/locales/urPK.js
var timeViews22 = {
  hours: "گھنٹے",
  minutes: "منٹ",
  seconds: "سیکنڈ",
  meridiem: "میریڈیم"
};
var urPKPickers = {
  // Calendar navigation
  previousMonth: "پچھلا مہینہ",
  nextMonth: "اگلا مہینہ",
  // View navigation
  openPreviousView: "پچھلا ویو کھولیں",
  openNextView: "اگلا ویو کھولیں",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "سال والا ویو کھلا ہے۔ کیلنڈر والا ویو کھولیں" : "کیلنڈر والا ویو کھلا ہے۔ سال والا ویو کھولیں",
  // DateRange labels
  start: "شروع",
  end: "ختم",
  // startDate: 'Start date',
  // startTime: 'Start time',
  // endDate: 'End date',
  // endTime: 'End time',
  // Action bar
  cancelButtonLabel: "کینسل",
  clearButtonLabel: "کلئیر",
  okButtonLabel: "اوکے",
  todayButtonLabel: "آج",
  // Toolbar titles
  datePickerToolbarTitle: "تاریخ منتخب کریں",
  dateTimePickerToolbarTitle: "تاریخ اور وقت منتخب کریں",
  timePickerToolbarTitle: "وقت منتخب کریں",
  dateRangePickerToolbarTitle: "تاریخوں کی رینج منتخب کریں",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `${timeViews22[view]} منتخب کریں ${!formattedTime && (time === null || !utils.isValid(time)) ? "کوئی وقت منتخب نہیں" : `منتخب وقت ہے ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} گھنٹے`,
  minutesClockNumberText: (minutes) => `${minutes} منٹ`,
  secondsClockNumberText: (seconds) => `${seconds} سیکنڈ`,
  // Digital clock labels
  selectViewText: (view) => `${timeViews22[view]} منتخب کریں`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "ہفتہ نمبر",
  calendarWeekNumberHeaderText: "نمبر",
  calendarWeekNumberAriaLabelText: (weekNumber) => `ہفتہ ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `تاریخ منتخب کریں، منتخب شدہ تاریخ ہے ${formattedDate ?? utils.format(value, "fullDate")}` : "تاریخ منتخب کریں",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `وقت منتخب کریں، منتخب شدہ وقت ہے ${formattedTime ?? utils.format(value, "fullTime")}` : "وقت منتخب کریں",
  // fieldClearLabel: 'Clear',
  // Table labels
  timeTableLabel: "وقت منتخب کریں",
  dateTableLabel: "تاریخ منتخب کریں"
  // Field section placeholders
  // fieldYearPlaceholder: params => 'Y'.repeat(params.digitAmount),
  // fieldMonthPlaceholder: params => params.contentType === 'letter' ? 'MMMM' : 'MM',
  // fieldDayPlaceholder: () => 'DD',
  // fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  // fieldHoursPlaceholder: () => 'hh',
  // fieldMinutesPlaceholder: () => 'mm',
  // fieldSecondsPlaceholder: () => 'ss',
  // fieldMeridiemPlaceholder: () => 'aa',
  // View names
  // year: 'Year',
  // month: 'Month',
  // day: 'Day',
  // weekDay: 'Week day',
  // hours: 'Hours',
  // minutes: 'Minutes',
  // seconds: 'Seconds',
  // meridiem: 'Meridiem',
  // Common
  // empty: 'Empty',
};
var urPK = getPickersLocalization(urPKPickers);

// node_modules/@mui/x-date-pickers/locales/viVN.js
var views12 = {
  hours: "giờ",
  minutes: "phút",
  seconds: "giây",
  meridiem: "buổi"
};
var viVNPickers = {
  // Calendar navigation
  previousMonth: "Tháng trước",
  nextMonth: "Tháng sau",
  // View navigation
  openPreviousView: "Mở xem trước",
  openNextView: "Mở xem sau",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "đang mở xem năm, chuyển sang xem lịch" : "đang mở xem lịch, chuyển sang xem năm",
  // DateRange labels
  start: "Bắt đầu",
  end: "Kết thúc",
  startDate: "Ngày bắt đầu",
  startTime: "Thời gian bắt đầu",
  endDate: "Ngày kết thúc",
  endTime: "Thời gian kết thúc",
  // Action bar
  cancelButtonLabel: "Hủy",
  clearButtonLabel: "Xóa",
  okButtonLabel: "OK",
  todayButtonLabel: "Hôm nay",
  // Toolbar titles
  datePickerToolbarTitle: "Chọn ngày",
  dateTimePickerToolbarTitle: "Chọn ngày và giờ",
  timePickerToolbarTitle: "Chọn giờ",
  dateRangePickerToolbarTitle: "Chọn khoảng ngày",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Chọn ${views12[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "Không có giờ được chọn" : `Giờ được chọn là ${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours} giờ`,
  minutesClockNumberText: (minutes) => `${minutes} phút`,
  secondsClockNumberText: (seconds) => `${seconds} giây`,
  // Digital clock labels
  selectViewText: (view) => `Chọn ${views12[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Số tuần",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `Tuần ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Chọn ngày, ngày đã chọn là ${formattedDate ?? utils.format(value, "fullDate")}` : "Chọn ngày",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Chọn giờ, giờ đã chọn là ${formattedTime ?? utils.format(value, "fullTime")}` : "Chọn giờ",
  fieldClearLabel: "Xóa giá trị",
  // Table labels
  timeTableLabel: "chọn giờ",
  dateTableLabel: "chọn ngày",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "Năm",
  month: "Tháng",
  day: "Ngày",
  weekDay: "Thứ",
  hours: "Giờ",
  minutes: "Phút",
  seconds: "Giây",
  meridiem: "Buổi",
  // Common
  empty: "Trống"
};
var viVN = getPickersLocalization(viVNPickers);

// node_modules/@mui/x-date-pickers/locales/zhCN.js
var views13 = {
  hours: "小时",
  minutes: "分钟",
  seconds: "秒",
  meridiem: "十二小时制"
};
var zhCNPickers = {
  // Calendar navigation
  previousMonth: "上个月",
  nextMonth: "下个月",
  // View navigation
  openPreviousView: "前一个视图",
  openNextView: "下一个视图",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "年视图已打开，切换为日历视图" : "日历视图已打开，切换为年视图",
  // DateRange labels
  start: "开始",
  end: "结束",
  startDate: "开始日期",
  startTime: "开始时间",
  endDate: "结束日期",
  endTime: "结束时间",
  // Action bar
  cancelButtonLabel: "取消",
  clearButtonLabel: "清除",
  okButtonLabel: "确认",
  todayButtonLabel: "今天",
  // Toolbar titles
  datePickerToolbarTitle: "选择日期",
  dateTimePickerToolbarTitle: "选择日期和时间",
  timePickerToolbarTitle: "选择时间",
  dateRangePickerToolbarTitle: "选择时间范围",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `选择 ${views13[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "未选择时间" : `已选择${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours}小时`,
  minutesClockNumberText: (minutes) => `${minutes}分钟`,
  secondsClockNumberText: (seconds) => `${seconds}秒`,
  // Digital clock labels
  selectViewText: (view) => `选择 ${views13[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "周数",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `第${weekNumber}周`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `选择日期，已选择${formattedDate ?? utils.format(value, "fullDate")}` : "选择日期",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `选择时间，已选择${formattedTime ?? utils.format(value, "fullTime")}` : "选择时间",
  fieldClearLabel: "清除",
  // Table labels
  timeTableLabel: "选择时间",
  dateTableLabel: "选择日期",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "年份",
  month: "月份",
  day: "日期",
  weekDay: "星期",
  hours: "时",
  minutes: "分",
  seconds: "秒",
  meridiem: "十二小时制",
  // Common
  empty: "空"
};
var zhCN = getPickersLocalization(zhCNPickers);

// node_modules/@mui/x-date-pickers/locales/zhHK.js
var views14 = {
  hours: "小時",
  minutes: "分鐘",
  seconds: "秒",
  meridiem: "子午線"
};
var zhHKPickers = {
  // Calendar navigation
  previousMonth: "上個月",
  nextMonth: "下個月",
  // View navigation
  openPreviousView: "前一個檢視表",
  openNextView: "下一個檢視表",
  calendarViewSwitchingButtonAriaLabel: (view) => view === "year" ? "年份檢視表已打開，切換以檢視日曆" : "日曆檢視表已打開，切換以檢視年份",
  // DateRange labels
  start: "開始",
  end: "結束",
  startDate: "開始日期",
  startTime: "開始時間",
  endDate: "結束日期",
  endTime: "結束時間",
  // Action bar
  cancelButtonLabel: "取消",
  clearButtonLabel: "清除",
  okButtonLabel: "確認",
  todayButtonLabel: "今日",
  // Toolbar titles
  datePickerToolbarTitle: "選擇日期",
  dateTimePickerToolbarTitle: "選擇日期和時間",
  timePickerToolbarTitle: "選擇時間",
  dateRangePickerToolbarTitle: "選擇時間範圍",
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `選擇 ${views14[view]}. ${!formattedTime && (time === null || !utils.isValid(time)) ? "未選擇時間" : `已選擇${formattedTime ?? utils.format(time, "fullTime")}`}`,
  hoursClockNumberText: (hours) => `${hours}小時`,
  minutesClockNumberText: (minutes) => `${minutes}分鐘`,
  secondsClockNumberText: (seconds) => `${seconds}秒`,
  // Digital clock labels
  selectViewText: (view) => `選擇 ${views14[view]}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "週數",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (weekNumber) => `第${weekNumber}週`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `選擇日期，已選擇${formattedDate ?? utils.format(value, "fullDate")}` : "選擇日期",
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `選擇時間，已選擇${formattedTime ?? utils.format(value, "fullTime")}` : "選擇時間",
  fieldClearLabel: "清除",
  // Table labels
  timeTableLabel: "選擇時間",
  dateTableLabel: "選擇日期",
  // Field section placeholders
  fieldYearPlaceholder: (params) => "Y".repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => params.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (params) => params.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa",
  // View names
  year: "年",
  month: "月",
  day: "日",
  weekDay: "星期",
  hours: "小時",
  minutes: "分鐘",
  seconds: "秒",
  meridiem: "子午線",
  // Common
  empty: "空值"
};
var zhHK = getPickersLocalization(zhHKPickers);
export {
  DEFAULT_LOCALE,
  beBY,
  bgBG,
  caES,
  csCZ,
  daDK,
  deDE,
  elGR,
  enUS,
  esES,
  eu,
  faIR,
  fiFI,
  frFR,
  heIL,
  hrHR,
  huHU,
  isIS,
  itIT,
  jaJP,
  koKR,
  kzKZ,
  mk,
  nbNO,
  nlNL,
  nnNO,
  plPL,
  ptBR,
  ptPT,
  roRO,
  ruRU,
  skSK,
  svSE,
  trTR,
  ukUA,
  urPK,
  viVN,
  zhCN,
  zhHK
};
//# sourceMappingURL=@mui_x-date-pickers_locales.js.map
