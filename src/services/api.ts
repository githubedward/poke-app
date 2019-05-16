import axios from "axios";

const API_URL: string = "https://pokeapi.co/api/v2/pokemon";

export interface IPokemonGen {
  id: number;
  name: string;
  sprite: string;
  types: Array<string>;
}

export interface IPokemonDetails {
  id: number;
  name: string;
  sprite: string;
  types: Array<string>;
  height: number;
  stats: {
    speed: number;
    special_defense: number;
    special_attack: number;
    defense: number;
    attack: number;
    hp: number;
  };
}

export default class API {
  static async getPokemonList(num: number) {
    try {
      let promiseList: Array<any> = [];
      for (let i = 1; i <= num; i++) {
        promiseList.push(axios.get(`${API_URL}/${i}`));
      }
      const resp: Array<any> = await axios.all(promiseList);
      const result: Array<IPokemonGen> = resp.map((pokemon: any) => {
        const data = pokemon.data;
        return {
          id: data.id as number,
          name: data.name as string,
          sprite: data.sprites.front_default as string,
          types: data.types.map(
            (obj: { type: { name: string } }) => obj.type.name
          ) as Array<any>
        };
      });
      return result;
    } catch (err) {
      console.error(err);
    }
  }

  static async getPokemon(id: number) {
    try {
      const resp: any = await axios.get(`${API_URL}/${id}`);
      const data: any = resp.data;
      const result: IPokemonDetails = {
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default,
        types: data.types.map(
          (obj: { type: { name: string } }) => obj.type.name
        ),
        height: data.height,
        stats: data.stats.reduce((acc: any, curr: any) => {
          acc[curr.stat.name] = curr.base_stat;
          return acc;
        }, {})
      };
      return result;
    } catch (err) {
      console.error(err);
    }
  }
}
