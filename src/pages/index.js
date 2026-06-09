// src/pages/index.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="KubeJS Scripting Tutorials">
      
      <div className="hero hero--primary" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          
          <div className="margin-vert--lg">
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Get Started with KubeJS →
            </Link>
          </div>
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="container margin-vert--xl">
        <h2 style={{ textAlign: 'center' }}>KubeJS Tutorials</h2>
        <p style={{ textAlign: 'center' }}>Watch these tutorials to learn how to script in KubeJS</p>

        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '2rem', 
          justifyContent: 'center',
          marginTop: '3rem'
        }}>
          
          {/* Video 1 */}
          <div style={{ maxWidth: '560px', flex: '1 1 500px' }}>
            <h3>(Create mod) Custom Crafting Recipes - How to use KubeJS in 2024</h3>
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/CpapHpKh8KA?si=Uw8vLMdfXrgECMVQ" 
              title="(Create mod) Custom Crafting Recipes - How to use KubeJS in 2024" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>





































          {/* Video 2 - Add more as needed */}
          <div style={{ maxWidth: '560px', flex: '1 1 500px' }}>
            <h3>(Create mod) Create custom Mechanical Press recipes using KubeJS</h3>
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/UPEpUqXZpOk?si=DxeSLKLHVqKoqnpc" 
              title="(Create mod) Create custom Mechanical Press recipes using KubeJS" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>













































                    {/* Video 3 - Add more as needed */}
          <div style={{ maxWidth: '560px', flex: '1 1 500px' }}>
            <h3>(Create mod) Remove Unwanted Recipes using KubeJS</h3>
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/PVvE-9tlYZ8?si=RTSX-pTE3BKIaSxP" 
              title="(Create mod) Remove Unwanted Recipes using KubeJS" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>


















                              {/* Video 4 - Add more as needed */}
          <div style={{ maxWidth: '560px', flex: '1 1 500px' }}>
            <h3>(Create mod) Tiered Crafting Recipes using KubeJS</h3>
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/1FZg4Ljzg2g?si=4mqKUcNamyNNiB8w" 
              title="(Create mod) Tiered Crafting Recipes using KubeJS" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>







































                    {/* Video 5 - Add more as needed */}
          <div style={{ maxWidth: '560px', flex: '1 1 500px' }}>
            <h3>(Create mod) Create Custom Mixing Recipes using KubeJS</h3>
            <iframe 
              width="100%" 
              height="315" 
             src="https://www.youtube.com/embed/N4DuYHKATnY?si=D3UY7H8PjFi2NTbH" 
              title="(Create mod) Create Custom Mixing Recipes using KubeJS" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>






































                              {/* Video 5 - Add more as needed */}
          <div style={{ maxWidth: '560px', flex: '1 1 500px' }}>
            <h3>(Create mod) Create custom shaped Recipes using KubeJS</h3>
            <iframe 
              width="100%" 
              height="315" 
              src="https://www.youtube.com/embed/Nq2ynSZjhPs?si=YE9i8CMiPhUh1O5R" 
              title="(Create mod) Create custom shaped Recipes using KubeJS" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>






































        </div>
      </div>

    </Layout>



  );
}