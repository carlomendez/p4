import { connectToDB } from "@utils/database";
import Article from "@models/article";

export const POST = async (req) => {
    const { title, desc, author, creator, img } = await req.json();

    try {
        await connectToDB();
        const newArticle = new Article({ 
            title,
            author,
            desc,
            creator,
            img
        })
        console.log(newArticle);

        await newArticle.save();
        return new Response(JSON.stringify(newArticle), {status: 201})
    } catch (error){
        return new Response("Failed to create a new post", {status: 500})
    }
}