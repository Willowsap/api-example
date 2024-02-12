import { NextFunction, Request, Response } from "express";

export default class ApiCtrl {
    base = (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({
            message: "Hello World"
        })
    }

    list = (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({
            title: "Shopping List",
            items: [
                "markers",
                "batteries",
                "coffee"
            ]
        })
    }
}