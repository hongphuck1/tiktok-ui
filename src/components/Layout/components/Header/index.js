import React from 'react';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';
import images from '~/assets/images';

const cx = classnames.bind(styles);

const Header = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <div className={cx('logo')}>{<img src={images.logo} alt="tiktok"></img>}</div>
                {/* search */}
                <div className={cx('search')}>
                    <input
                        className={cx('search-input')}
                        type="text"
                        placeholder="Search accounts and videos"
                        spellCheck="false"
                    />
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
