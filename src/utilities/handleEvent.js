import isFunction from './isFunction';

const handleEvent = (onEvent, callback) => e => {
    if (isFunction(onEvent)) {
        onEvent(e);
    }

    if (isFunction(callback)) {
        callback(e);
    }
};

export default handleEvent;
