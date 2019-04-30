import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

html {
  font-size: 16px;
}

body {
  background: -webkit-linear-gradient(45deg, #1a1a26, #2f2f44);
  font-family: "Stratum";
  height: 100vh;
  color: white;
}

#app-container {
  height: 100%;
}

.main-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  background-image: linear-gradient(to right top, #14141f, #161722, #191926, #1b1c29, #1e1e2d);
  min-height: 100vh;
  overflow: auto;
  box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.3);
}

.divider {
  width: 100%;
  height: 2px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #34344f, rgba(0, 0, 0, 0));
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.item-1 {
  grid-area: 1/1/1/10;
  background: linear-gradient(100grad, rgba(74, 84, 119, 0.8), rgba(74, 84, 119, 0.25) 20%, rgba(74, 84, 119, 0));
}

.item-2 {
  grid-area: 3/span 12/auto/-1;
  background: linear-gradient(100grad, rgba(74, 84, 119, 0), rgba(74, 84, 119, 0.1) 40%, rgba(74, 84, 119, 0.2));
}

.item-3 {
  grid-row: 4;
  grid-column: span 14;
  background: linear-gradient(100grad, rgba(74, 84, 119, 0.8), rgba(74, 84, 119, 0.25) 20%, rgba(74, 84, 119, 0));
}

.item-4 {
  grid-area: 5/span 7/auto/-1;
  background: linear-gradient(100grad, rgba(74, 84, 119, 0), rgba(74, 84, 119, 0.05) 40%, rgba(74, 84, 119, 0.1));
}

.item-5 {
  grid-area: 6/1/6/14;
  background: linear-gradient(100grad, rgba(74, 84, 119, 0.8), rgba(74, 84, 119, 0.25) 20%, rgba(74, 84, 119, 0));
}

.item-6 {
  grid-area: 8/span 7/auto/-1;
  background: linear-gradient(100grad, rgba(74, 84, 119, 0), rgba(74, 84, 119, 0.05) 40%, rgba(74, 84, 119, 0.1));
}

.container {
  display: grid;
  height: 100vh;
  width: 150%;
  position: absolute;
  top: 0;
  z-index: -1;
  grid-template-columns: repeat(20, 1fr);
  grid-template-rows: repeat(8, 250px);
  transform: skewY(-45deg) translateX(-600px) translateY(-750px);
}

.background-wrapper {
  position: absolute;
  z-index: -1;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}
`;
