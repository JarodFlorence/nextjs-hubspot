import axios from 'axios';

export const fetchContacts = async (page = 0, limit = 10) => {
  const offset = page * limit;
  const url = `https://api.hubapi.com/contacts/v1/lists/all/contacts/all?hapikey=${process.env.HUBSPOT_API_KEY}&count=${limit}&vidOffset=${offset}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};
