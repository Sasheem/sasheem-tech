import React from 'react';
import styled from 'styled-components';

import { User } from 'styled-icons/fa-solid/User';
import { Email } from 'styled-icons/material/Email';
import { Idea } from 'styled-icons/boxicons-solid/Idea';

const UserIcon = styled(User)``;
const EmailIcon = styled(Email)``;
const IdeaIcon = styled(Idea)``;

const styles = {
    iconStyles: {
        position: 'absolute',
        top: '0.7em',
        left: '0.6em',
    },
}

const FormRow = styled.div`
    display: flex;
    align-items: flex-start;
    width: 30vw;
    margin: 5vh auto;
    flex-direction: column;
    @media only screen and (max-width: 768px) {
        width: 50vw;
    }
`;

const StyledInput = styled.input` 
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 0.3em;
    text-indent: 2em;
    padding: 0.5em;
`;
const InputContainer = styled.div`
    position: relative;
    width: 100%;
`;
const StyledTextArea = styled.textarea`
    width: 100%;
    border: 1px solid lightgray;
    border-radius: 0.3em; 
    min-height: 15vh;
    padding: 0.5em;
`;
const StyledLabel = styled.label`
    margin-bottom: 0.5em;
`;
const StyledButton = styled.button`
    padding: 0.3em;
    width: 10vw;
    background: none;
    border: 1px solid black;
    border-radius: 0.3em;
    cursor: pointer;
`;
const Contact = () => {
    return (
        <div
            style={{
                margin: 'auto 0',
                textAlign: 'center',
                height: '100vh',
                paddingBottom: '50em'
            }}
        >
            <h2 style={{ paddingTop: '20vh' }}>Tell me about your dream app idea</h2>
            <p>What your business does - Who your target audience is - What timeline you envision</p>

            {/* action="/pages/success" directs user to sucess page upon submission */}
            <form name="contact-general" method="post" action="#" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" value="contact-general" />
                <FormRow>
                    <StyledLabel>Name</StyledLabel>
                    <InputContainer>
                        <UserIcon size="20" style={styles.iconStyles} />
                        <StyledInput type="text" name="name" id="name" />
                    </InputContainer>
                </FormRow>
                <FormRow>
                    <StyledLabel>Email</StyledLabel>
                    <InputContainer>
                        <EmailIcon size="20" style={styles.iconStyles} />
                        <StyledInput type="text" name="email" id="email" />
                    </InputContainer>
                </FormRow>
                <FormRow>
                    <StyledLabel>Message</StyledLabel>
                    <InputContainer>
                        <StyledTextArea name="message"></StyledTextArea>
                    </InputContainer>
                </FormRow>
                <FormRow style={{ alignItems: 'center' }}>
                    <StyledButton type="submit">Send</StyledButton>
                </FormRow>
            </form>
        </div>
    );
};

export default Contact;