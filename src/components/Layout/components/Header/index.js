import React, { useState } from 'react';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

const cx = classnames.bind(styles);

const Header = () => {
    const [searchResult, setSearchResult] = useState([2]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <div className={cx('logo')}>{<img src={images.logo} alt="tiktok"></img>}</div>
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
                            className={cx('search-input')}
                            type="text"
                            placeholder="Search accounts and videos"
                            spellCheck="false"
                        />
                    </Tippy>

                    <button className={cx('clear-btn')}>
                        <FontAwesomeIcon className={cx('close-icon')} icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    </button>
                </div>

                {/* actions */}
                <div className={cx('actions')}>content</div>
            </div>
        </div>
    );
};

export default Header;
