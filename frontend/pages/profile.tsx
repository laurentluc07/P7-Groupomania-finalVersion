import React from 'react';
import PostForm from '../components/PostForm';
import Navbar from '../components/Navbar';
import ProfilePage from '../components/Profile';

const Profile: React.FC = () => {
  return (
    <Navbar>
      <ProfilePage />
    </Navbar>
  )
}

export default Profile;
