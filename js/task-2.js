const gallery = document.querySelector(".gallery");

const createGalleryItem = ({ url, alt }) => {
  return `
    <li>
      <img src="${url}" alt="${alt}" />
    </li>
  `;
};

const renderGallery = (images) => {
  const galleryItems = images.map(createGalleryItem).join("");
  gallery.innerHTML = galleryItems;
};

renderGallery(images);
