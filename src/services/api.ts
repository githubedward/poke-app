import axios from "axios";

const API_URL: string = "https://pokeapi.co/api/v2/pokemon";

export default class API {
  static async getPokemonList(num: number) {
    try {
      let promiseList: Array<any> = [];
      for (let i = 1; i <= num; i++) {
        promiseList.push(axios.get(`${API_URL}/${i}`));
      }
      const resp: Array<any> = await axios.all(promiseList);
      const result: Array<any> = resp.map((pokemon: any) => {
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
}
