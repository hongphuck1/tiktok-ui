import React, { useRef, useState } from 'react';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faCircleXmark,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faMoon,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import DarkMode from '~/components/Darkmode';

const cx = classnames.bind(styles);

const Header = () => {
    const [searchResult, setSearchResult] = useState([]);
    const refInput = useRef();

    // xử lý sự kiện nhập tìm kiếm sẽ hiện ra tippy
    const handleValueInput = () => {
        setSearchResult(refInput.current.value);
    };

    // xử lý sự kiện xoá dữ liệu input vừa nhập
    const handleClickRemove = () => {
        setSearchResult((refInput.current.value = ''));
    };

    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'Tiếng Việt',
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
        {
            icon: <FontAwesomeIcon icon={faMoon} />,
            title: 'Chế độ tối',
            darkMode: <DarkMode />,
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <a href="" className={cx('logo')}>
                    {<img src={images.logo} alt="tiktok"></img>}
                </a>
                {/* search */}
                <div className={cx('search')}>
                    <Tippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Tài Khoản</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <input
                            ref={refInput}
                            className={cx('search-input')}
                            type="text"
                            placeholder="Search accounts and videos"
                            spellCheck="false"
                            onChange={() => handleValueInput()}
                        />
                    </Tippy>

                    <button onClick={() => handleClickRemove()} className={cx('clear-btn')}>
                        <FontAwesomeIcon className={cx('close-icon')} icon={faCircleXmark} />
                    </button>
                    {/* <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} /> */}

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    </button>
                </div>

                {/* actions */}
                <div className={cx('actions')}>
                    {/* BTN upload - log in */}
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>

                    <Menu items={MENU_ITEMS}>
                        <div className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Header;
