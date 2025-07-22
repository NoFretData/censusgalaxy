---
      id: 'geographies',
      label: 'Geographies',
---


import '../styles/satoshi.css'

# Geographies Overview

## Blockgroup

A Block Group is the smallest geography for which the U.S. Census Bureau publishes sample data. It typically includes 600 to 3,000 people and nests within a Census Tract. There are around 242,000 Block Groups in the United States.

Ideal for fine-grained demographic targeting and local equity analysis (e.g., identifying underserved areas or planning hyper-local outreach).

Useful when working with sensitive population indicators like income, race, or education at a neighborhood scale.

<table class="hasura-table">
  <thead>
    <tr>
      <th>Column Name</th>
      <th>Type</th>
      <th>Example</th>
      <th>Description</th>
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
    <tr><td><strong>BlockGroupCentroidPoints</strong></td><td>VARCHAR</td><td>{"type":"Point",...}</td><td>GeoJSON representation of the block group centroid.</td></tr>
    <tr><td><strong>BlockGroupPolygon</strong></td><td>VARCHAR</td><td>{"type":"Polygon",...}</td><td>GeoJSON representation of the full boundary of the block group.</td></tr>
  </tbody>
</table>
