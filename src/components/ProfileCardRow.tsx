import React from 'react';
import ProfileCard from './ProfileCard';

interface ProfileCardRowProps {
  profiles: ProfileCardProps[];
}

const ProfileCardRow: React.FC<ProfileCardRowProps> = ({ profiles }) => {
  const getCardStyle = (numColumns: number) => {
    return { flexBasis: `calc(100% / ${numColumns})` };
  };

  return (
    <div className="flex flex-wrap justify-center">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          {...profile}
          style={getCardStyle(profiles.length >= 4 ? 4 : profiles.length)}
        />
      ))}
    </div>
  );
};

export default ProfileCardRow;
