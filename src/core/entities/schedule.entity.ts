import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { Student } from './student.entity';
import { Teacher } from './teacher.entity';
// cái fule này dùng để ánh xạ với table trong DB postgre
@Table
export class Schedule extends Model<Schedule> {
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  note: string;

  @Column({
    type: DataType.TIME,
  })
  startTime: string;

  @Column({
    type: DataType.TIME,
  })
  endTime: string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  teacherId: number;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  studentId: number;

  // @BelongsTo(() => Student, 'id')
  // student: Student;
}
//
