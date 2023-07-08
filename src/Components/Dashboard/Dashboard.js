import { event } from 'jquery';
import React, { useState } from 'react';

export default function Dashboard() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleFileChange2 = (event) =>{
    setSelectedFile2(event.target.files[0]);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('AccountNumber', "Acc106");
    formData.append('CustomerName', "Updated3");
    formData.append('Balance', 10000);
    formData.append('File', selectedFile);
    formData.append('File2', selectedFile2);
    formData.append('Status', "");

    for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }


    fetch('https://localhost:7248/api/fileupload/Called', {
      method: 'POST',
      headers: {
         //"Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
        
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // File uploaded successfully
          console.log(response.json());
          console.log('File uploaded successfully');
        } else {
          // Error uploading file
          console.log(response.json());
          console.error('Error uploading file');
        }
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
      });
  };

  return (
    <div>
      <h1>File Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <input type="file" onChange={handleFileChange2} />

        <button type="submit">Upload</button>
      </form>
    </div>
  );
}