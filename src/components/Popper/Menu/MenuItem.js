import React from 'react';
import Button from '~/components/Button';
import classnames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classnames.bind(styles);

const MenuItem = ({ data }) => {
    return (
        <div>
            <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
                {data.title}
                {data.darkMode && data.darkMode}
            </Button>
        </div>
    );
};

export default MenuItem;
