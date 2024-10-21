import { TbDots } from "react-icons/tb";

export default function RecentlyViewd() {
  return (
    <div>
      <div className="bg-[#1a1c20] w-80 rounded-br-lg rounded-tr-lg mt-4 flex flex-col justify-center items-center p-4">
        <div className="flex items-center justify-between w-full p-2">
          <h2 className="text-lg font-semibold text-white">Recently Viewed</h2>
          <TbDots className="text-3xl text-gray-500" />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <img
            src="./images/left/recently viewd/boy 1.jpg"
            alt="fashion boy"
            className="rounded cursor-pointer w-28 h-28 object-cover"
          />
          <img
            src="./images/left/recently viewd/girl 1.jpg"
            alt=""
            className="rounded cursor-pointer w-28 h-28 object-cover"
          />
          <img
            src="./images/left/recently viewd/house 1.jpg"
            alt=""
            className="rounded cursor-pointer w-28 h-28 object-cover"
          />
          <img
            src="./images/left/recently viewd/house 2.jpg"
            alt=""
            className="rounded object-cover cursor-pointer w-28 h-28"
          />
          <img
            src="./images/left/recently viewd/series 1.webp"
            alt=""
            className="rounded cursor-pointer w-28 h-28 object-cover"
          />
          <img
            src="./images/left/recently viewd/series 2.webp"
            alt=""
            className="rounded cursor-pointer w-28 h-28"
          />
        </div>
      </div>
    </div>
  );
}
