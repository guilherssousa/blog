const Article = ({ article }) => {
  const sanitizedContent = article.content
    .replace(/<p ([a-z][a-z0-9]*)[^>]*?(\/?)>/g, "<p>")
    .replace(/<h2 ([a-z][a-z0-9]*)[^>]*?(\/?)>/g, "<h2>")
    .replace(
      `<div class="separator" style="clear: both; text-align: center;"><br></div><div class="separator" style="clear: both; text-align: center;"><br></div>`,
      ""
    );

  // format data
  const date = new Date(article.published);

  return (
    <div className="max-w-screen-md mx-auto mt-8 sm:mt-16">
      <article className="w-full">
        <h1 className="mt-4 text-5xl font-bold">{article.title}</h1>

        <div className="mt-8 text-gray-500">
          Postado por {article.author.displayName} em{" "}
          {date.toLocaleDateString()}
        </div>

        <div
          className="mt-8 sm:mr-24 font-serif"
          id="article"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        ></div>
      </article>
    </div>
  );
};

export default Article;
