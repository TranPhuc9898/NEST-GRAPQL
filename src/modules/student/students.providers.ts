// Khai báo các Provider
import { Student } from '../../core/entities/student.entity';
import { STUDENT_REPOSITORY } from '../../core/constants';

export const studentProviders = [
  {
    provide: STUDENT_REPOSITORY,
    useValue: Student,
  },
];
