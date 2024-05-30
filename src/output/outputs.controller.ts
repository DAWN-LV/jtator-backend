import { Body, Controller, Post } from "@nestjs/common"
import { OutputService } from "./outputs.service"
import { FindAllOutputsDto } from "./dto/find-all-outputs.dto"

@Controller("outputs")
export class OutputController {
  constructor(private readonly outputService: OutputService) {}

  @Post()
  findAll(@Body() dto: FindAllOutputsDto) {
    return this.outputService.findAll(dto)
  }
}
