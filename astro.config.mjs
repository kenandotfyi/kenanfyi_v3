// @ts-check
import { defineConfig } from "astro/config";
import { fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://kenan.fyi",
  scopedStyleStrategy: "class",
  fonts: [
    {
      provider: fontProviders.local(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      options: {
        variants: [
          {
            src: ["./src/lib/fonts/JetBrainsMono-Regular.woff2"],
          },
        ],
      },
    },
  ],
  integrations: [mdx(), icon()],
});
