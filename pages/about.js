import Link from "next/link";
function about() {
  return (
    <div>
      <p className="text-8xl text-gray-800 text-center">This is about page</p>
      <Link href="/">
        <p className="text-3xl cursor-pointer text-blue-700 text-center mt-4">
          back to home
        </p>
      </Link>
    </div>
  );
}

export default about;
