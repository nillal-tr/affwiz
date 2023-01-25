
export interface ICountryItem {
  name: string;
}

// this should come from the server

const countries: ICountryItem[] = [
  {
    name: 'Israel'
  },
  {
    name: 'USA'
  },
  {
    name: 'Brazil'
  },
  {
    name: 'Italy'
  },
  {
    name: 'Norway'
  },

]

export { countries };
