import {Injectable} from '@nestjs/common';
import {AbstractService} from "../common/abstract.service";
import {InjectRepository} from "@nestjs/typeorm";
import {Product} from "./models/product.entity";
import {Repository} from "typeorm";

@Injectable()
export class ProductService extends AbstractService {
    constructor(
        @InjectRepository(Product) private readonly productRepository: Repository<Product>
    ) {
        super(productRepository);
    }
}
