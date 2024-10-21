export default function Messanger() {
  return (
    <div className="bg-[#1a1c20] flex flex-col justify-center items-center mt-4 rounded-br-lg rounded-tr-lg py-4 w-80">
      <div className="flex items-center justify-between w-full px-4">
        <h2 className="text-xl font-semibold text-white">Messenger</h2>
        <p className="text-lg font-normal text-blue-500">All</p>
      </div>

      <div className="flex flex-col items-center justify-center w-full pt-4">
        <div className="flex items-center justify-between w-full py-2 transition-all ease-linear cursor-pointer hover:bg-[#35383c]">
          <div className="flex items-center justify-center pl-8">
            <img
              src="./images/Avatar/girl 1.jpg"
              alt=""
              className="object-cover w-10 h-10 mr-4 border border-blue-500 rounded-full"
            />
            <p className="text-lg font-normal text-white">Devon Lane</p>
          </div>
          <i className="pr-4 text-sm text-gray-500 fa-solid fa-circle greened"></i>
        </div>

        <div className="flex items-center justify-between w-full py-2 transition-all ease-linear cursor-pointer hover:bg-[#35383c]">
          <div className="flex items-center justify-center pl-8">
            <img
              src="./images/Avatar/boy 2.jpg"
              alt=""
              className="object-cover w-10 h-10 mr-4 border border-blue-500 rounded-full"
            />
            <p className="text-lg font-normal text-white">Ann Pena</p>
          </div>
          <i className="pr-4 text-sm text-gray-500 fa-solid fa-circle greened"></i>
        </div>

        <div className="flex items-center justify-between w-full py-2 transition-all ease-linear cursor-pointer hover:bg-[#35383c]">
          <div className="flex items-center justify-center pl-8">
            <img
              src="./images/Avatar/girl 2.webp"
              alt=""
              className="object-cover w-10 h-10 mr-4 border border-blue-500 rounded-full"
            />
            <p className="text-lg font-normal text-white">Kristin Watson</p>
          </div>
          <i className="pr-4 text-sm text-gray-500 fa-solid fa-circle"></i>
        </div>

        <div className="flex items-center justify-between w-full py-2 transition-all ease-linear cursor-pointer hover:bg-[#35383c]">
          <div className="flex items-center justify-center pl-8">
            <img
              src="./images/Avatar/boy 1.jpg"
              alt=""
              className="object-cover w-10 h-10 mr-4 border border-blue-500 rounded-full"
            />
            <p className="text-lg font-normal text-white">Wade Warren</p>
          </div>
          <i className="pr-4 text-sm text-gray-500 fa-solid fa-circle"></i>
        </div>
      </div>
    </div>
  );
}
