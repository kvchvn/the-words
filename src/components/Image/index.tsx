import React from 'react';

import ProgressiveImage from 'react-progressive-graceful-image';

interface ImageProps {
  src: string;
  placeholder: string;
  alt: string;
  type: 'main' | 'textbook' | 'welcome' | 'authorization' | 'profile' | 'notFound';
}

type ImageClassnames = Record<ImageProps['type'], string>;

function Image({ src, placeholder, alt, type }: ImageProps) {
  const classNames: ImageClassnames = {
    main: 'main-page__image',
    textbook: 'textbook-page__image',
    welcome: 'welcome-page__image',
    authorization: 'authorization__image',
    profile: 'profile__image',
    notFound: 'not-found__image',
  };
  const blurredClassname = 'blurred';

  return (
    <ProgressiveImage src={src} placeholder={placeholder}>
      {(src, loading) => (
        <img
          src={src}
          alt={alt}
          className={loading ? `${classNames[type]} ${blurredClassname}` : classNames[type]}
        />
      )}
    </ProgressiveImage>
  );
}

export default Image;
