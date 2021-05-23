import { Test, TestingModule } from '@nestjs/testing';
import { MessageProducerServiceService } from './message-producer-service.service';

describe('MessageProducerServiceService', () => {
  let service: MessageProducerServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageProducerServiceService],
    }).compile();

    service = module.get<MessageProducerServiceService>(MessageProducerServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
