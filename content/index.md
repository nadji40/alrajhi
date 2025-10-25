---
seo:
  title: Al Rajhi Bank Payment Gateway Documentation
  description: Comprehensive REST API integration guide for Al Rajhi Bank Payment Gateway with PHP examples and implementation details.
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---
#top
:hero-background

#title
Al Rajhi Bank [Payment Gateway]{.text-primary} Documentation

#description
Complete REST API integration guide for Al Rajhi Bank Payment Gateway. Build secure, PCI-DSS compliant payment solutions with comprehensive PHP examples, detailed transaction flows, and professional implementation guidance.

#links
  :::u-button
  ---
  to: /introduction
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Get Started
  :::

  :::u-button
  ---
  icon: i-lucide-download
  color: neutral
  variant: outline
  size: xl
  to: /getting-started/test-instruments
  ---
  Test Credentials
  :::

#default
      :::prose-pre
      ---
      code: |
        <?php
        // ARB Payment Gateway Integration (Real Example)
        
        // Step 1: Prepare transaction data
        $trandata = [
            "amt" => "100.00",
            "action" => "1",  // Purchase
            "password" => "YOUR_TRANPORTAL_PASSWORD",
            "id" => "YOUR_TRANPORTAL_ID",
            "currencyCode" => "682",  // SAR
            "trackId" => "ORDER_" . time(),
            "responseURL" => "https://yoursite.com/callback.php"
        ];

        // Step 2: Encrypt using AES-256-CBC
        $encrypted = arbEncrypt($trandata, "YOUR_RESOURCE_KEY");

        // Step 3: Send to ARB Payment Gateway
        $request = [
            "id" => "YOUR_TRANPORTAL_ID",
            "trandata" => $encrypted,
            "responseURL" => "https://yoursite.com/callback.php"
        ];
      filename: arb-integration.php
      ---

      ```php [arb-integration.php]
      <?php
      // ARB Payment Gateway Integration (Real Example)
      
      // Step 1: Prepare transaction data
      $trandata = [
          "amt" => "100.00",
          "action" => "1",  // Purchase
          "password" => "YOUR_TRANPORTAL_PASSWORD",
          "id" => "YOUR_TRANPORTAL_ID",
          "currencyCode" => "682",  // SAR
          "trackId" => "ORDER_" . time(),
          "responseURL" => "https://yoursite.com/callback.php"
      ];

      // Step 2: Encrypt using AES-256-CBC
      $encrypted = arbEncrypt($trandata, "YOUR_RESOURCE_KEY");

      // Step 3: Send to ARB Payment Gateway
      $request = [
          "id" => "YOUR_TRANPORTAL_ID",
          "trandata" => $encrypted,
          "responseURL" => "https://yoursite.com/callback.php"
      ];
      ```
  ```
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Integration Methods

#features
  :::u-page-feature
  ---
  icon: i-lucide-credit-card
  ---
  #title
  Bank Hosted Integration

  #description
  Secure payment processing where customers enter payment details on Al Rajhi Bank's hosted payment page. Ideal for quick implementation with maximum security.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-code
  ---
  #title
  Merchant Hosted Integration

  #description
  Complete control over the payment experience with custom forms. Process payments directly through your application with 3D Secure support.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-smartphone
  ---
  #title
  Mobile & Digital Wallets

  #description
  Support for Apple Pay, URPAY, and other digital wallet solutions. Seamless mobile payment experience for your customers.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-refresh-cw
  ---
  #title
  Recurring Payments

  #description
  Automated subscription and recurring payment processing with card-on-file capabilities. Perfect for subscription-based businesses.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shield-check
  ---
  #title
  PCI-DSS Compliant

  #description
  Industry-standard security with PCI-DSS compliance. Secure encryption and tokenization protect sensitive payment data.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-globe
  ---
  #title
  Multi-Currency Support

  #description
  Process payments in multiple currencies with real-time exchange rates. Support for SAR and international currencies.
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Comprehensive PHP Examples

#links
  :::u-button
  ---
  color: neutral
  size: lg
  to: /transaction-flow/encryption-samples
  trailingIcon: i-lucide-arrow-right
  variant: subtle
  ---
  View Code Examples
  :::

#features
  :::u-page-feature
  ---
  icon: i-simple-icons-php
  ---
  #title
  Complete PHP SDK

  #description
  Ready-to-use PHP classes and methods for all payment operations. Includes encryption, decryption, and API communication.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-key
  ---
  #title
  Encryption & Security

  #description
  Built-in encryption and decryption methods using your Resource Key. Secure data transmission with industry-standard algorithms.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-bug
  ---
  #title
  Error Handling

  #description
  Comprehensive error handling with detailed error codes and descriptions. Debug integration issues quickly and efficiently.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-test-tube
  ---
  #title
  Testing Tools

  #description
  Sandbox environment with test card numbers and credentials. Validate your integration before going live.
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Start Integration
      to: '/introduction'
      trailingIcon: i-lucide-arrow-right
    - label: Download PHP SDK
      to: '/transaction-flow/encryption-samples'
      variant: subtle
      icon: i-lucide-download
  title: Ready to integrate Al Rajhi Bank Payment Gateway?
  description: Join thousands of merchants processing secure payments with Al Rajhi Bank. Get started with our comprehensive documentation and PHP examples.
  class: dark:bg-neutral-950
  ---

  :stars-bg
  :::
::
