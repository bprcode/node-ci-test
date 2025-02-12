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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app
    .use(express_1.default.static('public'))
    .get('/foo', (req, res) => {
    console.log('foo~');
    res.send('hey foo');
})
    .get('/ex', (req, res) => {
    res.send('new example route !!??#?? ;) 🦆🐐😺');
})
    .get('/as', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('starting async...');
    return new Promise(ok => setTimeout(() => {
        res.send('timeout resolved');
        console.log('async done.');
    }, 5000));
}));
app.listen(port, () => {
    console.log("Server's up on \x1b[96mhttp://localhost:" + port + '\x1b[39m 🦆');
});
