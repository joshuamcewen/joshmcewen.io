import hero from '../../assets/hero.jpg';
import Color from 'color';

export default {
    hero: {
        composes: 'Hero',
        minHeight: '100vh',
        width: '100vw',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'stretch',
        position: 'relative',
        overflow: 'hidden',

        '&:before': {
            content: '""',
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundAttachment: 'fixed',
            backgroundColor: '#F2F2F2',
            backgroundImage: `url(${hero})`,
            backgroundSize: 'cover',
            zIndex: '-1',
            animation: '$zoomin 50s 1'
        }
    },
    '@keyframes zoomin': {
        from: {
            transform: 'scale(1)'
        },
        to: {
            transform: 'scale(1.3)'
        }
    },
    container: {
        composes: 'Hero__container',
        width: 'calc(100% - 4rem)',
        maxWidth: '35rem',
        color: '#fff',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'center'
    },
    hello: {
        composes: 'Hero__hello',
        display: 'flex',
        flexGrow: '1',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    header: {
        composes: 'Hero__header',
        fontSize: '2.5rem',
        marginBottom: '2rem'
    },
    skillsHeader: {
        composes: 'Hero__skillsHeader',
        fontSize: '1.3rem',
        marginBottom: '1rem',
        marginTop: '2rem'
    },
    introduction: {
        composes: 'Hero__introduction',
        lineHeight: '1.2',
        color: '#fff',
        fontSize: '1.1rem',
        margin: '0 0 1rem'
    },
    smallprint: {
        composes: 'Hero__smallprint',
        fontWeight: '300',
        lineHeight: '1.2',
        color: '#fff',
        fontSize: '0.95rem',
        margin: '0 0 0.5rem'
    },
    skills: {
        composes: 'Hero__skills',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    skill: {
        composes: 'Hero__skill',
        padding: '0.4rem 0.5rem',
        margin: '0.3rem 0.2rem',
        fontSize: '0.8rem',
        backgroundColor: 'rgba(255,255,255,0.9)',
        color: '#1B1464',
        boxShadow: `0 0 0 0.15rem ${Color('#fff').fade(0.85)}`,
        borderRadius: '0.15rem'
    },
    links: {
        composes: 'Hero__links',
        padding: '0 0 2rem',
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        flexBasis: '0',
        flexDirection: 'column',
        margin: '1rem 0',

        '@media(min-width: 30rem)': {
            flexDirection: 'row'
        }
    },
    link: {
        composes: 'Hero__link',
        textDecoration: 'none',
        padding: '0.75rem 1rem',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.4)',
        flexGrow: '1',
        borderRadius: '0.2rem',
        margin: '0.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& img': {
            width: '1rem',
            height: '1rem',
            marginRight: '0.5rem'
        },

        '&:hover': {
            transition: '150ms linear all',
            backgroundColor: 'rgba(0,0,0,0.8)',
            boxShadow: '0 0 0 0.2rem rgba(0,0,0,0.3)',
            border: '1px solid transparent'
        }
    }
};
