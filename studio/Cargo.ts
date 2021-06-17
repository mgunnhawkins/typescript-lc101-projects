interface Payload {
    massKg: number;
    material: string;
}

export class Cargo implements Payload{
    massKg: number;
    material: string;
    constructor(massKg: number, material: string) {
        this.massKg = massKg
        this.material = material
    } 
}