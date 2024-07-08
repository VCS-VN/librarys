import { Controller, Get } from '@nestjs/common';

@Controller({
  path: '/health-check',
})
export class HealthCheckController {
  @Get()
  async getImages() {
    return 'OK';
  }
}
