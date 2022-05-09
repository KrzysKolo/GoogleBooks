import PaletColors from '../../assets/colors/PaletColors';

export const theme = {
  color: {
    white: '#ffffff',
    beige: '#f9f7f4',
    black: '#000000',
    orange: '#ffb142',
    grey: '#cc8e35',
    navy: `${PaletColors["navy"]}`,
    white100: '#fefefe',
    swanWhite: `${PaletColors["swan white"]}`,
    greyPorcelain: `${PaletColors["grey porcelain"]}`,
    syntheticPumpkin: `${PaletColors["synthetic pumpkin"]}`,
  },
  font: {
    size: {
      xl: '2.4rem',
      l: '2.0rem',
      m: '1.8rem',
      s: '1.6rem',
      xs: '1.2rem',
    },
    family: {
      lato: 'Lato, sans-serif',
      cinzel: 'Cinzel, serif',
      kodchasan: 'Kodchasan, sans-serif',
    },
  },
  mq: {
    phone: '@media (min-width: 412px)',
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 960px)',
    bigDesktop: '@media (min-width: 1235px)',
  },
};