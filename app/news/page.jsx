import NewsFeed from "@components/NewsFeed";

const News = () => {
  return (
    <section className="w-full">
      <h1 className="text-2xl text-left mt-6">
          News Releases
          <br className="max-md:hidden"/>
      </h1>   
      <NewsFeed />
  </section>
  )
}

export default News;