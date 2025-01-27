import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TitleService } from './title.service';
import { TitleDto } from './title.dto';

@Controller('title')
export class TitleController {
  constructor(private readonly titleService: TitleService) {}

  @Get()
  async getAll(): Promise<TitleDto[]> {
    const titles = await this.titleService.getAll();

    return titles;
  }

  @Get('/:id')
  async getById(@Param('id') id: number): Promise<TitleDto | null> {
    const title = await this.titleService.getById(id);

    return title;
  }

  @Post()
  async create(@Body() title: TitleDto): Promise<TitleDto> {
    const newTitle = await this.titleService.create(title);

    return newTitle;
  }

  @Put()
  async update(@Body() title: TitleDto): Promise<TitleDto | null> {
    if(!title.id) return null;

    const updatedTitle = await this.titleService.update(title);

    return updatedTitle;
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<TitleDto | null> {
    const deletedTitle = await this.titleService.delete(id);

    return deletedTitle;
  }
}
