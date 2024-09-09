
import {app} from './app.js'
import dotenv from 'dotenv'
import connectDb from "./db/index.js"
dotenv.config({
    path:"./env"
}); 
const PORT=process.env.PORT||3000
connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`⚙️ Server is running at port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log('MONGO DB connection failed !!!', err);
    });