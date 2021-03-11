import React from 'react';
import PropTypes from 'prop-types';
import styles from './App.styles';
import withStyles from 'react-jss';
import avatar from '../../assets/avatar.jpg';

const App = ({ classes }) => (
    <div className={classes.container}>
        <img className={classes.avatar} src={avatar} alt="Josh McEwen" />
        <h1 className={classes.name}>Josh McEwen</h1>
        <h2 className={classes.location}>Manchester, UK</h2>

        <p>
            <span className={classes.highlight}>Hi, I&apos;m Josh</span> 👋🏼 — An Associate at AND Digital in Manchester, UK. Before AND, I worked in the legal tech and event ticketing sectors.
        </p>
        <p>
            I graduated from Manchester Metropolitan University in June 2020 with First Class Honours in BSc Software Engineering. During my degree, I undertook a placement year, developing a booking platform for a festival and event ticketing company in Manchester, UK. 
        </p>

        <h3 className={classes.subheader}>Technologies</h3>
        <ul className={classes.technologies}>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>React</li>
            <li>Vue</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>PHP</li>
            <li>Go</li>
            <li>Java</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>

        <h3 className={classes.subheader}>Socials</h3>
        <a
            className={classes.github}
            target="_blank"
            href="https://github.com/joshuamcewen"
            rel="noopener noreferrer"
        ></a>
        <a
            className={classes.linkedin}
            target="_blank"
            href="https://www.linkedin.com/in/joshua-mcewen"
            rel="noopener noreferrer"
        ></a>
    </div>
);

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
