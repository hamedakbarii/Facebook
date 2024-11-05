import Me from "./Me";
import Messanger from "./Messanger";
import Posts from "./Posts";
import RecentlyViewd from "./RecentlyViewd";
import SearchEngin from "./SearchEngin";
import Stories from "./Stories";

export default function Main() {
  return (
    <div className="w-full flex justify-between items-center text-white gap-4 overflow-hidden">
      {/* Left side */}
      <div className="hidden lg:flex flex-col justify-center items-center">
        <Me />
        <Messanger />
        <RecentlyViewd />
      </div>

      {/* Right side */}
      <div className="w-full lg:w-[75%]">
        <Stories />
        <SearchEngin />
        <Posts />
      </div>
    </div>
  );
}
