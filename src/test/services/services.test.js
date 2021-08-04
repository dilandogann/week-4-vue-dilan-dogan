
import axios from "axios";
import { fetchStarshipData } from "../../services/fetchStarshipData";

jest.mock("axios");

describe("Service tests", () => {
  it("should return all starships", async () => {
    axios.get.mockImplementation(() => {
      return Promise.resolve({
        count: 36,
        next: "https://swapi.dev/api/starships/?page=2",
        previous: null,
        results: [
          {
            model: "CR90 corvette",
            name: "CR90 corvette",
            url: "https://swapi.dev/api/starships/1/"
          },
          {
            model: "Sentinel-class landing craft",
            name: "Sentinel-class landing craft",
            url: "https://swapi.dev/api/starships/2/"
          }
        ]
      }
      );
    });

    expect(await fetchStarshipData()).toEqual(
      {
        count: 36,
        next: "https://swapi.dev/api/starships/?page=1",
        previous: null,
        results: [
          {
            model: "CR90 corvette",
            name: "CR90 corvette",
            url: "https://swapi.dev/api/starships/1/"
          },
          {
            model: "Sentinel-class landing craft",
            name: "Sentinel-class landing craft",
            url: "https://swapi.dev/api/starships/2/"
          }
        ]
      }
    );
  });
});
