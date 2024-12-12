import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty({
    example: 1,
    description: 'id of the order',
  })
  @IsNumber()
  orderId: number;

  @ApiProperty({
    example: 2,
    description: 'id of the payment method',
  })
  @IsNumber()
  payment_methodId: number;

  @ApiProperty({
    example: 1000,
    description: 'amount of the payment',
  })
  @IsNumber()
  amount: number;

  @ApiProperty({
    example: 'payed',
    description: 'status of the payment',
  })
  @IsString()
  status: 'pending' | 'completed' | 'failed' | 'cancelled';

  @ApiProperty({
    example: '17.02.2023',
    description: 'date of the transaction',
  })
  @IsString()
  transaction_date: string;
}
