import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Spinner from 'components/Spinner';

import useConfig from 'hooks/useConfig';

import Home from 'pages/Home';
import InternalServerError from 'pages/InternalServerError';
import NotFoundError from 'pages/NotFoundError';

import { TEST_ID } from './constants';

import styles from './styles.module.scss';

const loading = <Spinner />;

const Content = ({ className = '', testId = TEST_ID }) => {
    const config = useConfig();

    const { HOME, INTERNAL_SERVER_ERROR } = config;

    return (
        <main className={`${className} ${styles.content}`} data-testid={testId}>
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
};

export default Content;
