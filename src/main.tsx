import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App'
import Parse from 'parse/dist/parse.min.js';

const PARSE_APPLICATION_ID = 'NMDnZXDKsFhj9oOPqiq218Fujxcm51zonj0MDb3o';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'OnRxxZPB9z7A2wuz6bRnsqllF8tAPrqhXjdMKr2K';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
