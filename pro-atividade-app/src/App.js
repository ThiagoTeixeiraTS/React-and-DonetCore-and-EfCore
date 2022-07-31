import { useState, useEffect } from "react";
import AtividadeForm from "./Components/AtividadeForm";
import AtividadesLista from "./Components/AtividadesLista";

let initialState = [
  {
    id: 1,
    Descricao: "Primeira Atividade",
    titulo: "Titulo 1",
    prioridade: "2",
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const [atividades, SetAtividades] = useState(initialState);
  const [atividade, SetAtividade] = useState({id:0});

  useEffect(() => {
    atividades.length <= 0  ? setIndex(1) : 
     setIndex(Math.max.apply( Math,  atividades.map((item) => item.id) ) + 1) 
     
  }, [atividades])
  

  function addAtividade(ativ) {

    SetAtividades([...atividades, { ...ativ, id: index }]);

  }

   function atualizarAtividade (ativ) {
      SetAtividades(atividades.map(item => item.id === ativ.id ?  ativ : item));
      SetAtividade ({id:0});
   }

   function cancelarAtividade(){
      SetAtividade ({id:0});
   }

  function deletarAtividades(id) {
    const atividadesFiltradas = atividades.filter(
      (atividade) => atividade.id !== id
    );
    SetAtividades([...atividadesFiltradas]);
  }

  function getAtividades(id) {
    const atividade = atividades.filter((atividade) => atividade.id === id);
    SetAtividade(atividade[0]);
  }

  return (
    <>
    
      <AtividadeForm 
        ativSelecionada = {atividade}
        cancelarAtividade = {cancelarAtividade}
        atualizarAtividade = {atualizarAtividade}
        addAtividade={addAtividade}
        atividades={atividades}
        
        />

      <AtividadesLista
        atividades={atividades}
        deletarAtividades={deletarAtividades}
        getAtividades={getAtividades}
      />
    </>
  );
}

export default App;
