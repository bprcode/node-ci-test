import express, { Express, Request, Response } from 'express'
import greeter from './test-routes'
const app: Express = express()
const port: number = 3000

app
  .use(express.static('public'))
  .use('/', greeter)
  .get('/foo', (req: Request, res: Response) => {
    console.log('foo~')
    res.send('hey foo')
  })
  .get('/ex', (req, res) => {
    res.send('new example route !!??#?? ;) 🦆🐐😺')
  })
  .get('/as', async (req: Request, res: Response): Promise<void> => {
    console.log('starting async...')
    return new Promise(ok =>
      setTimeout(() => {
        res.send('timeout resolved')
        console.log('async done.')
      }, 5000)
    )
  })
  .get('/', (req:Request,res:Response) => {
    res.send('Index route reached 🐙')
  })

app.listen(port, () => {
  console.log("Server's up on \x1b[96mhttp://localhost:" + port + '\x1b[39m 🦆')
})
