// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import { createInlineSvgUrl } from "@astrojs/starlight/expressive-code";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // site: "https://kubrick-ai.com",

  integrations: [
    starlight({
      components: {
        Hero: "./src/components/Hero.astro",
        Header: "./src/components/Header.astro",
        Footer: "./src/components/Footer.astro",
        Sidebar: "./src/components/Sidebar.astro",
        PageFrame: "./src/components/PageFrame.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
        SiteTitle: "./src/components/SiteTitle.astro",
        Search: "./src/components/Search.astro",
        SocialIcons: "./src/components/SocialIcons.astro",
        PageTitle: "./src/components/PageTitle.astro",
        MarkdownContent: "./src/components/MarkdownContent.astro",
        ContentPanel: "./src/components/ContentPanel.astro",
        TwoColumnContent: "./src/components/TwoColumnContent.astro",
        Pagination: "./src/components/Pagination.astro",
        TableOfContents: "./src/components/TableOfContents.astro",
        PageSidebar: "./src/components/PageSidebar.astro",
      },
      customCss: [
        "@fontsource/geist-mono/100.css",
        "@fontsource/geist-mono/200.css",
        "@fontsource/geist-mono/300.css",
        "@fontsource/geist-mono/400.css",
        "@fontsource/geist-mono/500.css",
        "@fontsource/geist-mono/600.css",
        "@fontsource/geist-mono/700.css",
        "@fontsource/geist-mono/800.css",
        "@fontsource/geist-mono/900.css",
        "@fontsource/geist-sans/100.css",
        "@fontsource/geist-sans/200.css",
        "@fontsource/geist-sans/300.css",
        "@fontsource/geist-sans/400.css",
        "@fontsource/geist-sans/500.css",
        "@fontsource/geist-sans/600.css",
        "@fontsource/geist-sans/700.css",
        "@fontsource/geist-sans/800.css",
        "@fontsource/geist-sans/900.css",
        "./src/styles/layers.css",
        "./src/styles/theme.css",
        "./src/styles/base.css",
      ],

      title: "Kubrick",
      favicon: "/favicon.ico",
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
      editLink: {
        baseUrl: "https://github.com/kubrick-ai/kubrick-site/edit/main/docs",
      },
      expressiveCode: {
        themes: ["github-dark-default", "github-light-default"],
        styleOverrides: {
          codeBackground: "var(--code-background)",
          borderWidth: "0px",
          borderRadius: "calc(var(--radius) + 4px)",
          gutterBorderWidth: "0px",
          frames: {
            editorBackground: "var(--code-background)",
            terminalBackground: "var(--code-background)",
            copyIcon: createInlineSvgUrl(
              `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path></svg>`,
            ),
          },
          textMarkers: {
            markBackground: "var(--mark-background)",
            markBorderColor: "var(--border)",
          },
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
