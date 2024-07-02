import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { CreateEventoDTO } from './dto/eventos.dto';

@Controller('eventos')
export class EventosController {
    constructor(private eventoService: EventosService) {}

    @Post('/create')
    async createEvento(@Res() res, @Body() createEnsayoDTO: CreateEventoDTO) {
        const evento = await this.eventoService.createEvento(createEnsayoDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Evento creado correctamente',
            evento
        });
    }

    @Get('/')
    async getEventos(@Res() res) {
        const eventos = await this.eventoService.getEventos();
        return res.status(HttpStatus.OK).json({
            eventos
        });
    }

    @Get('/:eventoID')
    async getEvento(@Res() res, @Param('eventoID') eventoID) {
        const evento = await this.eventoService.getEvento(eventoID);
        if (!evento) throw new NotFoundException('Evento no encontrado');
        return res.status(HttpStatus.OK).json(evento);
    }

    @Delete('/delete')
    async deleteEvento(@Res() res, @Query('eventoID') eventoID) {
        const deletedEnsayo = await this.eventoService.deleteEvento(eventoID);
        if (!deletedEnsayo) throw new NotFoundException('Evento no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Evento eliminado correctamente',
            deletedEnsayo
        });
    }

    @Put('/update')
    async updateEvento(@Res() res, @Body() CreateEventoDTO: CreateEventoDTO, @Query('ensayoID') eventoID) {
        const updatedEvento= await this.eventoService.updateEvento(eventoID, CreateEventoDTO);
        if (!updatedEvento) throw new NotFoundException('Evento no encontrado');
        return res.status(HttpStatus.OK).json({
            message: 'Evento actualizado correctamente',
            updatedEvento
        });
    }

}

