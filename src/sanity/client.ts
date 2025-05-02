import { create } from "domain";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "zb7sj3m7",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: false,
});
