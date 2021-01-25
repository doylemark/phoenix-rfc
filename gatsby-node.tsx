import * as path from "path";

import { createFilePath } from "gatsby-source-filesystem";
import { GatsbyNode } from "gatsby";

import { MdxQuery } from "./gatsby-utils";

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value: `/blog${value}`,
    });
  }
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;
  const result = await graphql<MdxQuery["data"]>(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors || !result?.data) {
    return reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const posts = result.data.allMdx.edges;

  return posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,

      component: path.resolve("./src/components/posts-page-layout.tsx"),

      context: { id: node.id },
    });
  });
};
