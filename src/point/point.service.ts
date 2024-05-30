import { Injectable } from "@nestjs/common"
import { OutputService } from "src/output/outputs.service"

import entities from "./entities/point.entity"

@Injectable()
export class PointService {
  findOne(productId: number) {
    return entities.find(entity => entity.productIds.includes(productId))
  }
}
