import HomePage from './HomePage.astro';
import TireIndexPage from './TireIndex.astro';
import TireShowPage from './TireShow.astro';
import RimsIndexPage from './RimsIndex.astro';
import RimsShowPage from './RimsShow.astro';
import NotFoundPage from './NotFoundPage.astro';

const templateComponents = {
    '@apostrophecms/home-page': HomePage,
    'tire-page:index': TireIndexPage,
    'tire-page:show': TireShowPage,
    'rims-page:index': RimsIndexPage,
    'rims-page:show': RimsShowPage,
    '@apostrophecms/page:notFound': NotFoundPage
};

export default templateComponents;
