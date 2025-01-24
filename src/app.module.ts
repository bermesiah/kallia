import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { ThreadsModule } from './threads/threads.module';
import { AssistantsModule } from './assistants/assistants.module';

@Module({
  imports: [MessagesModule, ThreadsModule, AssistantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
