import { Schema, model } from "mongoose";

export interface Kit{

        id:string;
        name:string;
        price:number;
        favorite:boolean;
        imageUrl:string;
}

export const KitSchema = new Schema<Kit>(
    {
        name: {type: String, required: true},
        price: {type: Number, required: true},
        favorite: {type: Boolean, default:false},
        imageUrl: {type: String, required:true}
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }


);

export const KitModel = model<Kit>('kit', KitSchema);