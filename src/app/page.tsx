import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>This is My Home Page</p>
      <Link href="/blog">Blog</Link>
    </>
  );
}
