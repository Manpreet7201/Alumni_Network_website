import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Search from '../Components/Search';
import Results from '../Components/Results';

function AlumniConnect() {
  // const alumniProfiles = [
  //   { image: '../Assets/Img/pexels-akbar-nemati-220109-26924664.jpg', name: 'John Doe', company: 'ABC Corp',  },
  //   { image: '../Assets/Img/pexels-pavel-danilyuk-7944037.jpg', name: 'Jane Smith', company: 'XYZ Inc' },
  //   { image: '../Assets/Img/pexels-photo-1234567.jpg', name: 'Alice Brown', company: 'Tech Co' },
  //   { image: '../Assets/Img/pexels-photo-7654321.jpg', name: 'Bob Johnson', company: 'Design LLC' },
  //   { image: '../Assets/Img/pexels-pavel-danilyuk-7944037.jpg', name: 'Jasspreet', company: 'PQRs Inc' },
  //   { image: '../Assets/Img/pexels-photo-1234567.jpg', name: 'Alice Nexa', company: 'Wipro' }
  // ];

  const [searchPerformed, setSearchPerformed] = useState(false);
  const [alumniProfiles, setAlumniProfiles] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchAlumniData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/signup/users'); 
        setAlumniProfiles(response.data); 
        setResults(response.data);
      } catch (error) {
        console.log('Error fetching alumni data:', error);
      }
    };
    fetchAlumniData();
  }, []);
  // const handleSearch = (query) => {
  //   // Filter profiles based on the search query
  //   const filteredResults = alumniProfiles.filter(profile => 
  //     profile.name.toLowerCase().includes(query.toLowerCase()) ||
  //     profile.company.toLowerCase().includes(query.toLowerCase()) ||
  //     profile.industry.toLowerCase().includes(query.toLowerCase()) ||
  //     profile.job_title.toLowerCase().includes(query.toLowerCase()) ||
  //     profile.skills.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setResults(filteredResults);
  // };

  const handleSearch = (query) => {
    setSearchPerformed(true);
    if(query.trim() === ""){
        setResults(alumniProfiles);
        return;
    }
    
    // Filter profiles based on the search query
    const filteredResults = alumniProfiles.filter((profile) => {
      if (!profile) return false; 
      return (
        (profile.firstName && profile.firstName.toLowerCase().includes(query.toLowerCase())) ||
        (profile.lastName && profile.lastName.toLowerCase().includes(query.toLowerCase())) ||
        (profile.companyName && profile.companyName.toLowerCase().includes(query.toLowerCase())) ||
        (profile.industry && profile.industry.toLowerCase().includes(query.toLowerCase())) ||
        (profile.currJob && profile.currJob.toLowerCase().includes(query.toLowerCase())) ||
        (profile.skills && Array.isArray(profile.skills) && profile.skills.some((skill) => skill.toLowerCase().includes(query.toLowerCase())))
      );
    });
    setResults(filteredResults);
  };

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />

      {searchPerformed ? (
        results.length > 0 ? (
          <Results data={results} />
        ) : (
          <p style={{ fontFamily: 'Maitree', textAlign: 'center', marginTop: '20px' }}>
            No Results found
          </p>
        )
      ) : (
        <p style={{fontFamily:'Maitree', textAlign: 'center', marginTop: '20px', fontSize:'1.5rem' }}> Please search for alumni profiles to begin. </p>
        
      )}

      <Link to="/career-resources" className='ready'>Ready to Start</Link>
      {/* <a href="/career-resources" className='ready'  target="_self" rel="noopener noreferrer">
                Ready to Start
      </a> */}
      {/* <button className='ready' style={{ display: 'block', margin: '20px auto' }}>Ready to Start</button> */}
      <Footer/>
    </div>
  );
}

export default AlumniConnect;
