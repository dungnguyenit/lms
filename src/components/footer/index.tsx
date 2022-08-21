import Languages from 'commons/languages';
import React, { memo } from 'react';
import styles from './footer.module.scss';

function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.footerContainerLeft}>
                <div className={styles.textTienNgay}>
                    <p>{`${Languages.common.tienNgayVn}`}</p>
                    <p className={styles.textVn}>{Languages.common.vn}</p>
                </div>

                <div className={styles.textCopyRight}>
                    <p>{`${Languages.footer.copyRight}`}</p>
                </div>
            </div>
            <div className={styles.footerContainerRight}>
                <p className={styles.textErrAccess}>
                    {Languages.footer.contactAccessIfErr}
                </p>
                <p className={styles.textSdtIfErrAccess}>
                    {Languages.common.sdtIfErrAccess}
                </p>
            </div>

        </div>
    );
}

export default memo(Footer);
