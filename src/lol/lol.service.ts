import { Dependencies, Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { lastValueFrom, map } from "rxjs";

@Injectable()
@Dependencies(HttpService)
export class LolService {
  constructor(private httpService: HttpService) {
    this.httpService = httpService;
  }

  async findAll() {
    const url = "https://esports-api.lolesports.com/persisted/gw/getSchedule?hl=pt-BR";
    const apiKey = "0TvQnueqKa5mxJntVWt0w4LpLfEkrV1Ta8rQBb9Z";

    const headers = { "x-api-key": apiKey };

    const response = await lastValueFrom(this.httpService.get(url, { headers }).pipe(map(resp => resp.data)));

    return response;
  }
}
