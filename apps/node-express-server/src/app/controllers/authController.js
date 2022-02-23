// an auth service
exports.auth = function(req, res) {
  const fs = require('fs')

  // "root" directory:
  console.log(process.cwd());

  // check payload for password
  // if incorrect
  // res.sendStatus(401)
  // else

  fs.readFile('./secrets/topSecret2.txt', 'utf8' , (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(`{"token":"` + data + `"}`);
  })
}