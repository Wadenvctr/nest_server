"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function start() {
    const PORT = process.env.PORT || 3000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const confg = new swagger_1.DocumentBuilder()
        .setTitle('My First backend work')
        .setDescription('Doc for REST API')
        .setVersion('0.0.1')
        .addTag('VW')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, confg);
    swagger_1.SwaggerModule.setup('/api/docs', app, document);
    await app.listen(PORT, () => console.log(`server was started at http://localhost:${PORT}`));
}
start();
//# sourceMappingURL=main.js.map