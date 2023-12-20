// pages/index.tsx
import React from 'react';
import ProfileCardRow from '../components/ProfileCardRow';

const Home: React.FC = () => {
  const profiles = [
    {
      name: 'Abhiraj',
      role: "Tech Team",
      portraitImageUrl: 'https://s3-alpha-sig.figma.com/img/30eb/6d28/d707985d4f02702a6adc9eeaddfcd820?Expires=1704067200&Signature=nIrtDzTNofYKLl3npDd9gy2fHnpPDy~kUgoHz-LKaIlEtGZJQk~kuZcXTr8M5ycensJlpT90fJ~NaIeOd1TSCBFZF5Gj7KVl7WYjOCyTq6PBQlc7D5J8Px2KuSX4IpM7J8gfWWrapaVUQd-Sb9ixg2eyx-T-NG29LCqbETaB~gyhDEEN--MwbrtCeu1gIIJjvQtYvdlA9ItxshVLu1vw2g2niqXuBdvRfj1ts70KtFy5J-iX50NrP6Yly0eKB6PZ3XlCoEFk7aZvZIsYIOzRbzwTfgYQIluMNt-ER6ysZAGKdztcbtLSBdzXETSSXrpadSI5vcD-ATNbu0tekD6Y1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      linkedinUrl: '#',
      twitterUrl: '#',
      instagramUrl: '#',
    },
    {
      name: 'Abhiraj',
      role: "Tech Team",
      portraitImageUrl: 'https://s3-alpha-sig.figma.com/img/30eb/6d28/d707985d4f02702a6adc9eeaddfcd820?Expires=1704067200&Signature=nIrtDzTNofYKLl3npDd9gy2fHnpPDy~kUgoHz-LKaIlEtGZJQk~kuZcXTr8M5ycensJlpT90fJ~NaIeOd1TSCBFZF5Gj7KVl7WYjOCyTq6PBQlc7D5J8Px2KuSX4IpM7J8gfWWrapaVUQd-Sb9ixg2eyx-T-NG29LCqbETaB~gyhDEEN--MwbrtCeu1gIIJjvQtYvdlA9ItxshVLu1vw2g2niqXuBdvRfj1ts70KtFy5J-iX50NrP6Yly0eKB6PZ3XlCoEFk7aZvZIsYIOzRbzwTfgYQIluMNt-ER6ysZAGKdztcbtLSBdzXETSSXrpadSI5vcD-ATNbu0tekD6Y1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      linkedinUrl: '#',
      twitterUrl: '#',
      instagramUrl: '#',
    },
    {
      name: 'Abhiraj',
      role: "Tech Team",
      portraitImageUrl: 'https://s3-alpha-sig.figma.com/img/30eb/6d28/d707985d4f02702a6adc9eeaddfcd820?Expires=1704067200&Signature=nIrtDzTNofYKLl3npDd9gy2fHnpPDy~kUgoHz-LKaIlEtGZJQk~kuZcXTr8M5ycensJlpT90fJ~NaIeOd1TSCBFZF5Gj7KVl7WYjOCyTq6PBQlc7D5J8Px2KuSX4IpM7J8gfWWrapaVUQd-Sb9ixg2eyx-T-NG29LCqbETaB~gyhDEEN--MwbrtCeu1gIIJjvQtYvdlA9ItxshVLu1vw2g2niqXuBdvRfj1ts70KtFy5J-iX50NrP6Yly0eKB6PZ3XlCoEFk7aZvZIsYIOzRbzwTfgYQIluMNt-ER6ysZAGKdztcbtLSBdzXETSSXrpadSI5vcD-ATNbu0tekD6Y1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      linkedinUrl: '#',
      twitterUrl: '#',
      instagramUrl: '#',
    },
    {
      name: 'Abhiraj',
      role: "Tech Team",
      portraitImageUrl: 'https://s3-alpha-sig.figma.com/img/30eb/6d28/d707985d4f02702a6adc9eeaddfcd820?Expires=1704067200&Signature=nIrtDzTNofYKLl3npDd9gy2fHnpPDy~kUgoHz-LKaIlEtGZJQk~kuZcXTr8M5ycensJlpT90fJ~NaIeOd1TSCBFZF5Gj7KVl7WYjOCyTq6PBQlc7D5J8Px2KuSX4IpM7J8gfWWrapaVUQd-Sb9ixg2eyx-T-NG29LCqbETaB~gyhDEEN--MwbrtCeu1gIIJjvQtYvdlA9ItxshVLu1vw2g2niqXuBdvRfj1ts70KtFy5J-iX50NrP6Yly0eKB6PZ3XlCoEFk7aZvZIsYIOzRbzwTfgYQIluMNt-ER6ysZAGKdztcbtLSBdzXETSSXrpadSI5vcD-ATNbu0tekD6Y1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      linkedinUrl: '#',
      twitterUrl: '#',
      instagramUrl: '#',
    },
    
  ];

  return (
    <div>
      <ProfileCardRow profiles={profiles} />
    </div>
  );
};

export default Home;
