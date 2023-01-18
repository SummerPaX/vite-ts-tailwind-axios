import { PunkIPA } from "./punkapi.interface"

export function createBeerCard(beer: PunkIPA): HTMLDivElement {
    const card = document.createElement('div')
    card.classList.add(
        'flex',
        'items-end',
        'bg-stone-300',
        'dark:bg-stone-900',
        'p-10',
        'gap-10',
        'rounded-xl',
        'w-[1000px]',
    )

    const template: string =
        ` <div>
          <img class="max-w-[6rem]" alt="${beer.name}" src="${beer.image_url}">
      </div>
      <div class="flex flex-col">
          <h2 class="text-3xl">${beer.name}</h2>
          <span class="text-sm mb-4">${beer.tagline}</span>
          <p class="pb-4">${beer.description}</p>
          <div>
              <span>ABV: </span>
              <span>${beer.abv}</span>
          </div>
          <div class="mb-4">
              <span>Volume: </span>
              <span>${beer.volume.value} ${beer.volume.unit}</span>
          </div>
          <p  class="text-sm">${beer.brewers_tips}</p>
      </div>
    `

    card.innerHTML = template
    return card
}