import { TbDots } from "react-icons/tb";

export default function Posts() {
  return (
    <div className="bg-[#1a1c20] flex flex-col justify-center items-center w-full rounded-xl mt-4 p-6">
      <div className="flex items-center justify-between w-full p-4">
        <div className="flex items-start justify-center pl-8">
          <img
            src="./images/Avatar/girl 3.jpg"
            alt="user profile photo"
            className="object-cover w-10 h-10 mr-4 rounded-full"
          />

          <div className="flex flex-col items-start justify-start">
            <h2 className="text-lg font-semibold text-white">Kathryn Murphy</h2>
            <p className="text-sm font-normal text-gray-500">
              Kyiv Pechersk Lavra, 5 min ago
            </p>
            <h3 className="text-lg font-thin text-white">Unusual Weekends!</h3>
          </div>
        </div>

        <TbDots className="text-3xl text-gray-500" />
      </div>

      <div className="m-2 w-full flex justify-around items-center">
        <img
          src="./images/center/post/nature.jpg"
          alt="nature"
          className="w-80 h-64 m-2 rounded"
        />
        <img
          src="./images/center/post/plane.jpg"
          alt="plane"
          className="w-80 h-64 m-2 rounded"
        />
      </div>
    </div>
  );
}
