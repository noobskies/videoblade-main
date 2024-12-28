'use client';

import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const platformIcons = {
  instagram: { icon: Instagram, color: 'text-pink-500' },
  twitter: { icon: Twitter, color: 'text-blue-400' },
  youtube: { icon: Youtube, color: 'text-red-500' },
  linkedin: { icon: Linkedin, color: 'text-blue-700' }
};

const PlatformSelector = ({ selectedPlatforms, onToggle }) => (
  <div className="mb-6 flex flex-wrap gap-3">
    {Object.entries(platformIcons).map(([platform, { icon: Icon, color }]) => (
      <div
        key={platform}
        className={`flex cursor-pointer items-center gap-2 rounded-lg border p-2 transition-all
          ${
            selectedPlatforms.includes(platform)
              ? 'border-primary bg-primary/5'
              : 'border-gray-200 hover:border-gray-300'
          }`}
        onClick={() => onToggle(platform)}
      >
        <Icon className={`h-5 w-5 ${color}`} />
        <span className="capitalize">{platform}</span>
        <Checkbox
          checked={selectedPlatforms.includes(platform)}
          className="ml-2"
        />
      </div>
    ))}
  </div>
);

export default PlatformSelector;
