import React, { useState } from 'react';
import { SchedulerProvider, SchedularView } from 'mina-scheduler';
import SchedulePostModal from './SchedulePostModal';

const initialEvents = [
  {
    id: '1',
    title: 'Instagram Post',
    description: 'Monthly product showcase',
    startDate: new Date(),
    endDate: new Date(new Date().getTime() + 60 * 60 * 1000),
    variant: 'primary'
  },
  {
    id: '2',
    title: 'Twitter Campaign',
    description: 'Product launch tweets',
    startDate: new Date(new Date().setDate(new Date().getDate() + 1)),
    endDate: new Date(
      new Date().setDate(new Date().getDate() + 1) + 60 * 60 * 1000
    ),
    variant: 'success'
  }
];

const CalendarPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleAddEvent = (event) => console.log('New event:', event);
  const handleUpdateEvent = (event) => console.log('Updated event:', event);
  const handleDeleteEvent = (id) => console.log('Deleted event:', id);

  return (
    <section className="h-screen w-full p-4">
      <SchedulerProvider
        initialState={initialEvents}
        weekStartsOn="monday"
        onAddEvent={handleAddEvent}
        onUpdateEvent={handleUpdateEvent}
        onDeleteEvent={handleDeleteEvent}
      >
        <SchedularView
          views={{
            views: ['day', 'week', 'month'],
            mobileViews: ['day', 'week']
          }}
          CustomComponents={{
            CustomEventModal: {
              CustomAddEventModal: {
                title: 'Schedule Social Media Post',
                CustomForm: ({ register, errors }) => {
                  console.log('CustomForm invoked', { register, errors });

                  // Suppress the default modal content
                  if (!register || !errors) {
                    return null;
                  }

                  // Render your custom modal
                  return (
                    <SchedulePostModal
                      register={register}
                      errors={errors}
                      open={true} // Replace with actual state later
                      onOpenChange={(open) => {
                        console.log('Modal state change:', open);
                      }}
                    />
                  );
                }
              }
            }
          }}
          classNames={{
            buttons: {
              addEvent: 'bg-primary hover:bg-primary/90',
              next: 'bg-secondary hover:bg-secondary/90',
              prev: 'bg-secondary hover:bg-secondary/90'
            }
          }}
        />
      </SchedulerProvider>
    </section>
  );
};

export default CalendarPage;
