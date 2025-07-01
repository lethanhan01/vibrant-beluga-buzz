"use client";

import React from 'react';
import { useState } from 'react';

const Avatar = () => {
  const [hairColor, setHairColor] = useState('black');
  const [eyeColor, setEyeColor] = useState('brown');
  const [skinTone, setSkinTone] = useState('fair');

  return (
    <div className="flex justify-center">
      <img
        src={`https://randomavatar.com/api/avatar?hair=${hairColor}&eyes=${eyeColor}&skin=${skinTone}`}
        alt="Avatar"
        className="w-48 h-48 rounded-full border-2 border-gray-200"
      />
    </div>
  );
};

export default Avatar;