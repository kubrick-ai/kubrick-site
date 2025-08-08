// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeBlack from "starlight-theme-black";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // site: "https://kubrick-ai.com",

  integrations: [
    starlight({
      plugins: [
        starlightThemeBlack({
          navLinks: [
            {
              label: "Case Study",
              link: "/case-study/intro",
            },
          ],
          footerText:
            "Kubrick 2025. Source code available on [Github](https://github.com/kubrick-ai/kubrick-site).",
        }),
      ],
      favicon: "/favicon.ico",
      customCss: [
        "./src/styles/global.css", // Must be first (Tailwind base styles)
        "./src/styles/custom.css",
      ],
      editLink: {
        baseUrl: "https://github.com/kubrick-ai/kubrick-site/edit/main/docs",
      },
      title: "Kubrick",
      logo: {
        src: "./src/assets/logo.svg",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/kubrick-ai",
        },
      ],
      sidebar: [
        {
          label: "Case Study",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Introduction", slug: "case-study/intro" },
          ],
        },
        {
          label: "Guides",
          items: [{ label: "Get Started", slug: "guides/get-started" }],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});

