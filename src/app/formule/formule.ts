export class Formule {
    id!: number;
    name!: string;
    picture!: string;
    types!: Array<string>;
    created!: Date;

    constructor(name: string = "Entrez un nom",  picture: string = 'https://xxx.png', types: string[] = [], created: Date = new Date()){
        this.name = name;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
}