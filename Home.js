import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""/>

          <div className='home__row1'>
            <Product 
            id='1001' 
            title="The Mahabharata" 
            price={1599} 
            image='https://rukminim1.flixcart.com/image/416/416/kcuug7k0/regionalbooks/p/w/7/story-books-mahabharata-original-imaftvhzcyndgy3b.jpeg?q=70' 
            rating={5} />
            <Product 
            id='1002' 
            title='Chanakya Neeti' 
            price={359} 
            image='https://m.media-amazon.com/images/I/61-qa5PQZKL.jpg' 
            rating={4} />
            <Product 
            id='1003' 
            title='New Titan Talk Smart Watch|BT Calling|1.39"AMOLED Display' 
            price={1359} 
            image='https://m.media-amazon.com/images/I/61Y92ZxwV2L._UX522_.jpg' 
            rating={4} />
            {/* 3 product */}
          </div>

            <div className='home__row2'>
                {/* 4 product */}
                <Product 
                id='1004' 
                title='OnePlus Nord CE 2 Lite 5G' 
                price={28999} 
                image='https://m.media-amazon.com/images/I/71V--WZVUIL._SX679_.jpg' 
                rating={4} 
                />
                <Product 
                  id='1005'
                  title='2020 Apple MacBook Pro'
                  price={122900}
                  image='https://m.media-amazon.com/images/I/71an9eiBxpL._SX679_.jpg'
                  rating={4}
                />
                <Product
                  id='1006'
                  title='Philips GC1905 1440-Watt'
                  price={899}
                  image='https://m.media-amazon.com/images/I/71SxUzhnLvL._SX679_.jpg'
                  rating={4}
                 />
                 <Product
                  id='1006'
                  title='Noise Buds Vs104 Bluetooth Wireless'
                  price={1299}
                  image='https://m.media-amazon.com/images/I/41EdHQQC46L._SX466_.jpg'
                  rating={4}
                 />
            </div>

            <div className='home__row3'>
                {/* 1 product */}
                <Product 
                  id='1007'
                  title='Puma Unisex-Adult X-ray Speed Lite Sneaker'
                  price={3499}
                  image='https://m.media-amazon.com/images/I/51uuoWyNHuL._UY695_.jpg'
                  rating={4}
                />
                <Product 
                  id='1008'
                  title='Coconut K21 Virgo 60% Mini 61 Key Mechanical Gaming Keyboard with Outemu Red Switches'
                  price={1499}
                  image='https://m.media-amazon.com/images/I/61aMir6lzTL._SX466_.jpg'
                  rating={4}
                />
            </div>
      </div>
    </div>
  );
}

export default Home
