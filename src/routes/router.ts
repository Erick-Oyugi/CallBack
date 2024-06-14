import {Router} from 'express'
import { saveToDatabase } from '../controller/ProcessedData.Controller'
import { GetCallBackURL } from '../controller/GetPayloadData.Controller'

export const router = Router()

router.post('/creditbank/api/v1/webhook', saveToDatabase)
router.post('/creditbank/api/v1/callback', GetCallBackURL)