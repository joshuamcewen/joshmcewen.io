import React from 'react';
import styles from './App.styles';
import withStyles from 'react-jss';
import { Hero } from '../Hero';

const App = () => (
    <>
        <Hero />
    </>
);

export default withStyles(styles)(App);
