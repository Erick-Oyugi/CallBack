"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCallBackURL = void 0;
const SasaPay_Model_1 = require("../model/sasapay/SasaPay.Model");
const PayloadData_Model_1 = require("../model/sasapay/PayloadData.Model");
const GetCallBackURL = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { MerchantTransactionReference } = req.body;
    try {
        if (!MerchantTransactionReference) {
            return res.status(400).json({ message: 'MerchantTransactionReference is missing in request params' });
        }
        const payloadResult = yield PayloadData_Model_1.PayloadResults.findOne({
            where: { MerchantTransactionReference }
        });
        if (!payloadResult) {
            return res.status(404).json({ message: 'Transaction not found in SasaPayResults' });
        }
        // Find the entry in PayloadResults with the matching MerchantTransactionReference
        const sasaPayResult = yield SasaPay_Model_1.SasaPayResults.findOne({
            where: { MerchantTransactionReference: payloadResult.MerchantTransactionReference }
        });
        if (!sasaPayResult) {
            return res.status(404).json({ message: 'Matching transaction not found in PayloadResults' });
        }
        // Return the YourCallBackURL from PayloadResults
        res.status(200).json({ YourCallBackURL: payloadResult.YourCallBackURL });
    }
    catch (error) {
        console.error('Error fetching YourCallBackURL:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.GetCallBackURL = GetCallBackURL;
