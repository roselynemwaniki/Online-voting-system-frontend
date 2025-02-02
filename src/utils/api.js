import axios from 'axios';

const apiUrl = 'http://localhost:5000/api'; 

export const loginUser = async (credentials) => {
  return await axios.post(`${apiUrl}/login`, credentials);
};

export const fetchCandidates = async () => {
  const response = await axios.get(`${apiUrl}/candidates`);
  return response.data;
};

export const submitVote = async (voteData) => {
  return await axios.post(`${apiUrl}/vote`, voteData);
};

export const fetchResults = async () => {
  const response = await axios.get(`${apiUrl}/results`);
  return response.data;
};
