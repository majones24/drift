import clientPromise from "../../lib/mongoDB";

async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("drift");
    const users = db.collection("users");
    const groups = db.collection("groups");
    const { email } = req.body

    if (req.method === "GET") {
        const result = users.findOne({ email: email });
        if (!result) {
            res.status(404).send({ message: "User not found" })
        } else {
            res.status(200).send({ email, _id });
        }

    } else if (req.method === "POST") {
        // send group array to the group collection
    } else if (req.method === "DELETE") {
        // to delete a group 
    }
}