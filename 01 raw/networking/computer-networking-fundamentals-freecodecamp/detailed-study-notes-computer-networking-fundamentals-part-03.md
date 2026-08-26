---
id: "d3049583-4230-4e34-b930-234505370033"
title: "Computer Networking Fundamentals Course | freeCodeCamp (Part 3)"
type: literature-note
status: learning
schema_version: 4
source: "https://www.youtube.com/watch?v=fQbBPa0ADvs"
creater: "[[freeCodeCamp.org]]"
published: 2026-02-18
created: 2026-07-25
tags:
  - yt
  - implementation
  - reference
  - checklist
owner_moc: "[[03_MOC/Cyber Security MOC]]"
---

# Computer Networking Fundamentals Course | freeCodeCamp (Part 3)

## Executive Summary & Metadata
- **Source Video**: [Computer Networking Fundamentals Course (freeCodeCamp YouTube)](https://www.youtube.com/watch?v=fQbBPa0ADvs)
- **Creator**: [[freeCodeCamp.org]] (Instructor: Kshitij Sharma / Shweta Sharma)
- **Scope**: Part 3 of 4 (Timestamps `6:30:00` to `9:40:00`)
- **Key Focus**: Flow Control & ARQ Protocols (Stop-and-Wait ARQ, Go-Back-N GBN, Selective Repeat SR), Sliding Window Mathematical Efficiency ($\eta = \frac{N}{1+2a}$), Throughput & RTT Metrics, IPv4 Header Fields (TOS/DSCP, TTL, Identification, Flags `DF`/`MF`, Fragment Offset Math), IP Source Routing Options, and TCP 20-60 Byte Header Architecture (Sequence & ACK Numbers).
- **Continuity**: Continuation from [[detailed-study-notes-computer-networking-fundamentals-part-02.md|Part 2]].

---

## 1. Sliding Window ARQ Protocols Mathematics (`6:10:25` – `8:05:57`)

### 1.1 Stop-and-Wait ARQ Protocol
- **Sender Window Size ($W_s$)**: 1 frame.
- **Receiver Window Size ($W_r$)**: 1 frame.
- **Sequence Number Space**: Minimum 1 bit (0 and 1) to resolve lost/delayed ACK ambiguities (`6:18:12`).

$$\text{Efficiency } \eta = \frac{T_t}{T_t + 2T_p} = \frac{1}{1 + 2a} \quad \text{where } a = \frac{T_p}{T_t}$$

$$\text{Throughput} = \eta \cdot B = \frac{L}{T_t + 2T_p}$$

---

### 1.2 Go-Back-N (GBN) ARQ Protocol (`7:07:35`)
- **Sender Window Size ($W_s$)**: $N = 2^m - 1$ (where $m$ is the sequence number bits).
- **Receiver Window Size ($W_r$)**: 1 frame.
- **ACK Type**: Cumulative Acknowledgement (`ACK k` confirms all frames up to $k-1$).
- **Out-of-Order Frames**: Discarded silently. If frame $k$ is corrupted/lost, sender retransmits all frames from $k$ through $k + W_s - 1$.

$$\text{Efficiency } \eta = \min\left(1, \frac{N}{1 + 2a}\right)$$

---

### 1.3 Selective Repeat (SR) ARQ Protocol (`7:18:54`)
- **Sender Window Size ($W_s$)**: $2^{m-1}$.
- **Receiver Window Size ($W_r$)**: $2^{m-1}$ ($W_s = W_r$ to avoid sequence overlap).
- **ACK Type**: Selective Acknowledgement (SACK) / Negative ACK (NAK).
- **Out-of-Order Frames**: Receiver buffers out-of-order valid frames. Sender retransmits **only** the specific missing frames.

$$\text{Efficiency } \eta = \min\left(1, \frac{W_s}{1 + 2a}\right)$$

---

### 1.4 ARQ Protocol Comparison Matrix

| Protocol Property | Stop-and-Wait ARQ | Go-Back-N (GBN) ARQ | Selective Repeat (SR) ARQ |
|---|---|---|---|
| **Sender Window ($W_s$)** | $1$ | $2^m - 1$ | $2^{m-1}$ |
| **Receiver Window ($W_r$)** | $1$ | $1$ | $2^{m-1}$ |
| **Sequence Bits Required ($m$)** | $1$ bit ($0, 1$) | $\lceil \log_2(W_s + 1) \rceil$ | $\lceil \log_2(W_s + W_r) \rceil = m$ |
| **Out-of-Order Handling** | Discarded | Discarded | Buffered at Receiver |
| **Efficiency ($\eta$)** | $\frac{1}{1+2a}$ | $\frac{N}{1+2a}$ | $\frac{W_s}{1+2a}$ |

---

## 2. IPv4 Packet Header & Fragmentation Math (`8:05:57` – `9:18:10`)

### 2.1 IPv4 Header Format (20 - 60 Bytes)

```text
 0                   16                  31 bits
+-------+-------+---+-------------------+
|Version|  IHL  |TOS|    Total Length   | (Bytes 0-3)
+-------+-------+---+-------------------+
|     Identification|Flg|Fragment Offset| (Bytes 4-7)
+-------+-------+---+-------------------+
|  TTL  |Protocol   |  Header Checksum  | (Bytes 8-11)
+-------+-------+---+-------------------+
|           Source IP Address           | (Bytes 12-15)
+---------------------------------------+
|        Destination IP Address         | (Bytes 16-19)
+---------------------------------------+
|        Options (0 - 40 Bytes)         | (Bytes 20-59)
+---------------------------------------+
```

### 2.2 Fragmentation Calculation Rules (`8:35:39`)
When an IP datagram exceeds the link MTU (Maximum Transmission Unit, typically 1500B):
1. **Header Length (IHL)**: Specifies length in 32-bit (4-byte) words. Standard header = 5 words ($5 \times 4 = 20$ bytes).
2. **Identification (16 bits)**: Unique ID shared across all fragments of a single original IP packet.
3. **Flags (3 bits)**: Reserved (0), Don't Fragment (`DF`), More Fragments (`MF`).
   - `DF = 1`: Router drops packet and sends ICMP Type 3 Code 4 if packet > MTU.
   - `MF = 1`: More fragments follow. `MF = 0` indicates the final fragment.
4. **Fragment Offset (13 bits)**: Measures payload offset in **8-byte units**.

$$\text{Fragment Offset Value} = \frac{\text{Byte Offset of Fragment Payload}}{8}$$

---

## 3. TCP Header Architecture & Sequence Math (`9:18:10` – `9:40:48`)

### 3.1 TCP Header (20 - 60 Bytes)

```text
 0                   16                  31 bits
+-------------------+-------------------+
|    Source Port    | Destination Port  | (Bytes 0-3)
+-------------------+-------------------+
|           Sequence Number             | (Bytes 4-7)
+---------------------------------------+
|        Acknowledgement Number         | (Bytes 8-11)
+-------+-------+---+-------------------+
|Offset |Reservd|Flg|    Window Size    | (Bytes 12-15)
+-------+-------+---+-------------------+
|     Checksum      |  Urgent Pointer   | (Bytes 16-19)
+-------------------+-------------------+
```

- **Sequence Number (32 bits)**: Tracks the byte stream position of the first data byte in this TCP segment (`9:18:10`).
- **Acknowledgement Number (32 bits)**: Specifies the next expected sequence byte from the receiver (`ACK = seq + payload_bytes`).

---

## Source Provenance & Archival Link
- Original Raw Transcript File: `[[01_RAW/SOURCE/Computer Networking Fundamentals Course.md]]`
- Prerequisites:
  - [[detailed-study-notes-computer-networking-fundamentals-part-01.md|Part 1 Note]]
  - [[detailed-study-notes-computer-networking-fundamentals-part-02.md|Part 2 Note]]
