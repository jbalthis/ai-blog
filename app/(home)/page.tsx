import Trending from "./components/trending";
import Tech from "./components/tech";
import Travel from "./components/travel";
import Other from "./components/other";
import Subscribe from "./components/subscribe";
import Sidebar from "./components/sidebar";

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