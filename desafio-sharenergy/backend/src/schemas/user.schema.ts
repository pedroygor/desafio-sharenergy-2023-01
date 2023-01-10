import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  @ApiProperty({ example: 'Jane Doe' })
  name: string;

  @Prop()
  @ApiProperty({ example: 22, description: 'A idade do usuário' })
  age: number;

  @Prop(
    raw({
      rua: { type: String },
      bairro: { type: String },
      numero: { type: Number },
      cidade: { type: String },
      estado: { type: String },
    }),
  )
  @ApiProperty({
    type: 'object',
    example: {
      rua: 'Rua do bobos',
      bairro: 'Centro',
      numero: 0,
      cidade: 'Cidadela',
      estado: 'Bahia',
    },
  })
  address: Record<string, any>;

  @Prop()
  @ApiProperty({ example: '88 998761234' })
  phone: string;

  @Prop()
  @ApiProperty({ example: 'example@email.com' })
  email: string;

  @Prop()
  @ApiProperty({ example: '123.456.789-00' })
  cpf: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
