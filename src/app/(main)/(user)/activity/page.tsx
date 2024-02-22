'use client'

import { useEffect, useState } from 'react';
import './activity.css'

const UserActivity = () => {
    const [joursDeLaSemaine, setJoursDeLaSemaine] = useState([]);

    useEffect(() => {
        const aujourdHui = new Date();
        const premierJourDeLaSemaine = aujourdHui.getDate() - aujourdHui.getDay() + (aujourdHui.getDay() === 0 ? -6 : 1); // Ajuster pour que la semaine commence le lundi
        const jours = [];

        for (let i = 0; i < 5; i++) { // Pour les 5 jours de la semaine de travail
            const jour = new Date(aujourdHui.setDate(premierJourDeLaSemaine + i));
            jours.push(jour.getDate()); // Stocke seulement le numéro du jour
        }

        setJoursDeLaSemaine(jours);
    }, []);
    

    return (
        <div className="activity">
            <div>HEADER</div>

            <div className="page">
                <h1 className="font-archivoBlack">Nos activités</h1>

                <div id="semaine">
                    {joursDeLaSemaine.map((jour,index)=> (
                        <button className="jour">
                           <p className='font-archivoBlack text-sm'></p>
                           <p>{jour}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserActivity;