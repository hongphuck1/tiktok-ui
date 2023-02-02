import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
const cx = classNames.bind(styles);

const Sidebar = () => {
    // sidebar
    return <aside className={cx('wrapper')}></aside>;
};

export default Sidebar;
