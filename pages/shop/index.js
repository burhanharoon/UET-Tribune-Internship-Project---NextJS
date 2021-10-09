import Head from 'next/head'
import Shop from "../Components/Shop";
import ShopNavbar from "../Components/ShopNavbar";

const ShopPage = () => {
    return (
        <div>
            <Head>
                <title>Shop</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ShopNavbar />
            <Shop />
        </div>
    )
}
export default ShopPage