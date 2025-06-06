import type { ReadMeData } from "../types/ReadMeData";

export default function generateMarkdown(data: ReadMeData): string  {
    return `
    # 👋 Hi, I'm ${data.firstName}
    ${data.bio && data.bio}
    
    ## 🚀 Skills
    ${data.skills && (data.skills.map((s) => s))}

    `
}  