import { Request, Response } from "express";
import path from "path";
import fs from "fs";
import mime from 'mime';



const DownloadController = {
  download: async (req: Request, res: Response): Promise<any> => {
    try {
      const file = `${__dirname}/../documents/prueba2.xlsx`;
      const fileName = path.basename(file);
      const typeMime: any = mime.getType(path.extname(fileName));
      res.setHeader("Content-Type", typeMime);
      res.setHeader("Content-Disposition", "attachment; filename=" + fileName);
      var filestream = fs.createReadStream(file);
      filestream.pipe(res);
    } catch (error) {
      return res.status(400).json(error);
    }
  },
};

export default DownloadController;
