// eslint-disable-next-line
import React, { Component } from 'react';

class MainLayout extends Component {
    render() {
        const {
            children
        } = this.props;

        return (
            <>
                { children }
            </>
        );
    }
}

export default MainLayout;
