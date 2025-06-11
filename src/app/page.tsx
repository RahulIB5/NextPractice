import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
      <p className="mt-4 text-lg">This is a simple Next.js application.</p>
      <div className="mt-8">
        <a
          href="https://nextjs.org/docs"
          className="text-blue-600 hover:underline"
        >
          Learn more about Next.js
        </a>
      </div>
      <Link href="/about" className="mt-4 text-blue-600 hover:underline">About</Link>
      <Link href="/articles/breaking=bad?lang=en" className="mt-4 text-blue-600 hover:underline">English</Link>
      <Link href="/articles/breaking-bad?lang=fr" className="mt-4 text-blue-600 hover:underline">French</Link>
    </main>
    );
  }