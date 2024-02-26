import useGetQuote from "../hooks/useGetQuote";

export default function RandomQuote() {
  const { data, error, loading, getQuote } = useGetQuote();

  return (
    <div className="quote-container">
      <div className="quote">"{data ? data.text : "Memento Mori"}"</div>
      <div className="author">- {data ? data.author : "Marcus Aurelius"}</div>
      <button className="generate-quote" onClick={getQuote}>
        New Quote
      </button>
      {error ? (
        <div style={{ color: "red" }}>Error: {error.message}</div>
      ) : null}
    </div>
  );
}
