import React from 'react';
import Header from "./components/header";
import InfoForum from "./components/infoForum";
import Invite from "./components/invite";
import WeekPlan from "./components/weekPlan";
import Footer from "./components/footer";

function App() {
  return (
      <div>
          <Header/>
          <InfoForum/>
          <Invite/>
          <WeekPlan/>
          <Footer/>
      </div>
  );
}

export default App;
