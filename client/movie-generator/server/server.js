import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, 'data', 'data.json');

// Directly set the OpenAI API key
// const openaiApiKey = 'sk-proj-HrcapYN5ATdUGYv29sRUT3BlbkFJcBbrjOIGfrKGWb3xJdmn';
// const openaiApiUrl = 'https://api.openai.com/v1/chat/completions';

app.get('/generator/:id', async (req, res) => {
    const { id }= req.params;
    
    fs.readFile(dataPath, 'utf8', (error, data)=> {
        if (error) {
            console.error(error);
            res.status(500).send('Error reading the data file');
            return;
        }
        
        const jsonData = JSON.parse(data);
        const mood =jsonData[id];
        const jsonString = JSON.stringify(mood);
        console.log(jsonString);
        res.send(jsonString);
    })
});

// Example route using OpenAI
// app.post('/generator/:id', async (req, res) => {
//     const { prompt } = req.body;

//   try {
//     const response = await axios.post(openaiApiUrl, {
//       model: "gpt-3.5-turbo",
//       messages: [{ role: 'user', content: prompt }],
//       max_tokens: 250,
//     }, {
//       headers: {
//         'Authorization': `Bearer ${openaiApiKey}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     console.log(response.data.choices[0].message.content);

//     res.json(response.data.choices[0].message.content);
//   } catch (error) {
//     console.error('Error generating content:', error.response ? error.response.data : error.message);
//     res.status(500).json({ error: 'Failed to generate email content. Please check API key and model.' });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});