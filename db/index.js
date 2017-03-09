var pg = require('pg')

var postgresUrl = 'postgres://localhost/twitterdb'
var client = new pg.Client(postgresUrl)

// client.connect(function (err) {
//   if (err) {
//     console.error(err)
//   }

//   console.log('Connected')

//   //client.query('SELECT * FROM users')

//   client.end(function (err) {
//     if (err) {
//       console.error(err)
//     }
//   })
// })

client.connect()

module.exports = client
