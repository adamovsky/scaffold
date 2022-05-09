import { Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Spinner from 'components/Spinner';
import MainLayout from 'layouts/MainLayout';

import './state';

const loading = <Spinner />;

const App = () => (
    <BrowserRouter>
        <Suspense fallback={loading}>
            <Routes>
                <Route element={<MainLayout />} path="/*" />
            </Routes>
        </Suspense>
    </BrowserRouter>
);

export default App;
