import { Router } from "express";
import * as controller from "./item.controllers";
import * as validatiom from "./item.validation";
import { errorHandler } from "../../config/expressValidator";

const router = Router();

router.get("/", controller.getAllItem as any);
router.post("/", validatiom.newItem, errorHandler, controller.newItem as any);
router.put("/:id", validatiom.updateItem, errorHandler, controller.updateItem as any);
router.delete("/:id", validatiom.itemId, errorHandler, controller.deleteItem as any);

export default router;
