import { Injectable } from "@nestjs/common";
// import { HttpService } from "@nestjs/axios";

@Injectable()
export class DotaService {
  // constructor(private httpService: HttpService) {
  //   this.httpService = httpService;
  // }

  // constructor(private dota: []) {}

  GetAllLeagues(): string {
    return "rota test";
  }
}
