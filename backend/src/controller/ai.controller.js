import generateContent from "../services/ai.service.js";


const getReview = async (req,res) => {
    //code for ai

    const code = req.body.code;

    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    const response = await generateContent(code);

    res.send(response);
}



export { getReview }