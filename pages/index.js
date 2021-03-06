import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-8xl text-center text-yellow-500">Sample page</h1>
        <Link href="/about">
          <p className="cursor-pointer text-3xl text-center mt-4 text-blue-900">
            about page
          </p>
        </Link>
      </div>
    </div>
  );
}
