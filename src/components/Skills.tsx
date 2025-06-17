import { Checkbox, FormControlLabel } from "@mui/material";
import { type Skill } from "../types/skill";
import { skillBadges } from "../assets/skillBadges";
import {  Grid } from "@mui/system";

export default function Skills() {
  return (
    <Grid container>
      {skillBadges.map((s) => (
        <Grid size={{xs: 12, sm: 6, md: 4, lg: 2 }}><Skill {...s} /></Grid>
      ))}
    </Grid>
  );
}

const Skill = (skill: Skill) => (
  <FormControlLabel
    control={<Checkbox />}
    label={
      <img
        src={skill.badge}
        alt={skill.name}
        style={{ height: 28 }} 
      />
    }
  />
);
