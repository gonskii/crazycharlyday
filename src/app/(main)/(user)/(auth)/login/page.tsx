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
                src= "./logo.svg"
                alt="Description de l'image"
                width={150} // Définissez la largeur de l'image
                height={100} // Définissez la hauteur de l'image

            />

            <div id="containerLogin">
                <h1>Welcome Back ! 👋</h1>

                <form onSubmit={handleSubmit}>
                    <InputImg label="Email" IconComponent={Mail} typeInput="email" />

                    <InputImg label="Password" IconComponent={LockKeyhole} typeInput="password" />

                    <p id="forgotPassword">Mot de passe oublié</p>

                    <button id="buttonConnetion">Sign In</button>

                    <p id="register">Not a member ? Register now</p>
                </form>
            </div>

            <div id="imageLogin">
                <p>IMAGE</p>
                <p>IMAGE</p>
            </div>
        </div>
    );
}

export default LoginPage;