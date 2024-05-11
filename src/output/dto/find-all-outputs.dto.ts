import { IsNumber, IsOptional, Min } from "class-validator"

export class FindAllOutputsDto {
  @IsOptional()
  @IsNumber()
  @Min(0)
  paper?: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  glue?: number

  @IsOptional()
  @IsNumber()
  @Min(0)
  ink?: number
}