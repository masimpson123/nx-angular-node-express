// an auth service
import { writeFile } from 'fs'
import * as jwt from 'jsonwebtoken'

export function auth(req, res) {

  // "root" directory:
  // console.log(process.cwd());

  // check payload for password
  // if incorrect
  // res.sendStatus(401)
  // else

  // create a secret
  const secret = Math.random().toString() + "BINGO-SECRET"

  //create a token that is randomized or altered by the secret
  const token = jwt.sign({username:"Michael"}, secret, { expiresIn: '10s' })

  // store the secret so that public tokens can be decoded on requests
  writeFile('./secrets/topSecret2.txt', secret, err => {
    if (err) {
      console.error(err)
      return
    }
    res.send(`{"token":"` + token + `"}`);
  })
}