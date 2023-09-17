import NextAuth from 'next-auth';
import TwitterProvider from 'next-auth/providers/twitter'


export default NextAuth({
    providers: [
        TwitterProvider({
            clientId: 'T0NVRRwmol3D1hZCXN7cN58qb',
            clientSecret: 'dUTwl1VczfvWp3ZNvY7JUDmgXvGlFT9dzHZLIMNhKwF93eelGT',
        }),
    ]
});
