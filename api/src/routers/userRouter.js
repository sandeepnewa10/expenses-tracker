import express from "express"
const router = express.Router()


router.post("/", (req, res, next) => {

    try {
        const data= req.body;
        res.json({
            status: "success",
            message: "Please your check email to vertify your account",
            data
        })
    } catch (error) {
        next(error);
    }
}
)

export default router