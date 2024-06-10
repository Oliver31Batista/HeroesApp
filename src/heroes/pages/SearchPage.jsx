import { HeroCard } from "../components";

export const SearchPage = () => {
  return (
    <>
      <div className="row">
        <div className="col-5">
          <h1>Search Page</h1>
          <hr />
          <form action="">
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
            />
            <div className="btn btn-outline-dark mt-1">🔍</div>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="alert alert-dark">Search a Hero</div>

          <div className="alert alert-danger">No hero with <b>abc...</b></div>

          {/* <HeroCard /> */}
        </div>
      </div>
    </>
  );
};
