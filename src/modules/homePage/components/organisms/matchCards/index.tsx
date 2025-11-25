"use client";

import { useTranslation } from "react-i18next";
import MatchCardList from "../../molecules/matchCardList";
import { MatchCard } from "../../../constans/matchCardMock";

const MatchCards = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="w-full lg:min-h-[720px] lg:max-h-[720px] overflow-y-auto flex lg:flex-col max-sm:items-center gap-4 bg-slate-200 dark:bg-slate-700 rounded px-4 py-2">
        <MatchCardList
          cards={MatchCard}
          cardClass="shadow-lg hover:shadow-xl transition p-4"
          titleClass="text-lg font-bold"
          descriptionClass="text-gray-600"
        />
      </div>
    </>
  );
};

export default MatchCards;
