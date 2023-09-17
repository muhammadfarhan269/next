import { signIn } from 'next-auth/react';
import TwitterProvider from 'next-auth/providers/twitter'


export default async function twitterAuth(
    req,
    res
) {
    try {
        console.log(req, res);
        // const provider = TwitterProvider();
        const { callbackUrl } = req.query;
        console.log(callbackUrl);
        // await signIn(provider.id, { callbackUrl });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Twitter authentication failed' });
    }
}
