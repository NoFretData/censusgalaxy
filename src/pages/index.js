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
import styles from './index.module.css';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="No SAAS. No Login. Just Good Data." description="Customizable census data for ML, marketing, sales">
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
              <Link className="button button--primary button--lg" to="/demo">Schedule a Demo</Link>
              <Link className="button button--secondary button--lg" to="/sample">Download Sample</Link>
            </div>
          </div>
        </header>

        {/* What We Do */}
        <section className={styles.features}>
          <div className="container">
            <h2 className="text--center">What We Do</h2>
            <div className="row">
              {[
                {
                  title: "New Market Segmentation",
                  bullets: [
                    "Identify high-value customer segments",
                    "Expand into new regions with confidence",
                    "Optimize outreach based on real data"
                  ]
                },
                {
                  title: "Turn Locations into Insights",
                  bullets: [
                    "Geocode addresses and enrich them",
                    "Analyze regions for sales and planning",
                    "Make smarter, location-driven decisions"
                  ]
                },
                {
                  title: "Fuel Your Models with Superior Data",
                  bullets: [
                    "Integrate census and geospatial data",
                    "Improve model accuracy",
                    "Unlock deeper insights"
                  ]
                }
              ].map((feat, idx) => (
                <div key={idx} className="col col--4">
                  <div className={styles.card}>
                    <h3>{feat.title}</h3>
                    <ul>
                      {feat.bullets.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Embed */}
        <section className={styles.dashboard}>
          <div className="container text--center">
            <h2>Explore Data Like Never Before</h2>
            <p>Real-time analytics and spatial insights, powered by our interactive dashboard.</p>
            <div className={styles.dashboardFrame}>
              <iframe
                src="https://your-dashboard-url.com"
                title="Dashboard"
                width="100%"
                height="400"
                frameBorder="0"
                style={{ borderRadius: '12px' }}
              />
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section className={styles.plans}>
          <div className="container">
            <h2 className="text--center">Plans</h2>
            <div className="row">
              <div className="col col--6">
                <div className={styles.cardPlan}>
                  <h3>Data Download</h3>
                  <p>Access to census data in CSV, GeoJSON formats. Tailored by geography or topics.</p>
                </div>
              </div>
              <div className="col col--6">
                <div className={styles.cardPlan}>
                  <h3>Geocoding & Location Data Enrichment</h3>
                  <p>Upload addresses and receive enriched data with census variables and coordinates.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className={styles.testimonial}>
          <div className="container text--center">
            <blockquote>
              “We used Census Galaxy’s data to guide our expansion into new markets. Their platform saved us months of work.”
              <footer>— Maya, Growth at UrbanReach</footer>
            </blockquote>
          </div>
        </section>

        {/* CTA Footer */}
        <section className={styles.cta}>
          <div className="container text--center">
            <h2>Start exploring census data today</h2>
            <Link className="button button--primary button--lg" to="/docs/category/datasets">Browse Datasets</Link>
          </div>
        </section>

      </main>
    </Layout>
  );
}
