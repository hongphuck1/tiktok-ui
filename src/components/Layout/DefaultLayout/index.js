import React from 'react';
import Header from '~/components/Layout/components/Header';
import classnames from 'classnames/bind';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
const cx = classnames.bind(styles);

const DefaultLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />

                <div className={cx('content')}>{children} container</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
