import { Ingridents } from "../../shared/ingridents.model";

export class MyRecipe {
    public name:string;
    public description:string;
    public imgPath:string;
    public ingridents:Ingridents[];

    constructor(name:string,desc:string,imgPath:string,ingridents:Ingridents[])
    {
        this.name =  name;
        this.description = desc;
        this.imgPath = imgPath;
        this.ingridents = ingridents;
    }

}