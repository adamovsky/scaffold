import Error from 'components/Error';

const ERROR_MESSAGE = 'The requested resource could not be found.';

const NotFoundError = () => (
    <Error errorCode="404" text={ERROR_MESSAGE} url="/" />
);

export default NotFoundError;
