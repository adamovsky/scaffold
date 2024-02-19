import { useCallback, useState } from 'react';

const usePopperState = () => {
    const [referenceElement, setReferenceElement] = useState(null);

    const onClose = useCallback(() => {
        setReferenceElement(null);
    }, []);

    const handleClick = useCallback(event => {
        setReferenceElement(event.currentTarget);
    }, []);

    const isOpen = Boolean(referenceElement);

    return {
        handleClick,
        isOpen,
        onClose,
        referenceElement
    };
};

export default usePopperState;
