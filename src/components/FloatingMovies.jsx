import React from 'react';

const WORKING_IMAGES = [
  'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=200&h=300&fit=crop',
  'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=200&h=300&fit=crop',
  'https://images.unsplash.com/photo-1627873649417-c67f701f1949?w=200&h=300&fit=crop',
  'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=200&h=300&fit=crop',
  'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=200&h=300&fit=crop',
  'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=200&h=300&fit=crop',
  'https://images.unsplash.com/photo-1599719162074-b4465ca8768d?w=200&h=300&fit=crop',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=200&h=300&fit=crop',
  'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=200&h=300&fit=crop',
  'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=200&h=300&fit=crop',
];

const POPULAR_MOVIES = [
  { id: 1, title: 'Stranger Things', poster: WORKING_IMAGES[0], rating: 8.7 },
  { id: 2, title: 'The Mandalorian', poster: WORKING_IMAGES[1], rating: 8.5 },
  { id: 3, title: 'Squid Game', poster: WORKING_IMAGES[2], rating: 8.0 },
  { id: 4, title: 'Arcane', poster: WORKING_IMAGES[3], rating: 8.7 },
  { id: 5, title: 'Wednesday', poster: WORKING_IMAGES[4], rating: 7.8 },
  { id: 6, title: 'The Last of Us', poster: WORKING_IMAGES[5], rating: 8.3 },
  { id: 7, title: 'Spider-Man', poster: WORKING_IMAGES[9], rating: 7.5 },
  { id: 8, title: 'The Bear', poster: WORKING_IMAGES[7], rating: 8.6 },
  { id: 9, title: 'Avatar', poster: WORKING_IMAGES[8], rating: 7.9 },
];

const ANIME_MOVIES = [
  { id: 11, title: 'Your Name', poster: WORKING_IMAGES[0], rating: 8.5 },
  { id: 12, title: 'Weathering With You', poster: WORKING_IMAGES[2], rating: 8.2 },
  { id: 13, title: 'Demon Slayer', poster: WORKING_IMAGES[4], rating: 8.0 },
  { id: 14, title: 'Suzume', poster: WORKING_IMAGES[6], rating: 7.7 },
  { id: 15, title: 'First Slam Dunk', poster: WORKING_IMAGES[8], rating: 7.9 },
];

const SERIES = [
  { id: 16, title: 'Breaking Bad', poster: WORKING_IMAGES[1], rating: 8.9 },
  { id: 17, title: 'Game of Thrones', poster: WORKING_IMAGES[3], rating: 8.4 },
  { id: 18, title: 'Stranger Things', poster: WORKING_IMAGES[0], rating: 8.7 },
  { id: 19, title: 'The Flash', poster: WORKING_IMAGES[5], rating: 7.8 },
  { id: 20, title: 'The Simpsons', poster: WORKING_IMAGES[7], rating: 8.0 },
];

const ALL_MOVIES = [...POPULAR_MOVIES, ...ANIME_MOVIES, ...SERIES];

const cardPositions = [
  { top: '15%', left: '5%', delay: '0s', size: 70, rotation: -8 },
  { top: '25%', left: '85%', delay: '0.5s', size: 85, rotation: 12 },
  { top: '55%', left: '3%', delay: '1s', size: 90, rotation: -5 },
  { top: '65%', left: '88%', delay: '1.5s', size: 75, rotation: 8 },
  { top: '40%', left: '92%', delay: '2s', size: 65, rotation: -10 },
  { top: '80%', left: '8%', delay: '2.5s', size: 80, rotation: 6 },
  { top: '20%', left: '15%', delay: '3s', size: 60, rotation: -3 },
  { top: '70%', left: '80%', delay: '3.5s', size: 72, rotation: 5 },
  { top: '45%', left: '75%', delay: '4s', size: 68, rotation: -7 },
  { top: '35%', left: '50%', delay: '4.5s', size: 55, rotation: 2 },
];

export default function FloatingMovies() {
  const displayMovies = ALL_MOVIES.slice(0, 10);

  return (
    <>
      {displayMovies.map((movie, idx) => {
        const pos = cardPositions[idx];
        return (
          <div
            key={movie.id}
            className="floating-movie-card"
            style={{
              top: pos.top,
              left: pos.left,
              width: pos.size,
              animationDelay: pos.delay,
              transform: `rotate(${pos.rotation}deg)`,
            }}
          >
            <img
              src={movie.poster}
              alt={movie.title}
            />
            <div className="movie-overlay">
              <div style={{ fontWeight: 600 }}>{movie.title}</div>
              <div style={{ fontSize: '9px', color: '#c9a84c' }}>★ {movie.rating}</div>
            </div>
          </div>
        );
      })}
      
      <div className="cinema-light" style={{ top: '10%', left: '20%' }} />
      <div className="cinema-light" style={{ top: '60%', right: '10%' }} />
      <div className="cinema-light" style={{ bottom: '20%', left: '40%' }} />
    </>
  );
}

export { POPULAR_MOVIES, ANIME_MOVIES, SERIES };