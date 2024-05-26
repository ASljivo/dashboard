import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { MemoryRouter } from "react-router-dom";
import { MovieDetails } from "components/pages/movies/MovieDetails";
import { TVShowsDetails } from "components/pages/tv-shows/TVShowsDetails";
import { TVShows } from "components/pages/tv-shows/TVShows";

describe("Routes", () => {
  test("rendering a component Movies", () => {
    const route = "/movies";

    render(
      <MemoryRouter initialEntries={[route]}>
        <MovieDetails />
      </MemoryRouter>
    );

    expect(screen.getByText("Loading....")).toHaveTextContent("Loading....");
  });

  test("rendering a component MovieDetails", () => {
    const route = "/movie/11";

    render(
      <MemoryRouter initialEntries={[route]}>
        <MovieDetails />
      </MemoryRouter>
    );

    expect(screen.getByText("Loading....")).toHaveTextContent("Loading....");
  });
  test("rendering a component Shows", () => {
    const route = "/shows";

    render(
      <MemoryRouter initialEntries={[route]}>
        <TVShows />
      </MemoryRouter>
    );
    expect(screen.getByText("TV Shows")).toBeInTheDocument();
  });
  test("rendering a component showDetails", () => {
    const route = "/show/11";

    render(
      <MemoryRouter initialEntries={[route]}>
        <TVShowsDetails />
      </MemoryRouter>
    );

    expect(screen.getByText("Loading....")).toBeInTheDocument();
  });
});
