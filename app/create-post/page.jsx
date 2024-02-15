import AuthChecker from '@components/AuthChecker';
import CreateArticle from '@components/CreateArticle';

const CreatePostPage = () => {
  return (
    <AuthChecker>
      <CreateArticle/>
    </AuthChecker>
  );
};

export default CreatePostPage;