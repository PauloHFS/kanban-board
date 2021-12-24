import './App.css';
import Main from './components/Main/Main';
import Column from './components/Column/Column';
import Card from './components/Card/Card';

import todoIcon from './assets/column/todo.svg';
import inprogressIcon from './assets/column/inprogress.svg';
import reviewIcon from './assets/column/review.svg';
import doneIcon from './assets/column/done.svg';

import maleAvatar from './assets/avatars/Male.png';
import femaleAvatar from './assets/avatars/Female.png';

function App() {
  return (
    <div>
      <Main title="Kanban">
        <Column
          icon={<img alt="" src={todoIcon} />}
          title="To Do"
          backgroundColor="blue"
        >
          <Card
            label="Label"
            avatar={<img alt="femaleAvatar" src={femaleAvatar} />}
          >
            Christmas Banners
          </Card>
          <Card
            label="Label"
            avatar={<img alt="femaleAvatar" src={femaleAvatar} />}
          >
            Redo Portfolio
          </Card>
        </Column>
        <Column
          icon={<img alt="" src={inprogressIcon} />}
          title="In Progress"
          backgroundColor="orange"
        >
          <Card
            label="Always"
            labelColor="orange"
            avatar={<img alt="maleAvatar" src={maleAvatar} />}
          >
            Coffee Break
          </Card>
          <Card
            label="Webflow"
            labelColor="orange"
            avatar={<img alt="maleAvatar" src={maleAvatar} />}
          >
            Updating Portfolio
          </Card>
        </Column>
        <Column
          icon={<img alt="" src={reviewIcon} />}
          title="Review"
          backgroundColor="purple"
        >
          <Card
            label="Release"
            labelColor="pink"
            avatar={<img alt="femaleAvatar" src={femaleAvatar} />}
          >
            Release to Figma Community
          </Card>
          <Card
            label="Feedback"
            labelColor="pink"
            avatar={<img alt="femaleAvatar" src={femaleAvatar} />}
          >
            User Feedback
          </Card>
          <Card
            label="Sourcing"
            labelColor="pink"
            avatar={<img alt="femaleAvatar" src={femaleAvatar} />}
          >
            Background images from{' '}
            <a href="https://www.humaaans.com/">humaaans.com</a>
          </Card>
        </Column>
        <Column
          icon={<img alt="" src={doneIcon} />}
          title="Done"
          backgroundColor="green"
          textColor="black"
        >
          <Card
            label="UI"
            labelColor="green"
            avatar={<img alt="maleAvatar" src={maleAvatar} />}
          >
            Style Guide
          </Card>
          <Card
            label="UI"
            labelColor="green"
            avatar={<img alt="maleAvatar" src={maleAvatar} />}
          >
            Component Library
          </Card>
          <Card
            label="UI"
            labelColor="green"
            avatar={<img alt="maleAvatar" src={maleAvatar} />}
          >
            Sticker Components
          </Card>
        </Column>
      </Main>
      ;
    </div>
  );
}

export default App;
