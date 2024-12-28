'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, X } from 'lucide-react';
import PlatformSelector from './PlatformSelector';
import PlatformPreview from './PlatformPreview';

const SchedulePostModal = () => {
  const [selectedPlatforms, setSelectedPlatforms] = useState(['instagram']);
  const [mediaUrls, setMediaUrls] = useState([]);
  const [content, setContent] = useState({
    default: { text: '' },
    instagram: { text: '' },
    twitter: { text: '' },
    youtube: { text: '' },
    linkedin: { text: '' }
  });

  const handlePlatformToggle = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const handleMediaUpload = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setMediaUrls((prev) => [...prev, ...urls]);
  };

  const removeMedia = (index) => {
    setMediaUrls((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex h-[80vh] w-full max-w-6xl overflow-hidden rounded-lg bg-white">
      {/* Left Panel - Editor */}
      <div className="w-3/5 overflow-y-auto border-r p-6">
        <h2 className="mb-6 text-xl font-semibold">Create Post</h2>

        <PlatformSelector
          selectedPlatforms={selectedPlatforms}
          onToggle={handlePlatformToggle}
        />

        <div className="space-y-6">
          {/* Media Upload */}
          <div>
            <Label className="mb-2 block">Media</Label>
            <div className="grid grid-cols-4 gap-4">
              {mediaUrls.map((url, index) => (
                <div key={index} className="group relative">
                  <img
                    src={url}
                    alt="Preview"
                    className="h-24 w-full rounded-lg object-cover"
                  />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute right-2 top-2 hidden group-hover:flex"
                    onClick={() => removeMedia(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              <Button
                variant="outline"
                className="flex h-24 w-full flex-col gap-2"
                onClick={() => document.getElementById('media-upload').click()}
              >
                <Plus className="h-5 w-5" />
                <span>Add Media</span>
              </Button>
              <input
                id="media-upload"
                type="file"
                multiple
                accept="image/*,video/*"
                className="hidden"
                onChange={handleMediaUpload}
              />
            </div>
          </div>

          {/* Content Editor */}
          <Tabs defaultValue="default">
            <div className="mb-4 flex items-center justify-between">
              <Label>Content</Label>
              <TabsList>
                <TabsTrigger value="default">Default</TabsTrigger>
                {selectedPlatforms.map((platform) => (
                  <TabsTrigger key={platform} value={platform}>
                    <div className={`flex items-center gap-2`}>
                      <span className="capitalize">{platform}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="default">
              <Textarea
                placeholder="Write your post content..."
                className="min-h-[200px]"
                value={content.default.text}
                onChange={(e) =>
                  setContent((prev) => ({
                    ...prev,
                    default: { ...prev.default, text: e.target.value }
                  }))
                }
              />
            </TabsContent>

            {selectedPlatforms.map((platform) => (
              <TabsContent key={platform} value={platform}>
                <Textarea
                  placeholder={`Customize your ${platform} post...`}
                  className="min-h-[200px]"
                  value={content[platform].text || content.default.text}
                  onChange={(e) =>
                    setContent((prev) => ({
                      ...prev,
                      [platform]: { ...prev[platform], text: e.target.value }
                    }))
                  }
                />
              </TabsContent>
            ))}
          </Tabs>

          {/* Scheduling */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Schedule for</Label>
              <Input type="datetime-local" className="mt-2" />
            </div>
            <div>
              <Label>Time zone</Label>
              <Input type="text" defaultValue="UTC" className="mt-2" />
            </div>
          </div>

          <Button className="w-full">Schedule Post</Button>
        </div>
      </div>

      {/* Right Panel - Preview */}
      <div className="w-2/5 overflow-y-auto bg-gray-50 p-6">
        <h3 className="mb-4 font-semibold">Preview</h3>
        {selectedPlatforms.map((platform) => (
          <PlatformPreview
            key={platform}
            platform={platform}
            content={content}
            mediaUrls={mediaUrls}
          />
        ))}
      </div>
    </div>
  );
};

export default SchedulePostModal;
