import { _ as __glob_0_0 } from "../../../immutable/chunks/bevy-run-get-started-0f1aea50.js";
import { _ as __glob_0_1 } from "../../../immutable/chunks/hello-world-4f7b32ac.js";
import { _ as __glob_0_2 } from "../../../immutable/chunks/serverless-api-tutorial-fee14790.js";
import { _ as __glob_0_3 } from "../../../immutable/chunks/serverless-auth-tutorial-ac079489.js";
import "../../../immutable/chunks/index-0082f715.js";
async function get() {
  const allPostFiles = { "./content/bevy-run-get-started.md": __glob_0_0, "./content/hello-world.md": __glob_0_1, "./content/serverless-api-tutorial.md": __glob_0_2, "./content/serverless-auth-tutorial.md": __glob_0_3 };
  const allPosts = Object.entries(allPostFiles).map(([path, post]) => {
    const postPath = path.slice(10, -3);
    return {
      ...post.metadata,
      path: postPath
    };
  });
  const posts = allPosts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  if (!allPosts.length) {
    return { status: 404 };
  }
  return { body: { posts } };
}
export { get };
