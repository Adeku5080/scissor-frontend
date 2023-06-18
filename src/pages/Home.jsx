import React, { useState } from "react";
import axios from "axios";

import styled from "styled-components";

const Home = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:5000/api/v1/url/create",
      { longUrl: url },
     

    );

    console.log(res);
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  return (
    <Container>
      <h1>Create Short Urls,</h1>
      <h2>Get Analytics</h2>
      <h2>Scan Qr codes</h2>

      <FormContainer>
        <form onSubmit={handleSubmit}>
          <label>Enter Url</label>
          <input onChange={handleChange} value={url} />
          <button type="submit">submit </button>
        </form>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div``;
const FormContainer = styled.div``;

export default Home;
