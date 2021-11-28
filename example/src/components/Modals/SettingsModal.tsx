import React from 'react';
import { Modal, ModalMask, ModalStore, useModalStore } from 'modal-relay';

// Set the ID here because it needs to be available to the <ModalRelay/> component.
type SettingsProps = {
    id: string;
}

function handleSubmit() {
    console.log('Submitted!');
}

export const SETTINGS_MODAL_ID = 'settings';

const SettingsModal = ({id}: SettingsProps) => {
    const deactivate = useModalStore((state: ModalStore) => state.deactivate);
    return (
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <form onSubmit={handleSubmit}>
                <div>
                    <h2>Settings</h2>
                </div>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName"  />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName"  />
                </div>
                <div>
                    <button onClick={() => deactivate(id)}>Cancel</button>
                </div>
            </form>
            <ModalMask onClose={() => deactivate(id)}/>
        </Modal>
    )
}
export default SettingsModal;