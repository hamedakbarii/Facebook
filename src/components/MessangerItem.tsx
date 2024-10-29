export default function MessangerItem({
  avatar,
  name,
  status,
}: {
  avatar: string;
  name: string;
  status: string;
}) {
  return (
    <div className="flex items-center justify-around w-full py-2 transition-all ease-linear cursor-pointer hover:bg-[#35383c]">
      <img
        src={avatar}
        alt="avatar"
        className="object-cover w-10 h-10 border border-blue-500 rounded-full"
      />

      <p className="text-lg font-normal text-white w-32">{name}</p>

      {status === "offline" ? (
        <i className="pr-4 text-sm text-gray-500 fa-solid fa-circle"></i>
      ) : (
        <i className="pr-4 text-sm text-green-500 fa-solid fa-circle"></i>
      )}
    </div>
  );
}
