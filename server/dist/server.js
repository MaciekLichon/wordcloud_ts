"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const questions_routes_1 = require("./routes/questions.routes");
const app = (0, express_1.default)();
/* MIDDLEWARE */
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use((0, cors_1.default)());
/* ENDPOINTS */
app.use('/api', questions_routes_1.router);
/* MIDDLEWARE */
app.use((req, res) => {
    res.status(404).json({ message: 'Not found...' });
});
/* SERVER PORT */
app.listen(8000, () => {
    console.log('Server is running on port: 8000');
});
