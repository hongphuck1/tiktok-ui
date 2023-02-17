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
    faPlus,
    faUpload,
    faCloudUpload,
    faArrowUpFromBracket,
    faChartLine,
    faVideo,
    faGear,
    faHouseChimney,
    faArrowRightToBracket,
    faCoins,
} from '@fortawesome/free-solid-svg-icons';

import { faMessage, faUser } from '@fortawesome/free-regular-svg-icons';

import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import DarkMode from '~/components/Darkmode';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

const cx = classnames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'taybannha',
                    title: 'Español',
                },
                {
                    // type: 'language',
                    code: 'trungquoc',
                    title: '中文(台灣)',
                },
            ],
        },
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

const Header = () => {
    const [searchResult, setSearchResult] = useState([]);
    const refInput = useRef();

    const currentUser = true;

    // xử lý sự kiện nhập tìm kiếm sẽ hiện ra tippy
    const handleValueInput = () => {
        setSearchResult(refInput.current.value);
    };

    // xử lý sự kiện xoá dữ liệu input vừa nhập
    const handleClickRemove = () => {
        setSearchResult((refInput.current.value = ''));
    };

    // xử lý logic
    const handleMenuOnchange = (menuItem) => {
        console.log(menuItem);

        switch (menuItem.code) {
            case 'language':
                console.log('đây là language');
                break;

            case 'title':
                console.log('đây là', menuItem.title);
                break;

            case 'en':
                console.log('Tiếng Anh');
                break;

            case 'vi':
                console.log('Tiếng việt');
                break;

            default:
                console.error('Chưa có giữ liệu "Case" tương ứng...!');
        }
    };

    // đã đăng nhập hay chưa?
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faChartLine} />,
            title: 'View Analytics',
            to: '/analytics',
        },
        {
            icon: <FontAwesomeIcon icon={faVideo} />,
            title: 'LIVE Studio',
            to: '/studio',
        },
        {
            icon: <FontAwesomeIcon icon={faHouseChimney} />,
            title: 'LIVE Center',
            to: '/livecenter',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            name: 'logout',
            icon: <FontAwesomeIcon icon={faArrowRightToBracket} />,
            title: 'Log out',
            to: '/',
            separate: true,
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
                    <HeadlessTippy
                        interactive
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>Tài Khoản</h4>
                                    <AccountItem />
                                    {/*                                     
                                    <AccountItem />
                                    <AccountItem /> */}
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
                    </HeadlessTippy>

                    <button onClick={() => handleClickRemove()} className={cx('clear-btn')}>
                        <FontAwesomeIcon className={cx('close-icon')} icon={faCircleXmark} />
                    </button>
                    {/* <FontAwesomeIcon className={cx('loading-icon')} icon={faSpinner} /> */}

                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon className={cx('search-icon')} icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            {/* <Button to="/upload" outlineUpload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button> */}
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            {/* BTN upload - log in */}
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuOnchange}>
                        {currentUser ? (
                            <div className={cx('user')}>
                                <img
                                    className={cx('user-avatar')}
                                    src="https://scontent.fhan14-2.fna.fbcdn.net/v/t39.30808-6/323774190_865855394708815_5506286141177953306_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GSAm_9ky6_kAX9Mr76N&_nc_ht=scontent.fhan14-2.fna&oh=00_AfBcRwRoyUMHpo1N9EoFfiy89hvJaP48mlJ6QGYT9tcxDg&oe=63EC5DE0"
                                    alt="Dương Hồng Phúc"
                                ></img>
                            </div>
                        ) : (
                            <div className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </div>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
};

export default Header;
