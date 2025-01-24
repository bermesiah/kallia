import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { ThreadsModule } from './threads/threads.module';

@Module({
  imports: [MessagesModule, ThreadsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
