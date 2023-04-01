import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

import Image from '../Image';
import { IconTick } from '../Icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

// api ảo
const apiAccount = [
    {
        name: "Cún's",
        title: 'cun040401',
        tick: true,
        image: 'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0c0b9f49f5096b7494a4130c5568823c.jpeg?x-expires=1680433200&x-signature=2DicMi6gQuCD%2BiC37%2F1GfEs1E9o%3D',
    },
    {
        name: 'N.T.Ngát 🍓🍓🍓',
        title: 'embecuaanh0120',
        image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/2752f1176dc292b07aa962da9e448fc9~c5_100x100.jpeg?x-expires=1680433200&x-signature=Zns4MK4jYwXhhZAU2b66FsnAgLk%3D',
    },
    {
        name: 'Nhi tap choi toptop',
        title: 'daubeo2o5',
        image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4fb21c235cb6159427873b17edef21ce~c5_100x100.jpeg?x-expires=1680433200&x-signature=dhswJNonQFon8eDAibeNzZTwpvg%3D',
    },
    {
        name: '✨𝐐𝐘𝐇 𝐑𝐄𝐕𝐈𝐄𝐖✨',
        title: 'hd.qyh',
        image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/70be802e38cd8dff92a31a8a6ff693d2~c5_100x100.jpeg?x-expires=1680433200&x-signature=oHKLf9cG2jfH53t0stT%2BG2oI8CI%3D',
    },
    {
        name: '🐻🐻🐻',
        title: 'quynhanh200322hl',
        image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a64fd430e2ffbcaeae862308aba0c1f2~c5_100x100.jpeg?x-expires=1680433200&x-signature=Ohh6U9d6PuOO%2F1m0XUNyD6Bh8%2FY%3D',
    },
    {
        name: 'Mushin_bhutan',
        title: 'mushin_bhutan',
        image: 'https://znews-photo.zingcdn.me/w660/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg',
    },
    {
        name: 'HuiYin',
        title: 'huiyin102',
        image: '',
    },
    {
        name: 'MrBeast',
        title: `mrbeast`,
        tick: true,
        image: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/54435a1ec165931f60f2a3872de74aa5~c5_100x100.jpeg?x-expires=1680433200&x-signature=KUsuVlmpc%2B7cfAv9HlB7Gx6z0s4%3D',
    },
];

const AccountItem = ({ data }) => {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <IconTick className={cx('check-icon')} width="16px" height="16px" />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
};

export default AccountItem;
