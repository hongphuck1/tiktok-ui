import React from 'react';
import classnames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classnames.bind(styles);

// import LogoTiktok from '~/image/TikTok_logo.svg.png';

const Header = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                {/* <img src={LogoTiktok}></img> */}
                <div style={{ textAlign: 'center' }}>Header</div>
                {/* search */}
            </div>
        </div>
    );
};

export default Header;
