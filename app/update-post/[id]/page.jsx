import AuthChecker from '@components/AuthChecker';
import EditArticle from '@components/EditArticle';
import { fetchArticle } from "@/lib/data";

const EditPostPage = async ({ params }) => {
    const { id } = params;
    const article = await fetchArticle(id);
    
  return (
    <AuthChecker>
        <EditArticle 
            id = {article.id}
            title = {article.title}
            desc = {article.desc}
            author = {article.author}
        />
    </AuthChecker>
  )
}

export default EditPostPage;