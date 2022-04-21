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
var express_1 = __importDefault(require("express"));
var validateInputs_1 = __importDefault(require("../../utilities/validateInputs"));
var sharp_1 = __importDefault(require("../../utilities/sharp"));
var path_1 = __importDefault(require("path"));
var images = express_1.default.Router();
//images endpoint
images.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var imageName, hi, wi, hight, width, resizeImageName, outputPath, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 8, , 9]);
                imageName = req.query.imageName;
                hi = req.query.hight;
                wi = req.query.width;
                hight = parseInt(hi);
                width = parseInt(wi);
                resizeImageName = "".concat(imageName, "_").concat(hight, "_").concat(width);
                outputPath = void 0;
                if (!!(0, validateInputs_1.default)("".concat(imageName, ".jpg"), 'full')) return [3 /*break*/, 1];
                res.send('image is not found ,please enter the right name');
                return [3 /*break*/, 7];
            case 1:
                if (!(req.query.hight === undefined || req.query.width === undefined)) return [3 /*break*/, 2];
                res.send('sorry there is a missing parameter ');
                return [3 /*break*/, 7];
            case 2:
                if (!(isNaN(hight) || isNaN(width))) return [3 /*break*/, 3];
                res.send('please enter a valid size');
                return [3 /*break*/, 7];
            case 3:
                if (!(0, validateInputs_1.default)(resizeImageName, 'resize')) return [3 /*break*/, 4];
                outputPath = path_1.default.resolve("assets/images/resize/".concat(resizeImageName, ".jpg"));
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, (0, sharp_1.default)(imageName, hight, width)];
            case 5:
                outputPath = _a.sent();
                outputPath = path_1.default.resolve(outputPath);
                _a.label = 6;
            case 6:
                res.sendFile(outputPath);
                _a.label = 7;
            case 7: return [3 /*break*/, 9];
            case 8:
                err_1 = _a.sent();
                console.error(err_1);
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); });
exports.default = images;
