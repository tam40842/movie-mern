const baseUrl = process.env.TMDB_BASE_URL;
const key = process.env.TMDB_KEY;

const getUrl = (endpoint, params) => {
  console.log(params, "params");
  const qs = new URLSearchParams(params);
  console.log(qs);
  console.log(`${baseUrl}${endpoint}?api_key=${key}&${qs}`);
  return `${baseUrl}${endpoint}?api_key=${key}&${qs}`;
};

export default { getUrl };
