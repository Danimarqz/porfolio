import type TranslationMessages from "@/types.d.ts"

export function getExperience(m: TranslationMessages) {
  return [
    {
      id: "full_and_fast",
      date: m.date_full_and_fast,
      title: m.title_full_and_fast ?? m.title_SDE,
      company: m.company_full_and_fast,
      description: m.description_full_and_fast,
      tech: [
        "Python",
        "AWS Lambda",
        "DynamoDB",
        "S3",
        "CloudFormation",
        "Cognito",
        "IAM",
        "ECR",
        "MQTT",
        "ETL Pipelines",
      ],
    },
    {
      id: "saec_data",
      date: m.date_saec_data,
      title: m.title_saec_data ?? m.title_SDE,
      company: m.company_saec_data,
      description: m.description_saec_data,
      tech: [
        "Odoo",
        "Python",
        "PostgreSQL",
        "Docker",
        "CI/CD",
      ],
    },
    {
      id: "freelance",
      date: m.date_freelance,
      title: m.title_freelance ?? m.title_SDE,
      company: m.company_freelance,
      description: m.description_freelance,
      link: "https://consultoria.danimarqz.dev",
      tech: [
        "Astro + Preact",
        "FastAPI",
        "Docker",
        "AWS (EC2, S3, CloudFront signed cookies)",
        "PostgreSQL",
        "Video streaming",
      ],
    },
    {
      id: "big_formacion",
      date: m.date_big_formacion ?? "08/2020 - 09/2024",
      title: m.title_big_formacion,
      company: m.company_big_formacion,
      description: m.description_big_formacion,
      tech: [
        "Moodle",
        "AWS",
        "Docker",
        "Video streaming",
        "Data analytics",
      ],
    },
  ]
}
