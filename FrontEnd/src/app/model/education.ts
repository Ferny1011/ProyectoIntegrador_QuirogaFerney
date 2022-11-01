export class Education {
    id?:number;
    fechaE:string;
    tituloE:string;
    descripcionE:string;
    imgE:string;
    urlE:string;

    constructor(fechaE:string, tituloE:string, descripcionE:string, imgE:string,urlE:string){
        this.fechaE = fechaE;
        this.tituloE = tituloE;
        this.descripcionE = descripcionE;
        this.imgE = imgE;
        this.urlE = urlE;
    }
}
