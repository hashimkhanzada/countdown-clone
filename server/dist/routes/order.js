"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var orders_1 = require("../controllers/orders");
var auth_1 = __importDefault(require("../middleware/auth"));
var router = express_1.default.Router();
router.post("/", auth_1.default, express_async_handler_1.default(orders_1.newOrder));
router.get("/", auth_1.default, express_async_handler_1.default(orders_1.getOrders));
exports.default = router;
