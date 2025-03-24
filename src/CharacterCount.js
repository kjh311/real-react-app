import useCharacterCount from "./hooks/useCharacterCount";

export default function CharacterCount() {
  const { input, count, handleInput } = useCharacterCount();

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Enter some text"
        onChange={handleInput}
      />
      <h1>{count}</h1>
    </div>
  );
}
