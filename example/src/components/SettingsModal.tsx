import React from 'react';
import { Modal, useModalStore } from 'modal-relay';

// Set the ID here because it needs to be avaiable to the <ModalRouter/> component.
type SettingsProps = {
    id: string;
}

function handleSubmit() {
    console.log('Submitted!');
}

export const SETTINGS_MODAL_ID = 'settings';

const SettingsModal = ({id}: SettingsProps) => {
    const {deactivate} = useModalStore();
    return (
        <Modal
            id={id}
            title="Settings"
            actions={[
                {
                    label: 'Close',
                    onClick: () => deactivate(id)
                },
                {
                    label: 'Update',
                    onClick: (e: React.FormEvent<HTMLFormElement>) => {
                        e.preventDefault();
                        handleSubmit();
                    }
                }
            ]}
        >
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName"  />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName"  />
                </div>
            </form>
        </Modal>
    )
}
export default SettingsModal;