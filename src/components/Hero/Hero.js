import React from 'react';
import styles from './Hero.styles';
import withStyles from 'react-jss';
import PropTypes from 'prop-types';
import linkedin from '../../assets/linkedin.svg';
import github from '../../assets/github.svg';
import cv from '../../assets/cv.svg';

const Hero = ({ classes }) => (
    <div className={classes.hero}>
        <div className={classes.container}>
            <div className={classes.hello}>
                <h1 className={classes.header}>Hi, I&apos;m Josh 👋🏽</h1>
                <p className={classes.introduction}>
                    I&apos;m a third year Software Engineering student at
                    Manchester Metropolitan University.
                </p>
                <p className={classes.smallprint}>
                    I&apos;m currently working on developing full stack applications using a variety of programming languages, some of which are listed below. Check out my
                    links below to get in touch!
                </p>
                <h2 className={classes.skillsHeader}>
                    I have experience working with
                </h2>
                <div className={classes.skills}>
                    <span className={classes.skill}>JavaScript</span>
                    <span className={classes.skill}>TypeScript</span>
                    <span className={classes.skill}>Node.js</span>
                    <span className={classes.skill}>React</span>
                    <span className={classes.skill}>MongoDB</span>
                    <span className={classes.skill}>MySQL</span>
                    <span className={classes.skill}>PHP</span>
                    <span className={classes.skill}>Java</span>
                    <span className={classes.skill}>HTML</span>
                    <span className={classes.skill}>CSS</span>
                </div>
            </div>
            <div className={classes.links}>
                <a
                    className={classes.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://storage.googleapis.com/joshmcewenio/CV.pdf"
                >
                    <img src={cv} alt="CV" />
                    CV
                </a>
                <a
                    className={classes.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/joshua-mcewen"
                >
                    <img src={linkedin} alt="LinkedIn" />
                    LinkedIn
                </a>
                <a
                    className={classes.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/joshuamcewen"
                >
                    <img src={github} alt="GitHub" />
                    GitHub
                </a>
            </div>
        </div>
    </div>
);

Hero.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(Hero);
