import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

interface ProfileCardProps {
  name: string;
  role: string;
  portraitImageUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
  instagramUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  portraitImageUrl,
  linkedinUrl,
  twitterUrl,
  instagramUrl,
}) => {
  return (
    <div
      className="bg-gray-800 p-8 relative flex flex-col items-start rounded-md mb-4 mx-2"
      style={{ width: "300px", height: "300px"}}
    >
      <h1 className="text-xl text-white font-bold mb-2">{name}</h1>
      <p className="text-lg text-green-400 mb-4">{role}</p>
      <div className="flex space-x-4 text-white mb-4">
        <a href={linkedinUrl} className="hover:text-gray-400">
          <FaLinkedin />
        </a>
        <a href={twitterUrl} className="hover:text-gray-400">
          <FaTwitter />
        </a>
        <a href={instagramUrl} className="hover:text-gray-400">
          <FaInstagram />
        </a>
      </div>
      <div className="flex-grow"></div>
      <div
        className="bg-gradient-to-tr z-0 rounded-full from-green-400 to-green-600 w-40 h-40 flex items-end justify-end absolute bottom-3 right-6"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, var(--Blue-Hue, #4DE3ED) 0%,rgba(0,128,0,0.4) 60%,rgba(0,128,0,0.2) 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(30px)",
          zIndex: 0,
        }}
      ></div>
      <img
        src={portraitImageUrl}
        className="z-50 absolute bottom-0 right-0 h-40"
        style={{
          position: "absolute",
          zIndex: 1,
        }}
      ></img>
    </div>
  );
};

export default ProfileCard;
