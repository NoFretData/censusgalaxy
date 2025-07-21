//  1 import clsx from 'clsx';
// import Link from '@docusaurus/Link';
// import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';

// import Heading from '@theme/Heading';
// import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div className="container">
//         <Heading as="h1" className="hero__title">
//           {siteConfig.title}
//         </Heading>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default function Home() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <Layout
//       title={`Hello from ${siteConfig.title}`}
//       description="Description will go into a meta tag in <head />">
//       <HomepageHeader />
//       <main>
//         <HomepageFeatures />
//       </main>
//     </Layout>
//   );
// }


// 2  import React from 'react';
// import clsx from 'clsx';
// import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';
// import styles from './index.module.css';

// export default function Home() {
//   return (
//     <Layout
//       title="No SAAS. No Login. Just Good Data."
//       description="Customizable census data for ML, marketing, and analytics teams.">
//       <main>

//         {/* Hero Section */}
//         <header className={clsx('hero', styles.heroBanner)}>
//           <div className="container text--center">
//             <div className={styles.badge}>Trusted by data professionals</div>
//             <h1 className="hero__title">No SAAS. No Login.<br />Just Good Data.</h1>
//             <p className="hero__subtitle">
//               Fast, customizable census and geospatial data for AI/ML, marketing, and analytics teams.
//             </p>
//             <div className={styles.buttons}>
//               <Link className="button button--primary button--lg" to="/docs/demo">Schedule a Demo</Link>
//               <Link className="button button--secondary button--lg" to="/docs/sample">Download Sample</Link>
//             </div>
//           </div>
//         </header>

//         {/* Modules Section */}
//         <section className={styles.features}>
//           <div className="container">
//             <h2 className="text--center">Modules</h2>
//             <div className="row">
//               {[{
//                 title: "Documentation",
//                 text: "Create and manage knowledge base articles with powerful out-of-the-box features."
//               }, {
//                 title: "Category Manager",
//                 text: "Maintain your documentation effectively in a clean hierarchy-based structure."
//               }, {
//                 title: "Editor",
//                 text: "Handpicked features that shift your writers’ focus towards content, not formatting."
//               }].map((mod, idx) => (
//                 <div key={idx} className="col col--4">
//                   <div className={styles.card}>
//                     <h3>{mod.title}</h3>
//                     <p>{mod.text}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Call to Action */}
//         <section className={styles.cta}>
//           <div className="container text--center">
//             <h2>Start exploring census data today</h2>
//             <Link className="button button--primary button--lg" to="/docs/datasets">
//               Browse Datasets
//             </Link>
//           </div>
//         </section>

//       </main>
//     </Layout>
//   );
// }

//3 
// import React from 'react';
// import Layout from '@theme/Layout';
// import Link from '@docusaurus/Link';
// import styles from './index.module.css';

// export default function Home() {
//   return (
//     <Layout
//       title="Census Galaxy Documentation"
//       description="Documentation for ZIP code-level demographic & economic datasets.">
//       <main className={styles.docLanding}>

//         {/* Hero */}
//         <section className={styles.heroSection}>
//           <div className="container">
//             <div className="row">
//               <div className="col col--7">
//                 <h1 className="hero__title">Census Galaxy Documentation</h1>
//                 <p className="hero__subtitle">
//                   Curated ZIP code-level datasets for AI/ML, marketing, planning, and more.
//                 </p>
//                 <div className={styles.heroButtons}>
//                   <Link className="button button--primary button--lg" to="/docs/quick-start-guide">
//                     Get Started
//                   </Link>
//                   <Link className="button button--secondary button--lg" to="/docs/datasets">
//                     View Datasets
//                   </Link>
//                 </div>
//               </div>
//               <div className="col col--5">
//                 <img src="/img/hero-illustration.svg" alt="Census Galaxy Illustration" style={{ maxWidth: '100%' }} />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Modules */}
//         <section className="container margin-top--lg">
//           <h2 className="text--center">Modules</h2>
//           <div className="row">
//             {[
//               {
//                 title: 'Datasets',
//                 description: 'ZIP code-level data including income, population, education, and more.',
//                 link: '/docs/datasets'
//               },
//               {
//                 title: 'Use Cases',
//                 description: 'Examples and queries for ML, segmentation, planning, and analysis.',
//                 link: '/docs/use-cases'
//               },
//               {
//                 title: 'Data Dictionary',
//                 description: 'View field definitions and metadata for all dataset views.',
//                 link: '/docs/data-dictionary'
//               }
//             ].map((item, idx) => (
//               <div key={idx} className="col col--4 margin-bottom--lg">
//                 <div className="card padding--lg">
//                   <h3>{item.title}</h3>
//                   <p>{item.description}</p>
//                   <Link to={item.link} className="button button--sm button--secondary">
//                     Explore
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* CTA */}
//         <section className={`${styles.cta} margin-top--xl text--center`}>
//           <h2>Ready to explore the data?</h2>
//           <Link className="button button--primary button--lg" to="/docs/datasets">
//             View Available Datasets
//           </Link>
//         </section>
        
//       </main>
//     </Layout>
//   );
// }

// // Added this hero section in above code 
// <section className={styles.heroSection}>
//   <div className="container">
//     <div className="row">
//       <div className="col col--7">
//         <h1 className="hero__title">Census Galaxy Documentation</h1>
//         <p className="hero__subtitle">
//           Curated ZIP code-level datasets for AI/ML, marketing, planning, and more.
//         </p>
//         <div className={styles.heroButtons}>
//           <Link className="button button--primary button--lg" to="/docs/quick-start-guide">
//             Get Started
//           </Link>
//           <Link className="button button--secondary button--lg" to="/docs/datasets">
//             View Datasets
//           </Link>
//         </div>
//       </div>
//       <div className="col col--5">
//         <img src="/img/hero-illustration.svg" alt="Census Galaxy Illustration" style={{ maxWidth: '100%' }} />
//       </div>
//     </div>
//   </div>
// </section>

//   4 

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';


export default function Home() {
  return (
    <Layout
      title="Census Galaxy Documentation"
      description="Documentation for ZIP code-level demographic & economic datasets.">
      <main className={styles.docLanding}>

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h1 className={styles.hero__title}>Welcome to Census Galaxy Docs</h1>
                <p className={styles.hero__subtitle}>
                  Explore curated demographic and economic datasets for AI/ML, marketing, and planning.
                </p>
                <div className={styles.heroButtons}>
                  <Link className="button button--primary button--lg" to="/docs/quick-start-guide">
                    Quick Start + User Guide
                  </Link>
                  <Link className="button button--secondary button--lg" to="/docs/geographies">
                    Geographies Overview
                  </Link>
                </div>
              </div>

              <div className="col col--6">
                <div className={styles.heroImageContainer}>
                  <img
                    src={useBaseUrl('/img/hero-right.jpg')}
                    alt="Hero Illustration"
                    className={styles.heroImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Modules Section */}
        <section className={`container ${styles.moduleSection}`}>
          <h2 className="text--center margin-bottom--lg">Modules</h2>
          <div className="row">
            {[
              {
                title: 'Demographic Explanation',
                description: 'Understand the structure and details of demographic data fields.',
                link: '/docs/data/demographic-explanation',
              },
              {
                title: 'Data',
                description: 'Learn about the metrics, percentages, and percentiles used in Census Galaxy datasets.',
                link: '/docs/data/index.md',
              },
              {
                title: 'Geography Nuances',
                description: 'Dive into data-geography nuances: definitions, boundaries, and regional variations.',
                link: '/docs/data-geography-nuances',
              },
            ].map((item, idx) => (
              <div key={idx} className="col col--4 margin-bottom--lg">
                <div className={styles.moduleCard}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link to={item.link} className="button button--sm button--secondary">
                    Explore
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={`${styles.cta} text--center margin-top--xl`}>
          <h2>Ready to get started?</h2>
          <Link className="button button--primary button--lg" to="/docs/quick-start-guide">
            Open Quick Start + User Guide
          </Link>
        </section>

      </main>
    </Layout>
  );
}
