import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
} from '@nestjs/common';
import * as moment from 'moment';
import { ScheduleDto } from './dto/schedules.dto';
import { ScheduleService } from './schedules.service';

// file controller dùng để điều hướng req
@Controller('/schedule')
export class scheduleController {
  constructor(private scheduleService: ScheduleService) {}
  @Post('/')
  async createScheduleController(
    @Body() schedule: ScheduleDto,
    @Request() req
  ): Promise<ScheduleDto> {
    // console.log(req);
    console.log(schedule, 'hello');
    return await this.scheduleService.create(req.body);
  }

  @Get('/')
  async getschedulesController(): Promise<any[]> {
    const scheduleEntities = await this.scheduleService.getAll();

    const result = scheduleEntities.map((e) => {
      const startTime = moment(e.startTime, 'hh:mm:ss a');
      const endTime = moment(e.endTime, 'hh:mm:ss a');
      

      return {
        ...e.toJSON(),
        learningTime: endTime.diff(startTime, 'minutes'),
      };
    });
    console.log(result, 'result');
    return result;
  }
}
