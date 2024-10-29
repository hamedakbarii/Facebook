import MessangerItem from "./MessangerItem";

export default function Messanger() {
  const messages = [
    {
      id: 0,
      avatar: "./images/Avatar/girl 1.jpg",
      name: "Devon Lane",
      status: "offline",
    },
    {
      id: 1,
      avatar: "./images/Avatar/boy 2.jpg",
      name: "Anna Pena",
      status: "online",
    },
    {
      id: 2,
      avatar: "./images/Avatar/girl 2.webp",
      name: "Kristin Watson",
      status: "offline",
    },
    {
      id: 3,
      avatar: "./images/Avatar/boy 1.jpg",
      name: "Wade Warren",
      status: "online",
    },
  ];

  return (
    <div className="bg-[#1a1c20] flex flex-col justify-center items-center mt-4 rounded-br-lg rounded-tr-lg py-4 w-80">
      <div className="flex items-center justify-between w-full px-4">
        <h2 className="text-xl font-semibold text-white">Messenger</h2>
        <p className="text-lg font-normal text-blue-500">All</p>
      </div>

      <div className="flex flex-col items-center justify-center w-full pt-4">
        {messages.map((message) => (
          <MessangerItem
            key={message.id}
            avatar={message.avatar}
            name={message.name}
            status={message.status}
          />
        ))}
      </div>
    </div>
  );
}
