import useSWR from 'swr';
import axios from 'axios';
import FileUpload from './FileUpload';

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

  if (error) return <div>Error loading files</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">File Management</h1>
      <FileUpload />
      <ul className="mt-4">
        {data.files.map((file) => (
          <li key={file} className="flex justify-between items-center mb-2">
            <a href={`/uploads/${file}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {file}
            </a>
            <button onClick={() => deleteFile(file)} className="text-red-600 hover:text-red-800">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileManagement;
