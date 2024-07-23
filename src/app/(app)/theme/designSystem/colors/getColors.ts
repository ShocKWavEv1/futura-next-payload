export const getColors = ({ colors }: { colors: any }) => {
  const colorsNames = Object.keys(colors);
  const colorsFormat: any = {};
  colorsNames.forEach((colorName) => {
    colorsFormat[colorName] = colors[colorName]?.value;
  });
  return colorsFormat;
};
