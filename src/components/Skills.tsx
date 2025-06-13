import { Checkbox, FormControlLabel } from "@mui/material";
import { type Skill } from "../types/skill";

export default function Skills() {
  return (
    <>
      {skills.map((s) => (
        <Skill {...s} />
      ))}
    </>
  );
}

const Skill = (skill: Skill) => (
  <FormControlLabel label={skill.name} control={<Checkbox />} />
);

const skills: Skill[] = [
    

];
