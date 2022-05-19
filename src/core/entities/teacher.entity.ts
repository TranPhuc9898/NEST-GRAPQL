import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  HasMany,
} from 'sequelize-typescript';
import { Schedule } from './schedule.entity';

@Table
export class Teacher extends Model<Teacher> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true,
  })
  fullname: string;
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;
}

// @BelongsTo(() => User)
// user: User;
