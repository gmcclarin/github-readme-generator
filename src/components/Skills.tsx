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
    // frameworks, platforms, libraries
    {
        name: ".NET",
        badge: "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white",
    },
    {
        name: "Angular",
        badge: "https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white",
    },
    {
        name: "Angular.js",
        badge: "https://img.shields.io/badge/angular.js-%23E23237.svg?style=for-the-badge&logo=angularjs&logoColor=white"
    },
    {
        name: "Apacha Spark",
        badge: "https://img.shields.io/badge/Apache%20Spark-FDEE21?style=flat-square&logo=apachespark&logoColor=black",
    },
    {
        name:"Apollo GraphQL",
        badge: "Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql"
    },
    {
        name: "Bootstrap",
        badge: "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
    },
    {
        name: "Chart.js",
        badge: "https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white",
    },
    {
        name: "Django",
        badge: "https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white",
    },
    {
        name: "Drupal",
        badge: "https://img.shields.io/badge/drupal-%230678BE.svg?style=for-the-badge&logo=drupal&logoColor=white"
    },
    {
        name: "Expo",
        badge: "https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37",
    },
    {
        name: "express",
        badge: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
    },
    {
        name: "Fast API",
        badge: "https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi"
    },
    {
        name: "Flask",
        badge: "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white"
    }


];
