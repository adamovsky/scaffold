import { render } from '@testing-library/react';

import GlobalStore from 'components/GlobalStore';

import App from '.';

describe('App', () => {
    test('renders without crashing', () => {
        const div = document.createElement('div');

        render(
            <GlobalStore>
                <App />
            </GlobalStore>,
            div
        );
    });
});
