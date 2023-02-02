import React, { useRef, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Darkmode.module.scss';

const cx = classNames.bind(styles);

const DarkMode = () => {
    const [active, setActive] = useState('');

    const handleActive = () => {
        if (active === 'active') {
            setActive('');
        } else {
            setActive('active');

            // xử lý scss
        }
    };

    return (
        <div
            onClick={() => {
                handleActive();
            }}
            className={cx('darkMode', active)}
        ></div>
    );
};

export default DarkMode;
