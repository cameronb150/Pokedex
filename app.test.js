// import { render, screen } from '@testing-library/react';
import App from './App';
import "@testing-library/jest-dom"

import { 
  fireEvent, 
  getByTestId, 
  render, 
  screen, 
  waitFor,

} from '@testing-library/react';

import {Pokedex} from "pokeapi-js-wrapper"


// mocking the npm package
jest.mock("pokeapi-js-wrapper", () => {
  return {
    // mock pokedex class
    Pokedex: function () {
      return {
        // mock getPokeDexList function
        getPokedexsList: function () {
          return Promise.resolve({ results: [{name: "kanto"}]})

        }, 
        // mock getPokemonByName function
        getPokemonByName: function () {
          return Promise.resolve({})
        }, 
        // mock getPokedexByName
        getPokedexByName: function (name){
          return Promise.resolve({ pokemon_entries: [{ pokemon_species: { name: "charmander"}}],
        })
        },
    }

    },
      
    }
  })
  

  beforeEach(async () => {
    await waitFor(() => {
      render(<App />);
    });
  }),
    // test that the list of pokedexes will render
    test("pokedexes list returned from npm package rendered", async () => {
      await waitFor(() => {
        expect(screen.getByText("kanto")).toBeInTheDocument();
      });
    }),
    // test that the list of pokemon will render
    test("list of pokemon will render", async () => {
      waitFor(async () => {
        fireEvent.click(screen.getByTestId("pokedex-0"));
        await waitFor(() => {
          expect(screen.getByText("charmander")).toBeInTheDocument();
        });
      });
    }),
    // test that pokemon stats / details will render

    test("pokemon details will render", async () => {
      waitFor(async () => {
        fireEvent.click(screen.getByTestId("pokedex-0"));
        await waitFor(() => {
          fireEvent.click(screen.getByText("View Pokemon"));
          expect(screen.getByText("Pokemon Details")).toBeInTheDocument();
        });
      });
    }),
    
    test("renders learn react link", () => {
      render(<App />);
      const linkElement = screen.getByText(/learn react/i);
      expect(linkElement).toBeInTheDocument();
    });




 
