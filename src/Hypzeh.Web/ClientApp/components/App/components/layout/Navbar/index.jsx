import React from 'react';
import styled from 'styled-components';

import { Scroller } from '../../shared';

const Container = styled.nav`
  border: 5px solid blue;
  width: 4.5rem;
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #202225;
  overflow: hidden;
`;

const Navbar = () => (
  <Container>
    <Scroller width="5.625rem">
      <h1>1</h1>
      <h1>2</h1>
      <h1>3</h1>
      <h1>4</h1>
      <h1>5</h1>
      <h1>6</h1>
      <h1>7</h1>
      <h1>8</h1>
      <h1>9</h1>
      <h1>10</h1>
      <h1>11</h1>
      <h1>12</h1>
      <h1>13</h1>
      <h1>14</h1>
      <h1>15</h1>
      <h1>16</h1>
      <h1>17</h1>
      <h1>18</h1>
      <h1>19</h1>
      <h1>20</h1>
    </Scroller>
  </Container>
);

export default Navbar;
