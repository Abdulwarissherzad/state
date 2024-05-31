import { useState } from "react";

function UdatingNestedOjects() {
  // Updating Nested Objects in the State.

  const [customer, setCustomer] = useState({
    name: "Waris",
    address: {
      City: "Freiberg, Saxsony, Germany",
      zipCode: 9598,
    },
  });
  // want to update the Zip code in the Updating Nested Objects
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 9599 },
    });
  };
  // Don't use alway deep nested structure, always use flate structure.
  return (
    <>
      <br />
      <br />
      <h1>Updating Nested Objects.</h1>
      <br />
      <button className="btn btn-primary" onClick={handleClick}>
        Click Me
      </button>
      <p>New Customer zipcode is:{customer.address.zipCode}</p>
    </>
  );
}

export default UdatingNestedOjects;
