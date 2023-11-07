import Card from "../components/Card";

import gigi from "../assets/buffon.webp";
import leo from "../assets/leo.jpeg";
import kvara from "../assets/kvara.jpg";
import busku from "../assets/busku.jpeg";

const data = [
  { id: 1, name: "GIGI", image: gigi, titles: ["BEST KEEPER OF 2017"] },
  {
    id: 2,
    name: "BUSKU",
    image: busku,
    titles: ["WORLD CHAMPINN", "CL WINNER"],
  },
  { id: 3, name: "MESSI", image: leo, titles: ["GOAT"] },
  {
    id: 4,
    name: "KVARA",
    image: kvara,
    titles: ["BEST OF SERIA A 2023", "BEST YOUNG"],
  },
];

const CardList = () => {
  function action(titles) {
    alert(`HERE IS MY TITLE: ${titles} `);
  }

  return (
    <div className="card-list">
      {data.map((card) => (
        <Card
          key={card.id}
          name={card.name}
          image={card.image}
          action={action}
          titles={card.titles}
        />
      ))}

      {/* <Card name="GIGI" image={gigi} action={action} />
      <Card name="BUSKU" image={busku} action={action} />
      <Card name="MESSI" image={leo} action={action} />
      <Card name="KVARA" image={kvara} action={action} /> */}
    </div>
  );
};

export default CardList;
