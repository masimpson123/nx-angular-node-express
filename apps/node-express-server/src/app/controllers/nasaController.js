// a service that fetches weather data from mars
exports.nasaFetch = function(req, res) {
  const https = require('https')
  const options = {
    hostname: 'api.nasa.gov',
    path: '/DONKI/CME?start_date=2021-08-01&end_date=2021-08-01&api_key=3GHkYstXAVVX0LNoNMVibp2gh1guVXKduRxlDdtd',
    method: 'GET'
  }

  const req2 = https.request(options, res2 => {
    console.log(`statusCode: ${res.statusCode}`)
    res2.setEncoding('utf8');
    let output = '';
    res2.on('data', d => {
      output += d;
    })
    res2.on('end', () => {
      let obj = JSON.parse(output);
      res.send(obj);
    });
  })

  req2.on('error', error => {
    console.error(error)
  })

  req2.end()
}