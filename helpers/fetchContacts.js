import axios from 'axios';

export const fetchContacts = async () => {
  const url = `https://api.hubapi.com/crm/v3/objects/contacts`;

  try {
    const response = await axios.get(url,
        {
          headers: {
            'Authorization': `Bearer ${process.env.NEXT_PUBLIC_HUBSPOT_API_KEY}`,
            'Content-Type': 'application/json'
          }
        });
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};
