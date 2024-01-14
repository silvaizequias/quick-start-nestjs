import { Module } from '@nestjs/common'
import { PrismaModule } from './prisma/prisma.module'
import { DomainsModule } from './domains/domains.module'
import { AuthorizationModule } from './authorization/authorization.module';

@Module({
  imports: [PrismaModule, DomainsModule, AuthorizationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
