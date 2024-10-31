import express from "express";
import { PORT, mongoURL } from "./config.js";
import mongoose from "mongoose";

const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("bruh")
});

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}'`);
});

mongoose
    .connect(mongoURL)
    .then(() => {
        console.log("App connected to database");
    })
    .catch((error) => {
        console.log(error);
    });