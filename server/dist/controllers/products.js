"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedProducts = exports.getSubCategoryData = exports.getMainCategoryData = exports.getProductByMainCategory = exports.getProductsBySearch = exports.getProductById = exports.getProducts = void 0;
var product_1 = __importDefault(require("../models/product"));
var seedData_1 = __importDefault(require("../seedData"));
var getProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, product_1.default.find({})];
            case 1:
                products = _a.sent();
                res.send(products);
                return [2];
        }
    });
}); };
exports.getProducts = getProducts;
var getProductById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, product_1.default.findById(req.params.id)];
            case 1:
                product = _a.sent();
                if (product) {
                    res.send(product);
                }
                else {
                    res.status(404).send({ message: "Product not found" });
                }
                return [2];
        }
    });
}); };
exports.getProductById = getProductById;
var getProductsBySearch = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchTerm, productCount, results, page, limit, startIndex, endIndex, _a, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                searchTerm = req.query.searchTerm;
                return [4, product_1.default.find({
                        name: { $regex: searchTerm, $options: "i" },
                    }).countDocuments()];
            case 1:
                productCount = _b.sent();
                results = { paginatedProducts: [], next: {}, previous: {} };
                page = +req.query.page;
                limit = +req.query.limit;
                startIndex = (page - 1) * limit;
                endIndex = page * limit;
                if (endIndex < productCount) {
                    results.next = {
                        page: page + 1,
                    };
                }
                if (startIndex > 0) {
                    results.previous = {
                        page: page - 1,
                    };
                }
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
                _a = results;
                return [4, product_1.default.find({
                        name: { $regex: searchTerm, $options: "i" },
                    })
                        .limit(limit)
                        .skip(startIndex)];
            case 3:
                _a.paginatedProducts = _b.sent();
                return [3, 5];
            case 4:
                err_1 = _b.sent();
                res.status(500).json({ message: err_1 });
                return [3, 5];
            case 5:
                res.send({ results: results, totalProducts: productCount });
                return [2];
        }
    });
}); };
exports.getProductsBySearch = getProductsBySearch;
var getProductByMainCategory = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var category, productCount, results, page, limit, startIndex, endIndex, _a, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                category = req.params.mainCategory.toLowerCase();
                return [4, product_1.default.find({
                        mainCategory: category,
                    }).countDocuments()];
            case 1:
                productCount = _b.sent();
                results = { paginatedProducts: [], next: {}, previous: {} };
                page = +req.query.page;
                limit = +req.query.limit;
                startIndex = (page - 1) * limit;
                endIndex = page * limit;
                if (endIndex < productCount) {
                    results.next = {
                        page: page + 1,
                    };
                }
                if (startIndex > 0) {
                    results.previous = {
                        page: page - 1,
                    };
                }
                _b.label = 2;
            case 2:
                _b.trys.push([2, 4, , 5]);
                _a = results;
                return [4, product_1.default.find({
                        mainCategory: category,
                    })
                        .limit(limit)
                        .skip(startIndex)];
            case 3:
                _a.paginatedProducts = _b.sent();
                return [3, 5];
            case 4:
                err_2 = _b.sent();
                res.status(500).json({ message: err_2 });
                return [3, 5];
            case 5:
                res.send({ results: results, totalProducts: productCount });
                return [2];
        }
    });
}); };
exports.getProductByMainCategory = getProductByMainCategory;
var getMainCategoryData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchTerm, products, categories;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchTerm = req.query.searchTerm;
                return [4, product_1.default.find({
                        name: { $regex: searchTerm, $options: "i" },
                    })];
            case 1:
                products = _a.sent();
                categories = [];
                products.forEach(function (element) {
                    if (!categories.some(function (item) { return item.categoryName == element.mainCategory; })) {
                        categories.push({
                            categoryName: element.mainCategory,
                            numberOfItems: 1,
                        });
                    }
                    else {
                        categories.forEach(function (sub) {
                            if (sub.categoryName === element.mainCategory) {
                                sub.numberOfItems = sub.numberOfItems + 1;
                            }
                        });
                    }
                });
                res.send(categories);
                return [2];
        }
    });
}); };
exports.getMainCategoryData = getMainCategoryData;
var getSubCategoryData = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var category, products, subCategories;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                category = req.params.mainCategory.toLowerCase();
                return [4, product_1.default.find({
                        mainCategory: category,
                    })];
            case 1:
                products = _a.sent();
                subCategories = [];
                products.forEach(function (element) {
                    if (!subCategories.some(function (item) { return item.subCategoryName == element.subCategory; })) {
                        subCategories.push({
                            subCategoryName: element.subCategory,
                            numberOfItems: 1,
                        });
                    }
                    else {
                        subCategories.forEach(function (sub) {
                            if (sub.subCategoryName === element.subCategory) {
                                sub.numberOfItems = sub.numberOfItems + 1;
                            }
                        });
                    }
                });
                res.send(subCategories);
                return [2];
        }
    });
}); };
exports.getSubCategoryData = getSubCategoryData;
var seedProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var createdProducts;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, product_1.default.remove({})];
            case 1:
                _a.sent();
                return [4, product_1.default.insertMany(seedData_1.default)];
            case 2:
                createdProducts = _a.sent();
                res.send({ createdProducts: createdProducts });
                return [2];
        }
    });
}); };
exports.seedProducts = seedProducts;
