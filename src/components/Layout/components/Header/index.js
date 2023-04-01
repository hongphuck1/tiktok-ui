import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faMoon,
    faChartLine,
    faVideo,
    faGear,
    faHouseChimney,
    faArrowRightToBracket,
    faCoins,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import DarkMode from '~/components/Darkmode';
import { IconMessage, IconUpload, IconInbox } from '~/components/Icons';
import { ToastComment, ToastMessage } from '~/components/ToastComment';
import Image from '~/components/Image';
import image from '~/assets/images';
import Search from '../Search';
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
    const currentUser = true;

    // useEffect(() => {
    //     setTimeout(() => {
    //         setSearchResult([1]);
    //     }, 2000);
    // }, []);

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
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            {/* <Button to="/upload" outlineUpload leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button> */}
                            <Tippy delay={[0, 200]} content="Tải Video Lên" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <IconUpload className="" />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content="Tin Nhắn" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <IconMessage />
                                    <div className={cx('actions-num', 'actions-message')}>
                                        <ToastMessage />
                                    </div>
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 200]} content="Hộp Thư" placement="bottom">
                                <button className={cx('actions-btn')}>
                                    <IconInbox />
                                    <div className={cx('actions-num', 'actions-comment')}>
                                        <ToastComment />
                                    </div>
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
                                <Image
                                    className={cx('user-avatar')}
                                    src={image.avatar3}
                                    alt="Dương Hồng Phúc"
                                    fallback={image.avatar2}
                                />
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
