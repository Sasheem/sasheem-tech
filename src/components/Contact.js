import React from "react"
import styled from "styled-components"

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
  align-self: center;
`
const SubText = styled.p`
  color: grey;
  font-weight: 100;
`
export default () => (
  <div
    style={{
      height: `100vh`,
      width: `100%`,
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`,
      alignItems: `center`,
      marginTop: `10vh`,
    }}
  >
    <h2>Get in touch</h2>
    <SubText>Tell me a little bit about your project</SubText>
    <form
      name="contact-general"
      id="contact-general"
      method="post"
      action="#"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      style={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-start`,
      }}
    >
      <label>Your Name</label>
      <StyledInput type="text" name="name" id="name" />
      <label>Your Email</label>
      <StyledInput type="text" name="email" id="email" />
      <label>Your Website (if it exists)</label>
      <StyledInput type="url" name="website" id="website" />
      <label>Your Budget (USD)</label>
      <StyledInput
        type="number"
        name="budget"
        id="budget"
        min="30"
        max="100000"
      />
      <label>Your Message</label>
      <StyledTextArea
        type="textarea"
        name="message"
        id="message"
        form="contact-general"
      />
      <StyledSubmit type="submit" value="Send" />
    </form>
  </div>
)


// import React from 'react';
// import styled from 'styled-components';
//
// import { User } from 'styled-icons/fa-solid/User';
// import { Email } from 'styled-icons/material/Email';
// import { Idea } from 'styled-icons/boxicons-solid/Idea';
//
// const UserIcon = styled(User)``;
// const EmailIcon = styled(Email)``;
// const IdeaIcon = styled(Idea)``;
//
// const styles = {
//     iconStyles: {
//         position: 'absolute',
//         top: '0.7em',
//         left: '0.6em',
//     },
// }
//
// const ContactContainer = styled.div`
//     margin: 0 auto;
//     text-align: center;
//     height: 100vh;
//     padding-bottom: 50em;
//
//     @media only screen and (min-width: 375px) {
//         padding-bottom: 53em;
//     }
// `;
//
// // when screen > 925px, display as a row
// const FormDesc = styled.div`
//     padding: 0 20%;
//
//     @media only screen and (min-width: 925px) {
//         display: flex;
//         margin: 0 auto;
//         padding: 0;
//         justify-content: space-between;
//         width: 50%;
//     }
// `;
//
// const FormRow = styled.div`
//     display: flex;
//     align-items: flex-start;
//     width: 30%;
//     margin: 5vh auto;
//     flex-direction: column;
//     @media only screen and (max-width: 925px) {
//         width: 45%;
//     }
//     @media only screen and (max-width: 375px) {
//         width: 80%;
//     }
// `;
//
// // be hidden when screen < 925px
// const HiddenP = styled.p`
//     @media only screen and (max-width: 925px) {
//         display: none;
//     }
// `;
//
// const StyledInput = styled.input`
//     width: 100%;
//     border: 1px solid lightgray;
//     border-radius: 0.3em;
//     text-indent: 2em;
//     padding: 0.5em;
// `;
// const InputContainer = styled.div`
//     position: relative;
//     width: 100%;
// `;
// const StyledTextArea = styled.textarea`
//     width: 100%;
//     border: 1px solid lightgray;
//     border-radius: 0.3em;
//     min-height: 15vh;
//     padding: 0.5em;
// `;
// const StyledLabel = styled.label`
//     margin-bottom: 0.5em;
// `;
// const StyledButton = styled.button`
//     padding: 0.3em;
//     width: 20%;
//     min-width: 5em;
//     background: none;
//     border: 1px solid black;
//     border-radius: 0.3em;
//     cursor: pointer;
// `;
// const Contact = () => {
//     return (
//         <ContactContainer
//             // style={{
//             //     margin: 'auto 0',
//             //     textAlign: 'center',
//             //     height: '100vh',
//             //     paddingBottom: '50em'
//             // }}
//         >
//             <h2 style={{ paddingTop: '20vh' }}>Tell me about your dream app idea</h2>
//             <FormDesc>
//                 <p>What your business does</p>
//                 <HiddenP>-</HiddenP>
//                 <p id="mid-desc">Who your target audience is </p>
//                 <HiddenP>-</HiddenP>
//                 <p>What timeline you envision</p>
//             </FormDesc>
//             {/* action="/pages/success" directs user to sucess page upon submission */}
//             <form name="contact-general" method="post" action="#" data-netlify="true" data-netlify-honeypot="bot-field">
//                 <input type="hidden" name="bot-field" value="contact-general" />
//                 <FormRow>
//                     <StyledLabel>Name</StyledLabel>
//                     <InputContainer>
//                         <UserIcon size="20" style={styles.iconStyles} />
//                         <StyledInput type="text" name="name" id="name" />
//                     </InputContainer>
//                 </FormRow>
//                 <FormRow>
//                     <StyledLabel>Email</StyledLabel>
//                     <InputContainer>
//                         <EmailIcon size="20" style={styles.iconStyles} />
//                         <StyledInput type="text" name="email" id="email" />
//                     </InputContainer>
//                 </FormRow>
//                 <FormRow>
//                     <StyledLabel>Message</StyledLabel>
//                     <InputContainer>
//                         <StyledTextArea name="message"></StyledTextArea>
//                     </InputContainer>
//                 </FormRow>
//                 <FormRow style={{ alignItems: 'center' }}>
//                     <StyledButton type="submit">Send</StyledButton>
//                 </FormRow>
//             </form>
//         </ContactContainer>
//     );
// };
//
// export default Contact;
