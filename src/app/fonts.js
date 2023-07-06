import localFont from "next/font/local";

const fixelFont = localFont({
  src: [
    {
      path: "../../public/fonts/FixelText-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/FixelText-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../public/fonts/FixelText-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../../public/fonts/FixelText-Bold.ttf",
      weight: "700",
    },
  ],
});

export default fixelFont;
