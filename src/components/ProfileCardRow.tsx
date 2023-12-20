// components/ProfileCardRow.tsx
import React from 'react';
import ProfileCard from './ProfileCard';

interface ProfileCardRowProps {
  profiles: ProfileCardProps[];
}

const ProfileCardRow: React.FC<ProfileCardRowProps> = ({ profiles }) => {
  return (
    <div className="flex flex-wrap justify-between px-20">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} {...profile} />
      ))}
    </div>
  );
};

export default ProfileCardRow;
