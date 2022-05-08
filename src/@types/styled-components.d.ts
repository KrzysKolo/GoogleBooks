import 'styled-components';

type ColorType = 'beige' | 'navy' | 'white100' | 'swanWhite'| 'greyPorcelain' | 'grey' | 'white' | 'black';
type FontFamilyType = 'cinzel' | 'lato';
type FontSizeType = 'xl' | 'l' | 'm' | 's' | 'xs';
type MediaQueryType = 'phone' | 'tablet' | 'desktop' | 'bigDesktop' ;

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Record<ColorType, string>,
    font: {
      family: Record<FontFamilyType, string>,
      size: Record<FontSizeType, string>,
    },
    mq: Record<MediaQueryType, string>,
  }
}