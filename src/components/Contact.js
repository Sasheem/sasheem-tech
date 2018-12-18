import React from 'react';
import styled from 'styled-components';

const FormRow = styled.p`
    display: flex;
    justify-content: center;
    width: 40vw;
    margin: 5vh auto;
    background: red;
`;
const FlexDiv = styled.div` flex: 1; `;
const FlexLabel = styled.label` flex: 2; `;
const FlexInput = styled.input` flex: 5; `;
const Contact = () => {
    return (
        <div
            style={{
                margin: 'auto 0',
                textAlign: 'center',
                background: 'lightblue',
                height: '100vh',
            }}
        >
            <h1 style={{ paddingTop: '20vh' }}>Contact Section</h1>
            {/* action="/pages/success" directs user to sucess page upon submission */}
            <form name="contact-general" method="POST" data-netlify="true">
                <FormRow>
                    <FlexLabel>Your Name: </FlexLabel>
                    <FlexDiv />
                    <FlexInput type="text" name="name" id="name" />
                </FormRow>
                <FormRow>
                    <FlexLabel>Your Email: </FlexLabel>
                    <FlexDiv />
                    <FlexInput type="text" name="name" id="email" />
                </FormRow>
                <FormRow>
                    <FlexLabel>Message: </FlexLabel>
                    <FlexDiv />
                    <textarea style={{ flex: 5 }} name="message"></textarea>
                </FormRow>
                <FormRow>
                    <button type="submit">Send</button>
                </FormRow>
            </form>
        </div>
    );
};

export default Contact;