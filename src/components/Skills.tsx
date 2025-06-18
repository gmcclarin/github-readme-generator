import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import { type Skill } from "../types/skill";
import { skillBadges } from "../assets/skillBadges";
import { Controller, useFormContext } from "react-hook-form";

export default function Skills() {
  const { control, watch, setValue } = useFormContext();

  const selectedSkills = watch("skills") || [];

  const handleToggle = (skill: Skill) => {
    const exists = selectedSkills.some((s:Skill) => s.name === skill.name);
    if (exists) {
      setValue(
        "skills",
        selectedSkills.filter((s:Skill) => s.name !== skill.name)
      );
    } else {
      setValue("skills", [...selectedSkills, skill]);
    }
  };

  return (
    <Grid container >
      {skillBadges.map((skill) => (
         <Grid size={{xs:12, sm:6, md:4, lg:2}}  key={skill.name}>
        <FormControlLabel
          key={skill.name}
          control={
            <Controller
              name="skills"
              control={control}
              render={() => (
                <Checkbox
                  checked={selectedSkills.some((s:Skill) => s.name === skill.name)}
                  onChange={() => handleToggle(skill)}
                />
              )}
            />
          }
          label={
            <img
              src={skill.badge}
              alt={skill.name}
              style={{ height: 28 }}
            />
          }
        />
        </Grid>
      ))}
    </Grid>
  );
}
