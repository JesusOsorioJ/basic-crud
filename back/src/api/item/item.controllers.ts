import { Request, Response, NextFunction } from "express";
import * as service from "./item.services";

export const getAllItem = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const resp = await service.getAllItem();
    res.status(200).json(resp);
  } catch (error) {
    next(error);
  }
};

export const newItem = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { content } = req.body;

    await service.newItem({content});
    const resp = await service.getAllItem();

    res.status(201).json(resp);
  } catch (error) {
    next(error);
  }
};

export const updateItem = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { content } = req.body;
    const { id } = req.params;
    await service.updateItem(parseInt(id), {content});
    const resp = await service.getAllItem();

    res.status(201).json(resp);
  } catch (error) {
    console.log(error)
    next(error);
  }
};


export const deleteItem = async (req: Request  & { io: Server }, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    await service.deleteItem(parseInt(id));
    const resp = await service.getAllItem();
    res.status(201).json(resp);
  } catch (error) {
    console.log({error})
    next(error);
  }
};
