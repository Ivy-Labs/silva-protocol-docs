import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '⚡ Fast Finality Confirmation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ~1s deterministic finality for rollups, powered by Ivy’s asynchronous processing pipeline — no more waiting for “secure enough” states.
      </>
    ),
  },
  {
    title: '🔵 Omnichain Verifiable Interoperability',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Standardized cross-chain verification through CoF & OSC proofs - eliminating third-party trust requirements.
      </>
    ),
  },
  {
    title: '🔒 Inherited Ethereum Security',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Restaking-based DPoS network with on-chain fraud proofs & slashing - raising attack costs to economically prohibitive levels.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
