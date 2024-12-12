import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreatePaymentMethodDto {
  @ApiProperty({
    example: 'cash',
    description: 'method type cash credit card',
  })
  @IsString()
  readonly method_name: string;

  @ApiProperty({
    example: 'about payment',
    description: 'method description',
  })
  @IsOptional()
  @IsString()
  readonly description: string;
}
