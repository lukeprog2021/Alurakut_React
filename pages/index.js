import React from "react";
import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";
import {
  AlurakutMenu,
  AlurakutProfileSidebarMenuDefault,
  OrkutNostalgicIconSet,
} from "../src/lib/AluraCommons";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelationsArea/index";

function ProfileSideBar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
}

export default function Home() {
  const githubUser = "lukeprog2021";
  const [comunidades, setComunidades] = React.useState([
    {
      id: '4654',
      titulo: "Eu odeio acordar cedo",
      imagem: "https://source.unsplash.com/random/300x300",
    },
  ]);
  //const comunidades = []
  const pessoasFavoritas = [
    "lukeprog2021",
    "TheOneAndOnlyBillGates",
    "josecarloscanova",
    "GOGOPOWERRANGERFYF",
    "AgtLucas",
    "jwasham",
  ];

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet></OrkutNostalgicIconSet>
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form
              onSubmit={function handleCriarComunidade(e) {
                e.preventDefault();
                const dadosForm = new FormData(e.target);
                const comunidade = {
                  id: new Date().toISOString(),
                  titulo: dadosForm.get("title"),
                  imagem: dadosForm.get("image"),
                };

                const comunidadeAtualizada = [...comunidades, comunidade];
                setComunidades(comunidadeAtualizada);
              }}
            >
              <div>
                <input
                  placeholder="Qual vai ser o nome da comunidade?"
                  name="title"
                  arial-label="Qual vai ser o nome da comunidade?"
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma url para utilizarmos de capa?"
                  name="image"
                  arial-label="Coloque uma url para utilizarmos de capa"
                  type="text"
                />
              </div>
              <button>Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade({pessoasFavoritas.length})
            </h2>
            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Minhas comunidades({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual.titulo}`}>
                      <img src={`${itemAtual.imagem}`} />
                      <span>{itemAtual.titulo}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
