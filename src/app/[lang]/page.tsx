import MatchCards from "../../modules/homePage/components/organisms/matchCards";
import Sidebar from "../../modules/homePage/components/organisms/sidebar";


const Page = () => {
  return (
    <div className="grid grid-cols-12 gap-2 p-2">
      <div className="lg:col-span-2 col-span-12">
        <Sidebar />
      </div>
      <div className="lg:col-span-10 col-span-12">
        <MatchCards />
      </div>
    </div>
  );
};

export default Page;
