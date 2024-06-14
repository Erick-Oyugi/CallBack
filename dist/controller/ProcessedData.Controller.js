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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToDatabase = void 0;
const SasaPay_Model_1 = require("../model/sasapay/SasaPay.Model");
const uuid_1 = require("uuid");
const axios_1 = __importDefault(require("axios"));
const PayloadData_Model_1 = require("../model/sasapay/PayloadData.Model");
const saveToDatabase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = (0, uuid_1.v4)();
    console.log(id);
    const { MerchantRequestID } = req.params;
    var data = yield SasaPay_Model_1.SasaPayResults.create(Object.assign(Object.assign({}, req.body), { id }));
    try {
        var result = yield PayloadData_Model_1.PayloadResults.findOne({
            attributes: ['YourCallBackURL']
        });
        if (!result) {
            console.log('Not found!');
        }
        else {
            const callbackUrl = result.YourCallBackURL;
            console.log("The Webhook Is about To transmit Data To the following Callback URL:", callbackUrl);
            console.log("MY CALLBACK URL", result.YourCallBackURL); // 'My Title'
            const client = axios_1.default.create({
                baseURL: `${callbackUrl}`,
            });
            const headers = {
                'Content-Type': 'application/json'
            };
            client.post('/', data, { headers }).then(response => {
                console.log(response.data);
            });
            console.log(data);
            return res
                .status(200)
                .json({
                message: "Data Saved Successfully", data: data
            });
        }
    }
    catch (_a) {
    }
});
exports.saveToDatabase = saveToDatabase;
