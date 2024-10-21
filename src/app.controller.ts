import { Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './modules/auth/local-auth.guard';
import { AuthenticatedGuard } from './modules/auth/authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Req() req) {
    return req.user;
  }
  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello() {
    return this.appService.getHello();
  }
}
