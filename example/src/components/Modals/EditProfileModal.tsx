import * as React from 'react';
import { useModalStore, ModalMask, Modal, ModalStore, ModalWindow, CloseIcon } from "modal-relay";

type EditProfileModalProps = {
    id: string;
}

const selector = (state: ModalStore) => state.deactivate;

export const EDIT_PROFILE_ID = "EDIT_PROFILE_ID";

export const EditProfileModal = ({id}: EditProfileModalProps) => {
    const deactivate = useModalStore(selector);

    // Memo function since its a dependency of useEscapeHatch.
    const handleClose = () => deactivate(id);

    const handleAgree = () => {
        // do some logic to save the profile.
        deactivate(id);
    }

    return (
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
            focusLockProps={{autoFocus: true, returnFocus: true }}
        >
            <ModalWindow>
                <div className="flex flex-col items-start p-4">
                    <div className="flex items-center w-full">
                        <h2 id="modal-title" className="text-gray-900 font-medium text-lg">
                            Edit Profile
                        </h2>
                        <CloseIcon
                            className="ml-auto"
                            onClose={handleClose}
                        />
                    </div>
                    <hr />
                    <div id="modal-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <hr />
                    <div className="ml-auto">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={handleAgree}
                        >
                            Agree
                        </button>
                        <button
                            className="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            onClick={handleClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </ModalWindow>
            <ModalMask onClose={handleClose} />
        </Modal>
    );
}