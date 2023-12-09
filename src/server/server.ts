import * as express from 'express';
import api from './api/traffic';
import * as path from 'path';

const app = express();

// app.use((req, res, next) => {
//   if ((req.headers as { [key: string]: string })['x-forwarded-proto'] !== 'https' && req.hostname !== 'localhost') {
//     res.redirect(301, `https://${req.hostname}${req.originalUrl}`);
//   } else {
//     next();
//   }
// });

app.use(api);


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
