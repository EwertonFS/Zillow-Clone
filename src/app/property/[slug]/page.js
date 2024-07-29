import ImageCard from "@/app/components/ImageCard";
import Link from "next/link";
import React from "react";

const getProperty = async (slug) => {
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
      query: `query Property($slug:String) {
        property(where: { slug: $slug }) {
          id,
          name,
          description,
          rentalPrice,
          parking,
          pool,
          petFriendly,
          inUnitDryer,
          elevator,
          beds,
          images {
            id,
            url,
            fileName
          },
          managingBroker {
            name,
            phoneNumber
          }
        }
      }`,
      variables: {
        slug: slug,
      },
    }),
  });

  const data = await response.json();
  console.log(data)
  return data.data?.property;
};



const Property = async ({ params }) => {
  const property = await getProperty(params.slug);
  // console.log(property);

  return (
  <div className="property">
    <div className="property-image-container">
      {property.images.map(image =>
      (<ImageCard 
        key={image.id}
        url={image.url}
        fileName={image.fileName}
        width={2000}
        height={550}
      />))}
    </div>
    <div className="property-info-container">
      <h1>{property.name}</h1>
      <h2><span>{property.beds}Beds</span>${property.rentalprice}</h2>
      <br />
      <h2>Overiew</h2>
      <p>{property.description}</p>
      <br />
      <h2>Amenities:</h2>
      <ul>
        {property.parking && <li>Private Paking</li>}
        {property.poll && <li>Pool</li>}
        {property.petFriendly && <li>Pet Friendly</li>}
        {property.inUnitDryer && <li>InUnitDryer</li>}
        {property.elevator && <li>Elavator</li>}      
      </ul>
      <br />
        <h3>Licenced Brokerage</h3>
        <p>Managing Broker : {property.managingBroker.name}</p>
        <p>Phone Number : {property.managingBroker.phoneNumber}</p>
        <br />
        <Link href={"/"}><button> Go back</button></Link>
    </div>
  </div>
  );
    
};

export default Property;
