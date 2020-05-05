import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

export default {
    '@global': {
        body: {
            fontFamily: 'Manrope, sans-serif',
            margin: '0',
            padding: '0',
            color: '#fff',
            backgroundColor: '#000322',
            fontSize: '16px'
        },
        'h1, h2, h3': {
            fontWeight: '600'
        }
    },
    container: {
        maxWidth: '32em',
        padding: '4em 2em',
        margin: '0 auto',

        '& p': {
            lineHeight: '1.5',
            margin: '0 0 1.5em'
        },
        '&:before': {
            content: '""',
            height: '100vw',
            width: '100%',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.03)',
            position: 'absolute',
            top: '-40vw',
            left: '-40%',
            zIndex: '-1'
        },
        '@media (min-width: 40em)': {
            '&:before': {
                display: 'none'
            }
        }
    },
    avatar: {
        width: '8em',
        maxWidth: '100%',
        display: 'block',
        margin: '0 auto 3em',
        borderRadius: '50%',
        boxShadow: '0 0 0 1.2em rgba(255,255,255,0.03)'
    },
    name: {
        textAlign: 'center',
        margin: '0',
        fontSize: '1.9em'
    },
    location: {
        textAlign: 'center',
        color: '#03FEF7',
        margin: '0 0 2em',
        fontSize: '1.15em'
    },
    highlight: {
        color: '#03FEF7',
        fontWeight: '600'
    },
    subheader: {
        margin: '2.5em 0 1.25em'
    },
    technologies: {
        listStyleType: 'none',
        margin: '1em 0 0',
        padding: '0',

        '& li': {
            display: 'inline-block',
            padding: '0.6em 0.9em',
            backgroundColor: '#03FEF7',
            color: '#000215',
            borderRadius: '0.3em',
            marginRight: '0.4em',
            marginBottom: '0.4em',
            fontSize: '0.85em',
            fontWeight: '600',

            '&:hover': {
                transition: '300ms linear box-shadow',
                boxShadow: '0 0 0 0.2em rgba(3,254,224,0.3)'
            }
        }
    },
    social: {
        height: '2em',
        width: '2em',
        display: 'inline-block',
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        marginRight: '1.25em'
    },
    github: {
        extend: 'social',
        backgroundImage: `url(${github})`
    },
    linkedin: {
        extend: 'social',
        backgroundImage: `url(${linkedin})`
    }
};
