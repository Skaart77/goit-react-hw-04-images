import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Modal({ onClose, webformatURL }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={handleBackdropClick}>
      <div className="Modal">
        <img src={webformatURL} alt="" />
      </div>
    </div>
  );
}
Modal.propTypes = {
  onClose: PropTypes.func,
};
