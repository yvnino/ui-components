import React from 'react';
import type { ReactElement, ReactNode } from 'react';
import { Component } from 'react';
export interface Props {
    /** In case of an error nothing will be rendered */
    emptyOnError?: boolean;
    /** Component will be shown on error instead of content */
    errorComponent?: ReactElement;
    /** Re-throw error to the top if caught some */
    bubbleUpError?: boolean;
    /** Inner content while no errors */
    children: ReactNode;
}
export interface State {
    hasError: boolean;
}
export default class WidgetErrorBoundary extends Component<Props, State> {
    constructor(props: Props);
    get isThrowingErrorEnabled(): boolean;
    componentDidCatch(error: Error): void;
    render(): string | number | boolean | JSX.Element | React.ReactFragment | null | undefined;
}
