export interface AboutSkill {
  name: string;
  image: string;
}

export interface AboutSkillsCategory {
  category: string;
  skills: AboutSkill[];
}

export const aboutSkills: AboutSkillsCategory[] = [
  {
    category: "frontend",
    skills: [
      {
        name: "next.js",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506837/logos--nextjs-icon_tgddsm.webp",
      },
      {
        name: "react",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506839/logos--react_vinuix.webp",
      },
      {
        name: "typescript",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506837/devicon--typescript_tbxadv.webp",
      },
      {
        name: "javascript",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506838/logos--javascript_g3mols.webp",
      },
      {
        name: "tailwindcss",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506839/logos--tailwindcss-icon_xjbr6o.webp",
      },
      {
        name: "shadcn",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506842/vscode-icons--file-type-light-shadcn_msshfl.webp",
      },
      {
        name: "redux",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506839/logos--redux_lrqyxf.webp",
      },
      {
        name: "html",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506838/html_zebcog.webp",
      },
      {
        name: "css",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506837/css3_jlzkzf.webp",
      },
    ],
  },
  {
    category: "backend",
    skills: [
      {
        name: "node.js",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506837/logos--nodejs-icon_krtfiw.webp",
      },
      {
        name: "express",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506837/devicon--express_ldgryb.webp",
      },
      {
        name: "typescript",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "javascript",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506838/logos--javascript_g3mols.webp",
      },
      {
        name: "mongodb",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506838/logos--mongodb-icon_ldafa3.webp",
      },
      {
        name: "mongoose",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506837/devicon--mongoose_gxs904.webp",
      },
      {
        name: "prisma",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506842/skill-icons--prisma_h8gasb.webp",
      },
      {
        name: "postgresql",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506839/logos--postgresql_dbuipm.webp",
      },
    ],
  },
  {
    category: "tools",
    skills: [
      {
        name: "github",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506842/mdi--github_lgnumu.webp",
      },
      {
        name: "vs code",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506840/material-icon-theme--vscode_c8gmjg.webp",
      },
      {
        name: "vercel",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506839/logos--vercel-icon_gxta2q.webp",
      },
      {
        name: "postman",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506839/logos--postman-icon_sgv37v.webp",
      },
      {
        name: "npm",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506838/logos--npm-icon_mcfoqg.webp",
      },
      {
        name: "firebase",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506838/logos--firebase-icon_dbpusy.webp",
      },
      {
        name: "figma",
        image: "https://res.cloudinary.com/dnfjdkspi/image/upload/v1760506838/logos--figma_ed2vfk.webp",
      },
    ],
  },
];
