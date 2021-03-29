"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var users_1 = require("../controllers/users");
var router = express_1.default.Router();
router.post("/signin", express_async_handler_1.default(users_1.signin));
router.post("/signup", express_async_handler_1.default(users_1.signup));
exports.default = router;
