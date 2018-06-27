import {fullBlack, purpleA700, limeA200, white} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const styles = {
    root:{
      display: 'flex',
      flexWrap: 'no-wrap',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      alignItems: 'center'
    },
    logo: {
      width: 50,
      height: 50
    },
    title: {
      fontSize: 16, 
      textAlign: 'center' 
    },
    gridList: {
      width: 300,
      overflowY: 'auto',
    },
    tiles: {
        width: 100,
        height: 100
    },
    menu: {
      backgroundColor: purpleA700,
      color: white
    }
  };
  
export const muiTheme = getMuiTheme({
    palette: {
      textColor: fullBlack,
      primary1Color: purpleA700,
      accent1Color: limeA200,
    },
    appBar: {
      height: 60,
      textColor: fullBlack
    },
});