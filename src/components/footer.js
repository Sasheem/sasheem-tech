import React from "react"
import styled from "styled-components"
import { TwitterSquare } from "styled-icons/fa-brands/TwitterSquare"
import { Linkedin } from "styled-icons/fa-brands/Linkedin"
import { GithubSquare } from "styled-icons/fa-brands/GithubSquare"

const HiContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
const LowContent = styled(HiContent)``
const FooterText = styled.p`
  font-size: 0.773em;
`
const styles = {
  social: {
    color: "black",
    marginRight: "0.1em",
    textDecoration: "none",
  },
  link: {
    textDecoration: "none",
    backgroundImage: "none",
  },
  footer: {
    width: `100%`,
    height: `15vh`,
    display: `flex`,
    flexDirection: `column`,
    justifyContent: `space-between`,
  },
}

export default props => (
  <footer style={styles.footer}>
    <HiContent>
      <a href="https://www.github.com/Sasheem" style={styles.link}>
        <GithubSquare title="Github Link" size="40" style={styles.social} />
      </a>
      <a href="https://www.linkedin.com/in/sasheem/" style={styles.link}>
        <Linkedin title="Linkedin Link" size="40" style={styles.social} />
      </a>
      <a href="https://twitter.com/sasheemdev" style={styles.link}>
        <TwitterSquare title="Twitter Link" size="40" style={styles.social} />
      </a>
    </HiContent>
    <LowContent>
      <FooterText>© 2019 {props.siteTitle}</FooterText>
    </LowContent>
  </footer>
)
