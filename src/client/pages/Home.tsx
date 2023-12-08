// src/client/pages/Home.tsx
import React, { useState } from 'react';
import axios from 'axios';

const Home: React.FC = () => {
  const [sshOutput, setSshOutput] = useState<string>('');

  const handleButtonClick = async () => {
    try {
      // Replace with your actual backend URL
      const backendUrl = 'http://localhost:3001/execute-ssh-command';

      // Replace this with your actual SSH command
      const sshCommand = './hazlestart.sh';

      // Make a POST request to the backend with the correct payload
      const response = await axios.post(backendUrl, { command: sshCommand });

      // Set the output in state
      setSshOutput(response.data.output);
    } catch (error) {
      console.error('Error executing SSH command:', error.message);
    }
  };

  return (
    <>
      <div>
        <button onClick={handleButtonClick}>Run SSH Command</button>
        <div>
          <strong>SSH Output:</strong>
          <pre>{sshOutput}</pre>
        </div>
      </div>
    </>
  );
};

export default Home;
