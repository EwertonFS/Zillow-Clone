import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map.js";
import Card from "./components/Card";
import Grid from "./components/Grid";

const getProperties = async () => {
  const HYGRAPH_ENDPOINT = process.env.HYGRAPH_ENDPOINT;

  if (!HYGRAPH_ENDPOINT) {
    throw new Error("HYGRAPH_ENDPOINT is not set in config");
  }

  const response = await fetch(HYGRAPH_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query Property {

          properties {
            beds
            description
            images {
              id
              url
            }
            location {
              latitude
              longitude
            }
            name 
            rentalPrice
            slug
            id
        
        }
}
      `,

    }),
  });

  const json = await response.json();
  return json.data.properties;
};





const Home = async () => {


  const properties = await getProperties();
  // console.log(properties);



  return (
    <>
      <Navbar />
      <Grid properties={properties} />

    </>
  );
};

export default Home;
