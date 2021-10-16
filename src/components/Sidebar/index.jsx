const Sidebar = () => {
  return (
    <div className="sm:mt-8 bg-white md:grid-cols-1">
      <div className="flex flex-col items-center bg-white">
        <div className="relative">
          <img
            src="https://avatars.githubusercontent.com/u/47110995?v=4"
            alt="It's me!"
            className="rounded-full grayscale filter w-48"
          />
          <div className="w-12 h-12 flex items-center justify-center absolute drop-shadow right-0 border-4 border-white bottom-0 p-3 bg-green-700 rounded-full cursor-default">
            <a
              href="https://open.spotify.com/track/0ked784BOZ1JtRVHux98jE?si=ee9486e76d1b4d5d"
              target="_blank"
            >
              🎶
            </a>
          </div>
        </div>
        <h2 className="mt-6 text-2xl font-bold">Guilherme S. Sousa</h2>
        <p className="mt-4 text-gray-400">
          I used to do graphic design for fun. Now I try to understand my
          yesterday code. Also a coffee lover. ☕
        </p>
        <p className="mt-4 text-gray-400">
          17 year old frontend developer from Brazil. Currently on{" "}
          <a
            href="https://maisesports.com.br"
            className="text-green-700 underline"
            target="_blank"
          >
            Mais Esports
          </a>
          .
        </p>
        <a
          href="mailto:guilherssousa@gmail.com"
          className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 mt-6 rounded-md border border-gray-300"
        >
          Email me
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
