import React, { Component } from 'react';
import photo from '../Resources/img/photo.jpg';
import telegram from '../Resources/img/Telegram.svg';
import mail from '../Resources/img/Mail.svg';
import github from '../Resources/img/GitHub.svg';

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

const SocialInfo = (props) => {
  return (
    <div className="social__item">
      <a href={props.item.link} target="_blank">
        <img src={props.item.name === 'Telegram' ? telegram : (props.item.name === 'Mail' ? mail : github)} alt={props.item.name}/>
      </a>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__logo logo">
          <img className="logo__img" src={photo} alt="Andrey Pitunov"/>
        </div>
        <div className="app__biography biography">
          <div className="biography__name">{info.name}</div>
          <div className="biography__text biography__text_small">{info.jobPosition}</div>
          <div className="biography__text">
            <div>I am Front End Developer from Belarus.</div>
            <div>You'll find me collaborating with an incredibly talented product team <a className="biography__link" href="http://mamon.pro" target="_blank">@mamonpro</a>.</div>
          </div>
        </div>
        <div className="app__social social">
          {social.map((item, key) => <SocialInfo key={key} item={item}/>)}
        </div>
      </div>
    );
  }
}

export default App;
