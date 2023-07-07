import React, { useState } from 'react';

export default function Dashboard() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('AccountNumber', "Acc101");
    formData.append('CustomerName', "James");
    formData.append('Balance', 1000);
    formData.append('File', selectedFile);
    formData.append('Status', "");

    for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }


    fetch('https://localhost:7248/api/fileupload/Called', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
        
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // File uploaded successfully
          console.log('File uploaded successfully');
        } else {
          // Error uploading file
          console.log(response);
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

        <button type="submit">Upload</button>
      </form>
    </div>
  );
}