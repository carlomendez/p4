
import ArticleTable from "@components/ArticleTable";
import AuthChecker from "@components/AuthChecker";

const ArticleDashboardPage = () => {

  return (
    <AuthChecker>
      <ArticleTable/>
    </AuthChecker>
  )
}

export default ArticleDashboardPage;