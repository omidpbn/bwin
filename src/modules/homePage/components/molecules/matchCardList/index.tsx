import { ReactNode } from "react";
import { Card } from "flowbite-react";
import { MatchCard } from "../../../types/matchCard";

interface MatchCardListProps {
  cards: MatchCard[];
  cardClass?: string;
  titleClass?: string;
  descriptionClass?: string;
  children?: ReactNode;
}

const MatchCardList = ({ cards, cardClass, titleClass, descriptionClass, children }: MatchCardListProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <Card key={index} className={cardClass}>
          <h5 className={titleClass}>{card.match}</h5>
          <p className={descriptionClass}>
            {card.sport} | {card.date} | Odds: {card.odds}
          </p>
        </Card>
      ))}
      {children}
    </div>
  );
};

export default MatchCardList;
