import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import PostsList from "@/components/PostsList";

export default async function Page() {
  const posts = await getAllPosts();
  return (
    <>
    <div className="main-heading">
      <h2>List</h2>
      <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sint accusamus ipsam est possimus aliquam similique quaerat qui veritatis commodi?</p>
    </div>
    <PostsList posts={posts} />
    </>
  );
}
