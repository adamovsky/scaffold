import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import 'app/i18n';

import App from 'components/App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </StrictMode>
);
