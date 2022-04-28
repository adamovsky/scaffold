import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Spinner from 'components/Spinner';
import Home from 'pages/Home';
import InternalServerError from 'pages/InternalServerError';
import NotFoundError from 'pages/NotFoundError';

import { HOME, INTERNAL_SERVER_ERROR } from 'utilities/routes';

import styles from './styles.module.scss';

const loading = <Spinner />;

const Content = () => (
    <main className={styles.content}>
        <Suspense fallback={loading}>
            <Routes>
                <Route element={<Home />} path={HOME} />

                <Route
                    element={<InternalServerError />}
                    path={INTERNAL_SERVER_ERROR}
                />

                <Route element={<NotFoundError />} path="*" />
            </Routes>
        </Suspense>
    </main>
);

export default Content;
