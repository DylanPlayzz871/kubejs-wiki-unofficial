// src/pages/index.js
import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
const { siteConfig } = useDocusaurusContext();

return ( <Layout
   title={siteConfig.title}
   description="Unofficial KubeJS Wiki - Learn Minecraft Scripting">


  {/* Hero Section */}
  <div className="hero hero--primary" style={{ padding: '5rem 0' }}>
    <div className="container">
      <h1 className="hero__title">{siteConfig.title}</h1>
      <p className="hero__subtitle">{siteConfig.tagline}</p>
      
      <div className="margin-vert--lg">
        <Link
          className="button button--secondary button--lg margin-right--md"
          to="/docs/intro">
          📖 Start Reading the Wiki
        </Link>
        
        <Link
          className="button button--outline button--lg"
          to="#tutorials">
          Watch Tutorials ↓
        </Link>
      </div>
    </div>
  </div>

  {/* Tutorials Section */}
  <div id="tutorials" className="container margin-vert--xl">
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <h2>KubeJS Video Tutorials</h2>
      <p>Learn KubeJS through practical examples</p>
    </div>

    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      gap: '2rem', 
      justifyContent: 'center' 
    }}>
      
      {/* Video Card Template */}
      {[
        {
          title: "Custom Crafting Recipes - How to use KubeJS in 2024",
          url: "https://www.youtube.com/embed/CpapHpKh8KA"
        },
        {
          title: "Create Custom Mechanical Press Recipes",
          url: "https://www.youtube.com/embed/UPEpUqXZpOk"
        },
        {
          title: "Remove Unwanted Recipes using KubeJS",
          url: "https://www.youtube.com/embed/PVvE-9tlYZ8"
        },
        {
          title: "Tiered Crafting Recipes using KubeJS",
          url: "https://www.youtube.com/embed/1FZg4Ljzg2g"
        },
        {
          title: "Custom Mixing Recipes using KubeJS",
          url: "https://www.youtube.com/embed/N4DuYHKATnY"
        },
        {
          title: "Custom Shaped Recipes using KubeJS",
          url: "https://www.youtube.com/embed/Nq2ynSZjhPs"
        },
        {
          title: "Custom Create Mod Encased Fan Recipes using KubeJS",
          url: "https://www.youtube.com/embed/cqEnpbELA8A?si=qOwQIp1GVBAKMCYh"
        },
        {
          title: "Create Custom Smithing Table Recipes Using KubeJS",
          url: "https://www.youtube.com/embed/mjuIEm2xMJU?si=i6KfEdfNNntuyKaT"
        },
        {
          title: "Custom Heated/Superheated Mixing Recipes using KubeJS",
          url: "https://www.youtube.com/embed/-xiStKu2Ut0?si=RdboPjuywIP4Mcny"
        },
        {
          title: "Custom Create Sequenced Assembly Recipes using KubeJS",
          url: "https://www.youtube.com/embed/5_dMN2RLVA0?si=AhLs2lGNNL2olJDn"
        },
        {
          title: "Custom Crushing Wheel Recipes using KubeJS",
          url: "https://www.youtube.com/embed/i-AZIaxd_X4?si=WY3YocxeUrMBRG_U"
        },
        {
          title: "Custom Create Sifting Recipes using KubeJS",
          url: "https://www.youtube.com/embed/tOoMdfvn4gU?si=GEkmHBgKkaTPHDdr"
        },
        {
          title: "Create One Item With Another Using KubeJS",
          url: "https://www.youtube.com/embed/cdigtQfzajo?si=pFPnAJnwzZAyxjWC"
        },
        {
          title: "Custom Modded Villager Trades using KubeJS",
          url: "https://www.youtube.com/embed/zJlZpU9hAFo?si=jHtqvOOnWWwttxqv"
        },
      ].map((video, index) => (
        <div key={index} style={{ 
          maxWidth: '560px', 
          flex: '1 1 500px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <iframe 
            width="100%" 
            height="315" 
            src={video.url}
            title={video.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen>
          </iframe>

          <div style={{ 
            padding: '1rem',
            backgroundColor: 'var(--ifm-color-primary)',
            color: 'white'
          }}>
            <h4 style={{ margin: '0.5rem 0' }}>
              {video.title}
            </h4>
          </div>
        </div>
      ))}

    </div>
  </div>

</Layout>


);
}
