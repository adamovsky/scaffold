import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'app/i18n';

import App from 'components/App';
import GlobalStore from 'components/GlobalStore';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <StrictMode>
        <GlobalStore>
            <App />
        </GlobalStore>
    </StrictMode>
);
