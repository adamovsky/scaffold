import testComponent from 'helpers/testComponent';
import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import GlobalStore from 'components/GlobalStore';

import { TEST_ID } from './constants';

import Content from '.';

const ComponentWithStore = props => (
    <BrowserRouter>
        <GlobalStore>
            <Content {...props} />
        </GlobalStore>
    </BrowserRouter>
);

testComponent(ComponentWithStore, ({ testProp }) => {
    describe('Content', () => {
        test('renders successfully', () => {
            render(<ComponentWithStore />);

            const element = screen.getByTestId(TEST_ID);

            expect(element).toBeInTheDocument();
        });

        describe('props', () => {
            testProp('className');
            testProp('testId');
        });
    });
});
