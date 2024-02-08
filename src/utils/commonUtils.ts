import { CustomerDataI } from '@/interfaces/interfaces';

export const generateUniqueId = (): string => {
  // Get the current timestamp (in milliseconds)
  const timestamp = new Date().getTime();

  // Generate a random number between 0 and 9999
  const randomNumber = Math.floor(Math.random() * 10000);

  // Combine timestamp and random number to create the unique ID
  const uniqueId = `${timestamp}-${randomNumber}`;

  return uniqueId;
};

export const areAllFieldsFilled = <T extends { [key: string]: any }>(
  obj: T
): boolean => {
  // Use Object.values() to get an array of all values from the input object
  return Object.values(obj).every((value) => {
    // Check the type of each value in the object
    if (typeof value === 'string') {
      // For string values, check if the trimmed value is not an empty string
      return value.trim() !== '';
    } else {
      // For non-string values, check if the value is truthy
      return !!value;
    }
  });
};

// Function to get the count of unique names from an array of customer data
// It takes an array of CustomerDataI objects as input
export const getUniqueNameCount = (data: CustomerDataI[]): number => {
  // Extract an array of all names from the customer data using the map() method
  const names = data.map((item) => item.formData.name);

  // Create a Set from the array of names to get unique names only
  const uniqueNames = new Set(names);

  // Get the size (count) of the uniqueNames Set, which gives the count of unique names
  const uniqueNameCount = uniqueNames.size;

  // Return the count of unique names
  return uniqueNameCount;
};
