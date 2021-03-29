"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var products_1 = require("../controllers/products");
var router = express_1.default.Router();
router.get("/", express_async_handler_1.default(products_1.getProducts));
router.get("/seed", express_async_handler_1.default(products_1.seedProducts));
router.get("/search", express_async_handler_1.default(products_1.getProductsBySearch));
router.get("/search/category", express_async_handler_1.default(products_1.getMainCategoryData));
router.get("/browse/:mainCategory/data", express_async_handler_1.default(products_1.getProductByMainCategory));
router.get("/browse/:mainCategory/subcategory", express_async_handler_1.default(products_1.getSubCategoryData));
router.get("/browse/:id", express_async_handler_1.default(products_1.getProductById));
exports.default = router;
