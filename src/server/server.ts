import * as express from 'express';
import * as path from 'path';

const app = express();



app.use(express.static(path.join(__dirname, '../public')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/settings', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
  app.get('*', (req, res) => {
    res.json('404 DEBILU NIE MA TAKIEJ STRONY, WEZ SPIERDALAJ');
  });

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
