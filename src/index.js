import connectDB from "./db/index.js";
import dotenv from 'dotenv'

dotenv.config({ path: ".env" });




connectDB()























/*  firsr approch

import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express"
const app = express()


(async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/
            ${DB_NAME}`)

            app.on("error", () => {
                console.log("Error app");
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`app is listing on poet ${process.env.PORT}`);

            })

        } catch (error) {
            console.log("Error", error);
            throw err
        }
    })()

ama jo upar async await te datbase connect thao ya nahi tena pate use kariyu che
await ma je pan che te dabase connect kar va lakhu che 
.env file apde mongo db na online databse sathe connect kariyu che etla te che
and biju te database nu name che je upar thi laviya che.


biju express through check kariya che ke app (server chalu) listen tha che ke nahi
app.on te method che express ma ke on tha che ke nahi 


*/


