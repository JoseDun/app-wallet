import { Modal } from 'react-native';

import { useModalState } from '../../../../hooks/useModalState';

import CameraForm from '../CameraForm';

export function CameraFormModal({ opened, onClose, ...props }) {
	const { isOpened, setIsOpened } = useModalState(opened);

	const closeModal = () => {
		setIsOpened(false);
		onClose();
	};

	const handleClose = () => {
		closeModal();
	};

	const handleCancel = () => {
		closeModal();
	};

	const handleSubmit = (data) => {
		setIsOpened(false);
		onClose(data);
	};

	return (
		<Modal
			statusBarTranslucent
			animationType="slide"
			transparent={false}
			visible={isOpened}
			onRequestClose={handleClose}
		>
			<CameraForm onCancel={handleCancel} onSubmit={handleSubmit} {...props} />
		</Modal>
	);
}
