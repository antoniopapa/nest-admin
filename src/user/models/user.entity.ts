import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Exclude} from "class-transformer";
import {Role} from "../../role/role.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({unique: true})
    email: string;

    @Column()
    @Exclude()
    password: string;

    @ManyToOne(() => Role)
    @JoinColumn({name: 'role_id'})
    role: Role;
}
