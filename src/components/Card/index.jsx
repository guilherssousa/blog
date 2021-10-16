import Link from "next/link";

const Card = ({ article }) => {
  const image =
    article.content.match(/(https:([^"]*))/g)?.[0] ||
    "https://www.notion.so/cdn-cgi/image/w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/XAbe0SpXMxVil9n1umFGG/fbebf64741fcdb9aa96f00e575bb9eb4/japan-launch-thumb__1_.png";

  return (
    <article className="mb-8 sm:max-w-md">
      <Link passHref href={`/post/${article.id}`}>
        <a>
          <div className="relative h-40 md:h-60 border border-gray-200 rounded-md cursor-pointer">
            <img
              src={image}
              className="absolute inset-0 w-full h-full object-cover rounded-md hover:brightness-95 transition-all"
              alt={article.title}
            />
          </div>
        </a>
      </Link>
      <h2 className="text-xl mt-4 font-bold cursor-pointer hover:text-green-800">
        <Link passHref href={`/post/${article.id}`}>
          <a>{article.title}</a>
        </Link>
      </h2>
      <Link passHref href={`/post/${article.id}`}>
        <a>
          <p className="text-gray-400 font-normal mt-2 cursor-pointer">
            {article.content
              .replace(/<[^>]*>/g, "")
              .split(" ", 22)
              .join(" ")}
            ...
          </p>
        </a>
      </Link>
    </article>
  );
};

export default Card;
