const AnimeDetailsPage = async () => {
  const getAnime = async () => {
    const res = await fetch(`http://localhost:3000/api`, {
      // limit to 10 seconds
      next: { revalidate: 10 },
    });
    return res.json();
  };

  const data = await getAnime();

  return (
    <div>
      <div>Title: {data.title}</div>
      <div>Rank: {data.rank}</div>
      <div>Score: {data.mean}</div>
    </div>
  );
};

export default AnimeDetailsPage;
