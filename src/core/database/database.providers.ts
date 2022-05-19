import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { Post } from '../entities/post.entity';
import { Student } from '../entities/student.entity';
import { Teacher } from '../entities/teacher.entity';
import { User } from '../entities/user.entity';
import { databaseConfig } from './database.config';
import { Schedule } from '../entities/schedule.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User, Post, Teacher, Student, Schedule]);

      //asssociation
      // đang quan hệ 1 - n
      Student.hasMany(Schedule, { foreignKey: 'studentId' });

      // đang quan hệ 1 - n
      Schedule.belongsTo(Student, {
        foreignKey: 'studentId',
        targetKey: 'id',
        as: 'StudentGroup',
      });
      Teacher.hasMany(Schedule, { foreignKey: 'teacherId' });

      Schedule.belongsTo(Teacher, {
        foreignKey: 'teacherId',
        targetKey: 'id',
        as: 'TeacherGroup',
      });

      await sequelize.sync();
      return sequelize;
    },
  },
];
