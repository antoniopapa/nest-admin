import {Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors, BadRequestException} from '@nestjs/common';
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from 'multer';
import {extname} from 'path';
import {Response} from "express";

@Controller()
export class UploadController {

    @Post('upload')
    @UseInterceptors(FileInterceptor('image', {
        storage: diskStorage({
            destination: './uploads',
            filename(_, file, callback) {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                return callback(null, `${randomName}${extname(file.originalname)}`);
            }
        })
    }))
    uploadFile(@UploadedFile() file) {
        console.log(file);
        if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
            return {
                url: `http://localhost:8000/api/uploads/${file.filename}`
            }
        }
        throw new BadRequestException('Only files ending in .jpg, .jpeg, .png. .gif are allowed');
    }

    @Get('uploads/:path')
    async getImage(
        @Param('path') path,
        @Res() res: Response
    ) {
        res.sendFile(path, {root: 'uploads'});
    }
}
