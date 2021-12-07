import ReactModal from 'react-modal';
import { customStyles } from './Modal.styles';

const Modal = ({ contentLabel, isOpen, onClose, children }) => {
	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={onClose}
			style={customStyles}
			contentLabel={contentLabel}
		>
			{children}
		</ReactModal>
	)
}

export default Modal
