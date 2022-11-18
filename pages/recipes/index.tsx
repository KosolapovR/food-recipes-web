import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Food Recipes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Food recipes page</h1>
      </main>
    </div>
  );
}
