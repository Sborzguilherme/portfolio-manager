import fs from 'fs';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    const dir = './tmp';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const csvFilter = (_req, file, cb) => {
  if (file == undefined) {
    return cb('Please upload a file to proceed.', false);
  }

  if (!file.mimetype.includes('csv')) {
    cb('Please upload only csv file as only CSV is supported for now.', false);
  }

  return cb(null, true);
};

export const uploadMiddleware = multer({
  storage,
  fileFilter: csvFilter,
});
