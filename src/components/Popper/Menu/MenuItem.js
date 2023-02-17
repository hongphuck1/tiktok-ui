import React from 'react';
import Button from '~/components/Button';
import classnames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classnames.bind(styles);

const MenuItem = ({ data, onClick }) => {
    const classes = cx('menu-item', {
        separate: data.separate,
    });
    console.log(classes);
    return (
        <div>
            <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
                {data.title}
                {data.darkMode && data.darkMode}
            </Button>
        </div>
    );
};

export default MenuItem;
