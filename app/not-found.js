// app/not-found.js

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-form-gradient">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <h2 className="mt-4 text-2xl text-white">Page Not Found</h2>
      <p className="mt-2 text-white">
        The page you are looking for does not exist.
      </p>
      <a href="/" className="mt-4 text-blue-500 hover:underline">
        back to Home
      </a>
    </div>
  );
};

export default NotFoundPage;
