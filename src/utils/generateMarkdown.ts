import { type ReadMeData } from "../schemas/readMeSchema";
import { socialBadgeMap } from "./socialMediaBadgeMap";

export default function generateMarkdown(data: ReadMeData): string {
  return`
${data.bannerUrl ? `<p align="center"><img src="${data.bannerUrl}" alt="banner" /></p>\n\n` : ""}
<h1 align="center">✨ ${data.firstName} ${data.lastName} ✨</h1>
<p align="center">
  ${data.bio ?? ""}
</p>

<h2 align="center">Fun Fact</h2>
<p align="center">
  ${data.funFact && data.funFact}
</p>

<h2 align="center">🚀 Skills</h2>
<div align="center">

${data.skills?.length
  ? data.skills.map((s) => `![${s.name}](${s.badge})`).join(" ")
  : "_Coming soon..._"
}
</div>

<h2 align="center">🖥️ Languages</h2>
<div align="center">

  ${
    data.languages?.length
      ? data.languages.map((l) => `![${l.name}](${l.badge})`).join(" ")
      : "_Coming soon..._"
  }
</div>

<h2 align="center">🌐 Let's Connect</h2>
<div align="center">

${
  data.socialMedia?.length
    ? data.socialMedia
        .filter((social) => !!social.url && !!social.name)
        .map((social) => {
          const badge = socialBadgeMap[social.name] ?? {
            label: social.name,
            logo: "link",
            color: "grey"
          }

          return `[![${badge.label}](https://img.shields.io/badge/${encodeURIComponent(
            badge.label
          )}-${badge.color}?logo=${encodeURIComponent(
            badge.logo
          )}&logoColor=white)](${social.url})`;
        })
        .join(" ") + "\n\n"
    : "Connect with me soon!"
}
</div>
`.trim();
}
