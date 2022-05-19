// transform object_type
import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsEnum,
  IsDateString,
} from 'class-validator';

export class ScheduleDto {
  @IsNotEmpty({ message: 'deo co ten' }) // annotation
  readonly note: string;

  @IsNotEmpty()
  readonly studentId: number;

  @IsNotEmpty()
  readonly teacherId: number;

  @IsNotEmpty()
  readonly startTime: string;

  @IsNotEmpty()
  readonly endTime: string;
}
