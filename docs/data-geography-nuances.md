---
id: data-geography-nuances
title: Data Geography Nuances
sidebar_label: Data Geography Nuances
hide_title: true
---

<details open>
  <summary><strong>How Are Percentages Calculated?</strong></summary>
  <div>

Percentages in **Census Galaxy** are derived by dividing raw counts by the most appropriate denominator. The Census does not always provide data with a single “standard” denominator, so to ensure accuracy we consulted HUD and the U.S. Census Bureau, and in some cases made judgment calls.

📌 In the data dictionary, each field includes a **Denominator** column that shows which base population was used (e.g., Total Population, Households, Adults 25+, Voting-Age Citizens).

Not all percentages share the same denominator:

- Household income percentages use **Households**
- Education attainment percentages use **Adults 25+**
- Voting metrics use **Citizens of voting age**
- Some fields are based on subsets of the population (e.g., internet access within households, employment among civilian adults)

🔎 **Tip:** Always check the Denominator column before interpreting a percentage. It clarifies the population subset used and ensures you're comparing fields correctly.

  </div>
</details>

<details>
  <summary><strong>Are Percentiles “Good” or “Bad”?</strong></summary>
  <div>

Percentile values are not judgments — they are simply a way to show where a geography falls in relation to others.

- A high percentile means that area is on the upper end of the distribution.
- A low percentile means it’s on the lower end.
- Neither is automatically positive or negative.

For example:

- A high male population percentile just means more men relative to other areas.
- A low poverty percentile shows fewer people in poverty compared to peers.
- A high degree-holders percentile reflects more education in the area — but whether that’s “good” or “bad” depends entirely on your use case.

📌 **Remember:** Percentiles are contextual tools for comparison, not scores of success or failure. They should be combined with your specific goals or models before drawing conclusions.

  </div>
</details>
