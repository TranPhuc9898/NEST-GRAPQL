// transform object_type
import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

export class TeacherDto {
  @IsNotEmpty({ message: 'deo co ten' }) // annotation
  readonly fullname: string;

  // @IsNotEmpty()
  // readonly id: number;
}
