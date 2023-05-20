import children from './props/children';
import className from './props/className';
import testId from './props/testId';
import text from './props/text';
import title from './props/title';

const propsMap = {
    children,
    className,
    testId,
    text,
    title
};

const testComponent = (Component, test) => {
    const testProp = prop => propsMap[prop]({ Component });

    return test({ testProp });
};

export default testComponent;
