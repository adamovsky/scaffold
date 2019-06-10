import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';

import MainLayout from '../../layout/MainLayout';

import WelcomePage from '../../pages/WelcomePage';

import styles from './styles.module.scss';

class App extends PureComponent {
    render() {
        return (
            <div className={ styles.app }>
                <MainLayout>
                    <Route exact path="/"
                        render={ (props) => <WelcomePage /> }
                    />
                </MainLayout>
            </div>
        );
    }
}

export default App;
