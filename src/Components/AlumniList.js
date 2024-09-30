// import React, { useState } from 'react';
// import alumniData from '../alumni.json';
// import Search from '../Components/Search';
// import Results from '../Components/Results';

// const AlumniList = () => {
//     const [searchTerm, setSearchTerm] = useState('');

//     // Filter alumni based on the search term
//     const filteredAlumni = alumniData.filter(alum =>
//         alum.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         alum.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         alum.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         alum.job_title.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     return (
//         <div>
//             <Search onSearch={setSearchTerm} />
//             <Results filteredAlumni={filteredAlumni} />
//         </div>
//     );
// };

// export default AlumniList;
