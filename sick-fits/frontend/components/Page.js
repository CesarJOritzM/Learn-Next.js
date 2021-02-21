import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GloblaStyles = createGlobalStyle`
  @font-face {
    font-family: radnika_next;
    src: url('/static/radnikanext-medium-webfont.woff2');
  }
  html{
    --red: #ff0000;
    --black: #393939;
    --gray: #3a3a3a;
    --lightGray: #1e1e1e;
    --offwhite: #ededed;
    --maxWhidth: 1000px;
    --bs:0px 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
  }
  *,*:before,*:after{
    box-sizing: inherit;
  }
  body{
    font-family: 'radnika_next',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0px;
    padding: 0px;
    font-size: 1.5rem;
    line-height: 2;
  }
  a{
    text-decoration:none;
    color: var(--black,black)
  }
  a:hover{
    text-decoration: underline;
  }
  button{
    font-family: 'radnika_next',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
const InnertSyles = styled.div`
  max-width: var(--maxWhidth);
  margin: 0 auto;
  padding: 2rem;
`;
export default function Page({ children }) {
  return (
    <div>
      <GloblaStyles />
      <Header />
      <InnertSyles>{children}</InnertSyles>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
