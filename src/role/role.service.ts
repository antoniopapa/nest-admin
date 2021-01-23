import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Role} from "./role.entity";
import {Repository} from "typeorm";
import {AbstractService} from "../common/abstract.service";

@Injectable()
export class RoleService extends AbstractService {
    constructor(
        @InjectRepository(Role) private readonly roleRepository: Repository<Role>
    ) {
        super(roleRepository);
    }
}
