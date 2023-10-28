import { createClient, type MicroCMSQueries } from "microcms-js-sdk";
import type { Blog, BlogResponse } from "../types/blog";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({
    endpoint: "blog",
    queries: queries!,
  });
};
export const getBlogDetail = async (contentId: string) => {
  return await client.getListDetail<Blog>({ endpoint: "blog", contentId });
};
