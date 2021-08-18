import { Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Spinner from 'components/Spinner';
import MainLayout from 'layouts/MainLayout';

const loading = <Spinner />;

const App = () => (
    <BrowserRouter>
        <Suspense fallback={loading}>
            <Switch>
                <Route
                    path="/"
                    name="Welcome"
                    render={props => <MainLayout {...props} />}
                />
            </Switch>
        </Suspense>
    </BrowserRouter>
);

export default App;
