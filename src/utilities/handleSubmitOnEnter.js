import isFunction from 'utilities/isFunction';

const handleSubmitOnEnter = onSubmit => event => {
    const { code } = event;

    if (code === 'Enter' && isFunction(onSubmit)) {
        onSubmit(event);
    }
};

export default handleSubmitOnEnter;
