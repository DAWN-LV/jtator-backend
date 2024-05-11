import { Body, Controller, Post } from "@nestjs/common"
import { OutputsService } from "./outputs.service"
import { FindAllOutputsDto } from "./dto/find-all-outputs.dto"

@Controller("outputs")
export class OutputsController {
  constructor(private readonly outputService: OutputsService) {}

  @Post()
  findAll(@Body() dto: FindAllOutputsDto) {
    return this.outputService.findAll(dto)
  }
}
