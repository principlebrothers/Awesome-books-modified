const pageNavigation = () => {
  const listNav = document.querySelector('#list');
  const addNewNav = document.querySelector('#addNew');
  const contactNav = document.querySelector('#contact');
  const shelveBooks = document.querySelector('#displayBook');
  const addNewBook = document.querySelector('#addBook');
  const contactInfo = document.querySelector('#contactInfo');


  addNewNav.addEventListener('click', (e) => {
    e.preventDefault();
    addNewNav.classList.add('active');
    listNav.classList.remove('active');
    contactNav.classList.remove('active');
    addNewBook.classList.remove('invisible');
    if (shelveBooks) shelveBooks.classList.add('invisible');
    if (contactInfo) contactInfo.classList.add('invisible');
  });

  listNav.addEventListener('click', (e) => {
    e.preventDefault();
    addNewNav.classList.remove('active');
    listNav.classList.add('active');
    contactNav.classList.remove('active');
    shelveBooks.classList.remove('invisible');
    if (addNewBook) addNewBook.classList.add('invisible');
    if (contactInfo) contactInfo.classList.add('invisible');
  });

  contactNav.addEventListener('click', (e) => {
    e.preventDefault();
    addNewNav.classList.remove('active');
    listNav.classList.remove('active');
    contactNav.classList.add('active');
    contactInfo.classList.remove('invisible');
    if (addNewBook) addNewBook.classList.add('invisible');
    if (shelveBooks) shelveBooks.classList.add('invisible');
  });
};

export default pageNavigation;
