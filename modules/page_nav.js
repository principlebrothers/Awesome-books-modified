const pageNavigation = () => {
  const navs = [
    { id: 'list', className: 'active' },
    { id: 'addNew', className: 'invisible' },
    { id: 'contact', className: 'invisible' },
  ];
  const books = [
    { id: 'displayBook', className: 'active' },
    { id: 'addBook', className: 'invisible' },
    { id: 'contactInfo', className: 'invisible' },
  ];

  navs.forEach((nav) => {
    document.querySelector(`#${nav.id}`).addEventListener('click', (e) => {
      e.preventDefault();
      navs.forEach((nav) =>
        document.querySelector(`#${nav.id}`).classList.remove('active')
      );
      books.forEach((book) =>
        document.querySelector(`#${book.id}`).classList.add('invisible')
      );
      document.querySelector(`#${nav.id}`).classList.add('active');
      if (nav.id === 'addNew') {
        document.querySelector('#addBook').classList.remove('invisible');
      } else if (nav.id === 'list') {
        document.querySelector('#displayBook').classList.remove('invisible');
      } else {
        document.querySelector('#contactInfo').classList.remove('invisible');
      }
    });
  });
};

export default pageNavigation;
