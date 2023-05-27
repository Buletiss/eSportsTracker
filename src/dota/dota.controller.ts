import { Controller, Get } from "@nestjs/common";
import { DotaService } from "./dota.service";

@Controller("dota")
export class DotaController {
  constructor(private dotaService: DotaService) {
    this.dotaService = dotaService;
  }
  @Get()
  GetAllLeagues(): string {
    return this.dotaService.GetAllLeagues();
  }
}