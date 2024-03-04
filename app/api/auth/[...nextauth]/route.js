import { connectMongoDB } from "@/lib/mongodb";
import User from "@/model/user";
import NextAuth from "next-auth/next"
import CredentialsProvider from "@/node_modules/next-auth/providers/credentials"
import bcrypt from "bcryptjs"


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials) {
                // const user={id:"1"};
                // return user;
                const { email, password } = credentials;
                try {
                    await connectMongoDB();
                    const user = await User.findOne({ email })
                    if (!user) {//when user not found
                        return null;
                    }
                    const passwordmatch = await bcrypt.compare(password, user.password)
                    if (!passwordmatch) {
                        return null
                    }
                    return user;
                } catch (error) {
                    console.log('error', error);
                }
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    }


}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }