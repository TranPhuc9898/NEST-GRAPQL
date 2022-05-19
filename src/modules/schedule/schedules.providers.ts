// Khai báo các Provider

import { SCHEDULE_REPOSITORY } from 'src/core/constants';
import { Schedule } from 'src/core/entities/schedule.entity';

export const scheduleProviders = [
  {
    provide: SCHEDULE_REPOSITORY,
    useValue: Schedule,
  },
];
