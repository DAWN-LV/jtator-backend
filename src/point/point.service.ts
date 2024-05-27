import { Injectable } from "@nestjs/common"

import points from "./entities/point.entity"

@Injectable()
export class PointService {
  findOne(productId: number) {
    return points.find(point => point.productIds.includes(productId))
  }
}
