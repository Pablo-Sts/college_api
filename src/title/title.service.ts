import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TitleEntity } from 'src/db/entities/title.entity';
import { Repository } from 'typeorm';
import { TitleDto } from './title.dto';

@Injectable()
export class TitleService {
  constructor(
    @InjectRepository(TitleEntity)
    private readonly titleRepository: Repository<TitleEntity>,
  ) {}

  async getAll(): Promise<TitleDto[]> {
    const titles = await this.titleRepository.find();

    return titles;
  }

  async getById(id: number): Promise<TitleDto | null> {
    const title = await this.titleRepository.findOne({ where: { id } });

    return title;
  }

  async create(title: TitleDto): Promise<TitleDto> {
    const newTitle = await this.titleRepository.save(title);

    return newTitle;
  }

  async update(title: TitleDto): Promise<TitleDto | null> {
    const titleAlredyExist = await this.getById(title.id);

    if (!titleAlredyExist) return null;

    await this.titleRepository.update(title.id, title);

    const updatedTitle = await this.getById(title.id);

    return updatedTitle;
  }

  async delete(id: number): Promise<TitleDto | null> {
    try {
      const title = await this.getById(id);
  
      if (!title) return null;
  
      await this.titleRepository.delete(id);
  
      return title;
    } catch (error) {
      return null;
    }
  }
}
