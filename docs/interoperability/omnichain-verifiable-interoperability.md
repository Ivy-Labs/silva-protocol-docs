# Omnichain Verifiable Interoperability

Silva Protocol supports **Omnichain Verifiable Interoperability**.

* **Omnichain**: The coverage extends not only to rollup chains integrated within the Silva Network but also to externally bridged, already-existing chains (such as BSC).  
* **Verifiable：**The core of verifiable cross-chain interoperability lies in relaying the finalized state from the source chain to the destination chain, so that cross-chain operations can be validated based on the state. This is similar to the verification model between Layer 2 and Layer 1\. For example, Optimism relays state of Layer 2 to Layer 1, and after the state reaches finality (e.g., with a 7-day delay), L2 → L1 cross-chain transactions can be verified and executed based on that finalized state.

Silva Protocol provides **different verification methods** depending on the source chain type:

* When the **source chain is Rollup Chain**, interoperability verification is based on the `storageRoot` from the source chain state.  
* When the **source chain is a Bridged Chain**, verification uses the `receiptRoot` from the source chain state (similar to light client-based verification).

Both `storageRoot` and `receiptRoot` are **Merkle Root**, and cross-chain transaction verification can be performed using **Merkle proofs**.