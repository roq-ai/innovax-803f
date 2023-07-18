import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { connectionRequestValidationSchema } from 'validationSchema/connection-requests';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getConnectionRequests();
    case 'POST':
      return createConnectionRequest();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getConnectionRequests() {
    const data = await prisma.connection_request
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'connection_request'));
    return res.status(200).json(data);
  }

  async function createConnectionRequest() {
    await connectionRequestValidationSchema.validate(req.body);
    const body = { ...req.body };

    const data = await prisma.connection_request.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
