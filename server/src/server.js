import dotenv from 'dotenv';

import app from './app.js';
import mongoDbConnect from './config/database.js';

dotenv.config();

const port = process.env.PORT || 8000;

mongoDbConnect();

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});