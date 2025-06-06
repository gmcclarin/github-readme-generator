export interface ReadMeData {
    firstName: string;
    lastName?: string;
    bio?: string;
    funFact?: string;
    phone?: string;
    email?: string;
    socialMedia: SocialMedia;
    skills: string[];
}


export interface SocialMedia {
    name: SocialMediaName;
    url: string;
    icon?: string;
}

export type SocialMediaName = 
  "Github"
| "Instagram"
| "LinkedIn"
| "Medium"
| "Twitter"
| "Facebook"
| "Leetcode"
| "Discord"
| "Dribble"
| "YouTube"
| "Dev.to"
| "Reddit"
| "Stackoverflow"
| "Other"
