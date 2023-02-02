
export interface ICountryItem {
  name: string;
  rate?: number;
}

// this should come from the server

const countries: ICountryItem[] = [
  {
    name: 'Israel',
    rate: 0
  },
  {
    name: 'Poland',
    rate: 0
  },
  {
    name: 'Brazil',
    rate: 0
  },
  {
    name: 'Italy',
    rate: 0
  },
  {
    name: 'United States',
    rate: 0
  },

]

export { countries };
