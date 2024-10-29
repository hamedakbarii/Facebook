export default function SearchEngin() {
  return (
    <div className="bg-[#1a1c20] flex justify-center items-center w-full h-32 rounded-xl mt-4">
      <div className="flex flex-col gap-4 md:flex-row items-center justify-center w-full px-4">
        <img
          src="./images/left/photo_2022-09-19_18-45-53.jpg"
          alt="Hamed Akbari"
          className="w-12 h-12 mr-4 rounded-full"
        />

        <div className="bg-[#35383c] py-2 rounded-3xl w-10/12 flex justify-between items-center">
          <input
            type="text"
            placeholder="Hamed, what's the latest?"
            className="w-full pl-8 text-gray-200 bg-transparent outline-none"
          />

          <i className="text-2xl text-gray-500 fa-solid fa-caret-down mr-6"></i>
        </div>
      </div>
    </div>
  );
}
