import { TAGS } from "./tags"
import type TranslationMessages from "@/types.d.ts"

export function getPersonalProjects(m: TranslationMessages) {
  return [
    {
      id: "oposita_simulator",
      title: "OpositaTCAE Simulator",
      description: m.oposita_simulator,
      image: "/projects/opositatcae.png",
      github: "https://github.com/Danimarqz/inscripcion-moodle",
      tags: [TAGS.AstroPreact, TAGS.FastAPI, TAGS.Docker, TAGS.Postgres, TAGS.AWS],
    },
    {
      id: "quiz_analysis",
      title: "Quiz Analysis Engine",
      description: m.quiz_analysis,
      image: "/projects/quizanalysis.png",
      github: "https://consultoria.danimarqz.dev/blog/",
      tags: [TAGS.FastAPI, TAGS.Pandas, TAGS.Postgres, TAGS.Docker],
    },
    {
      id: "quizreport",
      title: "Quizreport",
      description: m.quizreport,
      image: "/projects/quizreport.png",
      github: "https://consultoria.danimarqz.dev/blog/",
      tags: [TAGS.Pandas, TAGS.FastAPI, TAGS.Kubernetes],
    },
    {
      id: "quiz_percentile",
      title: "Quiz Percentile",
      description: m.quiz_percentile,
      image: "/projects/quizpercentile.png",
      github: "https://consultoria.danimarqz.dev/blog/",
      tags: [TAGS.Pandas, TAGS.Postgres],
    },
    {
      id: "ecommerce",
      title: "E-commerce",
      description: m.ecommerce,
      image: "/projects/api.png",
      github: "https://github.com/Danimarqz/animalhada_BE",
      tags: [TAGS.TypeScript, TAGS.Cloudflare],
    },
  ]
}

export function getWorkProjects(m: TranslationMessages) {
  return [
    {
      id: "opositatcae",
      title: "OpositaTCAE",
      description: m.opositatcae_desc,
      image: "/projects/opositatcae.png",
      link: "https://opositatcae.com/",
      github: "https://github.com/Danimarqz/inscripcion-moodle",
      tags: [TAGS.AstroPreact, TAGS.FastAPI, TAGS.Docker, TAGS.AWSFull, TAGS.Postgres],
    },
    {
      id: "turismovalencia",
      title: m.turismovalencia_title,
      description: m.turismovalencia_desc,
      link: "https://turismovalencia.bigformacion.com",
      image: "/projects/turismovalencia.webp",
      tags: [TAGS.AWSFull, TAGS.Cloudflare, TAGS.SASS],
    },
    {
      id: "crou",
      title: m.crou_titulo,
      description: m.crou_desc,
      link: "https://crou.bigformacion.com",
      image: "/projects/crou.webp",
      tags: [TAGS.AWSFull, TAGS.Cloudflare, TAGS.SASS],
    },
  ]
}
