// ./src/pages/_document.js

import Document, { Head, Html, Main, NextScript } from "next/document";


export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({});
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                    </>
                )
            };
        } finally {}
    }

    render() {
        return (
            <Html>
                <Head>
                    <title>Next Passport Auth</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}