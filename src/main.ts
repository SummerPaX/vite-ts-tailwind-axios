import axios, { AxiosResponse } from 'axios'
import { CraftBeer } from './punkapi.interface'


const title = document.getElementById("title")

if (title) {
  title.textContent = 'Refresh for a random Craft Beer!'
}

const response: AxiosResponse<CraftBeer[]> = await axios.get<CraftBeer[]>(
  '/beers',
  {
    baseURL: import.meta.env.VITE_API_BASE
  }
)

const beers = response.data

console.log(beers);
const beer = beers[0]

const beerTitle = document.getElementById("beerTitle")
const tagline = document.getElementById("tagline")
const description = document.getElementById("description")
const abv = document.getElementById("abv")
const volume = document.getElementById("volume")
const brewers_tips = document.getElementById("brewers_tips")
const beerImg = <HTMLImageElement>document.getElementById("beerImg")

if (beerTitle) { beerTitle.textContent = beer.name }
if (tagline) { tagline.textContent = beer.tagline }
if (description) { description.textContent = beer.description }
if (abv) { abv.textContent = beer.abv + "%" }
if (volume) { volume.textContent = beer.volume.value + ' ' + beer.volume.unit }
if (brewers_tips) { brewers_tips.textContent = beer.brewers_tips }

if (beerImg) {
  if (beer.image_url) beerImg.src = beer.image_url
  else beerImg.style.display = "none"
}
