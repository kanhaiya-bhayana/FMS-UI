import { event } from 'jquery';
import React, { useState } from 'react';
import { Button, notification, Space } from 'antd';

export default function Dashboard() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type,msg,des) => {
      api[type]({
          message: msg,
          description:des
      });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleFileChange2 = (event) =>{
    setSelectedFile2(event.target.files[0]);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('AccountNumber', "SBI105C");
    formData.append('CustomerName', "Anshika");
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
        return response.json(); // Parse the response body as JSON
      } else {
        // Error uploading file
        throw new Error('Error uploading file');
      }
    })
    .then((data) => {
      // Access the response data
      console.log(data);
      if (data.error == false){
        console.log('File uploaded successfully');
        openNotificationWithIcon('success','File uploaded successfully',data.status)
      }
      else{
        openNotificationWithIcon('error','Error uploading file',data.status)
        console.log('Error occured.');
      }
    })
    .catch((error) => {
      console.error('Error uploading file:', error);
    });
  };

  return (
    <div>
      {contextHolder}
      <h1>File Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <input type="file" onChange={handleFileChange2} />

        <button type="submit">Upload</button>
      </form>
    </div>
  );
}