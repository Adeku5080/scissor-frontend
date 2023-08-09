import React, { useState } from "react";
import axios from "axios";

import styled from "styled-components";

const Home = () => {
  const [url, setUrl] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.post(
      "https://scissors-client-api.onrender.com",
      { longUrl: url }
    );

    setNewUrl(data.newUrl);
  };

  const handleClick=()=>{
    setUrl("");
    setNewUrl("");
  }

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

      <NewUrl>Your New Url : {newUrl}</NewUrl>

      <button onClick={handleClick}>Shorten another </button>
    </Container>
  );
};

const Container = styled.div``;
const FormContainer = styled.div``;
const NewUrl = styled.div``;

export default Home;
