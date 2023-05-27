import { Module } from "@nestjs/common";
import { DotaController } from "./dota.controller";
import { DotaService } from "./dota.service";
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  controllers: [DotaController],
  providers: [DotaService],
})
export class DotaModule {}
