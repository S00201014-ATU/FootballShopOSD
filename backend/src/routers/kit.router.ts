import {Router} from 'express';
import { sample_kits } from '../data';
import asyncHandler from 'express-async-handler';
import { KitModel } from '../models/kit.model';

const router = Router();

router.get("/seed", asyncHandler(
    async (req, res) =>{
        const kitsCount = await KitModel.countDocuments();
        if(kitsCount>0){
            res.send("Seed is already done!");
            return;
        }

        await KitModel.create(sample_kits);
        res.send("Seed is done");
    }
))

router.get("/", (req, res) =>{
    res.send(sample_kits);
})

router.get("/search/:searchTerm", (req, res) =>{
    const searchTerm = req.params.searchTerm;
    const kits = sample_kits.filter(kits => kits.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(kits);
})

router.get("/:kitId", (req, res) =>{
    const kitId = req.params.kitId;
    const kits = sample_kits.find(kit => kit.id == kitId);
    res.send(kits);
})



export default router;