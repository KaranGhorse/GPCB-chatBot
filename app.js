const express = require('express');
const { NlpManager } = require('node-nlp');
const applyTrainingData = require('./trainingData'); // Import training data
const cors = require('cors')

const app = express();
const port = 3000;

// Create an instance of NlpManager
const manager = new NlpManager({ languages: ['en'] });

// Apply the training data
applyTrainingData(manager);  // Apply questions and answers to the bot

// Train the bot and save the model
manager.train().then(() => {
    manager.save();  // Save the trained model to 'model.nlp'
    console.log('Bot training complete and model saved!');
    
    // Start the Express server after training is complete
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
});

// API route to handle user questions
app.use(cors())
app.use(express.json());

app.post('/api/question', async (req, res) => {
    const { question } = req.body;

    // Process the user question with the trained NLP model
    const response = await manager.process('en', question);

    // Respond with the bot's answer
    if (response.answer) {
        res.json({ answer: response.answer });
    } else {
        res.json({ answer: 'Sorry, I don\'t understand the question.' });
    }
});
