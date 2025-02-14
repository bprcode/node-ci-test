"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const mockDb = new Map([['chickenCount', 0]]);
function blue(text) {
    return `\x1b[34m${text}\x1b[39m`;
}
function orange(text) {
    return `\x1b[93m${text}\x1b[39m`;
}
function logRequest(req, res, next) {
    console.log(orange(req.method), 'request for:', blue(req.originalUrl));
    next();
}
router
    .use(logRequest)
    .use(express_1.default.json())
    .all('/fail', (req, res) => {
    res.status(400).send(req.method + ' request rejected');
})
    .get('/hi', (req, res) => {
    res.send('Hello! 🐦');
})
    .get('/count', (req, res) => {
    res.json({ count: mockDb.get('chickenCount') });
})
    .delete('/count', (req, res) => {
    mockDb.set('chickenCount', 0);
    res.send('Count reset');
})
    .post('/count', (req, res) => {
    console.log('Request body was:', req.body);
    mockDb.set('chickenCount', req.body.num_chickens);
    res.status(200).send('Post accepted');
});
exports.default = router;
