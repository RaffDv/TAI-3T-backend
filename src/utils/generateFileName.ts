import { randomUUID } from 'crypto';
import { extname } from 'path';

export function generateFilename(file: Express.Multer.File) {
  return `${randomUUID()}${extname(file.originalname)}`;
}
