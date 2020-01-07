import * as express from 'express'
import cors from 'cors'
import _ from 'lodash'
import KeyType from './types/types'
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
                let {html, keys} = req.body

                let newHtml = _.reduce(keys, (acc: string, el: KeyType) => {
                    acc = acc.replace(el.key,  `<a href=\"${el.url}\">${el.key}</a>`)
                    return acc
                }, html)

                res.json({
                    message: newHtml
                })
            } catch (e) {
                res.status(400).send(JSON.stringify({ "error": "problem with posted data" }));
            }
        })

        router.options('*', cors());

        server.use('/', router)
    }
}

export default Router;