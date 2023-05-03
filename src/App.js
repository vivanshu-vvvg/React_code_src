
//question_H
import FilterExample from './Question_h/q1_h';
import ButtonExample from './Question_h/q2_h';
import ImageUploader from './Question_h/q3_h';
import SearchableList from './Question_h/q4_h';
import ImageCarousel from './Question_h/q5_h';
//question_V
import Table from './Question_V/q1';
import UserList from './Question_V/q2';
import Add from './Question_V/q3_output';
import Slideshow from './Question_V/q4';
import Search from './Question_V/q5_output';
import ShoppingCart from './Question_V/q6';
import CountdownTimer from './Question_V/q7';
import Form from './Question_V/q8';
import ProgressBar from './Question_V/q9';
import LoginForm from './Question_V/q10';
import List from './Question_V/q11';
import SubmitButton from './Question_V/q12';
import Counter from './Question_V/q13';
//question_P
import DateTime from './Question_P/q1';
import Greeting from './Question_P/q2';
import Calculator from './Question_P/q3';
import CardList from './Question_P/q4';
import TimeComponent from './Question_P/q5';
import DigitalClock from './Question_P/q6';
import LoginFormField from './Question_P/q7';
import MyNavbar from './Question_P/q9';
import Function from './Question_P/q10';
import Counter1 from './Question_P/q11';

import './App.css';

function App() {
  return (
    <div className="App">
      <FilterExample/>        <hr></hr>
      <ButtonExample/>        <hr></hr>
      <ImageUploader/>        <hr></hr>
      <SearchableList/>        <hr></hr>
      {/*<ImageCarousel/>*/}  
                  <hr></hr>     
      <h1>Table Example</h1><Table/><hr></hr>
      <UserList/>         <hr></hr>
      <Add/>             <hr></hr>
      <Slideshow/>        <hr></hr>
      <Search/>        <hr></hr>
      <ShoppingCart/>        <hr></hr>
      <CountdownTimer hours={1} minutes={0} seconds={0}/> {/*initial time of 1 hour and 30 minutes*/}        <hr></hr>
      <Form/>        <hr></hr>
      <ProgressBar/>        <hr></hr>
      <LoginForm/>        <hr></hr>
      <List/>        <hr></hr>
      <SubmitButton/>        <hr></hr>
      <Counter/>        <hr></hr>
                  <hr></hr>
      <DateTime/>      <hr></hr>
      <Greeting/>       <hr></hr> 
      <Calculator/>     <hr></hr>
      <CardList/>                 <hr></hr>
      <TimeComponent/>          <hr></hr>
      <DigitalClock/>      <hr></hr>
      <LoginFormField/>      <hr></hr>
        <MyNavbar/>                <hr></hr>
        <Function/>            <hr></hr>
      <hr></hr> {/*not working*/}{/*<Counter1/>*/}        <hr></hr>

    </div>
  );
}

export default App;
