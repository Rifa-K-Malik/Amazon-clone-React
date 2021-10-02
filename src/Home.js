import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home" >
            <div className="home--container" >
                <img className="home--img" src="https://m.media-amazon.com/images/I/71nsesB0UNL._SX3000_.jpg" alt="bg" />

                <div className="home--row" >
                    <Product
                        id="01"
                        title="See U in C by Ali Karim Sayed (Author)"
                        price={4424.56}
                        image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="03"
                        title="Naughty Ninos Knee Long Girls Dress"
                        price={764.00}
                        image="https://m.media-amazon.com/images/I/41jcU99HNHL.jpg"
                    />
                   <Product
                        id="06"
                        title="IDROHARI Woman Trending Stylish Fancy and Comfort Heel Fashion Sandal"
                        price={369.00}
                        image="https://m.media-amazon.com/images/I/31up6C753CL.jpg"
                    />
                    <Product
                        id="02"
                        title="The Night Diamonte Headband Crown "
                        price={945.00}
                        image="https://m.media-amazon.com/images/I/6182MDFp2yL._UL1500_.jpg"
                    />

                </div>
                <div className="home--row" >
                <Product
                        id="04"
                        title="Infinix Hot 10 Play"
                        price={8999.00}
                        image="https://m.media-amazon.com/images/I/21tF2nSBsbL.jpg"
                    />
                    <Product
                        id="05"
                        title="Fujitsu UH-X 11th Gen Intel Core i5 13.3” (33.78cm) FHD IPS"
                        price={88990.00}
                        image="https://m.media-amazon.com/images/I/71umlOrdukL._SX679_.jpg"
                    />
                </div>
                <div className="home--row" >
                <Product
                        id="06"
                        title="IDROHARI Woman Trending Stylish Fancy and Comfort Heel Fashion Sandal"
                        price={369.00}
                        image="https://m.media-amazon.com/images/I/31up6C753CL.jpg"
                    />
                </div>

            </div>

        </div>
    )
}

export default Home

