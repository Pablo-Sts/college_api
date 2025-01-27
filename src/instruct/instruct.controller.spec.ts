import { Test, TestingModule } from '@nestjs/testing';
import { InstructController } from './instruct.controller';

describe('InstructController', () => {
  let controller: InstructController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstructController],
    }).compile();

    controller = module.get<InstructController>(InstructController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
