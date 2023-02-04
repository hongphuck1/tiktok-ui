import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';
const cx = classNames.bind(styles);

// api ảo
const apiAccount = [
    {
        name: "Cún's",
        title: 'cun040401',
        image: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0c0b9f49f5096b7494a4130c5568823c.jpeg?x-expires=1675591200&x-signature=yoHA7kLC2t5%2Ff6K0Hy8f0ze634w%3D',
    },
    {
        name: 'Nhi tap choi toptop',
        title: 'daubeo2o5',
        image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4fb21c235cb6159427873b17edef21ce~c5_100x100.jpeg?x-expires=1675591200&x-signature=a%2FLInVlYpo6UklmCYQ%2FCyckhmus%3D',
    },
    {
        name: 'Hết đẹp trai thì đổi tên🤏🏻✨',
        title: 'hd.qyh',
        image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/78bb2f26eb57abfb0397f6d99c7486ed~c5_100x100.jpeg?x-expires=1675591200&x-signature=kfm4cwPuaHxMApsSm1V4ft%2Ftrp4%3D',
    },
    {
        name: '视频搞笑剪辑',
        title: 'hqt.1995',
        image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/1ceabafcb191c8e69b40480cf641f21c~c5_100x100.jpeg?x-expires=1675591200&x-signature=cSJmbSO2EH6SXwP%2BZ3qciyYTUKQ%3D',
    },
    {
        name: 'Mushin_bhutan',
        title: 'mushin_bhutan',
        image: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/c1b3e6a8244d9129d4dd0424c03b557c~c5_100x100.jpeg?x-expires=1675591200&x-signature=LwkP4PGQxmhUFttCR0m7i%2FLPMuk%3D',
    },
    {
        name: 'HuiYin',
        title: 'huiyin102',
        image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/4bb3301a599abc358cf42af7364c2540~c5_100x100.jpeg?x-expires=1675591200&x-signature=B89CT1piZHGLcy%2Fs5wjXXmRhyus%3D',
    },
];

const AccountItem = () => {
    return (
        // <div className={cx('wrapper')}>
        //     <img className={cx('avatar')} src={images.avatar1} alt="Phuc"></img>
        //     <div className={cx('info')}>
        //         <h4 className={cx('name')}>
        //             <span>Dương Hồng Phúc</span>
        //             <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
        //         </h4>
        //         <span className={cx('username')}>duonghongphuc</span>
        //     </div>
        // </div>

        // chạy fake api ảo
        <div>
            {apiAccount.map((item, index) => {
                return (
                    <div key={index} className={cx('wrapper')}>
                        <img className={cx('avatar')} src={item.image} alt="Phuc"></img>
                        <div className={cx('info')}>
                            <h4 className={cx('name')}>
                                <span>{item.name}</span>
                                <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                            </h4>
                            <span className={cx('username')}>{item.title}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AccountItem;
