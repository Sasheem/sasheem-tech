import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 0.4rem;
  text-indent: 0.1rem;
  padding: 0.5em;
  margin: 0.5rem 0;
  min-width: 30vw;
`
const StyledTextArea = styled.textarea`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 0.4rem;
  text-indent: 0.1rem;
  padding: 0.5em;
  margin: 0.5rem 0;
  min-height: 20vh;
  min-width: 60vw;
`
const StyledSubmit = styled.input`
  width: 20%;
  padding: 0.3em;
  margin-top: 1rem;
  min-width: 5em;
  background: none;
  border: 1px solid black;
  border-radius: 0.3em;
  cursor: pointer;
`
const Container = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

export default () => (
  <Layout>
    <Container>
      <h1>Website Proposal Request</h1>
      <p>
        Fill out the form below with as much detail as possible. Expect an
        informal proposal within 3 to 5 business days
      </p>
      <form
        name="project-detail"
        id="project-detail"
        method="post"
        action="#"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <label>Name</label>
        <StyledInput type="text" name="name" id="name" />
        <label>Email</label>
        <StyledInput type="text" name="email" id="email" />
        <label>Phone Number</label>
        <StyledInput type="tel" name="phone" id="phone" />
        <label>Website (if it exists)</label>
        <StyledInput type="url" name="website" id="website" />
        <label>What type of business is your company?</label>
        <StyledInput type="text" name="company" id="company" />
        <label>What is your goal with this project?</label>
        <StyledTextArea
          type="textarea"
          name="goal"
          id="goal"
          form="project-detail"
        />
        <label>Who's the end-customer for this product/service?</label>
        <StyledInput type="text" name="audience" id="audience" />
        <label>What timeframe are you looking at?</label>
        <StyledInput type="text" name="timeframe" id="timeframe" />
        <label>Have you ever worked with a freelancer before?</label>
        <StyledInput type="text" name="freelance-bool" id="freelance-bool" />
        <label>
          What existing materials can you pass along to me to help with this
          project?
        </label>
        <StyledInput
          type="text"
          name="existing-materials"
          id="existing-materials"
        />
        <label>What's the budget for your project? (USD)</label>
        <StyledInput
          type="number"
          name="budget"
          id="budget"
          min="30"
          max="100000"
        />
        <label>How did you hear about me?</label>
        <StyledInput type="text" name="hear-about" id="hear-about" />
        <StyledSubmit type="submit" value="Send" />
      </form>
    </Container>
  </Layout>
)
