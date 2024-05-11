import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { UnitsModule } from "./units/units.module"
import { OutputModule } from './output/output.module';

@Module({
  imports: [UnitsModule, OutputModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
