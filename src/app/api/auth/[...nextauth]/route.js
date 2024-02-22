import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connectDB from "@/app/utils/db";
import { findUserByEmail } from "@/models/userMethods";
import UserInterface from "@/models/user";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                const {email, password} = credentials;

                try {
                    await connectDB();
                    console.log("auth : email : ", email);

                    const user = await findUserByEmail(email);

                    if (!user) {
                        return null;
                    }

                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if (!passwordMatch) {
                        return null;
                    }

                    return user;

                } catch (error) {
                    console.log(error);
                }
            },
        }),
        // GitHubProvider({
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET
        // }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        //     authorization: {
        //         params: {
        //             prompt: "consent",
        //             access_type: "offline",
        //             response_type: "code"
        //         }
        //     }
        // })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
        error: "/error",
    },
};

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST};
