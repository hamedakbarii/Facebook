import Me from "./Me";
import Messanger from "./Messanger";
import Posts from "./Posts";
import RecentlyViewd from "./RecentlyViewd";
import SearchEngin from "./SearchEngin";
import Stories from "./Stories";

export default function Main() {
  return (
    <div className="w-full flex justify-between items-center text-white">
      <div className="flex flex-col justify-center items-center">
        <Me />
        <Messanger />
        <RecentlyViewd />
      </div>

      <div className="w-[75%] mr-10">
        <Stories />
        <SearchEngin />
        <Posts />
      </div>
    </div>
  );
}
