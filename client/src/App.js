import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateExercise from './views/CreateExercise'
import EditExercise from './views/EditExercise'
import ExerciseList from './views/ExerciseList'
import CreateUser from './views/CreateUser'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Switch>
        <Route path='/' exact component={ExerciseList} />
        <Route path='/edit/:id' component={EditExercise} />
        <Route path='/create' component={CreateExercise} />
        <Route path='/user' component={CreateUser} />
      </Switch>
    </Router>
  );
}

export default App;
