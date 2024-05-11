import { Injectable } from "@nestjs/common"

@Injectable()
export class UnitsService {
  findAll() {
    return [
      {
        type: "paper",
      },
      {
        type: "ink",
      },
      {
        type: "glue",
      }
    ]
  }
}
