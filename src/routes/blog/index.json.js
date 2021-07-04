import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const getAllPosts = () =>
  fs.readdirSync("content").map((fileName) => {
    const post = fs.readFileSync(path.resolve("content", fileName), "utf-8");
    return grayMatter(post).data;
  });

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  const posts = getAllPosts();
  posts.sort(function (a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  const publishedPosts = posts.filter((post) => {
    return post.published === true;
  });
  if (dev) {
    res.end(JSON.stringify(posts));
  } else {
    res.end(JSON.stringify(publishedPosts));
  }
}
