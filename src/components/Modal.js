import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen,data }) => {
  // Helmet({
  //   crossOriginResourcePolicy: false,
  // });
 
    return (
        <>
        <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
        <div className={styles.centered}>
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h5 className={styles.heading}>Your download is about to start</h5>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className={styles.modalContent}>
              <img height={data.dimensions.height/3.5} width={data.dimensions.width/3} src={(data.display_url !== null) ? `https://cdn.instadp.io/?url=${encodeURIComponent(data.display_url)}` : 'https://via.placeholder.com/400'}/>
            </div>
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button className={styles.deleteBtn} onClick={() =>window.open(data.video_url, '_blank', 'noopener,noreferrer')}>
                  Download
                </button>
                {/* <button
                  className={styles.cancelBtn}
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Modal;