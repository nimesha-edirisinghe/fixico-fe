import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const form = new formidable.IncomingForm({
    uploadDir: './public/images',
    keepExtensions: true,
  });

  try {
    form.parse(req, (err, fields, files: any) => {
      if (err) {
        console.error('Error parsing form:', err);
        res
          .status(500)
          .json({ error: 'An error occurred while processing the upload.' });
        return;
      }

      const { image } = files;
      if (image.filepath.includes(image.newFilename)) {
        const modifiedFilename = image.filepath.replace(image.newFilename, '');
        const newPath = `${modifiedFilename}/${image.originalFilename}`;
        fs.rename(image.filepath, newPath, (err) => {
          if (err) {
            console.error('Error renaming file:', err);
          } else {
            console.log('File renamed successfully!');
          }
        });
      }

      if (!image) {
        res.status(400).json({ error: 'No image uploaded.' });
        return;
      }
      res.status(200).json({ message: 'Image uploaded successfully.' });
    });
  } catch (error) {
    console.error('Error processing image upload:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while processing the upload.' });
  }
}
