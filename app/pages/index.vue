<script setup lang="ts">
// Simple home page without complex content queries
const title = 'Al Rajhi Bank Payment Gateway Documentation'
const description = 'Comprehensive REST API integration guide for Al Rajhi Bank Payment Gateway with examples in PHP, JavaScript, cURL and implementation details.'

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png',
  twitterImage: 'https://ui.nuxt.com/assets/templates/nuxt/docs-light.png'
})
</script>

<template>
  <UPageHero class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950" orientation="horizontal">
    <template #top>
      <div class="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-950"></div>
    </template>

    <template #title>
      Al Rajhi Bank <span class="text-primary">Payment Gateway</span> Documentation
    </template>

    <template #description>
      Complete REST API integration guide for Al Rajhi Bank Payment Gateway. Build secure, PCI-DSS compliant payment solutions with examples in PHP, JavaScript, cURL, detailed transaction flows, and professional implementation guidance for any programming language.
    </template>

    <template #links>
      <UButton to="/introduction" size="xl" trailing-icon="i-lucide-arrow-right">
        Get Started
      </UButton>
      <UButton
        icon="i-lucide-download"
        color="neutral"
        variant="outline"
        size="xl"
        to="/getting-started/test-instruments"
      >
        Test Credentials
      </UButton>
    </template>

    <template #default>
      <UCodeGroup>
        <div title="PHP">
          <pre><code class="language-php">&lt;?php
// ARB Payment Gateway Integration

// Step 1: Prepare transaction data
$trandata = [
    "amt" => "100.00",
    "action" => "1",  // Purchase
    "password" => "YOUR_TRANPORTAL_PASSWORD",
    "id" => "YOUR_TRANPORTAL_ID",
    "currencyCode" => "682",  // SAR
    "trackId" => "ORDER_" . time(),
    "responseURL" => "https://yourdomain/callback.php"
];

// Step 2: Encrypt using AES-256-CBC with IV "PGKEYENCDECIVSPC"
$encrypted = arbEncrypt($trandata, "YOUR_RESOURCE_KEY");

// Step 3: Send to ARB Payment Gateway
$request = [
    "id" => "YOUR_TRANPORTAL_ID",
    "trandata" => $encrypted,
    "responseURL" => "https://yourdomain/callback.php"
];</code></pre>
        </div>

        <div title="JavaScript">
          <pre><code class="language-javascript">// ARB Payment Gateway Integration

// Step 1: Prepare transaction data
const trandata = {
    amt: "100.00",
    action: "1",  // Purchase
    password: "YOUR_TRANPORTAL_PASSWORD",
    id: "YOUR_TRANPORTAL_ID",
    currencyCode: "682",  // SAR
    trackId: "ORDER_" + Date.now(),
    responseURL: "https://yourdomain/callback"
};

// Step 2: Encrypt using AES-256-CBC with IV "PGKEYENCDECIVSPC"
const encrypted = await arbEncrypt(trandata, "YOUR_RESOURCE_KEY");

// Step 3: Send to ARB Payment Gateway
const request = {
    id: "YOUR_TRANPORTAL_ID",
    trandata: encrypted,
    responseURL: "https://yourdomain/callback"
};</code></pre>
        </div>

        <div title="cURL">
          <pre><code class="language-bash"># ARB Payment Gateway Integration

# Step 1: Prepare and encrypt transaction data (done separately)
# Step 2: Send to ARB Payment Gateway

curl -X POST "YOUR_ENDPOINT_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "id": "YOUR_TRANPORTAL_ID",
    "trandata": "ENCRYPTED_TRANSACTION_DATA",
    "responseURL": "https://yourdomain/callback",
    "errorURL": "https://yourdomain/callback"
  }'</code></pre>
        </div>
      </UCodeGroup>
    </template>
  </UPageHero>

  <UPageSection class="dark:bg-neutral-950">
    <template #title>
      Integration Methods
    </template>

    <template #description>
      Choose the integration method that best fits your application architecture and security requirements.
    </template>

    <UPageGrid>
      <UPageCard
        title="Bank Hosted Integration"
        description="Redirect customers to Al Rajhi Bank's secure payment page. Highest PCI compliance with minimal integration effort."
        icon="i-lucide-shield-check"
        to="/transaction-flow/bank-hosted-integration"
      />

      <UPageCard
        title="Merchant Hosted Integration"
        description="Collect payment details on your website with full UI control. Requires PCI compliance but offers maximum customization."
        icon="i-lucide-code-2"
        to="/transaction-flow/merchant-hosted"
      />

      <UPageCard
        title="URPAY & Digital Wallets"
        description="Integrate with popular Saudi digital wallets for one-click mobile payments and enhanced user experience."
        icon="i-lucide-smartphone"
        to="/transaction-flow/urpay-integration"
      />

      <UPageCard
        title="Code Examples & Encryption"
        description="Real encryption examples in PHP, JavaScript, cURL and more with AES-256-CBC implementation details."
        icon="i-lucide-terminal"
        to="/transaction-flow/encryption-samples"
      />
    </UPageGrid>
  </UPageSection>

  <UPageSection>
    <template #title>
      Why Choose Al Rajhi Bank Payment Gateway?
    </template>

    <UPageGrid>
      <UPageCard
        title="PCI-DSS Compliant"
        description="Highest security standards with Level 1 PCI-DSS compliance ensuring your customers' data is always protected."
        icon="i-lucide-shield"
      />

      <UPageCard
        title="Saudi Market Leader"
        description="Trusted by thousands of Saudi businesses with deep understanding of local payment preferences and regulations."
        icon="i-lucide-building-2"
      />

      <UPageCard
        title="Multiple Payment Methods"
        description="Support for credit cards, debit cards, URPAY, Apple Pay, and other popular payment methods in Saudi Arabia."
        icon="i-lucide-credit-card"
      />

      <UPageCard
        title="24/7 Support"
        description="Dedicated technical support team available around the clock to help with integration and troubleshooting."
        icon="i-lucide-life-buoy"
      />
    </UPageGrid>
  </UPageSection>
</template>
