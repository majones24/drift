import clientPromise from "../../lib/mongoDB";


async function handler(req, res) {
    const body = req.body;
    const { name, email, password } = req.body;
    console.log('body: ', name, email, password);
    const client = await clientPromise;
    const db = client.db("drift");
    const users = db.collection("users");
    console.log(users, req.method, "after users db connection");

    if (req.method === "POST") {
        console.log("made it")
        const checkDuplicates = await users.findOne({ email: email });
        console.log(checkDuplicates)
        if (checkDuplicates) {
            console.log(checkDuplicates, "hello");
            return res.status(400).send({ message: 'User already exists' });

            // client.close();
        } else {
            const result = await users.insertOne(body);
            // insertOne automatically creates a collection when inserting a document into a collection
            console.log(result);
            // client.close();
            res.status(200).json({ data: `${body.name} ${body.email} ${body.password}` })
            return;
        }
    }

    // } else if (req.method === "GET") {
    //     const user = await users.findOne({ email: email });
    //     if (!user) {
    //         return res.status(404).send({ message: "User Not found." });
    //     }
    //     res.status(200).json({ data: `${body.email}` })
    //     console.log(req.body.email)
    //     return;
    // }

}

export default handler;