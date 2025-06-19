import { type ReadMeData } from "../schemas/readMeSchema";

export default function generateMarkdown(data: ReadMeData): string {
  return`
# 👋 Hi, I'm ${data.firstName}
    ${data.bio && data.bio}
    
## Fun Fact
    ${data.funFact && data.funFact}

## 🚀 Skills
${
  data.skills?.length
    ? data.skills.map((s) => `![${s.name}](${s.badge})`).join(" ")
    : "_Coming soon..._"
}


## 🖥️ Languages
${
  data.languages?.length
    ? data.languages.map((l) => `![${l.name}](${l.badge})`).join(" ")
    : "_Coming soon..._"
}
## 🌐 Let's Connect
${
  data.socialMedia?.length
    ? data.socialMedia
        .filter((social) => !!social.url && !!social.name)
        .map((social) => `- [${social.name}](${social.url})`)
        .join("\n")
    : "Connect with me soon!"
}
`.trim();
}
