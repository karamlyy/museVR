import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Home = () => {

    const [museums, setMuseums] = useState([]);
    const [filteredMuseums, setFilteredMuseums] = useState([]);


    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipe: true,
        swipeToSlide: true,
        autoplay: true, 
        autoplaySpeed: 5000, 
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              swipe: true,
              swipeToSlide: true,
              autoplay: true,
              autoplaySpeed: 5000
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              swipe: true,
              swipeToSlide: true,
              autoplay: true,
              autoplaySpeed: 5000
            }
          }
        ]
      };
      
      


    useEffect(() => {
        const fetchMuseums = async () => {
            const museumCollectionRef = collection(db, 'museums');
            const museumSnapshot = await getDocs(museumCollectionRef);
            const museumList = museumSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setMuseums(museumList);
            setFilteredMuseums(museumList);
        };

        fetchMuseums();
    }, []);

    return (
        <div className="home-container">


            <section className="hero-section">
                <div className="hero-content">
                    <h2 className='hero-section-title'>Discover Museums Around Azerbaijan</h2>
                    <p className='hero-section-description'>Explore the art, history, and culture from the comfort of your home.</p>
                    <Link to="/museums" className='getStarted'>Get Started</Link>
                </div>
            </section>

            <section className="featured-museums">
                <h2>Featured Museums</h2>

                <Slider {...sliderSettings}>
                    {filteredMuseums.map((museum) => (
                        <div key={museum.id} className="museum-card-content">
                            <Link to={`/museum/${museum.id}`}>
                                {museum.bannerImage && (
                                    <img src={museum.bannerImage} alt={museum.name} className="museum-banner" />
                                )}
                            </Link>
                        </div>
                    ))}
                </Slider>
            </section>


            <section className="about-section">
                <h2 className='about-section-title'>About Us</h2>
                <p className='about-section-description'>Learn more about the world's museums and their collections through our curated listings and detailed pages.</p>
            </section>

            <footer className="home-footer">
                <p>&copy; {new Date().getFullYear()} Museum Explorer. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
