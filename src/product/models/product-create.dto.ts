import {IsNotEmpty} from "class-validator";

export class ProductCreateDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    image: string;

    @IsNotEmpty()
    price: number
}
