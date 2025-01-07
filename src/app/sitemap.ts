import { MetadataRoute } from "next";
import { blogsDeutsch, blogsEnglish } from "blogs";

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
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changefreq: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/en/blogs`,
          de: `${BASE_URL}/de/blogs`,
        },
      },
    },
  ];

  const blogPages = blogsEnglish.map((blog) => ({
    url: `${BASE_URL}/blogs/${blog.slug}`,
    // lastModified: new Date(blog.date),
    changefreq: "monthly",
    priority: 0.8,
    alternates: {
      languages: {
        en: `${BASE_URL}/en/blogs/${blog.slug}`,
        de: `${BASE_URL}/de/blogs/${blog.slug}`,
      },
    },
  }));

  const blogPagesDeutsch = blogsDeutsch.map((blog) => ({
    url: `${BASE_URL}/de/blogs/${blog.slug}`,
    // lastModified: new Date(blog.date),
    changefreq: "monthly",
    priority: 0.8,
    alternates: {
      languages: {
        en: `${BASE_URL}/en/blogs/${blog.slug}`,
        de: `${BASE_URL}/de/blogs/${blog.slug}`,
      },
    },
  }));

  return [...staticPages, ...blogPages, ...blogPagesDeutsch];
}
