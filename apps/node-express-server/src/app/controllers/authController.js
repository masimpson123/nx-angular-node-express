import { writeFile } from 'fs'
import * as jwt from 'jsonwebtoken'

// secrets can be permanent.
// tokens don't last very long.

export function auth(req, res) {
  // does user exist?
  // if not create / write a secret.
  // if so fetch the relevant secret.
  const userSecret = Math.random().toString()
  writeFile('./secrets/topSecret2.txt', userSecret, err => {
    if (err) {
      console.error(err)
      return
    }
  })

  // generate and return the token.
  const token = jwt.sign({username:"Michael"}, userSecret + process.env.ENV_SECRET, { expiresIn: '10s' })
  res.send(`{"token":"` + token + `"}`)
}