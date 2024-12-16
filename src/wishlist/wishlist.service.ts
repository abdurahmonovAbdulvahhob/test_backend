import { Customer } from './../customer/models/customer.model';
import { Injectable } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Wishlist } from './models/wishlist.model';

@Injectable()
export class WishlistService {
  constructor(@InjectModel(Wishlist) private wishlistModel: typeof Wishlist) {}
  async create(createWishlistDto: CreateWishlistDto) {
    const [wishlist, created] = await this.wishlistModel.findOrCreate({
      where: {
        customerId: createWishlistDto.customerId,
        productId: createWishlistDto.productId,
      },
      defaults: {
        customerId: createWishlistDto.customerId,
        productId: createWishlistDto.productId,
      },
    });
    if (!created) {
      return this.wishlistModel.destroy({
        where: {
          customerId: createWishlistDto.customerId,
          productId: createWishlistDto.productId,
        },
      });
    }
    return wishlist;
  }

  async findAll() {
    const { count: total, rows: wishlist } =
      await this.wishlistModel.findAndCountAll({
        attributes: ['id', 'productId', 'createdAt'],
        include: [
          {
            model: Customer,
            attributes: [],
          },
        ],
      });
    return { wishlist, total };
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
