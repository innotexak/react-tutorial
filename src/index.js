import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function People() {
  return (
    <section class="persons">
      <Person img="34" name="Innocent" occupation="Engineer">
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, est.</span>
      </Person>
      <Person img="21" name="Stella" occupation="Business" />

      <Person img="45" name="Pamela" occupation="Doctor" />
    </section>
  );
}

const Person = (props) => {
  const { name, occupation, img, children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div class="person">
      <img src={url} alt="" />
      <h4>{name}</h4>
      <h4>{occupation}</h4>
      <p>{children}</p>
    </div>
  );
};

ReactDom.render(<People />, document.getElementById('root'));
