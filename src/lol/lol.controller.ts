import { Controller, Get, Req } from "@nestjs/common";
import { LolService } from "./lol.service";

@Controller("lol")
export class LolsController {
  constructor(private LolService: LolService) {
    this.LolService = LolService;
  }
  @Get()
  findAll() {
    return this.LolService.findAll();
  }
}
