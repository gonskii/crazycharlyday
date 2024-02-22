'use client'

import { useEffect, useState } from 'react';
import './activity.css'
import Carousel from './_components/_carousel/carousel';
import Header from '@/components/layout/header';

const UserActivity = () => {
    /**
     * Nos states
     */
    const [joursDeLaSemaine, setJoursDeLaSemaine] = useState<number[]>([]);
    const joursDeL = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'];
    const [jourSelectionne, setJourSelectionne] = useState<number | null>(null);

    /**
     * Au chargement
     */
    useEffect(() => {
        const aujourdHui = new Date();
        const premierJourDeLaSemaine = aujourdHui.getDate() - aujourdHui.getDay() + (aujourdHui.getDay() === 0 ? -6 : 1); // Ajuster pour que la semaine commence le lundi
        const jours = [];

        for (let i = 0; i < 5; i++) {
            const jour = new Date(aujourdHui.setDate(premierJourDeLaSemaine + i));
            jours.push(jour.getDate());
        }

        setJoursDeLaSemaine(jours);
    }, []);


    const handleSelectionJour = (index: number) => {
        setJourSelectionne(index);
    }

    return (
        <div className="activity">

            <div className="page">
                <h1 className="font-archivoBlack">Nos activités</h1>

                <div id="semaine">
                    {joursDeLaSemaine.map((jour, index) => (
                        <button
                            key={index}
                            className={`jour ${jourSelectionne === index ? 'selected' : ''}`}
                            onClick={() => handleSelectionJour(index)}
                        >
                            <p className='font-archivoBlack text-sm'>{joursDeL[index]}</p>
                            <p>{jour}</p>
                        </button>
                    ))}
                </div>

                {jourSelectionne !== null && (
                    <div id="atelier">
                        <Carousel />
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserActivity;