import { MetadataRoute } from "next";
import { projectsDeutsch, projectsEnglish } from "projects";

const BASE_URL = "https://www.quitty.ch";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changefreq: "daily",
      priority: 1,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/`,
          de: `${BASE_URL}/de`,
        },
      },
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/about`,
          de: `${BASE_URL}/de/about`,
        },
      },
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/contact`,
          de: `${BASE_URL}/de/contact`,
        },
      },
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/services`,
          de: `${BASE_URL}/de/services`,
        },
      },
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/projects`,
          de: `${BASE_URL}/de/projects`,
        },
      },
    },
  ];

  const projectPages = projectsEnglish.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(project.date),
    changefreq: "monthly",
    priority: 0.8,
    alternates: {
      languages: {
        en: `${BASE_URL}/en/projects/${project.slug}`,
        de: `${BASE_URL}/de/projects/${project.slug}`,
      },
    },
  }));

  const projectPagesDeutsch = projectsDeutsch.map((project) => ({
    url: `${BASE_URL}/de/projects/${project.slug}`,
    lastModified: new Date(project.date),
    changefreq: "monthly",
    priority: 0.8,
    alternates: {
      languages: {
        en: `${BASE_URL}/en/projects/${project.slug}`,
        de: `${BASE_URL}/de/projects/${project.slug}`,
      },
    },
  }));

  return [...staticPages, ...projectPages, ...projectPagesDeutsch];
}
