import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class DeactivateAdminDto {
  @ApiProperty({
    example: 1,
    description: 'The ID of the admin to deactivate',
  })
  @IsNumber()
  readonly adminId: number;
}
