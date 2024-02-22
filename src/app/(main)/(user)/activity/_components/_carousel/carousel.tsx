import { useState } from "react";
import "./carousel.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CardActivity from "../cardActivity/cardActivity";

const Carousel = () => {
    /**
     * Nos datas
     */
    const elements = [
        'Texte 1',
        'Texte 2',
        'Texte 3',
        'Texte 4',
    ];

    // État pour suivre l'élément actuel
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour naviguer vers l'élément précédent
    const goToPrevious = () => {
        const isFirstElement = currentIndex === 0;
        const newIndex = isFirstElement ? elements.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    // Fonction pour naviguer vers l'élément suivant
    const goToNext = () => {
        const isLastElement = currentIndex === elements.length - 1;
        const newIndex = isLastElement ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div id="carousel">
            <button className="buttonChevron" onClick={goToPrevious}><ChevronLeft /></button>

            <div id="card">
                <CardActivity title="Title" horraire="10:00 - 11:00" description="c'est la description" nbPlace="13/22" categorie="categorie ?"/>
            </div>
            
            <button className="buttonChevron" onClick={goToNext}><ChevronRight /></button>
        </div>
    );
};

export default Carousel;