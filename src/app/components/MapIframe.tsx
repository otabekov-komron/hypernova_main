import React from 'react';

interface IframeMapProps {
  src: string;
  width?: number | string;
  rel: string;
  height?: number | string;
  allowFullScreen?: boolean;
  loading?: 'lazy' | 'eager';
  referrerPolicy?: 'no-referrer' | 'no-referrer-when-downgrade' | 'origin' | 'origin-when-cross-origin' | 'unsafe-url';
}

const IframeMap: React.FC<IframeMapProps> = ({
  src,
  width = '100%',
  rel='preconnect',
  height = 450,
  allowFullScreen = true,
  loading = 'lazy',
  referrerPolicy = 'no-referrer-when-downgrade',
}) => {
  return (
    <iframe
    rel="preconnect"
    className='rounded-[20px] '
      src={src}
      width={width}
      height={height}
      style={{ border: 0 }}
      allowFullScreen={allowFullScreen}
      loading={loading}
      referrerPolicy={referrerPolicy}
    ></iframe>
  );
};

export default IframeMap;
