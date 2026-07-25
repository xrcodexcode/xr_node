---
id: "d1029481-2019-4a12-d910-023940192091"
title: "Computer Networking Full Course - Internet Explained Step by Step (Final Master Note)"
type: literature-note
status: atomic
schema_version: 4
source: "https://www.youtube.com/watch?v=RY32wSQDekE"
creater: "[[Sheryians Coding School]]"
published: 2025-04-14
created: 2026-07-25
tags:
  - yt
  - implementation
  - reference
  - checklist
owner_moc: "[[03_MOC/Cyber Security MOC]]"
---

# Computer Networking Full Course - Internet Explained Step by Step (Final Master Note)

## Executive Summary & Master Metadata
- **Source Video**: [Computer Networking Full Course - Internet Explained Step by Step (YouTube)](https://www.youtube.com/watch?v=RY32wSQDekE)
- **Creator**: [[Sheryians Coding School]] (Instructor: Sarthak Sharma)
- **Total Duration**: 2 hours 37 minutes (100% complete coverage)
- **Document Nature**: Consolidated Final Master Study Note combining all 3 parts into a single publication-ready reference.

---

## 1. What is the Internet & Historical Timeline (`00:00` – `22:42`)
- **Internet Definition**: Global, decentralized system of interconnected computer networks communicating via TCP/IP protocols (`06:31`).
- **History**:
  - USSR Sputnik 1 launch (1957) $\implies$ US creates ARPA (1958).
  - Paul Baran proposes decentralized packet switching (1964).
  - ARPANET transmits first message `LO` between UCLA and Stanford (1969).
  - Vint Cerf & Bob Kahn create TCP/IP (1983).
  - Sir Tim Berners-Lee invents WWW, HTTP, and HTML at CERN (1989–1990).

---

## 2. Infrastructure, Network Types & Topologies (`22:42` – `01:24:58`)
- **Physical Data Flow**: Undersea fiber optic cables using Total Internal Reflection (TIR) across Tier-1, Tier-2, and Tier-3 ISPs and IXPs (`22:42`).
- **6 Network Scale Categories**: PAN ($\approx 10\text{m}$), LAN (building), CAN (campus), MAN (city), WAN (global internet), SAN (storage array).
- **Physical Topologies**:
  - Bus (single backbone cable; $N+1$ links).
  - Ring (token passing; $N$ links).
  - Star (central switch; $N$ links).
  - Mesh (fully interconnected; $\frac{N(N-1)}{2}$ links).
  - Tree (hierarchical Star-Bus).
  - Hybrid (multi-topology blend).

---

## 3. OSI Model, Architectures & Protocol Suite (`01:24:58` – `02:36:59`)
- **OSI 7-Layer Model**:
  - L7 Application $\rightarrow$ L6 Presentation $\rightarrow$ L5 Session $\rightarrow$ L4 Transport $\rightarrow$ L3 Network $\rightarrow$ L2 Data Link $\rightarrow$ L1 Physical.
- **Architectures**: Client-Server (centralized request/response) vs Peer-to-Peer P2P (decentralized nodes act as seeders/leechers).
- **Protocols**: IP (addressing/routing), TCP (reliable connection), UDP (fast datagrams), HTTP/HTTPS (`80`/`443`), Email (SMTP `25`/`587`, POP3 `110`, IMAP `143`), DNS (`53`), FTP (`20`/`21`).

---

## Source Provenance & Archival Link
- Original Raw Transcript File: `[[01_RAW/SOURCE/Computer Networking Full Course - Internet Explained Step by Step (Real-Life Examples).md]]`
- Individual Segment Notes:
  - [[detailed-study-notes-computer-networking-sheryians-part-01.md|Part 1]]
  - [[detailed-study-notes-computer-networking-sheryians-part-02.md|Part 2]]
  - [[detailed-study-notes-computer-networking-sheryians-part-03.md|Part 3]]
