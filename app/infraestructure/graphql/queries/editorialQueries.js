const editorials = [
  {
    id: 1,
    name: 'editorial 1',
  },
  {
    id: 2,
    name: 'editorial 2',
  },
];

module.exports = {
  getEditorial: () => {
    console.log('hi');
    return editorials;
  },
};
