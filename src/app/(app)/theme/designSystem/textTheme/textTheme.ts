import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseThemeMode = {
  color: "black",
  _dark: {
    color: "white",
  },
};

const baseLargeStyles = {
  fontFamily: "Futura",
  fontSize: "24px",
  wordBreak: "break-word",
};

const baseMediumStyles = {
  fontFamily: "Futura",
  fontSize: "20px",
  wordBreak: "break-word",
};

const baseSmallStyles = {
  fontFamily: "Futura",
  fontSize: "18px",
  wordBreak: "break-word",
};

const baseExtraSmallStyles = {
  fontFamily: "Futura",
  fontSize: "16px",
  wordBreak: "break-word",
};

const baseXXSmallStyles = {
  fontFamily: "Futura",
  fontSize: "13px",
  wordBreak: "break-word",
};

/* LARGE VARIANTS */
const LGREGULAR = defineStyle({
  ...baseLargeStyles,
  fontWeight: 300,
});

const LGMEDIUM = defineStyle({
  ...baseLargeStyles,
  fontWeight: 500,
});

const LGBOLD = defineStyle({
  ...baseLargeStyles,
  fontWeight: 700,
});

/* BODY VARIANTS */
const MDREGULAR = defineStyle({
  ...baseMediumStyles,
  fontWeight: 300,
});

const MDMEDIUM = defineStyle({
  ...baseMediumStyles,
  fontWeight: 500,
});

const MDBOLD = defineStyle({
  ...baseMediumStyles,
  fontWeight: 700,
});

/* SMALL VARIANT */
const SMREGULAR = defineStyle({
  ...baseSmallStyles,
  fontWeight: 300,
});

const SMMEDIUM = defineStyle({
  ...baseSmallStyles,
  fontWeight: 500,
});

const SMBOLD = defineStyle({
  ...baseSmallStyles,
  fontWeight: 700,
});

/* EXTRA SMALL VARIANT */
const XSREGULAR = defineStyle({
  ...baseExtraSmallStyles,
  fontWeight: 300,
});

const XSMEDIUM = defineStyle({
  ...baseExtraSmallStyles,
  fontWeight: 500,
});

const XSBOLD = defineStyle({
  ...baseExtraSmallStyles,
  fontWeight: 700,
});

/* XXSMALL */
const XXSREGULAR = defineStyle({
  ...baseXXSmallStyles,
  fontWeight: 300,
});

const XXSMEDIUM = defineStyle({
  ...baseXXSmallStyles,
  fontWeight: 500,
});

const XXSBOLD = defineStyle({
  ...baseXXSmallStyles,
  fontWeight: 700,
});

export const TextTheme = defineStyleConfig({
  variants: {
    LGREGULAR,
    LGMEDIUM,
    LGBOLD,
    MDREGULAR,
    MDMEDIUM,
    MDBOLD,
    SMREGULAR,
    SMMEDIUM,
    SMBOLD,
    XSREGULAR,
    XSMEDIUM,
    XSBOLD,
    XXSREGULAR,
    XXSMEDIUM,
    XXSBOLD,
  },
});
