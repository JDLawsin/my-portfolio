import { createClient } from "contentful";

const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE || "hq1oyu7wqx7r",
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    "yiANrwCVMkhi143_8NdXEOOyCgp4OnlNA3VC0I0_JqA",
});

export default contentfulClient;
