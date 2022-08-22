import { storeKeyNameFromField } from "@apollo/client/utilities";
import React from "react";
import { useState } from "react";
import { ConfigBot } from "./ConfigBot";
import { Menu } from "./Menu";

export function ModalHref({ closeModal }, props) {
  const [faceURL, setFaceURL] = useState("");
  function handleOnChange(e) {
    setFaceURL(e.target.value);
    console.log(faceURL);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    /* const formData = new FormData(e.target);
    const faceURL = {
      faceURL: formData.get("url"),
    };
    const product = {
      product: formData.get("product"),
    };

    


    
    console.log(product);
    console.log(faceURL);
*/
    const formData = new FormData(e.target);

    closeModal(false);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="modalContainer ">
          <div className="modalHref p-6 text-white w-96 h-50 text-center content-center grid bg-neutral-600 rounded-xl duration-200 shadow-2xl">
            <div className="p-2 text-lg font-bold">
              Adicionar nova pesquisa:
            </div>
            <label className="p-2 font-bold">Marketplace URL</label>
            <input
              onChange={handleOnChange}
              id="faceURL"
              className=" placeholder-neutral-400 rounded p-1 text-black"
              type="text"
              name="url"
              placeholder="Insira a URL do Facebook aqui."
            />
            <label className="p-2 font-bold">Descrição / produto</label>
            <input
              className=" placeholder-neutral-400 rounded-lg p-1 text-black"
              type="text"
              name="product"
              placeholder="Descrição / produto."
            />
            <div className="flex justify-around p-2 mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-neutral-500 rounded-xl hover:bg-neutral-400"
              >
                Adicionar
              </button>
              <button
                type="reset"
                onClick={() => closeModal(false)}
                className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-400"
              >
                Canelar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
