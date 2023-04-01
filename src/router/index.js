import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Content from '~/pages/Content';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/Layout';
import Search from '~/pages/Search';
import { Profile } from '~/pages/Profile';

// Công khai pages
const publicRouters = [
    {
        path: '/',
        components: Home,
    },
    {
        path: '/following',
        components: Following,
    },
    {
        path: '/content',
        components: Content,
    },
    {
        path: '/:nickname',
        components: Profile,
    },
    {
        path: '/upload',
        components: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/search',
        components: Search,
        layout: null,
    },
];

// Đóng kín
const privateRouters = [];

export { publicRouters, privateRouters };
