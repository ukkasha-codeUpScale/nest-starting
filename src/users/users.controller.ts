import { Controller, Param, Get, Body, Post, Patch, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUSerDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get()
    finndAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN' ){
        return this.usersService.findAll(role)
    }

    @Get('interns')
    findAllInterns(@Query('role') role: 'INTERN' ){
        return this.usersService.findAllInterns(role)
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id : number){
        return this.usersService.findOne(id)
    }

    @Post()
    create(@Body() createUserDto:CreateUserDto){
        return this.usersService.create(createUserDto)
    }

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id : number, @Body() updateUserDto: UpdateUSerDto)
    {
        return this.usersService.update(id, updateUserDto)
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id : number)
    {
        return this.usersService.delete(id)
    }


}
