module.exports = {
  //-- SITE SETTINGS -----
  author: "@aescaba",
  siteTitle: "Amanda Escaba",
  siteShortTitle: "ae", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "Designer, developer, & artist based in New York.",
  siteUrl: "https://amandaescaba.com/",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Designer, Developer, & Artist", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#A7C4E7",
      tertiary: "#83AAD9",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
      link: "#F4C416",
      special: "#FFA35C",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#254B7A",
      tertiary: "#194478",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#1D1D20",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
      link: "#FFE482",
      special: "#FFA35C",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- ARTICLES SECTION SETTINGS -----
  // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
  // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}
  mediumRssFeed:
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konstantinmuenster",
  shownArticles: 3,

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1n4lYfD1M7ZoGZGENIhkVUaDjUM4hhpkh/view?usp=sharing",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aescaba/",
    },
    {
      name: "Github",
      url:
        "https://github.com/aescaba/",
    },
    // {
    //   name: "Behance",
    //   url: "https://www.behance.net/konstanmnster",
    // },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "Projects",
        url: "/#projects",
      },
      {
        name: "About Me",
        url: "/#about",
      },
    ],
    button: {
      name: "Contact",
      url: "/#contact",
    },
  },
  footerLinks: [
    // {
    //   name: "powered by gatsby",
    //   url: "https://www.gatsbyjs.com/",
    // },
    // {
    //   name: "Imprint",
    //   url: "/imprint",
    // },
  ],
  // projectLinks: [
  //   {
  //     name: "Blue Book",
  //     url: "/blue-book"
  //   },
  //   {
  //     name: "Capstone",
  //     url: "/capstone"
  //   },
  //   {
  //     name: "Green Line Counter",
  //     url: "/gl-counter"
  //   },
  //   {
  //     name: "Tracker",
  //     url: "/tracker"
  //   },
  //   {
  //     name: "University Marketing",
  //     url: "/uni-mktg"
  //   },
  // ]
}
