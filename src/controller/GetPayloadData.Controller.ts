import { RequestHandler, Request, Response } from "express";
import { SasaPayResults } from "../model/sasapay/SasaPay.Model";
import {v4 as uuidv4} from 'uuid'
import axios, { AxiosResponse, AxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';
import { PayloadResults } from "../model/sasapay/PayloadData.Model";



export const GetCallBackURL : RequestHandler = async(req :Request , res: Response) =>  { 

    const { MerchantTransactionReference } = req.body;
    
    try {


        if (!MerchantTransactionReference) {
            return res.status(400).json({ message: 'MerchantTransactionReference is missing in request params' });
          }

        const payloadResult = await PayloadResults.findOne({
            where: { MerchantTransactionReference }

          });

          if (!payloadResult) {
            return res.status(404).json({ message: 'Transaction not found in SasaPayResults' });

          }


       // Find the entry in PayloadResults with the matching MerchantTransactionReference
        const sasaPayResult = await SasaPayResults.findOne({
        where: { MerchantTransactionReference: payloadResult.MerchantTransactionReference }
         });





    if (!sasaPayResult) {
        return res.status(404).json({ message: 'Matching transaction not found in PayloadResults' });
      }

            // Return the YourCallBackURL from PayloadResults
              res.status(200).json({ YourCallBackURL: payloadResult.YourCallBackURL});

         } catch (error) {
                    console.error('Error fetching YourCallBackURL:', error);
                    res.status(500).json({ message: 'Internal server error' });
    }


 }

