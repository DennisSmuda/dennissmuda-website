---
slug: 'serverless-api-tutorial'
title: 'Intro to serverless APIs 🍪'
description: 'How to build a serverless REST API with user authentication and mongoDB Part 1'
createdAt: 'Jul. 4, 2021'
published: true
tags:
  [
    { name: 'node.js', value: 'node' },
    { name: 'serverless', value: 'serverless' }
  ]
---

> We will be using _Vercel and MongoDB_ - cloud software which is _fast and free_, but requires you to create some accounts and do stuff via their ui.

In this Post I will show you, how to get started with API development using <a href="https://vercel.com/" target="_blank" rel="nofollower noreferer">Vercel</a> and node.js.
I recommend you _head over there and create an account_, because we will have to connect our git repo to vercel, so it can deploy your API whenever you push changes!

## Create a new project

In order for any of this to work, you need to have <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank" rel="nofollower noreferer">git</a> and <a href="https://nodejs.org/en/" target="_blank" rel="nofollower noreferer">node.js</a> installed on your machine. If you do and have been doing web dev for some time, these steps should look very familiar to you:

```bash
mkdir my-api
cd my-api
npm init -y
mkdir api
```

By default, everything inside the api-directory will get picked up as an actual API-route. So,let's start by _creating the file_ `api/users/index.js`. Inside our API this file will represent the `/users`-endpoint.

```js
// api/users/index.js

const users = [{ name: 'Jane Doe' }, { name: 'Max Poe' }] // hardcoded users for now

const getUsers = async (req, res) => {
	res.json({ users })
}

export default getUsers
```

We now have our first restful API route with minimal code! To test things out all you need to do now is start the Vercel development environment:

```bash
# follow the instructions and link your project
npx vercel dev
```

Vercel will ask you to link accounts/projects. It's pretty straightforward and you should be up and running in a couple of minutes.

By default your app will get served to `localhost:3000`. By sending a request to `/api/users` we should be able to see our two users within the response.

```bash
curl -X GET http://localhost:3000/api/users
```

I recommend using a tool like <a href="https://insomnia.rest/" target="_blank" rel="nofollower noreferer">insomnia</a> to develop your API locally. It has a lot of useful features and is of course _free_.

## Database setup

Let's create our database now! Head over to <a href="https://www.mongodb.com/" target="_blank" rel="nofollower noreferer">mongodb.com</a>, create a new cluster and stay within the free tier.

Inside the UI of your cluster, under `collections` you can _create a new database_. Afterwards, you can find the `connect` button and _connect your application_.

```bash
# look for a collection string that looks like this:
mongodb+srv://<DB_USER>:<PASSWORD>@cluster0.m1wek.mongodb.net/<DB_NAME>?retryWrites=true&w=majority
```

Now head over to <a href="https://vercel.com/" target="_blank" rel="nofollower noreferer">Vercel</a> you will need to create some _environment variables_, which you can find within your project under the _settings tab_.

![Vercel Environment Variables](images/blog/vercel_env_variables.png)

For the `JWT_SECRET` you can go ahead and just generate some random password (<a href="https://github.com/dwyl/hapi-auth-jwt2/issues/48#issuecomment-109944109" target="_blank" rel="nofollower noreferer">github issue</a> if you want to know why).

## Mongoose Models

In our repo, need need to install some packages and create some more files and folders to prepare for our _real users_.

```bash
npm i --save mongodb mongoose
npm i --save-dev @types/mongoose

mkdir models && mdkir utils
touch models/User.js
touch utils/db.js
```

Inside our `models/User.js` we will now create our Models, which are "fancy constructors compiled from `Schema` definitions" - to quote them directly.

```js
// models/User.js
import { model, Schema } from 'mongoose'

const User = model(
	'User',
	new Schema({
		username: String,
		email: String,
		password: String
	})
)

export default User
```

Next, we will modify our `utils/db.js` like so:

```js
// utils/db.js
import mongoose from 'mongoose'
let isConnected

const connectToDatabase = () => {
	if (isConnected) {
		return Promise.resolve()
	}

	return mongoose
		.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		.then((db) => {
			isConnected = db.connections[0].readyState
		})
}

export { connectToDatabase }
```

This is pretty much all you need to start talking to your database inside your endpoint. We can now _get real users_ by connnecting to our database and basically using our User model to query it:

```js
// api/users/index.js
import { connectToDatabase } from '../../utils/db'
import User from '../../models/User'

const getUsers = async (req, res) => {
	await connectToDatabase()
	const users = await User.find()

	res.json({ users })
}

export default authMiddleware(getUsers)
```

There you go! If everything went right, you can try out our `curl` from earlier and you will probably get an empty response, _but that's okay_ because we have no users stored inside our database yet!

If you really want, you can create some users by hand inside your clusters web ui, but I don't recommend doing that. Instead, we should rather _create new users_ whenever a user registers a new account within your application.

In the next blog post we will handle the _authentication_ part of our API, which will include _login/register_ routes and some middlewares to handle access control.

> Check out [the next part](/blog/serverless-auth-tutorial)

## FYI

If you want to see the _end result_ we are going to build <a href="https://github.com/DennisSmuda/serverless-sample-api" target="_blank" rel="nofollower noreferer">check out the repo</a>.
