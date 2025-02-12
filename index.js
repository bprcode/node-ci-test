const express = require('express')
const app = express()
const port = 3000

app
  .use(express.static('public'))
  .get('/foo', (req, res) => {
    console.log('foo~')
    res.send('hey foo')
  })
  .get('/as', async (req,res) => {
    console.log('starting async...')
    return new Promise(ok => setTimeout(
      () => {
        res.send('timeout resolved')
        console.log('async done.')
      }, 5000
    ))


  })

app.listen(port, () => {
  console.log('Server\'s up on \033[96mhttp://localhost:'+port+'\033[39m 😺')
})
