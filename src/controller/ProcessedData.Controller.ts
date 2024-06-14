import { RequestHandler, Request, Response } from "express";
import { SasaPayResults } from "../model/sasapay/SasaPay.Model";
import {v4 as uuidv4} from 'uuid'
import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import { PayloadResults } from "../model/sasapay/PayloadData.Model";
import { stringify } from "querystring";


export const saveToDatabase : RequestHandler = async(req :Request , res: Response) => {
    const id = uuidv4()

    console.log(id)

    const { MerchantRequestID } = req.params;

    var data = await SasaPayResults.create({...req.body, id})


 try{
    var result = await PayloadResults.findOne({

        attributes : ['YourCallBackURL']
   })

    if (!result) {
      console.log('Not found!');
    } else {

      const callbackUrl = result.YourCallBackURL;

      console.log("The Webhook Is about To transmit Data To the following Callback URL:", callbackUrl)

      console.log("MY CALLBACK URL",result.YourCallBackURL); // 'My Title'
    


 const client = axios.create({
        baseURL: `${callbackUrl}`,
 });

const headers= {

      'Content-Type' : 'application/json'
  }

    client.post('/',data,{headers}).then(response => {
      console.log(response.data);

    });

    console.log(data)  

    return res
         .status(200)
         .json({
            message : "Data Saved Successfully", data : data
         })



     } } catch {

      }


        

}