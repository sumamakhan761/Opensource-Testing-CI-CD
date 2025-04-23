import express from "express";
import { prismaClient } from "./db";

export const app = express();

app.use(express.json());

app.post("/sum", async (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const result = a + b;

    const request = await prismaClient.request.create({
        data: {
            a: a,
            b: b,
            answer: result,
            type: "ADD"
        }
    })
    
    res.json({ answer: result, id: request.id });
})