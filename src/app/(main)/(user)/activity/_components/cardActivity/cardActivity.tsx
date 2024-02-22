import { Clock, PersonStanding } from "lucide-react";
import "./cardActivity.css";

export interface CardActivityProps {
    titre: string ;
    date: Date;
    description: string;
    nbPlace: number;
    categorie?: string;
  }

const CardActivity = ({ titre, date, description, nbPlace, categorie }: CardActivityProps) => {
    return (
        <div id="cardActivity">
            <h1 className="font-archivoBlack" id="title">{titre}</h1>
            <div id="informations">
                <div id="horraire">
                    <Clock />
                    <p id="horraireTxt">{date.getHours().toString()} AM</p>
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
