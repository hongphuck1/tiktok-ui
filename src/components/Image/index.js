import { forwardRef, useState } from 'react';
import image from '~/assets/images';
import classNames from 'classnames/bind';
import styles from './image.module.scss';
const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, fallback: customFallback = image.noImage2, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={cx(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
