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
        image: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0c0b9f49f5096b7494a4130c5568823c.jpeg?x-expires=1673172000&x-signature=fzFvvkQDA5pZQkikR%2FasoW%2Fsobo%3D',
    },
    {
        name: 'Nhi tap choi toptop',
        title: 'daubeo2o5',
        image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d8893c6d4f2e91afa0432bc3c1415735~c5_100x100.jpeg?x-expires=1673168400&x-signature=JKmEMBUvcnFJfycVduUHopWJNsQ%3D',
    },
    {
        name: 'Hết đẹp trai thì đổi tên🤏🏻✨',
        title: 'hd.qyh',
        image: 'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/16ace5104a6661798ea97717cf5aa679~c5_100x100.jpeg?x-expires=1673172000&x-signature=uFyeicNy6%2B7edUqfcywygn1QtaI%3D',
    },
];

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d8893c6d4f2e91afa0432bc3c1415735~c5_100x100.jpeg?x-expires=1673168400&x-signature=JKmEMBUvcnFJfycVduUHopWJNsQ%3D"
                alt="Phuc"
            ></img>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Dương Hồng Phúc</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                </h4>
                <span className={cx('username')}>duonghongphuc</span>
            </div>
        </div>

        // chạy fake api ảo
        // <div>
        //{
        // {apiAccount.map((item, index) => {
        //     return (
        //         <div key={index} className={cx('wrapper')}>
        //             <img className={cx('avatar')} src={item.image} alt="Phuc"></img>
        //             <div className={cx('info')}>
        //                 <h4 className={cx('name')}>
        //                     <span>{item.name}</span>
        //                     <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
        //                 </h4>
        //                 <span className={cx('username')}>{item.title}</span>
        //             </div>
        //         </div>
        //     );
        // })}
        //}
        // </div>
    );
};

export default AccountItem;
