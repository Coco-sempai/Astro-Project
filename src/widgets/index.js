import RichTextWidget from './RichTextWidget.astro';
import ImageWidget from './ImageWidget.astro';

const widgetComponents = {
    '@apostrophecms/rich-text': RichTextWidget,
    '@apostrophecms/image': ImageWidget,
};

export default widgetComponents;
