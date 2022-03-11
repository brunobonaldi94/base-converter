const common = {
  typography: {
    primaryFont: {
      fontFamily: '"Montserrat", "Source Sans Pro", "Arial", sans-serif',
    },
    secondaryFont: {
      fontFamily: '"Source Sans Pro","Montserrat", "Arial", sans-serif',
    },
    logo: {
      fontFamily:
        '"Montserrat Alternates", "Source Sans Pro", "Arial", sans-serif',
    },
    head: {
      h1: {
        fontSize: '48px',
        fontWeight: '700',
        lineHeight: '1.1',
        fontSizeMobile: '40px',
        fontWeightMobile: '700',
        lineHeightMobile: '1.3',
      },
      h2: {
        fontSize: '40px',
        fontWeight: '400',
        lineHeight: '1.1',
        fontSizeMobile: '32px',
        fontWeightMobile: '500',
        lineHeightMobile: '1.3',

      },
      h3: {
        fontSize: '32px',
        fontWeight: '400',
        lineHeight: '1.1',
        fontSizeMobile: '24px',
        fontWeightMobile: '400',
        lineHeightMobile: '1.4',
      },
    },
    body: {
      b1: {
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '1.4',
        fontSizeMobile: '18px',
        fontWeightMobile: '400',
        lineHeightMobile: '1.4',
      },
      b2: {
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '1.4',
        fontSizeMobile: '16px',
        fontWeightMobile: '400',
        lineHeightMobile: '1.4',
      },
      b3: {
        fontSize: '14px',
        fontWeight: '300',
        lineHeight: '1.5',
        fontSizeMobile: '14px',
        fontWeightMobile: '400',
        lineHeightMobile: '1.5',
      },
    },
  },
  defaultColors: {
    primary: {
      light: '#3973FC',
      normal: '#1354F0',
      dark: '#0637AD',
      gradient: 'linear-gradient(220.94deg, #4075F5 14.43%, #0637AD 85.28%)',
    },
    secondary: {
      light: '#5B8BFE',
      normal: '#4075F5',
      dark: '#254DAD',
      gradient: 'linear-gradient(220.94deg, #3973FC 14.43%, #5B8BFE 85.28%)',
    },
    black: {
      light: '#37393D',
      normal: '#212327',
      dark: '#101114',
    },
    white: {
      light: '#F5F7FA',
      normal: '#F3F5F9',
      dark: '#E4E6EA',
      gradient: 'linear-gradient(220.94deg, #F5F7FA 14.43%, #E4E6EA 85.28%)',
    },
    gray: {
      gray1: '#C6C7CC',
      gray2: '#B3B4BA',
      gray3: '#A0A2A9',
      gray4: '#8D8F97',
      gray5: '#75777E',
      gray6: '#5E5F65',
      gray7: '#46474C',
    },
    green: {
      light: '#50E170',
      normal: '#32D957',
      dark: '#28BB49',
    },
    red: {
      light: '#F05454',
      normal: '#EB3D3D',
      dark: '#D03333',
    },
    yellow: {
      light: '#FFCE52',
      normal: '#FFD76B',
      dark: '#D9B043',
    },
    text: 'color: transparent; background: linear-gradient(180deg, #1354F0 0%, rgba(57, 115, 252, 0) 100%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent',
    textDark: 'color: transparent; background: linear-gradient(220.94deg, #4075F5 14.43%, #0637AD 85.28%); background-clip: text; -webkit-background-clip: text; -webkit-text-fill-color: transparent',
  },
  spacing: {
    smallest: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
    largest: '32px',
  },
  container: {
    main: 'max-width:1440px;margin:0 auto',
    mainPadding: '24px 96px',
  },
  grid: {
    item1: 'flex: 1 1 360px',
    item2: 'flex: 2 1 360px',
    item3: 'flex: 3 1 360px',
    item4: 'flex: 4 1 360px',
    item5: 'flex: 5 1 360px',
    auto: 'flex:1 1 auto',
  },
  borderRadius: {
    smallest: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
    largest: '32px',
  },
  button: {
    primary: {},
    secondary: {},
    hover: 'box-shadow: 0px 9px 43px rgba(19, 84, 240, 0.13), 0px 2.95995px 12.9632px rgba(19, 84, 240, 0.0847066), 0px 1.32758px 5.38427px rgba(19, 84, 240, 0.065), 0px 0.520648px 1.94738px rgba(19, 84, 240, 0.0452935);',
  },
  shadow: {
    smal: '0 .125rem .25rem rgba(0,0,0,.075)',
    medium: '0 .25rem .50rem rgba(0,0,0,.1)',
    large: '0 0 1rem rgb(0 0 0 / 30%)',
    dropShadow: '2px 4px 6px #151616',
  },
};
export default common;
