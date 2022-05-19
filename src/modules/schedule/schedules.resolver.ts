import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateScheduleInput } from './dto/grapql/input/CreateShedule.input';
import { ScheduleType } from './dto/grapql/type/Schedule.type';
import { ScheduleService } from './schedules.service';

@Resolver()
export class ScheduleResolver {
  constructor(private scheduleService: ScheduleService) {}
  @Mutation(() => ScheduleType)
  async createSchedule(
    @Args('input') args: CreateScheduleInput
  ): Promise<ScheduleType> {
    console.log(args, 'hello');
    return await this.scheduleService.create(args);
  }

  @Query(() => [ScheduleType])
  async getSchedules(): Promise<ScheduleType[]> {
    return await this.scheduleService.getAll();
  }
}
