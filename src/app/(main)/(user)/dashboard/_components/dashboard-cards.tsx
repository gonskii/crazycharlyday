import React from "react";
import ControlCard from "./control-card";
import { CalendarCheck2, ChefHat, FlaskConical, Upload } from "lucide-react";

const cardsContent = {
  resa: {
    icon: <CalendarCheck2 />,
    title: "Consulter mes ateliers",
    href: "/reservations",
  },
  cook: {
    icon: <ChefHat />,
    title: "Rejoindre une activité",
    href: "/activites",
  },
  profile: {
    icon: <FlaskConical />,
    title: "Modifier mes intérêts",
    href: "/profil",
  },
  proposal: {
    icon: <Upload />,
    title: "Proposer une activité",
    href: "/ideas",
  },
};

const DashboardCards = () => {
    // Extraction des clés de l'objet cardsContent
    const cardsKeys = Object.keys(cardsContent);
  
    // Création des composants ControlCard dynamiquement
    const controlCards = cardsKeys.map((key) => (
      <ControlCard
        key={key}
        icon={cardsContent[key].icon}
        title={cardsContent[key].title}
        href={cardsContent[key].href}
      />
    ));
  
    return (
      <div className="flex flex-col gap-y-10 mt-5 sm:mt-8 md:mt-10 lg:mt-16 px-24">
        <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-archivoBlack font-bold">
          Bienvenue User
        </h1>
        <div className="flex flex-col justify-between gap-y-10"> {/* Conteneur flex pour les cartes et l'autre élément */}
          <div className="flex flex-row gap-20 md:w-1/2"> {/* Conteneur pour les cartes */}
            {controlCards[0]}
            {controlCards[1]}
          </div>
          <div className="flex flex-row gap-20 md:w-1/2"> {/* Conteneur pour les cartes */}
            {/* Ajoutez votre autre élément  ici */}
            {controlCards[2]}
            {controlCards[3]}
          </div>
        </div>
      </div>
    );
  };
  

export default DashboardCards;
