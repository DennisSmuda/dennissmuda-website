---
slug: "serverless-auth-tutorial"
title: "serverless authentication"
description: "How to build a serverless REST API with user authentication and mongoDB Part 2"
createdAt: "Jul. 5, 2021"
published: false
---

Welcome to _part two_ of my serverless api introduction, where we will tackle user login and registration.

Let's start with the former and create `api/auth/login.js`. Go ahead and also install `jsonwebtoken` and `bcrypt` as npm dependencies.

```js
// api/auth/login.js
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import { connectToDatabase } from "../../utils/db";
import User from "../../models/User";

/**
 * Login Function
 */
const login = async (req, res) => {
  await connectToDatabase();
  const { body } = req;
  if (!req.body) {
    return res.json({ message: `NO BODY!`, body });
  }

  try {
    await checkIfInputIsValid(body);
    const user = await User.findOne({ email: body.email });

    if (!user) {
      return res
        .status(401)
        .json({ error: "User with that e-mail does not exist." });
    }

    const token = await comparePassword(body.password, user.password, user._id);

    res.status(200).json({ token, user });
  } catch (e) {
    res.status(401).send({ error: e.message });
  }
};

function checkIfInputIsValid(eventBody) {
  if (!(eventBody.password && eventBody.password.length >= 7)) {
    throw new Error(
      "Password error. Password needs to be longer than 8 characters."
    );
  }

  if (!(eventBody.email && typeof eventBody.email === "string"))
    throw new Error("Email error. Email must have valid characters.");
}

async function comparePassword(eventPassword, userPassword, userId) {
  const match = await bcrypt.compare(eventPassword, userPassword);

  if (!match) {
    throw new Error("The credentials do not match.");
  }

  return signToken(userId);
}

function signToken(id) {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: 86400, // expires in 24 hours
  });
}

export default login;
```

Pretty straight forward, right? We check the request body to make sure the person trying to log in has actually provided credentials. We then use our Model from [the first part](/blog/serverless-api-tutorial) to see, if there is a user with that email in our database. If that is the case, our API will return a signed token alongside the user object within the response.

## CORS detour

something we have completely neglected are <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank" rel="nofollower noreferer">CORS issues</a>.

To put it simply, let's imagine we are going to have our API "serving endpoints" from some domain like `serverless-api.com`. But our client-application is running on `client-for-api.com` - now if these two domains could just share resources (information) as they pleased, we would have huge security flaws!

This is pretty much why Cross Origin Resource Sharing (_CORS_) exist - so that developers can specify which "origins" should be able to have access.

I would still recommend checking out the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank" rel="nofollower noreferer">MDN article</a> on the topic, if you want to delve deep.

## Configuration and Middlewares
