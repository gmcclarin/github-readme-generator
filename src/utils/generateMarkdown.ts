import type { ReadMeData } from "../types/ReadMeData";

export default function generateMarkdown(data: ReadMeData): string {
  return `
    # 👋 Hi, I'm ${data.firstName}
    ${data.bio && data.bio}
    
    ## 🚀 Skills
    ${
      data.skills?.length
        ? data.skills.map((s) => `- ${s}`).join("\n")
        : "Coming soon..."
    }

    ## 🌐 Let's Connect
    ${
      data.socialMedia?.length
        ? data.socialMedia
            .map((social) => `- [${social.name}](${social.url})`)
            .join("\n")
        : "Connect with me soon!"
    }
    `.trim();
}
