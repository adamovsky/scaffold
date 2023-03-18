const httpPost = async (url = '', data, options = {}) => {
    const requestOptions = {
        body: data,
        method: 'POST',
        redirect: 'follow',
        ...options
    };

    try {
        const response = await fetch(url, requestOptions);

        const resp = await response.json();

        return resp;
    } catch (error) {
        return error;
    }
};

export default httpPost;
