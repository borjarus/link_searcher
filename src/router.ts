import * as express from 'express'
import cors from 'cors'

class Router {

    constructor(server: express.Express) {
        const router = express.Router()

        router.get('/', (req: express.Request, res: express.Response) => {
            res.json({
                message: `Nothing to see here, [url]/parse instead.`
            })
        })


        //create new cat
        router.post('/parse', cors(), (req: express.Request, res: express.Response) => {
            try {
                console.log(req.body)
                // let cat: Cat = {} as Cat;
                // Object.assign(cat, req.body)
                // const newUUID = uuid();
                // cats[newUUID] = cat;
                // res.json({
                //     uuid: newUUID
                // })
            } catch (e) {
                res.status(400).send(JSON.stringify({ "error": "problem with posted data" }));
            }
        })

        router.options('*', cors());

        server.use('/', router)
    }
}

export default Router;