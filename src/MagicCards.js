import React from "react";
import InfoCard from "./InfoCard";

export default function MagicCards() {
  const cardContents = {
    firstCard: {
      name: "Wizard",
      ability: "Spell Casting",
      hitPoints: "100",
    },
    secondCard: {
      name: "Warrior",
      ability: "Sword Master",
      hitPoints: 200,
    },
    thirdCard: {
      name: "Thief",
      ability: "Sneak",
      hitPoints: 120,
    },
  };

  return (
    <div>
      <InfoCard
        name={cardContents.firstCard.name}
        ability={cardContents.firstCard.ability}
        hitPoints={cardContents.firstCard.hitPoints}
      />
      <InfoCard
        name={cardContents.secondCard.name}
        ability={cardContents.secondCard.ability}
        hitPoints={cardContents.secondCard.hitPoints}
      />
      <InfoCard
        name={cardContents.thirdCard.name}
        ability={cardContents.thirdCard.ability}
        hitPoints={cardContents.thirdCard.hitPoints}
      />
      <InfoCard />
    </div>
  );
}
