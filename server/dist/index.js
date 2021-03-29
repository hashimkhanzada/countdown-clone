"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
var product_1 = __importDefault(require("./routes/product"));
var user_1 = __importDefault(require("./routes/user"));
var order_1 = __importDefault(require("./routes/order"));
var app = express_1.default();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors_1.default());
app.use("/api/products", product_1.default);
app.use("/api/users", user_1.default);
app.use("/api/orders", order_1.default);
var PORT = process.env.PORT || 5002;
mongoose_1.default
    .connect(process.env.CONNECTION_URL || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(function () {
    return app.listen(PORT, function () { return console.log("Server running on port: " + PORT); });
})
    .catch(function (err) { return console.log(err); });
mongoose_1.default.set("useFindAndModify", false);
