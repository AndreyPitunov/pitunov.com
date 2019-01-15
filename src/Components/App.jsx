import React, { Component, Fragment } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import photo from '../Resources/img/photo.jpg'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: graphik;
    font-style: 300;
    font-weight: 300;
    src: url('fonts/Graphik-Regular-Web.ttf');
  }

  @font-face {
    font-family: graphik-m;
    font-style: 400;
    font-weight: 400;
    src: url('fonts/Graphik-Medium-Web.ttf');
  }

  @font-face {
    font-family: graphik-b;
    font-style: 600;
    font-weight: 600;
    src: url('fonts/Graphik-Bold-Web.ttf');
  }

  svg:not(:root) {
      overflow: hidden;
  }

  html {
    font-size: 62.5%;
  }

  body {
    position: relative;
    font: 1.4rem/1.4 'opensans', Helvetica, Arial, sans-serif;
    font-family: graphik;
    margin: 0;
    min-width: 100vw;
    min-height: 100vh;
    font-weight: 400;
    overflow: hidden;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
`

const Page = styled.div`
  width: 55rem;

  @media screen and (max-width: 550px) {
    width: auto;
    padding: 0 2rem;
  }
`

Page.Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  ${props => props._column &&`
    flex-direction: column;
    margin-left: 1.5rem;
    align-items: flex-start;
  `}
`

Page.Photo = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`

Page.Name = styled.div`
  font-size: 3rem;
  font-weight: 600;
  color: rgb(85, 40, 255);
`

Page.Position = styled.div`
  font-size: 1.5rem;
  font-weight: 100;
  opacity: .8;
`

Page.Description = styled.div`
  line-height: 4rem;
  font-size: 2rem;
  font-weight: 300;
  margin: 2rem 0;

  span {
    color: rgb(85, 40, 255);
    opacity: .6;
    cursor: pointer;
    transition: all .15s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`

Page.Social = styled.div`
`

Page.Social.Item = styled.a`
  font-size: 1.6rem;
  font-weight: 500;
  margin-left: 2rem;
  text-decoration: none;
  color: #000;
  opacity: .5;
  transition: all .15s ease-in-out;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    opacity: .8;
  }
`

const info = {
  name: 'Andrey Pitunov',
  jobPosition: 'Front-end Developer',
  bio: 'I am Front End Developer from Belarus.\ You\'ll find me\n collaborating with an incredibly talented product team @mamonpro as an Front End Developer.'
}

const social = [
  {
    name: 'Telegram',
    link: 'https://t.me/andreypitunov',
    img: '../Resources/img/telegram.svg'
  },
  {
    name: 'Mail',
    link: 'mailto:andreypitunov@gmail.com',
    img: '../Resources/img/mail.svg'
  },
  {
    name: 'GitHub',
    link: 'https://github.com/AndreyPitunov',
    img: '../Resources/img/github.svg'
  },
]

// const SocialInfo = (props) => {
//   return (
//     <div className="social__item">
//       <a href={props.item.link} target="_blank">
//         <img src={props.item.name === 'Telegram' ? telegram : (props.item.name === 'Mail' ? mail : github)} alt={props.item.name} />
//       </a>
//     </div>
//   )
// }

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Page>
          <Page.Info>
            <Page.Photo src={photo} alt="Andrey Pitunov" />
            <Page.Info _column>
              <Page.Name>PITUNOV ANDREY</Page.Name>
              <Page.Position>Front-end Developer</Page.Position>
            </Page.Info>
          </Page.Info>
          <Page.Description>I am Front End Developer from Belarus. <br/>You'll find me collaborating with an incredibly talented product team <span>@mamonpro</span> as an Front End Developer.</Page.Description>
          <Page.Social>
            <Page.Social.Item href="https://t.me/andreypitunov" _blank>Telegram</Page.Social.Item>
            <Page.Social.Item href="mailto:andreypitunov@gmail.com" _blank>Mail</Page.Social.Item>
            <Page.Social.Item href="https://github.com/AndreyPitunov" _blank>GitHub</Page.Social.Item>
          </Page.Social>
        </Page>
      </Fragment>
    )
  }
}

export default App
