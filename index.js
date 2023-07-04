const Notification = (props) => {
  //  Write your code here.
  const { className, url, messageName } = props;
  return (
    <div className={`${className}`}>
      <img className="img" src={url} />
      <p className="desc">{messageName}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="notifications-container">
    <h1 className="notifications-heading">Notifications</h1>
    <Notification
      className="sub-container1"
      url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      messageName="Information Message"
    />
    <Notification
      className="sub-container2"
      url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      messageName="Success Message"
    />
    <Notification
      className="sub-container3"
      url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      messageName="Warning Message"
    />
    <Notification
      className="sub-container4"
      url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      messageName="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
