import useGetQuote from "../hooks/useGetQuote";

const URL = import.meta.env.VITE_API_URL;

export default function RandomQuote() {
  const { data, error, loading, getQuote } = useGetQuote();

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  if (data) {
    const { quote, author } = data;
    return (
      <div className="quote-container">
        {loading ? <div>Loading...</div> : null}
        {error ? <div>Error: {error.message}</div> : null}
        <div className="quote">"{quote}"</div>
        <div className="author">- {author}</div>
        <button className="generate-quote" onClick={getQuote}>
          New Quote
        </button>
      </div>
    );
  }
}
