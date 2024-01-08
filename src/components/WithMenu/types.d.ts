export type { FunctionComponent, MouseEvent } from 'react';

export type OnClick = (
    event: MouseEventHandler<HTMLDivElement>,
    index: number
) => void;

export type Props = {
    children?: ReactNode;
    className?: string;
    items?: Array<any>;
    onClick?: OnClick;
    testId?: string;
};
