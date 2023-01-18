import axios, { AxiosResponse } from 'axios'
import { createBeerCard } from './BeerComponent';
import { PunkIPA } from "./punkapi.interface";

const title = document.getElementById("title")

if (title) {
  title.textContent = 'Craft Beer 🍻'
}

const response: AxiosResponse<PunkIPA[]> = await axios.get<PunkIPA[]>(
  '/beers',
  {
    baseURL: import.meta.env.VITE_API_BASE
  }
)

const beerList = response.data

console.log(beerList);

const container = document.getElementById("container")

if (container) {
  beerList.forEach(beer => {
    container.appendChild(createBeerCard(beer))
  })
}
