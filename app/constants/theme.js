import { Dimensions } from "react-native";
const { width, heigth } = Dimensions.get("window");

export const COLORS = {
  //base
  primary: "#9666a8",
  secondary: "#",

  //colors
  black: "1E1F20",
  white: "#FFFFFF",

  //autre colors
  transparent: "transparent",
};

export const SIZES = {
  //taille globale
  base: 8,
  font: 14,
  radius: 30,
  radiusDrawer: 12,
  padding: 10,
  padding2: 12,
  paddingDrawer: 24,

  //taille police
  grandTitre: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,
};

export const FONTS = {
  grandTitre: {
    fontFamily: "HKGrotesk-Regular",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: { fontFamily: "HKGrotesk-Light", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "HKGrotesk-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "HKGrotesk-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "HKGrotesk-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  body1: {
    fontFamily: "HKGrotesk-Regular",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "HKGrotesk-Regular",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "HKGrotesk-Regular",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "HKGrotesk-Regular",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: "HKGrotesk-Regular",
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};
