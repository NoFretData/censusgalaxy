<!-- ---
id: geographies
title: Geographies
---

# Geographies Overview

##Block Groups

<details open>
  <summary><strong>Block Groups</strong></summary>

  <div>

  A Block Group is the smallest geography for which the U.S. Census Bureau publishes sample data. It typically includes 600 to 3,000 people and nests within a Census Tract. There are around 242,000 Block Groups in the United States.

  **Use when:**
  - Fine-grained demographic targeting and local equity analysis (e.g., identifying underserved areas or planning hyper-local outreach).
  - Working with sensitive population indicators like income, race, or education at a neighborhood scale.

  ### Field Summary

  <table style={{ fontFamily: 'Satoshi, sans-serif', width: '100%', borderCollapse: 'collapse' }}>
    <thead style={{ background: '#f6f8fa' }}>
      <tr>
        <th style={{ padding: '8px', textAlign: 'left' }}><strong>Field</strong></th>
        <th style={{ padding: '8px', textAlign: 'left' }}><strong>Type</strong></th>
        <th style={{ padding: '8px', textAlign: 'left' }}><strong>Example</strong></th>
        <th style={{ padding: '8px', textAlign: 'left' }}><strong>Description</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>BlockGroupID</strong></td><td>VARCHAR</td><td>270314801023</td><td>Unique 12-digit identifier for the Census Block Group.</td></tr>
      <tr><td><strong>StateFIPS</strong></td><td>VARCHAR</td><td>27</td><td>2-digit FIPS code for the state.</td></tr>
      <tr><td><strong>StateName</strong></td><td>VARCHAR</td><td>Minnesota</td><td>Full name of the state.</td></tr>
      <tr><td><strong>StateAbbrev</strong></td><td>VARCHAR</td><td>MN</td><td>USPS two-letter abbreviation for the state.</td></tr>
      <tr><td><strong>CountyFIPS</strong></td><td>VARCHAR</td><td>31</td><td>3-digit FIPS code for the county.</td></tr>
      <tr><td><strong>StateCountyID</strong></td><td>VARCHAR</td><td>27031</td><td>Concatenation of state and county FIPS codes.</td></tr>
      <tr><td><strong>CountyName</strong></td><td>VARCHAR</td><td>Cook</td><td>Name of the county.</td></tr>
      <tr><td><strong>CountyFullName</strong></td><td>VARCHAR</td><td>Cook County</td><td>Full name of the county.</td></tr>
      <tr><td><strong>TractFIPS</strong></td><td>VARCHAR</td><td>480102</td><td>Census Tract code (6 digits).</td></tr>
      <tr><td><strong>StateCountyTractID</strong></td><td>VARCHAR</td><td>27031480102</td><td>Combined State + County + Tract FIPS (11 digits).</td></tr>
      <tr><td><strong>MSA_ID</strong></td><td>VARCHAR</td><td>null</td><td>Metropolitan Statistical Area code, if applicable.</td></tr>
      <tr><td><strong>CSA_ID</strong></td><td>VARCHAR</td><td>null</td><td>Combined Statistical Area code, if applicable.</td></tr>
      <tr><td><strong>MSALegalName</strong></td><td>VARCHAR</td><td>null</td><td>Legal name of the MSA (if applicable).</td></tr>
      <tr><td><strong>BlockGroupCode</strong></td><td>VARCHAR</td><td>3</td><td>Block group number within the tract.</td></tr>
      <tr><td><strong>BlockGroupName</strong></td><td>VARCHAR</td><td>Block Group 3</td><td>Descriptive label for the block group.</td></tr>
      <tr><td><strong>TotalAreaSqMiles</strong></td><td>NUMBER</td><td>469.5851</td><td>Total area of the block group in square miles.</td></tr>
      <tr><td><strong>LandSqMiles</strong></td><td>NUMBER</td><td>419.4399</td><td>Land area of the block group in square miles.</td></tr>
      <tr><td><strong>WaterSqMiles</strong></td><td>NUMBER</td><td>50.1452</td><td>Water area of the block group in square miles.</td></tr>
      <tr><td><strong>LandSqMeters</strong></td><td>NUMBER</td><td>1086344299</td><td>Land area in square meters.</td></tr>
      <tr><td><strong>WaterSqMeters</strong></td><td>NUMBER</td><td>129875550</td><td>Water area in square meters.</td></tr>
      <tr><td><strong>GeographyYear</strong></td><td>VARCHAR</td><td>2023</td><td>The year associated with the geographic boundaries.</td></tr>
      <tr><td><strong>BlockGroupCentroidLat</strong></td><td>VARCHAR</td><td>47.8399498</td><td>Latitude of the block group centroid.</td></tr>
      <tr><td><strong>BlockGroupCentroidLon</strong></td><td>VARCHAR</td><td>-90.9493178</td><td>Longitude of the block group centroid.</td></tr>
      <tr><td><strong>BlockGroupCentroidPoints</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Point&quot;, ...&#125;</code></td><td>GeoJSON representation of the block group centroid.</td></tr>
      <tr><td><strong>BlockGroupPolygon</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Polygon&quot;, ...&#125;</code></td><td>GeoJSON representation of the full boundary of the block group.</td></tr>
    </tbody>
  </table>

  </div>
</details>


---
<details open>
  <summary><strong>Tracts</strong></summary>

  <div>


  Census Tracts are statistical subdivisions of counties designed to be relatively permanent and consistent across time. Each tract contains 1,200 to 8,000 people (average ~4,000). There are about 85,000 Census Tracts nationwide.

  Use when:
  - Neighborhood-level trends in housing, poverty, or commute patterns — especially when privacy or stability is a concern.
  - Often used in federal programs and grants (e.g., CDBG eligibility, Opportunity Zones).

  ### Field Summary

  <table style={{ fontFamily: 'Satoshi, sans-serif', width: '100%', borderCollapse: 'collapse' }}>
    <thead style={{ background: '#f6f8fa' }}>
      <tr>
        <th><strong>Field</strong></th>
        <th><strong>Type</strong></th>
        <th><strong>Example</strong></th>
        <th><strong>Description</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>StateCountyTractID</strong></td><td>VARCHAR</td><td>6023000800</td><td>Unique identifier combining state (2), county (3), and tract (6) FIPS codes.</td></tr>
      <tr><td><strong>StateFIPS</strong></td><td>VARCHAR</td><td>6</td><td>Two-digit FIPS code for the state.</td></tr>
      <tr><td><strong>StateName</strong></td><td>VARCHAR</td><td>California</td><td>Full name of the state.</td></tr>
      <tr><td><strong>StateAbbrev</strong></td><td>VARCHAR</td><td>CA</td><td>Two-letter USPS state abbreviation.</td></tr>
      <tr><td><strong>CountyFIPS</strong></td><td>VARCHAR</td><td>23</td><td>Three-digit FIPS code for the county.</td></tr>
      <tr><td><strong>CountyName</strong></td><td>VARCHAR</td><td>Humboldt</td><td>Name of the county.</td></tr>
      <tr><td><strong>CountyFullName</strong></td><td>VARCHAR</td><td>Humboldt County</td><td>Full name of the county.</td></tr>
      <tr><td><strong>StateCountyID</strong></td><td>VARCHAR</td><td>6023</td><td>Combination of StateFIPS and CountyFIPS.</td></tr>
      <tr><td><strong>TractFIPS</strong></td><td>VARCHAR</td><td>800</td><td>Six-digit tract identifier within the county.</td></tr>
      <tr><td><strong>TractName</strong></td><td>VARCHAR</td><td>Census Tract 800</td><td>Friendly tract label.</td></tr>
      <tr><td><strong>MSA_ID</strong></td><td>VARCHAR</td><td>21700</td><td>Metropolitan Statistical Area code, if applicable.</td></tr>
      <tr><td><strong>CSA_ID</strong></td><td>VARCHAR</td><td>null</td><td>Combined Statistical Area code, if applicable.</td></tr>
      <tr><td><strong>MSAName</strong></td><td>VARCHAR</td><td>Eureka-Arcata, CA</td><td>Informal MSA name.</td></tr>
      <tr><td><strong>MSALegalName</strong></td><td>VARCHAR</td><td>Eureka-Arcata, CA Micro Area</td><td>Legal name of the MSA.</td></tr>
      <tr><td><strong>TotalAreaSqMiles</strong></td><td>NUMBER</td><td>9.5762</td><td>Total area of the tract in square miles.</td></tr>
      <tr><td><strong>LandSqMiles</strong></td><td>NUMBER</td><td>6.0166</td><td>Land area of the tract in square miles.</td></tr>
      <tr><td><strong>WaterSqMiles</strong></td><td>NUMBER</td><td>3.5596</td><td>Water area of the tract in square miles.</td></tr>
      <tr><td><strong>LandSqMeters</strong></td><td>NUMBER</td><td>15582948</td><td>Land area in square meters.</td></tr>
      <tr><td><strong>WaterSqMeters</strong></td><td>NUMBER</td><td>9219305</td><td>Water area in square meters.</td></tr>
      <tr><td><strong>Geography Year</strong></td><td>VARCHAR</td><td>2023</td><td>The vintage of the tract boundary data.</td></tr>
      <tr><td><strong>TractCentroidLat</strong></td><td>VARCHAR</td><td>40.8076485</td><td>Latitude of the tract's centroid.</td></tr>
      <tr><td><strong>TractCentroidLon</strong></td><td>VARCHAR</td><td>-124.1112674</td><td>Longitude of the tract's centroid.</td></tr>
      <tr><td><strong>TractCentroidPoints</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Point&quot;, ...&#125;</code></td><td>GeoJSON object for the tract's centroid.</td></tr>
      <tr><td><strong>TractPolygon</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Polygon&quot;, ...&#125;</code></td><td>GeoJSON object for the tract's full polygon boundary.</td></tr>
    </tbody>
  </table>

  </div>
</details>

---

## ZIP Code

These are real USPS ZIP Codes, sourced from HUD and postal service data (not ZCTAs). There are around 40,000 ZIP Codes across the U.S., and populations per ZIP can vary dramatically — from a few hundred to over 100,000 — depending on urban density.

Use when:
- Linking with consumer data, marketing platforms, or delivery zones.
- Crosswalking between Census data and business datasets when exact geography is less critical.

### Field Summary

<table style={{ fontFamily: 'Satoshi, sans-serif', width: '100%', borderCollapse: 'collapse' }}>
  <thead style={{ background: '#f6f8fa' }}>
    <tr>
      <th><strong>Field</strong></th>
      <th><strong>Type</strong></th>
      <th><strong>Example</strong></th>
      <th><strong>Description</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr><td><strong>ZipCode</strong></td><td>VARCHAR</td><td>24571</td><td>5-digit USPS ZIP Code.</td></tr>
    <tr><td><strong>ZipCodeType</strong></td><td>VARCHAR</td><td>Standard</td><td>Type of ZIP Code (e.g., Standard, PO Box, Unique).</td></tr>
    <tr><td><strong>CityName</strong></td><td>VARCHAR</td><td>Lynch Station</td><td>Name of the primary city associated with the ZIP Code.</td></tr>
    <tr><td><strong>CityStateAbbrev</strong></td><td>VARCHAR</td><td>Lynch Station, VA</td><td>City name combined with state abbreviation.</td></tr>
    <tr><td><strong>StateAbbrev</strong></td><td>VARCHAR</td><td>VA</td><td>USPS two-letter state abbreviation.</td></tr>
    <tr><td><strong>StateName</strong></td><td>VARCHAR</td><td>Virginia</td><td>Full name of the state.</td></tr>
    <tr><td><strong>TotalAreaSqMiles</strong></td><td>NUMBER</td><td>52.35</td><td>Total area of the ZIP Code in square miles.</td></tr>
    <tr><td><strong>ZipCodeCentroidLat</strong></td><td>VARCHAR</td><td>37.132961</td><td>Latitude of the ZIP Code centroid.</td></tr>
    <tr><td><strong>ZipCodeCentroidLon</strong></td><td>VARCHAR</td><td>-79.3727482</td><td>Longitude of the ZIP Code centroid.</td></tr>
    <tr><td><strong>ZipCodeCentroidPoints</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Point&quot;, ...&#125;</code></td><td>GeoJSON object representing the ZIP Code centroid as a point.</td></tr>
    <tr><td><strong>ZipCodePolygon</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Polygon&quot;, ...&#125;</code></td><td>GeoJSON object representing the ZIP Code polygon boundary.</td></tr>
  </tbody>
</table>

---

## County

A County is a legal administrative subdivision within a state. There are 3,143 counties and county-equivalents in the U.S., with populations ranging from under 1,000 to over 10 million (e.g., Los Angeles County).

Use when:
- Common unit for health, economic, and policy reporting, as most agencies aggregate and release public data at this level.
- Comparing regional trends across a state (e.g., rural vs urban).

### Field Summary

<table style={{ fontFamily: 'Satoshi, sans-serif', width: '100%', borderCollapse: 'collapse' }}>
  <thead style={{ background: '#f6f8fa' }}>
    <tr>
      <th><strong>Field</strong></th>
      <th><strong>Type</strong></th>
      <th><strong>Example</strong></th>
      <th><strong>Description</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr><td><strong>StateCountyID</strong></td><td>VARCHAR</td><td>20143</td><td>Combined 5-digit FIPS code (StateFIPS + CountyFIPS).</td></tr>
    <tr><td><strong>CountyName</strong></td><td>VARCHAR</td><td>Ottawa</td><td>Name of the county.</td></tr>
    <tr><td><strong>CountyFullName</strong></td><td>VARCHAR</td><td>Ottawa County</td><td>Full county name, often including "County".</td></tr>
    <tr><td><strong>StateFIPS</strong></td><td>VARCHAR</td><td>20</td><td>Two-digit FIPS code for the state.</td></tr>
    <tr><td><strong>StateName</strong></td><td>VARCHAR</td><td>Kansas</td><td>Full name of the state.</td></tr>
    <tr><td><strong>StateAbbrev</strong></td><td>VARCHAR</td><td>KS</td><td>Two-letter USPS state abbreviation.</td></tr>
    <tr><td><strong>CountyFIPS</strong></td><td>VARCHAR</td><td>143</td><td>Three-digit FIPS code for the county within the state.</td></tr>
    <tr><td><strong>CountyGNIS</strong></td><td>VARCHAR</td><td>485035</td><td>GNIS Feature ID for the county (Geographic Names Information System).</td></tr>
    <tr><td><strong>CountyClass</strong></td><td>VARCHAR</td><td>H1</td><td>Optional classification (e.g., for HUD or economic designations).</td></tr>
    <tr><td><strong>CSA_ID</strong></td><td>VARCHAR</td><td>null</td><td>Combined Statistical Area code, if applicable.</td></tr>
    <tr><td><strong>MSA_ID</strong></td><td>VARCHAR</td><td>48620</td><td>Metropolitan Statistical Area code, if applicable.</td></tr>
    <tr><td><strong>TotalAreaSqMiles</strong></td><td>NUMBER</td><td>851.9452</td><td>Total area of the county in square miles.</td></tr>
    <tr><td><strong>LandSqMiles</strong></td><td>NUMBER</td><td>847.0677</td><td>Land area in square miles.</td></tr>
    <tr><td><strong>WaterSqMiles</strong></td><td>NUMBER</td><td>4.8774</td><td>Water area in square miles.</td></tr>
    <tr><td><strong>LandSqMeters</strong></td><td>NUMBER</td><td>219389358</td><td>Land area in square meters.</td></tr>
    <tr><td><strong>WaterSqMeters</strong></td><td>NUMBER</td><td>12632458</td><td>Water area in square meters.</td></tr>
    <tr><td><strong>CountyCentroidLat</strong></td><td>VARCHAR</td><td>38.8677353</td><td>Latitude of the county centroid.</td></tr>
    <tr><td><strong>CountyCentroidLon</strong></td><td>VARCHAR</td><td>-97.6548025</td><td>Longitude of the county centroid.</td></tr>
    <tr><td><strong>CountyCentroidPoints</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Point&quot;, ...&#125;</code></td><td>GeoJSON object for the centroid location.</td></tr>
    <tr><td><strong>CountyPolygon</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Polygon&quot;, ...&#125;</code></td><td>GeoJSON object for the full polygon of the county boundary.</td></tr>
  </tbody>
</table>

---

## Metropolitan Statistical Areas (MSAs)

An MSA includes a core urban area of 50,000+ people and surrounding counties with strong commuting and economic ties. There are about 390 MSAs, ranging from small metros to over 20 million people (e.g., the New York metro area).

Use when:
- Understanding urban economies, labor markets, and regional commuting behavior.
- Market sizing, media planning, or comparing major metro areas.

### Field Summary

<table style={{ fontFamily: 'Satoshi, sans-serif', width: '100%', borderCollapse: 'collapse' }}>
  <thead style={{ background: '#f6f8fa' }}>
    <tr>
      <th><strong>Field</strong></th>
      <th><strong>Type</strong></th>
      <th><strong>Example</strong></th>
      <th><strong>Description</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr><td><strong>MSA_ID</strong></td><td>VARCHAR</td><td>28180</td><td>5-digit Metropolitan Statistical Area (MSA) code assigned by the Census Bureau.</td></tr>
    <tr><td><strong>CSA_ID</strong></td><td>VARCHAR</td><td>null</td><td>3-digit Combined Statistical Area code, if applicable.</td></tr>
    <tr><td><strong>MSAName</strong></td><td>VARCHAR</td><td>Kapaa, HI</td><td>Informal name of the MSA, typically using the anchor city.</td></tr>
    <tr><td><strong>MSALegalName</strong></td><td>VARCHAR</td><td>Kapaa, HI Micro Area</td><td>Formal name of the MSA including its designation.</td></tr>
    <tr><td><strong>MSAType</strong></td><td>VARCHAR</td><td>M2</td><td>Code indicating whether the area is a metropolitan (M1) or micropolitan (M2) area.</td></tr>
    <tr><td><strong>StateFIPS</strong></td><td>VARCHAR</td><td>15</td><td>State FIPS code associated with the primary state of the MSA.</td></tr>
    <tr><td><strong>StateName</strong></td><td>VARCHAR</td><td>Hawaii</td><td>Name of the state where the MSA is located.</td></tr>
    <tr><td><strong>StateAbbrev</strong></td><td>VARCHAR</td><td>HI</td><td>USPS abbreviation for the state.</td></tr>
    <tr><td><strong>LandSqMiles</strong></td><td>NUMBER</td><td>619.8397</td><td>Land area of the MSA in square miles.</td></tr>
    <tr><td><strong>WaterSqMiles</strong></td><td>NUMBER</td><td>646.4737</td><td>Water area of the MSA in square miles.</td></tr>
    <tr><td><strong>MSACentroidLat</strong></td><td>VARCHAR</td><td>22.0120383</td><td>Latitude of the MSA centroid.</td></tr>
    <tr><td><strong>MSACentroidLon</strong></td><td>VARCHAR</td><td>-159.7059653</td><td>Longitude of the MSA centroid.</td></tr>
    <tr><td><strong>MSACentroidPoints</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Point&quot;, ...&#125;</code></td><td>GeoJSON object representing the centroid of the MSA.</td></tr>
    <tr><td><strong>MSAPolygon</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;MultiPolygon&quot;, ...&#125;</code></td><td>GeoJSON MultiPolygon representing the boundary of the entire MSA region.</td></tr>
  </tbody>
</table>

---

## States

There are 50 states in the U.S. plus the District of Columbia. State populations vary widely — from less than 600,000 (Wyoming) to over 39 million (California). Each state contains multiple counties, tracts, ZIPs, and block groups.

Use when:
- High-level comparisons and policy research across the U.S.
- Benchmarking, legislative analysis, and national roll-ups.

### Field Summary

<table style={{ fontFamily: 'Satoshi, sans-serif', width: '100%', borderCollapse: 'collapse' }}>
  <thead style={{ background: '#f6f8fa' }}>
    <tr>
      <th><strong>Field</strong></th>
      <th><strong>Type</strong></th>
      <th><strong>Example</strong></th>
      <th><strong>Description</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr><td><strong>StateFIPS</strong></td><td>VARCHAR</td><td>54</td><td>2-digit FIPS code representing the state (e.g., 54 = West Virginia).</td></tr>
    <tr><td><strong>StateName</strong></td><td>VARCHAR</td><td>West Virginia</td><td>Full name of the state.</td></tr>
    <tr><td><strong>StateAbbrev</strong></td><td>VARCHAR</td><td>WV</td><td>USPS two-letter abbreviation for the state.</td></tr>
    <tr><td><strong>StateRegion</strong></td><td>VARCHAR</td><td>3</td><td>U.S. Census-defined region code (1–4).</td></tr>
    <tr><td><strong>StateDivision</strong></td><td>VARCHAR</td><td>5</td><td>U.S. Census-defined division code within the region (1–9).</td></tr>
    <tr><td><strong>TotalAreaSqMiles</strong></td><td>FLOAT</td><td>24230.03509</td><td>Total area of the state in square miles (land + water).</td></tr>
    <tr><td><strong>LandSqMiles</strong></td><td>FLOAT</td><td>24041.22995</td><td>Land area in square miles.</td></tr>
    <tr><td><strong>WaterSqMiles</strong></td><td>FLOAT</td><td>188.8051451</td><td>Water area in square miles.</td></tr>
    <tr><td><strong>StateCentroidLat</strong></td><td>VARCHAR</td><td>38.6472854</td><td>Latitude of the geographic centroid of the state.</td></tr>
    <tr><td><strong>StateCentroidLon</strong></td><td>VARCHAR</td><td>-80.6183274</td><td>Longitude of the geographic centroid of the state.</td></tr>
    <tr><td><strong>StateCentroidPoints</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Point&quot;, ...&#125;</code></td><td>GeoJSON object for the centroid of the state.</td></tr>
    <tr><td><strong>StatePolygon</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Polygon&quot;, ...&#125;</code></td><td>GeoJSON object representing the full state boundary.</td></tr>
  </tbody>
</table>



 -->


---
id: geographies
title: Geographies
sidebar_label: Geographies
hide_title: true
---

import React from 'react';

# Geographies Overview

<span style={{display: "none"}}>

## Block Groups

</span>


<details open>
  <summary><strong>Block Groups</strong></summary>

  <div>

  A Block Group is the smallest geography for which the U.S. Census Bureau publishes sample data. It typically includes 600 to 3,000 people and nests within a Census Tract. There are around 242,000 Block Groups in the United States.

  **Use when:**
  - Fine-grained demographic targeting and local equity analysis (e.g., identifying underserved areas or planning hyper-local outreach).
  - Working with sensitive population indicators like income, race, or education at a neighborhood scale.

  ### Field Summary

  <table style={{ fontFamily: 'Satoshi, sans-serif', width: '100%', borderCollapse: 'collapse' }}>
    <thead style={{ background: '#f6f8fa' }}>
      <tr>
        <th style={{ padding: '8px', textAlign: 'left' }}><strong>Field</strong></th>
        <th style={{ padding: '8px', textAlign: 'left' }}><strong>Type</strong></th>
        <th style={{ padding: '8px', textAlign: 'left' }}><strong>Example</strong></th>
        <th style={{ padding: '8px', textAlign: 'left' }}><strong>Description</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>BlockGroupID</strong></td><td>VARCHAR</td><td>270314801023</td><td>Unique 12-digit identifier for the Census Block Group.</td></tr>
      <tr><td><strong>StateFIPS</strong></td><td>VARCHAR</td><td>27</td><td>2-digit FIPS code for the state.</td></tr>
      <tr><td><strong>StateName</strong></td><td>VARCHAR</td><td>Minnesota</td><td>Full name of the state.</td></tr>
      <tr><td><strong>StateAbbrev</strong></td><td>VARCHAR</td><td>MN</td><td>USPS two-letter abbreviation for the state.</td></tr>
      <tr><td><strong>CountyFIPS</strong></td><td>VARCHAR</td><td>31</td><td>3-digit FIPS code for the county.</td></tr>
      <tr><td><strong>StateCountyID</strong></td><td>VARCHAR</td><td>27031</td><td>Concatenation of state and county FIPS codes.</td></tr>
      <tr><td><strong>CountyName</strong></td><td>VARCHAR</td><td>Cook</td><td>Name of the county.</td></tr>
      <tr><td><strong>CountyFullName</strong></td><td>VARCHAR</td><td>Cook County</td><td>Full name of the county.</td></tr>
      <tr><td><strong>TractFIPS</strong></td><td>VARCHAR</td><td>480102</td><td>Census Tract code (6 digits).</td></tr>
      <tr><td><strong>StateCountyTractID</strong></td><td>VARCHAR</td><td>27031480102</td><td>Combined State + County + Tract FIPS (11 digits).</td></tr>
      <tr><td><strong>MSA_ID</strong></td><td>VARCHAR</td><td>null</td><td>Metropolitan Statistical Area code, if applicable.</td></tr>
      <tr><td><strong>CSA_ID</strong></td><td>VARCHAR</td><td>null</td><td>Combined Statistical Area code, if applicable.</td></tr>
      <tr><td><strong>MSALegalName</strong></td><td>VARCHAR</td><td>null</td><td>Legal name of the MSA (if applicable).</td></tr>
      <tr><td><strong>BlockGroupCode</strong></td><td>VARCHAR</td><td>3</td><td>Block group number within the tract.</td></tr>
      <tr><td><strong>BlockGroupName</strong></td><td>VARCHAR</td><td>Block Group 3</td><td>Descriptive label for the block group.</td></tr>
      <tr><td><strong>TotalAreaSqMiles</strong></td><td>NUMBER</td><td>469.5851</td><td>Total area of the block group in square miles.</td></tr>
      <tr><td><strong>LandSqMiles</strong></td><td>NUMBER</td><td>419.4399</td><td>Land area of the block group in square miles.</td></tr>
      <tr><td><strong>WaterSqMiles</strong></td><td>NUMBER</td><td>50.1452</td><td>Water area of the block group in square miles.</td></tr>
      <tr><td><strong>LandSqMeters</strong></td><td>NUMBER</td><td>1086344299</td><td>Land area in square meters.</td></tr>
      <tr><td><strong>WaterSqMeters</strong></td><td>NUMBER</td><td>129875550</td><td>Water area in square meters.</td></tr>
      <tr><td><strong>GeographyYear</strong></td><td>VARCHAR</td><td>2023</td><td>The year associated with the geographic boundaries.</td></tr>
      <tr><td><strong>BlockGroupCentroidLat</strong></td><td>VARCHAR</td><td>47.8399498</td><td>Latitude of the block group centroid.</td></tr>
      <tr><td><strong>BlockGroupCentroidLon</strong></td><td>VARCHAR</td><td>-90.9493178</td><td>Longitude of the block group centroid.</td></tr>
      <tr><td><strong>BlockGroupCentroidPoints</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Point&quot;, ...&#125;</code></td><td>GeoJSON representation of the block group centroid.</td></tr>
      <tr><td><strong>BlockGroupPolygon</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Polygon&quot;, ...&#125;</code></td><td>GeoJSON representation of the full boundary of the block group.</td></tr>
    </tbody>
  </table>

  </div>
</details>

---

<span style={{display: "none"}}>

## Tracts

</span>

<details open>
  <summary><strong>Tracts</strong></summary>

  <div>


  Census Tracts are statistical subdivisions of counties designed to be relatively permanent and consistent across time. Each tract contains 1,200 to 8,000 people (average ~4,000). There are about 85,000 Census Tracts nationwide.

  Use when:
  - Neighborhood-level trends in housing, poverty, or commute patterns — especially when privacy or stability is a concern.
  - Often used in federal programs and grants (e.g., CDBG eligibility, Opportunity Zones).

  ### Field Summary

  <table style={{ fontFamily: 'Satoshi, sans-serif', width: '100%', borderCollapse: 'collapse' }}>
    <thead style={{ background: '#f6f8fa' }}>
      <tr>
        <th><strong>Field</strong></th>
        <th><strong>Type</strong></th>
        <th><strong>Example</strong></th>
        <th><strong>Description</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>StateCountyTractID</strong></td><td>VARCHAR</td><td>6023000800</td><td>Unique identifier combining state (2), county (3), and tract (6) FIPS codes.</td></tr>
      <tr><td><strong>StateFIPS</strong></td><td>VARCHAR</td><td>6</td><td>Two-digit FIPS code for the state.</td></tr>
      <tr><td><strong>StateName</strong></td><td>VARCHAR</td><td>California</td><td>Full name of the state.</td></tr>
      <tr><td><strong>StateAbbrev</strong></td><td>VARCHAR</td><td>CA</td><td>Two-letter USPS state abbreviation.</td></tr>
      <tr><td><strong>CountyFIPS</strong></td><td>VARCHAR</td><td>23</td><td>Three-digit FIPS code for the county.</td></tr>
      <tr><td><strong>CountyName</strong></td><td>VARCHAR</td><td>Humboldt</td><td>Name of the county.</td></tr>
      <tr><td><strong>CountyFullName</strong></td><td>VARCHAR</td><td>Humboldt County</td><td>Full name of the county.</td></tr>
      <tr><td><strong>StateCountyID</strong></td><td>VARCHAR</td><td>6023</td><td>Combination of StateFIPS and CountyFIPS.</td></tr>
      <tr><td><strong>TractFIPS</strong></td><td>VARCHAR</td><td>800</td><td>Six-digit tract identifier within the county.</td></tr>
      <tr><td><strong>TractName</strong></td><td>VARCHAR</td><td>Census Tract 800</td><td>Friendly tract label.</td></tr>
      <tr><td><strong>MSA_ID</strong></td><td>VARCHAR</td><td>21700</td><td>Metropolitan Statistical Area code, if applicable.</td></tr>
      <tr><td><strong>CSA_ID</strong></td><td>VARCHAR</td><td>null</td><td>Combined Statistical Area code, if applicable.</td></tr>
      <tr><td><strong>MSAName</strong></td><td>VARCHAR</td><td>Eureka-Arcata, CA</td><td>Informal MSA name.</td></tr>
      <tr><td><strong>MSALegalName</strong></td><td>VARCHAR</td><td>Eureka-Arcata, CA Micro Area</td><td>Legal name of the MSA.</td></tr>
      <tr><td><strong>TotalAreaSqMiles</strong></td><td>NUMBER</td><td>9.5762</td><td>Total area of the tract in square miles.</td></tr>
      <tr><td><strong>LandSqMiles</strong></td><td>NUMBER</td><td>6.0166</td><td>Land area of the tract in square miles.</td></tr>
      <tr><td><strong>WaterSqMiles</strong></td><td>NUMBER</td><td>3.5596</td><td>Water area of the tract in square miles.</td></tr>
      <tr><td><strong>LandSqMeters</strong></td><td>NUMBER</td><td>15582948</td><td>Land area in square meters.</td></tr>
      <tr><td><strong>WaterSqMeters</strong></td><td>NUMBER</td><td>9219305</td><td>Water area in square meters.</td></tr>
      <tr><td><strong>Geography Year</strong></td><td>VARCHAR</td><td>2023</td><td>The vintage of the tract boundary data.</td></tr>
      <tr><td><strong>TractCentroidLat</strong></td><td>VARCHAR</td><td>40.8076485</td><td>Latitude of the tract's centroid.</td></tr>
      <tr><td><strong>TractCentroidLon</strong></td><td>VARCHAR</td><td>-124.1112674</td><td>Longitude of the tract's centroid.</td></tr>
      <tr><td><strong>TractCentroidPoints</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Point&quot;, ...&#125;</code></td><td>GeoJSON object for the tract's centroid.</td></tr>
      <tr><td><strong>TractPolygon</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Polygon&quot;, ...&#125;</code></td><td>GeoJSON object for the tract's full polygon boundary.</td></tr>
    </tbody>
  </table>

  </div>
</details>


---

<span style={{display: "none"}}>

## ZIP Code

</span>

<details open>
  <summary><strong>ZIP Code</strong></summary>

  <div>

  These are real USPS ZIP Codes, sourced from HUD and postal service data (not ZCTAs). There are around 40,000 ZIP Codes across the U.S., and populations per ZIP can vary dramatically — from a few hundred to over 100,000 — depending on urban density.

  Use when:
  - Linking with consumer data, marketing platforms, or delivery zones.
  - Crosswalking between Census data and business datasets when exact geography is less critical.

  ### Field Summary

  <table style={{ fontFamily: 'Satoshi, sans-serif', width: '100%', borderCollapse: 'collapse' }}>
    <thead style={{ background: '#f6f8fa' }}>
      <tr>
        <th><strong>Field</strong></th>
        <th><strong>Type</strong></th>
        <th><strong>Example</strong></th>
        <th><strong>Description</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>ZipCode</strong></td><td>VARCHAR</td><td>24571</td><td>5-digit USPS ZIP Code.</td></tr>
      <tr><td><strong>ZipCodeType</strong></td><td>VARCHAR</td><td>Standard</td><td>Type of ZIP Code (e.g., Standard, PO Box, Unique).</td></tr>
      <tr><td><strong>CityName</strong></td><td>VARCHAR</td><td>Lynch Station</td><td>Name of the primary city associated with the ZIP Code.</td></tr>
      <tr><td><strong>CityStateAbbrev</strong></td><td>VARCHAR</td><td>Lynch Station, VA</td><td>City name combined with state abbreviation.</td></tr>
      <tr><td><strong>StateAbbrev</strong></td><td>VARCHAR</td><td>VA</td><td>USPS two-letter state abbreviation.</td></tr>
      <tr><td><strong>StateName</strong></td><td>VARCHAR</td><td>Virginia</td><td>Full name of the state.</td></tr>
      <tr><td><strong>TotalAreaSqMiles</strong></td><td>NUMBER</td><td>52.35</td><td>Total area of the ZIP Code in square miles.</td></tr>
      <tr><td><strong>ZipCodeCentroidLat</strong></td><td>VARCHAR</td><td>37.132961</td><td>Latitude of the ZIP Code centroid.</td></tr>
      <tr><td><strong>ZipCodeCentroidLon</strong></td><td>VARCHAR</td><td>-79.3727482</td><td>Longitude of the ZIP Code centroid.</td></tr>
      <tr><td><strong>ZipCodeCentroidPoints</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Point&quot;, ...&#125;</code></td><td>GeoJSON object representing the ZIP Code centroid as a point.</td></tr>
      <tr><td><strong>ZipCodePolygon</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Polygon&quot;, ...&#125;</code></td><td>GeoJSON object representing the ZIP Code polygon boundary.</td></tr>
    </tbody>
  </table>

  </div>
</details>

---
<span style={{display: "none"}}>

## County

</span>

<details open>
  <summary><strong>County</strong></summary>

  <div>

  A County is a legal administrative subdivision within a state. There are 3,143 counties and county-equivalents in the U.S., with populations ranging from under 1,000 to over 10 million (e.g., Los Angeles County).

  Use when:
  - Common unit for health, economic, and policy reporting, as most agencies aggregate and release public data at this level.
  - Comparing regional trends across a state (e.g., rural vs urban).

  ### Field Summary

  <table style={{ fontFamily: 'Satoshi, sans-serif', width: '100%', borderCollapse: 'collapse' }}>
    <thead style={{ background: '#f6f8fa' }}>
      <tr>
        <th><strong>Field</strong></th>
        <th><strong>Type</strong></th>
        <th><strong>Example</strong></th>
        <th><strong>Description</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>StateCountyID</strong></td><td>VARCHAR</td><td>20143</td><td>Combined 5-digit FIPS code (StateFIPS + CountyFIPS).</td></tr>
      <tr><td><strong>CountyName</strong></td><td>VARCHAR</td><td>Ottawa</td><td>Name of the county.</td></tr>
      <tr><td><strong>CountyFullName</strong></td><td>VARCHAR</td><td>Ottawa County</td><td>Full county name, often including "County".</td></tr>
      <tr><td><strong>StateFIPS</strong></td><td>VARCHAR</td><td>20</td><td>Two-digit FIPS code for the state.</td></tr>
      <tr><td><strong>StateName</strong></td><td>VARCHAR</td><td>Kansas</td><td>Full name of the state.</td></tr>
      <tr><td><strong>StateAbbrev</strong></td><td>VARCHAR</td><td>KS</td><td>Two-letter USPS state abbreviation.</td></tr>
      <tr><td><strong>CountyFIPS</strong></td><td>VARCHAR</td><td>143</td><td>Three-digit FIPS code for the county within the state.</td></tr>
      <tr><td><strong>CountyGNIS</strong></td><td>VARCHAR</td><td>485035</td><td>GNIS Feature ID for the county (Geographic Names Information System).</td></tr>
      <tr><td><strong>CountyClass</strong></td><td>VARCHAR</td><td>H1</td><td>Optional classification (e.g., for HUD or economic designations).</td></tr>
      <tr><td><strong>CSA_ID</strong></td><td>VARCHAR</td><td>null</td><td>Combined Statistical Area code, if applicable.</td></tr>
      <tr><td><strong>MSA_ID</strong></td><td>VARCHAR</td><td>48620</td><td>Metropolitan Statistical Area code, if applicable.</td></tr>
      <tr><td><strong>TotalAreaSqMiles</strong></td><td>NUMBER</td><td>851.9452</td><td>Total area of the county in square miles.</td></tr>
      <tr><td><strong>LandSqMiles</strong></td><td>NUMBER</td><td>847.0677</td><td>Land area in square miles.</td></tr>
      <tr><td><strong>WaterSqMiles</strong></td><td>NUMBER</td><td>4.8774</td><td>Water area in square miles.</td></tr>
      <tr><td><strong>LandSqMeters</strong></td><td>NUMBER</td><td>219389358</td><td>Land area in square meters.</td></tr>
      <tr><td><strong>WaterSqMeters</strong></td><td>NUMBER</td><td>12632458</td><td>Water area in square meters.</td></tr>
      <tr><td><strong>CountyCentroidLat</strong></td><td>VARCHAR</td><td>38.8677353</td><td>Latitude of the county centroid.</td></tr>
      <tr><td><strong>CountyCentroidLon</strong></td><td>VARCHAR</td><td>-97.6548025</td><td>Longitude of the county centroid.</td></tr>
      <tr><td><strong>CountyCentroidPoints</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Point&quot;, ...&#125;</code></td><td>GeoJSON object for the centroid location.</td></tr>
      <tr><td><strong>CountyPolygon</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Polygon&quot;, ...&#125;</code></td><td>GeoJSON object for the full polygon of the county boundary.</td></tr>
    </tbody>
  </table>

  </div>
</details>

---
<span style={{display: "none"}}>

## Metropolitan Statistical Areas (MSAs)

</span>

<details open>
  <summary><strong>Metropolitan Statistical Areas (MSAs)</strong></summary>

  <div>

  An MSA includes a core urban area of 50,000+ people and surrounding counties with strong commuting and economic ties. There are about 390 MSAs, ranging from small metros to over 20 million people (e.g., the New York metro area).

  Use when:
  - Understanding urban economies, labor markets, and regional commuting behavior.
  - Market sizing, media planning, or comparing major metro areas.

  ### Field Summary

  <table style={{ fontFamily: 'Satoshi, sans-serif', width: '100%', borderCollapse: 'collapse' }}>
    <thead style={{ background: '#f6f8fa' }}>
      <tr>
        <th><strong>Field</strong></th>
        <th><strong>Type</strong></th>
        <th><strong>Example</strong></th>
        <th><strong>Description</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>MSA_ID</strong></td><td>VARCHAR</td><td>28180</td><td>5-digit Metropolitan Statistical Area (MSA) code assigned by the Census Bureau.</td></tr>
      <tr><td><strong>CSA_ID</strong></td><td>VARCHAR</td><td>null</td><td>3-digit Combined Statistical Area code, if applicable.</td></tr>
      <tr><td><strong>MSAName</strong></td><td>VARCHAR</td><td>Kapaa, HI</td><td>Informal name of the MSA, typically using the anchor city.</td></tr>
      <tr><td><strong>MSALegalName</strong></td><td>VARCHAR</td><td>Kapaa, HI Micro Area</td><td>Formal name of the MSA including its designation.</td></tr>
      <tr><td><strong>MSAType</strong></td><td>VARCHAR</td><td>M2</td><td>Code indicating whether the area is a metropolitan (M1) or micropolitan (M2) area.</td></tr>
      <tr><td><strong>StateFIPS</strong></td><td>VARCHAR</td><td>15</td><td>State FIPS code associated with the primary state of the MSA.</td></tr>
      <tr><td><strong>StateName</strong></td><td>VARCHAR</td><td>Hawaii</td><td>Name of the state where the MSA is located.</td></tr>
      <tr><td><strong>StateAbbrev</strong></td><td>VARCHAR</td><td>HI</td><td>USPS abbreviation for the state.</td></tr>
      <tr><td><strong>LandSqMiles</strong></td><td>NUMBER</td><td>619.8397</td><td>Land area of the MSA in square miles.</td></tr>
      <tr><td><strong>WaterSqMiles</strong></td><td>NUMBER</td><td>646.4737</td><td>Water area of the MSA in square miles.</td></tr>
      <tr><td><strong>MSACentroidLat</strong></td><td>VARCHAR</td><td>22.0120383</td><td>Latitude of the MSA centroid.</td></tr>
      <tr><td><strong>MSACentroidLon</strong></td><td>VARCHAR</td><td>-159.7059653</td><td>Longitude of the MSA centroid.</td></tr>
      <tr><td><strong>MSACentroidPoints</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Point&quot;, ...&#125;</code></td><td>GeoJSON object representing the centroid of the MSA.</td></tr>
      <tr><td><strong>MSAPolygon</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;MultiPolygon&quot;, ...&#125;</code></td><td>GeoJSON MultiPolygon representing the boundary of the entire MSA region.</td></tr>
    </tbody>
  </table>

  </div>
</details>


---
<span style={{display: "none"}}>

## States

</span>

<details open>
  <summary><strong>States</strong></summary>

  <div>

  There are 50 states in the U.S. plus the District of Columbia. State populations vary widely — from less than 600,000 (Wyoming) to over 39 million (California). Each state contains multiple counties, tracts, ZIPs, and block groups.

  Use when:
  - High-level comparisons and policy research across the U.S.
  - Benchmarking, legislative analysis, and national roll-ups.

  ### Field Summary

  <table style={{ fontFamily: 'Satoshi, sans-serif', width: '100%', borderCollapse: 'collapse' }}>
    <thead style={{ background: '#f6f8fa' }}>
      <tr>
        <th><strong>Field</strong></th>
        <th><strong>Type</strong></th>
        <th><strong>Example</strong></th>
        <th><strong>Description</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr><td><strong>StateFIPS</strong></td><td>VARCHAR</td><td>54</td><td>2-digit FIPS code representing the state (e.g., 54 = West Virginia).</td></tr>
      <tr><td><strong>StateName</strong></td><td>VARCHAR</td><td>West Virginia</td><td>Full name of the state.</td></tr>
      <tr><td><strong>StateAbbrev</strong></td><td>VARCHAR</td><td>WV</td><td>USPS two-letter abbreviation for the state.</td></tr>
      <tr><td><strong>StateRegion</strong></td><td>VARCHAR</td><td>3</td><td>U.S. Census-defined region code (1–4).</td></tr>
      <tr><td><strong>StateDivision</strong></td><td>VARCHAR</td><td>5</td><td>U.S. Census-defined division code within the region (1–9).</td></tr>
      <tr><td><strong>TotalAreaSqMiles</strong></td><td>FLOAT</td><td>24230.03509</td><td>Total area of the state in square miles (land + water).</td></tr>
      <tr><td><strong>LandSqMiles</strong></td><td>FLOAT</td><td>24041.22995</td><td>Land area in square miles.</td></tr>
      <tr><td><strong>WaterSqMiles</strong></td><td>FLOAT</td><td>188.8051451</td><td>Water area in square miles.</td></tr>
      <tr><td><strong>StateCentroidLat</strong></td><td>VARCHAR</td><td>38.6472854</td><td>Latitude of the geographic centroid of the state.</td></tr>
      <tr><td><strong>StateCentroidLon</strong></td><td>VARCHAR</td><td>-80.6183274</td><td>Longitude of the geographic centroid of the state.</td></tr>
      <tr><td><strong>StateCentroidPoints</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Point&quot;, ...&#125;</code></td><td>GeoJSON object for the centroid of the state.</td></tr>
      <tr><td><strong>StatePolygon</strong></td><td>VARCHAR</td><td><code>&#123;&quot;type&quot;:&quot;Polygon&quot;, ...&#125;</code></td><td>GeoJSON object representing the full state boundary.</td></tr>
    </tbody>
  </table>

  </div>
</details>
