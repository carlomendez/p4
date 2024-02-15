import { admins, editors } from "@lib/roles";
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
                let userRole = "user";
                if (admins.includes(profile?.email)) {
                    userRole = "admin";
                  }
                if (editors.includes(profile?.email)) {
                    userRole = "editor";
                  }
                console.log("Profile Google: ", profile);
                return { id: profile.sub, username: profile.username, email: profile.email, image: profile.picture, role: userRole}
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
                        image: profile.picture
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