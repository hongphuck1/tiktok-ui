import { useEffect, useRef, useState } from 'react';

import classnames from 'classnames/bind';
import styles from './Search.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { IconClearBtn, IconLoadBtn, IconSearch } from '~/components/Icons';

const cx = classnames.bind(styles);

const Search = ({}) => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResults, setShowResults] = useState(true);
    const [loading, setLoading] = useState(false);
    // console.log(searchResult);
    const refInput = useRef();

    // get api thông tin user
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setLoading(false);

                setSearchResult(res.data);
            })
            .catch((err) => {
                setLoading(false);
            });
    }, [searchValue]);
    //xử lý onchange dữ liệu input
    const handleOnchangeInput = (e) => {
        if (e.target.value === ' ') {
            return;
        }
        setSearchValue(e.target.value);
    };

    // xử lý sự kiện xoá dữ liệu input vừa nhập
    const handleClearInput = () => {
        setSearchValue('');
        setSearchResult([]);
        refInput.current.focus();
    };

    // xử lý bấm ngoài vùng tippy hoặc input sẽ ẩn tippy đi
    const handleHideResult = () => {
        setShowResults(false);
    };
    return (
        <HeadlessTippy
            placement="bottom"
            interactive
            // visible
            visible={showResults && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Tài Khoản</h4>
                        {searchResult.map((item) => {
                            return <AccountItem key={item.id} data={item} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    value={searchValue}
                    ref={refInput}
                    className={cx('search-input')}
                    type="text"
                    placeholder="Tìm kiếm tài khoản và video"
                    spellCheck="false"
                    onChange={(e) => {
                        refInput.current.addEventListener('keydown', handleOnchangeInput);
                        handleOnchangeInput(e);
                    }}
                    onFocus={() => setShowResults(true)}
                />

                {!!searchValue && !loading && (
                    <button onClick={() => handleClearInput()} className={cx('clear-btn')}>
                        {<IconClearBtn />}
                    </button>
                )}

                {loading && <IconLoadBtn className={cx('loading')} />}

                <button className={cx('search-btn')}>
                    <IconSearch className={cx('search-icon')} />
                </button>
            </div>
        </HeadlessTippy>
    );
};

export default Search;
