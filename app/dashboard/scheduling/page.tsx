'use client';

import { SchedulerProvider, SchedularView, Event } from 'mina-scheduler';
import PageContainer from '@/components/layout/page-container';

// Initial events
const initialEvents: Event[] = [
  {
    id: '1',
    title: 'Instagram Story: Product Launch',
    description: 'New product line announcement with behind-the-scenes content',
    startDate: new Date(),
    endDate: new Date(new Date().getTime() + 60 * 60 * 1000), // 1 hour later
    variant: 'primary', // Instagram color theme
    platform: 'instagram' // Custom field for platform
  },
  {
    id: '2',
    title: 'TikTok: Trending Challenge',
    description: 'Participate in the latest viral trend',
    startDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // Tomorrow
    endDate: new Date(new Date().getTime() + 25 * 60 * 60 * 1000),
    variant: 'default', // TikTok color theme
    platform: 'tiktok'
  },
  {
    id: '3',
    title: 'YouTube: Tutorial Series',
    description: 'Episode 1 of product tutorial series',
    startDate: new Date(new Date().getTime() + 48 * 60 * 60 * 1000), // Day after tomorrow
    endDate: new Date(new Date().getTime() + 49 * 60 * 60 * 1000),
    variant: 'danger', // YouTube color theme
    platform: 'youtube'
  }
];

// Custom styling for the scheduler
const customClassNames = {
  buttons: {
    addEvent: 'bg-primary text-primary-foreground hover:bg-primary/90',
    next: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    prev: 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
  },
  tabs: {
    panel: 'pt-4',
    tab: 'data-[selected=true]:bg-primary/10'
  },
  event: 'rounded-md shadow-sm'
};

// Custom event form component
const CustomEventForm: React.FC<{ register: any; errors: any }> = ({
  register,
  errors
}) => (
  <div className="space-y-4">
    <div>
      <input
        {...register('title')}
        placeholder="Event Title"
        className="w-full rounded-md border p-2"
      />
      {errors.title && (
        <span className="text-sm text-red-500">{errors.title.message}</span>
      )}
    </div>

    <div>
      <textarea
        {...register('description')}
        placeholder="Description"
        className="w-full rounded-md border p-2"
      />
    </div>

    <div>
      <select
        {...register('platform')}
        className="w-full rounded-md border p-2"
      >
        <option value="">Select Platform</option>
        <option value="instagram">Instagram</option>
        <option value="tiktok">TikTok</option>
        <option value="youtube">YouTube</option>
        <option value="twitter">Twitter</option>
        <option value="linkedin">LinkedIn</option>
      </select>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <input
        {...register('startDate')}
        type="datetime-local"
        className="rounded-md border p-2"
      />
      <input
        {...register('endDate')}
        type="datetime-local"
        className="rounded-md border p-2"
      />
    </div>
  </div>
);

export default function SchedulingPage() {
  const handleAddEvent = (event: Event) => {
    console.log('New event:', event);
    // Add API call here
  };

  const handleUpdateEvent = (event: Event) => {
    console.log('Updated event:', event);
    // Add API call here
  };

  const handleDeleteEvent = (id: string) => {
    console.log('Deleted event:', id);
    // Add API call here
  };

  return (
    <PageContainer>
      <SchedulerProvider
        initialState={initialEvents}
        weekStartsOn="monday"
        onAddEvent={handleAddEvent}
        onUpdateEvent={handleUpdateEvent}
        onDeleteEvent={handleDeleteEvent}
      >
        <SchedularView
          classNames={customClassNames}
          views={{
            views: ['day', 'week', 'month'],
            mobileViews: ['day', 'week']
          }}
          CustomComponents={{
            CustomEventModal: {
              CustomAddEventModal: {
                title: 'Schedule Post',
                CustomForm: CustomEventForm
              }
            }
          }}
        />
      </SchedulerProvider>
    </PageContainer>
  );
}
