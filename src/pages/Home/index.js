import { useState } from 'react';

import ContentContainer from 'components/ContentContainer';

import useInterval from 'hooks/useInterval';

import useTranslation from './hooks/useTranslation';

const Home = () => {
    const [numberOfSeconds, setNumberOfSeconds] = useState(0);

    const { HELLO, TIME_SPENT } = useTranslation();

    useInterval(() => {
        setNumberOfSeconds(numberOfSeconds + 1);
    }, 1000);

    return (
        <ContentContainer>
            <h1>{HELLO}</h1>

            <p>{TIME_SPENT.replace('{numberOfSeconds}', numberOfSeconds)}</p>
        </ContentContainer>
    );
};

export default Home;
