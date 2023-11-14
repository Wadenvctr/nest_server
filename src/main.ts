import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder } from "@nestjs/swagger";


async function start() {
    const PORT = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule)

    const confg = new DocumentBuilder()
    .setTitle('My First backend work')
    .setDescription('Doc for REST API')
    .setVersion('0.0.1')
    .addTag('VW')
    .build()
    await app.listen(PORT, ()=> console.log(`server was started at http://localhost:${PORT}`))
}
start()
