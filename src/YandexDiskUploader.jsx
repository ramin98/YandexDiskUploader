import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const MAX_FILES = 100;

const YandexDiskUploader = () => {
  const onDrop = useCallback((acceptedFiles) => {
     fetch("example", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(acceptedFiles),
    });
    console.log('Uploaded files:', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: '*', // Allow any file type, you can customize this to restrict certain types
    multiple: true,
    maxSize: 5242880, // 5MB, you can change this if needed
    maxFiles: MAX_FILES,
  });

  return (
    <div>
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        <p>Перетащите файлы сюда или кликните, чтобы выбрать файлы (от 1 до {MAX_FILES}).</p>
      </div>
    </div>
  );
};

export default YandexDiskUploader;
