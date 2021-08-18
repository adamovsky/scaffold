import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Spinner from 'components/Spinner';
import Home from 'pages/Home';
import InternalServerError from 'pages/InternalServerError';
import NotFoundError from 'pages/NotFoundError';

import {
    HOME,
    INTERNAL_SERVER_ERROR
} from 'utilities/routes';

import styles from './styles.module.scss';

const loading = <Spinner />;

const Content = () => (
    <main className={styles.content}>
        <Suspense fallback={loading}>
            <Switch>
                <Switch>
                    <Route exact path={HOME}>
                        <Home />
                    </Route>

                    <Route exact path={INTERNAL_SERVER_ERROR}>
                        <InternalServerError />
                    </Route>

                    <Route path="*">
                        <NotFoundError />
                    </Route>
                </Switch>
            </Switch>
        </Suspense>
    </main>
);

export default Content;
