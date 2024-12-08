import autoprefixer from "autoprefixer";
import { purgeCSSPlugin } from "@fullhuman/postcss-purgecss";

export default {
  plugins: [
    autoprefixer(),
    purgeCSSPlugin({
      content: ["./**/*.html", "./**/*.js"],
    }),
  ],
};
