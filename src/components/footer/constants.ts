
export interface CreditTo {
  name: string,
  link?: string
};
export interface Credit {
  creditFor: string,
  creditToList: Array<CreditTo>,
};

export const CREDITS: Array<Credit> = [
  {
    creditFor: "Built with",
    creditToList: [
      { name: "Vite", link: 'https://vite.dev/' },
      { name: "Material UI", link: 'https://mui.com/material-ui/' }
    ]
  },
  {
    creditFor: "Pixel art icons",
    creditToList: [
      {
        name: "Gerrit Halfmann",
        link: 'https://icon-sets.iconify.design/pixelarticons/'
      },
    ]
  }
];
