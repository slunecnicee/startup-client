const NotFoundPg = () => {
  return (
    <main
      area-aria-label="not found page"
      className="w-full min-h-screen p-3 flex flex-col items-center mt-20 gap-5"
    >
      <figure>
        <img src="/404.jpeg" alt="not_found" />
      </figure>

      <h2 className="text-3xl font-bold text-red-500">ეს გვერდი არ არსებობს</h2>
    </main>
  );
};

export default NotFoundPg;
