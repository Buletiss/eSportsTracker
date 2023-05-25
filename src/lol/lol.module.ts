import { Module } from "@nestjs/common";
import { LolsController } from "./lol.controller";
import { LolService } from "./lol.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  controllers: [LolsController],
  providers: [LolService],
})
export class LolsModule {}
