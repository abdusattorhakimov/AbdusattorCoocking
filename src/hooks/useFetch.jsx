import React, { useEffect, useState } from "react";

function useFetch(url, method = "GET") {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [postData, setPostData] = useState(null);
  const addNewData = (recipe) => {
    setPostData({
      method: method,
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(recipe),
    });
  };
  useEffect(() => {
    const getData = async (fetchConfig) => {
      setIsPending(true);
      try {
        const req = await fetch(url, { ...fetchConfig });
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setIsPending(false);
        setError(null);
      } catch (err) {
        console.log(err.message);
        isPending(false);
        setError(err.message);
      }
    };
    if (method === "GET") {
      getData();
    }
    if (method === "POST" && postData) {
      getData(postData);
    }
  }, [url, method, postData]);
  return { data, error, isPending, addNewData };
}

export default useFetch;
