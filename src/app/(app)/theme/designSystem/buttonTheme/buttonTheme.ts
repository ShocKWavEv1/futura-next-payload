import { defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const disabledStyles = {
  backgroundColor: mode("gray.300", "gray.500"),
  color: mode("gray.600", "gray.700"),
  borderColor: mode("gray.300", "gray.500"),
  _hover: {
    transform: "scale(1.00)",
  },
  _active: {
    transform: "scale(1.00)",
  },
};

const disabledStylesOutline = {
  backgroundColor: "transparent",
  color: mode("gray.500", "gray.700"),
  borderColor: mode("gray.500", "gray.700"),
  _hover: {
    transform: "scale(1.00)",
  },
  _active: {
    transform: "scale(1.00)",
  },
};

const disabledStylesGhost = {
  backgroundColor: "transparent",
  color: "gray.700",
};

export const ButtonTheme = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    borderRadius: "8px",
    fontFamily: "Futura",
    fontWeight: "500",
    border: "2px solid",
    _active: {
      transform: "scale(0.95)",
    },
  },
  // Styles for the size variations
  sizes: {
    xs: {
      padding: "18px 30px",
      fontSize: "15px",
    },
    sm: {
      padding: "22px 34px",
      fontSize: "18px",
    },
    md: {
      padding: "26px 38px",
      fontSize: "20px",
    },
    lg: {
      padding: "30px 42px",
      fontSize: "24px",
    },
  },
  // Styles for the visual style variations
  variants: {
    solid: (props) => ({
      border: "2px solid",
      borderColor: mode(
        `${props.colorScheme}.500`,
        `${props.colorScheme}.500`
      )(props),
      backgroundColor: mode(
        `${props.colorScheme}.500`,
        `${props.colorScheme}.500`
      )(props),
      color: "white",
      // boxShadow: '1px 2px 2px hsl(220deg 60% 50% / 0.2), 2px 4px 4px hsl(220deg 60% 50% / 0.2), 4px 8px 8px hsl(220deg 60% 50% / 0.2), 8px 16px 16px hsl(220deg 60% 50% / 0.2), 16px 32px 32px hsl(220deg 60% 50% / 0.2);',
      _hover: {
        backgroundColor: mode(
          `${props.colorScheme}.600`,
          `${props.colorScheme}.600`
        )(props),
        borderColor: mode(
          `${props.colorScheme}.600`,
          `${props.colorScheme}.600`
        )(props),
        color: "white",
        _disabled: {
          ...disabledStyles,
        },
      },
      _active: {
        backgroundColor: mode(
          `${props.colorScheme}.600`,
          `${props.colorScheme}.600`
        )(props),
        borderColor: mode(
          `${props.colorScheme}.600`,
          `${props.colorScheme}.600`
        )(props),
      },
      _disabled: {
        ...disabledStyles,
      },
    }),
    outline: (props) => ({
      border: "2px solid",
      borderColor: mode(
        `${props.colorScheme}.500`,
        `${props.colorScheme}.400`
      )(props),
      backgroundColor: "transparent",
      color: mode(
        `${props.colorScheme}.500`,
        `${props.colorScheme}.400`
      )(props),
      // boxShadow: '1px 2px 2px hsl(220deg 60% 50% / 0.2), 2px 4px 4px hsl(220deg 60% 50% / 0.2), 4px 8px 8px hsl(220deg 60% 50% / 0.2), 8px 16px 16px hsl(220deg 60% 50% / 0.2), 16px 32px 32px hsl(220deg 60% 50% / 0.2);',
      _hover: {
        backgroundColor: mode(
          `${props.colorScheme}.500`,
          `${props.colorScheme}.500`
        )(props),
        borderColor: mode(
          `${props.colorScheme}.500`,
          `${props.colorScheme}.500`
        )(props),
        color: "white",
        _disabled: {
          ...disabledStylesOutline,
        },
      },
      _active: {
        backgroundColor: mode(
          `${props.colorScheme}.600`,
          `${props.colorScheme}.600`
        )(props),
        borderColor: mode(
          `${props.colorScheme}.600`,
          `${props.colorScheme}.600`
        )(props),
      },
      _disabled: {
        ...disabledStylesOutline,
      },
    }),
    white: (props) => ({
      border: "2px solid",
      borderColor: "white",
      backgroundColor: "white",
      color: "black",
      // boxShadow: '1px 2px 2px hsl(220deg 60% 50% / 0.2), 2px 4px 4px hsl(220deg 60% 50% / 0.2), 4px 8px 8px hsl(220deg 60% 50% / 0.2), 8px 16px 16px hsl(220deg 60% 50% / 0.2), 16px 32px 32px hsl(220deg 60% 50% / 0.2);',
      _hover: {
        _disabled: {
          ...disabledStyles,
        },
      },
      _disabled: {
        ...disabledStyles,
      },
    }),
  },
  // The default `size` or `variant` values
  defaultProps: {
    variant: "solid",
    size: "md",
  },
});
