const Layout = ({ children }) => {
  return (
    <div className="min-h-screen text-sans text-gray-900">
      <div className="max-w-screen-xl leading-relaxed sm:flex sm:flex-wrap m-auto px-8 sm:px-16">
        {children}
      </div>
    </div>
  );
};

export default Layout;
