import { useEffect } from 'react';

const numberMessage = [
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
];

const numberCmts = [
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
    {
        title: 'xin chào',
    },
];

// const handleHide = () => {
//     const a = document.querySelectorAll(`.${className}`);

//     const test = a.forEach((item) => {
//         console.log(item.innerHTML === '0');
//         if (item.innerHTML === '0') {
//             return (item.style.display = 'none');
//         } else {
//             return 0;
//         }
//         // console.log((item.style.display = 'none'));
//     });
//     return test;
// };

export const ToastComment = ({ className }) => {
    return <>{numberCmts.length > 0 ? numberCmts.length : ''}</>;
};

export const ToastMessage = ({ className }) => {
    return <>{numberMessage.length > 0 ? numberMessage.length : ''}</>;
};
