"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const ProcessedData_Controller_1 = require("../controller/ProcessedData.Controller");
const GetPayloadData_Controller_1 = require("../controller/GetPayloadData.Controller");
exports.router = (0, express_1.Router)();
exports.router.post('/creditbank/api/v1/webhook', ProcessedData_Controller_1.saveToDatabase);
exports.router.post('/creditbank/api/v1/callback', GetPayloadData_Controller_1.GetCallBackURL);
