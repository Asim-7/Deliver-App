import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "yse2fh2x",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// Run this to add exception for localHost 19006 CORS policy
// sanity cors add http://localhost:19006

export default client;
