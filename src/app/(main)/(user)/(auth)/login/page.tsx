'use client';

import Image from 'next/image';
import InputImg from "@/components/ui/inputWithImg";
import "./loginPage.css";
import { LockKeyhole, Mail } from "lucide-react";
import logo from "./logo.svg";

const LoginPage = () => {
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

            <div id="containerLogin">
                <h1 className='font-archivoBlack'>Bienvenue 👋</h1>

                <form onSubmit={handleSubmit}>
                    <InputImg label="Email" IconComponent={Mail} typeInput="email" />

                    <InputImg label="Mot de passe" IconComponent={LockKeyhole} typeInput="password" />

                    <p id="forgotPassword">Mot de passe oublié</p>

                    <button id="buttonConnetion">Connexion</button>

                    <p id="register">Pas un membre ? Rejoins-nous !</p>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;