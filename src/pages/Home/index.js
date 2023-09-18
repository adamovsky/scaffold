import { useCallback, useState } from 'react';

import Button from 'components/Button';
import ContentContainer from 'components/ContentContainer';
import PageTitle from 'components/PageTitle';

import useInterval from 'hooks/useInterval';

import useTranslation from './hooks/useTranslation';

const Home = () => {
    const [numberOfSeconds, setNumberOfSeconds] = useState(0);

    const { CLICK_ME, HELLO, TIME_SPENT } = useTranslation();

    useInterval(() => {
        setNumberOfSeconds(numberOfSeconds + 1);
    }, 1000);

    const handleClick = useCallback(() => {
        alert('Button clicked!');
    }, []);

    return (
        <ContentContainer>
            <PageTitle text={HELLO} />

            <Button onClick={handleClick} text={CLICK_ME} />

            <p>{TIME_SPENT.replace('{numberOfSeconds}', numberOfSeconds)}</p>
        </ContentContainer>
    );
};

export default Home;
