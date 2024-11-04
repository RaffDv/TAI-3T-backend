import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'nestjs-prisma';
@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto, fileUrl: string) {
    try {
      await this.prisma.post.create({
        data: {
          title: createPostDto.title,
          content: createPostDto.content,
          likes: 0,
          imageUrl: fileUrl,
        },
      });
    } catch (error) {}
  }

  async findAll() {
    return await this.prisma.post.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.post.findFirst({
      where: {
        id,
      },
    });
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    try {
      await this.prisma.post.update({
        where: {
          id,
        },
        data: updatePostDto,
      });
    } catch (error) {
      return new Error('Data format not accepted');
    }
  }

  async remove(id: string) {
    await this.prisma.post.delete({
      where: { id },
    });
  }
}
