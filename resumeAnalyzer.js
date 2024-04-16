const tf = require('@tensorflow/tfjs-node');
const use = require('@tensorflow-models/universal-sentence-encoder');

let model;

async function load() {
    model = await use.load();
    console.log('Model loaded successfully');
}

async function analyzeResume(resumeContent) {
    // Perform resume analysis using the loaded model
    const embeddings = await model.embed([resumeContent]); // Pass resumeContent as an array
    const embeddingsArray = await embeddings.array(); // Convert embeddings to array
    const embeddingsVector = embeddingsArray[0]; // Extract the embeddings vector

    // Placeholder for scoring logic based on embeddings
    const score = calculateScore(embeddingsVector);

    return score;
}

// Placeholder scoring logic based on embeddings
function calculateScore(embeddingsVector) {
    // Example scoring logic: Calculate the mean of embeddings values
    const meanValue = embeddingsVector.reduce((acc, val) => acc + val, 0) / embeddingsVector.length;
    // Map the mean value to a score between 0 and 100
    const score = Math.round((meanValue + 1) * 50); // Normalize to a scale of 0-100
    return score;
}

module.exports = { load, analyzeResume };
