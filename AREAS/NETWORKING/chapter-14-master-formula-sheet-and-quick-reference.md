---
id: 5a7d6e4b-9c3f-42a1-b8d4-f8b7e2c9a1d3
title: Chapter 14: Master Formula Sheet and Quick Reference
type: evergreen-note
status: verified
domain: networking
source_type: course
created: 2026-07-28
updated: 2026-07-28
review: 2026-10-28
confidence: 95
version: 1
aliases: ["Formula Sheet", "Networking Cheat Sheet", "Quick Reference"]
tags: [reference, advanced]
owner_moc: Networking MOC
sources: []
related: []
schema_version: 4
---

# Chapter 14: Master Formula Sheet and Quick Reference

## SECTION 1: MASTER FORMULA SHEET

### Data Communication Formulas

**Transmission Delay ($T_t$)**
- **Formula:** $T_t = \frac{L}{B}$
- **Definitions:** $L$ = packet length in bits, $B$ = bandwidth (link capacity) in bits per second (bps).
- **Units:** Seconds (s).
- **Example:** $1 \text{ KB}$ packet over a $1 \text{ Mbps}$ link $\rightarrow T_t = \frac{1000 \times 8}{10^6} = 0.008 \text{ s}$ or $8 \text{ ms}$.

**Propagation Delay ($T_p$)**
- **Formula:** $T_p = \frac{d}{v}$
- **Definitions:** $d$ = physical distance in meters, $v$ = propagation speed in meters/second.
  - Copper: $v \approx 2 \times 10^8 \text{ m/s}$
  - Fiber Optic: $v \approx 2 \times 10^8 \text{ m/s}$
  - Free space / Vacuum: $v = 3 \times 10^8 \text{ m/s}$
- **Units:** Seconds (s).
- **Example:** $2000 \text{ km}$ fiber link $\rightarrow T_p = \frac{2 \times 10^6}{2 \times 10^8} = 0.01 \text{ s}$ or $10 \text{ ms}$.

**Total Latency ($T_{total}$)**
- **Formula:** $T_{total} = T_t + T_p + T_{queue} + T_{process}$
- **Definitions:** $T_t$ = transmission delay, $T_p$ = propagation delay, $T_{queue}$ = queuing delay at routers, $T_{process}$ = processing delay.
- **Units:** Seconds (s).
- **Example:** $8 \text{ ms} + 10 \text{ ms} + 2 \text{ ms} + 1 \text{ ms} = 21 \text{ ms}$ total end-to-end delay.

**Round Trip Time (RTT)**
- **Formula:** $RTT \approx 2 \times T_p$ (simplified, assuming symmetric paths and negligible processing/transmission/queueing delays).
- **Definitions:** Total time for a signal to reach destination and return.
- **Units:** Seconds (s).
- **Example:** $10 \text{ ms}$ one-way propagation delay $\rightarrow RTT = 20 \text{ ms}$.

**Bandwidth-Delay Product (BDP)**
- **Formula:** $BDP = B \times RTT$
- **Definitions:** The maximum amount of unacknowledged data that can be "in flight" on the network.
- **Units:** Bits (b).
- **Example:** $1 \text{ Gbps}$ link with $20 \text{ ms RTT} \rightarrow BDP = 10^9 \times 0.02 = 2 \times 10^7 \text{ bits}$ (approx $2.5 \text{ MB}$).

**Efficiency Ratio ($a$)**
- **Formula:** $a = \frac{T_p}{T_t}$
- **Definitions:** Ratio of propagation delay to transmission delay.
- **Units:** Dimensionless.
- **Example:** $10 \text{ ms}$ propagation and $2 \text{ ms}$ transmission $\rightarrow a = 5$.

---

### Topology Formulas (Mesh)

**Links in Full Mesh ($L$)**
- **Formula:** $L = \frac{N(N-1)}{2}$
- **Definitions:** $N$ = total number of nodes in the network.
- **Example:** $6$ nodes $\rightarrow L = \frac{6 \times 5}{2} = 15$ physical links required.

**Ports per Device ($P$)**
- **Formula:** $P = N - 1$
- **Definitions:** Number of I/O ports needed on each node in a full mesh.
- **Example:** $6$ nodes $\rightarrow$ each node requires $5$ dedicated ports.

---

### ALOHA Throughput Formulas

**Pure ALOHA Throughput ($S_{pure}$)**
- **Formula:** $S = G \cdot e^{-2G}$
- **Definitions:** $G$ = offered load (total number of transmission attempts per frame time).
- **Maximum:** Occurs at $G = 0.5$. Maximum throughput $S_{max} \approx 0.184$ or $18.4\%$.
- **Example:** If load $G=0.5$, network successfully delivers $18.4\%$ of channel capacity.

**Slotted ALOHA Throughput ($S_{slotted}$)**
- **Formula:** $S = G \cdot e^{-G}$
- **Definitions:** $G$ = offered load per slot time.
- **Maximum:** Occurs at $G = 1.0$. Maximum throughput $S_{max} \approx 0.368$ or $36.8\%$.
- **Example:** Slotted ALOHA is exactly $2\times$ more efficient than Pure ALOHA because it halves the vulnerable time window.

---

### CSMA/CD Formulas

**Minimum Frame Length ($L_{min}$)**
- **Formula:** $L_{min} = 2 \times T_p \times B$
- **Condition:** Sender must still be transmitting the frame when the collision notification arrives ($T_t \geq 2 \times T_p$).
- **Definitions:** $T_p$ = maximum one-way propagation delay, $B$ = bandwidth.
- **Units:** Bits (b).
- **Example:** Standard Ethernet ($10 \text{ Mbps}$, max propagation round trip $25.6 \text{ \mu s}$) $\rightarrow L_{min} = 25.6 \times 10^{-6} \times 10^7 = 256 \text{ bits} = 32 \text{ bytes}$. (Note: Actual IEEE 802.3 standard pads this to $64 \text{ bytes}$ for safety margins and interframe gaps).

---

### Error Detection & Correction Formulas

**Parity Bit**
- **Formula:** Adds $1$ redundancy bit per block.
- **Capability:** Detects any odd number of errors. Cannot detect even number of errors. Cannot correct.

**Hamming Redundancy Constraint**
- **Formula:** $2^r \geq m + r + 1$
- **Definitions:** $m$ = number of data bits, $r$ = number of redundancy (parity) bits.
- **Example Values:**
  - $m=1 \rightarrow r=2$ (codeword = 3 bits)
  - $m=4 \rightarrow r=3$ (codeword = 7 bits)
  - $m=8 \rightarrow r=4$ (codeword = 12 bits)
  - $m=11 \rightarrow r=4$ (codeword = 15 bits)

**Hamming Distance Requirements ($d_{min}$)**
- **For Detection:** $d_{min} \geq d + 1$ (To detect $d$ errors, minimum Hamming distance must be $d+1$).
- **For Correction:** $d_{min} \geq 2d + 1$ (To correct $d$ errors, minimum Hamming distance must be $2d+1$).
- **Example:** A standard single-error correcting Hamming code requires $d_{min} = 3$.

---

### Sliding Window Protocol Formulas

**Stop-and-Wait Efficiency ($\eta_{SAW}$)**
- **Formula:** $\eta = \frac{1}{1 + 2a}$
- **Definitions:** $a = \frac{T_p}{T_t}$.
- **Example:** If $a=12.5$, efficiency $\eta = \frac{1}{1 + 25} = 3.85\%$.

**Go-Back-N (GBN) Efficiency ($\eta_{GBN}$)**
- **Formulas:**
  - If window size $N \geq 1 + 2a$: $\eta = 1$ ($100\%$ efficient)
  - If window size $N < 1 + 2a$: $\eta = \frac{N}{1 + 2a}$
- **Definitions:** $N$ = sender window size.

**Selective Repeat (SR) Efficiency ($\eta_{SR}$)**
- **Formula:** Same efficiency formula as GBN.
  - If $N \geq 1 + 2a$: $\eta = 1$
  - If $N < 1 + 2a$: $\eta = \frac{N}{1 + 2a}$

**Window Size Constraints (Sequence Numbers)**
- **GBN Constraint:** $W_{GBN} \leq 2^m - 1$
- **SR Constraint:** $W_{SR} \leq 2^{m-1}$
- **Definitions:** $m$ = number of bits used for sequence numbers.
- **Example:** If $m=3$ (sequence numbers 0-7), GBN max window is 7, SR max window is 4.

---

### IP Addressing Formulas

**Usable Hosts per Subnet**
- **Formula:** $\text{Hosts} = 2^n - 2$
- **Definitions:** $n$ = number of host bits remaining. Subtract 2 for the Network Address (all 0s) and Broadcast Address (all 1s).
- **Example:** $/24$ subnet has $8$ host bits $\rightarrow 2^8 - 2 = 254$ usable hosts.

**Total Addresses per Subnet**
- **Formula:** $\text{Total} = 2^n$

**Network & Broadcast Addresses**
- **Network Address:** $\text{IP Address} \text{ AND } \text{Subnet Mask}$ (bitwise operation).
- **Broadcast Address:** $\text{IP Address} \text{ OR } (\text{NOT Subnet Mask})$ (bitwise operation).

**Number of Created Subnets**
- **Formula:** $\text{Subnets} = 2^s$
- **Definitions:** $s$ = number of bits borrowed from the host portion.

---

### IP Fragmentation Formulas

**Maximum Data per Fragment ($D_{max}$)**
- **Formula:** $D_{max} = \text{MTU} - \text{IP Header Size}$
- **Constraint:** $D_{max}$ MUST be a multiple of 8 bytes (except for the last fragment).
- **Example:** Ethernet $\text{MTU} = 1500 \text{ bytes}$, $\text{IPv4 Header} = 20 \text{ bytes} \rightarrow D_{max} = 1480 \text{ bytes}$ of data per fragment.

**Number of Fragments ($n$)**
- **Formula:** $n = \lceil \frac{\text{Total Payload Data}}{D_{max}} \rceil$
- **Example:** $4000 \text{ bytes}$ of data $\rightarrow \lceil \frac{4000}{1480} \rceil = 3$ fragments.

**Fragment Offset Field**
- **Formula:** $\text{Offset} = \frac{\text{First Byte of Fragment Data}}{8}$
- **Definitions:** The offset field in the IPv4 header is scaled by 8 bytes to save space. Multiply offset value by 8 to get actual byte position.
- **Example:** Second fragment starts at byte $1480 \rightarrow \text{Offset} = \frac{1480}{8} = 185$.

---

### Network Delay Worked Examples

**Example 1: Stop-and-Wait vs GBN Efficiency**
- **Given:** $1 \text{ Mbps}$ link, $1 \text{ KB}$ packet, $100 \text{ ms}$ one-way propagation delay.
- **Calculations:**
  - $T_t = \frac{1000 \times 8}{10^6} = 8 \text{ ms}$
  - $T_p = 100 \text{ ms}$
  - $a = \frac{100}{8} = 12.5$
  - Stop-and-Wait $\eta = \frac{1}{1 + 2(12.5)} = \frac{1}{26} \approx 3.85\%$
  - GBN with $N=26$: $\eta = \frac{26}{1+25} = 100\%$

**Example 2: Bandwidth-Delay Product**
- **Given:** $1 \text{ Gbps}$ connection, $20 \text{ ms}$ RTT.
- **Calculations:**
  - $BDP = 1,000,000,000 \times 0.020 = 20,000,000 \text{ bits}$
  - In bytes: $\frac{20,000,000}{8} = 2.5 \text{ MB}$.
  - Conclusion: To achieve maximum throughput, the TCP window size must be at least $2.5 \text{ MB}$ to keep the pipe full.

---

### TCP Timers

**Smoothed RTT (SRTT)**
- **Formula:** $SRTT_{new} = (1 - \alpha) \times SRTT_{old} + \alpha \times RTT_{sample}$
- **Standard Constant:** $\alpha = 0.125$ ($1/8$)

**RTT Variance (RTTVAR)**
- **Formula:** $RTTVAR_{new} = (1 - \beta) \times RTTVAR_{old} + \beta \times |RTT_{sample} - SRTT_{old}|$
- **Standard Constant:** $\beta = 0.25$ ($1/4$)

**Retransmission Timeout (RTO)**
- **Formula:** $RTO = SRTT + \max(G, 4 \times RTTVAR)$
- **Simplified Formula:** $RTO = SRTT + 4 \times RTTVAR$
- **Definitions:** Dynamic timer to determine when to retransmit a lost TCP segment.

---

## SECTION 2: MASTER COMPARISON TABLES

### 1. OSI vs TCP/IP Model Mapping
| OSI Layer (Layer Number) | OSI Functionality | TCP/IP Model Layer | TCP/IP Equivalent Protocols |
|---|---|---|---|
| Application (L7) | Network process to application | Application | HTTP, FTP, SMTP, DNS, SSH |
| Presentation (L6) | Data formatting, encryption, compression | Application | SSL/TLS, JPEG, ASCII |
| Session (L5) | Interhost communication, session management | Application | NetBIOS, PPTP |
| Transport (L4) | End-to-end connections, reliability, ports | Transport | TCP, UDP, SCTP |
| Network (L3) | Logical addressing, routing, path determination | Internet | IPv4, IPv6, ICMP, IPsec, OSPF |
| Data Link (L2) | MAC addressing, error detection, framing | Network Access / Link | Ethernet, 802.11 Wi-Fi, PPP, ARP |
| Physical (L1) | Media, signal, binary transmission | Network Access / Link | Cables, Hubs, Repeaters, Radio waves |

### 2. TCP vs UDP
| Feature | TCP (Transmission Control Protocol) | UDP (User Datagram Protocol) |
|---|---|---|
| **Connection Type** | Connection-oriented (3-way handshake) | Connectionless (no handshake) |
| **Reliability** | Highly reliable (guaranteed delivery) | Unreliable (best-effort delivery) |
| **Header Size** | 20 bytes (up to 60 bytes with options) | 8 bytes (fixed size) |
| **Speed/Overhead** | Slower, high overhead | Fast, low overhead |
| **Data Sequencing** | Yes (reorders out-of-order packets) | No (application must handle ordering) |
| **Retransmissions** | Yes (lost packets are retransmitted) | No (lost packets remain lost) |
| **Congestion Control** | Yes (AIMD, slow start, fast retransmit) | No (can flood the network) |
| **Flow Control** | Yes (Sliding window mechanism) | No (sender transmits at will) |
| **Error Checking** | Extensive (Header + Data Checksum) | Basic (Header + Data Checksum, optional in IPv4) |
| **Delivery Mechanism** | Byte-stream | Datagrams / discrete packets |
| **Statefulness** | Stateful (tracks connection state) | Stateless |
| **Broadcast/Multicast** | No (Unicast only) | Yes (Supports Unicast, Broadcast, Multicast) |
| **Typical Use Cases** | Web (HTTP), Email, File Transfer (FTP), SSH | DNS, VoIP, Video Streaming, Gaming, SNMP |
| **Protocol Number** | 6 (in IP header) | 17 (in IP header) |
| **Handshake Process** | SYN $\rightarrow$ SYN-ACK $\rightarrow$ ACK | None |
| **Teardown Process** | FIN $\rightarrow$ ACK $\rightarrow$ FIN $\rightarrow$ ACK | None |

### 3. IPv4 vs IPv6
| Feature | IPv4 | IPv6 |
|---|---|---|
| **Address Length** | 32 bits (4 bytes) | 128 bits (16 bytes) |
| **Address Format** | Dotted Decimal (e.g., `192.168.1.1`) | Hexadecimal (e.g., `2001:0db8::1`) |
| **Address Space** | $2^{32}$ (approx 4.3 billion) | $2^{128}$ (approx $3.4 \times 10^{38}$) |
| **Header Size** | Variable (20 to 60 bytes) | Fixed (40 bytes) |
| **Header Complexity** | 14 fields, includes checksum | 8 fields, simpler, no checksum |
| **IPsec Support** | Optional, added on | Built-in (mandatory support in standard, optional use) |
| **Configuration** | DHCP or manual configuration | SLAAC (Stateless) or DHCPv6 (Stateful) |
| **Broadcast Support** | Yes (e.g., `255.255.255.255`) | No (uses Multicast instead) |
| **Fragmentation** | Handled by sender and forwarding routers | Handled by sender ONLY |
| **Quality of Service (QoS)** | Type of Service (ToS) / Differentiated Services | Traffic Class and Flow Label |
| **Address Resolution** | ARP (Address Resolution Protocol) | NDP (Neighbor Discovery Protocol) uses ICMPv6 |
| **Loopback Address** | `127.0.0.1` | `::1` |
| **Local Subnet Address** | APIPA (`169.254.x.x`) | Link-Local (`fe80::/10`) |

### 4. Circuit Switching vs Packet Switching vs Message Switching
| Feature | Circuit Switching | Packet Switching | Message Switching |
|---|---|---|---|
| **Path Established** | Yes, prior to transmission | No fixed path (routed per packet) | No fixed path (store-and-forward) |
| **Resource Allocation** | Dedicated capacity | Shared capacity (statistical multiplexing)| Shared capacity |
| **Data Unit Size** | Continuous stream | Fixed or variable small packets | Entire message (variable, often large) |
| **Delay** | Setup delay, negligible transmission delay | Queuing delay, transmission delay | High storage delay at each hop |
| **Efficiency** | Low (wasted if no data is sent) | High (dynamic sharing of bandwidth) | Moderate |
| **Failure Handling** | Poor (call drops if link fails) | Excellent (dynamic rerouting) | Good (reroutes next message) |
| **Use Cases** | Legacy PSTN telephone calls | Internet, modern VoIP, data networks | Legacy telegraph, older email relays |

### 5. Distance Vector vs Link State Routing
| Feature | Distance Vector (DVR) | Link State (LSR) |
|---|---|---|
| **Algorithm Used** | Bellman-Ford | Dijkstra's Shortest Path First (SPF) |
| **Knowledge Shared** | Entire routing table | Only state of directly connected links |
| **Who Receives Updates** | Only directly connected neighbors | Entire routing domain (flooding via LSA) |
| **Update Frequency** | Periodic (e.g., every 30s for RIP) | Triggered by topology changes |
| **View of Topology** | "Routing by rumor" (no full map) | Complete, accurate map of entire network |
| **CPU/Memory Usage** | Low | High (must compute SPF tree) |
| **Convergence Speed** | Slow (susceptible to routing loops) | Fast (no routing loops) |
| **Loop Prevention** | Split Horizon, Poison Reverse, TTL | Sequence numbers, inherently loop-free |
| **Hierarchical Design** | Flat network | Hierarchical (Areas, e.g., OSPF Area 0) |
| **Examples** | RIP v1/v2, IGRP | OSPF, IS-IS |
| **Hybrid Example** | EIGRP (Advanced Distance Vector) | - |

### 6. Hub vs Bridge vs Switch vs Router
| Feature | Hub | Bridge | Switch | Router |
|---|---|---|---|---|
| **OSI Layer** | Layer 1 (Physical) | Layer 2 (Data Link) | Layer 2 (Data Link) | Layer 3 (Network) |
| **Addressing Used** | None (blindly repeats) | MAC Addresses | MAC Addresses | IP Addresses |
| **Collision Domains** | 1 total | 1 per port | 1 per port | 1 per port |
| **Broadcast Domains** | 1 total | 1 total | 1 total (unless VLANs used) | 1 per port |
| **Forwarding Method** | Floods all ports | Software-based MAC table | Hardware-based MAC table (ASIC) | IP Routing Table |
| **Intelligence** | Dumb repeater | Basic filtering | Advanced VLANs, STP | Path determination, security |
| **Port Density** | Low (4-16) | Very Low (2-4) | High (24-48+) | Medium (2-8 typical LAN router) |
| **Duplex Mode** | Half-Duplex | Half or Full | Full-Duplex | Full-Duplex |

### 7. CSMA/CD vs CSMA/CA
| Feature | CSMA/CD (Collision Detection) | CSMA/CA (Collision Avoidance) |
|---|---|---|
| **Primary Standard** | IEEE 802.3 (Ethernet) | IEEE 802.11 (Wi-Fi) |
| **Environment** | Wired networks | Wireless networks |
| **Core Principle** | Detect collisions and abort | Prevent collisions before they happen |
| **Action on Collision** | Stop transmission, send JAM signal, wait random time | Wait for ACK, if no ACK, assume collision, wait random time |
| **Channel Reservation** | Not used | Uses RTS/CTS (Request/Clear to Send) |
| **Hidden Node Problem** | Not applicable in wired medium | Highly applicable; solved by RTS/CTS |
| **Frame Overhead** | Low | High (ACKs, IFS, RTS/CTS overhead) |
| **Transmission Cost** | Collisions are cheap to detect | Collisions are expensive (cannot detect while sending) |

### 8. Stop-and-Wait vs Go-Back-N vs Selective Repeat
| Feature | Stop-and-Wait | Go-Back-N (GBN) | Selective Repeat (SR) |
|---|---|---|---|
| **Sender Window Size ($W_s$)**| 1 | $N$ (where $N \leq 2^m - 1$) | $N$ (where $N \leq 2^{m-1}$) |
| **Receiver Window Size ($W_r$)**| 1 | 1 | $N$ (where $N \leq 2^{m-1}$) |
| **Timer** | One timer for the single frame | One timer for the oldest unacked frame | One timer for EVERY unacked frame |
| **ACK Type** | Individual ACK | Cumulative ACK | Individual ACK |
| **Out of Order Handling** | Discards | Discards all subsequent frames | Buffers out-of-order frames |
| **Action on Loss** | Resends 1 frame | Resends ALL frames in current window | Resends ONLY the lost frame |
| **Efficiency** | Extremely low on high BDP links | High, but wastes bandwidth on errors | Highest, handles errors efficiently |
| **Implementation Complexity** | Very Low | Moderate | High (requires sorting/buffering) |

### 9. Symmetric vs Asymmetric Encryption
| Feature | Symmetric Encryption | Asymmetric (Public Key) Encryption |
|---|---|---|
| **Key Type** | Single shared key (Secret Key) | Key pair (Public Key + Private Key) |
| **Speed** | Very Fast (hardware optimized) | Slow (mathematically intensive) |
| **Key Distribution** | Difficult (out-of-band required) | Easy (public key can be shared openly) |
| **Confidentiality** | Yes | Yes |
| **Non-Repudiation** | No (both parties have the same key) | Yes (only owner has private key) |
| **Digital Signatures** | Cannot provide | Yes (encrypt hash with private key) |
| **Primary Use Case** | Bulk data encryption (e.g., payload) | Key exchange, digital certificates, signatures |
| **Common Algorithms** | AES, DES, 3DES, ChaCha20 | RSA, ECC, Diffie-Hellman, ElGamal |

### 10. IPsec Transport Mode vs Tunnel Mode
| Feature | Transport Mode | Tunnel Mode |
|---|---|---|
| **Encapsulation** | Encrypts payload only, retains original IP header | Encrypts entire original packet (header + payload) |
| **New IP Header** | No | Yes (adds new outer IP header) |
| **Typical Use Case** | End-to-end communication (Host-to-Host) | VPN gateways (Site-to-Site, Host-to-Gateway) |
| **Overhead** | Lower | Higher (extra IP header) |
| **NAT Compatibility** | Usually fails unless NAT-T is used | Better, especially between gateways |

### 11. IPsec AH vs ESP
| Feature | AH (Authentication Header) | ESP (Encapsulating Security Payload) |
|---|---|---|
| **Protocol Number** | 51 | 50 |
| **Confidentiality (Encryption)** | No | Yes |
| **Data Integrity** | Yes (entire packet) | Yes (ESP header and payload, not outer IP) |
| **Authentication** | Yes | Yes |
| **NAT Compatibility** | Extremely poor (modifies IP header) | Good (especially with NAT-T on UDP 4500) |
| **Modern Usage** | Rarely used, obsolete in most designs | Industry standard for VPNs |

### 12. WEP vs WPA vs WPA2 vs WPA3
| Feature | WEP (1997) | WPA (2003) | WPA2 (2004) | WPA3 (2018) |
|---|---|---|---|---|
| **Encryption Algorithm** | RC4 | RC4 | AES | AES |
| **Integrity Check** | CRC-32 (Weak) | TKIP (MIC) | CCMP | GCMP |
| **Key Management** | Static, manual | EAP / Pre-Shared Key | EAP / Pre-Shared Key | SAE (Simultaneous Auth of Equals) |
| **Security Status** | Broken, easily cracked in minutes | Deprecated, vulnerable | Strong, but vulnerable to KRACK | Highly Secure, immune to offline dictionary attacks |
| **Forward Secrecy** | No | No | No (in PSK mode) | Yes (via SAE handshake) |
| **Management Frames** | Unprotected | Unprotected | Optional PMF (802.11w) | Mandatory PMF |
| **Open Network Security** | None | None | None | OWE (Opportunistic Wireless Encryption) |
| **Key Length** | 40-bit or 104-bit | 128-bit | 128-bit (256-bit in enterprise) | 192-bit (Enterprise mode) |

### 13. Static Routing vs Dynamic Routing
| Feature | Static Routing | Dynamic Routing |
|---|---|---|
| **Configuration** | Manual entry by admin | Automatic via routing protocols |
| **Adaptability** | None (fails if link goes down) | High (automatically reroutes around failures) |
| **Overhead (CPU/RAM/BW)**| Very Low | Low to High (depends on protocol) |
| **Security** | Most secure (no protocol to attack) | Needs authentication to secure updates |
| **Network Size Suitability**| Small networks or stub networks | Medium to large enterprise/ISP networks |
| **Administrative Distance** | 1 (highly trusted) | 90-120 (less trusted than static) |

### 14. Classful vs Classless Addressing
| Feature | Classful Addressing | Classless Addressing (CIDR) |
|---|---|---|
| **Subnet Boundaries** | Fixed at /8, /16, /24 | Variable, any bit boundary |
| **Classes** | Class A, B, C, D, E | No classes, uses prefix notation (e.g., /22) |
| **Routing Protocol Support**| RIPv1, IGRP (Legacy) | RIPv2, OSPF, EIGRP, BGP (Modern) |
| **Address Waste** | Extremely high | Highly efficient via VLSM |
| **Subnet Mask Transmission**| Not sent in routing updates | Sent explicitly in routing updates |
| **Default Masks** | A=255.0.0.0, B=255.255.0.0, C=255.255.255.0 | Custom (e.g., 255.255.252.0) |

### 15. Pure ALOHA vs Slotted ALOHA vs CSMA
| Feature | Pure ALOHA | Slotted ALOHA | CSMA |
|---|---|---|---|
| **Time Discretization** | Continuous (transmit anytime) | Discrete (transmit only at slot start)| Continuous (listens first) |
| **Collision Vulnerability** | 2 frame times ($2T_t$) | 1 frame time ($T_t$) | Propagation delay time ($T_p$) |
| **Maximum Efficiency** | $18.4\%$ | $36.8\%$ | Highly dependent on $a$ (often > 50%)|
| **Carrier Sensing** | No | No | Yes (Listen before talk) |
| **Synchronization** | None | Requires global clock/sync | None |

### 16. POP3 vs IMAP
| Feature | POP3 (Post Office Protocol v3) | IMAP (Internet Message Access Protocol) |
|---|---|---|
| **Port (Cleartext/Secure)**| TCP 110 / TCP 995 (POP3S) | TCP 143 / TCP 993 (IMAPS) |
| **Default Behavior** | Download and delete from server | Syncs headers, leaves mail on server |
| **Multi-device Access** | Poor (email isolated to one device) | Excellent (state synced across all devices) |
| **Storage Requirement** | High local storage, low server storage | Low local storage, high server storage |
| **Folder Organization** | Local only | Server-side folders (mirrored locally) |
| **Bandwidth Usage** | Downloads entire message | Downloads headers first, then content |
| **Offline Viewing** | Excellent (fully downloaded) | Requires explicit caching |
| **Search Capability** | Client-side only | Server-side search capabilities |

### 17. Traditional 3-Tier vs Spine-Leaf Data Center
| Feature | Traditional 3-Tier | Spine-Leaf (Clos Architecture) |
|---|---|---|
| **Topology Layers** | Core, Aggregation/Distribution, Access | Spine layer, Leaf layer |
| **Traffic Optimization** | North-South (Client to Server) | East-West (Server to Server) |
| **Path Count** | Often single/dual active paths via STP | All paths active via ECMP (Equal Cost Multi-Path)|
| **Latency/Hops** | Variable (depends on placement) | Consistent (always exactly 2 hops between leafs)|
| **Scalability** | Scale-up (buy bigger chassis switches) | Scale-out (add more spine or leaf switches) |
| **Protocol** | L2 (Spanning Tree Protocol) | L3 (BGP/OSPF with VXLAN overlay) |

### 18. IaaS vs PaaS vs SaaS
| Feature | IaaS (Infrastructure) | PaaS (Platform) | SaaS (Software) |
|---|---|---|---|
| **You Manage** | OS, Middleware, Runtime, Data, Apps | Apps, Data | Nothing (just configuration) |
| **Provider Manages** | Virtualization, Servers, Storage, Network | OS, Middleware, Runtime, Servers, Net | Applications, Data, Runtime, OS, Net |
| **Target User** | SysAdmins, Network Architects | Developers | End Users |
| **Examples** | AWS EC2, Azure VMs, GCP Compute | Heroku, AWS Elastic Beanstalk | Salesforce, Office 365, Gmail |

### 19. Security Groups vs NACLs
| Feature | Security Group (SG) | Network ACL (NACL) |
|---|---|---|
| **Scope** | Instance-level (Virtual NIC) | Subnet-level |
| **Statefulness** | Stateful (return traffic automatically allowed) | Stateless (must explicitly allow return traffic) |
| **Rule Types** | Allow rules only (default deny) | Allow AND Deny rules |
| **Evaluation** | Evaluates all rules before deciding | Evaluates rules in numerical order (top-down) |
| **Use Case** | Primary defense for specific applications | Secondary defense / subnet boundaries |

### 20. IntServ vs DiffServ QoS
| Feature | IntServ (Integrated Services) | DiffServ (Differentiated Services) |
|---|---|---|
| **Mechanism** | Hard reservations (per-flow state) | Soft prioritization (class-based) |
| **Signaling Protocol** | RSVP (Resource Reservation Protocol) | None (tags IP header DSCP field) |
| **Scalability** | Poor (routers must track every flow) | Excellent (routers only look at DSCP tag) |
| **Guarantee** | Absolute strict guarantees | Statistical preference (relative priority)|
| **Implementation** | Rarely used in modern large networks | Industry standard for modern QoS |

---

## SECTION 3: MASTER PORT REFERENCE TABLE

| Port | Protocol | Service | Layer | Transport | Security Status |
|---|---|---|---|---|---|
| **20** | FTP (Data) | File Transfer Protocol Data | Application | TCP | Cleartext |
| **21** | FTP (Control)| File Transfer Protocol Control | Application | TCP | Cleartext |
| **22** | SSH | Secure Shell / SFTP / SCP | Application | TCP | **Encrypted** |
| **23** | Telnet | Unencrypted terminal emulation | Application | TCP | Cleartext (Vulnerable) |
| **25** | SMTP | Simple Mail Transfer Protocol | Application | TCP | Cleartext |
| **53** | DNS | Domain Name System | Application | UDP / TCP | Cleartext (unless DoH/DoT) |
| **67** | DHCP (Server)| Dynamic Host Configuration Protocol | Application | UDP | Cleartext |
| **68** | DHCP (Client)| Dynamic Host Configuration Protocol | Application | UDP | Cleartext |
| **69** | TFTP | Trivial File Transfer Protocol | Application | UDP | Cleartext |
| **80** | HTTP | Hypertext Transfer Protocol | Application | TCP | Cleartext |
| **110** | POP3 | Post Office Protocol v3 | Application | TCP | Cleartext |
| **119** | NNTP | Network News Transfer Protocol | Application | TCP | Cleartext |
| **123** | NTP | Network Time Protocol | Application | UDP | Cleartext |
| **135** | RPC | Windows RPC End-point Mapper | Application | TCP/UDP | Cleartext |
| **137-139** | NetBIOS | Windows NetBIOS Name/Datagram/Session| Session | TCP/UDP | Cleartext |
| **143** | IMAP | Internet Message Access Protocol | Application | TCP | Cleartext |
| **161** | SNMP | Simple Network Management Protocol | Application | UDP | Cleartext (v1/v2c), **Encrypted (v3)**|
| **162** | SNMPTRAP | SNMP Trap (alerts to manager) | Application | UDP | Cleartext (v1/v2c), **Encrypted (v3)**|
| **179** | BGP | Border Gateway Protocol | Application | TCP | Cleartext (Auth available)|
| **389** | LDAP | Lightweight Directory Access Protocol | Application | TCP | Cleartext |
| **443** | HTTPS | HTTP Secure (SSL/TLS) | Application | TCP | **Encrypted** |
| **445** | SMB | Server Message Block (Windows File Share)| Application | TCP | Cleartext |
| **465** | SMTPS | SMTP Secure | Application | TCP | **Encrypted** |
| **500** | ISAKMP | IPsec Key Exchange (IKE) | Application | UDP | **Encrypted/Security**|
| **514** | Syslog | System Logging Protocol | Application | UDP | Cleartext |
| **515** | LPD | Line Printer Daemon | Application | TCP | Cleartext |
| **587** | SMTP (Submit)| SMTP for client submission (STARTTLS) | Application | TCP | **Encrypted (negotiated)**|
| **636** | LDAPS | LDAP over SSL/TLS | Application | TCP | **Encrypted** |
| **993** | IMAPS | IMAP over SSL/TLS | Application | TCP | **Encrypted** |
| **995** | POP3S | POP3 over SSL/TLS | Application | TCP | **Encrypted** |
| **1080** | SOCKS | SOCKS Proxy | Application | TCP | Varies |
| **1433** | MSSQL | Microsoft SQL Server | Application | TCP | Varies |
| **1521** | Oracle | Oracle Database | Application | TCP | Varies |
| **3306** | MySQL | MySQL Database | Application | TCP | Varies |
| **3389** | RDP | Remote Desktop Protocol | Application | TCP | **Encrypted** |
| **5432** | PostgreSQL | PostgreSQL Database | Application | TCP | Varies |
| **5900** | VNC | Virtual Network Computing | Application | TCP | Cleartext |
| **8080** | HTTP Proxy | Alternative HTTP / Web Proxies | Application | TCP | Cleartext |
| **8443** | Alternative | Alternative HTTPS | Application | TCP | **Encrypted** |

---

## SECTION 4: OSI LAYER PROTOCOL REFERENCE

| Layer | Name | Protocols/Technologies | PDU (Protocol Data Unit) | Primary Devices |
|---|---|---|---|---|
| **7** | Application | HTTP, HTTPS, FTP, DNS, SMTP, POP3, IMAP, SSH, DHCP, BGP | Data / Payload | L7 Firewalls, Proxies, Servers, End-host Apps |
| **6** | Presentation| SSL, TLS, ASCII, JPEG, MPEG, GIF, EBCDIC | Data / Payload | End-host OS |
| **5** | Session | NetBIOS, PPTP, RPC, PAP, CHAP, NFS | Data / Payload | End-host OS |
| **4** | Transport | TCP, UDP, SCTP, QUIC | Segment (TCP), Datagram (UDP) | L4 Firewalls, Load Balancers |
| **3** | Network | IPv4, IPv6, ICMP, IPsec, IGMP, OSPF, EIGRP, RIP | Packet / Datagram | Routers, L3 Switches |
| **2** | Data Link | Ethernet (802.3), Wi-Fi (802.11), PPP, HDLC, Frame Relay, ARP, STP | Frame | Switches, Bridges, Access Points, NICs |
| **1** | Physical | 1000BASE-T, SONET, OTN, Bluetooth PHY, USB, RJ-45, Fiber Optic | Bit / Symbol | Hubs, Repeaters, Cables, Transceivers, Modems |

---

## SECTION 5: SUBNETTING QUICK REFERENCE

### CIDR Reference Table (/8 to /30)
| CIDR | Subnet Mask | Wildcard Mask | Total Addresses ($2^n$) | Usable Hosts ($2^n - 2$) | Block Size (Magic Number) |
|---|---|---|---|---|---|
| **/8** | 255.0.0.0 | 0.255.255.255 | 16,777,216 | 16,777,214 | 1 (in octet 1) |
| **/9** | 255.128.0.0 | 0.127.255.255 | 8,388,608 | 8,388,606 | 128 (in octet 2) |
| **/10**| 255.192.0.0 | 0.63.255.255 | 4,194,304 | 4,194,302 | 64 (in octet 2) |
| **/11**| 255.224.0.0 | 0.31.255.255 | 2,097,152 | 2,097,150 | 32 (in octet 2) |
| **/12**| 255.240.0.0 | 0.15.255.255 | 1,048,576 | 1,048,574 | 16 (in octet 2) |
| **/13**| 255.248.0.0 | 0.7.255.255 | 524,288 | 524,286 | 8 (in octet 2) |
| **/14**| 255.252.0.0 | 0.3.255.255 | 262,144 | 262,142 | 4 (in octet 2) |
| **/15**| 255.254.0.0 | 0.1.255.255 | 131,072 | 131,070 | 2 (in octet 2) |
| **/16**| 255.255.0.0 | 0.0.255.255 | 65,536 | 65,534 | 1 (in octet 2) |
| **/17**| 255.255.128.0 | 0.0.127.255 | 32,768 | 32,766 | 128 (in octet 3) |
| **/18**| 255.255.192.0 | 0.0.63.255 | 16,384 | 16,382 | 64 (in octet 3) |
| **/19**| 255.255.224.0 | 0.0.31.255 | 8,192 | 8,190 | 32 (in octet 3) |
| **/20**| 255.255.240.0 | 0.0.15.255 | 4,096 | 4,094 | 16 (in octet 3) |
| **/21**| 255.255.248.0 | 0.0.7.255 | 2,048 | 2,046 | 8 (in octet 3) |
| **/22**| 255.255.252.0 | 0.0.3.255 | 1,024 | 1,022 | 4 (in octet 3) |
| **/23**| 255.255.254.0 | 0.0.1.255 | 512 | 510 | 2 (in octet 3) |
| **/24**| 255.255.255.0 | 0.0.0.255 | 256 | 254 | 1 (in octet 3) |
| **/25**| 255.255.255.128| 0.0.0.127 | 128 | 126 | 128 (in octet 4) |
| **/26**| 255.255.255.192| 0.0.0.63 | 64 | 62 | 64 (in octet 4) |
| **/27**| 255.255.255.224| 0.0.0.31 | 32 | 30 | 32 (in octet 4) |
| **/28**| 255.255.255.240| 0.0.0.15 | 16 | 14 | 16 (in octet 4) |
| **/29**| 255.255.255.248| 0.0.0.7 | 8 | 6 | 8 (in octet 4) |
| **/30**| 255.255.255.252| 0.0.0.3 | 4 | 2 | 4 (in octet 4) |
| **/31***| 255.255.255.254| 0.0.0.1 | 2 | 2* (Pt-to-Pt) | 2 (in octet 4) |
| **/32***| 255.255.255.255| 0.0.0.0 | 1 | 1* (Host route)| 1 (in octet 4) |
*\* RFC 3021 allows /31 for point-to-point links. /32 represents a single host.*

### Classful Addressing Quick Reference
| Class | Leading Bits | First Octet Range | Default Mask | CIDR | Purpose |
|---|---|---|---|---|---|
| **A** | `0` | 1 - 126 | 255.0.0.0 | /8 | Massive Networks |
| **B** | `10` | 128 - 191 | 255.255.0.0 | /16 | Medium-to-Large Networks |
| **C** | `110` | 192 - 223 | 255.255.255.0 | /24 | Small Networks |
| **D** | `1110` | 224 - 239 | N/A | N/A | Multicast |
| **E** | `1111` | 240 - 255 | N/A | N/A | Experimental/Reserved |
*(Note: 127 is reserved for loopback)*

---

## SECTION 6: IP ADDRESS RANGES REFERENCE

### Special IPv4 Ranges
- **Private Ranges (RFC 1918):**
  - Class A: `10.0.0.0/8` (10.0.0.0 to 10.255.255.255)
  - Class B: `172.16.0.0/12` (172.16.0.0 to 172.31.255.255)
  - Class C: `192.168.0.0/16` (192.168.0.0 to 192.168.255.255)
- **Loopback:** `127.0.0.0/8` (typically `127.0.0.1`)
- **APIPA / Link-Local:** `169.254.0.0/16`
- **Multicast:** `224.0.0.0/4` (224.0.0.0 to 239.255.255.255)
- **Limited Broadcast:** `255.255.255.255`
- **Documentation (RFC 5737):**
  - `192.0.2.0/24` (TEST-NET-1)
  - `198.51.100.0/24` (TEST-NET-2)
  - `203.0.113.0/24` (TEST-NET-3)

### Special IPv6 Ranges
- **Loopback:** `::1/128`
- **Unspecified (Default Route):** `::/128` (or `::/0` for default route)
- **Link-Local:** `fe80::/10`
- **Multicast:** `ff00::/8`
- **Unique Local (Private):** `fc00::/7` (commonly `fd00::/8` in use)
- **Global Unicast (Public):** `2000::/3`

---

## SECTION 7: ROUTING PROTOCOL QUICK REFERENCE

| Protocol | Type | Algorithm | Metric | Max Hops | Update Method | AD | Port/Protocol |
|---|---|---|---|---|---|---|---|
| **Connected** | N/A | N/A | 0 | N/A | N/A | 0 | N/A |
| **Static** | N/A | N/A | 0 | N/A | Manual | 1 | N/A |
| **eBGP** | Path Vector | Best Path | Path Attributes | Unlimited | Triggered (TCP) | 20 | TCP 179 |
| **EIGRP** | Adv. Dist Vector| DUAL | BW, Delay, Load, Rel | 255 | Triggered (Multicast)| 90 | IP Protocol 88 |
| **OSPF** | Link State | Dijkstra SPF | Cost (Bandwidth) | Unlimited | Triggered (LSA flood)| 110 | IP Protocol 89 |
| **IS-IS** | Link State | Dijkstra SPF | Cost | Unlimited | Triggered | 115 | L2 Encap (ISO) |
| **RIPv2** | Distance Vector | Bellman-Ford | Hop Count | 15 (16 is inf)| Periodic (30s) | 120 | UDP 520 |
| **RIPv1** | Distance Vector | Bellman-Ford | Hop Count | 15 (16 is inf)| Periodic (30s, bcast)| 120 | UDP 520 |
| **iBGP** | Path Vector | Best Path | Path Attributes | Unlimited | Triggered (TCP) | 200 | TCP 179 |

---

## SECTION 8: EXAM PREPARATION GUIDE

### Top 20 Most-Tested Topics in Networking Exams
1. **OSI Model:** L1-L7 functions, PDUs, and which layer a device/protocol operates on.
2. **TCP vs UDP:** Guaranteed delivery vs speed, header sizes, and use cases.
3. **Subnetting Math:** Given an IP and CIDR, calculate network ID, broadcast, and valid host range.
4. **TCP 3-Way Handshake:** SYN, SYN-ACK, ACK process and sequence numbers.
5. **ARP Operation:** Resolving IP (L3) to MAC (L2) and the broadcasting mechanism.
6. **DNS Resolution:** Recursive vs iterative queries, record types (A, AAAA, MX, CNAME, TXT).
7. **CSMA/CD Math:** Minimum frame size calculation ($L_{min} = 2 \times T_p \times B$).
8. **Sliding Window:** Efficiency calculations (Stop-and-Wait vs GBN) and window size limits.
9. **Routing Algorithms:** Distance Vector (Bellman-Ford, loops, count-to-infinity) vs Link State (Dijkstra, full map).
10. **VPN and IPsec:** Tunnel vs Transport mode, AH vs ESP protocols.
11. **Error Detection:** Hamming distance properties and parity limitations.
12. **IP Header Fields:** Specifically TTL, Protocol Number, and Fragmentation fields (ID, Flags, Offset).
13. **TCP Congestion Control:** Slow Start (exponential), Congestion Avoidance (linear/AIMD), Fast Retransmit.
14. **Network Devices:** Hub (L1) vs Switch (L2) vs Router (L3) domains (collision/broadcast).
15. **ALOHA Formulas:** Max throughput of Pure ($18.4\%$) vs Slotted ($36.8\%$).
16. **IPv4 vs IPv6:** Address space, header differences, removal of fragmentation by routers, SLAAC.
17. **VLANs and 802.1Q:** Trunking, broadcast domain isolation, tagging.
18. **HTTP Status Codes:** 200s (Success), 300s (Redirect), 400s (Client Error), 500s (Server Error).
19. **NAT/PAT:** Overloading, static vs dynamic, breaking end-to-end IP principle.
20. **Wireless Security:** WPA2 (AES/CCMP, KRACK vulnerability) vs WPA3 (SAE, PMF mandatory).

### Common Exam Traps and Mistakes
1. **Internet ≠ World Wide Web:** Internet is the physical network infrastructure; WWW is the application (HTTP) running on top.
2. **Device Layers:** Hub = Layer 1, Switch = Layer 2, Router = Layer 3. (A "Layer 3 Switch" does L2 switching and L3 routing).
3. **Address Lengths:** MAC is 48-bit (6 bytes, hex). IPv4 is 32-bit (4 bytes, decimal). IPv6 is 128-bit (16 bytes, hex).
4. **TCP Sequence Numbers (SYN/FIN):** A TCP SYN segment consumes 1 sequence number even though it carries zero payload data. A FIN segment also consumes 1 sequence number.
5. **Fragmentation Offset Unit:** The offset in the IP header is in units of **8 BYTES** (64 bits). Always multiply/divide by 8.
6. **Window Size Bounds:** GBN maximum window is $\leq 2^m - 1$ (NOT $2^m$). SR maximum window is $\leq 2^{m-1}$ (half the sequence space).
7. **Usable Hosts:** ALWAYS subtract 2 ($2^n - 2$). Don't forget the broadcast address.
8. **CIDR Edge Cases:** `/32` is a single host (no network/broadcast). `/31` provides 2 usable addresses explicitly for point-to-point links (RFC 3021).
9. **ARP's Layer:** Operates between L2 and L3. Usually tested as L2, but carries L3 addresses.
10. **ICMP's Layer:** Network Layer (L3). It is encapsulated inside an IP packet, NOT TCP/UDP.
11. **DNS Ports:** Uses UDP 53 for queries. Uses TCP 53 for zone transfers and responses > 512 bytes.
12. **Email Protocols:** SMTP is strictly for SENDING (push). POP3/IMAP are strictly for RECEIVING (pull).
13. **Standards Bodies:** OSI created by ISO (1984). Ethernet is IEEE 802.3. Wi-Fi is IEEE 802.11.
14. **ALOHA Equations:** Pure: $S = Ge^{-2G}$. Slotted: $S = Ge^{-G}$. Do not mix up the 2.
15. **Efficiency Variable 'a':** $a = \frac{T_p}{T_t}$. Higher $a$ means propagation takes much longer than transmission, yielding WORSE efficiency for Stop-and-Wait.
16. **BGP Transport:** Uses TCP port 179 (highly reliable), not UDP.
17. **OSPF Transport:** Encapsulated directly into IP (Protocol number 89). Does NOT use TCP or UDP.
18. **NAT Limitations:** Breaks end-to-end connectivity, making peer-to-peer and incoming server connections directly from the internet impossible without port forwarding.

### Numerical Problem-Solving Strategy
1. **Analyze:** Read the problem twice. Clearly identify GIVEN values and ASKED target.
2. **Formulas:** List the specific formula(s) that bridge the given to the asked.
3. **Unit Conversion (CRITICAL):**
   - Bandwidth is often in bits ($1 \text{ Mbps} = 10^6 \text{ bits/sec}$).
   - File size is often in Bytes ($1 \text{ MB} = 8 \times 10^6 \text{ bits}$).
   - Time is often in milliseconds ($1 \text{ ms} = 10^{-3} \text{ seconds}$).
   - Distance is often in km ($1 \text{ km} = 1000 \text{ meters}$).
   - Always convert to standard SI units (bits, meters, seconds) before calculating.
4. **Step-by-Step:** Write out the math. Examiners often grant partial credit for the right formula and setup even if the final arithmetic is wrong.
5. **Verify:** Check if the answer makes physical sense (e.g., efficiency cannot be $>100\%$, delay cannot be negative).
6. **Subnetting Powers of 2:** Memorize them cold. $2^1=2$, $2^2=4$, $2^3=8$, $2^4=16$, $2^5=32$, $2^6=64$, $2^7=128$, $2^8=256$.
7. **VLSM Strategy:** Always allocate the LARGEST subnet requirement first, then move down to the smallest.
8. **Sliding Window Visuals:** If confused about sequence numbers, sketch a timeline diagram mapping the sender's actions on the left, receiver on the right, and diagonal arrows for transmission time.
