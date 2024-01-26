import {Router} from 'express';
import { sample_kits } from '../data';
import asyncHandler from 'express-async-handler';
import { KitModel } from '../models/kit.model';
import expressAsyncHandler from 'express-async-handler';

const router = Router();

router.get(
    '/seed',
    asyncHandler(async (req, res) => {
      const kitCount = await KitModel.countDocuments();
      if (kitCount > 0) {
        res.send('Seed is already done!');
        return;
      }
  
      await KitModel.create(sample_kits);
      res.send('Seed is done!');
    })
  );

router.get("/", asyncHandler(
    async (req, res) => {
        const kits = await KitModel.find();
        res.send(kits);
    }
))

router.get("/search/:searchTerm", asyncHandler(
    async(req, res) =>{
        const searchRegExp = new RegExp(req.params.searchTerm, 'i');
        const kits = await KitModel.find({name: {$regex: searchRegExp}});
        res.send(kits);
    }
))

router.get("/:kitId", asyncHandler(
    async (req, res) => {
      const kit = await KitModel.findById(req.params.kitId);
      res.send(kit);
    }
  ))


export default router;