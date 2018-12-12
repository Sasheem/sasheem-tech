import React from 'react';
import styled from 'styled-components';

// need to import a project card component to hold each project
// this card would include a name, small description, image
// will dispolay in a grid like style
/*
    will need to grab metadata about each project using graphql, implement inside Card component itself.
    then from this Projects component I will add them as props? think about this...

    For now I am setting this up without a StaticQuery component. Just to get some layout down.
*/

const Projects = () => {
    return(
        <div 
            style={{ 
                margin: 'auto 0', 
                textAlign: 'center',
                background: 'yellow',
                height: '100vh', 
            }}
        >
            <h1>Projects Section</h1>
        </div>
    );
};

export default Projects;