import { Grid } from "@mui/system";
import { languageBadges } from "../assets/languages";
import type { Language } from "../types/language";
import { Checkbox, FormControlLabel } from "@mui/material";

export default function Languages() {
    return (
        <Grid container>
            {languageBadges.map((l) => (
                <Grid size={{xs: 12, sm: 6, md: 4, lg: 2 }}>
                    <Language {...l} />
                </Grid>
            ))}
        </Grid>
    )
}

const Language = (language: Language) => (
  <FormControlLabel
    control={<Checkbox />}
    label={
      <img
        src={language.badge}
        alt={language.name}
        style={{ height: 28 }} 
      />
    }
  />
);