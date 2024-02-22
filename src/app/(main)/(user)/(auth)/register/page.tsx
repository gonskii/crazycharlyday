'use client';

import Image from 'next/image';
import InputImg from "@/components/ui/inputWithImg";
import "./registerPage.css";
import { LockKeyhole, Mail, User, UserRound } from "lucide-react";
import logo from "./logo.svg";

const RegisterPage = () => {
    const handleSubmit = () => {
        console.log("je suis le handle submit");
    }

    return (
        // Container
        <div id="container">

            <Image
                src="./logo.svg"
                alt="Description de l'image"
                width={150} // Définissez la largeur de l'image
                height={100} // Définissez la hauteur de l'image
            />

            <div id="containerRegister">
                <h1 className='font-archivoBlack'>Inscrivez-vous ! 👋</h1>

                <form onSubmit={handleSubmit}>
                    <InputImg label="Nom" IconComponent={UserRound} typeInput="email" />
                    <InputImg label="Prenom" IconComponent={UserRound} typeInput="email" />
                    <InputImg label="Email" IconComponent={Mail} typeInput="email" />

                    <InputImg label="Mot de passe" IconComponent={LockKeyhole} typeInput="password" />

                    <InputImg label="Confirmer mot de passe" IconComponent={LockKeyhole} typeInput="password" />

                    <button className="font-bold" id="buttonInscription">Inscription</button>

                    <p id="register">Vous avez un compte ? connectez-vous</p>
                </form>
            </div>

            <div>

            </div>
        </div>
    );
}

export default RegisterPage;