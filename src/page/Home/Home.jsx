/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Carts from './Carts/Carts'
import Cart1 from "./SixCart/Cart1";
import Cart2 from "./SixCart/Cart2";
import Cart3 from "./SixCart/Cart3";
import Cart4 from "./SixCart/Cart4";
import Cart5 from "./SixCart/Cart5";
import Cart6 from "./SixCart/Cart6";
import Popular from "./Popular/Popular";
import FAQ from "./FAQ/FAQ";
const Home = () => {
    const cartes = useLoaderData()
    console.log(cartes)
    return (
        <div>
            <Banner></Banner>
            <div className="mt-20">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold">Tranquil Meadow Retreat</h1>
                    <p className="text-sm mt-3 opacity-[0.6]">Escape to a serene oasis with this captivating landscape painting, where lush green meadows stretch <br /> as far as the eye can see inviting you to find peace amidst nature's embrace</p>
                </div>
                <div className="grid lg:grid-cols-3 gap-6">
                    {
                        cartes.map(cart => <Carts key={cart._id} cart={cart}></Carts>)
                    }
                </div>
            </div>
            {/* all craft section  */}
            <div className="mt-20">
                <div>
                    <h1 className="text-4xl font-extrabold text-center "> Art & Craft Categories Section</h1>
                    <p className="text-sm text-center mt-4 opacity-[0.6]">Landscape painting captures the beauty of nature, featuring serene mountains, lush forests, and tranquil rivers. <br /> These artworks evoke a sense of peace and wonder, allowing viewers to appreciate <br />  the natural world's splendor from the comfort of their homes.  Perfect for adding a touch of nature's charm to any space.</p>
                </div>
                <div className="mt-20 grid lg:grid-cols-3 gap-6">
                    <Cart1></Cart1>
                    <Cart2></Cart2>
                    <Cart3></Cart3>
                    <Cart4></Cart4>
                    <Cart5></Cart5>
                    <Cart6></Cart6>
                </div>
            </div>
            <div className="mt-20">
                <div className='my-4 text-center'>
                    <h1 className="text-4xl font-extrabold">Our Popular Panting</h1>
                    <p className="text-sm pt-3">Experience the tranquil beauty of a sunlit valley, where rolling hills meet the horizon and nature's calm prevails.</p>
                </div>
                <div className="mt-10 grid lg:grid-cols-2">
                    <div>
                        <div>
                            <h1 className="text-xl font-bold">1.Mountain View</h1>
                            <p className="text-sm pt-3">A beautiful painting capturing the reflection of mountains in a crystal-clear lake.</p>
                        </div>
                        <br />
                        <div>
                            <h1 className="text-xl font-bold">2.Mountain View</h1>
                            <p className="text-sm pt-3">A stunning acrylic painting of a sunset behind a mountain range</p>
                        </div>
                        <br />
                        <div>
                            <h1 className="text-xl font-bold">3.Floral Watercolor Art</h1>
                            <p className="text-sm pt-3">A vibrant and colorful watercolor painting featuring an array of blooming flowers, perfect for brightening any space..</p>
                        </div>
                        <br />
                        <div>
                            <h1 className="text-xl font-bold">4.Oil Painting</h1>
                            <p className="text-sm pt-3">A timeless oil painting capturing the beauty of a serene landscape with rich colors and textures.</p>
                        </div>
                        <br />
                        <div>
                        <h1 className="text-xl font-bold">5.Mountain View</h1>
                            <p className="text-sm pt-3">A stunning acrylic painting of a sunset behind a mountain range</p>
                        </div>
                        <br />
                        <div>
                            <h1 className="text-xl font-bold">7.Mountain View</h1>
                            <p className="text-sm pt-3">A serene painting of an alpine meadow with wildflowers and mountains in the background.</p>
                        </div>
                    </div>
                    <div className="mt-20">
                        <Popular></Popular>
                    </div>
                </div>
            </div>
            <div className="mt-32">
                <h1 className="text-6xl text-center my-4 font-bold">Frequency Ask Question? </h1>
                <FAQ></FAQ>
            </div>
            <br /><br />
        </div>
    );
};

export default Home;