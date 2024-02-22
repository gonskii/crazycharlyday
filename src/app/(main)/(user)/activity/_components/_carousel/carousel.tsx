import { useState } from "react";
import "./carousel.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CardActivity from "../cardActivity/cardActivity";
import AtelierInterface from "@/models/atelier";



const Carousel = () => {
    /**
     * Nos datas
     */
    const activities:AtelierInterface[] = [
        {
            titre: "Yoga Matinal",
            date: new Date(),
            description: "Séance de yoga pour bien commencer la journée",
            nbPlace: 6,
        },
        {
            titre: "Cours de Cuisine",
            date: new Date(),
            description: "Apprenez à cuisiner des plats délicieux",
            nbPlace: 8,
        },
        // Ajoutez d'autres activités ici
    ];
    // État pour suivre l'élément actuel
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour naviguer vers l'élément précédent
    const goToPrevious = () => {
        const isFirstElement = currentIndex === 0;
        const newIndex = isFirstElement ? activities.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    // Fonction pour naviguer vers l'élément suivant
    const goToNext = () => {
        const isLastElement = currentIndex === activities.length - 1;
        const newIndex = isLastElement ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div id="carousel">
            <button className="buttonChevron" onClick={goToPrevious}><ChevronLeft /></button>

            <div id="card">
                <CardActivity {...activities[currentIndex]} />
            </div>

            <button className="buttonChevron" onClick={goToNext}><ChevronRight /></button>
        </div>
    );
};

export default Carousel;