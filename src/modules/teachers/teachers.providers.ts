// Khai báo các Provider
import { Teacher } from '../../core/entities/teacher.entity';
import { TEACHER_REPOSITORY } from '../../core/constants';

export const teacherProviders = [
  {
    provide: TEACHER_REPOSITORY,
    useValue: Teacher,
  },
];
