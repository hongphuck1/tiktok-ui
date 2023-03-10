import React from 'react';
import Header from '~/components/Layout/components/Header';

const HeaderOnly = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    );
};

export default HeaderOnly;
