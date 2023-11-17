import Link from 'next/link';

export default function Home() {
  return (
    <div >
      <h1>
       <Link href="/posts/first-post">posts</Link> 
      </h1>
      <h1>Hello</h1>
    </div>
  );
}
