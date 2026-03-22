import FastAPI from "@/components/icons/FastAPI.astro"
import Docker from "@/components/icons/Docker.astro"
import AstroIcon from "@/components/icons/Astro.astro"
import AWS from "@/components/icons/AWS.astro"
import Postgres from "@/components/icons/Postgres.astro"
import PandasIcon from "@/components/icons/Pandas.astro"
import KubernetesIcon from "@/components/icons/Kubernetes.astro"
import Cloudflare from "@/components/icons/Cloudflare.astro"
import TypeScriptIcon from "@/components/icons/TypeScript.astro"
import SASS from "@/components/icons/SASS.astro"

export const TAGS = {
  FastAPI: {
    name: "FastAPI",
    class: "bg-[#088373] text-white",
    icon: FastAPI,
  },
  Docker: {
    name: "Docker",
    class: "bg-[#0f4c75] text-white",
    icon: Docker,
  },
  AstroPreact: {
    name: "Astro + Preact",
    class: "bg-[#4338CA] text-white",
    icon: AstroIcon,
  },
  AWS: {
    name: "AWS",
    class: "bg-black text-white",
    icon: AWS,
  },
  AWSFull: {
    name: "AWS (EC2, S3, CloudFront)",
    class: "bg-black text-white",
    icon: AWS,
  },
  Postgres: {
    name: "PostgreSQL",
    class: "bg-[#0B7285] text-white",
    icon: Postgres,
  },
  Pandas: {
    name: "Pandas",
    class: "bg-[#6B21A8] text-white",
    icon: PandasIcon,
  },
  Kubernetes: {
    name: "Kubernetes",
    class: "bg-[#1D4ED8] text-white",
    icon: KubernetesIcon,
  },
  Cloudflare: {
    name: "Cloudflare",
    class: "bg-black text-white",
    icon: Cloudflare,
  },
  TypeScript: {
    name: "TypeScript",
    class: "bg-black text-white",
    icon: TypeScriptIcon,
  },
  SASS: {
    name: "SASS",
    class: "bg-[#bf4080] text-white",
    icon: SASS,
  },
} as const
