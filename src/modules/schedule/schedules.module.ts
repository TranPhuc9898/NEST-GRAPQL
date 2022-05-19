// file viết cuối cùng
import { Module } from '@nestjs/common';
import { scheduleController } from './schedules.controller';
import { scheduleProviders } from './schedules.providers';
import { ScheduleResolver } from './schedules.resolver';
import { ScheduleService } from './schedules.service';

@Module({
  providers: [ScheduleService, ...scheduleProviders, ScheduleResolver],
  controllers: [scheduleController],
})
export class ScheduleModule {}
