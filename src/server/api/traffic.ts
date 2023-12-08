import * as express from 'express';
import { NodeSSH } from 'node-ssh';

const router = express.Router();

router.post('/execute-ssh-command', async (req, res) => {
  try {
    // Replace these with your actual SSH connection details
    const ssh = new NodeSSH();
    
    // Connect to the SSH server
    await ssh.connect({
      host: '46.41.143.42',
      username: 'root',
      password: 'xcvbfbq5274', // Use password for authentication
    });

    // Log a message indicating successful connection
    console.log('Successfully connected to the SSH server');

    // Get the SSH command from the request body
    const { command } = req.body;

    // Execute the SSH command
    const commandResult = await ssh.execCommand(command);

    // Disconnect from the SSH server
    ssh.dispose();

    res.json({ success: true, output: commandResult.stdout });
  } catch (error) {
    console.error('Error executing SSH command:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
