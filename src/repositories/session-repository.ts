import { prisma } from "../config/database";
import { Prisma } from "@prisma/client";

async function create(data: Prisma.SessionUncheckedCreateInput) {
  return prisma.session.create({
    data,
  });
}

async function find(data: number) {
  return prisma.session.findFirst({
    where: {
      userId: data
    }
  })
}

const sessionRepository = {
  create,
  find
};

export default sessionRepository;