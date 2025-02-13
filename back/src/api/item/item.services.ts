import prisma from '../../config/prismaLoader';

type Data = {
  content: string;
};

export const getAllItem = async () => {
  const resp = await prisma.item.findMany();
  return resp;
};

export const newItem = async (data: Data) => {
  const resp = await prisma.item.create({
    data: {
      content: data.content,
    },
  });
  return resp;
};

export const updateItem = async (id: number, data: Data) => {
  console.log({id, data})
  const resp = await prisma.item.update({
    where: {
      id
    },
    data: {
      content: data.content,
    },
  });
  return resp;
};

export const deleteItem = async (id: number) => {
  const resp = await prisma.item.deleteMany({
    where: {id}
  });
  return resp;
};