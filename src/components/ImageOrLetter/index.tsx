import React, { useCallback, useState } from 'react';
import { ImageOrLetterStyled } from './styles';

interface ImageOrLetterProps {
  src: string;
  fallbackLetter: string;
  alt: string;
}

const ImageOrLetter: React.FC<ImageOrLetterProps> = ({
  src,
  fallbackLetter,
  alt = fallbackLetter,
}) => {
  const [useAlternativeImage, setUseAlternativeImage] = useState(false);

  const handleImageError = useCallback(() => {
    setUseAlternativeImage(true);
  }, [setUseAlternativeImage]);

  return (
    <ImageOrLetterStyled>
      {useAlternativeImage ? (
        <span>{fallbackLetter}</span>
      ) : (
        <img src={src} alt={alt} onError={handleImageError} />
      )}
    </ImageOrLetterStyled>
  );
};

export default ImageOrLetter;
