import { extendTheme } from "@chakra-ui/react";
import { getColors } from "./designSystem/colors/getColors";
import colorsToken from "./designSystem/colors/colors.json";
import { ButtonTheme as Button } from "./designSystem/buttonTheme/buttonTheme";
import { HeadingTheme as Heading } from "./designSystem/headingTheme/headingTheme";
import { TextTheme as Text } from "./designSystem/textTheme/textTheme";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = getColors({ colors: colorsToken.color });

const theme = extendTheme({
  config,
  colors,
  components: {
    Button,
    Heading,
    Text,
  },
  styles: {
    global: {
      body: {
        bg: "black",
        width: "100%",
      },
    },
  },
});

export default theme;
