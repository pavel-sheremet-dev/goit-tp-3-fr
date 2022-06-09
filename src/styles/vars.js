export const getCssVars = () => ({
  colors: {
    defaultFont: '#242A37',
    lightText: '#898F9F',
    white: '#ffffff',
    googleText: '#707375',
    placeholder: '#A6ABB9',
    mainBrandColor: '#FF6B08',
    overlay: 'rgba(9, 30, 63, 0.8)',
    modalBackground: 'rgba(43, 43, 43, 0.1)',
    lightBackground: '#F6F7FB',
    iconsHover: '#F5F7FA',
    reviewBtn: '#6D7A8D',
    disabledBtn: '#B1B5C2',
    numbers: '#091E3F',
    after: 'rgba(36, 42, 55, 0.5)',
    error: '#ff0000',
  },
  delay: 200,
  breakPoints: {
    response: '479px',
    mobile: '480px',
    tablet: '768px',
    desktop: '1280px',
  },
  shadows: {
    counter: '4px 4px 8px rgba(36, 42, 55, 0.15)',
    inputShadow: '0px 1px 2px rgba(29, 29, 27, 0.15)',
    btnShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
    btnGoogle: '0px 2px 2px rgba(9, 30, 63, 0.15)',
  },
  transition: property => `${property} 200ms linear`,
});

// #242A37 - logo, text, deep blue
// #707375 - google,
// #FFFFFF - white text
// #FF6B08 - brand orange
// #A6ABB9 - input placeholder, icons
// #F6F7FB - light background
// rgba(43, 43, 43, 0.1) - modal background
// #898F9F - author, some text
// #F5F7FA - icon hovers
// #6D7A8D -grey btn
// #091E3F - numbers, graph dots and line
// #  B1B5C2 - disable btn,
