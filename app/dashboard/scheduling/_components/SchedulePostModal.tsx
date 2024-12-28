import React, { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, X } from 'lucide-react';
import PlatformSelector from './PlatformSelector';
import PlatformPreview from './PlatformPreview';

interface SchedulePostModalProps {
  register: any;
  errors: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SchedulePostModal: React.FC<SchedulePostModalProps> = ({
  register,
  errors,
  open,
  onOpenChange
}) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState(['instagram']);
  const [mediaUrls, setMediaUrls] = useState<string[]>([]);
  const [content, setContent] = useState({
    default: { text: '' },
    instagram: { text: '' },
    twitter: { text: '' },
    youtube: { text: '' },
    linkedin: { text: '' }
  });

  const handlePlatformToggle = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const urls = files.map((file) => URL.createObjectURL(file));
      setMediaUrls((prev) => [...prev, ...urls]);
    }
  };

  const removeMedia = (index: number) => {
    setMediaUrls((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle>Schedule Post</DialogTitle>
          <DialogDescription>
            Prepare and customize your post for multiple platforms.
          </DialogDescription>
        </DialogHeader>

        <div className="flex w-full gap-4">
          {/* Left Panel - Editor */}
          <div className="w-3/5 space-y-6">
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
                    onClick={() =>
                      document.getElementById('media-upload')?.click()
                    }
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
                        <span className="capitalize">{platform}</span>
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                <TabsContent value="default">
                  <Textarea
                    placeholder="Write your post content..."
                    className="min-h-[200px]"
                    {...register('description')}
                    onChange={(e) => {
                      const newText = e.target.value;
                      setContent((prev) => ({
                        ...prev,
                        default: { ...prev.default, text: newText }
                      }));
                    }}
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
                          [platform]: {
                            ...prev[platform],
                            text: e.target.value
                          }
                        }))
                      }
                    />
                  </TabsContent>
                ))}
              </Tabs>

              {/* Hidden inputs for form data */}
              <input
                type="hidden"
                {...register('title')}
                value={`Social Media Post - ${selectedPlatforms.join(', ')}`}
              />
              <input type="hidden" {...register('variant')} value="primary" />
              <input
                type="hidden"
                {...register('platforms')}
                value={JSON.stringify(selectedPlatforms)}
              />
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="w-2/5 rounded-lg bg-gray-50 p-6">
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
      </DialogContent>
    </Dialog>
  );
};

export default SchedulePostModal;
