import authConfig from '@/auth.config'
import NextAuth from 'next-auth'

export const {
   handlers: { GET, POST },
   auth,
   signIn,
   signOut,
} = NextAuth({
   callbacks: {
      async session({ session, token }) {
         if (session.user && token.sub) {
            session.user.email = token.email
            session.user.id = token.id
         }

         return session
      },

      async jwt({ token }) {
         return token
      },
   },

   session: { strategy: 'jwt' },
   ...authConfig,
})