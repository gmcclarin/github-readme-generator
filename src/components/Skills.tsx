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
  <FormControlLabel label={skill.name} control={<Checkbox    />} />
);

const skills: Skill[] = [
    {
        name: "Python",
        badge: ""
    },
    {
        name: "C#",
        badge: ""
    },
    {
        name: "AmazonDynamoDb",
        badge: "https://img.shields.io/badge/Amazon%20DynamoDB-4053D6?style=for-the-badge&logo=Amazon%20DynamoDB&logoColor=white"
    },
    {
        name: "Cassandra",
        badge: "https://img.shields.io/badge/cassandra-%231287B1.svg?style=for-the-badge&logo=apache-cassandra&logoColor=white"
    },
    {
        name:" MariaDB",
        badge: "https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white"
    },
    {
        name: "Microsoft SQL Server",
        badge: "https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft%20sql%20server&logoColor=white"
    },
    {
        name: "MongoDB",
        badge: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
    },
    {
        name: "MySQL",
        badge: "https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white",
    },
    {
        name: "Postgres",
        badge: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
    },
    {
        name: "Redis",
        badge: "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white",
    },
    {
        name: "SQLite",
        badge: "https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white"
    },
    {
        name: "Terradata",
        badge: "https://img.shields.io/badge/Teradata-F37440?style=for-the-badge&logo=teradata&logoColor=white"
    },
    

];
