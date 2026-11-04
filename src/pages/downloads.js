import React from 'react';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './downloads.module.css';

export default function Downloads() {
  const { siteConfig } = useDocusaurusContext();
  const filename = siteConfig.customFields.windowsDownload;
  const downloadUrl = useBaseUrl(`/downloads/${encodeURIComponent(filename || '')}`);
  const iconUrl = useBaseUrl('/downloads/easy-command-workshop.png');
  const [iconFailed, setIconFailed] = React.useState(false);

  return (
    <Layout title="Downloads" description="Download Easy command workshop for Windows.">
      <main className={`container ${styles.page}`}>
        <p className={styles.eyebrow}>TOOLS FOR YOUR NEXT PROJECT</p>
        <h1>Downloads</h1>
        <p className={styles.intro}>Your next creation starts here.</p>
        <article className={styles.downloadCard} aria-labelledby="app-title">
          <div className={styles.cardHeader}>
            <div className={styles.icon}>
              {iconFailed ? (
                <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
                  <rect x="7" y="11" width="50" height="42" rx="8" stroke="currentColor" strokeWidth="3" />
                  <path d="m18 25 8 7-8 7m16 0h12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <img src={iconUrl} alt="" onError={() => setIconFailed(true)} />
              )}
            </div>
            <div>
              <span className={styles.badge}>WINDOWS DESKTOP APP</span>
              <h2 id="app-title" className={styles.appTitle}>Easy command workshop</h2>
              <p className={styles.subtitle}>Ready when inspiration strikes.</p>
            </div>
          </div>
          <div className={styles.cardBody}>
            {filename ? (
              <>
                <a className={`button button--primary button--lg ${styles.downloadButton}`} href={downloadUrl} download={filename}>
                  <span aria-hidden="true">↓</span> Download for Windows
                </a>
                <p className={styles.instructions}>Save the .exe file, then open it on your PC to get started.</p>
                <div className={styles.fileDetails}>
                  <span className={styles.fileType}>.EXE</span>
                  <span>{filename}</span>
                </div>
              </>
            ) : (
              <p className="margin-bottom--none">Coming soon. Check back here for Easy command workshop.</p>
            )}
          </div>
        </article>
      </main>
    </Layout>
  );
}
