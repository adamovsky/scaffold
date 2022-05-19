import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Spinner from 'components/Spinner';
import Home from 'pages/Home';
import InternalServerError from 'pages/InternalServerError';
import NotFoundError from 'pages/NotFoundError';

import state from 'app/state';

import { useRecoilValue } from 'recoil';

import styles from './styles.module.scss';

const loading = <Spinner />;

const { configAtom } = state.app.atoms;

const Content = ({ className = '' }) => {
    const config = useRecoilValue(configAtom);

    const { HOME, INTERNAL_SERVER_ERROR } = config;

    return (
        <main className={`${className} ${styles.content}`}>
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
