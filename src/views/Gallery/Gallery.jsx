import React, { useContext } from 'react';
import LocaleContext from '../../context/LocaleContext';
import { Title } from '../../components';
import { PhotoGrid } from './components';
import { StyledGallery } from './Gallery.style';
import { galleryLocale } from '../../constants/Locale';

const Gallery = () => {
    const lang = useContext(LocaleContext);
    return (
        <StyledGallery>
            <Title text={galleryLocale.title[lang]} />
            <PhotoGrid />
        </StyledGallery>
    );
};

export default Gallery;
