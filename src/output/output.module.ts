import { Module } from "@nestjs/common"
import { OutputService } from "./outputs.service"
import { OutputController } from "./outputs.controller"

@Module({
  controllers: [OutputController],
  providers: [OutputService],
})
export class OutputModule {}
