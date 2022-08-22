import { useState } from "react";
import { FaPlay, FaCircleNotch, FaEdit } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { ProductsPage } from "../Pages/ProductsPage";
import { ModalHref } from "./ModalHref";

export function ConfigBot(props) {
  return (
    <div className="bg-neutral-500 min-h-screen text-white flex justify-center">
      <div className=" bg-neutral-500 text-center rounded-xl">
        <h1 className="text-2xl font-bold p-6">Configurações</h1>

        <table className="bg-neutral-600 w-96 md:w-[900px] p-4">
          <thead className="bg-neutral-700 font-bold text-lg">
            <tr className="p-2">
              <th>ID</th>
              <th>Produto</th>
              <th>Situação</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b-2 border-neutral-400">
              <td>1</td>
              <td>Celular</td>
              <td>Ligado</td>
              <div className="flex justify-center text-center">
                {" "}
                <td className="p-2 cursor-pointer">
                  <FaPlay size={16} />
                </td>{" "}
                <td className="p-2 cursor-pointer">
                  <IoMdClose size={20} />
                </td>{" "}
                <td className="p-2 cursor-pointer">
                  <FaEdit size={18} />
                </td>
              </div>
            </tr>
            <tr className="border-b-2 border-neutral-400">
              <td>2</td>
              <td>{props.faceURL}</td>
              <td>Desligado</td>
              <div className="flex justify-center text-center">
                {" "}
                <td className="p-2 cursor-pointer">
                  <FaPlay size={16} />
                </td>{" "}
                <td className="p-2 cursor-pointer">
                  <IoMdClose size={20} />
                </td>{" "}
                <td className="p-2 cursor-pointer">
                  <FaEdit size={18} />
                </td>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
