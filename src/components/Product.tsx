export function Product(props) {
  function getDateTime(sec) {
    //console.log(sec)
    let date = new Date(sec * 1000);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let minute = date.getMinutes();
    let hour = date.getHours();
    return `${hour}h:${minute} ${day}/${month}/${year}`;
  }

  return (
    <div className="flex bg-neutral-600 rounded-2xl w-28 mt-5 md:w-[1100px]">
      <img
        className="imgMkt md:mr-6 md:p-2 rounded-2xl"
        src={props.image}
        alt=""
      />

      <div className=" text-white bg-neutral-600  ">
        <h1 className="text-2xl font-bold break-all mb-2 w-[800px] truncate mt-4">
          {props.title}
        </h1>
        <p className="text-2xl">{props.price}</p>

        <div className="flex justify-between w-[1100px] ">
          <a
            href={props.url}
            className="px-4 mt-6 mb-2 bg-white text-black rounded-2xl"
          >
            {" "}
            <button>Abrir no Facebook</button>
          </a>
          <p className=" text-sm text-white italic mr-10 mt-6">
            Atualizado em: {getDateTime(props.time)}
          </p>
        </div>
      </div>
    </div>
  );
}
