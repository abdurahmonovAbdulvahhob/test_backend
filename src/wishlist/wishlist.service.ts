import { Injectable } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Wishlist } from './models/wishlist.model';

@Injectable()
export class WishlistService {
  constructor(@InjectModel(Wishlist) private wishlistModel: typeof Wishlist) {}
  create(createWishlistDto: CreateWishlistDto) {
    return this.wishlistModel.create(createWishlistDto);
  }

  findAll() {
    return this.wishlistModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.wishlistModel.findOne({
      where: { id },
      include: { all: true },
    });
  }

  update(id: number, updateWishlistDto: UpdateWishlistDto) {
    return this.wishlistModel.update(updateWishlistDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.wishlistModel.destroy({ where: { id } });
  }
}
