const lightBg = "bg-[#cd99ff]";
const darkBg = "bg-[#805af5]";
const darkText = "text-[#805af5]";
const lighttext = "text-[#cd99ff]";
const darkBorder = " border-2 border-[#805af5]";
const lightBorder = "border-2 border-[#cd99ff]";

const lightModeText = "text-slate-950";
const darkModetext = "text-slate-200";

const lightModeBg = "bg-slate-200";
const darkModeBg = "text-slate-200";

export const styles = {
  colors: {
    primaryBgColor: `${darkBg}`,
    lightBg: `${lightBg}`,
    primaryTextColor: `${darkText}`,
    lightText: `${lighttext}`,
  },
  hover: {
    lightText: `hover:text-[#cd99ff]`,
    darkText: `hover:text-[#805af5]`,
    lightBg: `hover:bg-[#cd99ff]`,
    darkBg: `hover:bg-[#805af5]`,
    lightBorder: `hover:border-2 hover:border-[#cd99ff]`,
    darkBorder: ` hover:border-2 hover:border-[#805af5]`,
  },
  pad: {
    padSmall: "p-2",
    padMid: "p-4",
    padLarge: "p-6",
  },
  gap: {
    gapSmall: "g-2",
    gapMid: "g-4",
    gapLarge: "g-6",
  },
  border: {
    lightBorder: `${lightBorder}`,
    darkBorder: `${darkBorder}`,
  },
  font: {
    small: "text-xs",
    mid: "text-lg",
    large: "text-2xl",
  },
  mode: {
    lightText: `${lightModeText}`,
    darkText: `${darkModetext}`,
    lightBg: `${lightModeBg}`,
    darkBg: `${darkModeBg}`,
  },
};
