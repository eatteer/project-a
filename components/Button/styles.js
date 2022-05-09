import css from 'styled-jsx/css'

export default css`
  button {
    display: flex;
    align-items: center;
    padding: 8px 24px;
    cursor: pointer;
    user-select: none;
    background: #000000;
    border-radius: 9999px;
    border: 0;
    color: white;
    font-weight: 800;
    transition: opacity .3s ease;
  }

  /* button svg selector does not works because styled jsx
  cannot infers what children elements are passed by composition.
  Problem: button is receiving children and not explicitly svg 
  One solution: specify a global selector, that way,
  to any button has direct svg is applied the style */
  button > :global(svg) {
    margin-right: 8px;
  }

  button:hover {
    opacity: .7;
  }

  button[disabled]{
    pointer-events: none;
    opacity: 0.2;
  }
`