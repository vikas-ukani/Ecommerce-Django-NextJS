import Head from 'next/head'

const HeadScript = () => {
    return (
        <Head>
            <title>E-commerce | Django + NextJS </title>
            <meta name="description" content="Ecommerce Application build with by Django restframework with NextJS App" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,600;0,700;1,300&display=swap" rel="stylesheet" />
        </Head>
    );
}

export default HeadScript;