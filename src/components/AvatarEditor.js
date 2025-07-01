"use client";

import React, { useState } from 'react';
import Avatar from './Avatar';

const AvatarEditor = () => {
  const [hairColor, setHairColor] = useState('black');
  const [eyeColor, setEyeColor] = useState('brown');
  const [skinTone, setSkinTone] = useState('fair');

  return (
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl font-bold">Create Your Avatar</h2>
      <div className="flex flex-wrap justify-center mb-4">
        <label className="block text-lg mr-4">
          Hair Color:
          <select
            value={hairColor}
            onChange={(e) => setHairColor(e.target.value)}
            className="bg-gray-200 border-2 border-gray-300 rounded py-1 px-3"
          >
            <option value="black">Black</option>
            <option value="brown">Brown</option>
            <option value="blonde">Blonde</option>
            <option value="red">Red</option>
          </select>
        </label>
        <label className="block text-lg mr-4">
          Eye Color:
          <select
            value={eyeColor}
            onChange={(e) => setEyeColor(e.target.value)}
            className="bg-gray-200 border-2 border-gray-300 rounded py-1 px-3"
          >
            <option value="brown">Brown</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="gray">Gray</option>
          </select>
        </label>
        <label className="block text-lg mr-4">
          Skin Tone:
          <select
            value={skinTone}
            onChange={(e) => setSkinTone(e.target.value)}
            className="bg-gray-200 border-2 border-gray-300 rounded py-1 px-3"
          >
            <option value="fair">Fair</option>
            <option value="medium">Medium</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
      <Avatar hairColor={hairColor} eyeColor={eyeColor} skinTone={skinTone} />
    </div>
  );
};

export default AvatarEditor;