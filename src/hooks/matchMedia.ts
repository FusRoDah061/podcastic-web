import cssMediaQuery from 'css-mediaquery';

const useMatchMedia = (mediaQuery: string): boolean => {
  if (window.matchMedia) {
    return window.matchMedia(mediaQuery).matches;
  }

  return !!cssMediaQuery.match(mediaQuery, {
    width: `${window.innerWidth}px`,
  });
};

export default useMatchMedia;
