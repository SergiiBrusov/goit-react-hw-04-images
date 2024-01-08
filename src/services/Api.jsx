export const fetchImages = (query, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=41669420-a15ee370ae481629ec6482757&image_type=photo&orientation=horizontal&per_page=12`
  ).then(resp => resp.json());
};
