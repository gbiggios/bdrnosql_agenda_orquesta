import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MembersModule } from './members/members.module';
import { EnsayosModule } from './ensayos/ensayos.module';
import { EventosModule } from './eventos/eventos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://giovanniantoniobs:9aft66hr2TpmZie@alimapuproyectoadmin.oyzjopu.mongodb.net/?retryWrites=true&w=majority&appName=alimapuProyectoAdmin'),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      renderPath: '/', // Establece la ruta de renderizado para servir index.html como la página principal
    }),
    MembersModule,
    EnsayosModule,
    EventosModule,
  ],
})
export class AppModule {}
