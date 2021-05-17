import express from 'express'
import {getList, createList} from '../controllers/forms.js'

const router = express.Router()

router.get('/',getList)
router.post('/',createList)

export default router;