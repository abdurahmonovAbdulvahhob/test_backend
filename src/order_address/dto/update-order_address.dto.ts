import { PartialType } from '@nestjs/swagger';
import { CreateOrderAddressDto } from './create-order_address.dto';

export class UpdateOrderAddressDto extends PartialType(CreateOrderAddressDto) {}
