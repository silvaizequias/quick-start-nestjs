import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const PORT = process.env.PORT

  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )

  app.enableCors({
    origin: [
      'http://localhost:3210',
      'http://ponto.localhost:3210',
      'https://dedicado.digital',
      'https://ponto.dedicado.digital',
    ],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  })

  const options = new DocumentBuilder()
    .setTitle('Default Management API')
    .setDescription('Default Management API')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('', app, document)

  await app.listen(PORT || 3030)
}
bootstrap()
