---
slug: "serverless-api-tutorial"
title: "Introduction to serverless APIs"
description: "How to build a serverless REST API with user authentication and mongoDB"
createdAt: "Jul. 4, 2021"
---

> We will be using _Vercel and MongoDB_ - cloud software which is _fast and free_, but requires you to create some accounts and do stuff via their ui.

In this Post I will show you, how to get started with API development using <a href="https://vercel.com/" target="_blank" rel="nofollower noreferer">Vercel</a> and node.js.
I recommend you _head over there and create an account_, because we will have to connect our git repo to vercel, so it can deploy your API whenever you push changes!

## Create a new project

This should hopefully be familiar to you, you need to have <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank" rel="nofollower noreferer">git</a> and <a href="https://nodejs.org/en/" target="_blank" rel="nofollower noreferer">node.js</a> installed on your machine.

```bash
mkdir my-api
cd my-api
npm init -y
mkdir api
```

By default, everything inside the api-directory will get picked up as an actual API-route. Let's start by _creating the file_ `api/users/index.js`, which will represent our `/api/users` route.

```js
// api/users/index.js

const users = [{ name: "Jane Doe" }, { name: "Max Poe" }]; // hardcoded users for now

const getUsers = async (req, res) => {
  res.json({ users });
};

export default getUsers;
```

We now have our first restful API route with minimal code! To test things out all you need to do now is start the Vercel development environment:

```bash
npx vercel dev      # follow the instructions and link your project
```

Vercel will ask you to link accounts/projects. It's pretty straightforward and you should be up and running in a couple of minutes.

By default your app will get served to `localhost:3000`, with a tool like <a href="https://insomnia.rest/" target="_blank" rel="nofollower noreferer">insomnia</a> you can now send a request to `localhost:3000/api/users` and see our two users within the response.

## Database setup

We need need to install some packages and create some more files and folders to prepare for _real users_.

```bash
npm i --save mongodb mongoose
npm i --save-dev @types/mongoose

mkdir models && mdkir utils
touch models/User.js
touch utils/db.js
```

### Models

In order to keep things simple,
<a href="https://www.mongodb.com/" target="_blank" rel="nofollower noreferer">mongo</a>
