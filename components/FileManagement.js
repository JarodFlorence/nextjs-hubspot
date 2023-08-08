import useSWR from 'swr';
import axios from 'axios';
import FileUpload from './FileUpload';
import { Document, Page } from 'react-pdf';

const fetcher = (url) => fetch(url).then((res) => res.json());

const FileManagement = () => {
  const { data, error } = useSWR('/api/files', fetcher);

  const deleteFile = async (filename) => {
    try {
      await axios.delete(`/api/delete/${filename}`);
      // Use a mutation or re-fetch the files to update the UI.
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  const renderPreview = (file) => {
    const fileExtension = file.split('.').pop();
    const filePath = `/uploads/${file}`;

    if (fileExtension === 'pdf') {
      return (
        <Document file={filePath} className="mb-4 w-64">
          <Page pageNumber={1} width={200} />
        </Document>
      );
    } else if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
      return <img src={filePath} alt={file} className="mb-4 w-64" />;
    } else {
      return null;
    }
  };

  if (error) return <div>Error loading files</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">File Management</h1>
      <FileUpload />
      <ul className="mt-4">
        {data.files.map((file) => (
          <li key={file} className="flex flex-col mb-6">
            {renderPreview(file)}
            <div className="flex justify-between items-center">
              <a href={`/uploads/${file}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {file}
              </a>
              <button onClick={() => deleteFile(file)} className="text-red-600 hover:text-red-800">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileManagement;
