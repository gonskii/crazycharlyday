import { Clock, PersonStanding } from "lucide-react";
import "./cardActivity.css";

interface CardActivityProps {
    title: string;
    horraire: string;
    description: string;
    nbPlace: string;
    categorie: string;
  }

const CardActivity = ({ title, horraire, description, nbPlace, categorie }: CardActivityProps) => {
    return (
        <div id="cardActivity">
            <h1 className="font-archivoBlack" id="title">{title}</h1>
            <div id="informations">
                <div id="horraire">
                    <Clock />
                    <p id="horraireTxt">{horraire} AM</p>
                </div>
                <div id="description">
                    <p>{description}</p>
                </div>
                <div id="nbPlace">
                    <PersonStanding />
                    <p id="nbPlaceTxt">{nbPlace}</p>
                </div>
                <p id="categorie">{categorie}</p>
            </div>

            <button id="buttonReserver" className="font-bold">Réserver</button>
        </div>
    );
};

export default CardActivity;
