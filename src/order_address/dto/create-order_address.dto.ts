import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateOrderAddressDto {
  @ApiProperty({
    example: 1,
    description: 'Customer ID',
  })
  @IsNumber()
  customerId: number;

  @ApiProperty({
    example: "123 Main St",
    description: 'Address',
  })
  @IsString()
  address: string;

  @ApiProperty({
    example: "New York",
    description: 'City',
  })
  @IsString()
  city: string;

  @ApiProperty({
    example: 12324,
    description: 'postal code',
  })
  @IsNumber()
  postal_code: number;

  @ApiProperty({
    example: "beckend street",
    description: 'Street address',
  })
  @IsString()
  street: string;

  @ApiProperty({
    example: "123",
    description: 'flat number',
  })
  @IsNumber()
  flat_number: number;

  @ApiProperty({
    example: 23,
    description: 'Housen number',
  })
  @IsNumber()
  house_number: number;

  @ApiProperty({
    example: "+998900435334",
    description: 'phone number',
  })
  @IsString()
  phone: string;
}
