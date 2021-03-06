import { createMuiTheme, Theme } from '@material-ui/core/styles';

import MuiDialog from './MuiDialog';
import MuiTextField from './MuiTextField';
import { defaultTheme as theme, palette } from './palette';
import { prettyScroll1, prettyScroll2, SECONDARY_DARKEN } from './variables';

const SHADOW_DEFAULT = '0 2px 10px #d8d8d8';
const SHADOW_SECONDARY = '0 4px 10px rgba(242, 213, 120, 0.5)';

const hideScrollbar = {
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  '-ms-overflow-style': 'none',
  scrollbarWidth: 'none',
};

export default createMuiTheme({
  themeName: 'LIGHT',

  gradient: ['linear-gradient(45deg, #29292b 0%, #424247 50%, #29292b 100%)'],
  hideScrollbar,
  mainContent: {
    bigWidth: 1360,
    scroll: prettyScroll1(theme),
    width: 1280,
  },
  mixins: {
    toolbar: {
      height: 56,
    },
  },
  overrides: {
    ...MuiDialog(theme),
    ...MuiTextField(theme, hideScrollbar),
    MuiAppBar: {
      colorDefault: {
        backgroundColor: palette.default.main,
      },
    },
    MuiButton: {
      contained: {
        '&:hover': {
          backgroundColor: '#5F5F5F',
        },
        backgroundColor: '#3F3F3F',
        color: '#ffffff',
      },
      containedPrimary: {
        color: '#ffffff',
      },
      containedSizeLarge: {
        '&:hover': {
          backgroundColor: 'rgb(255, 185, 0)',
        },
        borderRadius: 5,
        boxShadow: 'none',
        color: '#fff',
        fontSize: 18,
        height: 50,
        minWidth: 275,
      },
    },
    MuiChip: {
      outlined: {
        '&:hover': {
          backgroundColor: `${palette.primary.main}!important`,
          borderColor: 'rgb(214, 186, 98)',
          boxShadow: SHADOW_SECONDARY,
          color: palette.common.white,
        },
        border: '1px solid rgba(0, 0, 0, 0.1)',
        color: palette.default.light,
        fontSize: theme.typography.pxToRem(14),
        fontWeight: 400,
      },
    },
    MuiContainer: {
      maxWidthLg: {
        [theme.breakpoints.up('lg')]: {
          maxWidth: 1290,
        },
      },
    },
    MuiExpansionPanel: {
      rounded: {
        '&:first-child': {
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        },
        '&:last-child': {
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
        },
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: '0 16px 16px',
      },
    },
    MuiExpansionPanelSummary: {
      content: {
        '&$expanded': {
          margin: theme.spacing(1, 0),
        },
      },
      root: {
        '&$expanded': {
          borderBottom: `2px solid ${palette.secondary.light}`,
          minHeight: theme.spacing(7.5) - 2,
        },
      },
    },
    MuiFab: {
      sizeMedium: {
        height: '44px',
        width: '44px',
      },
    },
    MuiIconButton: {
      root: {
        borderRadius: theme.shape.borderRadius,
        padding: theme.typography.pxToRem(7),
      },
    },
    MuiToolbar: {
      gutters: {
        paddingLeft: 6,
        paddingRight: 6,
      },
      root: {
        zIndex: theme.zIndex.drawer + 1,
        [theme.breakpoints.down('sm')]: {
          ...(theme.overrides as any).MuiAppBar,
          padding: 0,
        },
      },
    },
    MuiTooltip: {
      tooltipPlacementBottom: {
        margin: theme.spacing(1, 0),
      },
      tooltipPlacementTop: {
        margin: theme.spacing(1, 0),
      },
    },
  },
  palette,
  props: {
    MuiSelect: {
      variant: 'outlined',
    },
    MuiTextField: {
      variant: 'outlined',
    },
  },
  scroll: {
    secondary: prettyScroll2(theme),
  },
  shadow: {
    default: SHADOW_DEFAULT,
    secondary: SHADOW_SECONDARY,
  },
  shape: {
    borderRadius: 4,
    borderRadius2: 8,
  },
  taskCard: {
    height: theme.spacing(7.5),
    innerHeight: theme.spacing(4.5),
    outerHeight: theme.spacing(6),
    padding: 0.5,
  },
  textGradient: [
    {
      '-webkit-background-clip': 'text',
      background: `linear-gradient(45deg,
      ${SECONDARY_DARKEN} 35%,
       ${palette.secondary.light} 50%,
        ${SECONDARY_DARKEN} 65%
         )`,
      backgroundClip: 'text',
      textFillColor: 'transparent',
    },
  ],
  typography: {
    body1: {
      fontSize: theme.typography.pxToRem(16),
    },
    body2: {
      fontSize: theme.typography.pxToRem(14),
    },
    button: {
      textTransform: 'none',
    },
    caption: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: theme.typography.pxToRem(12),
    },
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: theme.typography.pxToRem(55),
      fontWeight: 'bold',
      [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.pxToRem(34),
      },
    },
    h2: {
      fontSize: theme.typography.pxToRem(50),
      fontWeight: 'bold',
      [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.pxToRem(32),
      },
    },
    h3: {
      fontSize: theme.typography.pxToRem(30),
    },
    h4: {
      fontSize: theme.typography.pxToRem(24),
      fontWeight: 400,
    },
    h5: {
      color: '#29292b',
      fontSize: theme.typography.pxToRem(18),
      fontWeight: 500,
      lineHeight: '24px',
    },
    h6: {
      fontSize: theme.typography.pxToRem(13),
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: theme.typography.pxToRem(22),
      fontWeight: 200,
      [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.pxToRem(20),
      },
    },
    subtitle2: {
      fontSize: theme.typography.pxToRem(10),
    },
  },
});

declare module '@material-ui/core/styles/shape' {
  interface Shape {
    borderRadius: number;
    borderRadius2: number;
  }
}

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    gradient: string[];
    hideScrollbar: object;
    mainContent: {
      bigWidth: number;
      scroll: object;
      width: number;
    };
    scroll: {
      secondary: any;
    };
    shadow: {
      default: string;
      secondary: string;
    };
    taskCard: {
      height: number;
      innerHeight: number;
      outerHeight: number;
      padding: number;
    };
    textGradient: object[];
    themeName?: string;
  }

  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    gradient?: string[];
    hideScrollbar?: object;
    mainContent?: {
      bigWidth?: number;
      scroll?: object;
      width?: number;
    };
    scroll?: {
      secondary?: any;
    };
    shadow?: {
      default?: string;
      secondary?: string;
    };
    taskCard?: {
      height?: number;
      innerHeight?: number;
      outerHeight?: number;
      padding?: number;
    };
    textGradient?: object[];
    themeName?: string;
  }
}
