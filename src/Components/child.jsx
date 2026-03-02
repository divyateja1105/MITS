const Child = ({ send }) => {
  const sendDataToParent = () => {
    send("Hello from Child 👋");
  };

  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={sendDataToParent}>
        Send Data to Parent
      </button>
    </div>
  );
};

export default Child;