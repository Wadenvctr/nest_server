// import { Model } from "sequelize";
import { ApiProperty } from "@nestjs/swagger";
import { Model, Column, Table, DataType, BelongsToMany } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({example: '1', description: 'Unique id'})
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({example: 'xxx@mail.com', description: 'email'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({example: 'xxxy$rsd4', description: '4-10 symbols pass'})
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({example: 'true', description: 'default false'})
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({example: 'spam', description: 'null or string'})
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @BelongsToMany( () => Role, () => UserRoles)
  roles: Role[]; 
}
