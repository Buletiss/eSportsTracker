import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LolsModule } from "./lol/lol.module";
import { DotaModule } from "./dota/dota.module";

@Module({
  imports: [LolsModule, DotaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
