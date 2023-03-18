const httpGet = async (url = '', data, options = {}) => {
    const requestOptions = {
        body: data,
        cache: 'no-cache',
        method: 'GET',
        mode: 'no-cors',
        redirect: 'follow',
        ...options
    };

    try {
        const response = await fetch(url, requestOptions);

        return await response.json();
    } catch (error) {
        return error;
    }
};

export default httpGet;
