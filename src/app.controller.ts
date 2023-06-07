import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/chat")
  @Render("index")
  home() {
    return
  }


  @Get("/api/chat")
  async chat(@Res() res) {
    const message = await this.appService.getMessage()
    res.json(message)
  }
}
