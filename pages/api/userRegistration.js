import clientPromise from "../../lib/mongoDB";


async function handlerTwo(req, res) {
    const body = req.body;
    console.log('body: ', body)

    const client = await clientPromise;
    const db = client.db("drift");
    const users = db.collection("users");
    const result = await users.insertOne(body);
    console.log(result);
    client.close();

    if (!body.name || !body.email || !body.password) {
        return res.status(400).json({ data: 'Field Empty' })
    }

    res.status(200).json({ data: `${body.name} ${body.email} ${body.password}` })
}

export default handlerTwo;