const fs = require('fs');

// Function to clean a file
const cleanFile = (filePath) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file ${filePath}: ${err}`);
            return;
        }

        // Replace zero-width space characters with an empty string
        const cleanedData = data.replace(/\u200B/g, '');

        // Write the cleaned content back to the file
        fs.writeFile(filePath, cleanedData, 'utf8', (err) => {
            if (err) {
                console.error(`Error writing file ${filePath}: ${err}`);
            } else {
                console.log(`File ${filePath} cleaned successfully!`);
            }
        });
    });
};

// List of files to clean
const filesToClean = [
    // './src/components/course/learner/Learner.js',
    // './src/components/course/learner/LearnerData.js'
];

// Clean each file
filesToClean.forEach(filePath => cleanFile(filePath));
