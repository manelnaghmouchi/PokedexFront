import axios from 'axios'
import { apiURL } from '../Config/Config.';


class Servicepokemon {

  getAll() {
    return axios.get(apiURL + "/pokemon/get");
  }
  
}

export default new Servicepokemon();
