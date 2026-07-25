---
id: "d4071504-4253-5e45-d042-143505370088"
title: "Computer Networking Full Course - OSI Model Deep Dive with Real Life Examples (Part 4)"
type: literature-note
status: learning
schema_version: 4
source: "https://www.youtube.com/watch?v=IPvYjXCsTg8"
creater: "[[Kunal Kushwaha]]"
published: 2022-01-17
created: 2026-07-25
tags:
  - yt
  - implementation
  - reference
  - checklist
owner_moc: "[[03_MOC/Cyber Security MOC]]"
---

# Computer Networking Full Course - OSI Model Deep Dive with Real Life Examples (Part 4)

## Executive Summary & Metadata
- **Source Video**: [Computer Networking Full Course - OSI Model Deep Dive with Real Life Examples (YouTube)](https://www.youtube.com/watch?v=IPvYjXCsTg8)
- **Creator**: [[Kunal Kushwaha]]
- **Scope**: Part 4 of 4 (Timestamps `3:09:10` to `3:55:40+`)
- **Key Focus**: Network Layer Architecture (Hop-by-Hop Forwarding, Routing vs Forwarding Tables), Control Plane vs Data Plane (Dijkstra SPF & Bellman-Ford Graph Algorithms), IP Addressing & Subnetting Math (Classes A–E, CIDR `/24`), IPv4 20-Byte Header & TTL Mechanics, IPv6 128-bit Hexadecimal Architecture, Middleboxes (Stateless vs Stateful Firewalls), NAT (Network Address Translation), Data Link Framing, DHCP, and ARP Resolution Protocol.
- **Continuity**: Continuation from [[detailed-study-notes-computer-networking-full-course-part-03.md|Part 3]].

---

## 1. Network Layer & Control/Data Plane Architecture (`3:09:10` – `3:24:08`)

### 1.1 Hop-by-Hop Packet Forwarding Mechanics

```mermaid
flowchart LR
    HostA["Source Host A"] --> Router1["Router 1 (Inspects FIB Table)"]
    Router1 -- "Next Hop" --> Router2["Router 2 (Inspects FIB Table)"]
    Router2 -- "Next Hop" --> Router3["Router 3 (Egress Port)"]
    Router3 --> HostB["Destination Host B"]
```

### 1.2 Routing Table vs Forwarding Table (FIB)

| Feature / Attribute | Routing Table (RIB - Routing Information Base) | Forwarding Table (FIB - Forwarding Information Base) | Timestamp |
|---|---|---|---|
| **Operational Plane** | Control Plane (Software / CPU) | Data Plane (Hardware ASIC Engine) | `3:16:47` |
| **Path Selection** | Holds all candidate paths calculated by routing protocols. | Holds single best next-hop egress path for fast lookup. | `3:18:58` |
| **Lookup Speed** | Slower (complex tree/graph structures) | Microsecond / Nanosecond hardware wire-speed lookup | `3:19:18` |

---

### 1.3 Control Plane Graph Algorithms (`3:21:33`)
Network topology is represented as a directed graph $G = (V, E)$ where router nodes are vertices $V$ and interconnecting links are weighted edges $E$.
- **Static Routing**: Manual entry of routes into the RIB (`3:22:49`).
- **Dynamic Routing**: Automatic route discovery using shortest-path graph algorithms:
  - **Dijkstra's Shortest Path First (SPF)**: Link-state calculation used in OSPF/IS-IS (`3:23:51`).
  - **Bellman-Ford Algorithm**: Distance-vector calculation used in RIP (`3:23:51`).

---

## 2. IP Addressing, Subnetting & IPv4 vs IPv6 (`3:24:08` – `3:48:58`)

### 2.1 IPv4 Addressing & Classful Allocations

```text
 0               8               16              24              31 bits
+---------------+---------------+---------------+---------------+
|  1st Octet    |  2nd Octet    |  3rd Octet    |  4th Octet    | (32 Bits Total)
+---------------+---------------+---------------+---------------+
```

- **Loopback Reserved Address**: `127.0.0.1` (`127.0.0.0/8`) allows host applications to communicate locally via the TCP/IP stack (`3:37:16`).
- **CIDR Subnetting Math (`192.168.1.0/24`)**: 24 network bits leave $32 - 24 = 8$ host bits $\implies 2^8 = 256$ total IP addresses ($254$ usable hosts after subtracting Network ID `.0` and Broadcast ID `.255`) (`3:34:31`).

---

### 2.2 IPv4 vs IPv6 Comparison Matrix

| Property | IPv4 (Internet Protocol v4) | IPv6 (Internet Protocol v6) | Timestamp |
|---|---|---|---|
| **Address Length** | 32 bits (4 Bytes) | 128 bits (16 Bytes) | `3:25:46` |
| **Address Space** | $2^{32} \approx 4.3 \times 10^9$ (4.3 Billion) | $2^{128} \approx 3.4 \times 10^{38}$ Addresses | `3:42:51` |
| **Notation Format** | Dotted Decimal (`192.168.1.1`) | Hexadecimal Colons (`2001:db8::8a2e:370:7334`) | `3:44:34` |
| **Header Size** | 20 to 60 Bytes (Variable) | Fixed 40 Bytes | `3:38:46` |

---

### 2.3 IPv4 Header & Time To Live (TTL) (`3:38:46` – `3:40:41`)
- **Header Size**: Minimum 20 bytes (`3:38:46`).
- **Time To Live (TTL)**: 8-bit hop counter decremented by 1 at every router hop (`3:39:36`). If TTL reaches 0, the router drops the packet and transmits an ICMP Time Exceeded (Type 11) message back to the source host.

---

## 3. Middleboxes, NAT & Data Link Protocol (ARP & DHCP) (`3:48:58` – `4:05:00`)

### 3.1 Middleboxes: Firewalls & NAT

```mermaid
flowchart LR
    PrivateHost["Private Node (10.0.0.5)"] --> NATBox["NAT Middlebox / Router"]
    NATBox -- "Source IP Translated to 150.150.0.1" --> Internet["Public Internet"]
```

- **Stateless Firewall**: Filters incoming/outgoing packets based solely on individual packet IP/port rules (`3:51:21`).
- **Stateful Firewall**: Tracks connection state (`SYN`, `ESTABLISHED`) in connection tables memory to dynamically permit return traffic (`3:51:53`).
- **NAT (Network Address Translation)**: Maps private RFC 1918 IP address spaces (`10.0.0.0/8`, `192.168.0.0/16`) to public IP addresses (`150.150.0.1`) (`3:52:32`).

---

### 3.2 Data Link Layer: DHCP & Address Resolution Protocol (ARP) (`3:55:47` – `4:03:42`)
- **DHCP (Dynamic Host Configuration Protocol)**: Automatically leases IP addresses, subnet masks, default gateways, and DNS servers to connecting client hosts (`3:56:35`).
- **ARP (Address Resolution Protocol)**: Maps a known 32-bit IPv4 address to its unknown 48-bit physical MAC address using broadcast ARP requests (`3:59:52`).
- **ARP Cache**: Local operating system table storing IP-to-MAC address mappings (`3:59:52`).

---

## Source Provenance & Archival Link
- Original Raw Transcript File: `[[01_RAW/SOURCE/Computer Networking Full Course - OSI Model Deep Dive with Real Life Examples.md]]`
- Prerequisites:
  - [[detailed-study-notes-computer-networking-full-course-part-01.md|Part 1 Note]]
  - [[detailed-study-notes-computer-networking-full-course-part-02.md|Part 2 Note]]
  - [[detailed-study-notes-computer-networking-full-course-part-03.md|Part 3 Note]]
