import { useState } from "react";

const SomeList = ({ currentTime }) => {
  const [someList, setSomeList] = useState([]);

  const addListElementHandler = () => setSomeList([...someList, currentTime]);

  return (
    <div>
      <div className="stopwatch-buttons">
        <button onClick={addListElementHandler}>Добавить</button>
        <button onClick={() => setSomeList([])}>Сбросить</button>
      </div>
      <br />
      <span className="values">Somelist values:</span>
      {someList.map((el) => (
        <div className="values">{el}</div>
      ))}
    </div>
  );
};

export default SomeList;
