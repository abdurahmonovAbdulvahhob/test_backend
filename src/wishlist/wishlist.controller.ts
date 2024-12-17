import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, } from '@nestjs/common';
import { WishlistService } from './wishlist.service';
import { CreateWishlistDto } from './dto/create-wishlist.dto';
import { UpdateWishlistDto } from './dto/update-wishlist.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserGuard } from '../common/guards';
import { UserSelfGuard } from '../common/guards/user-self.guard';

@Controller('wishlist')
export class WishlistController {
  constructor(private readonly wishlistService: WishlistService) {}

  @UseGuards(UserGuard)
  @ApiOperation({ summary: 'Creating wishlist' })
  @ApiResponse({
    status: 200,
    description: 'Create wishlist',
    type: Object,
  })
  @Post('create')
  create(@Body() createWishlistDto: CreateWishlistDto) {
    return this.wishlistService.create(createWishlistDto);
  }

  @UseGuards(UserSelfGuard)
  @ApiOperation({ summary: 'get all wishlist of the current user' })
  @ApiResponse({
    status: 200,
    description: 'get all wishlist of the current user',
    type: Object,
  })
  @Get('get')
  findAll(@Req() req:any) {
    return this.wishlistService.findAll(req.user);
  }

  // @ApiOperation({ summary: 'get one wishlist' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'get one wishlist',
  //   type: Object,
  // })
  // @Get('get/:id')
  // findOne(@Param('id') id: string) {
  //   return this.wishlistService.findOne(+id);
  // }

  // @ApiOperation({ summary: 'update wishlist' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'update wishlist',
  //   type: Object,
  // })
  // @Patch('update/:id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateWishlistDto: UpdateWishlistDto,
  // ) {
  //   return this.wishlistService.update(+id, updateWishlistDto);
  // }

  @UseGuards(UserSelfGuard)
  @ApiOperation({ summary: 'delete wishlist' })
  @ApiResponse({
    status: 200,
    description: 'delete wishlist',
    type: Object,
  })
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.wishlistService.remove(+id);
  }
}
