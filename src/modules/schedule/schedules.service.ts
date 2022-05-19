import { Injectable, Inject, Param } from '@nestjs/common';
import { Schedule } from '../../core/entities/schedule.entity';

import { SCHEDULE_REPOSITORY } from '../../core/constants';
import { ScheduleDto } from './dto/schedules.dto';
import { Student } from 'src/core/entities/student.entity';
import { Teacher } from 'src/core/entities/teacher.entity';

// viết service để tương tác với REPOSITORY
// Cho nên những thằng khác sẽ gọi nó

export class ScheduleService {
  constructor(
    @Inject(SCHEDULE_REPOSITORY)
    private readonly scheduleRepository: typeof Schedule
  ) {}
  // student: StudentDto
  // check
  async create(schedule: ScheduleDto): Promise<Schedule> {
    return await this.scheduleRepository.create(schedule);
  }

  async getAll(): Promise<Schedule[]> {
    return await this.scheduleRepository.findAll({
      // gọi ra 1 thằng có quan hệ chung
      include: [
        {
          model: Student,
          as: 'StudentGroup',
        },
        {
          model: Teacher,
          as: 'TeacherGroup',
        },
      ],
    });
  }
}
