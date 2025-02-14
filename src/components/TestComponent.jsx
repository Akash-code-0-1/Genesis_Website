import React, { useEffect } from "react";

const TestComponent = () => {
  useEffect(() => {
    console.log("useEffect executed!");
  }, []); // Empty dependency array: only runs once when the component mounts

  return <div>Check the console log for useEffect output!</div>;
};

export default TestComponent;
