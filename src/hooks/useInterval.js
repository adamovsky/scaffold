import { useEffect, useRef } from 'react';

const useInterval = (callback, delay) => {
    const callbackReturn = useRef();
    const currentIntervalId = useRef();
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = async () => {
            const shouldContinue = (callbackReturn.current =
                await savedCallback.current());

            if (shouldContinue === false) {
                clearInterval(currentIntervalId.current);
            }
        };

        if (delay !== null) {
            const id = (currentIntervalId.current = setInterval(tick, delay));

            return () => clearInterval(id);
        }
    }, [delay]);
};

export default useInterval;
