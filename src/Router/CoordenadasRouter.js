import { saveCoordenadas, getCoordenadas } from "../Controller/CoordenadasController.js";
import { Router } from "express";

const router = Router();

router.post('/save', saveCoordenadas);
router.get('/obtener', getCoordenadas);

export const routerCoordenadas = router;