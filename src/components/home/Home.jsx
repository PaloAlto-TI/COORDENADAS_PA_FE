import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';


//PRUEBAS (NO USADO)
function Home() {
    const [visibleRight, setVisibleRight] = useState(false);


    return (
        <div>
            <div className="card">

                <Sidebar visible={visibleRight} position="right" baseZIndex={1000000} onHide={() => setVisibleRight(false)}>
                    <h1 style={{ fontWeight: 'normal' }}>Right Sidebar</h1>
                    <Button type="button" onClick={() => setVisibleRight(false)} label="Save" className="p-button-success" style={{ marginRight: '.25em' }} />
                    <Button type="button" onClick={() => setVisibleRight(false)} label="Cancel" className="p-button-secondary" />
                </Sidebar>


                <Button position="right" icon="pi pi-arrow-left" onClick={() => setVisibleRight(true)} className="p-mr-2" />
            </div>
        </div>
    )
}

export default Home;
