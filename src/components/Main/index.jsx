import Card from "../Card";

const Main = ({ news }) => {
  return (
    <div className="my-4 sm:mt-0 h-full sm:pl-8 md:col-span-3">
      <p className="text-2xl font-bold">📰 My blog posts</p>

      <div className="md:grid md:grid-cols-2 gap-x-8 mt-4" id="blog">
        {news.length > 0 ? (
          news.map((article, index) => <Card article={article} key={index} />)
        ) : (
          <div className="w-full h-64 flex items-center justify-center text-gray-600">
            Nenhuma postagem para mostrar :(
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
