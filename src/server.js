/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import renderPage from './blue-basket/render'

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/blue', express.static('./build'));

app.use('/', (req, res) => {
    const html = renderPage();
    res.render('layout', { html });
});

app.listen(8080);

console.log(`🔵  team blue running. fragments are available here:
>> http://127.0.0.1:8080`);
