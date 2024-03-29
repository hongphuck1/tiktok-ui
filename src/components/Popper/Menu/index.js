import React, { useState } from 'react';
import classnames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import styles from './Menu.module.scss';
const cx = classnames.bind(styles);

const defaultFn = () => {};

const Menu = ({ children, items = [], onChange = defaultFn }) => {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => {
                                return [...prev, item.children];
                            });
                        } else {
                            console.log(onChange(item));
                        }
                    }}
                />
            );
        });
    };

    return (
        <div>
            <Tippy
                // visible
                interactive
                delay={[0, 1000]}
                offset={[12, 8]}
                placement="bottom-end"
                render={(attrs) => {
                    return (
                        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                            <PopperWrapper className={cx('menu-popper')}>
                                {history.length > 1 && (
                                    <Header
                                        title="Language"
                                        onBack={() => {
                                            setHistory((prev) => {
                                                return prev.slice(0, prev.length - 1);
                                            });
                                        }}
                                    />
                                )}
                                {renderItems()}
                            </PopperWrapper>
                        </div>
                    );
                }}
                onHide={() => setHistory((prev) => prev.slice(0, 1))}
            >
                {children}
            </Tippy>
        </div>
    );
};

export default Menu;
