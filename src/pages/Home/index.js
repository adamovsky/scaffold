import ContentContainer from 'components/ContentContainer';

import translations from './constants';

const Home = () => {
    const { HELLO_WORLD } = translations();

    return (
        <ContentContainer>
            <h1>{HELLO_WORLD}</h1>
        </ContentContainer>
    );
};

export default Home;
