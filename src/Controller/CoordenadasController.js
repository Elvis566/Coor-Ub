import { CoordenadasModel } from "../Model/CoordenadasModel.js";

export const saveCoordenadas = async (req, res)=>{
    try {
        const {latitud, longitud, altitud} = req.body;

        if(!latitud || !longitud || !altitud){
            return res.status(401).json({message: 'Not input invalid'})
        }

        const COORDENADAS = await CoordenadasModel.create({
            latitud: latitud,
            longitud: longitud,
            altitud: altitud
        });

        return res.status(200).json({COOR: COORDENADAS});

    } catch (error) {
        return res.status(500).json({ERROR: error})
    }
}


export const getCoordenadas = async(req, res)=>{
    try {

        const COORDENADASALL = await CoordenadasModel.findAll();

        return res.status(200).json({COOR: COORDENADASALL});

    } catch (error) {
        
        return res.status(500).json({ERROR: error})
        
    }
}