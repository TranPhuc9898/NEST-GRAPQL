import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Schedule } from './schedule.entity';
// cái fule này dùng để ánh xạ với table trong DB postgre
@Table
export class Student extends Model<Student> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fullname: string;

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    autoIncrementIdentity: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  //  @HasMany(() => Schedule, 'studentId')
  // schedule: Schedule[];

  //   @Column({
  //     type: DataType.ENUM,
  //     values: ['male', 'female'],
  //     allowNull: false,
  //   })
  //   gender: string;
}
