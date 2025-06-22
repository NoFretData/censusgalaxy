// import clsx from 'clsx';
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


import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="No SAAS. No Login. Just Good Data."
      description="Customizable census data for ML, marketing, and analytics teams.">
      <main>

        {/* Hero Section */}
        <header className={clsx('hero', styles.heroBanner)}>
          <div className="container text--center">
            <div className={styles.badge}>Trusted by data professionals</div>
            <h1 className="hero__title">No SAAS. No Login.<br />Just Good Data.</h1>
            <p className="hero__subtitle">
              Fast, customizable census and geospatial data for AI/ML, marketing, and analytics teams.
            </p>
            <div className={styles.buttons}>
              <Link className="button button--primary button--lg" to="/docs/demo">Schedule a Demo</Link>
              <Link className="button button--secondary button--lg" to="/docs/sample">Download Sample</Link>
            </div>
          </div>
        </header>

        {/* Modules Section */}
        <section className={styles.features}>
          <div className="container">
            <h2 className="text--center">Modules</h2>
            <div className="row">
              {[{
                title: "Documentation",
                text: "Create and manage knowledge base articles with powerful out-of-the-box features."
              }, {
                title: "Category Manager",
                text: "Maintain your documentation effectively in a clean hierarchy-based structure."
              }, {
                title: "Editor",
                text: "Handpicked features that shift your writers’ focus towards content, not formatting."
              }].map((mod, idx) => (
                <div key={idx} className="col col--4">
                  <div className={styles.card}>
                    <h3>{mod.title}</h3>
                    <p>{mod.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.cta}>
          <div className="container text--center">
            <h2>Start exploring census data today</h2>
            <Link className="button button--primary button--lg" to="/docs/category/datasets">
              Browse Datasets
            </Link>
          </div>
        </section>

      </main>
    </Layout>
  );
}
