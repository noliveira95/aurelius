import useGetQuote from "../hooks/useGetQuote";

export default function RandomQuote() {
  const { data, error, loading, getQuote } = useGetQuote();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="quote-container">
      {loading ? <div>Loading...</div> : null}
      {error ? <div>Error: {error.message}</div> : null}
      <div className="quote">"{data ? data.text : "Memento Mori"}"</div>
      <div className="author">- {data ? data.author : "Marcus Aurelius"}</div>
      <button className="generate-quote" onClick={getQuote}>
        New Quote
      </button>
    </div>
  );
}
