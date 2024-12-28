// app/dashboard/scheduling/_components/PlatformPreview.tsx
'use client';

import React from 'react';
import { Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

// Platform Icons
const platformIcons = {
  instagram: { icon: Instagram, color: 'text-pink-500' },
  twitter: { icon: Twitter, color: 'text-blue-400' },
  youtube: { icon: Youtube, color: 'text-red-500' },
  linkedin: { icon: Linkedin, color: 'text-blue-700' }
};

const PlatformPreview = ({ platform, content, mediaUrls }) => {
  // Instagram Preview
  const renderInstagramPreview = () => (
    <div className="w-full border-b bg-gray-50 p-4">
      <h2 className="flex items-center text-lg font-semibold text-pink-500">
        <Instagram className="mr-2" />
        Instagram
      </h2>
      <div className="mt-2 w-full rounded-lg border bg-white shadow-sm">
        <div className="flex items-center p-4">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          <div className="ml-3">
            <span className="font-semibold">Your Account</span>
            <div className="text-sm text-gray-500">Location</div>
          </div>
        </div>
        {mediaUrls.length > 0 && (
          <div className="w-full">
            <img
              src={mediaUrls[0]}
              alt="Preview"
              className="h-auto w-full object-cover"
            />
          </div>
        )}
        <div className="p-4 text-sm">
          <span className="font-semibold">Your Account</span>{' '}
          {content.instagram?.text || content.default.text}
        </div>
      </div>
    </div>
  );

  // Twitter Preview
  const renderTwitterPreview = () => (
    <div className="w-full border-b bg-gray-50 p-4">
      <h2 className="flex items-center text-lg font-semibold text-blue-400">
        <Twitter className="mr-2" />
        Twitter
      </h2>
      <div className="mt-2 w-full rounded-lg border bg-white p-4 shadow-sm">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          <div className="ml-3">
            <span className="font-semibold">YourHandle</span>
            <span className="ml-1 text-gray-500">@yourhandle · 1m</span>
          </div>
        </div>
        <div className="mt-4 text-sm">
          {content.twitter?.text || content.default.text}
        </div>
        {mediaUrls.length > 0 && (
          <div className="mt-4">
            <img
              src={mediaUrls[0]}
              alt="Preview"
              className="h-auto w-full rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );

  // YouTube Preview
  const renderYouTubePreview = () => (
    <div className="w-full border-b bg-gray-50 p-4">
      <h2 className="flex items-center text-lg font-semibold text-red-500">
        <Youtube className="mr-2" />
        YouTube
      </h2>
      <div className="mt-2 w-full rounded-lg border bg-white shadow-sm">
        {mediaUrls.length > 0 && (
          <div className="h-48 w-full bg-gray-200">
            <img
              src={mediaUrls[0]}
              alt="Preview"
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="text-sm font-bold">
            {content.youtube?.text || content.default.text}
          </h3>
          <div className="text-xs text-gray-500">
            Your Channel · 1 view · Just now
          </div>
        </div>
      </div>
    </div>
  );

  // LinkedIn Preview
  const renderLinkedInPreview = () => (
    <div className="w-full bg-gray-50 p-4">
      <h2 className="flex items-center text-lg font-semibold text-blue-700">
        <Linkedin className="mr-2" />
        LinkedIn
      </h2>
      <div className="mt-2 w-full rounded-lg border bg-white shadow-sm">
        <div className="flex items-center p-4">
          <div className="h-10 w-10 rounded-full bg-gray-300"></div>
          <div className="ml-3">
            <span className="font-semibold">Your Profile</span>
            <div className="text-sm text-gray-500">Your Headline</div>
          </div>
        </div>
        <div className="p-4 text-sm">
          {content.linkedin?.text || content.default.text}
        </div>
        {mediaUrls.length > 0 && (
          <div className="w-full">
            <img
              src={mediaUrls[0]}
              alt="Preview"
              className="h-auto w-full rounded-b-lg object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );

  // Render Based on Platform
  switch (platform) {
    case 'instagram':
      return renderInstagramPreview();
    case 'twitter':
      return renderTwitterPreview();
    case 'youtube':
      return renderYouTubePreview();
    case 'linkedin':
      return renderLinkedInPreview();
    default:
      return null;
  }
};

export default PlatformPreview;
