export default function Story({
  bg,
  name,
  avatar,
}: {
  bg: string;
  name: string;
  avatar: string;
}) {
  return (
    <div
      className="relative flex items-end justify-center h-64 pb-4 bg-center bg-cover cursor-pointer w-full rounded-xl"
      style={{
        backgroundImage: `url('${bg}')`,
      }}
    >
      <img
        src={avatar}
        alt="character"
        className="absolute object-cover w-10 h-10 border-2 border-blue-500 rounded-full top-2 left-2"
      />
      <h3 className="text-lg font-semibold text-white">{name}</h3>
    </div>
  );
}
