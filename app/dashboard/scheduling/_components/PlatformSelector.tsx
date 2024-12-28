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

interface PlatformSelectorProps {
  selectedPlatforms: string[];
  onToggle: (platform: string) => void;
}

const PlatformSelector: React.FC<PlatformSelectorProps> = ({
  selectedPlatforms,
  onToggle
}) => {
  return (
    <div className="mb-6 flex flex-wrap gap-3">
      {Object.entries(platformIcons).map(
        ([platform, { icon: Icon, color }]) => {
          const isSelected = selectedPlatforms.includes(platform);

          return (
            <label
              key={platform}
              className={`flex cursor-pointer items-center gap-2 rounded-lg border p-2 transition-all
              ${
                isSelected
                  ? 'border-primary bg-primary/5'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <Icon className={`h-5 w-5 ${color}`} />
              <span className="capitalize">{platform}</span>
              <Checkbox
                checked={isSelected}
                className="ml-2"
                onCheckedChange={() => onToggle(platform)}
              />
            </label>
          );
        }
      )}
    </div>
  );
};

export default PlatformSelector;
