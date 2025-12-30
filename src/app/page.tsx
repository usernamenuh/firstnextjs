import Image from "next/image";
import Link from "next/link";
import { getLastPost } from "@/lib/api";
import PostsList from "@/components/PostsList";

export default async function Home() {
  const posts = await getLastPost();
  return (
    <>
    <div className="main-heading">
      <h1>Welcome to My First Next.js App!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sint accusamus ipsam est possimus aliquam similique quaerat qui veritatis commodi?</p>
    </div>
    <PostsList posts={posts} />
    </>
  );
}
