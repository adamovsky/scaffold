import { useCallback } from 'react';

import useAccessToken from 'hooks/useAccessToken';

import useTranslation from './hooks/useTranslation';

const API_HOST = '';

const useFetch = ({ headers = {} } = {}) => {
    const { fetchToken } = useAccessToken();

    const { API_ERROR } = useTranslation();

    const resolveHost = useCallback(
        url => (url.startsWith('/') ? `${API_HOST}${url}` : url),
        []
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

                if (!response.ok) {
                    throw new Error(response.status.toString());
                }

                const body = await response.text();

                if (body) {
                    data = JSON.parse(body);
                } else {
                    data = {};
                }
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

    const httpPut = useCallback(
        async (url = '', data, options = {}) => {
            const requestOptions = {
                headers: {
                    'Content-Type': 'application/json'
                },
                ...options,
                method: 'PUT'
            };

            return await httpRequest(url, data, requestOptions);
        },
        [httpRequest]
    );

    const authenticatedRequest = useCallback(
        async (httpMethod, url = '', data, options = {}) => {
            const token = await fetchToken();

            if (!token) {
                return {
                    data: null,
                    error: 'User not authenticated'
                };
            }

            const response = await httpMethod(url, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                ...options
            });

            if (response?.error) {
                alert(`${API_ERROR}: \n${JSON.stringify(response.error)}`);

                return {
                    data: null,
                    error: response.error
                };
            }

            return response;
        },
        [API_ERROR, fetchToken]
    );

    const authenticatedGet = useCallback(
        async (url = '', data = {}, options = {}) => {
            data = undefined;

            return await authenticatedRequest(httpGet, url, data, options);
        },
        [authenticatedRequest, httpGet]
    );

    const authenticatedPost = useCallback(
        async (url = '', data, options = {}) =>
            await authenticatedRequest(httpPost, url, data, options),
        [authenticatedRequest, httpPost]
    );

    const authenticatedPut = useCallback(
        async (url = '', data, options = {}) =>
            await authenticatedRequest(httpPut, url, data, options),
        [authenticatedRequest, httpPut]
    );

    return {
        authenticatedGet,
        authenticatedPost,
        authenticatedPut,
        httpGet,
        httpPost,
        httpPut
    };
};

export default useFetch;
