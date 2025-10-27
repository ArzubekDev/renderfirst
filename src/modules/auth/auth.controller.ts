import type { Request, Response } from "express";

const getAllUsers = (req: Request, res: Response) => {
try {
    res.status(200).json({
        success: true,
    })
} catch (error) {
    res.status(500).json({
        success: false,
        error: `Error in ${error}`
    })
}
}

export default {
    getAllUsers
}