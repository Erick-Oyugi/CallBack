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
const app_1 = __importDefault(require("./app"));
const db_config_1 = __importDefault(require("./config/db/db.config"));
const fs_1 = __importDefault(require("fs"));
const https_1 = __importDefault(require("https"));
// Define a function to start the server
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_config_1.default.sync();
        const environment = process.env.NODE_ENV;
        let httpsOptions = null;
        const port = process.env.APP_PORT || 3000;
        const ssl_path = process.env.SSL_PATH;
        if (environment === 'UAT') {
            // use ssl certificate
            httpsOptions = {
                key: fs_1.default.readFileSync(`${ssl_path}/cert.key`),
                cert: fs_1.default.readFileSync(`${ssl_path}/star_creditbank_co_ke.crt`),
            };
        }
        let server;
        if (httpsOptions) {
            server = https_1.default.createServer(httpsOptions, app_1.default).listen(port, () => {
                console.log(`API services running on port ${port} with HTTPS`);
            });
        }
        else {
            server = app_1.default.listen(port, () => {
                console.log(`API services running on port ${port}`);
            });
        }
        // Start listening on port 3000
    }
    catch (error) {
        // Log any errors and exit the process
        console.error(error);
        process.exit(1);
    }
});
void start();
