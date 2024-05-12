import type { MainNavItem } from "@/types";

export type SiteConfig = typeof siteConfig;

const links = {
  x: "https://twitter.com/sadmann17",
  github: "https://github.com/sadmann7/skateshop",
  githubAccount: "https://github.com/sadmann7",
  discord: "https://discord.com/users/sadmann7",
  calDotCom: "https://cal.com/sadmann7",
};

export const siteConfig = {
  name: "Qest - AWS Amplify",
  description: "Demo pro ukázku AWS Amplify",
  url: "https://skateshop.sadmn.com",
  ogImage: "https://skateshop.sadmn.com/opengraph-image.png",
  links,
  mainNav: [
    {
      title: "Menu",
      items: [
        {
          title: "Vytvoř qesťáka",
          href: "/form",
          items: [],
        },
        {
          title: "Upload do S3",
          href: "/upload",
          items: [],
        },
        {
          title: "Login",
          href: "/login",
          items: [],
        },
        {
          title: "Pub/sub",
          href: "/qest-list",
          items: [],
        },
      ],
    },
  ] satisfies MainNavItem[],
};
