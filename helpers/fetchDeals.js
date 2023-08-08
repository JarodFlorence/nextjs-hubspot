import axios from 'axios';

const HUBSPOT_API_ENDPOINT = "https://api.hubapi.com/crm/v3/objects/deals";
const API_KEY = process.env.HUBSPOT_API_KEY; // Store this in your .env.local file

export const fetchDeals = async () => {
  return await axios.get(`${HUBSPOT_API_ENDPOINT}?hapikey=${API_KEY}`);
};

export const updateDeal = async (dealId, updatedData) => {
  return await axios.patch(`${HUBSPOT_API_ENDPOINT}/${dealId}?hapikey=${API_KEY}`, updatedData);
};

// TODO: createDeal, deleteDeal
