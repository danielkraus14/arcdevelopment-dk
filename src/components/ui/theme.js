import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';
const arcGray = '#868686';

export default createMuiTheme({
    palette:{
        common:{
            blue: arcBlue,
            orange: arcOrange
        },
        primary:{
            main: arcBlue
        },
        secondary:{
            main: arcOrange
        }
    },
    typography:{
        body1:{
            fontSize: '1.25em',
            color: arcGray,
            fontWeight: 300
        },
        estimate:{
            fontFamily: 'Pacifico',
            fontSize: '1rem', 
            textTransform: 'none',
            color: '#fff'
        },
        h2:{
            fontFamily: 'Raleway',
            fontWeight: 700,
            fontSize: '2.5rem',
            color: arcBlue,
            lineHeight: 1.5
        },
        h3:{
            fontFamily: 'Pacifico',
            fontSize: '2.5rem',
            color: arcBlue
        },
        h4:{
            fontFamily: 'Raleway',
            fontSize: '1.75rem',
            color: arcBlue,
            fontWeight: 700
        },
        learnButton:{
            borderColor: arcBlue,
            color: arcBlue,
            borderWidth: 2,
            textTransform: 'none',
            borderRadius: 50,
            fontFamily: 'Roboto',
            fontWeight: 'bold',
        },
        subtitle1:{
            color: arcGray,
            fontSize: '1.25rem',
            fontWeight: 300
        },
        subtitle2:{
            color: '#fff',
            fontSize: '1.25rem',
            fontWeight: 300
        },
        tab:{
            fontFamily: "Raleway",
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '1rem'
        },
    },

})
