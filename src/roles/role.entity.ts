/*import { ApiProperty } from "@nestjs/swagger";
import { TheUser } from "src/users/users.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('roles')
export class RoleEntity{
	@ApiProperty()
	@PrimaryGeneratedColumn()
	roleid: number;

	@ApiProperty()
	@Column()
	rolename: string;

	/*@ApiProperty()
	@ManyToMany((type) => TheUser, (user) => user.roles)
	@JoinTable({
		name: 'users_roles',
		joinColumn: {name: 'rolename'}, 
		inverseJoinColumn: {name: 'username'}
	})
	users: TheUser[];*/
