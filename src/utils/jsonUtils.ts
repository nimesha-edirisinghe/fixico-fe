import { CustomerDataI } from '@/interfaces/interfaces';
import fs from 'fs';
import path from 'path';

// Function to get JSON files from the 'public/db' directory and return an array of customer data
export const getJSONFiles = (): CustomerDataI[] => {
  // Get the absolute path of the 'public/db' directory
  const directory = path.join(process.cwd(), 'public', 'db');

  // Get an array of file names in the 'public/db' directory
  const fileNames = fs.readdirSync(directory);

  // Initialize an empty array to store the data from JSON files
  const jsonFilesData = [];

  // Loop through each file name in the directory
  for (const fileName of fileNames) {
    // Check if the file has a '.json' extension
    if (fileName.endsWith('.json')) {
      // Get the absolute file path
      const filePath = path.join(directory, fileName);

      // Read the contents of the file as a UTF-8 encoded string
      const fileContents = fs.readFileSync(filePath, 'utf-8');

      // Parse the JSON data from the file contents
      const jsonData = JSON.parse(fileContents);

      // Push the parsed JSON data into the 'jsonFilesData' array
      jsonFilesData.push(jsonData);
    }
  }

  // Return the array containing the data from all the JSON files
  return jsonFilesData;
};
