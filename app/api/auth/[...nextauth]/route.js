import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "@models/user";
import { connectToDB } from "@utils/database";

const handler = NextAuth({
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            profile(profile) {
                //add as many admins as you can here
                let userRole = "user";
                if (profile?.email == "cgmendez1@up.edu.ph") {
                    userRole = "admin";
                  }
                //add as many editors as you can here
                if (profile?.email == "carlorielmendez@gmail.com") {
                    userRole = "editor";
                  }

                return { id: profile.sub, username: profile.username, email: profile.email, image: profile.image, role: userRole}
              },
        })
    ], 
    callbacks:{
        async jwt({ token, user }) {
            if(user) token.role = user.role
            return token
        },
        async session({ session, token }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            })
            session.user.id = sessionUser._id.toString();
            session.user.role = token.role;
            return session;
        },
        async signIn({ profile }) { 
            try {
                await connectToDB();
                //check if a user already exists
                const UserExists = await User.findOne({
                    email: profile.email
                })
                //if not, create a new user record
                if(!UserExists){
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(/\s/g, "").toLowerCase(),
                        image: profile.image
                    })
                }
                return true;
            } catch (error){
                console.log(error);
                return false;
            }
        },
    },
    session: {
        strategy: 'jwt',
        maxAge: 3600
    },
    pages: {
        signIn: '/auth/signin',
    },
})

export { handler as GET, handler as POST};