export class HardSkills {
    id: number;
    nombre: string;
    porcentaje: number;
    urlimg: string;

    constructor(nombre: string, porcentaje: number, urlimg: string) {
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.urlimg = urlimg;
    }
}

