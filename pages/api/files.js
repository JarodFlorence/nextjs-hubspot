import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const directoryPath = path.join(process.cwd(), 'public/uploads');
  const page = parseInt(req.query.page) || 1; // default to page 1
  const limit = 10; // Number of files per page. Adjust as necessary.
  const offset = (page - 1) * limit;

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Unable to scan files' });
    }

    const paginatedFiles = files.slice(offset, offset + limit);

    res.status(200).json({
      files: paginatedFiles,
      page,
      totalPages: Math.ceil(files.length / limit),
    });
  });
}
