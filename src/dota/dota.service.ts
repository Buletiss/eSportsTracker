import { Dependencies, Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { lastValueFrom, map } from "rxjs";

@Injectable()
@Dependencies(HttpService)
export class DotaService {
  constructor(private httpService: HttpService) {
    this.httpService = httpService;
  }

  async GetAllLeagues() {
    const url = "https://api.opendota.com/api/leagues";

    const response = await lastValueFrom(this.httpService.get(url).pipe(map(resp => resp.data)));
    return response;
  }
}
