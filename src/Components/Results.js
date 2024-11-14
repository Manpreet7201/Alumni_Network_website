import React from 'react';
import {Link} from 'react-router-dom';
import ImageAvatar from '../Assets/Img/avatar.jpg'
import '../CSS/AlumniConnect.css'

const Results = ({ data }) => {
  // const navigate = useNavigate();

  // const handleProfileClick = (profile) => {
  //   console.log('Profile data being passed:', profile);
  //   navigate('/profile', {state:{profile}});
  // }

//   const handleProfileClick = (profile) => {
//     navigate(`/profile/${profile.id}`, { state: { location: "some location data" } });
// };

  return (
    <div className='results-container'>
      <h2>Related Results -</h2>
      {data.map((profile, index) => (
        <div key={index} className='profile-card' style={{ margin: '10px', border: '1px solid #ccc', padding: '10px', display: 'flex', alignItems: 'center' }}>
          {/* <img src={profile.profile_image_url} alt={profile.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
           */}
          <div className="profile-image">
            {/* <img src={profile.profile_image_url} alt={profile.name} /> */}
            <img src={ImageAvatar} alt={profile.name} />
          </div>
          <div className='profile-info'>
            <h3>{profile.name}</h3>
            <p> <span className='dark'>Company: </span>  {profile.company}</p>
            <p> <span className='dark'>Job Title:</span>  {profile.job_title}</p>
            <p> <span className='dark'>Skills:</span>  {profile.skills.join(', ')}</p>
          </div>
          <div>
          {/* <Link to={`/profile/${profile.id}`} onClick={()=> handleProfileClick(profile)} className='link'>See Profile</Link> */}
            <Link 
              to={`/alumni-connect/profile/${profile.name}`} 
              state={{ profile }} 
              className='link'
            >
              See Profile
            </Link>
          {/* <a src="#SeeProfile"> See Profile</a> */}
          </div>
        </div>
      ))}
      {/* <div className="see-all">
        <button>See all results</button>
      </div> */}
    </div>
  );
};

export default Results;

