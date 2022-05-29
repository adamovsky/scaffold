import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import resources from './resources';

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        },
        react: {
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'b', 'i'],
            transSupportBasicHtmlNodes: true
        },
        resources
    });
