import { Customer } from './../customer/models/customer.model';
import { Injectable, Req } from '@nestjs/common';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Wishlist } from './models/wishlist.model';
import { Request } from 'express';

@Injectable()
export class WishlistService {
  constructor(@InjectModel(Wishlist) private wishlistModel: typeof Wishlist) {}
  async create(createWishlistDto: CreateWishlistDto): Promise<any>{
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
      const deletedRows = await this.wishlistModel.destroy({
        where: {
          customerId: createWishlistDto.customerId,
          productId: createWishlistDto.productId,
        },
      });

      return {message: "Item deleted succecfully from wishlist", rows: deletedRows,status:200}
    }
    return wishlist;
  }

  async findAll(@Req() user: any) {
    const { count: total, rows: wishlist } =
      await this.wishlistModel.findAndCountAll({
        where:{customerId: user.id},
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
