interface SocialMediaType {
  icon: string;
  link: string;
}

//Path to icons folder
const iconsPath = "/assets/icons/";

export const socialMedia: SocialMediaType[] = [
  {
    icon: iconsPath + "instagram.png",
    link: "https://www.instagram.com/",
  },
  {
    icon: iconsPath + "facebook.png",
    link: "https://www.facebook.com/",
  },
  {
    icon: iconsPath + "X.png",
    link: "https://www.twitter.com/",
  },
  {
    icon: iconsPath + "reddit.png",
    link: "https://www.reddit.com/",
  },
];
