import { useCallback } from 'react';

import useConfig from 'hooks/useConfig';

const useFetch = ({ headers }) => {
    const { API_HOST } = useConfig();

    const resolveHost = useCallback(
        url => (url.startsWith('/') ? `${API_HOST}${url}` : url),
        [API_HOST]
    );

    const httpRequest = useCallback(
        async (url = '', requestData, options = {}) => {
            const requestOptions = {
                body: requestData,
                cache: 'no-cache',
                redirect: 'follow',
                ...options,
                headers: new Headers({
                    ...headers,
                    ...options.headers
                })
            };

            const endpoint = resolveHost(url);

            let data, error;

            try {
                const response = await fetch(endpoint, requestOptions);

                // data = json ? await response.json() : response;
                data = await response.json();
            } catch (e) {
                error = e;
            }

            return { data, error };
        },
        [headers, resolveHost]
    );

    const httpGet = useCallback(
        async (url = '', data, options = {}) => {
            const requestOptions = {
                ...options,
                method: 'GET'
            };

            return await httpRequest(url, data, requestOptions);
        },
        [httpRequest]
    );

    const httpAuth = useCallback(
        async (url = '', data, options = {}) => {
            const token = localStorage?.getItem('accessToken');

            const bearer = `Bearer ${token}`;

            const requestOptions = {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    Authorization: bearer
                },
                ...options
            };

            return await httpGet(url, data, requestOptions);
        },
        [httpGet]
    );

    const httpPost = useCallback(
        async (url = '', data, options = {}) => {
            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json'
                },
                ...options,
                method: 'POST'
            };

            return await httpRequest(url, data, requestOptions);
        },
        [httpRequest]
    );

    return {
        httpAuth,
        httpGet,
        httpPost
    };
};

export default useFetch;
