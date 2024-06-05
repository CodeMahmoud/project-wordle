import React from 'react';


function GuessInput({handleChange}) {
  const [guess, setGuess] = React.useState('');
  function handleSubmit(event) {
    event.preventDefault();
    handleChange(guess)
    setGuess('');
  }

  return <>
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
      required
      maxLength={5}
      minLength={5}
      value={guess}
      onChange={(event) => {
        const nextGuess = event.target.value.toUpperCase();
        setGuess(nextGuess)
      }}
      id="guess-input" type="text" />
    </form>
  </>;
}

export default GuessInput;
