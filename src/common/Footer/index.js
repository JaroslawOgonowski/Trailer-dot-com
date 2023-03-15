import { FooterContent, StyledLink } from "./styled"

export const Footer = () => {
  return (
    <FooterContent>
      Project based on {" "}
      <StyledLink
        target="_blank"
        href="https://www.figma.com/file/d1o1xCmwDEYVOwDvGqEjWI/
          Wednesday-web-design?node-id=0%3A1&t=wrGvRlQgxTmm6wb1-0">
        figma project
      </StyledLink>
      {" "} but it is much more extensive and responsive.<br />
      Jarosław Ogonowski 2023
    </FooterContent>
  );
};