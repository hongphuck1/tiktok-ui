import React from 'react';
import classnames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
const cx = classnames.bind(styles);

const Menu = ({ children, items = [] }) => {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <div>
            <Tippy
                interactive
                visible
                delay={[0, 1000]}
                placement="top-end"
                render={(attrs) => {
                    return (
                        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                            <PopperWrapper className={cx('menu-popper')}>{renderItems()}</PopperWrapper>
                        </div>
                    );
                }}
            >
                {children}
            </Tippy>
        </div>
    );
};

export default Menu;
