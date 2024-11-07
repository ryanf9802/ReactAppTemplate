import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../Root";

const ExampleComponent = () => {
  const { backend_url } = useContext(AppContext);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define an async function to handle the fetch
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${backend_url}/info/example1`);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setResponse(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    // Cleanup function if the component unmounts
    return () => {
      setResponse(null);
      setError(null);
      setLoading(false);
    };
  }, [backend_url]); // Update dependency to avoid stale references

  return (
    <>
      <h2>Example Component</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {response && <p>{response.message}</p>}
    </>
  );
};

export default ExampleComponent;
