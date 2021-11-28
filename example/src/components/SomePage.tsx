import React from 'react';
import { ModalLink } from 'modal-relay';
import { EDIT_PROFILE_ID } from './Modals/EditProfileModal';
import { SETTINGS_MODAL_ID } from './Modals/SettingsModal';

// You can use any HTMLButtonElement Props with the ModalLink component.
const buttonStyle = {backgroundColor: '#333', color: 'white', border: 'none', borderRadius: '5em', padding: '10px 10px', fontWeight: 'bold'}

const SomePage = () => {
    return (
        <div>
            <header>
                <h1>Some Page</h1>
            </header>
            <main>
                <section>
                    <p>Some content</p>
                    <ModalLink open={EDIT_PROFILE_ID} style={buttonStyle}>
                        Edit Profile
                    </ModalLink>
                    <ModalLink open={SETTINGS_MODAL_ID} style={buttonStyle}>
                        Edit Settings
                    </ModalLink>
                </section>
            </main>
        </div>
    );
}

export default SomePage;