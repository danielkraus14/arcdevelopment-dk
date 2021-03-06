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
        caption:{
            fontSize: '1rem',
            fontWeight: 300,
            color: arcGray
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
            lineHeight: 1.5,
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
        h6:{
            fontWeight: 500,
            fontFamily: 'Raleway',
            color: arcBlue,
            lineHeight: 1
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
    overrides:{
        MuiInputLabel:{
            root:{
                color: arcBlue,
                fontSize: '1rem'
            }
        },
        MuiInput:{
            root:{
                color: arcGray,
                fontWeight: 300
            },
            underline:{
                '&:before':{
                    borderBottom: `2px solid ${arcBlue}`
                },
                '&:hover:not($disabled):not($focused):not($error):before':{
                    borderBottom: `2px solid ${arcBlue}`
                }
            }
        },
        MuiExpansionPanelSummary:{
            content:{
                margin: 0
            }
        },
        
    }

})
