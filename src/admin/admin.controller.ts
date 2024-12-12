import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Admin } from './models/admin.model';
import { ActivateAdminDto } from './dto/activate-admin.dto';
import { DeactivateAdminDto } from './dto/deactivate-admin.dto';
import { AdminSelfGuard } from '../common/guards';
import { CreatorGuard } from '../common/guards/creator.guard';

@ApiTags('Admin')
// @ApiBearerAuth()
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @ApiOperation({ summary: 'Add new admin' })
  @ApiResponse({
    status: 201,
    description: 'Added',
    type: Admin,
  })
  @UseGuards(CreatorGuard)
  @Post('create')
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @ApiOperation({ summary: 'Get all data' })
  @ApiResponse({
    status: 200,
    description: 'All admin value',
    type: [Admin],
  })
  @UseGuards(CreatorGuard)
  @Get('get')
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOperation({ summary: 'Get one data by Id' })
  // @UseGuards(AdminSelfGuard)
  @ApiResponse({
    status: 200,
    description: 'Get one by Id',
    type: Admin,
  })
  @UseGuards(AdminSelfGuard)
  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update one data by Id' })
  @ApiResponse({
    status: 200,
    description: 'Update by Id',
    type: Admin,
  })
  @UseGuards(AdminSelfGuard)
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @ApiOperation({ summary: 'Delete one data by Id' })
  @UseGuards(CreatorGuard)
  @ApiResponse({
    status: 200,
    description: 'Delete by Id',
    type: Number,
  })
  @UseGuards(CreatorGuard)
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }

  @ApiOperation({ summary: 'Activate the admin' })
  @HttpCode(200)
  @UseGuards(CreatorGuard)
  @Post('activate')
  activateAdmin(@Body() activateAdminDto: ActivateAdminDto) {
    return this.adminService.activateAdmin(activateAdminDto);
  }

  @ApiOperation({ summary: 'Deactivate the admin' })
  @HttpCode(200)
  @UseGuards(CreatorGuard)
  @Post('deactivate')
  deactivateAdmin(@Body() deactivateAdminDto: DeactivateAdminDto) {
    return this.adminService.activateAdmin(deactivateAdminDto);
  }
}
