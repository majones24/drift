import clientPromise from "../../lib/mongoDB";

async function handler(req, res) {
    const { email, password } = req.query;
    // might be body rather query
    const client = await clientPromise;
    const db = client.db("drift");
    const users = db.collection("users");
    // console.log("here", email, password, req.query, req.method);

    if (req.method === "GET") {
        const result = await users.findOne({ email: email });
        console.log(email);
        console.log(result);
        console.log(password);
        if (!result) {
            return res.status(404).send({ message: "User Not found." });
        } else {
            if (password === result.password) {
                return res.status(200).send({ message: "Login Successful" })
                // change useState
            } else {
                return res.status(404).send({ message: "Incorrect Password" });
            }
            // res.status(200).json({ data: `${query.email}` })
            // console.log(req.body.email)
            // return;
        }

    }
}

export default handler;