import app from "./app";
import connection from "./config/db/db.config";
import fs from 'fs';
import https from 'https';

// Define a function to start the server
const start = async (): Promise<void> => {
  try {
    await connection.sync();
    const environment = process.env.NODE_ENV;
    let httpsOptions: https.ServerOptions | null = null;
    const port = process.env.APP_PORT || 3000;
    const ssl_path = process.env.SSL_PATH;

    if (environment === 'UAT') {
      // use ssl certificate
      httpsOptions = {
        key: fs.readFileSync(`${ssl_path}/cert.key`),
        cert: fs.readFileSync(`${ssl_path}/star_creditbank_co_ke.crt`),
      };
    }

    let server;
    if (httpsOptions) {
      server = https.createServer(httpsOptions, app).listen(port, () => {
        console.log(`API services running on port ${port} with HTTPS`);
      });
    } else {
      server = app.listen(port, () => {
        console.log(`API services running on port ${port}`);
      });
    }

    // Start listening on port 3000
  } catch (error) {
    // Log any errors and exit the process
    console.error(error);
    process.exit(1);
  }
};

void start();

