import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <nav>
      <Link to="/">home</Link>
      <Link to="/test">test</Link>
    </nav>
  );
}
