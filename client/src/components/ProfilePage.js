import React from 'react';
import './ProfilePage.css';
import NavbarPart from './NavbarPart';
import AddPostPart from './AddPostPart';
import PostPartForProfilePage from './PostPartForProfilePage';

function ProfilePage() {
  return (
    <div className='allofprofilepagepart'>
      <NavbarPart />
      <AddPostPart />
      <PostPartForProfilePage />
    </div>
  )
}

export default ProfilePage;