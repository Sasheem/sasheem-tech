import React from 'react';
// import styled from 'styled-components';

const CardSection = (props) => {
  return (
    <div style={[styles.containerStyle, props.style]}>
      {props.children}
    </div>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;
