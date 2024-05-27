import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common"
import { PointService } from "./point.service"

@Controller("points")
export class PointController {
  constructor(private readonly pointService: PointService) {}

  @Get(":productId")
  findOne(@Param("productId") productId: string) {
    return this.pointService.findOne(+productId)
  }
}
