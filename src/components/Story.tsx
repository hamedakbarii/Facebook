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
      className="w-64 h-64 relative flex items-end justify-center pb-4 bg-center bg-cover cursor-pointer rounded-xl"
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
