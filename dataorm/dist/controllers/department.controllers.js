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
exports.DeparmentContollers = void 0;
const httpException_1 = __importDefault(require("../exception/httpException"));
class DeparmentContollers {
    constructor(departmentService, router) {
        this.departmentService = departmentService;
        router.get("/", this.getAllDepartment.bind(this));
        router.get("/:id", this.getDeptById.bind(this));
        router.post("/", this.createDepartment.bind(this));
        router.put("/:id", this.updateDepartment.bind(this));
        router.delete("/:id", this.deleteDept.bind(this));
    }
    createDepartment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deptname = req.body.deptname;
            const dept = yield this.departmentService.createDept(deptname);
            res.status(201).send(dept);
        });
    }
    getAllDepartment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const department = yield this.departmentService.getAlldept();
            res.status(201).send(department);
        });
    }
    getDeptById(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const dept = yield this.departmentService.getDeptbyId(id);
                if (!dept) {
                    throw new httpException_1.default(401, "Dept Not Found");
                }
                res.status(201).send(dept);
            }
            catch (err) {
                next(err);
            }
        });
    }
    updateDepartment(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const dept = this.departmentService.getDeptbyId(id);
                if (!dept) {
                    throw new httpException_1.default(401, "Dept Cannot be found");
                }
                const updateDept = yield this.departmentService.updateDepartment(id, req.body.deptname);
                res.status(201).send("Updated");
            }
            catch (err) {
                next(err);
            }
        });
    }
    deleteDept(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const dept = this.departmentService.getDeptbyId(id);
                if (!dept) {
                    throw new httpException_1.default(401, "Dept Cannot be found");
                }
                yield this.departmentService.deleteDepartment(id);
                res.status(200).send("Deleted Success Full");
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.DeparmentContollers = DeparmentContollers;
//# sourceMappingURL=department.controllers.js.map