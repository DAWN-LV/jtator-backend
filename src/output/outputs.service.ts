import { Injectable } from "@nestjs/common"
import { FindAllOutputsDto } from "./dto/find-all-outputs.dto"

import output from "./entities/output.entity"

@Injectable()
export class OutputsService {
  findAll(dto: FindAllOutputsDto) {
    const resources = {
      paper: dto.paper || 0, 
      glue: dto.glue || 0,
      ink: dto.ink || 0
    }

    const outputs = output.map(item => {
      const count = Math.min(
        ...Object.entries(item.units).map(([key, value]) => {
          return resources[key] / value
        })
      )

      return {
        id: item.id,
        type: item.type,
        info: item.info,
        count: Math.floor(count)
      }
    })

    return outputs.filter(item => item.count > 0)
  }
}
