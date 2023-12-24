import express from "express";
const app = express();
import { user } from "./models/user.models.js";
const expressData = () => {

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get("/", (req, res) => {
        res.send("Hello World!");
    });


    app.get("/showcards", async (req, res) => {
        const userdata = await user.find({});
        console.log(userdata);
        res.status(200).json(userdata);
    });
    app.post("/login", async (req, res) => {
        const userdata = await user.create(req.body);
        console.log(userdata);
        res.status(200).json(userdata);
    });
    app.listen(8000, () => {
        console.log("Server has started!");
    });
}

export default expressData;