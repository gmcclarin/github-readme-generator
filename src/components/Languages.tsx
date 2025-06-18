import { languageBadges } from "../assets/languages";
import type { Language } from "../types/language";
import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export default function Languages() {
  const { control, watch, setValue } = useFormContext();

  const selectedLanguages = watch("languages") || [];

  const handleToggle = (language: Language) => {
    const exists = selectedLanguages.some((l:Language) => l.name === language.name);
    if (exists) {
      setValue(
        "languages",
        selectedLanguages.filter((l:Language) => l.name !== language.name)
      );
    } else {
      setValue("languages", [...selectedLanguages, language]);
    }
  };

  return (
    <Grid container spacing={2}>
      {languageBadges.map((language) => (
        <Grid size={{xs:12, sm:6, md:4, lg:2}}  key={language.name}>
          <FormControlLabel
            control={
              <Controller
                name="languages"
                control={control}
                render={() => (
                  <Checkbox
                    checked={selectedLanguages.some(
                      (l:Language) => l.name === language.name
                    )}
                    onChange={() => handleToggle(language)}
                  />
                )}
              />
            }
            label={
              <img
                src={language.badge}
                alt={language.name}
                style={{ height: 28 }}
              />
            }
          />
        </Grid>
      ))}
    </Grid>
  );
}
