// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 *
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduce',
      items: [
        'introduce/overview',
        'introduce/aboutus'
      ]
    },
    {
      type: 'category',
      label: 'System Overview',
      items: [
        'system-overview/global-architecture',
        'system-overview/design-principles',
      ]
    },
    {
      type: 'category',
      label: 'Scalability',
      items: [
        'scalability/tlpp&foof',
        'scalability/partition&voting',
        'scalability/layer2-tx-flow',
      ]
    },
    {
      type: 'category',
      label: 'Interoperability',
        items: [
          'interoperability/omnichain-verifiable-interoperability',
          'interoperability/cof&osc',
          'interoperability/cross-chain-tx-flow',
        ]
      },
      {
        type: 'category',
        label: 'Fraud Proof & Slashing',
        items: [
          'slashing/slashing-on-ethereum',
          'slashing/fraud-proof',
        ]
      }
    ]
  };

export default sidebars;