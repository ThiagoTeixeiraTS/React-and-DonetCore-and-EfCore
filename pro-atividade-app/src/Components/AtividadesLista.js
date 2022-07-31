import React from "react";
import Atividade from "./Atividade";

export default function AtividadesLista(props) {
  return (
    <div className="mt-3">
      {props.atividades.map((ativ) => (
        <Atividade
          ativ={ativ}
          key={ativ.id}
          deletarAtividades={props.deletarAtividades}
          getAtividades = {props.getAtividades}
        />
      ))}
    </div>
  );
}
