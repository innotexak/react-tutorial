import React, { Component } from 'react';

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      showValue: true,
    };
  }

  showInfo = () => {
    this.setState({ showValue: !this.state.showValue });
  };

  toggleInfo = (data) => {
    if (data === true) {
      return (
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quam ullam cumque debitis rerum vel molestias temporibus atque ab adipisci.</p>
      );
    } else {
      return null;
    }
  };
  render() {
    const { id, img, author, title } = this.props.info;
    const { handleDelete } = this.props;
    return (
      <div>
        <article className="books">
          <img src={img} alt="book" />
          <div>
            <h4>Title:{title}</h4>
            <h5>Author:{author}</h5>
            <button type="button" onClick={() => handleDelete(id)}>
              Delete me
            </button>
            <button type="button" onClick={this.showInfo}>
              ToggleInfo
            </button>

            {/* Function */}
            {this.toggleInfo(this.state.showValue)}
            {/* Ternary operator  */}
            {/* {this.state.showValue ? (
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, dolor. Impedit consequatur modi doloremque cumque, corrupti pariatur veniam
                obcaecati ut, at, qui ipsum vero suscipit exercitationem reprehenderit dignissimos vel architecto?
              </p>
            ) : null} */}
            {/* And operator  */}
            {/* {this.state.showValue && (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, magni. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                saepe provident facilis! Quas quasi eos similique dolores commodi harum aspernatur!
              </p>
            )} */}
          </div>
        </article>
      </div>
    );
  }
}
