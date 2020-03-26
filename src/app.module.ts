import { Module } from '@nestjs/common';

import { HeroesModule } from './heroes/heroes.module';
import { MenusModule } from './menus/menus.module';
import { MessagesModule } from './messages/messages.module';
import { UsersModule } from './users/users.module';
import { FavoriteModule } from './favorite/favorite.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { SampleSelectModule } from './sample-select/sample-select.module';

@Module({
  imports: [
    FavoriteModule,
    HeroesModule,
    MenusModule,
    MessagesModule,
    UsersModule,
    SchedulerModule,
    SampleSelectModule
  ]
})
export class AppModule {}
