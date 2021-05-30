import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      light:  '#F2C5A7' ,
      main: '#000072',
      dark:'#4D4D81',
      contrastText: '#B7B7C3' 
    },
    secondary: {
      light: '#6F6F87',
      main: '#F72163',
      dark: '#AC1768',
      contrastText: '#FFFFFF',
    },
    contrastThreshold: 3,
  
    tonalOffset: 0.2,
  },
});