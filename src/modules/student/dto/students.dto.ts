// transform object_type
import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

export class StudentDto {
  @IsNotEmpty({ message: 'deo co ten' }) // annotation
  readonly fullname: string;

  // @IsNotEmpty()
  // readonly id: number;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
//dto viết đầu tiên
// sau khi đó mình lên core/dâtabase/entities :
// + viết tiếp anh xạ cho table ( table trong postgre có những gì thì file entity.ts phải có đầy đủ)

//khia báo file entity.ts mới viết trong db provider là tên class đó
