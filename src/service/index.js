import axios from 'axios';

export const loadInfo = async () => await axios({ method: 'POST', url: 'http://localhost:4000/list' });