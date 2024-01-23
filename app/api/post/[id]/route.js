import { connectToDB } from "@utils/database";
import Article from "@models/article";

export const GET = async (request, {params}) => {
    try{
        await connectToDB();
        const article = await Article.findById(params.id).populate('creator');
        if(!article) return new Response("article not found", {status:404});
        return new Response(JSON.stringify(article), {status: 200});
        
    } catch (error){
        return new Response('Failed to fetch article', {status: 500});
    }
};

export const PATCH = async (request, {params}) => {
    const {
        title, 
        desc, 
        author, 
        // creator, 
        // img
    } = await request.json();
    try{
        await connectToDB();
        const existingArticle = await Article.findById(params.id);
        if(!existingArticle) return new Response("article not found", {status:404});
        existingArticle.title = title;
        existingArticle.desc = desc;
        existingArticle.author = author;
        // existingArticle.creator = creator;
        // existingArticle.img = img;
        await existingArticle.save();
        return new Response(JSON.stringify(existingArticle), {status: 200});
        
    } catch (error){
        return new Response('Failed to update the post', {status: 500});
    }
};

export const DELETE = async (request, {params}) => {
    try{
        await connectToDB();
        await Article.findByIdAndRemove(params.id);
        return new Response("Article deleted successfully", {status: 200});
        
    } catch (error){
        return new Response('Failed to delete the article', {status: 500});
    }
};