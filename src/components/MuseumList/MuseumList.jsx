import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import './MuseumList.css';

const MuseumList = () => {
  const [museums, setMuseums] = useState([]);
  const [filteredMuseums, setFilteredMuseums] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  useEffect(() => {
    const filtered = museums.filter(museum =>
      museum.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMuseums(filtered);
  }, [searchTerm, museums]);

  return (
    <div className="museum-list-container">
      <h1>Museums</h1>
      <input
        className="search-bar"
        type="text"
        placeholder="Search museums..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="museum-list">
        {filteredMuseums.map(museum => (
          <div key={museum.id} className="museum-card">
            <Link to={`/museum/${museum.id}`}>
              {museum.bannerImage && (
                <img src={museum.bannerImage} alt={museum.name} className="museum-banner" />
              )}
              <div className="museum-info">
                <span className="museum-name">{museum.name}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {filteredMuseums.length === 0 && (
        <p className="no-results">No museums match your search.</p>
      )}
    </div>
  );
};

export default MuseumList;
