import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BadRequestException } from '@nestjs/common';
import { Admin } from './models/admin.model';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import * as bcrypt from 'bcrypt';
import { ActivateAdminDto } from './dto/activate-admin.dto';
import { DeactivateAdminDto } from './dto/deactivate-admin.dto';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminModel: typeof Admin) {}

  async create(createAdminDto: CreateAdminDto) {
    const candidate = await this.adminModel.findOne({
      where: { email: createAdminDto.email },
    });
    if (candidate) {
      throw new BadRequestException('Email already exists');
    }
    if (createAdminDto.password !== createAdminDto.confirm_password) {
      throw new BadRequestException('Passwords do not match');
    }
    const hashedPassword = await bcrypt.hash(createAdminDto.password, 3);
    const newAdmin = await this.adminModel.create({
      ...createAdminDto,
      hashed_password: hashedPassword,
    });
    return newAdmin;
  }

  async findByLogin(email: string) {
    return this.adminModel.findOne({ where: { email } });
  }

  findAll() {
    return this.adminModel.findAll();
  }

  findOne(id: number) {
    return this.adminModel.findByPk(id);
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    if (updateAdminDto.password && updateAdminDto.confirm_password) {
      if (updateAdminDto.password !== updateAdminDto.confirm_password) {
        throw new BadRequestException('Parrollar mos emas');
      }
      const hashed_password = await bcrypt.hash(updateAdminDto.password, 3);
      return await this.adminModel.update(
        { ...updateAdminDto, hashed_password },
        { where: { id }, returning: true },
      );
    }
    return await this.adminModel.update(
      { ...updateAdminDto },
      { where: { id }, returning: true },
    );
  }
  async updateRefreshToken(id: number, hashed_refresh_token: string) {
    await this.adminModel.update(
      { hashed_refresh_token },
      { where: { id }, returning: true },
    );
  }

  remove(id: number) {
    return this.adminModel.destroy({ where: { id } });
  }

  async activateAdmin(activateAdminDto: ActivateAdminDto) {
    const admin = await this.adminModel.findByPk(activateAdminDto.adminId);
    if (admin) {
      admin.is_active = true
      await admin.save();

      return admin;
    }

    throw new NotFoundException('Admin topilmadi');
  }

  async deactivateAdmin(deactivateAdminDto: DeactivateAdminDto) {
    const admin = await this.adminModel.findByPk(deactivateAdminDto.adminId);
    if (admin) {
      admin.is_active = false;
      await admin.save();

      return admin;
    }

    throw new NotFoundException('Admin topilmadi');
  }
}
