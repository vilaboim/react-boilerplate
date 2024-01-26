import { falso } from "@helpers";
import "./Home.css";
import { useLoader } from "./useLoader";

const peopleId = falso.randNumber({ min: 1, max: 83 });

function Home() {
  const { data, isFetching, refetch } = useLoader({
    id: peopleId,
  });

  return (
    <>
      {isFetching ? <h1>Loading...</h1> : <h1>{data?.name}</h1>}
      <button disabled={isFetching} onClick={() => refetch()}>
        refetch
      </button>
    </>
  );
}

export { Home };
