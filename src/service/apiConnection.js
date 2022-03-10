
const getPeople = async () => {
  const endpoint = 'https://swapi.dev/api/people'
  try {
    const response = await fetch(endpoint);
    const textData = await response.text();
    return JSON.parse(textData);
  } catch (error) {
    return {
      error,
    };
  }
};
export default getPeople;
