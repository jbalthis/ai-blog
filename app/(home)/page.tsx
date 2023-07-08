import Trending from "@/app/(home)/components/trending";
import Tech from "@/app/(home)/components/tech";
import Travel from "@/app/(home)/components/travel";
import Other from "@/app/components/other";
import Subscribe from "@/app/components/subscribe";
import Sidebar from "@/app/components/sidebar";
import getPosts from "@/actions/getPosts";

export default async function Home() {
  const posts = await getPosts();
  console.log(posts);
 
  return (
    <main className="px-10 leading-7">
      <Trending />
      <div className="md:flex gap-10 mb-10">
        <div className="basis-3/4">
          <Tech />
          <Travel />
          <Other />
          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
    </main>
  );
}
