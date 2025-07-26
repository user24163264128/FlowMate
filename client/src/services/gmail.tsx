import axios from './api';

export const fetchInbox = async () => {
  const res = await axios.get('/gmail/inbox');
  return res.data.messages;
};
