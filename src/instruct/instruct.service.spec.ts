import { Test, TestingModule } from '@nestjs/testing';
import { InstructService } from './instruct.service';

describe('InstructService', () => {
  let service: InstructService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstructService],
    }).compile();

    service = module.get<InstructService>(InstructService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
