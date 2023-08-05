import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';


const panImg = '../../assets/images/pancard-1.png';
const iconImg = '../../assets/images/icon.jpg'

function Home() {
    const [show, setShow] = useState(false);
    const modalClose = () => setShow(false);
    const modalShow = () => setShow(true);

    const [count, setCount] = useState(0);

    return (
        <div className='container homebg'>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className="showmodal" onClick={modalShow}>Pan Verification</div>
                </div>
                <div className='col-lg-12'>
                    <Modal
                        show={show}
                        onHide={modalClose}
                        size="lg"
                        centered
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <div className='row'>
                                {/* <div className='col-lg-1'>
                                    <span className='iconImg'><img src={iconImg} alt='icon' /></span>
                                </div> */}
                                <div className='col-sm-12 col-lg-12'>
                                    <Modal.Title>PAN Verification</Modal.Title>
                                </div>
                                <div className='row mt-2'>
                                    <div className='col-1 iconImg'><img src={iconImg} alt='icon' /></div>
                                    <div className='col-11'>As per regulation, it is mandetory to verify your PAN details.</div>
                                </div>

                            </div>
                        </Modal.Header>
                        <Modal.Body>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div><img src={panImg} alt='pancard' /></div>
                                </div>
                                <div className='col-lg-6'>
                                    <div>
                                        <label>Enter 10-digit PAN</label>
                                        <input
                                            type="text"
                                            className="fullwidth"
                                            maxLength={10}
                                            onChange={e => setCount(e.target.value.length)} />
                                    </div>
                                    <div className='count-value'>10/ <span>{count}</span></div>
                                    <button className='btn btn-primary fullwidth'>VERIFY</button>
                                </div>
                            </div>
                        </Modal.Body>

                    </Modal>
                </div>

            </div>

        </div>
    )
}

export default Home;