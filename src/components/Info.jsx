import image from "./../img/lms.jpg";

const Info = () => {
  return (
    <div>
      <h2>Любимов Михаил Сергеевич</h2>
      <br />
      <div>
        <p>Стаж обучения: 6 месяцев</p>
        <p>Возраст: 37 лет</p>
      </div>
      <div>
        <img src={image} alt=""></img>
      </div>
    </div>
  );
};

export default Info;
