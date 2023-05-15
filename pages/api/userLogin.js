import clientPromise from "../../lib/mongoDB";

async function handler(req, res) {
    const { email, password } = req.body;
    const client = await clientPromise;
    const db = client.db("drift");
    const users = db.collection("users");

    if (req.method === "GET") {
        const result = await users.findOne({ email: email });
        console.log(email, req.body);
        if (!result) {
            return res.status(404).send({ message: "User Not found." });
        } else {
            res.status(200).json({ data: `${body.email}` })
            console.log(req.body.email)
            return;
        }

    }
}

export default handler;