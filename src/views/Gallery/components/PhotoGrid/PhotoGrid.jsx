import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { StyledPhotoGrid, StyleImage } from './PhotoGrid.style';

const PhotoGrid = () => {
    const photos = [...Array(16).keys()];
    const [imagePopup, setImagePopup] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = img => {
        setIsOpen(true);
        setImagePopup(`images/gallery/${img}.jpg`);
    };

    return (
        <StyledPhotoGrid>
            {photos.map(photo => {
                const name = `img${photo + 1}`;
                return (
                    <StyleImage
                        src={`images/gallery/thumb/${name}.jpg`}
                        alt={name}
                        index={name}
                        onClick={() => openPopup(name)}
                    />
                );
            })}
            {isOpen && (
                <Lightbox
                    mainSrc={imagePopup}
                    onCloseRequest={() => setIsOpen(false)}
                />
            )}
        </StyledPhotoGrid>
    );
};

export default PhotoGrid;
