declare module 'mina-scheduler' {
  export interface Event {
    id: string;
    title: string;
    description?: string;
    startDate: Date;
    endDate: Date;
    variant?: string;
    platform?: string;
  }

  export interface SchedulerProviderProps {
    initialState: Event[];
    weekStartsOn: 'monday' | 'sunday';
    onAddEvent: (event: Event) => void;
    onUpdateEvent: (event: Event) => void;
    onDeleteEvent: (id: string) => void;
  }

  export const SchedulerProvider: React.FC<SchedulerProviderProps>;

  export interface SchedularViewProps {
    classNames?: any;
    views: {
      views: string[];
      mobileViews: string[];
    };
    CustomComponents?: {
      CustomEventModal?: {
        CustomAddEventModal?: {
          title: string;
          CustomForm: React.FC<any>;
        };
      };
    };
  }

  export const SchedularView: React.FC<SchedularViewProps>;
}
