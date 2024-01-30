import React from 'react';
import {Modal} from "antd"

function Modals({modalOpen, setModalOpen, modalHeader, modalSubheader}) {
  return (
    <Modal
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        cancelButtonProps={{ style: { display: 'none' } }}
    >
        <div className='colorBlue fw600 fs16'>{modalHeader}</div>
        <div className='colorWhite fw600'>{modalSubheader}</div>
    </Modal>
  )
}

export default Modals