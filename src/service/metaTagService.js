//For the moment
const API_URL = 'https://mtag-service.onrender.com';


export const getSiteInformation = async (url) => {
  const response = await fetch(`${API_URL}/get-og-Information?url=${url}`);
  const data = await response.json();
  return data
};


