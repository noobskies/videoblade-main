import { Avatar } from '@/components/ui/avatar';
import { Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';

export function RecentActivities() {
  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Avatar className="flex h-10 w-10 items-center justify-center bg-blue-500">
          <Twitter className="h-5 w-5 text-white" />
        </Avatar>
        <div className="ml-4 flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">
            "How to Boost Productivity"
          </p>
          <p className="text-sm text-muted-foreground">Scheduled for Twitter</p>
        </div>
        <p className="ml-auto text-sm text-muted-foreground">2h ago</p>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-10 w-10 items-center justify-center bg-gradient-to-r from-pink-500 to-orange-500">
          <Instagram className="h-5 w-5 text-white" />
        </Avatar>
        <div className="ml-4 flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">
            "10 Tips for Better Marketing"
          </p>
          <p className="text-sm text-muted-foreground">
            Scheduled for Instagram
          </p>
        </div>
        <p className="ml-auto text-sm text-muted-foreground">5h ago</p>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-10 w-10 items-center justify-center bg-blue-600">
          <Facebook className="h-5 w-5 text-white" />
        </Avatar>
        <div className="ml-4 flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">
            "The Future of Tech in 2024"
          </p>
          <p className="text-sm text-muted-foreground">
            Scheduled for Facebook
          </p>
        </div>
        <p className="ml-auto text-sm text-muted-foreground">1d ago</p>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-10 w-10 items-center justify-center bg-blue-700">
          <Linkedin className="h-5 w-5 text-white" />
        </Avatar>
        <div className="ml-4 flex-1 space-y-1">
          <p className="text-sm font-medium leading-none">
            "5 Ways to Stay Fit at Work"
          </p>
          <p className="text-sm text-muted-foreground">
            Scheduled for LinkedIn
          </p>
        </div>
        <p className="ml-auto text-sm text-muted-foreground">3d ago</p>
      </div>
    </div>
  );
}
