const fetchData = (dataSource, defaultReturnValue) => async () => {
    try {
        return await dataSource();
    } catch (error) {
        console.error(error);
    }

    return defaultReturnValue;
};

export default fetchData;
