import Trending from "@/app/(home)/components/trending";
import Tech from "@/app/(home)/components/tech";
import Travel from "@/app/(home)/components/travel";
import Other from "@/app/components/other";
import Subscribe from "@/app/(home)/components/subscribe";
import Sidebar from "@/app/components/sidebar";

export default function Home() {
  return (
    <main className="px-10 leading-7">
      <Trending />
      <div className="md:flex gap-10 mb-5">
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
