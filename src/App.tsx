import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import List from './pages/List';
import Calendar from './pages/Calendar';
import MyTasks from './pages/MyTasks';
import Goals from './pages/Goals';
import Members from './pages/Members';
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';
import Board from './components/board/Board';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/my-tasks" element={<MyTasks />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/members" element={<Members />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;