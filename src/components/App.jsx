import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImagesWithQuery } from 'api/api';
import Searchbar from './Searchbar/searchbar';
import ImageGallery from './ImageGallery/imageGallery';
import Modal from './Modal/modal';
import Button from './Button/button';
import Loader from './Loader/loader';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [largeImgURL, setLargeImgURL] = useState('');

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const imageQuery = async () => {
      setIsLoading(true);
      try {
        const response = await fetchImagesWithQuery(searchQuery, page);

        if (response.length === 0) {
          setIsLoading(true);
          return toast.error('Enter your search query!');
        }
        if (response.length > 0) {
          setImages(images => [...images, ...response]);
          setIsLoading(true);
        }
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    imageQuery();
  }, [searchQuery, page]);

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setImages([]);
  };

  const toogleModal = () => setShowModal(!showModal);

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const onCurrentImageClick = largeImgURL => {
    setLargeImgURL(largeImgURL);
    setShowModal(!showModal);
  };
  return (
    <div className="App">
      <Searchbar onSubmit={handleFormSubmit} />
      {showModal && <Modal onClose={toogleModal} webformatURL={largeImgURL} />}
      <ImageGallery items={images} onClickImg={onCurrentImageClick} />
      {images.length >= 12 && <Button onLoadMoreBtnClick={onLoadMore} />}
      {isLoading === 'false' && <Loader />}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
