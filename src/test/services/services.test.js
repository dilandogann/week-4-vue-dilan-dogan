
import axios from 'axios';
import { fetchStarshipData } from "../../services/fetchStarshipData";

jest.mock('axios');

describe("Services", () => {
  axios.get.mockImplementation(() => {
    return Promise.resolve({
      count: 360,
      next: "https://swapi.dev/api/starships/?page=2",
      previous: null,
      results: [
        {
          model: "CR90 corvette",
          name: "CR90 corvette",
          url: "https://swapi.dev/api/starships/2/"
        },
        {
          model: "Sentinel-class landing craft",
          name: "Sentinel-class landing craft",
          url: "https://swapi.dev/api/starships/5/"
        }
      ]
    });
  });

  describe("fetchStarshipData", () => {
    it("should returns starships", async () => {
      expect(await fetchStarshipData()).toEqual(
        {
          count: 36,
          next: "https://swapi.dev/api/starships/?page=2",
          previous: null,
          results: [
            {
              model: "CR90 corvette",
              name: "CR90 corvette",
              url: "https://swapi.dev/api/starships/2/"
            },
            {
              model: "Sentinel-class landing craft",
              name: "Sentinel-class landing craft",
              url: "https://swapi.dev/api/starships/5/"
            }
          ]
        }
      );
    });
  });
});