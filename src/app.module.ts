import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { ThreadsModule } from './threads/threads.module';
import { AssistantsModule } from './assistants/assistants.module';
import { RunsModule } from './runs/runs.module';
import { StepsModule } from './steps/steps.module';

@Module({
  imports: [MessagesModule, ThreadsModule, AssistantsModule, RunsModule, StepsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
