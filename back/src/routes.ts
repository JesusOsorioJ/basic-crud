import { Application } from 'express';
import item from "./api/item/item.routes";

const modules = [
  { name: "item", route: item },
];

export function routes(app: Application): void {
  modules.forEach((module) => {
    app.use(`/api/${module.name}`, module.route);
  });
}
