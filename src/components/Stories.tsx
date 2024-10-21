import Story from "./Story";

export default function Stories() {
  const stories = [
    {
      id: 0,
      bg: "./images/center/story-bg/boy 1.webp",
      name: "Hamed Akbari",
      avatar: "./images/Avatar/boy 1.jpg",
    },
    {
      id: 1,
      bg: "./images/center/story-bg/prince.jpg",
      name: "Prince",
      avatar: "./images/Avatar/boy 2.jpg",
    },
    {
      id: 2,
      bg: "./images/center/story-bg/girl 2.jpg",
      name: "Lilie Pian",
      avatar: "./images/Avatar/girl 1.jpg",
    },
    {
      id: 3,
      bg: "./images/center/story-bg/boy 3.jpg",
      name: "Alex Fergosen",
      avatar: "./images/Avatar/girl 2.webp",
    },
    {
      id: 4,
      bg: "./images/center/story-bg/girl 1.jpg",
      name: "Todo o Nada",
      avatar: "./images/Avatar/girl 3.jpg",
    },
  ];

  return (
    <section className="flex flex-col items-start justify-start w-full mt-6">
      <div className="flex items-center justify-between gap-10 w-full">
        {stories?.map((story) => (
          <div key={story.id} className="w-full">
            <Story bg={story.bg} name={story.name} avatar={story.avatar} />
          </div>
        ))}
      </div>
    </section>
  );
}
