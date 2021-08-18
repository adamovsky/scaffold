import Error from 'components/Error';

const ERROR_MESSAGE =
    'The server experienced an internal server error. Please try again later.';

const InternalServerError = () => (
    <Error errorCode="500" text={ERROR_MESSAGE} url="/" />
);

export default InternalServerError;
