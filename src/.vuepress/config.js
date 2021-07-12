const { description } = require("../../package");

module.exports = {
  base: "/",
  theme: "book",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Swords of Legends Online Wiki",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#0EA5E9" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "swordsoflegends/wiki",
    editLinks: true,
    docsDir: "src",
    editLinkText: "Edit this page on Github",
    lastUpdated: "Last Updated",
    nav: [
      {
        text: "Official Website",
        link: "https://join.solo.gameforge.com",
      },
    ],
    sidebar: {
      "/": [
        {
          title: "",
          collapsable: false,
          sidebarDepth: 0,
          children: [["/", "Home"]],
        },
        {
          title: "Classes",
          collapsable: false,
          children: [
            ["/classes/reaper", "Reaper"],
            ["/classes/berserker", "Berserker"],
            ["/classes/spellsword", "Spellsword"],
            ["/classes/bard", "Bard"],
            ["/classes/summoner", "Summoner"],
            ["/classes/spearmaster", "Spearmaster"],
          ],
        },
        {
          title: "Mechanics",
          collapsable: false,
          children: [
            ["/mechanics/lifeskills", "Life Skills"],
            ["/mechanics/alliances", "Alliances"],
          ],
        },
        {
          title: "Tips",
          collapsable: false,
          children: [
            ["/tips/leveling", "Leveling"],
            ["/tips/guides", "Guides"],
          ],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    [
      "vuepress-plugin-clean-urls",
      {
        normalSuffix: "/",
        indexSuffix: "/",
        notFoundPath: "/404.html",
      },
    ],
  ],
};
