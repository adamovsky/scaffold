export type { FunctionComponent, MouseEvent } from 'react';

type OnClick = (_event: MouseEventHandler<HTMLDivElement>) => void;

export type Props = {
    children?: ReactNode;
    className?: string;
    items?: Array<any>;
    onClick?: OnClick;
    testId?: string;
};
