import "./App.css";
import Main from "./components/Main/Main";
import Column from "./components/Column/Column";
import Card from "./components/Card/Card";

import todoIcon from "./assets/column/todo.svg";
import male from "./assets/avatars/Male.png";

function App() {
  return (
    <div>
      <Main title="Kanban">
        <Column
          icon={<img src={todoIcon} />}
          title="To Do"
          backgroundColor="blue"
        >
          <Card label="teste" avatar={<img src={male} />}>
            Teste
          </Card>
          <Card label="teste" avatar={<img src={male} />}>
            Teste 2
          </Card>
          <Card label="teste" avatar={<img src={male} />}>
            Teste 3
          </Card>
        </Column>
        <Column
          icon={<img src={todoIcon} />}
          title="To Do"
          backgroundColor="orange"
        >
          <Card label="teste" labelColor="orange" avatar={<img src={male} />}>
            Teste
          </Card>
          <Card label="teste" labelColor="orange" avatar={<img src={male} />}>
            Teste 2
          </Card>
          <Card label="teste" labelColor="orange" avatar={<img src={male} />}>
            Teste 3
          </Card>
        </Column>
        <Column
          icon={<img src={todoIcon} />}
          title="To Do"
          backgroundColor="purple"
        >
          <Card label="teste" labelColor="pink" avatar={<img src={male} />}>
            Teste
          </Card>
          <Card label="teste" labelColor="pink" avatar={<img src={male} />}>
            Teste 2
          </Card>
          <Card label="teste" labelColor="pink" avatar={<img src={male} />}>
            Teste 3
          </Card>
        </Column>
        <Column
          icon={<img src={todoIcon} />}
          title="To Do"
          backgroundColor="green"
          textColor="black"
        >
          <Card label="teste" labelColor="green" avatar={<img src={male} />}>
            Teste
          </Card>
          <Card label="teste" labelColor="green" avatar={<img src={male} />}>
            Teste 2
          </Card>
          <Card label="teste" labelColor="green" avatar={<img src={male} />}>
            Teste 3
          </Card>
        </Column>
      </Main>
      ;
    </div>
  );
}

export default App;
