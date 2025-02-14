import express, { Request, Response, NextFunction } from 'express'
const router = express.Router()
const mockDb = new Map([['chickenCount', 0]])

function blue(text: string) {
  return `\x1b[34m${text}\x1b[39m`
}

function orange(text: string) {
  return `\x1b[93m${text}\x1b[39m`
}

function logRequest(req: Request, res: Response, next: NextFunction) {
  console.log(orange(req.method),'request for:', blue(req.originalUrl))
  next()
}

router
  .use(logRequest)
  .use(express.json())
  .all('/fail', (req: Request, res: Response) => {
    res.status(400).send(req.method+' request rejected')
  })
  .get('/hi', (req: Request, res: Response) => {
    // res.send('Hello! 🐦')
    res.send('Hello! 🐶')
  })
  .get('/count', (req: Request, res: Response) => {
    res.json({ count: mockDb.get('chickenCount') })
  })
  .delete('/count', (req:Request,res:Response) => {
    mockDb.set('chickenCount',0)
    res.send('Count reset')
  })
  .post('/count', (req: Request, res: Response) => {
    console.log('Request body was:', req.body)
    mockDb.set('chickenCount', req.body.num_chickens)
    res.status(200).send('Post accepted')
  })
  

export default router
