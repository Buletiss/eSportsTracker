import { Controller, Get, Req, Query } from "@nestjs/common";
import { LolService } from "./lol.service";

@Controller("lol")
export class LolsController {
  constructor(private LolService: LolService) {
    this.LolService = LolService;
  }
  @Get()
  //rota com query  'lol?page=1'
  async findAll(@Query("page") page: number) {
    const allLols = await this.LolService.findAll();
    const limitPerPage = 10;
    const startIndex = (page - 1) * limitPerPage;
    const endIndex = page * limitPerPage;

    const paginatedLols = allLols.slice(startIndex, endIndex);

    const totalMatch = allLols.length;

    if (paginatedLols != null) {
      return {
        data: paginatedLols.length ? paginatedLols : "Pagina Não encontrada",
        totalMatch: totalMatch,
        maxPages: Math.ceil(totalMatch / limitPerPage),
      };
    } else {
      return { data: "send nullable text" };
    }
  }
}
