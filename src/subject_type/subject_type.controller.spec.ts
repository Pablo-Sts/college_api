import { Test, TestingModule } from '@nestjs/testing';
import { SubjectTypeController } from './subject_type.controller';

describe('SubjectTypeController', () => {
  let controller: SubjectTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubjectTypeController],
    }).compile();

    controller = module.get<SubjectTypeController>(SubjectTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
