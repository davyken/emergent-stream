import React, { useState, useEffect } from 'react';
import { POPULAR_MOVIES, ANIME_MOVIES, SERIES } from './FloatingMovies';

const IMAGES = [
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

const ALL_IMAGES = [...IMAGES, ...IMAGES];

export default function FilmStrip() {
  return (
    <div className="film-strip" style={{
      position: 'absolute',
      bottom: 80,
      left: 0,
      width: '100%',
      zIndex: 2,
    }}>
      <div className="film-strip-track">
        {ALL_IMAGES.map((img, idx) => (
          <div key={idx} className="film-frame">
            <img
              src={img}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}