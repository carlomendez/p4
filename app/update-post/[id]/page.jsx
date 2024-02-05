import AuthChecker from '@components/AuthChecker';
import EditForm from '@components/EditForm';
import { fetchArticle } from "@/lib/data";

const EditPost = async ({ params }) => {
    const { id } = params;
    const article = await fetchArticle(id);
    
  return (
    <AuthChecker>
        <EditForm 
            id = {article.id}
            title = {article.title}
            desc = {article.desc}
            author = {article.author}
        />
    </AuthChecker>
  )
}

export default EditPost;