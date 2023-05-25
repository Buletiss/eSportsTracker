import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LolsModule } from "./lol/lol.module";

@Module({
  imports: [LolsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
