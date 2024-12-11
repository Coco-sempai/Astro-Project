import HomePage from './HomePage.astro';
import TireIndexPage from './TireIndex.astro';
import TireShowPage from './TireShow.astro';
import NotFoundPage from './NotFoundPage.astro';

const templateComponents = {
    '@apostrophecms/home-page': HomePage,
    '@apostrophecms/tire-page:index': TireIndexPage,
    'apostrophecms/tire-page:show': TireShowPage,
    '@apostrophecms/page:notFound': NotFoundPage
};

export default templateComponents;
