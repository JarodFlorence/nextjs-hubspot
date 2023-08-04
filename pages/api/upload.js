import nextConnect from 'next-connect';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage });

const handler = nextConnect();

handler.use(upload.single('file'));

handler.post((req, res) => {
  res.status(200).json({ data: 'success', file: req.file });
});

export default handler;
