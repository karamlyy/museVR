import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import './MuseumDetail.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MuseumDetail = () => {
    const [museum, setMuseum] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchMuseumDetail = async () => {
            const museumDocRef = doc(db, 'museums', id);
            const museumDocSnap = await getDoc(museumDocRef);

            if (museumDocSnap.exists()) {
                setMuseum({ id: museumDocSnap.id, ...museumDocSnap.data() });
            } else {
                console.log("No such document!");
            }
        };

        fetchMuseumDetail();
    }, [id]);

    if (!museum) {
        return <div>Loading...</div>;
    }


    const mapsUrl = museum.location ? `https://www.google.com/maps/search/?api=1&query=${museum.location._lat},${museum.location._long}` : '';

    return (
        <div className="museum-detail">
            <h1 className="museum-title">{museum.name}</h1>
            <div className="museum-images">
                {museum.detailImages && museum.detailImages.map((image, index) => (
                    <img key={index} src={image} alt={`Detail ${index + 2}`} className="museum-detail-image" />
                ))}
            </div>
            <div className="museum-images">
                {museum.vrImages && museum.vrImages.map((image, index) => (
                    <iframe key={index} src={image} alt={`Detail ${index + 2}`} className="museum-detail-image" />
                ))}
            </div>
            
            <p className="museum-description">{museum.description}</p>
            <p className="museum-location">
                Location: <a href={mapsUrl} target="_blank" rel="noopener noreferrer">View on Map</a>
            </p>
            {museum.website && <p className="museum-website">Website: <a href={museum.website} target="_blank" rel="noopener noreferrer">{museum.website}</a></p>}
            <div className="museum-hours">
                <h3>Working Hours: {museum.hours}</h3>

            </div>
        </div>
    );
};

export default MuseumDetail;