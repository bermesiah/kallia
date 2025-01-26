import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { ThreadsModule } from './threads/threads.module';
import { AssistantsModule } from './assistants/assistants.module';
import { RunsModule } from './runs/runs.module';

@Module({
  imports: [MessagesModule, ThreadsModule, AssistantsModule, RunsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
