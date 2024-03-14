import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUSerDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
          "name": "John Doe",
          "id": 1,
          "email": "john.doe@example.com",
          "role": "ADMIN"
        },
        {
          "name": "Jane Smith",
          "id": 2,
          "email": "jane.smith@example.com",
          "role": "ENGINEER"
        },
        {
          "name": "Bob Johnson",
          "id": 3,
          "email": "bob.johnson@example.com",
          "role": "INTERN"
        },
        {
          "name": "Alice Brown",
          "id": 4,
          "email": "alice.brown@example.com",
          "role": "ENGINEER"
        },
        {
          "name": "Charlie Davis",
          "id": 5,
          "email": "charlie.davis@example.com",
          "role": "ADMIN"
        },
        {
          "name": "Eva Miller",
          "id": 6,
          "email": "eva.miller@example.com",
          "role": "INTERN"
        },
        {
          "name": "David Wilson",
          "id": 7,
          "email": "david.wilson@example.com",
          "role": "ENGINEER"
        },
        {
          "name": "Grace Turner",
          "id": 8,
          "email": "grace.turner@example.com",
          "role": "ADMIN"
        },
        {
          "name": "Frank Harris",
          "id": 9,
          "email": "frank.harris@example.com",
          "role": "INTERN"
        },
        {
          "name": "Olivia Clark",
          "id": 10,
          "email": "olivia.clark@example.com",
          "role": "ENGINEER"
        }
      ]
      

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        if(role){
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    findAllInterns(role?: 'INTERN'){
        if(role){
            return this.users.filter(user => user.role === role)
        }
        return "DID NOT FOUND"
    }

    findOne(id:number){
        const user = this.users.find(user => user.id === id)
        return user
    }

    create(createUserDto: CreateUserDto){
        const usersByHighestId = [...this.users].sort( (a,b) =>  b.id - a.id)

        const newUSer = {
            id: usersByHighestId[0].id + 1,
            ...createUserDto
        }

        this.users.push(newUSer)
        return newUSer
    }

    update(id:number, updateUserDto: UpdateUSerDto){
        this.users = this.users.map( (user) => {
            if(user.id === id){
                return {...user, ...updateUserDto}
            }
            return user
        })

        return this.findOne(id)
    }

    delete(id:number){
        const removerUSer =  this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)

        return removerUSer
    }


}
