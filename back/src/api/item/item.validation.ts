import { checkSchema } from "express-validator";
import prisma from "../../config/prismaLoader";

export const newItem = checkSchema({
  content: {
    in: "body",
    isString: { errorMessage: "input must be a string" },
  },
});

export const updateItem = checkSchema({
  id: {
    in: "params",
    isString: { errorMessage: "input must be a string" },
    custom: {
      options: async (id) => {
        if (id) {
          const resp = await prisma.item.findFirst({
            where: { id: parseInt(id) },
          });
          if (!resp) {
            return Promise.reject("id not exist");
          }
        }
      },
    },
  },
  content: {
    in: "body",
    isString: { errorMessage: "input must be a string" },
  },
});

export const itemId = checkSchema({
  id: {
    in: "params",
    isString: { errorMessage: "input must be a string" },
    custom: {
      options: async (id) => {
        if (id) {
          const resp = await prisma.item.findFirst({
            where: { id: parseInt(id) },
          });
          if (!resp) {
            return Promise.reject("id not exist");
          }
        }
      },
    },
  },
});
