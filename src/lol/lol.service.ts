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

    const response = await lastValueFrom(
      this.httpService.get(url, { headers }).pipe(map(resp => resp.data.data.schedule.events)),
    );

    var responseMap = response.map(e => {
      var filterArray = {
        startTime: e.startTime,
        state: e.state,
        blockName: e.blockName,
        league: {
          name: e.league.name,
          slug: e.league.slug,
        },
        match: {
          id: e.match.id,
          teamRed: e.match.teams[0],
          teamBlue: e.match.teams[1],
        },
      };
      return filterArray;
    });
    return responseMap;
  }
}
