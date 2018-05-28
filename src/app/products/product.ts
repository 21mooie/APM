export interface IProduct {
    "productId": number,
    "productName": string,
    "productCode": string,
    "releaseDate": string,
    "description": string,
    "price": number,
    "starRating": number,
    "imageUrl": string
}




/*
could create class with interface like so if there is logic that you want to use with interface throughout project =


export class Product implements IProduct{
    constructor(public "productId": number,...etc){}

    calculateDiscount(percent: number):number{return this.price * percent/100}
}



*/