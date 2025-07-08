
import { useState, useCallback } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

const OptimizedImage = ({ src, alt, className, loading = 'lazy' }: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback(() => {
    setHasError(true);
  }, []);

  if (hasError) {
    return (
      <div className={`${className} bg-muted flex items-center justify-center`}>
        <span className="text-muted-foreground text-sm">Image failed to load</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        decoding="async"
      />
    </div>
  );
};

export default OptimizedImage;
