---
title: "Computer Networking Fundamentals Course"
source: "https://www.youtube.com/watch?v=fQbBPa0ADvs"
creater: "[[freeCodeCamp.org]]"
published: 2026-02-18
created: 2026-07-25
description: "This course covers the fundamental concepts, protocols, and architectures of computer networking. You will journey through the entire networking stack, exploring how data travels from physical media a"
tags:
  - "Yt"
---
# Computer Networking Fundamentals Course
Source: [YT](https://www.youtube.com/watch?v=fQbBPa0ADvs)
![](https://www.youtube.com/watch?v=fQbBPa0ADvs)

This course covers the fundamental concepts, protocols, and architectures of computer networking. You will journey through the entire networking stack, exploring how data travels from physical media access control up to complex application layer protocols like HTTP and DNS. You will learn about technical mechanisms, including error detection through CRC, flow control strategies, and advanced IPv4 addressing techniques like CIDR and VLSM. By mastering topics such as TCP congestion control and routing algorithms, you will gain the deep theoretical foundation and practical problem-solving skills necessary to navigate modern internet communications.  
  
Course notes: https://drive.google.com/file/d/1H4HyyNb07e4u3wdV-vfUWJTn2ulullac/view?usp=sharing  
  
Course overview: https://drive.google.com/file/d/1d8cynMNNB0H5DoyBwAj1WTQrIe4X2PLX/view?usp=drive\_link  
  
DPP practice questions: https://drive.google.com/file/d/1q3s7Yk\_bVdxMosDVf-hkGYOLqgSeza4H/view?usp=sharing  
  
✏️ Course created by Kshitij Sharma.  
  
Chapters  
\*Course Intro & Basics\*  
\- 00:00 Networking Stack & Stack Concepts  
\- 00:46 Orientation & Prerequisites  
\- 01:31 Instructor Intro  
\- 02:05 Target Audience  
\- 03:01 Methodology: Pen & Paper Style  
\- 08:42 Defining Computer Networks  
\- 09:55 5 Components of Data Comm  
\- 11:40 Effectiveness Metrics  
\- 14:14 Simplex, Half & Full Duplex  
\- 19:55 Network Topologies (Mesh, Star, Bus)  
\- 28:36 OSI Model & Layered Architecture  
  
\*IP Addressing & Subnetting\*  
\- 34:37 Binary & Octet Conversion  
\- 48:09 IPv4 Logical Addressing  
\- 55:17 Classful vs. Classless (CIDR)  
\- 1:10:56 Class A-E Addressing Deep Dive  
\- 1:18:43 Loopback & Troubleshooting  
\- 1:35:53 IP Conversion Practice  
\- 2:15:55 Subnetting & Borrowing Bits  
\- 2:52:25 Subnet Mask Design  
\- 3:05:24 VLSM Strategy  
\- 3:31:04 Routing Tables & CIDR Blocks  
\- 4:05:50 Supernetting Blocks  
  
\*Error & Flow Control\*  
\- 4:19:56 Single Bit vs. Burst Errors  
\- 4:39:26 Hamming Distance & Correction  
\- 4:49:52 Simple & 2D Parity Methods  
\- 5:14:32 CRC & Polynomial Notation  
\- 5:36:25 Checksum Methods  
\- 5:43:07 Transmission vs. Propagation Delays  
\- 6:10:25 Stop and Wait (ARQ)  
\- 6:30:24 Efficiency, RTT & Throughput  
\- 6:40:42 Sliding Window Concepts  
\- 7:07:35 Go-Back-N (GBN) Protocol  
\- 7:18:54 Selective Repeat (SR)  
  
\*Headers & Advanced Protocols\*  
\- 8:05:57 IPv4 Header & TOS Bits  
\- 8:35:39 TTL & Fragmentation  
\- 8:52:02 IP Options & Source Routing  
\- 9:18:10 TCP Header: Sequence & Ack  
\- 9:40:48 TCP Flags & Handshake  
\- 9:58:10 SYN Flooding Attacks  
\- 10:02:19 Congestion Control Policy  
\- 10:13:30 TCP/UDP Timers & Comparison  
\- 10:30:10 Aloha & CSMA Methods  
\- 11:06:07 CSMA/CD Collision Detection  
\- 11:13:39 Polling & Token Passing  
\- 11:25:03 Distance Vector vs. Link State  
\- 11:36:16 Circuit vs. Packet Switching  
\- 11:48:47 Email (SMTP, POP3, IMAP)  
\- 11:57:10 DNS Hierarchy & Queries  
\- 12:01:21 FTP, HTTP, ARP & ICMP  
\- 12:15:06 OSI Summary & Conclusion

## Transcript

**0:00** · This course covers the fundamental concepts, protocols, and architectures of computer networking. You'll journey through the entire networking stack, exploring how data travels from physical media access control up to complex application layer protocols like HTTP and DNS. You'll learn about technical mechanisms including error detection through CRC, flow control strategies, and advanced IPv4 addressing techniques like cider and VLSM.

**0:29** · By mastering topics such as TCP congestion control and routing algorithms, you'll gain the deep theoretical foundation and practical problem-solving skills necessary to navigate modern internet communications.

**0:46** · Okay. So, this will be an orientation class. I'll be discussing the curriculum and the methodology we which we are going to follow and what I expect from you. What are the prerequisite you require to attend the course. So, I'll be discussing all these things in this orientation class and I'll also give you the basic idea what is computer network and how the course is going to proceed. What things which you are going to study in this course. I'll give you that basic idea.

**1:15** · For the first 10 minutes, I'll be just overviewing the syllabus.

**1:20** · Okay? So, let's move forward. This is me. You all know me from the operating system course which we uh which you all people attended last semester.

**1:30** · So, I'll be your sealer for the journey through the network fundamentals. I'm Shweta Sharma.

**1:36** · And we will going to discuss all the major concept included in the computer network course.

**1:43** · From physical media access to the application layer protocol and I also added a bonus module of security.

**1:50** · So, we'll explore how data travels across network. We'll examine the protocols involved. How error is handled.

**1:57** · Routing mechanisms and the security consideration that make modern internet communication possible.

**2:03** · And one more thing before I move forward that I'll be sharing these lectures online, too.

**2:10** · Recorded lectures, the polished and edited ones, obviously. And I'll be removing the message which you all share.

**2:19** · So, the people online on YouTube or Udemy won't be able to see that. So, you can ask your doubts without any hesitation.

**2:27** · Now, for whom this course is meant for?

**2:31** · First of all, this is absolutely enough for GATE. If you're a GATE aspirant, then you can blindly follow this course. I've completed each and everything which is included in the GATE syllabus in this course.

**2:45** · If you're a university university student who have computer science major, you can attend this course. Or if you're preparing for any job interview, courses like computer networks, DDBMS, operating system, these are very very critical.

**2:58** · Now, for people who don't know how I teach or what is my methodology, then let's discuss that first. I'll be discussing your theory, but I don't like slides and all. So, I'll be teaching you raw.

**3:11** · Pen and paper style. And I'll also give you the reading material, notes, slides, DPP, reading material.

**3:18** · You will uh you'll be provided. So, firstly, we will discuss the theory. And then we will practice.

**3:26** · I will solve some problems in front of you.

**3:28** · And then you have to solve the problem which is given in DPP. Now, you will not attend the class without solving the DPP. You have to solve the DPP first.

**3:37** · Ask the doubt in the class itself, and then we'll move forward.

**3:42** · And before moving to the next topic, we are going to revise it with the help of a short notes.

**3:48** · So, this is the method which we are going to follow. Theory, practice, DVP, and revision.

**3:54** · Okay?

**3:55** · Now, in this class, I'll be teaching you the basics of computer networks.

**4:02** · And so that you will get an idea what you are going to study in that course.

**4:07** · And in the next lecture, we will begin with the core computer network, which is IPv4 addressing architecture. We will be learning the foundational concept, the IP addressing fundamental structure, what is classful addressing, classless addressing, what is unicast, multicast, broadcast communication, how subnet mask mask work, how networks are segmented.

**4:28** · We'll learn about classless inter-domain routing, variable length subnet masking, supernetting, and efficient IP address allocation strategies.

**4:38** · This will be a big module. Okay? The next module, which is a bit shorter than the first one, is error detection and correction. We'll begin with a simple concept like a simple parity, then we'll move toward more advanced concept like 2D parity, checksum, CRC, and Hamming code.

**4:55** · Okay, the third module will include flow control mechanisms.

**5:00** · Okay? So that asynchronicity is uh maintained between sender and receiver, that sender do not increase the speed that receiver cannot handle. All these kind of things which we are going to study in the flow control mechanism.

**5:13** · We'll study the three three important protocols: stop-and-wait, go-back-N, and selective-repeat or selective-reject.

**5:22** · Then, the biggest module of computer network, transport layer protocols. We are going to study TCP and UDP.

**5:29** · Then, the next module of media control protocol, media access, we'll be discussing three type of media access control protocols, MAC protocols, random access, controlled access, and channelization.

**5:40** · In random access, we are going to study Aloha, CSMA/CD, CSMA/CA, controlled access, reservation, polling, token passing, and in channelization, FDMA, TDMA, and CDMA.

**5:51** · I'll be telling you the important concept which you have to focus more.

**5:55** · Then, the routing and switching fundamentals.

**5:59** · Okay. Now, regarding the prerequisite I was talking about, the prerequisite is data structures and algorithm course.

**6:08** · Is there anyone in the class who have not attended the DSA course from the previous semester?

**6:17** · Okay. So, most of the people have attended the course.

**6:20** · So, I'll be discussing some of the algorithms like Bellman-Ford, Dijkstra's algorithm, and all these things. You should know what is a queue, what is stack, and all these things.

**6:30** · Then, we'll move toward the switching techniques, circuit switching, packet switching, what are virtual circuits and datagrams. We'll be discussing these things in this module.

**6:40** · The next module is of application and support protocols.

**6:43** · We'll be discussing protocols like DNS, SMTP, FTP, HTTP, ARP and DHCP, and then ICMP.

**6:53** · Okay. So, this was the complete module which we are going to discuss in the computer network course. So, this was what is in your curriculum. Now, the bonus module will also include the cybersecurity part.

**7:06** · How security is maintained among them, among the networks.

**7:11** · We will be discussing all these things also. So, first we'll be We'll learn about the IPv4 addressing. The next module contains error detection and correction. The third is flow control mechanism. Fourth one is transport layer protocol. Fifth one is media access protocol.

**7:26** · And the sixth one is routing and switching fundamentals, circuit switching, packet switching. These are important. Application and support protocols. And then in the end we will discuss the security part as a bonus module.

**7:38** · Now, the resources or the references I have taken for making this course is the primary textbook will be Forouzan. This is the Bible.

**7:49** · You should have a copy of Forouzan with you if you want to more better understanding.

**7:54** · For the people who have time and are planning to build a career in this, they can also read Tanenbaum.

**8:01** · In-depth in-depth theoretical foundation is there. And for people who are like absolutely crazy and want to read all these three books, you can also read the alternative perspective book. Top-down approach, okay? So, this was all the curriculum which we are going to follow.

**8:19** · And now, if you have any doubt regarding the curriculum or you want to ask anything, you can ask now.

**8:26** · Okay, so no doubt. We are going to move toward the actual learning.

**8:30** · Here is a pen and paper setup. So, we will learn computer network basics in this lecture.

**8:36** · This will be a lecture zero. And from the next lecture, we'll be learning the IPv4 addressing.

**8:42** · What is computer network?

**8:46** · Yes.

**8:48** · Yes, okay. So, let me give you a a bit of formal definition. We call it as a telecommunication framework.

**8:55** · Telecommunication framework.

**8:58** · Framework for what?

**8:59** · Framework which allow digital devices, which allow digital devices to interact.

**9:05** · We call it as nodes also.

**9:07** · Digital devices or nodes to interact.

**9:11** · And the interaction can be either wired or it could be wireless also.

**9:19** · Now, interaction for what? Why do they interact? To share resources.

**9:24** · To share resources.

**9:28** · Which could be either hardware or software.

**9:32** · So, this is a formal definition of computer network that it is a telecommunication framework which allow digital devices or nodes to interact, which could be in a wired medium or can be in a wireless medium to share resources, which could be hardware or software.

**9:48** · Internet can be the example of Internet is a prominent example of computer network.

**9:54** · Okay? Now, in computer network, we let these nodes interact and share data.

**10:02** · So, data communication is a very important part, data communication.

**10:08** · Now, if I ask you the component of data communication, what would you say? Let me give you a hint.

**10:14** · First component can be the sender.

**10:17** · What could be the second component?

**10:19** · Tell me.

**10:21** · Receiver, obviously.

**10:24** · The third can be content or we can also call it as message. Fourth, the medium, the transmission medium.

**10:38** · Tell me the fifth one.

**10:40** · Think.

**10:41** · We have a sender, we have a receiver, there is a transmission medium, we have a message.

**10:48** · Think what else is required that they can communicate with each other effectively.

**10:58** · Correct. Michael said it, rules.

**11:01** · We call it as protocols.

**11:03** · Protocols for what? For synchronization.

**11:05** · What is synchronization? I told you the definition in OS course.

**11:11** · Yes.

**11:12** · To do something which is already agreed upon.

**11:16** · So, these are the five components of data communication. We need a sender, we need a receiver, there should be message that need to be communicated, medium, and protocols for synchronization.

**11:27** · That governs the data communication.

**11:31** · Now, third thing, effectiveness.

**11:37** · When do we say that one network is more effective than the other?

**11:44** · You say reliability. No, reliability is not considered to be a a metric for effectiveness. Why? For example, in transport layer in in transport layer we are going to read about two protocols, TCP and UDP.

**12:03** · There you will learn that UDP is not reliable, but still it is if significantly used.

**12:10** · So, reliability is not a metric for effectiveness. Think something other.

**12:16** · Yes, delivery. Rebecca said it right, delivery.

**12:21** · What do you mean by delivery?

**12:23** · That the data must be delivered to the correct destination.

**12:27** · Correct destination.

**12:31** · Okay. Second thing, integrity or you can also call it as accuracy.

**12:41** · That data should not be modified in between.

**12:44** · Because integrity is a word used for intentional modification done by some uh some \[snorts\] person with mal intentions. Intentional modification while accuracy is a term used to prevent errors.

**13:00** · So, data must be delivered accurately.

**13:04** · Delivered accurately without errors.

**13:09** · Modification is not considered \[clears throat\] an error. That's why we don't use the term integrity which you have mentioned here.

**13:16** · Third, what else can be the property?

**13:23** · Time. Time constraint or we can call it as timeliness.

**13:28** · Data reached after the deadline may be useless. So, data must be delivered in timely manner.

**13:36** · Delivered in timely manner.

**13:40** · Timely manner.

**13:44** · Fourth point.

**13:46** · Let me tell you the fourth point. It is jitter.

**13:49** · What is jitter?

**13:51** · You may have noticed that sometime there's a mismatch between audio and the video. When you're watching a movie, there could be a mismatch between audio and video. So, the uneven delay uneven delay is what jitter is. So, uneven delay should not be there.

**14:07** · Okay? So, these are the four metrics for effectiveness.

**14:10** · Now, let's learn about transmission modes.

**14:16** · mode.

**14:17** · Simplex, duplex, and we can write it as half duplex and full duplex.

**14:28** · What is simplex mode?

**14:30** · Try to guess with the name. What is simplex mode?

**14:34** · What is half duplex and what is full duplex?

**14:37** · Okay. Someone has written simplex is unidirectional.

**14:42** · That's right. Then, what is half duplex?

**14:46** · They are writing bidirectional. Then, what is full duplex?

**14:50** · Again, bidirectional.

**14:52** · Then, what is the difference between half duplex and full duplex?

**14:57** · Mhm. They have written it correctly.

**14:59** · Bidirection.

**15:01** · Half duplex is bidirectional, but it is like a single lane.

**15:04** · That either you can talk like this is sender one, this is receiver, or you can call it as person one or person two. They are talking over a walkie-talkie.

**15:19** · So, while you talk over a walkie-talkie, you cannot both talk simultaneously.

**15:24** · That's why you use the word like over and out so that the other person may know that the first person is not going to speak in between.

**15:32** · Are you getting the point?

**15:32** · Unidirectional transmission means you are watching a TV.

**15:36** · You're listening to a radio.

**15:39** · Half duplex means you are talking over a walkie-talkie.

**15:43** · Each station both can transmit but not at the same time.

**15:48** · So, when one device is sending, the other can only receive and vice versa.

**15:52** · While what is full duplex? The telephone that we use.

**15:59** · The telephone uh during talking over a telephone, both the person can speak simultaneously.

**16:05** · So, this is what full duplex is. I hope you're getting the point.

**16:09** · In simplex, there's only one lane and only one directional movement is allowed.

**16:14** · In half duplex, there's only one lane and one direction movement is allowed at a time.

**16:20** · While in full duplex, it is like a two-lane system.

**16:24** · Okay? So, this was all about transmission mode. Now, network criteria.

**16:30** · Network criteria.

**16:33** · Here we discuss about the reliability factor.

**16:38** · Reliability.

**16:40** · What is reliability? Can you Can someone give me a formal definition? We all know the meaning of being reliable and all, but what is reliability according to a definition?

**16:53** · Lesser failures. We We call it as lesser frequency of failures.

**17:00** · Failures.

**17:02** · And one more point should be added.

**17:06** · Yeah, failure thing has been already mentioned. What should be another thing which reliability have in its definition?

**17:17** · Mhm.

**17:18** · Resolution of failures, you have written correctly.

**17:21** · Lesser time in resolving the failure, time taken to resolve these failures should be less.

**17:32** · Should be less.

**17:35** · The second point is performance.

**17:38** · Performance can be measured using There are different metrics. You can use transit time.

**17:45** · You can use response time.

**17:50** · Number of users.

**17:53** · Transmission medium, there are multiple metrics.

**17:57** · The security.

**18:00** · Okay, what about security?

**18:03** · Protecting the data from unauthorized access. You must have name You must have heard the name of CIA triad.

**18:10** · What is CIA?

**18:12** · In security in context of security, what is CIA? Can someone give me the full form?

**18:21** · Yes, correctly. Confidentiality.

**18:27** · Integrity.

**18:31** · And this is authorization or authentication?

**18:34** · What is it? And what is the difference between both? Is it authorization or authentication? Author- authorization or authentication?

**18:46** · There were some people are mentioning authentication, some are mentioning authorization. What is it? And what is the difference? This is your homework.

**18:54** · So, what is security?

**18:56** · Includes protect protecting data from unauthorized access, from damage, and modification.

**19:04** · Okay.

**19:05** · Now, there are different types of connections.

**19:09** · Connections, it could be uh point-to-point.

**19:14** · It could be point to multi-point.

**19:19** · What is multi-point connection?

**19:21** · What is multi-point connection?

**19:25** · That one computer is sending data to different other computers.

**19:30** · Is it necessary that all all of them should be in the same network? No, it's not necessary.

**19:35** · One computer from one network can send to multiple computers in a different network. This is also included in multi-point. We are going to read more about it when the time will come.

**19:47** · Okay. And what should more be taught in the basics thing?

**19:52** · Well, you can learn about topology.

**19:55** · You can learn about topology.

**19:57** · What is topology? Have you heard of this name before?

**20:01** · Yes, perfect word, layout.

**20:05** · Layout or you can also write it as geometric representation.

**20:10** · Geometric representation.

**20:17** · What are the different type of topologies? There could be point to point topology. There could be a bus topology.

**20:23** · In such manner.

**20:25** · There could be a ring topology.

**20:29** · This is ring topology. There could be a star topology.

**20:36** · There could be a tree topology, you know, in a hierarchical fashion.

**20:40** · Tree topology, like in this manner.

**20:48** · This is tree topology. What is mesh mesh topology?

**20:54** · This one is mesh topology.

**20:56** · And there could be hybrid, a mix of all of them.

**20:59** · So, this is what a topology is, the physical layout or geometric representation. We can discuss more about it. Do you want me to discuss more about it, or we can just move on?

**21:15** · Yeah, so there's a one question that has been asked that in an exam of a mesh topology, the number of link was asked. Okay, so let's discuss. Let's discuss them one by one. So, let's start with the mesh topology.

**21:32** · What is mesh topology?

**21:37** · Have you heard of the term connected graphs? Connected graph.

**21:42** · Each vertex is connected to another vertex directly.

**21:47** · Directly. So, connected graph is like from one vertex you can reach to another vertex. So, this is what connected graph is. But, this graph is also connected.

**21:57** · We don't want connected graph. We want completely connected graph, or complete graph.

**22:02** · What is complete graph? That each vertex is connected to another vertex. For example, if you take like this, then this vertex should be directly connected to other vertex present. So, this link, this link, this link, this link. So, if there are five vertex, there are five vertex in this pentagon.

**22:29** · So, if there are five vertex, each vertex can be connected to maximum of four vertex.

**22:36** · Vertices.

**22:38** · So, if there are n vertex, each vertex can be connected to n minus one.

**22:44** · Okay. So, if each vertex can be connected to n minus one vertices, then how many total links will be there?

**22:54** · How many total links will be there? nC2.

**22:57** · Or you can write it as n into n minus one 1 So, here in this case where we have n equals to 4, how many total links will be there?

**23:07** · 4 into 3 divided by 2, that's 12 by 2 equals to 6. So, 6 links will be there.

**23:12** · In some very best basic exams or easy exams, these questions could be asked for 1 marks.

**23:20** · So, in mesh topology, total nC2 links will be there where n is the number of vertices.

**23:26** · Okay, now let's discuss what is the advantage. Why do we use different type of topology? Why can't we just remain to any arbitrary topology? Why we are using these specific ones? So, because there are several advantages associated to each of them. For example, mesh topology, what is the advantage of mesh topology? Why are we using? Can anyone guess the advantages?

**23:55** · Yes, correctly. So, we have one advantage mentioned.

**23:59** · Traffic issues is less.

**24:04** · Traffic issue is not there. So, that's one advantage. What more advantage you can think of?

**24:12** · Yes, Rebecca mentioned fault tolerance or robustness.

**24:17** · Robustness.

**24:20** · Any more?

**24:22** · Okay, you can also For example, for extra point, you can write fault identification is also easy.

**24:30** · Is also easy.

**24:32** · Okay, so what is the disadvantage you are looking?

**24:35** · What is the disadvantage you can think of for mesh topology?

**24:39** · Disadvantage.

**24:42** · Yes, expense.

**24:48** · Wiring bulk or expense, same point. It's been written. Wiring bulk.

**24:55** · Think of some other point.

**24:59** · Difficulty in installation. Yes, this could be a point.

**25:02** · Difficulty in installation.

**25:06** · Okay. So, this was for mesh topology.

**25:09** · Now, this was mesh topology. Let me write mesh, tree.

**25:13** · This is star, ring, bus, point-to-point.

**25:22** · Let's move to next to next, star topology.

**25:28** · In star topology, we use a device named hub.

**25:32** · So, no device is connected directly to each other.

**25:37** · For example, this device D1 want to send data to device D3, then it won't send it directly.

**25:43** · It will use hub. So, D1 will send to hub, and then hub will forward it to D3.

**25:49** · Okay. So, advantage could be it is easy to install and reconfigure. Fault identification is easy.

**25:57** · You know, it's it's uh it's robust also in a way, if you look at, that failure of one link will not going to affect the whole setup.

**26:06** · And it is less expensive than mesh topology. But, the biggest disadvantage which you can directly look at is if hub is gone, then the whole system collapses.

**26:16** · Okay. Now, next topology could be you you know, bus topology.

**26:25** · Bus include a central backbone. Central backbone.

**26:29** · So, again, the direct disadvantage is if something happens to the backbone, the whole system collapses.

**26:37** · \[clears throat\] So, this is a long cable. This is a long cable which act which act as a backbone. And the from the point where these are connected is known as drop line. Or the this link is drop line. This point is tap. This is drop line. Well, this is not so so important. You I'm just uh explaining these topologies because so that you can get an idea. Otherwise, it's not very much important.

**27:07** · Uh Another could be ring topology. Here it is ring topology. What is ring topology's advantage? Simpler installation, reconfiguration. A single point of failure can going to affect the whole system, so this could be a disadvantage.

**27:22** · Okay, so in ring topology, what happens?

**27:24** · Each device Each device is connected directly to the two adjacent devices forming a closed loop. And the one specific thing which \[clears throat\] is uh only associated with ring is data travel in one direction only. So data signal travel in one direction through each device until they reach their destination. Each device functions as repeater also.

**27:47** · So if data reaches to this, for example, D1 send want to send data to D3. So what D2 will do? D2 will look at the data. This data is not meant for me. It is going to amplify the data. It will act as a repeater. Going to amplify data, regenerate the signal before passing to the next. So this was about ring topology. Okay.

**28:09** · There are several topology you can look at it. You can search. You'll understand it just by Google search. You will notice. Okay. Now, let's move to the biggest problem is that is For example, I have a system in some different architecture. I want to communicate with a system of some different architecture.

**28:29** · Can I communicate directly?

**28:31** · No, this doesn't happen. You won't be able to communicate directly. So now, what is the solution? We need a model, the OSI model proposed by ISO. OSI model, Open System Interconnection proposed by ISO, International Standards Organization. That model is going to enable communication between different system irrespective of their underlying architecture. So, it will be a conceptual framework.

**28:59** · Conceptual framework.

**29:03** · A conceptual framework for creating a robust and interoperable network architecture.

**29:08** · So, this is not a not some kind of protocol. This is not a protocol. This is a model. It's a like a framework, okay?

**29:16** · And it is a It work on a layered architecture.

**29:21** · Layered architecture.

**29:23** · So, we will have a different different layers. And we are going to study each layer in detail. Okay. So, there are different layer. Each layer is going to communicate with the corresponding same layer of different system. For example, let me draw a diagram so that you can understand better. For example, this is device A. This is device A. This is device B. Both have different architecture.

**29:54** · Okay. So, we will need a let's say router one here, router two, and they are connected like this.

**30:01** · Now, what happens?

**30:02** · Device A have this layered architecture. It have different type of layers like application layer, presentation layer, presentation layer, session layer, transport layer, then network layer. You have to remember all these names in sequence too. Network layer. You can create some mnemonic to learn data link layer. And then in the end, physical layer.

**30:34** · Physical layer.

**30:35** · Now, what's going to happen?

**30:39** · This device B also have the same set of layers. Now, what happens? The application layer of device A is going to communicate with the application layer of device B. We call it as peer-to-peer connection or peer-to-peer protocol.

**30:53** · Peer-to-peer protocol.

**30:58** · Same happens with the presentation layer. Same happens with the session layer. Same happens with the transport layer. And same happens with the this device and the intermediary node. For example, in router, we reach or we require the services till network layer only. We don't require the services of transport layer. So, let's make it a single router.

**31:24** · R1.

**31:25** · Okay, or R.

**31:28** · And then here the physical layer. So, network layer is going to communicate with the network layer of router and same happens like that.

**31:38** · Okay.

**31:40** · \[clears throat\] So, what happens is when teacher teaches, you can in the beginning can understand the OSI model. You can go like this. You understand the physical layer first and then network data link layer, network layer, and then this. Okay, let's go to the So, what approach we are going to follow is we'll first understand the services provided by these layers. Application, presentation services, a session layer.

**32:14** · \[clears throat\] Okay, so what approach we are going to follow is we are going to first understand the services provided by these layers. And then when we have clarity of what is flow control, what is error control, what is framing, what is segmentation, then you will better understand the functionalities of or the how these layer work as a whole to provide the OSI model. How these layers coordinate with each other.

**32:44** · Okay, so we are going to first understand the functionalities of these layers and then we'll understand how they communicate with each other, how they in share data with each with each other and they become the OSI model as a whole.

**32:58** · Is video clear and voice audible?

**33:03** · Okay, then.

**33:04** · So, the last lecture was lecture zero. Mhm, today is the lecture one. Let's revise what we have learned yesterday and then we'll continue for IPv4 addressing. So, what was computer network? It was a telecommunication framework. It was a telecommunication framework which allowed digital devices to interact with each other. Interaction could be wired or wireless to share resources which could be hardware or software. Regarding the components of data communication, we have sender, receiver, message, medium, and protocols.

**33:37** · Effectiveness for metrics are there, delivery, accuracy, timeliness, and jitter. And for transmission modes, we had simplex, half duplex, and full duplex. Simplex means unidirectional like TV or radio. Half duplex means bidirectional but only data can travel only in one direction at a time like a walkie-talkie and a full duplex means like a telephone.

**34:01** · And for network criteria, we learned about reliability, performance, and security. Type of connection, point-to-point and multipoint. And then we learned about topology which was the layout. We learned about different topologies. And then in the end, we discussed the OSI model introduction, the conceptual framework. It was a layered architecture. We learned about different names of the We learned about the names of the different layer.

**34:26** · And today, we are going to start with the functionality of network layer which is IPV4 addressing.

**34:34** · But before starting, let me ask you, do you know about binary numbers?

**34:40** · Yes, most of the people know about binary numbers, which include zero or one.

**34:47** · Do you know about the representation?

**34:49** · 000 means zero.

**34:52** · And 001 means one. Okay, I hope you all know that. Because the IPV4 addressing will be totally based upon the representation of binary numbers. If you do not know them, you can leave the class. First, understand how binary representation is done, and then watch the recorded session. Okay. So, 000 is zero, 001 is one. 010 is two.

**35:20** · 011 is three.

**35:22** · Okay, this is how it is representation. Let me also explain how it is done. For this place, 2 raised to power zero. For this place, 2 raised to power one. For this place, 2 raised to power two.

**35:36** · And for this place, 2 raised to power three. So, if I write 1000, this mean 1 into 2 raised to power three plus 0 into 2 raised to power two plus 0 into 2 raised to power one plus 0 into 2 raised to power zero. This will be eight. Okay.

**35:52** · For example, if I write like this, 0111, then this means 0 into 2 raised to power three plus 1 into 2 raised to power two plus 2 raised to power one plus 2 raised to power zero. This is four, this is two, and this is one. Four and two, six plus one, seven. Okay. So, when I had three ones from the right side, then the value is 2 raised to power three minus one.

**36:20** · Let's say if I had four ones from the right side, then I have value of 4 raised to power 2 raised to the four minus 1 which is 15. Is it 15? Let's check. So, instead of zero, here it will become one. Now, eight will be added to seven. This will become 15. So, yeah.

**36:38** · So, let's say if I ask you what will be the value if I have continuous eight ones?

**36:48** · What will be the value of this?

**36:50** · 2 raised to the power 8 minus 1. What is 2 raised to the power 8? 256. Minus 1 means 255. So, the maximum value with eight ones I can reach is 255. So, the range will become 0 to 255. I hope this point is clear.

**37:08** · Okay. Now, I want you to remember these numbers and their binary representation. So, if I write 0000 0000, what is this?

**37:19** · Zero.

**37:21** · If I write one, then it will become one. If I write 1 1, then it will become three. If I write 111, then it will become seven. Then it will become 15. Okay. So, this point I hope it's clear.

**37:38** · Now, what about if I start the one from left-hand side?

**37:42** · This is very easy. You can just calculate like this. 2 raised to the power n minus 1, where n represents number of one ones from right-hand side. Okay. Now, what about this? What about number of ones from the left-hand side?

**37:57** · We have seen from the right-hand side the formula is 2 raised to the power n minus 1. What about the left-hand side?

**38:02** · So, you can calculate directly like this. For example, I have this number.

**38:09** · How am I going to calculate?

**38:13** · Let's say.

**38:14** · We are talking in the octets.

**38:16** · Octets.

**38:18** · With eight digit binary numbers.

**38:21** · Now, what is the value of this?

**38:23** · \[clears throat\] You can calculate like this. 2 raised to power 0, 2 raised to power 1, 2 raised to power 2, 2 raised to power 3, 2 raised to power 4, 2 raised to power 5, 2 raised to power 6, and 2 raised to power 7. So, I have to add these numbers and ignore these numbers. Why? Because here it is 0.

**38:40** · So, 2 raised to power 7 + 2 raised to power 6 + 2 raised to power 5 + 2 raised to power 4. This will be the value of this.

**38:47** · \[clears throat\] You can calculate this way.

**38:49** · The another way is 1 1 1 1 0 0 0 and 0. The another way is the maximum value that this number can achieve is 255. Now, I can calculate this by subtracting 2 by subtracting the value of this from 255. So, what is the maximum value this can achieve? 1 1 1 1. This could be 15. So, the value of this will be 240. Now, you can calculate from here also. The value will be 240.

**39:19** · Let me repeat the method again. For example, I have 1 1 1 and then 0 0 0 0 and 0.

**39:27** · Now, what could be the \[clears throat\] decimal value of this? 255 minus how many ones it could have? 1 2 3 4 5. So, what is the maximum value?

**39:37** · 2 raised to power 2 raised to power 5 minus 1. This is the formula which we have witnessed just here.

**39:46** · \[clears throat\] So, 255 minus 255 minus 2 raised to power 5. This is 32. 31. So, this will be This will be 224. Okay. You can calculate like this or you can also calculate like this. 128 64 32 and you can add all of them. You will get 224.

**40:10** · Okay.

**40:11** · \[clears throat\] First of all, I want to make sure that you know the table of this of the power of two. Two raised to power zero is one. Two raised to power one is two. Two raised to power two is four. Two raised to power three is eight. Two raised to power five is 32. Oh, sorry. Two raised to power four is 16.

**40:30** · Two raised to power five is 32. Two raised to power six is 64. Two raised to power seven is 128. And two raised to power eight is 256. That's all you will need. Okay. Three, four, five, six, seven, eight.

**40:45** · What is the weight of each position?

**40:47** · What is the weight of each position?

**40:48** · Weight of this is 128.

**40:50** · 64.

**40:52** · 32. 16. Eight.

**40:55** · Four.

**40:56** · Two. And then one. This is nothing but two raised to power zero, two raised to power one, and all like this. So, if I have the value 1 1 1 and rest all are zero zero zero zero zero zero. So, I will pick up this 32. I'll pick up the eight. I'll pick up the two. This is what the decimal value of this number is.

**41:19** · 42.

**41:20** · Okay. So, I hope now you know the conversion. You know the table of the power of two. And then you know what does it signify to have the straight ones from the left-hand side and the straight ones from the right-hand side. Now, what you have to remember is this. One, two, three, four, five, six, seven, eight. You have to remember this.

**41:41** · One. One one. One one one. One one one one. One one one one one one. Five ones. And then six ones. And then seven ones. And then eight ones. Rest all will be zero. You can fill up all of this with zeros. Now, just a single one from the beginning, the value is 128. When there are two ones, the value will be 128 + 64. This will become 192.

**42:14** · When you'll have three ones, then the value will be 128 + 64 + 32. The value will become 224, and then 240, and then 248, and then 252, and then 254, and then 255. If you remember this table, especially in gate exam, it will be very beneficial for you. You won't have to think. There will be lesser chance of silly mistake, and you will be quick.

**42:43** · If you do not remember this, there's no problem. You can simply calculate like this. Okay? And the more number of question you will solve, you will get uh you'll get better with these values.

**42:57** · Now, if I have just one bit with me, for example, let's say zero, or one bit position, then how many number of bits I can form?

**43:05** · How many different addresses I can form?

**43:07** · Zero and one. That's it. For example, if I have two bits, how many addresses I can form? You can form 00, you can form 01, you can form 10, and you can form 11. That's right. So, with two bit, I can form four addresses.

**43:23** · Four addresses.

**43:26** · Okay.

**43:27** · What about three bits? With three bits, I can form eight addresses.

**43:31** · How did I know?

**43:34** · 2 raised to power 1 equals to 2. 2 raised to power 2 equals to 4. 2 raised to power 3, which means 8. What are those eight addresses? 000, 001, 010, 011, 101, 110, and 111. So, these are the eight addresses I can form with three bits.

**43:54** · What about n bits?

**43:55** · With n bits, I can form 2 raised to power n addresses. I hope this point is clear.

**44:02** · Now, what I'm doing is I'm fixing the first bit. I'm fixing the first bit. What do you mean What do I mean by fixing the bit? Which means that bit cannot be changed. For example, if I For this case, if I fix this bit as zero, then how many address it can form?

**44:19** · It can form either 00 or 01. That's it.

**44:22** · Just two addresses.

**44:26** · This was the case one.

**44:28** · As you know, I have fixed the bit. I've not specified I have to fix it with zero or one. So, case two can be formed where I have fixed the bit with one. So, the another set of addresses with case one will be 10 and 11. And again, two addresses. So, what I've done is when I fixed a single bit, the whole set of addresses are divided into two sets, two subsets, two subsets of addresses.

**44:55** · Okay. Let's try here also. If I fix a single bit, the whole set of address will be again divided into two. Hey, did I miss something? Yeah, miss 100. 100. Okay. Now, what happens? I again fix this bit. I fix this bit. Okay. So, with fixing, I mean I can either fix it to zero or fix it to one.

**45:20** · Again, two cases are formed. With zero, I can form 000, 001, 010, and 011. With one, I can form 100, 101, 110, and 111. So, I fixed one bit, I found two subsets. What about if I fixed two bits, what will happen? So, if I fixed two bits, I can form like this. Case one will be 00. Case two will be Case two will be 01. Case three will be 10. Case four will be 11.

**45:51** · Because I have fixed two bits, so the number of cases will also increase. So, with 00, I can form 000 or 001. These two are fixed. So, with 01, I can form 010 or 011. With 10, I can form 100 or 101. With 11, I can form 110 or 111.

**46:15** · Are you getting the idea?

**46:17** · If I am fixing just one bit, the whole set of address is getting divided into two subsets, like here.

**46:23** · If I fixed two bits, the whole set of addresses are getting divided into four sets, four subsets. What if I fixed three bits?

**46:35** · If I fixed three bits, the whole set will be divided into eight part, which means all of them are different now. All of them will act as a case. I hope you are getting the idea where I'm reaching. So, if I fixed from n bits, from n bits, if I fixed the initial k bits, then total number of cases will be 2 raised to power k.

**47:00** · And each address in the subset will be of the size 2 raised to power n minus k. Are you getting the point? For example, look here. What is n? n is three. What is k? k is two.

**47:17** · So, with n equals to three and k equals to two, how many number of cases are we forming?

**47:25** · 2 raised to power 2 equals to four cases. And what is the size of each?

**47:28** · This is one, 2 raised to power 1 equals to two. So, the size of each each subset is two, one, two, one, two, one, two, and one, two. So, in the in the n bits, if I fix the initial k bits, 2 raised to power k cases will be there, and each subset have 2 raised to power n minus k number of addresses.

**47:51** · Okay. Now, why I'm teaching you this, you'll understand in few minutes. Till now, if anyone have any doubt, you can ask.

**48:02** · Is the concept clear?

**48:05** · Okay. Now, we are moving to IP addressing. What is IP addressing?

**48:15** · So, IP address is like a logical address.

**48:18** · Logical address.

**48:22** · Of size 32 bits. Of size 32 bits. Okay. Now, 1 2 3 4 1 2 3 4. This is an octet of eight bits. This is an octet. So, we'll have four such octets in an IP address. Octet one, octet two, octet three, and octet four. And we differentiate with them with a dot.

**48:52** · We differentiate them with a dot. So, if I have an address of 32 bits, total number of IP address will be if I have address of three bits, the total If I have address of three bits, total eight addresses could be formed with the formula of two raised to power three. So, if I have total 32 bits, the total number the total number of IP address will be two raised to power 32.

**49:15** · This is a very big number. This is a very big number. It's like 4 billion. Okay. So, initially, it was a time of I think 1980s, IP address were divided into two fixed part. The network ID, the network ID, and the host ID. The network ID and the host ID.

**49:41** · Okay.

**49:42** · Who Who was deciding this? IANA. Internet Assigned Numbers Authority. Okay, so out of 32 let's say I divided 32 into two parts of 8-bit and 24-bit.

**50:00** · So, this 8-bit, let's say name it as network ID and 24-bit as host ID. So, 8-bit will be acting as network ID and H ID will be acting as host ID. So, how many networks could be formed?

**50:12** · 2 raised to power 8, which means 256 networks could be formed.

**50:16** · Could be formed.

**50:18** · And I have 24-bit of host ID. So, in a single network, how many hosts could be there? 2 raised to power 24 hosts can be there. Are you getting the point why I explained you that concept?

**50:30** · So, you can you can use the same analogy. You can consider network as a case and host as a subset. So, I have 256 cases and each case have 2 raised to power 24 members in the subset. Okay? I have 256 network and each network have 2 raised to power 24 hosts. I hope the point is clear. If anyone have doubt till now, you can ask. Okay? So, you can express it like this.

**51:07** · Network one, let's let's name it as network one. It has 2 raised to power 24 IP addresses. Each address is given to one host. Let's say IP address one is given to host one. IP address two is given to host two. So, 2 raised to power 24 hosts could be given distinct addresses. So, network one, they have 2 raised to power 24 IP address. Network two, similar. Network three, similar. So, there will be like 256 networks.

**51:41** · There are 256 networks. Each network have 2 raised to power 24 IP address.

**51:45** · How many total IP address will be there?

**51:47** · This is 2 raised to power 8. So, this is 2 raised to power 32. From where we started. Okay? So, with a single IP with a with 32 bits with a 32 bits, we can create 2 raised to power 32 addresses. And we are dividing that address by fixing the bits. By fixing the bits. For example, if I fix the bit like this, 0 Now, they are eight. 0 0 0 1.

**52:17** · This means this is network one. And if I'm writing like this, Okay, let me explain it again. We are talking in octets, not in a single uh We are talking about the whole IP address, not about a single octet. So, let's say if I fixed this and I write like this, 0 0 0 0 0 0 0 1.

**52:39** · This means this is network one. And if I write like this, 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 and here 0 0 0 0 0 0 0 1. This means network one, host one.

**52:55** · I hope you got the point. How are we dividing it?

**52:59** · Okay, or I can explain more from there. 0 0 0 0 0 0 0 2. This means network one, host two. I hope you're getting the point. Same thing we are doing here.

**53:13** · Fixing the bits.

**53:15** · Network This was network one. This could be network two. So, this means network two host one, host two.

**53:24** · So, what is this? Tell me, what is this?

**53:27** · Which Tell me the network number and host number for Let's say this.

**53:34** · What is the network number and host number?

**53:42** · Yes. If I have assigned this network one, this could be network two, this could be network three, and this could be network four, and the host will be host two. Host number two. So, in this way, we are assigning the networks and the host.

**53:54** · Okay?

**53:56** · So, what happened? Let's say there are only 256 networks. There are only 256 networks. And each network has 2 raised to power 24 hosts.

**54:09** · Are you getting the point how much 2 raised to power 24 is?

**54:14** · 2 raised to power 20 is approximated to a million. And 2 raised to power 4 is 16. So, it's still 16 million hosts. In a single network in a single network, network one have 16 million hosts, which means 16 million computers could be present in network one. So, if there are only 256 network, and even a small organization must buy 16 million hosts to purchase one network. So, this is a problem to us.

**54:48** · And the number of networks are very less. The number of The number of networks are very less. So, we have to come up with a solution. We call the solution as classful addressing.

**55:00** · Classful addressing.

**55:07** · I'll give you an analogy of classful addressing, and then we'll start the technical part of classful addressing in the next lecture. So, what is classful addressing? We will understand with the help of telephone networks.

**55:19** · Telephone networks.

**55:22** · I'll take the case of India as I'm from India. In India, telephone network is 11-digit number. And this 11-digit number has two parts.

**55:33** · STD and DID.

**55:36** · And each telephone number is unique.

**55:39** · Each telephone number is unique. So, what happens?

**55:42** · We'll take the case of city, town, and villages. In the case of city, in the case of city, the big cities, the number of cities are less. Number of cities are less, and the people living in each city is more.

**56:01** · People are more.

**56:04** · And about villages, the number of villages are more. And the number of people are less. So, if I fixed something like this, if I fixed something like this that IANA did in 1980, that out of the four octets, let's give the first octet for NID and the rest for HID. This will be a classic failure.

**56:32** · Because the number of cities and the number of people same relation is not present with the number of villages and number of people in those villages. In city, people are more, but the big cities are less. So, what I want is I want lesser number of bits to represent the cities. For example, say we give three bit to STD.

**56:52** · It's like NID to identify the network, and eight bits for the TID to identify the phone number. For town, what we do? We give four bits to TID for STD, sorry. And seven bits to TID.

**57:07** · And for villages, what we do?

**57:09** · Five bits for STD, and six bits for TID.

**57:13** · Now, what happens?

**57:16** · So, the ID.

**57:17** · With three bits, with three bits, what we can do is we can represent 000 to 999.

**57:28** · Thousand cities.

**57:30** · Thousand big cities.

**57:31** · And each city could have the number of people 1 2 3 4 9 9 9 9 9 9 9 9 These number of people each city can have.

**57:43** · What about town?

**57:46** · How many town can be present?

**57:48** · 9 9 9 9 These could be number of towns which have the number of people ranging to maximum this much. What about the village?

**58:00** · The number of villages can be more. So, 9 9 9 9 9 This could be number of villages and in each village the maximum population a village can have will be this. Or the maximum number of four numbers a village can have will be this.

**58:18** · Same telephonic concept will be applied into the area of computer networks for addressing IP addressing. So, what are we going to do?

**58:26** · Like we divided the 11-digit 11-digit telephonic numbers into STD and DID based on classes. Like cities, cities, towns, and villages. Same way we are going to do with the IP address here. IP address 32-bit IP address We are going to divide these 32 bits into NID and HID based on the classes. Class A will have less number of networks and more number of host.

**58:55** · Class C will have more number of networks and less number of hosts. Class will be like a town in between. So, what happens?

**59:03** · The sum is 32 bits as the total IP address is 32 bits. So, out of 32 bits, eight bits will be given to NID and 24 bits will be given to HID. So, there will be 256 networks and each network will have 2 raised to the power 24 host. And this class A type networks are used for big organizations like NASA and ISRO. Class B It's like the middle one.

**59:28** · 16 bits for an ID and 16 bits for an HID. 2 raised to the power 16 networks and each network have 2 raised to the power 16 hosts. It's used for MNCs like TCS and Wipro. Class C network more number of networks, less number of hosts.

**59:45** · 2 raised to the power 24 bits of an ID which means there will be 2 raised to the power 24 networks and each network will have 2 raised to the power eight hosts. It's used for small organizations like schools and colleges. But you know the problem which I discussed before that let's say if someone someone wants to buy let's say 1,000 hosts.

**1:00:10** · Someone wants to buy a network 4,000 hosts. Which class should he approach?

**1:00:15** · Should he approach class A? No. Should he approach class B? Approach class B. Because in class C class C the number of networks are 2 raised to the power eight which is just 256. So he has to approach class B.

**1:00:27** · Now the total number of hosts in a single network of class B, you know how many they are?

**1:00:33** · 2 raised to the power 16 which means 2 raised to the power which means 65,536.

**1:00:43** · And out of these I'm only going to use 1,000. So how many will be wasted or how many extra hosts I have to buy?

**1:00:52** · These many extra hosts I have to buy. So the problem still remains. Let me Let's say you want to buy a cake. You want to buy a cake for your friend. Okay. And the friend said that I want a 3 kg cake. And and the shopkeeper have pieces of cake of this 2 kg.

**1:01:11** · Friend wants 3 kg of cake so you won't going to you are not going to pick up the 2 kg piece. 3 kg means 3 kg. So you have to pick up this 10 kg part. Which means 10 minus 3 equals to 7 kg will be wasted. Now what is the solution? The solution is you go to another shop which have not made a made the pieces of the cake already.

**1:01:31** · It cuts the cake based on the need, based on the demand. So when you say you want a 3 kg cake a 3 kg piece will be picked up and given to you. A very less or no wastage. No wastage. Here the wastage was 7 kg and here there's no wastage. So this is what classless addressing is.

**1:01:58** · This is classless addressing and that was classful addressing. So which is better? Classful addressing or classless addressing? Obviously classless addressing is better because classful was a older concept.

**1:02:10** · Okay. Class A has eight bit of an ID and 24 bit of HID. 16 bit of an ID for class B, 16 bit for HID and 24 bit an ID for class C and eight bit of HID. So this was the theoretical concept which we came up similar to the telephonic uh concept where we divided the STD and TID. HID and NID and TID. So this was the theory.

**1:02:39** · Now how we actually implemented this now we are going to understand. We do bit IP address. What we did? We fixed the first bit 0 0 0 till the end and then 1 1 1 1 1. Okay. So when first bit is fixed this 2 raised to power 32 address space will be divided into two address space of 2 raised to power 31 and 2 raised to power 31.

**1:03:07** · So this address space is 2 raised to power 31. This is 2 raised to power 31. We call this as class A. And this is expanded here. Okay? So, one was already fixed. We fixed another bit also. 0 0 0 0 0 0 and then here 1 1 1 1 1. We call it as class B. And this part is again expanded. We fix another bit here. 1 1 0 1 1 0 1 1 0.

**1:03:40** · 1 1 0 and here 1 1 1 1 1 1 1 1 1 1 1. In this manner. We call it as We call it as class C. And then let's expand it and down. 1 1 1 0.

**1:03:57** · Class D.

**1:03:58** · And 1 1 1 1 as class E. We did like this. So, class A has fixed bit of class A has fixed bit of 0. Class B has fixed bit of 1 1 0. So, class B has fixed bit of 1 0. Class C has fixed bit of here 1 1 0. So, class B has class C has fixed bit of 1 1 0. Class D.

**1:04:28** · 1 1.

**1:04:30** · 1 0 and class E as 1 1 1 1.

**1:04:36** · Is the point clear now how we did?

**1:04:38** · We initially began with a 32-bit IP address address space. We divided into two parts. The first one is class A and the remaining part is again divided into two parts. And then the first part becomes the class B. And the remaining part is again divided into two parts. The first part became the class C. And the remaining part is again divided into two parts. Class D and class E.

**1:05:02** · Is the point clear? Why we stopped here?

**1:05:04** · Because we just wanted five classes.

**1:05:08** · So, for five classes what we did?

**1:05:11** · This was let's say 2 raised to power 32-bit address space. So, we divided into first two parts. 2 raised to power 31 and 2 raised to power 31. We call it as class A. And then 2 raised to power 31 is divided into two parts. Class B. So, this has 2 raised to power 30 and this part is 2 raised to power 30. Now, this is again divided into two parts. This becomes class C.

**1:05:36** · So, the class C has 2 raised to power 29 and the remaining part is 2 raised to power 29. Now, this remaining part is again divided into class D and class E. So, remaining part have 2 raised to power 28 and 2 raised to power 28 IP addresses. So, this is how it's actually implemented. This is how we bifurcated the cake.

**1:05:57** · We divided the IP address space into classes. So, the number of IP address present in class A will be 2 raised to power 31. In class B, it will be 2 raised to power 30. In class C, it will be 2 raised to power 29. In class D, it will be 2 raised to power 28 and in class E also, 2 raised to power 28. Okay? And the fixed bit of class, this is fixed bit.

**1:06:19** · And this is class name. Okay? So, you have to remember 0, 1 0, 1 1 0, 1 1 1 0 and 1 1 1 1. So, class A, class actually comprises of 20 50% of the total address space.

**1:06:39** · Class B, 25%.

**1:06:42** · Class C, 12.5%.

**1:06:44** · Class D, 6.25% and class E also 6.25%. Okay? Now, let's understand the representation of IP addresses. So, we have three representation. The first one is binary. The second one is decimal. And the third one is hexadecimal.

**1:07:11** · Hexadecimal.

**1:07:12** · Binary you already know. 32 bits of four octets. Octet means eight bit each. So, it could be like this. So, the full re- binary representation of IP address is like this. 1 1 0 0 1 0 0 0 1 1 1 1 1 1 0 0 or you can write anything like 0 0 1 1 1 1 1 1. How many are there? 1 2 3 4 and 1 2 3. Let's remove one.

**1:07:40** · These are Okay. And the last could be 1 1 1 1 0 1 1 1.

**1:07:45** · Okay.

**1:07:46** · Now, what will be the decimal representation? I have already taught you how to convert This is 2 raised to power 0. This is 2 raised to power 1. 2 raised to power 2. 2 raised to power 3. 4 5 6 and 7. You ignore the zero zero part and you take the weight of one part and add them. So, this will become I think 200.

**1:08:09** · This will be This will be 252. I taught you to uh remember these values. 1 2 3 4 5 6. If six ones are from the left, the value is 252. If seven ones, then 254. Eight ones, 255. If only single one, 192. Sorry, 128. Double ones, 192. Triple ones, Okay. Let me just write. Just single one, 128. Double ones, 192.

**1:08:33** · Triple ones, 224. Four ones, 240. Five ones, 1 2 3 4 5. 248. Six ones, 252. Seven ones, 1 2 3 4 5 6 7. 254. And eight ones, 1 2 3 4 5 6 7 8. 250 5. Okay. So, this is 255 and then this is 1 2 3 4 5 6. Six ones from the right. What was six ones from the right? 2 raised to power 6 minus 1, which is 63.

**1:09:06** · And then in the end See, the full will be 255. And eighth position, the value of uh this the weight of this bit is eight. So, 255 minus eight is 247. So, this will be 247. You can do this smartly, also. You do not have to always calculate by just adding the weight of all. You can also use the trick of subtraction. 255 minus and then eight.

**1:09:35** · What will be the hexadecimal?

**1:09:37** · C8 I've already calculated this. C8 FC 3F and 4F and it is seven. How did I did it?

**1:09:52** · See, what I have done is I have divided these into four four bits, and I have just converted them into hexadecimal format. So, what is this?

**1:10:04** · This is 12. So, do you know how to convert?

**1:10:09** · From zero to nine, it is same like binary. And from 10, 11, 12, 13, 14, 15, it's like A B C D E F. So, this is 12. This is 12, that's why I've written C here. And 1 0 0 is eight, that's why eight. 15, so 15 is F. So, C and then again 12, then C.

**1:10:35** · 3F, this is what? Three. And then 1 1 1 1 is F. So, in this way I have written hexadecimal. So, I hope you got the understanding of the representation of IP addresses.

**1:10:48** · Okay?

**1:10:49** · Now, let's understand the class A in detail. Class A It has 2 raised to power 31 IP addresses. We have already discussed this addresses.

**1:11:06** · How we got 2 raised to power 31?

**1:11:09** · Class A has eight bits of an ID. And 24 bits of HID. And from the eight bit, I have fixed the first bit as zero. You know, we have just discussed this thing.

**1:11:23** · Fixed bit is zero. So, I have fixed the first bit as zero. Now, how many NID it has? Seven NIDs, seven bits. So, from seven bits, how many networks it can generate?

**1:11:36** · Seven means 2 raised to power seven, which means 128. So, it can generate 128 networks. Okay. So, let's uh write here.

**1:11:46** · Seven bits.

**1:11:47** · And then remaining 24 bits here. Zero is already fixed. 1 2 3 4 5 6 7. Then zero. 1 2 3 4 5 6 7. From 0000000 to 1111111. This could be the network ID of Class A. Okay. Now, the thing is you have you have to remember this that these two this one and this one.

**1:12:19** · These two network addresses are not generally given because they have a specific purpose. What specific purpose?

**1:12:26** · This address zero.

**1:12:29** · Zero from network ID and all the host values are also zero. Zero .0.0. What does this mean? That all the eight bits are zero. This is not given to any of the network. This is used as the default route. Default route or DHCP client. We are going to learn it later, but for now you have to remember this that 0.0.0.0 is not given to any host DHCP client.

**1:13:02** · And what about this?

**1:13:04** · This is not given and this is not given.

**1:13:05** · What about this?

**1:13:06** · This is 127. 127.x.x.x. What does this mean? That host value can be anything. Host value can be anything. This is also not given to any network. Why? Because this is used for loopback testing.

**1:13:28** · Loopback testing.

**1:13:29** · Or self-connectivity for self-connectivity. What is this? We are going to learn in few minutes, self-connectivity. Or you can also call it as inter for interprocess communication.

**1:13:42** · For interprocess communication.

**1:13:45** · Okay?

**1:13:48** · Now, there's a specific note that you have to remember. What note is?

**1:13:55** · Whenever all the whenever we have all bits either zeros or one in network ID or host ID they are not given to any of the host. Which means these IP addresses are not assigned.

**1:14:12** · Not assigned.

**1:14:17** · What does this mean? This means that for these 24 bits, if these 24 bits are all zero or all one then they will be not assigned to any of the host. Okay? So, let me repeat. Whenever we have all zeros or all ones either in network ID or in host ID of any IP address, these IP addresses are reserved for special purpose, so we cannot assign these IP address to any host, which means the computer.

**1:14:46** · Okay? So, whenever you see an ID or HID you have to deduct them from the valid addresses to be assigned to some host. Okay, so we have 2 raised to power 7 minus 2 which means 126 networks in class A. Why 126? The first one was for DHCP client.

**1:15:08** · And the second one was for loopback testing. What is loopback testing in DHCP? We will learn later. You just have to remember why we have deducted these two. So 126 networks in class, sorry, A. And how many host? 2 raised to power 24, but you know, we have reduced two, all zero and all one.

**1:15:26** · Minus two.

**1:15:27** · So these could be the number of host in a network of class A. Why we deducted this? 0 0 0 not valid. All ones also not valid. Okay, which means 255.255.255 not valid. Similarly here, X cannot be all zero or 255.

**1:15:54** · Okay?

**1:15:55** · Now, what is what is this loopback testing I was discussing about? And what was the default route? This default route part we are going to learn in later lecture, but for loopback testing, we will let's see here. For example, I have a computer A communicating with computer B.

**1:16:14** · Here.

**1:16:16** · Let's say there's some intermediary node in between. Now, what happens is computer B do not receive the message sent by computer A.

**1:16:24** · Now, what could be the problem?

**1:16:27** · So when we start testing, what we do?

**1:16:30** · We check that whether the router has received the message or not. The message has reached the router or not. We check that is router okay or not? So, the first check we do is of is router receiving the message or not.

**1:16:49** · Is router forwarding the packets?

**1:16:51** · Forwarding the packets or not?

**1:16:55** · Then we check Let's Let's mark them.

**1:16:57** · Let's mark these problems. The first problem we checked was is router receiving the packets?

**1:17:01** · The second problem we checked was is router forwarding the packets? Is there any problem in the link or not?

**1:17:08** · Okay? So, these three things we have checked. The first thing is this link. The second thing is this link and the third link is is router okay or not.

**1:17:15** · Now, there are two different things that we have to check. The first one is is B receiving \[clears throat\] the message?

**1:17:23** · Is B receiving the message or A is able to send message or not?

**1:17:27** · So, what they are going to do to check this the loopback testing. Loop back testing.

**1:17:37** · How it's done?

**1:17:38** · Suppose the IP address Suppose the IP address of A is 10.31.92.57. This is the IP address. Now, sender IP address and destination source IP address and destination IP address. So, the source IP address will be 10.31.92.57 and the destination IP address it will not put of B. It will put 127.x.x.x, whatever value. What is the point of doing this? The point is whenever router is going to see

**1:18:30** · But you want to point to that. Loopback testing on that you do what I said earlier. Let's understand loopback testing. For example, we have two computers A and B. And we have intermediary node in between. Let's say this is router. Okay. Now, B is not receiving the message sent by A. How are we going to check where the problem is? So, let's start.

**1:18:58** · First thing is is the router okay?

**1:19:00** · The second thing is is this link okay?

**1:19:02** · Is this link okay?

**1:19:05** · Now, fourth or fifth thing we are going to check is is A able to send the message or B is able to receive the message or not. So, this is done using loopback testing. Loopback testing. What we do? Let's say the IP address of class the IP address of this computer A is 10.31.92.57. Okay. So, source IP address will be this. And the destination IP address will not be of B. It will be 127.x.x.x.

**1:19:38** · What does this mean? This means that A will send the message to itself. And if it is able to receive the message, which means it's able to send the message also. Same thing could be done by here, B. If B can receive the message sent by B itself, which means it can also receive the message sent by A. So, this is where loopback testing is used.

**1:20:02** · Now, there's very important point. You cannot use this address 127.x.x.x as source IP. You cannot do this. You must always be very careful that you always put this into the destination IP part. Okay. So, 127 .x.x.x will always be destination IP.

**1:20:28** · Okay?

**1:20:32** · And cannot be assigned to any can't be assigned to any host. So, these two points you have to remember.

**1:20:44** · Okay?

**1:20:46** · \[sighs\] Should we continue the class and and keep on understanding class B or we should do in the next lecture?

**1:20:54** · I'll do as you say. We can understand class B, class C and we can also go forward like class D and class E and then we can end the class uh with a summary. And then from the next lecture we will solve some of the practice problem on this.

**1:21:13** · Does this sound okay or should I should explain this class B, C, and D, and E into the next lecture?

**1:21:23** · Okay, so everyone is saying that we should continue in this lecture only, so let's continue here.

**1:21:28** · Class B.

**1:21:30** · Okay. So, class B we have fixed in the NID 1 0. So, this was the NID part, two octets more for the HID. This was the NID part. So, in class B we have fixed 1 0 bits from the first octet of NID.

**1:21:49** · Now, how many how many are remaining?

**1:21:51** · Six from here and eight from here. So, 2 raised to power 14 will be the total number of networks.

**1:22:00** · Total number of networks. Should Should I have to subtract something from there?

**1:22:03** · No.

**1:22:04** · Because 1 0 even if even if everything becomes zero also, in that case also, the NID is not completely zero. Not completely zero because of this 1 0. While in class A it was become completely zero because the first bit which was fixed was also zero. So, here you do not have to subtract anything from the total number of networks.

**1:22:27** · Then what about HID?

**1:22:28** · What about HID? So, we have eight bits, eight bits, which means 16 bits for the HID, which means 2 raised to power 16 addresses for the HID. Are these 2 raised to power 16 address eligible to be assigned to some computer? No. Why? Because here, HID could be all zero and all one. So, these two cases should be excluded, which means 2 raised to power 16 minus two. These will be number of host per network.

**1:23:04** · And what will be the total number of network?

**1:23:08** · 2 raised to power 14.

**1:23:11** · Is the point clear?

**1:23:14** · Do anyone have to ask some doubt or something you're not able to grasp or any question?

**1:23:23** · Everything okay? Okay, let let me explain it in a different way. Suppose, \[clears throat\] I start with 128 because the first bit is 1 0, so 1 0 and then this part is of an ID and this part is of HID. Even if I put all zero here, all zero, all zero. What is the value? 128.0. Now, what comes? The HID part.

**1:23:54** · HID part.

**1:23:55** · So, this is the network ID, first network ID, first network ID.

**1:24:03** · Now, what will be the second network ID?

**1:24:04** · 128.1.

**1:24:06** · What will be the third network ID?

**1:24:08** · 128.2.

**1:24:10** · Second network ID.

**1:24:11** · Third network ID.

**1:24:13** · So, 128.255, the maximum it can reach with the fixed value of 128.

**1:24:21** · Now, what will happen?

**1:24:23** · It will go towards 129. And then 129.0, and then 129.1, and then 129.2 till 255. And after that, 130 from 0 to 255. And then from 131, 0 to 255.

**1:24:42** · Till till What's the maximum value it can reach?

**1:24:48** · Can it Can it reach 255? No, it cannot reach. Why? Why so?

**1:24:53** · The maximum it can reach is 255 minus 64 which is 191. How did I get this? See here. 1 0 So, the last last network of class B will be 1 1 1 1 1 1 1 1 1 1 1 1 1. This is 255 minus This was 64, so it's equals to 191. And from 191, 0 to 255. So, the last network will be 191 .255. Let me repeat again. We started with 128.0.

**1:25:39** · Reached till 255. And then 129.0, reached till 255. And then 130.0, reached till 255. And then in the last, the maximum value which we can reach is 191.0 to 191.255.

**1:25:58** · So, what is this? 191 dot minus 128 What is 191 minus 128?

**1:26:12** · 63.

**1:26:13** · But, you know, whenever you count, for example, how many numbers are there in 1 to 10?

**1:26:19** · They are 10 numbers, not nine. Well, how did I calculate it? 10 - 1 + 1. Okay. So, in the same way, if someone asks how many numbers are there from A to B? I'm not asking between A to B. I'm asking from A to B, which means also calculating A and B.

**1:26:36** · So, this will be B - A + 1. Similarly, 191 - 128 = 63 + 1 will be 64. So, from 128, also including 191, there are 64 numbers. So, 64 into each going from 0 to 255. Each going from 0 to 255, which means total 256. So, this is 2 raised to the power 6. Sorry, 2 raised to the power 8. This is 256. And this is 2 raised to the power 6.

**1:27:09** · If you multiply, what is this? 2 raised to the power 6 into 2 raised to the power 8, which is 2 raised to the power 14. Isn't 2 raised to the power 14 is the number of networks in class B?

**1:27:19** · We just seen 2 raised to the power 14 is the total number of networks in class B.

**1:27:23** · I hope you are getting the point. How are we calculating?

**1:27:27** · Let me repeat again, again. If you are If you have already understood, \[clears throat\] you can just listen again. What are we doing here? We have In class A, we have fixed the first bit, zero. And then, we have just seven bits. So, 2 raised to the power 7 - 2. Why two? Zero and the one part.

**1:27:49** · They are excluded.

**1:27:51** · For class B, we have 1 0 fixed, six bits remaining. And another octet also given to an ID, eight bits.

**1:27:59** · And then, two octets for HID. So, total 2 raised to the power 14 will be the total number of networks, and each have 2 raised to the power 16 - 2. Why minus two?

**1:28:12** · All zero and all one will be excluded.

**1:28:17** · Excluded.

**1:28:18** · Okay. So, till now we have completed class B. Now, let's move toward class C.

**1:28:24** · \[clears throat\] Class C.

**1:28:28** · Should I write it here or class C. In class C, we have eight bits, eight bits, and eight bits. These are all given to NID and the last octet is assigned to HID. Eight bits, eight bits, and eight bits. So, there are 2 2 raised to power 24 and this is 2 raised to power 8. So, the total number of host in a single network will be 2 raised to power 8 minus 2.

**1:28:56** · It will be 62. This was 60. Uh did I make a mistake? 2 raised to power 8 is 256. 256. 256 minus 2 is 254. So, the total number of host will be 254.

**1:29:11** · Okay?

**1:29:12** · Total number of networks will be more.

**1:29:14** · How many will be there?

**1:29:19** · We fixed 110. So, how many remaining here? Five. So, 8 and 5 13. 13 and 8 21. So, 2 raised to power 21 will be the number of networks networks in class C and 254 will be the number of host in a single network of class C.

**1:29:44** · Okay?

**1:29:47** · Is the point clear?

**1:29:52** · Let's move toward class D and then we will see the uh uh an identification trick that we we are going to just see the first octet and we can identify from which class does the IP address belong. Okay? Now, let's to move toward class D. Class D have 1110 as fixed. And you know, there's a special thing about class D and class E. There is no concept of NID.

**1:30:17** · There is no concept of no NID, no HID.

**1:30:22** · 1110 is fixed. How many are remaining?

**1:30:25** · How many are remaining? 2 raised to the power 24. 28 are remaining. Four are fixed, 28 are remaining. So, these will be the number of IP addresses. Similarly for class E, 1111. How many are remaining? 2 raised to the power 28. So, these will be the number of IP addresses. There is no concept of NID or HID in class D and E. Okay, class D is reserved for multicasting.

**1:30:51** · And class E for research purposes or future purposes. Research and future purposes. Research and future purposes.

**1:31:03** · Okay?

**1:31:04** · Okay?

**1:31:05** · Now, let's see the identification trick. Class A, the first bit was zero.

**1:31:14** · And the rest was ranging from 0000 from 1 till 11111 and 0. You know, if it was all 1, then it was 127, which was used for loopback testing. So, it couldn't couldn't be all 1. So, it has to be zero. Now, if it was all zero, then it was used for DHCP. So, it couldn't be all zero. So, it has to be 1. So, class A has a range of 1 to 126 in the first octet.

**1:31:44** · Class B, so, class A has a range of 1 to 126.

**1:31:48** · Now, what about class B?

**1:31:50** · Class B has 10 already fixed. Now, remaining six bits. They could range from 000 000 all zero to all 1 111 111. How? Class A was not given the privilege to become all zero and all one because of this zero. If everything became zero, then it is used for DHCP. For 127, it was used for loopback testing. But here, it is 1 zero already.

**1:32:18** · So, even if they all become zero or all become one, it's okay. They are the whole is not becoming zero or one.

**1:32:25** · Okay. So, this value is 128 and this value is 191. So, class B has a range of 128 to 191. What about class C? You're going to calculate in the similar fashion, 110. It could be all zero and all one. So, this will become 192 to 223. How I'm going to get How I'm calculating so fast? Because I have remembered this. And you also have to remember this.

**1:32:48** · This range is a must to remember. This range you should remember.

**1:32:56** · Okay. What about class D?

**1:32:59** · Class D have 224 to 239. And what about class E? Class E have 240 to 255. Okay.

**1:33:07** · Let me draw the table again. Class A has a range from 1 to 126. Class B has a range from 128 to 191. Class C has a range from 192 to 223. Class D has a range from 224 to 239. And class E has a range from 240 to 255. You have to remember this table. And um let let me also write the number of IP address 2 raised to the power 31, 2 raised to the power 30, 2 raised to the power 29, 2 raised to the power 28, and also 2 raised to the power 28.

**1:33:41** · Okay?

**1:33:42** · Should I also write the number of host and number of uh networks?

**1:33:49** · Networks and hosts.

**1:33:52** · So, class A has 126 networks and host will will 2 raised to the power 24 minus 2. Class B have 2 raised to the power 14 network and host will be 2 raised to the power 16 minus 2. Class C have 2 raised to the power 21 networks and the number of host will be 2 raised to the power 8 minus 2.

**1:34:09** · And class D and class E do not have a concept of an ID or HID. No NID, no HID.

**1:34:16** · Okay?

**1:34:19** · Now, I have a DPP for you. You can try to solve that DPP and in the next lecture, if you have any doubt, you can ask me. Okay. So, before solving the DPP, let me tell you in few minutes what are the properties of IP address which will help you to solve the problems. So, the first thing is uh there can be questions like this.

**1:34:39** · From which among the following option the IP address is of class B, let's say. So, how are you going to identify from 32 bits of long IP addresses, you're going to just see the first two bits. If it is 1 0, then it will be from class B. If it is 0, it will be from class A. In such manner. If it is 1 1 0, then class C.

**1:35:01** · If it is not in decimal, if it is not in binary, then it may be in the decimal format. So, how are you going to identify? Using this range. Suppose it's like 163.

**1:35:12** · Tell me from which class does it belong?

**1:35:15** · Yes, class B.

**1:35:18** · Okay. So, in this manner you are going to identify. Now, there may be some other questions like which of the following is not a valid IP address. How are How are you going to identify? You have to see that no decimal value in IP address can surpass 255. If it is something like this, like 10.256.100.100, then this is not a valid IP address.

**1:35:41** · Okay? So, each and every value of the socket will be from 0 to 255.

**1:35:49** · Okay?

**1:35:51** · This could be asked like which of the following address can be used for interprocess communication in a host or loopback or self-connectivity, then 127.x.x.x. This could be the answer. And you have to be very, very careful that this can never be source IP address. It will always be destination IP address. Okay? I have discussed this in the topic of loopback testing. Okay? Conversions questions could be there that suppose C22F1582.

**1:36:22** · This is the hexadecimal notation of an IP address. Now you have to convert into let's say decimal. How are you going to convert? You can do it like this. You have to first convert into binary and then you can convert into decimal. I hope you all know this how to convert hexadecimal into binary.

**1:36:44** · C, what is C? 12, which means 1100. What is 2?

**1:36:49** · 0 010. is 2 again? 0010. So this will become the first octet.

**1:36:56** · What is this?

**1:36:58** · This is 192 and this is 2. So this will be 194. Dot.

**1:37:04** · 1111, F is 15. So what is this?

**1:37:08** · This is I think 47. So the second octet have a decimal value of 47. So you have to do it for these two also in such manner. I hope the point is clear. Okay? You can try more questions. For example, uh 172 A84C8. Try to convert it into decimal. You can do like this. Uh the method which I taught you. Just try it. Solve it. I'm giving you 30 seconds to solve this.

**1:37:47** · And do not make some silly mistake of computation. Keep the work neat and tidy. Solve it systematically and you won't face any problem. Okay. So, you would have solved with a method of this. First, you convert it into binary and then decimal. You can also do like this. And convert directly from hexadecimal to decimal.

**1:38:23** · Hexadecimal to decimal direct conversion. How do we do that?

**1:38:26** · Base is 16, so 16 raised to power zero into seven plus 16 raised to power one into one. What is this? Just seven. And what is this? 16. So, this is 23. So, the first octet will be 23.

**1:38:40** · The second octet will be in the same manner. What is A?

**1:38:43** · A is 10. So, 10 plus 16 into two, 32. This will become 42. And then the same manner, four plus 16 into eight, this will become 132. And then again, 12 into 16 plus eight, this will become 200. So, the conversion value will be 23.

**1:39:06** · 42.132.200.

**1:39:10** · Okay.

**1:39:10** · So, these type of questions may be asked. This was all the easy part and now let's go into more technical ones. Suppose a question could be like this. Suppose instead of using 16 bits for network part of class B, class B and ID, suppose instead of 16 bits, I'm using 20 bits. Now, tell me the number of class B networks and host.

**1:39:35** · Networks and host.

**1:39:39** · 20 seconds again, solve.

**1:39:50** · What we have done before?

**1:39:53** · Before, 16 bits were assigned. 10 was fixed. Remaining were 14 bits. So, we said 2 raised to power 14 were the number of networks. Now, what are What are we doing? Instead of 16 bits, we are assigning 20 bits. 10 is again fixed. 18 bits are remaining. 2 raised to power 18 will be the number of networks. What about number of hosts? So, out of 32 bits, 20 bits were assigned to an ID.

**1:40:16** · How many are remaining? 12 bits are remaining for HID. So, how many hosts? 2 raised to power 12. Minus two. Why two? Because all zeros and all ones are not allowed. So, this will be the number of hosts. This simple question may be asked.

**1:40:33** · You can make it like something like this also that maybe number of networks uh 2 raised to power M, and the number of hosts 2 raised to power N minus two. Let's say in class B.

**1:40:46** · Then, what will be the relation between M and N?

**1:40:50** · You can solve like this. Again, 10 seconds, try to solve. This is very easy question. Number of networks in class B will be 2 raised to power M equals to 2 raised to power 14. So, I'll say M equals to 14. And number of hosts in class B will be 2 raised to power N minus two equals to 2 raised to power 16 minus two. So, I'll say N equals to 16.

**1:41:17** · What is the relation?

**1:41:20** · 8M equals to 7N.

**1:41:22** · That's the relation.

**1:41:26** · Okay?

**1:41:27** · Anyone have any doubt? You can ask me.

**1:41:42** · You can also see questions like this that how many bits are allocated for an ID and HID?

**1:41:48** · For an IP address like this, 23.192.157.234.

**1:41:55** · How many bits are assigned for an ID and how many for HID?

**1:41:59** · You can see this number. This is 23. What does that mean? That this belongs to class A. And in class A, eight bits are assigned for an ID and 24 bits are assigned for HID. I hope the point is clear. So, you have to remember the range. That's why I have told you. So, when you see this, you can directly, in a moment, can tell that this IP address belongs to class A.

**1:42:25** · Okay? Anyone have any doubt?

**1:42:28** · You have to remember this table. Where it is gone? This table. You should remember the number of IP addresses, the range, number of networks, number of hosts. They will come handy if you directly remember them.

**1:42:44** · Okay?

**1:42:45** · Now, there is some important thing I want to tell you that you have to be very careful what is asked in the question. Read the question very carefully. Whether they have asked the addresses or the hosts.

**1:43:01** · Whether they have asked the addresses or the hosts. For example, if I ask what is the possible number of networks and addresses in each network under class B in IP 4 addressing. What would you say?

**1:43:13** · Suppose, uh in class B in class B, 16 bits are assigned for an ID and 16 bits are assigned for HID. Out of 16 bits, one zero is fixed, so 2 raised to power 14 will be the number of networks. And how many addresses? 2 raised to power 16. And I have told you that you have to subtract two. So, is this the answer? No, This is wrong.

**1:43:34** · This is the number of host. For host, you subtract two. But, how many addresses are there? Addresses will be 2 raised to power 16. So, when you are asked that tell me the host, then you have to subtract two. When you are asked tell me the addresses, then you have to answer directly. So, the answer will be 2 raised to power 14 and 2 raised to power 16.

**1:43:57** · Okay?

**1:44:00** · Only subtract when you are asked about the host. Things questions like this may be asked. Tell me from which class does this belong? 200.198.32.65. You can directly see that this number lies between 192 to 223. So, this is the range for class C. So, it belongs to class C.

**1:44:22** · An easy question.

**1:44:24** · Okay. Percentage questions could be asked that uh class D network.

**1:44:30** · How percentage of address occupied by class D will be? How much?

**1:44:35** · We have made a diagram here. 50% are occupied by class A. 50% occupied by class A. Out of the remaining 50% we divide it into two part. 25% is occupied by class B. And out of the remaining 25% we divide it into two part. 12.5% is occupied by class C. And out of the remaining 12.5% we divide it into two part D and E. So, D will occupy 6.25%.

**1:45:04** · Okay?

**1:45:08** · These type of questions would be asked.

**1:45:10** · Nothing more.

**1:45:12** · Okay?

**1:45:14** · Again, from loopback testing and all these could be asked. And there's a there's a one thing which you should remember that for classful addressing, classful addressing, large part of IP address are generally wasted. Because the needs are not exactly matched. Either you have to buy a lot more or you have to suffer with a lesser available networks, lesser number of available host.

**1:45:38** · Okay, for example, if I wanted to buy a host 70,000 host, I have to buy a class A network. And class A network offer a lot a lot more than 70,000. So, those will be wasted.

**1:45:53** · Okay?

**1:45:54** · So, I hope everything is clear now. Wastage is a lot. Wastage is really a big concern in classful addressing. Let me give you another example. In class A, 2 raised to power 24 IP addresses are there in one network. Class B, 2 raised to power 16 IP addresses are there in one network. In class C, 2 raised to power eight IP addresses in one network. Suppose an organization need 2 raised to power 20 IP addresses.

**1:46:22** · So, which network it should buy? Obviously, class A network it should buy. So, out of 2 raised to power 24 minus 2 raised to power 20. Now, you may see that this number is not a such of big wastage. But when you are going to solve this, when you are going to solve this that this is 2 raised to power 20, 2 raised to power 4 minus 1.

**1:46:43** · So, this will be like 2 raised to power 20 into 15. These are 15 million. Are you getting the point? These are 15 million. 15 million addresses were wasted. This was when when we were using 1 million. And what if you are just using like 70,000, then the wastage would be a lot more.

**1:47:08** · How are you going to solve this?

**1:47:11** · How are you going to solve this? With the help of classless addressing. Okay? Okay, now, that is enough for this lecture. You may solve the DVB for And where whatever problem you encounter, you can ask in the next lecture. By the way, all the problems are very easy. You will be able to solve them in one go.

**1:47:31** · Okay, bye.

**1:47:33** · Good morning, class.

**1:47:34** · How are you all?

**1:47:38** · Everything good?

**1:47:41** · Okay. So, if anyone have any doubt from the DPP or the lecture, you can ask now. Okay. Okay. So, student has asked about the protocols. Protocols from the data communication part. From the first lecture, we discussed that data communication has five components: sender, receiver, message, transmission medium, and protocols.

**1:48:11** · Okay. So, you want to know more about protocols, like what are they or how do they work?

**1:48:16** · Okay. So, protocol means rules, already predefined and set among sender and receiver so that synchronization happens between them. And why why we need synchronization?

**1:48:32** · Because, let's say, the sender has the capacity to send 100 Mbps, but the receiver can only process 1 Mbps. Soon, the receiver will be overloaded and the data will be lost. Another thing, you know, when receiver receives the data, it receives it like this fashion.

**1:48:53** · It doesn't know what is the meaning of each bit. What is address?

**1:48:57** · From where the message is started, it knows nothing. So, there must be some predefined rule that, let's say, these few bits are the source IP address. These few bits are like the destination IP address. The remaining may be the messages. We need rules before beforehand. Okay. So, these protocols are the predefined rules set among receiver and the sender so that synchronization happens so that they can work upon which is already agreed.

**1:49:24** · Okay. Protocols have You can define protocol or the key elements of the protocol will be the syntax, the order, like this that these few first will be source IP then the destination IP and then the message. So, the syntax will be a key element. Semantic, like what is the meaning of each section of bit. You have said that these bits are fixed, these bits are fixed. This is what syntax was.

**1:49:50** · Now, this section of bit is the SIP. This section of bit is the destination IP. You are giving meaning to the section of bit. This is called semantics. And the third thing is time. When the data will be sent and how fast it will be sent. Otherwise, the receiver may be overloaded and data may be lost.

**1:50:12** · Okay.

**1:50:17** · So, it was nice that you asked. We have discussed protocol.

**1:50:22** · Any other doubt someone have?

**1:50:27** · Okay.

**1:50:29** · Okay, for identification, okay, let let me discuss it very formally. So, another question or another doubt which you asked was how are you going to identify and uh from which computer which process has uh res- uh has requested for the data. Okay. So, we call it as the identification problem. It was a very nice doubt. Identification problem.

**1:50:50** · Okay, let's discuss.

**1:50:52** · So, firstly, you have to identify the network because there are so many networks and data or the host can be sitting in any of the networks. So, you have to first identify the network. Later, we will study that there are subnets also. So, if subnet is present, then you you have to identify the subnet, too. But, let's keep the case simple. You have to first identify the network.

**1:51:14** · And from the network, you have to identify the host. There are many hosts, so you have to identify the host. And among the host, there are many processes, so so you have to identify the process. How it is done? So, firstly, you you have to identify the network. And then the host. And then the process. So, you have to identify the network using logical address or IP address.

**1:51:42** · You have to identify the host with the help of MAC address.

**1:51:45** · Okay, how were you going to identify the IP address?

**1:51:48** · How will you know that what is the IP address?

**1:51:52** · With the help of DNS.

**1:51:54** · How were you going to identify the MAC address with the help of ARP? We will study these later. How were you going to identify the process with the help of port number?

**1:52:03** · Okay?

**1:52:04** · So, in such manner, you will identify.

**1:52:11** · \[sighs\] See this.

**1:52:13** · For the logical IP address, let's say, if the network is of class A, then we have an ID and an HID. An ID is of 8 bits and an HID is of 24 bits. So, how were you going to identify the network? Let's Let's take an example. Suppose we have like this.

**1:52:34** · 10.32.15.73.

**1:52:38** · Okay, so this is the NID and this is the HID.

**1:52:42** · 10.0.0.0.

**1:52:44** · If you goes to the first host or the zeroth host, which means you're going to the network. And you know, you know, the this is the zeroth host. It doesn't actually exist because we start the numbering of the host from one. Are you getting the point why we have said that all zeros are not allowed or not given to any of the host? Because all zeros are used to identify the network.

**1:53:10** · This will become zero host or you can say the network ID. And then 10.0.0.1 was the first host. So when host ID becomes zero and network ID remain as it is it gives us the network ID. So the network we have identified 10.0.0.0. Okay, so this was the network. Similar thing, let's take another example. 157.30.90.

**1:53:46** · Uh, anything, 32.

**1:53:47** · Identify the network ID. I'll give you 10 seconds. Identify the network ID. Brother, brother, brother, wait. Think before you write.

**1:54:01** · Why have you written 157.0.0?

**1:54:04** · Is it class A network?

**1:54:07** · Think before you write. This belongs to class B. So in class B, two of the octets are given for the NID. So the answer will be 157.30.0.0. Let's Let me give you another example.

**1:54:27** · 200.30.90.223.

**1:54:32** · What is the network ID?

**1:54:36** · Yes, now you have written correctly. These three will be for the NID and this will be for the HID. So HID will be zero only.

**1:54:45** · 90.0.

**1:54:47** · This is the network ID.

**1:54:50** · Okay? Now, you have got the IP address of the network. You have identified the network. How are you going to identify the host?

**1:55:01** · With the help of physical address, which is the MAC address printed on the NIC card, but you don't know the NIC card. But, you do not have access to the NIC card of some other host in a different network.

**1:55:13** · How are you going to identify the host address?

**1:55:16** · With the help of address resolution protocol.

**1:55:25** · We'll understand this when the time will come, when the module will come. I'll give you a very basic introduction for this ARP. You have to just remember these things that for ARP the request the ARP request is broadcasting. What is broadcasting?

**1:55:42** · That you send the message to each and every host present there. You You have got the IP address. You have already got the IP address of the host. Suppose I have got the IP address of this host. Now, I will send an ARP request like this. I'll leave the MAC address empty. For IP address, I will write the IP address of the host 10.32.15.73.

**1:56:08** · And I will send this message, this ARP request, to each and every host. Now, what will happen?

**1:56:15** · Each and every host will look, "Is this IP my IP?"

**1:56:19** · This will say, "No, this is not my IP." So, it will ignore.

**1:56:22** · He will say, "Is this IP my IP?"

**1:56:25** · He'll He'll say, "Yes. So, I have to send the MAC address to to the person who have asked." So, source IP will be present. So, we'll look at the source IP, and he will fill up its MAC address, whatever the MAC address it's 48-bit MAC address, and it will send it to the source. So, in this manner, the source will get an idea of what the MAC address of this person is, or this host is.

**1:56:53** · Okay, let me tell you one One IP address is of 32-bits. MAC address is of 48-bits.

**1:57:02** · Okay?

**1:57:05** · So, the ARP request ARP request, it was broadcasting. We send it to everyone. And the reply was unicasting, which means only the person or only the host whose IP it's written, only he will reply. So, the reply will be unicasting and request will be broadcasting. So, we've got the MAC address also. We have identified the network, identified the network. We have identified the host.

**1:57:44** · Now, what about the process?

**1:57:47** · Which process is requesting the data?

**1:57:50** · We'll identify using port number. And port number is of 16-bits.

**1:57:57** · So, what is the range of the port number if it is of 16-bits?

**1:58:02** · 0 to 2 raised to power 16 minus 1. If all were ones, I have told you if all are ones, then the range is 2 raised to power n minus 1. Like, this is This is 7, not 8. This is 15, not 16. So, the maximum value it can reach is 2 raised to power 16 minus 1. 65535. You can remember this number. You can remember this number, 65535. It will come again and again.

**1:58:28** · So, out of these, 0 to \[clears throat\] 65535 first 1024, which means from 0 to 1023. They are well-known port number, well-known port number. These are assigned and controlled by IANA, Internet Assigned Numbers Authority. Okay? These are not given to the random processes. These are well-defined numbers. Let me give an example and you have to remember these port numbers. You have to remember this port number, remember. SMTP, port number is 25. HTTP, port number is 80.

**1:59:08** · FTP, 20 and 21. DNS, port number is 53. POP, port number is 110. IMAP, port number is 143.

**1:59:21** · Homework. What is the port number of HTTPS?

**1:59:25** · Search for it.

**1:59:27** · Okay?

**1:59:31** · Do anyone have any more doubt? You can ask. The more doubt you ask, the more information you will gain. Okay. Another doubt came.

**1:59:48** · He was asking, "We have heard about unicasting, multicasting, and broadcasting. Can you explain more and how?"

**1:59:57** · What have you written?

**2:00:00** · Hey, please do not use short forms. I I'm not very good at the short forms. Write properly. You want to know more about castings? Let's Let's learn more.

**2:00:15** · Types of communication.

**2:00:20** · Okay.

**2:00:21** · Unicast. Unicast means one to one.

**2:00:25** · Broadcast.

**2:00:28** · Broadcasting means one to all.

**2:00:31** · And multicast.

**2:00:35** · One to many.

**2:00:36** · Now, another homework.

**2:00:39** · Learn more about anycasting.

**2:00:42** · What is anycast?

**2:00:43** · Okay. Now, how unicasting is done?

**2:00:47** · What is unicasting again? Transmitting data from one computer to another computer is called unicast. One-to-one communication. Okay, so let's say we have two networks. This network is 10.0.0.0. This is network ID. And another network like 22.0.0.0. And we have a host with IP address of 10.32.52.7, anything. And here another host 22. Let's say 100.3.5. Now, data and the source IP will be 10.32.52.7. And the destination IP will be this IP address, simple. 22.100.3.5.

**2:01:26** · That's it.

**2:01:30** · Okay, and when the reply will come, reply will come like this. This was source IP, this was destination IP. And the source and destination IP will be swapped for the reply.

**2:01:40** · Okay?

**2:01:43** · See, it's not necessary that you have to send it to some different network computer. You can also send it to some computer which belong to the same network like 33.52.7. You can also send it like here. So, in unicast communication, both source and destination can be present in the same network or different network.

**2:01:59** · It doesn't matter.

**2:02:01** · What about broadcasting?

**2:02:03** · Can we broadcast in the same network?

**2:02:06** · And can we also broadcast in all the computers of a different network?

**2:02:10** · We can do both. Let's understand it more. When we do it in the same network, like this. And we can do it in the different network also.

**2:02:29** · Okay?

**2:02:30** · So, when we are sending one to all, one to all, that one host is sending to all the host present in the same network, and one host is sending to all the host present in the different network. We name it as limited broadcasting and we name it as like direct broadcasting. Okay. So, there are different methods of doing this.

**2:02:56** · For example, if you are doing like limited broadcasting, they are transmitting data from one computer to all the computer present in the same network. This is the same network.

**2:03:05** · Then it is limited broadcasting. So, what what destination IP will you fill here?

**2:03:09** · For example, if you like write data here SIP and DIP. SIP is let's say 15.23.9.7.

**2:03:18** · What are you going to fill in the destination IP?

**2:03:27** · You remember I have told you that all ones are not allowed. All ones are not allowed. That's why we have reserved that for the limited broadcasting. We are here going to write 255.255.255.255. This means that this source IP is going to send to all the host present in the same network. So, whenever you see this like FF FF FF FF This is written in hexadecimal format.

**2:04:01** · This means that the source IP is going to send to all the network present in the all the host present in the same network.

**2:04:09** · Okay. So, what about direct broadcasting?

**2:04:13** · Oh, and one more thing. And one more thing. You cannot ever use this as a source IP. This is not some This is not an IP address of a particular host. This is reserved for limited broadcasting. So, you are not going to use it ever as a source IP. And it will be always used as destination IP.

**2:04:34** · Okay?

**2:04:38** · Is the point clear?

**2:04:42** · Now, what about direct broadcasting?

**2:04:43** · When we are transmitting from one network to all the host of other network.

**2:04:50** · What will be the IP?

**2:04:53** · Let's say for the source IP and for the destination IP, what will be here?

**2:04:59** · Source of source IP will be the IP of this. Let's put anything like 15. 32. 97.30.

**2:05:06** · What will be the destination IP?

**2:05:09** · The network IDR 15.0.0.0 and the host ID is and the network ID of this will be 112.0.0.0.

**2:05:19** · So, what are you going to put in here?

**2:05:24** · No. No. No. No. You mentioned we put like this 0.0.0. No. It doesn't work that way. It's already fixed. Source IP, destination IP. Source IP will be the same, but for destination IP, we do not put the network ID. We write and this will be all one. Host IDs are all one. That's why I've told you not to allow any host with an IP address of all ones.

**2:05:58** · Network ID and host ID cannot be all ones. Now, are you getting why?

**2:06:03** · All ones or all zeros. Because they are reserved. So, whenever you see like this 112.255.255.255 as as the destination IP address, which means 112 is the class A IP and these are the host IPs. And all the host IDs are ones, which means it is a case of direct broadcasting, which means someone from a some different network is trying to send some message to all the people present in this network of class A.

**2:06:40** · So, this is how direct broadcasting is done. Let me repeat again for limited broadcasting. And for direct broadcasting, for destination IP, you're going to use 255.255.255.255. And for direct broadcasting, you're going to use network ID and then all host IDs as one. The source IP will will be the source IP of the person who is trying to send.

**2:07:09** · Okay?

**2:07:10** · Again, the same concept applies here. These two cannot be ever used as the source IP. They will always be used as the destination IP.

**2:07:20** · Okay?

**2:07:21** · So, whenever we have all ones in the HID part of any IP address, that IP address represent the direct broadcast broadcast address. So, this is the reason you cannot assign this IP to any host or computer.

**2:07:34** · Okay?

**2:07:39** · Let's discuss another case. 113.0.0.0.

**2:07:43** · 157.132.0.0.

**2:07:47** · There are several computers here in this network and 113.32.5.9. And this computer want to send the network send to all of the host present in this network, the different one.

**2:08:03** · What will be the source IP and destination IP?

**2:08:07** · Tell me.

**2:08:14** · Okay, correct. Source IP is 113.32.5.9. And the destination IP will be as this is a class B address, so network ID will be the two octets 157.32. This 132 this will remain as it is and the rest HID part will be all ones. So, the answer will be 157.132.255.255.

**2:08:37** · This is correct.

**2:08:39** · Okay?

**2:08:42** · Now, let me make a table so that you may not get confused. Network ID host ID If network the network ID is valid and the host are all zeros, which means this represent the network ID of the full network.

**2:09:03** · Like this.

**2:09:07** · If network ID is valid and host IDs are all ones, this represent direct broadcast address. If network ID is also one and host ID is also one, then this represent limited broadcast address. address, which was 255.255.255.255. There's another concept of network mask.

**2:09:38** · Network mask.

**2:09:41** · Network mask always helps you to know which portion of the address identifies as an ID and which portion of the address identifies at as HID. So, class ABC network have default mask, also known as natural mask, like this. For class A, the natural mask is 255.0.0.0. For class B, the natural mask is 255.255.0.0. For class C, the natural mask is 255.255.255.0.

**2:10:12** · So, you can also add one thing here then here that if network ID is all ones and host IDs are all zeros, then this will become the natural mask. Okay, our network mask. So, now how are you going to identify Let's say I've given an IP address. And suppose you do not remember the table. How are you going to identify that this IP address belongs to

**2:11:01** · Okay, suppose I have an IP address. Let's say 200.200.200.96 I got the network mask as as this is a class C address. So, the network mask will be this. So, 200.200.200.96 When we are doing bitwise ending with the subnet mask or the network mask, it will become 255.255.255.0.

**2:11:29** · So, as you know that if some number, let's say 111 How do we do bitwise ending first? Let's understand that. 111 bitwise ended with 111. The answer will be 111. 1 and 0 will become 0. 0 and 0 will become 0. 0 and 1 will become 0. 1 1 will become 1. So, for 200, how are you going to represent 200? 1 1 0 0 1 0 0 0.

**2:11:55** · This is 200.

**2:11:56** · Like this is This is 192 and this is 8. So, this is 200. How are you going to represent 255?

**2:12:03** · 11111111 So, 1 and 0 0. 1 and 0 0. 1 and 0 again 0. 1 and 1 1. 0 0 1 1. What is this? Again, 192 and 8, which means 200 only. This was also 200. So, if you are doing any number any number from the range of 0 to 255, when we are doing bitwise ending with 255, then the same number will be here.

**2:12:35** · Same number.

**2:12:38** · So, the result will be 200.200.200 and if you do bitwise ending of any number with zero, zero will be there. So, zero will be there. This is what the network ID of the IP address of this IP address, 200. Okay? You can do it directly also as you know that this is a class C address.

**2:13:08** · And in class C, the first three octets are given to network ID. So, those octets will be same and the remaining will be zero.

**2:13:17** · See this.

**2:13:20** · If the network ID is valid, \[music\] then this octet and HID are all zeros, then it represents the network ID of the full network. Okay, now try this. You have to identify which type of IP address is this. 192.192.192.255. Is it direct broadcast address? It is limited broadcast address.

**2:13:46** · Is it host IP or it is network IP?

**2:13:50** · Network address.

**2:13:52** · Tell me.

**2:13:55** · Okay. So, this is not limited broadcast address. You can directly tell because it is fixed 255.255 .255.255. Now, this is a class C network. And this is the network ID part and this is the host ID part. We see that host ID part is all one and network ID part is valid. So this is a direct broadcast address.

**2:14:22** · Is it clear?

**2:14:24** · Okay. Now I'll give you some more examples to solve 200.200.200.

**2:14:31** · Let's take 10.192.100.

**2:14:34** · Tell me which class does it belong?

**2:14:37** · 7.10.230.10 or one whatever. 128.1.1.254 127.3.6.

**2:14:48** · 200 255.255.255.255.

**2:14:55** · 100.255.255.255.

**2:15:00** · Now tell me this is class C network. This is Type it in, man. We don't have much time.

**2:15:12** · Class C network.

**2:15:13** · This is class B network. This is self connectivity. This is limited broadcast address. This is direct broadcast address. I hope now the point is clear. Anyone have any doubt till now you can ask. Okay. So we will end the class here. I'll give you DPP you have to solve and in the next lecture we will start with a new topic name subnetting.

**2:15:48** · Okay?

**2:15:53** · So we'll end the class here. Good morning class. The topic of our today's class is subnetting.

**2:16:01** · What do you think subnetting is?

**2:16:04** · By the name can you guess?

**2:16:11** · Yes, smaller networks or the process of dividing a big network into many smaller subnet is called subnetting. Subnet means subnetwork.

**2:16:21** · And subnetting means dividing a big network into smaller parts. This is what subnetting is. Let's say this is network one, so network subnet one, subnet two, subnet three, and subnet four. And why do we do so?

**2:16:33** · Let me give an example. Let's say your university have 2,000 computers. Okay, you want to locate 500 to engineering department, to some 500 to some humanities department, 500 to architecture department, and 500 to uh let's say math department.

**2:16:55** · Okay.

**2:16:56** · And they will be managed with the help of router in between. So, what are the advantages? The first advantage is maintenance and administration becomes easy. Maintenance and administration becomes easy. When you have divided subnets, then each subnet is isolated from other. So, it also provides security through isolation. Security is also there. For example, let's say in a company, code of a developer department must not be accessed by some, let's say HR department.

**2:17:32** · So, for those purposes, we do subnetting because maintenance and administration become easy, and it also provides security to one network from the other network.

**2:17:42** · But, you know, there is always a trade-off. So, what are the disadvantages of subnetting? Can anyone tell?

**2:17:56** · Obviously, the disadvantage is identification becomes a bit harder or one step increases. We you know, we have discussed this while I was talking to you uh explaining the topic of identification. Someone asked the doubt.

**2:18:12** · How are you going to identify some host in a particular network?

**2:18:16** · In that case, I've told you that usually there is a three-step process. You first identify the network. Then you identify the host. And then you identify the port. But now that step is changed. Now in a network you identify subnet also, in which subnet your host is present. So firstly you have to identify the network. Then you have to identify subnet within the network. Then identify the host within the subnet.

**2:18:48** · And then identify the process within the host. Okay? I hope the point is clear. So in case of a single network, only two IP address are wasted. To represent network ID and broadcast address. We have discussed about this that all zeros and all ones are not allowed. Why? Because all zero represent the network ID and all ones represent the direct broadcast address. We are talking about the HID's.

**2:19:14** · When HID's are all zero, which means we are representing the network ID of a network. And when HID's are all ones, then we are representing the direct broadcast address. So in case of single network, two IP addresses are wasted because of this. So when you increase the network, the number of IP addresses for which could be allocated to a host will be wasted more.

**2:19:40** · Let me repeat. In case of a single network, only two IP addresses were wasted to represent network ID and direct broadcast address. But in case of subnetting, two more IP address will be wasted for each subnet. Are you getting the point? So, the first disadvantage was steps increases for identification. Second was more IP address wastage.

**2:20:08** · Wasted.

**2:20:10** · What could be the third disadvantage?

**2:20:13** · Obviously, you you see here in the network, there is no router present inside the network. But here, you have to allocate some router or a hub to manage this subnet. So, expense will also increase. So, cost of the over overall network will increase. Subnetting requires internal routers, switches, hubs, bridges, which are very costly. Okay. So, you need some intermediary device to manage these subnets.

**2:20:45** · Okay. And one more thing is you require an what do I say? An experienced network administrator to manage these subnets and networks. Okay. So, this also adds to overall cost as well. So, expense increases in buying these intermediary things and also an experienced network manager.

**2:21:08** · Okay.

**2:21:10** · Now, how do we create subnets?

**2:21:12** · The this thing also should be studied that how do we create subnets?

**2:21:18** · So, subnet is created by borrowing the bits from host ID. From borrowing the bit from host ID.

**2:21:29** · Are you getting the point why we are doing so?

**2:21:31** · Let's say we have three bits for the network ID. I'm just taking an example. How many subnets I How many networks I can create? I can create eight networks. Now, I want to create more network. What do I need? I need more bits. And from where I have to get these more bits? From the host ID part.

**2:21:52** · So, let's say if I borrowed one more bit, then I can create 16 networks, 2 raised power 4, 16 networks. So, if you create one bit, if you if you borrow one bit, then you can create multiplied by two, double of that existing network. For example, here eight networks were there and I borrowed one bit, so now there are total of 16 networks.

**2:22:17** · So, the process of borrowing bits from HID to generate the subnet ID or subnet bits is called subnetting. The number of bits borrowed depends on your requirement, how many subnets we want to create. Okay, let me give an example so that you may understand better. Let's say this is our network and our network ID will be 200.200.200.0.

**2:22:46** · Tell me from which class does this network belong?

**2:22:51** · Class C, yes?

**2:22:53** · Here it is 200. Okay, so this network belongs to class C. This will be our NID and this will be our HID in the whole IP address.

**2:23:03** · Now, I want to create four subnet. How many bits I have to borrow?

**2:23:08** · Two bits.

**2:23:10** · I have to create four subnets, so how many bits I have to borrow? Two bits. So, two bits will be for subnets. We call it as subnet ID. So, let's say this is the first subnet, this is the second, this is the third and this is the fourth. How are you going to represent this? Let's say this is 00, this is 01, this is 10 and this is 11.

**2:23:32** · Are you getting the point? So, network ID remains as it is.

**2:23:36** · From the host ID we are going to borrow two bits, which will act as the subnet ID. And while we are referring to this subnet, we will write it as 00. Network ID remains the same, 200.200.200 and then the subnet ID remains 00, and then whatever host we are referring to we will write it like this. As you know that host ID cannot be all zero, so 1 2 3 4 5, so this will be one. So, this is the first host of first subnet.

**2:24:09** · What about second host? 00010. What about third host? 000011.

**2:24:15** · What about fourth host?

**2:24:17** · 000 100.

**2:24:23** · I hope you're getting the point. Now, if I want to change the subnet, let's say I want third host of this subnet. This subnet, subnet two. This was subnet one, this was two. This was three, this was four. What about third host of second subnet? So, what I will do? For the second subnet, it will become 01. What about third host? 000 011. This is it. This is the third host of second subnet.

**2:24:51** · I hope you're getting the point. Okay.

**2:24:53** · Okay, how many host we can have in a single subnet?

**2:24:58** · So, this will begin from 000001. This is the first, and then what will be the last? As you know that all cannot be one, so 11111 and 0.

**2:25:11** · What is this?

**2:25:13** · What is the number?

**2:25:18** · All can be If all are If all were one, then it will be 2 raised to power 6 minus 1, which will be 63. And the last digit is zero, which means minus one. So, maximum it will be 62. So, in in a single subnet, in a single subnet, there are 62 hosts. As you know, it should have been 64, but all zeros and all ones are not allowed. So, these are now 62 hosts.

**2:25:49** · I hope the point is clear. Let me repeat everything again so you can understand better. Let's say this was our This was our network 200.200.200 and I want to create four subnets within the network. Okay, this time let's create just two subnets. So, for just two subnets, how many bits I want to borrow from the HID? Just a single bit. So, I bit I borrowed a single bit from the HID.

**2:26:16** · 0 0 0 0 0 0. 1 2 3 4 5 6 7 and 8. Okay. Now, I borrowed a single bit from the HID. So, this will add now act as the subnet ID. This remains the network ID and these are now the host ID. Now, you have to remember two things about host ID that all zeros all zeros and all ones are not allowed.

**2:26:39** · Why not allowed? Because all zeros were used to express the network ID or subnet ID and all ones are used to express the DB. That's why all zeros and all ones in the host ID are not allowed.

**2:26:53** · This point is clear. Now, if I want to represent this subnet, how I'm going to represent? You can write zero. And how are you going to represent this subnet?

**2:27:01** · You can write one. Now, if you want to represent some host of let's say the second subnet, how are you going to represent? You will make the subnet ID one. And whatever host you are going you are trying to represent, let's say you are trying to represent eighth host, how are you going to represent? You will just make eight out of these binary numbers. So, I have 0 0 0 1 0 0 0.

**2:27:27** · What does this represent? Eighth host of second subnet.

**2:27:34** · Okay, how I'm going to represent let's say the 16th host of first subnet?

**2:27:38** · So, for 16th host, I'll make

**2:28:32** · You know, we represented this subnet from zero. Because subnets start from zero. And hosts start from one. You know, because all zeros can't be a host. Are you getting the point? See here. When we represented the eighth host of second subnet, we created one here.

**2:28:51** · And we created eight here. When we represented 16th host of first subnet, we created zero here and 16 here. When we represented first host of first subnet, we created one here and zero here. So, when the subnet was one, we were creating zero. When host was one, we were creating one.

**2:29:10** · When subnet was second, we are creating one here. When subnet was first, we are creating zero here. So, when subnet will be m, we will create m minus one. And when the host is k, we will create k only. Why so? Because subnet can start from zero, while host cannot. Okay? I hope the point is clear. So, if anyone have any doubt, you can ask me.

**2:29:36** · Let's take another example. Let's take another example, so you'll understand better. Uh this time, let's increase the number of subnet I want to create, let's say 512 subnets.

**2:29:47** · Tell me how many bits I have to borrow?

**2:29:53** · It's not eight, man. Think Think before you type.

**2:29:56** · Yes, nine.

**2:29:58** · Nine bits.

**2:30:00** · Nine bits we have to borrow. When we have to create four subnets, we will borrow two bits. When we have to create two subnets, we'll borrow one bit. When we have to create, let's say 1024 subnets, we will borrow 10 bits. 512 will borrow nine bits. 256 will borrow eight bits. 128 will borrow seven bits. 64 will borrow six bits.

**2:30:20** · Okay?

**2:30:21** · So, to create 512 subnets, we will borrow nine bits. So, let's Let me erase all this and let me draw an example. Okay. So, 157.153.0.0.

**2:30:35** · Tell me from which class does this network belong?

**2:30:39** · Class B.

**2:30:40** · Okay.

**2:30:41** · So, in class B, these two will act as an ID and these two will act as an HID. That's why I told you to remember that table. If you do not know the class, how are you going to segregate the NID and HID part? And if you cannot segregate the NID and HID part, you don't know from where to borrow the subnet bits.

**2:30:57** · Okay?

**2:30:59** · Now, you know, we have to create 512 subnets, so we are going to borrow nine bits from the HID. So, 157.153. Now, one whole octet covered and from the last octet first bit, how many HID we have? 1 2 3 4 5 6 7. Eight bits from here and one bit from here.

**2:31:20** · Okay? What will be the first host? The first host will be one. Second host, it will will 10. So, if I have to create Kth host, I'll create K here.

**2:31:30** · Okay?

**2:31:31** · Now, how many host could it be there in a single subnet? Let's say we have so many subnets here. In a single subnet, maximum number of hosts will be Tell me.

**2:31:43** · What will be the maximum number of hosts in a single subnet?

**2:31:46** · \[clears throat\] Come on, man. It's not that hard. Try to think. You have been given the HID.

**2:31:56** · With this, how many how many maximum you can create?

**2:32:03** · See, still some people are typing 128. Brother, 128 minus two. Why two? Because this is not allowed. And 1 2 3 4 5 6 7, this is also not allowed. So, the answer will be 126. So, there will be 512 subnets. And in each subnet, there will be 126 hosts. You'll answer 128 when I ask about the addresses.

**2:32:32** · Because these two are also addresses, but they are not not given to host. So, when I ask you address, you reply 128. When I ask you host, you reply 126.

**2:32:44** · Okay, is the subnetting clear or do I need to take one more example?

**2:32:49** · Is it clear?

**2:32:51** · Okay, let me repeat it again from whatever I've written. What is subnetting? Subnetting means you are dividing a full bigger network into smaller network. How are you going to divide? By borrowing the bits from the host ID part. Okay, and why do we do so? So that maintenance and administration becomes manageable. And we are isolating the network to provide the security part. For example, if attack happen happens at subnet four, subnet one will remain safe.

**2:33:20** · And what are the problems? The problems will be identification part become larger. In the first case, we first identify the network and then host. Now, in this case, in the network, we have to identify the subnet also. The second disadvantage is more number of IP address will be wasted. And the third will be expense will increase for buying the machinery and experienced network manager.

**2:33:45** · And how do we do how do how do we do subnetting? By borrowing from the HID. If we borrow n bits, we can create 2 raised to the power n subnets. So, for the case, if we want to create 512 subnets, uh n will be nine bits.

**2:34:07** · Okay?

**2:34:08** · So, from the host ID part, we create subnets. And that host ID part will act as the subnet ID. Okay? So, if I want to refer to the first subnet, I'll create zero. If I want to refer to the 10th subnet, I'll create nine. If I want to refer to 123rd host, I'll create 123 in the binary. For host, we create the same. For subnet, we create one less because subnet can start from zero.

**2:34:38** · Okay?

**2:34:41** · I hope the point is clear. Anyone have any doubt, you can ask me now. Hm, very valid concern. Valid doubt came. So, student is asking, when we are representing the subnet with the help of subnet ID, do weights change? Let me explain what does he mean by this.

**2:35:05** · For example, here.

**2:35:09** · For example, here. What is the weight of this What is the weight of this bit?

**2:35:15** · Is this one or 128? So, the answer is it it will be 128.

**2:35:21** · So, when you are going to represent the subnet ID, how are you going to represent the subnet ID?

**2:35:30** · By this. Let's say Let's say what is the subnet ID of this network. So, you will write 200.200.200.120 8.

**2:35:44** · What is the subnet ID of this network?

**2:35:45** · 200.200 .200.0.

**2:35:50** · So, is the network ID and the subnet ID of the first subnet same?

**2:35:54** · Let me repeat. Is the network ID of the full network and the subnet ID of the first subnet, is it same? Because here we are getting the same number. This is 200.200.0 and this is again 200.

**2:36:07** · 200.200.0.

**2:36:11** · Did you get it?

**2:36:13** · Let me explain again. Let me explain again with a proper diagram. Let's say we have divided a full network into two parts. 200.2 four parts.

**2:36:25** · 200.200.200.0.

**2:36:28** · Okay, this is the first subnet, second subnet, third subnet, and the fourth subnet. Okay? And to divide a full network into four subnets, we require two host IDs. Two host ID bits. So, SID, this these two host ID bits will act as the subnet ID and the remaining six bits will be the host ID. So, this will act as the host ID. 00 and the six-bit HID. This will act as the 01 and the six-bit HID.

**2:36:59** · This will act as the 10 and six-bit HID. And this will act as the 11 and again the six-bit HID. Now, what is the weight of this? 128, 64, 128, 64, 128, 64, and 128, 64.

**2:37:16** · So, what will be the subnet ID of this?

**2:37:19** · Zero.

**2:37:21** · What will be the subnet ID of this?

**2:37:23** · 64. What will be the subnet ID of this?

**2:37:25** · 128. And this?

**2:37:27** · 1 92. How 192? 128 + 64. And the rest will be zero for the subnet ID. Network ID remains as it is. Network ID and subnet ID remains as it is. And host ID will become zero. Okay, that's why we ignored this part. And we only calculated the ID from here. Okay? So, let's let discuss more about the properties of first subnet. So, in the first subnet subnet ID will be 200.200.200.0.

**2:38:02** · Okay, what will be the DBA of this?

**2:38:05** · Do you remember how we calculated the DBA?

**2:38:11** · Yes, correct. Correctly.

**2:38:14** · They will remain as it is, and the host ID will become one. So, the first subnet subnet ID will become this. And what about the DBA?

**2:38:23** · 200.200.200 00, and the rest will become 1 2 3 4 5 6. And if you have continuous six ones from the right, what will be the value?

**2:38:35** · 2 raised to power 6 minus 1 become 63. So, I can erase all this and I can just write 63. So, this will become the DBA. Okay, now calculate for the second subnet. What will be the subnet ID? And what will be the DBA? Tell me. Yes, subnet ID is 64.

**2:38:59** · 200.200.200.64.

**2:39:03** · And what will be the DBA?

**2:39:07** · 200.200.200 plus 64 plus 63 which will become 127. Why we added? Because they all will become one and the value of six bits continuous one is 63 and 64 from here. 64 plus 63 this will become 127.

**2:39:24** · Okay. Now what about third subnet?

**2:39:29** · SID and DBA Here is the third subnet. What about it?

**2:39:37** · The subnet ID is 200 dot 200 dot 200 dot 128 from here. And what about the DBA? 128 plus 63 will become 191. This will remain same. And you can similarly similarly do for the fourth subnet. SID and DBA I hope the point is clear now.

**2:40:02** · Is the doubt clear about the weights?

**2:40:10** · So if anyone have any other doubt, you can ask now. Okay, so consider this as homework. You solve like this and I'm also giving you a DPP. Try to solve. Ask if any doubt you have in the next lecture. And please, I'm hoping that you're solving the DPP and making the notes. Although I have also given you solutions within the DPP.

**2:40:43** · But you have to first solve your own and then see the solution. And even if you don't understand the solution, you ask in the next lecture.

**2:40:50** · Okay?

**2:40:51** · Bye.

**2:40:53** · Let's begin.

**2:40:55** · IPv4 addressing Here we have studied that we have an IP address of 32 bits. And out of these 32-bits, we divide it into an ID and HID. And sometimes we have to break the network into smaller sub networks.

**2:41:12** · And how do we do that?

**2:41:13** · By borrowing few bits from HID. We call those bits as SID, subnet IDs. So, we have learned about the network mask.

**2:41:23** · Network mask.

**2:41:26** · In network mask, the number of ones indicate the network ID and number of zeros indicate the host ID.

**2:41:34** · What about subnet mask?

**2:41:36** · Subnet mask.

**2:41:37** · Here, the number of one represent network ID plus host ID plus subnet ID. And the number of zeros represent host ID.

**2:41:50** · Okay?

**2:41:51** · So, let's say if I say 200 200 200.0. This is the network ID. And I have a subnet mask of 255.255.255. Let's \[clears throat\] say 192. This is the subnet mask. Then identify the number of bit borrowed from borrowed from host ID. Tell me the number of subnets. And also tell me the number of hosts per subnet.

**2:42:29** · \[clears throat\] This is an easy question. Try. Most of you have answered correctly. The number of bits borrowed are two.

**2:42:44** · How?

**2:42:46** · This is a class C address. So, class C have three octets. Three octets for the network ID part and the remaining for the host ID part. And this is a subnet mask, which means the number of ones will include network ID plus subnet ID. Now, if you expand like this, 255.255.255, and 192 in binary, 1 1, and then 1 2 3 4 5 6.

**2:43:16** · This is now the network ID plus subnet ID part. And as you know, this is of class C, so network ID will be this. These two bits will represent the subnet ID. And two bits are representing the subnet ID, which means there will be four subnets. If there are four subnets, then six bits will be used for host ID part.

**2:43:39** · So, the number of host per subnet will be 2 raised to power 6 minus 2. Why 2?

**2:43:43** · Because all zeros and all ones for the host ID are not allowed. So, the answer for number of subnets will be four, and host per subnet will be 62.

**2:43:53** · Is it clear?

**2:43:57** · Is it clear?

**2:43:59** · Okay, but let's explore it more. For subnet IDs, see this, 200.200.200. And then we have two bits for the subnet ID. These are for the network ID, and remaining six bits for host ID.

**2:44:17** · H ID.

**2:44:19** · Now, the weight of this is 128, and the weight of this is 64. So, when you will write like this, 200.200.200.192, which means you're talking about the fourth subnet ID. Why? Because this is 1 1. It's forming three, which means fourth subnet ID. If it was 0 0, which means it's forming zero, which means first subnet ID. What about 0 1? It's forming zero, which means second subnet ID. 10, forming two, which means third subnet ID.

**2:45:02** · Okay? So, 200.200.200.

**2:45:08** · zero will be the first subnet ID. 64 will be the second subnet ID. Then, 128 will be the third subnet ID. And then, 192 will be the fourth subnet ID. I hope the point is clear. Okay? So, you have to focus upon the weight.

**2:45:32** · Is it clear? Do you have any doubt?

**2:45:36** · What if What if I change the number from 192 to let's say 224?

**2:45:42** · Then, the number of bits borrowed will be three. The number of subnets will be eight. And the number of hosts will be, as you know, three bits are borrowed from the eight bits of HID, which means five bits are now remaining for the host ID, which means 2 raised to power 5 minus 2, which means 30 hosts per subnet.

**2:46:01** · Is the point clear? And then, in this case, 1 2 3, which means the weight will be 128, 64, and then 32. Now, tell me the first subnet ID. Zero. The second will be 01, which means 32. The third will be Which means If I say the third subnet ID, which means you have to form here two. In binary, you have to form two.

**2:46:26** · It means 64. What about fourth? Which means you have to form three here, which means 11. What does it mean? 96. And then, 100, which means 128. And then, 101, 160. And then, 110, which means 192. And then, 1 1 1 224. First subnet, second, third subnet ID, fourth subnet ID, fifth subnet ID, sixth subnet ID, seventh, and then eighth subnet ID. You have \[clears throat\] to focus upon the weights of the SID bits.

**2:47:06** · Is it clear?

**2:47:11** · Do you have any doubt to ask?

**2:47:17** · Now, you know, it is not necessary that these subnet bits should be contiguous.

**2:47:24** · Are you getting?

**2:47:25** · Let's say, if I write here like 40 44. Then, when you will convert it into binary, what you will see? Let's solve here.

**2:47:37** · 200.200.200.0.

**2:47:41** · This was our network ID, and the subnet mask, let's say, is 44. This is our subnet mask.

**2:47:50** · Now, answer me the same question. Number of bits borrowed?

**2:47:56** · Number of subnet possible?

**2:47:59** · And host per subnet?

**2:48:03** · Try to answer.

**2:48:08** · What will be the first step that you will do?

**2:48:10** · You will convert this 44 into binary, which will be 0 0 1 0 1 1 0 0. Let's check. This is 12, and this is 32. So, 32 and 12 will be 44.

**2:48:25** · Okay. Now, in subnet mask, number of ones will represent the network ID and subnet ID. What will be the network ID? This is a class C address, so network ID will be this, which means these are the these ones these ones are the subnet ID.

**2:48:44** · Now, again, you have to focus on the weights. So, what is the weight of this?

**2:48:48** · 4 8 and then 32.

**2:48:52** · Number of bits borrowed will be three. Number of subnets will be eight and number of hosts will be again 30. But, what will be the subnet ID of these eight subnets? Can you Can you tell me?

**2:49:06** · You have to focus upon the weights, 32, 8, and 4. 000, 001, 010, 011, 100, 101, 110, and 111.

**2:49:20** · Now, what will be the ID of the first subnet?

**2:49:23** · 0. Second subnet? 4. Third subnet? 8. Fourth subnet? 12. Fifth subnet? 32. And then 36, and then 40, and then 44.

**2:49:35** · Is it clear?

**2:49:36** · So, you don't generally do like this. That the first three contiguous bits will be taken. No. You have to focus upon the subnet mask. In subnet mask, the number of ones will be representing an ID plus SID. And then look at the NID.

**2:49:52** · It's a class C address. So, in subnet mask, the first three octet will be covered by the NID. And the remaining ones, what are the remaining ones? These are the remaining ones in the last octet. They will be covering the SID. So, wherever be the position of these ones, we have to incorporate the weights, also.

**2:50:14** · Okay?

**2:50:18** · Do you want to take another example?

**2:50:20** · Let's see. What about 255.255.255.

**2:50:26** · Let's say 200.

**2:50:29** · Now, tell me the same. Number of bits borrowed, number of subnets, and host per subnet.

**2:50:35** · What you will do again?

**2:50:36** · Convert it into binary. These are all ones. One These are all ones.

**2:50:43** · Now, what about 200?

**2:50:45** · You will need 128, you will need 64. And then you will need eight. Is this 200? This will become 192 and this will be eight. So, yes, it is 200. Now, look at the position of ones. 1 2 3 So, three bits are borrowed. Eight will be the maximum subnets and then 30 will be the host per subnet.

**2:51:09** · But, what about subnet ID? Now, again, think of the weights. What are the weights?

**2:51:14** · 128, 64, and eight. And then the same again. 000, 001, 010, 011, 100, 101, 110, and then 111. 0 8 64 and then again 72 and then 128 136 192 and then all will be added, which is 200. This is the subnet ID of the first subnet. Subnet ID of the first subnet and this is the subnet ID of the eighth subnet.

**2:51:52** · You can also look here. So, when you're talking about eight subnet, you're forming seven in binary. Why? Because they started from zero.

**2:52:03** · Is it clear?

**2:52:09** · Okay, I think this pattern is clear to you. Let's explore some other patterns. Let's say we are given a class C network. Class C network is given to us. Which has seven subnets and 25 hosts per subnet. Now, you have to create a subnet mask for this. Create a subnet mask for this. And you know, it is not necessary that subnet mask need to be unique. Why? Because position of ones can be anywhere.

**2:52:47** · Position of ones can be anywhere. Let me explain. Class C network 7 into 25. There are seven subnets and each subnet has 25 host. What is this? The value is 175. Is it lesser than the available network in class C? What is the available not network, but host. I require these number of host. Is it lesser than the available host in a network of a class C? Yes.

**2:53:17** · This is 256. So, 175 is lesser than 256, which means we can create some subnet mask. If it If it would be like something like this, then subnet mask would not have been possible.

**2:53:31** · Okay?

**2:53:32** · Now, as we are talking about class C network, so 24 bits will be for the NID and eight bits for the host ID part. Okay? And we have to create seven subnets. Which means we will require three host ID bits.

**2:53:50** · With three host ID bits, we can create eight subnet and we need seven only. So, yes, it is feasible. If we have taken only just two HID, then we would we would have been created we would have created four network, but we need seven. So, this is not feasible. That's why we have to take three.

**2:54:09** · So, with this eight HID bits, three bits will be used for subnet ID and five bits will be used for host ID again. Okay, so it will look like this.

**2:54:23** · One two parts divided, four parts divided, And then, how many?

**2:54:30** · 6 and 7 8. We will not use this. So, 1 2 3 4 5 6 and 7. Each subnet will have maximum capacity of 30 host. But, we need only 25. That's okay.

**2:54:45** · That's okay. So, \[clears throat\] first host, first subnet, how are you going to represent with? 0 0 0. Second subnet?

**2:54:57** · 0 0 1. So, you can write it here. Let me remove this all. 0 0 0 0 0 1 0 1 0 0 1 1 1 0 0 1 0 1 and then 1 1 0. We don't We do not require this 1 1 1.

**2:55:16** · Okay?

**2:55:18** · Now, number of ones, number of ones in the subnet mask will be network ID plus subnet ID. What is the network ID? 24.

**2:55:30** · What is subnet ID?

**2:55:31** · Three bits. So, 24 + 3 = 27. And number of zeros, number of zeros in subnet mask will will be represented host ID.

**2:55:44** · This is five. So, what you can do?

**2:55:47** · 255 Eight are covered. 255 16 are covered now. Again, 255 24 are covered. How many we require? 27. Then, three more. 1 2 3. Now, the rest could be the host ID. Why I said in the beginning that subnet mask could be multiple? Because the position of these three one need not to be conti- contiguous. So, I can also place it. I can also place these ones like in this manner.

**2:56:24** · This is also a subnet mask, a valid one. I can place like this also, 111. This is also a subnet mask. So, subnet mask is not unique, but you know, the most appropriate one will be this one. When these three ones are from the left-hand side and contiguous.

**2:56:43** · Okay, so what will be the subnet mask?

**2:56:45** · 255.255.255.224.

**2:56:50** · This will become the subnet mask. Let me repeat again what we did. We needed a class C network or we had a class C network with seven subnets and 25 hosts per subnet. And we need to find the subnet mask. So, firstly, we check that is it possible to create such subnet mask? So, we did 7 into 25 from here to calculate the number of host.

**2:57:15** · Subnet to subnet cancel. So, this was seven subnets and 25 host per subnet. So, 25 into seven hosts are remaining. So, 175 hosts are there in a single network of class C. Is it feasible? Yes. Why? Because the maximum could be 256 and 175 is less than 256, so this is allowed.

**2:57:38** · Now, what we doing what what we are doing?

**2:57:41** · We have a class C network. 24 bits will be for the NID and eight bits for the HID by default. Now, we need to create seven networks, seven subnets. We'll require three host IDs. So, from eight host IDs, we'll borrow three bit to make them as subnet ID and the remaining five will become the host ID.

**2:58:02** · So, from the remaining five, 2 raised to the power 5 minus 2, which means each subnet have will have 30 hosts. And we require 25, that's again feasible. So, from this three bit, we have to borrow from the host ID part. So, number of ones in the subnet ID will be NID plus SID. Three bits we have borrowed from the host ID part, so these three will be also one.

**2:58:27** · So, 24 + 3 = 27. Now, 27 bits need to be one in subnet mask. Initial or 24 bits are one. And then three or three more needed. So, from the last octet, any three bits can be one. Okay? So, this will create a valid subnet ID, but the most appropriate one will be when you are making those bits one which are from the left-hand side and contiguous.

**2:58:58** · Is it clear? So, I could \[clears throat\] also I could have also done like this.

**2:59:03** · 00000111.

**2:59:05** · So, seven is also allowed. 224 is also allowed. You know, 44 will also be allowed. 41 will also be allowed. You can check. They They all include three ones.

**2:59:18** · Okay?

**2:59:21** · Is it clear?

**2:59:22** · Let's solve another question. This time we have a class B network. We want 180 subnets. And let's say 200 host per subnet.

**2:59:37** · Create subnet mask.

**2:59:41** · Try to solve. What will you do? What will be the first step?

**2:59:46** · We'll check for feasibility. So, check whether 180 into 200 is less than number of hosts in a single network of class B. 180 into 200, is it less than 2 raised to the power 16 minus 2? I told you to remember the value of this.

**3:00:05** · 65535.

**3:00:08** · Six It is 65536, but when you will subtract, it will become 65534. And this is This is very less. This is just 36,000. This is around 65,000 and this is 36,000. Perfectly feasible. Now, let's see. In a class B network, we have 16 bit for the NID. And 16 bit for the HID. How many subnets we want? We want 180 subnet.

**3:00:39** · So, for 180 subnet, how many bits will require to borrow from the HID? See, if we borrow just two bits, we'll create four subnet. If we borrow four bits, we'll create 16. If we borrow six bits, we'll create 64. What about seven bits? Just 128. Eight bits, 256. Yes, 256 is greater than 180. So, we have to require eight bits from from the HID to make them subnet ID and remaining eight will become the host ID.

**3:01:08** · So, the initial initial ones 255.255, this will be consistent in any subnet mask. Now, we want eight more bits out of the out of the remaining two octets to be one. Now, these eight bits could be placed anywhere. They could be placed anywhere. So, these eight bits They could be from the last octet also, all of them. And then, let this be zero. So, this will become the HID now and this will become the SID now.

**3:01:45** · Are you getting the point? Subnet masks are not unique. They could be different.

**3:01:50** · So, what is the most appropriate one?

**3:01:52** · When you start from the left-hand side and keep the ones contiguous. Now, this will become the SID and this will become the HID and then zero. This is the most appropriate one. But, these are also correct. .0.255 You can also divide among the two octets like four from here, four from here.

**3:02:14** · 240.240 Like this.

**3:02:21** · This is also correct. You can also make it like this. 255.255.255 . Six from here and then two from there. 192 and then 252. So the multiple could be possible. It's just the arrangement of ones. Where you want to arrange eight ones when you were given 16 available positions.

**3:02:48** · Okay?

**3:02:50** · Is the point clear?

**3:02:52** · Let's solve another question. All right, let's pick up a class C and we \[clears throat\] have we want 15 subnets and we require 20 host per subnet. Create a subnet mask for this. Now, you have to solve this and I'll be waiting for your answer.

**3:03:24** · Perfect, perfect, perfect. All of you have written not possible. Why?

**3:03:28** · 15 into 20 will be 300 hosts. But in a network of a class C only 250 four hosts are available. So, this is not possible.

**3:03:44** · Not possible.

**3:03:46** · Are you getting the point?

**3:03:52** · Okay?

**3:03:54** · Should we move forward?

**3:03:57** · Okay, let me give you another question. Suppose again a class C network and this time I want three subnets. And in the first subnet I want 60 host and in the second subnet I want 60 host and the third subnet I want, let's say, 120 host.

**3:04:14** · Can you create a subnet mask for this?

**3:04:18** · Let's check.

**3:04:19** · 60 + 60 + 120, which means 240. Is it less than 254? Absolutely yes. So, this is feasible, which means subnet mask is possible. Subnet mask is possible.

**3:04:35** · Now, you have to think in how many subnets you have to divide. Three subnets, which means we have to divide it into four ones because there is no uh we have not learned how to divide into three subnets. Either we will borrow one bit or we will borrow two bit.

**3:04:48** · If we borrow one bit, it will be divided into two. If we borrow two bits, it will be divided into four. So, we will have to divide it into four subnets.

**3:04:55** · So, if a class C network is divided into four subnets, how many host will each subnet would have?

**3:05:02** · Just 62 host.

**3:05:06** · Okay. So, this 60 could be allocated here. This 60 could be allocated here, but what about this 120?

**3:05:14** · No.

**3:05:16** · Not possible.

**3:05:19** · That's where a new concept VLSM comes to picture. Variable length subnet masking.

**3:05:28** · Variable length subnet masking. How we are going to solve this?

**3:05:33** · See here.

**3:05:34** · We will go step by step. We will go step by step. So, actually how do we do subnetting? We borrow from the HID part. Let's say we have a class C address. So, 24 bits for the NID and eight bits for the HID part.

**3:05:54** · Okay. Now, what do I do?

**3:05:57** · Instead of this HID, instead of borrowing two bits directly, I'll first borrow one bit. So, one bit given for the SID part, and the remaining seven bits given for the HID part. Now, when I borrow one bit, the whole network will be divided into two parts. To represent the first network, I'll use zero. To represent the second network, I'll use one. Now, I have seven bits to represent the host among these net these subnets.

**3:06:27** · Okay?

**3:06:29** · So, how many hosts will be there? 2 raised to the power 7 minus 2. This will be 128 minus 2, which means 126. So, 126 hosts will be present here. 126 will be present here. Now, what we're doing, we are allocating the third one, 120, with 120 hosts here. And we will assume this now as our network to focus.

**3:06:57** · We will consider this as HID now. And now we are we want to divide it into again two parts. So, we will borrow again from here. So, after seven bit one bit given to SID, and six bit will be remaining to us for HID part. Now, I will address Now, I will address Wait a minute.

**3:07:20** · One was fixed here. So, I'll And we are fixing another bit. So, I'll address this with 10, and the third one with us 11. Now, we have six bits remaining with us. Six bits and six bits.

**3:07:34** · How many hosts will be there?

**3:07:38** · 2 raised to the power 6 minus 2, which means 64 minus 2, which means 62 hosts. 62 hosts will be present here. 62 will be present here. How much we require? We just require 60 and 60. So, we will allocate them. Let me explain the whole thing again.

**3:07:54** · What we are doing?

**3:07:57** · We have a class C network. We want to divide it into three subnets. First subnet will have 60, second will have 60, and the third will have 120. These many hosts per subnet I want. So, if we are directly borrowing two bits, the whole subnet will be divided in the whole network will be divided into four subnets, each with 62, 62, and 62 host.

**3:08:24** · Now, what about 120?

**3:08:25** · That's why this method is not feasible. What we will do? We will borrow one by one.

**3:08:32** · So, first we'll fix one bit, and I've told you in the first lecture that if we have n bit, and if you borrow if you fix the initial k bits, then the network is divided into 2 raised to power k parts. So, if I'm fixing just one bit, then the network will be divided into two parts. So, I fixed one bit, and the network is divided into two parts. I'll address the first part with zero, and the second part is one.

**3:08:59** · Now, I want to divide more this part. So, what I will do? I'll bit I'll fix one more bit. And I will address the first part with 10, and the second part with 11.

**3:09:13** · Is it clear?

**3:09:15** · So, in this manner, we will subnet of variable length. Now, I have seven bits for this subnet, which means 126 host per subnet. I have six bits for these two subnets, which means 62 host per subnet.

**3:09:37** · Is it clear?

**3:09:41** · You can also do like this. Divide zero, one, and then you divide the first part into two halves.

**3:09:51** · Fix again.

**3:09:52** · Address the first one with 0 and the second one with 1. This is also feasible. This will have 62 62 and then 126. You assign 60 here, 60 here and then 121 here. Suppose we are given with this time IP address 200.200.200 .126 and we are given with subnet mask .255 and then 192. This time you have to tell me what is the subnet ID.

**3:10:27** · What is the subnet ID?

**3:10:28** · And what is the host ID?

**3:10:33** · We have been given an IP address of a host from some subnet. And subnet mask is given. Now you have to tell me from which subnet this host is. You have to tell me the subnet ID and what is the host ID of this host.

**3:10:50** · Okay?

**3:10:51** · So, first of all, you will convert this 126 into binary. 01 111 110. And then 192 to binary. 11 and then 1 2 3 4 5 6. Okay? Now, \[clears throat\] we are given with the IP address of class C. Which means three octet will be for the NID and two octet will be for the HID part. So, from subnet mask three octet, which means 255.255.255. This is the NID part.

**3:11:29** · And this will 192 11 and then 1 2 3 4 5 6. This will include the HID part. But now this is subnet mask, not network mask, which means these two are SID and the remaining ones are HID. Okay, so if these two are HID, which means which means these two bits will give me the subnet ID, which tell me from which subnet does this IP belong.

**3:12:00** · So, 01 will be the subnet ID, which means subnet ID will be 200.200.200. 01 and the rest as you know, in subnet ID host IDs are all zero. So, this will become 64. So, this is the subnet ID.

**3:12:21** · What about host ID?

**3:12:25** · What about host ID?

**3:12:27** · You can calculate host ID from here also, like this is what subnet ID was, so this will become the host ID. What is the host ID?

**3:12:39** · This is 62.

**3:12:41** · You can also calculate like this that host ID equals to IP address minus subnet ID.

**3:12:51** · This is simple.

**3:12:52** · This was the full IP address which included SID plus HID. So, HID will be equals to IP address minus SID. The last octet. So, what is the IP address last octet? 126. What What is the SID? 64. So, this will also give me 62. So, these are the methods from which you can solve. You can also do like this IP address and bitwise ending obviously net mask. What does this give me? Tell me in the chats.

**3:13:29** · Network ID, yes.

**3:13:32** · What does this will give me? IP address and subnet mask this will give me SID, yes, subnet ID. So, you can solve also like this that IP address was 200.200.200.011 1110.

**3:13:55** · And what was the subnet mask?

**3:13:58** · 255.255.255.192, which means 11 and then rest 0 1 2 3 4 5 6. If we do the bitwise ending, this will remain same 200, same 200, 200, and then So, this will give me 0 and then 1.

**3:14:18** · Let me solve properly 0 1 again 0 then 0 then 0 then 0 and then again 0 and then again 0. So, this will give me 64. So, what was subnet ID?

**3:14:36** · 64.

**3:14:38** · Okay? Now, you can solve like this. HID equals to IP address minus subnet ID, which was 126 and subnet ID we just calculated 64. So, this will give me 62, so HID will be 200.

**3:14:53** · 200.200.62.

**3:14:56** · Simple answer.

**3:14:59** · Okay?

**3:15:02** · Now, another question. If you are given with, let's say, subnet mask, then can you tell me the number of subnets?

**3:15:14** · Can you tell me the number of subnet, for example, 255.255.255.224?

**3:15:20** · Can you tell me the number of subnets?

**3:15:27** · People are spamming eight, but eight could be the wrong answer. If I say the class is B, how did you already assume that this will be the NID?

**3:15:41** · I've not mentioned the class. So, if only subnet mask is given and you have been asked the number of subnets, then it is necessary that class must be mentioned. Otherwise, you won't be able to solve. See like this. For class B, this will become the NID and this will become the SID plus HID. So, how many subnets now? Eight and then three. 11 bits. So, 2 raised to power 11.

**3:16:10** · But, if you just change the class to C, then this will become NID. This will represent SID plus HID. Three bits for the HID, five for the three bits for the SID, five for the HID. So, 2 raised to power three. Now, eight is the answer when the class is C.

**3:16:30** · Okay?

**3:16:35** · So, if subnet mask is given and you have to mention the number of subnets, you cannot. If class is not present, but you can mention the number of IP address per subnet. This you can surely mention just with the help of subnet mask. Let's say 255.255.255.

**3:16:57** · 240.

**3:16:59** · 240 means four ones and then zeros. Now, can you mention the number of subnets? No, because you do not know the class. You do not know whether you have to consider this as an ID, this as an ID, or this as an ID. Okay. Question number two.

**3:17:16** · Can you mention number of IP address per subnet?

**3:17:21** · Yes, you can with the help of these zeros. With the help of these zeros. So, how many IP address? Two raised to power four. You have four bits.

**3:17:32** · Four bits.

**3:17:34** · That's why two raised to power four IPs can be possible. How many number of host per subnet?

**3:17:42** · Two raised to power four minus two. Number of subnets now I'll ask you. Number of subnets in class A. Number of subnets in class B. Number of subnets in class C. Consider this as homework. Okay? I've just discussed how to do it.

**3:18:04** · Everything clear?

**3:18:08** · You can Don't consider this as homework. This is too easy. You can directly solve two raised to power 20, and then two raised to power 12, and then two raised to power just four.

**3:18:19** · Okay?

**3:18:24** · Okay. Now, let's solve some other type of questions. For example, if you have been given DBA direct broadcast address like 200.200.200.31.

**3:18:38** · And out of the given subnet mask, can you tell me which will become the or which is a valid or appropriate subnet mask? How will you do it?

**3:18:46** · Let's say I've given you four subnet mask.

**3:18:48** · Uh 255.255.255.192.

**3:18:55** · And let's take just one another option, or let's take it three options. 255.255.255.224, and then 248.

**3:19:09** · Now, out of these three, which one or which of them are valid subnet masks?

**3:19:18** · First of all, tell me what DBA represents. DBA represent that an ID plus SID will remain as it is. And HID will be all ones.

**3:19:33** · Okay.

**3:19:35** · Now, if you convert it into binary, what is 31? 31 is 2 raised to power 5 minus 1, which means 1 2 3 4 5. These are all ones and then three zeros. Now, from here, these are the HID's, which are all ones, and this part will be NID plus SID. Now, HID could be maximum of five bits. Which means I can write like this, HID should be less than five bits.

**3:20:12** · Now, if you consider this subnet mask like 192, in that case, 255, or I can just write this, 1 1 and then 1 2 3 4 5 6. In that case, HID is six bits, which is not the case. HID must be less than five bits. So, this is wrong. What about this? 224. 1 2 3 1 2 3 4 5. Here, HID is five bits.

**3:20:41** · Correct.

**3:20:42** · What about this? 1 2 3 4 5. HID is three bits. Correct. Again. So, in \[clears throat\] whichever subnet mask, HID is less than five bits, that subnet mask is valid.

**3:20:58** · If I have given you something like this, 255.255.255, and then 240. Is this valid?

**3:21:06** · 1 2 3 4 1 2 3 4. Just four bits, while the maximum allowed is five bits. So, yes, it is valid.

**3:21:13** · Is the point clear?

**3:21:17** · Let's solve another question.

**3:21:19** · If the DB of a network is 168.17.7.255, what could be the network mask?

**3:21:31** · What could be the network mask? See, this is a class B. This is class B address. So, this will be an ID and the remaining will be SID + HID. So, if I want to convert 168, 17, and then 7 will be 1 2 3 4 5 1 2 3. This is 7 and then 1 2 3 4 1 2 3 4. This is 255.

**3:21:54** · So, what is SID here?

**3:22:03** · This is SID.

**3:22:05** · And these contiguous ones from the right-hand side will be the HID. So, what is the maximum value that HID can reach? 1 2 3 4 5 6 7 8 9 10 11. 11 bits. So, in whichever subnet mask in whichever subnet mask HID is less than 11 bits, that is a valid mask. Let's see.

**3:22:27** · 255.255.248.0.

**3:22:31** · Now, check.

**3:22:32** · Is HID less than 11 bits? What is 248?

**3:22:35** · Five bits from the left-hand side. 1 2 3 4 5 and then 1 2 3 1 2 3 4 5 6 7 8. This is exactly 11 bits. So, this is valid. What about let's say 252? Again valid. What about 254? Again valid. What about 240? Will that be valid? 1 2 3 4 1 2 3 4 and then eight bits from here. So, eight and then four 12 bits.

**3:23:00** · Greater than 11 bits. So, this is not valid. Are you getting the idea? These ones must be contiguous from the right-hand side. For For if this one is not here here, if something is like this, 1 1 0 0 0 1 1 In that case, in that case, these two ones won't be considered. Only contiguous ones should be present from the right-hand side. Those will be considered in the HID.

**3:23:36** · And in whichever subnet mask HID is less than these number of HIDs, that will be the valid ones.

**3:23:43** · Is it clear?

**3:23:51** · Now, what about the opposite? If you are given with subnet mask and you have to find out the DBA, see here. Suppose the subnet mask is 255.255.255.240.

**3:24:04** · Now, among these options, what could be the DBA?

**3:24:09** · 200 or 200 uh or 56.78.31 and then here 200.56.78.15 and then 200.56.78.10 and then 200.56.78.47. Try to do it.

**3:24:33** · What's the first thing you're going to do?

**3:24:35** · Convert this into binary. 255 255 255 and then 1 2 3 4 1 2 3 4. What does the subnet mask represent? It represent that an ID and SID will be ones and HID will be zeros. So, what are the HID here? These are the HIDs. These are the HIDs. So, in whichever DBA, in whichever DBA, there are four ones contiguous from the right-hand side, those will be the valid ones.

**3:25:10** · Those will be the valid ones. In 31, is it valid? 1 2 3 4 5, five ones. Is 15 valid? 1 2 3 4, just four ones. And four is needed, so yes. Yes.

**3:25:19** · Is 10 valid? It's 1010, so it's not valid. Is 47 valid?

**3:25:24** · Uh we need to convert it. So, what is 47?

**3:25:28** · 32 or 15 and then 32, I guess. So, 00101111. Again, four ones, so yes, it is valid. So, this one was not valid.

**3:25:42** · Are you getting the point?

**3:25:44** · How did we do? Let's solve another question. What about 248? So, in 248, 1 2 3 4 5 and then 100. So, they will become the NID plus SID part. And the number of zeros will represent the HID part. So, HID is three bits. So, in whichever DBA, last three ones from RHS, there are contiguous three ones, then those are valid. For example, uh let's take some big numbers. Mm 135, 240, 207, 231.

**3:26:17** · For 135, how are you going to convert 135 into binary? It will be 1 000 and then I think we're going to need seven from the end. Yes. So, again, three bits included. 240, 111 and then not Is it valid?

**3:26:34** · 11 and then 15 from the end. 1111. So, this is again valid. Is 231 valid?

**3:26:40** · I'm going to need 128, 64, 32 and then 111. So, this is also valid.

**3:26:50** · Did you get it?

**3:26:52** · \[snorts\] Okay?

**3:27:02** · Now, you remember the diagram in where we made like this?

**3:27:06** · We have a router in between to manage the subnets. Let's focus on that. How the router manages to which subnet it has to forward the packet. So, let's say this was our network 200.200.200.0. This is the NID and this is the HID. Okay? Now, I want to divide it into four subnets. Let's say we divide it into four subnets. 0 0 0 1 1 0 and then 1 1.

**3:27:35** · \[clears throat\] 6 bits 6 bits 6 bits 6 bits. So, host per subnet will be 2 raised to the power 6 minus 2, which means 62. So, each one has 62 subnets. So, not subnets, hosts. And what will be the range if I ask? 0 to 63? While 0 and 60 are not allowed. 0 and 63 are won't be allowed. In between them there are 62 numbers. So, they will be assigned to the hosts.

**3:28:08** · For there, each one has 62. So, again 64 to 127 and then 128 to I guess 191 and then 192 to 250 255. Let me draw neatly. 0 to 63 and then 64 to 127 120 8 to 191 and then 192 to 255. This was 0 0 0 1 1 0 and 1 1. Okay? 6 bits for HID, 6 bits HID, 6 bits and again 6 bits.

**3:28:51** · What will be the subnet mask? As you know, you have borrowed two bits. So, subnet mask will be 255 255 255 and then 1 1 and then 1 2 3 4 5 6. This is what? 192. So, I will directly directly write 192.

**3:29:06** · Okay. Now, what happens?

**3:29:08** · There is a routing table. There is a routing table which has network ID, subnet mask, and interface. So, we have a router in between which has a routing table. Network ID, subnet mask, and interface. So, let's say the network ID will be 200 200 200 and then zero. And subnet mask will be 255.255.255.192. And interface will be, let's say, A.

**3:29:38** · Interface will be, let's say, A, which means we are sending it to here. A, B, C, D, and there is one default route, also, E. Now, you remember that in class A addresses, we have given this one as default route or DHCP client. That's why we have not used this as a network default route. Now, you will understand in a few minutes why we are using this default route. Let's say interface is A.

**3:30:12** · Then we have some other 200.200 network ID.

**3:30:17** · 64.

**3:30:19** · For this, what is the network ID of this subnet? 64. For this, 128. For this, 192. For this, it was zero. So, 64, I'll just directly write 19 128 and then 192.

**3:30:31** · What will be the subnet mask?

**3:30:33** · They will remain the same. Okay. Now, what about the interface? B, C, and then D, and for default route, let's say, E.

**3:30:47** · Okay.

**3:30:49** · Now, what happens? A packet comes to the router from the outside network with a destination IP of 200.200.200.160.

**3:31:02** · Now, at which interface this will be forwarded?

**3:31:06** · At which interface this will be forwarded? Are you getting the point what I'm trying to do here?

**3:31:10** · We have we have divided a full network into four subnets with different subnet ID. We have divided a network. This was a network 200.200. 200.0. This was our network. We have divided this into four network with a ID of 200 200 200 and then zero. This was the first subnet and then second subnet 200 200 200 and then 64 and then the third subnet with 120 eight and then the fourth subnet with 192.

**3:31:43** · We have divided our network into four subnet. And the subnet mask is 255 255 255 and 192. This was the subnet mask. How 192? Because we have borrowed two bits for the four networks four subnets.

**3:31:58** · Now, what happens?

**3:32:02** · A packet from some outside world comes to the router with a destination IP of 200.200.200.160.

**3:32:12** · So, in which subnet does the router have to forward the packet?

**3:32:18** · In which subnet does the router have to forward the packet? Now, what you may be thinking is we can check for the range. While 160 lies here, so it must be forwarding the packet to interface C. Is this logic correct? Yes, it is correct.

**3:32:35** · It is absolutely correct, but what is the formal way to do this?

**3:32:40** · We do the bitwise ending of destination IP and subnet mask. This will give me the NID. Destination IP and subnet mask. Let's say this is the destination IP and the subnet mask is 255.255.255.192.

**3:33:00** · Now, if you do the bitwise ending of these two, what will you receive?

**3:33:06** · You will get 200.200.200 and only the first one will be matched, which means 128. What is 128?

**3:33:14** · 128 referring to interface C. 128 referring to interface C.

**3:33:22** · Did you get it? How did we or how does how does the router check at which interface it has to forward?

**3:33:30** · Okay, you can either calculate the range or you can just do a bitwise ending between whom? Between destination IP and subnet mask. And whatever be the NID, you have to match it. You have to match it with the interface. Now, sometimes what happens is that when you do the ending of destination IP and subnet mask, multiple NIDs are matched.

**3:33:54** · In that case, you will forward the packet with the subnet mask which has maximum number of ones. In this case, it was the same. The subnet mask was same.

**3:34:07** · What is the case in which subnet masks are different and multiple NIDs are matched?

**3:34:12** · In that case, you will forward it to longest subnet mask. Okay, let's take an example so that you can understand better. Longest subnet mask is We have routing table which have an ID, subnet mask, and interface at which the router is going to forward if NID matches. Now, you will be given destination IP. Let's say it is 128.75.43.16.

**3:34:49** · Okay? Now, what have you have to do?

**3:34:54** · Do the bitwise ending of destination IP and subnet mask. Let's do this. We'll begin with, let's say, 128.75.43.

**3:35:05** · 16.

**3:35:06** · And 255.255.255.

**3:35:09** · So, this This will give you the same one as we are ending with 255. So, whatever number you end with 255, same number will be written. So, this is 128 and this is something like 192. This is clear-cut wrong. So, it won't be forwarded to interface three. What about the second one? Like 128. So, this will be 255.255.255.

**3:35:34** · And then 128.

**3:35:36** · So, this will be zero, obviously, because this is one here. And this is one at the beginning. So, the ending both of them will be zero. And then this will give 128.75.43. As you are ending with 255, so same will be written. So, is this matching? Yes, it is matching. 128.75.43.

**3:36:03** · 128.75.43. It matched.

**3:36:06** · Is it matching?

**3:36:07** · You know, it will be matched. Why?

**3:36:10** · Because this is zero. If you end any number with zero, zero will return. So, 128.75.43. 128.75.43. Now, two IDs are matched. So, it could be either forwarded to interface zero or one. How What is the deciding factor? The longest number of subnet mask. The longest subnet mask. What is the longest subnet mask? Which has the more number of one. More ones. So, this has more ones. So, it will be forwarded to one.

**3:36:41** · So, what have we learned in this example?

**3:36:45** · We have \[clears throat\] a routing table which has NID, subnet mask, and then interface. And you will be given with a destination IP. What do you do? You would do the bitwise ending of destination IP and subnet mask. And whichever NIDs are matched, you're going to note that. And corresponding to them those NIDs, whichever NID has the largest subnet mask, you will forward the packet to that interface. Okay? You can also write a rule here.

**3:37:11** · Like, start checking with the largest subnet mask. Let's move on to the last category of subnetting. Suppose we have two networks connected by a router. This is network A and this is network B. Let's say A is present here, and we do not know where B is present in A's network or in in some other B's network, let's say.

**3:37:34** · So, what are we going to do? We have IP address of A and subnet mask of A. And we have IP address of B.

**3:37:41** · What are we going to do?

**3:37:43** · You know that doing bitwise ending of IP address and subnet mask is going to return me the NID. So, I will do the bitwise ending of IP address of A and subnet mask of A. So, I will receive NID of A with respect to A.

**3:37:58** · And if I do the bitwise ending of IP address of B with respect to the subnet mask of A or with the subnet mask of A, I will get the NID of B with respect to A. NID of B with respect to A. Now, if these two are same, then A assumes A assumes that B is present in the same network.

**3:38:22** · And if they're not same, then A assumes that B is present in a different network in different network. Same could be done with B. Let's say if if you have been given like this IP address of B ending with subnet mask of B, then you're going to receive the network ID of B with respect to B.

**3:38:44** · And here IP address of A subnet ending with subnet mask of B, then you're going to receive the NID of A with respect to B. And if both of them are equal, which means A B assumes B assumes that A is present in the same network. And if not, then B assumes A is in the different network.

**3:39:06** · Well, this is not commonly asked. It's it's not of that importance, but you should know how they check whether it's present in same network or in the different network. We have seen an example. Let's say you want to buy a cake. This is let's say 10-piece cake. This is seven pieces and this is two pieces. And you want to buy three-piece cake. But the shopkeeper has already divided the cake into these three parts.

**3:39:36** · Now you cannot buy this two-piece cake because you want three pieces.

**3:39:41** · So what you going to do?

**3:39:43** · Buy the seven-piece cake. Waste the four pieces and keep the three pieces.

**3:39:49** · \[clears throat\] In this case, four pieces are being wasted. So you do not go to that shop. You go to another shop where there is no segregation already done before.

**3:40:00** · So what you going to do?

**3:40:01** · You say that please give me a three-piece cake out of this. So three pieces exactly will be given to you.

**3:40:09** · Okay?

**3:40:11** · So this is the classless addressing. You do not already make the classes.

**3:40:16** · Classless addressing.

**3:40:20** · Okay? This was classful addressing. So in CIDR, classless inter-domain routing, classless inter-domain routing, we use the slash notation.

**3:40:34** · Slash notation. What is this?

**3:40:37** · We write like this, A B C D /n. Where this n will represent the NID or subnet mask. For example, this is our 32-bit IP address. n will be the prefix, the NID part. So, n bits will be the NID part, and the remaining bits will become the suffix or the HID part. This will become the NID part.

**3:41:06** · Okay?

**3:41:07** · Now, how many number of IP address will be there in one block?

**3:41:12** · 2 raised to power 32 minus n. How many host will be there? Minus two. So, when I ask you IP address, you'll answer this. When I ask you host, you'll minus two.

**3:41:25** · Okay?

**3:41:26** · Now, to find the first address, we'll keep the n leftmost bit and set the 32 minus n rightmost bit to all zeros. So, you'll keep it as it is, and you'll set the HID's to all zeros, you'll find the first address. If you set the HID's to all ones, you'll find the last address. And about what about the host? The host will lie here in between.

**3:41:56** · Plus one will be the first host, and minus one will be the last host. I hope the idea is clear.

**3:42:07** · Okay?

**3:42:10** · Now, there are some rules for CIDR that must be followed.

**3:42:15** · \[cough and clears throat\] So, whenever any customer wants a block of IP address, there, I wanted a block of three piece cake, three pastries. Here, we want a block of IP address. So, whenever any customer want a block of IP address, IANA or your internet service provider will create block and assign to the customer like here we did.

**3:42:40** · On on the basis of demand, we created the block. So, here also, the IANA or ISP will create the block for you and assign it to you. Okay? Now, there are some rules that must be followed by IANA. All the IP address in the block, so when whatever block will be assigned to you, all IP address in the block, all IP addresses should be contiguous. You cannot do like this.

**3:43:10** · One piece from here, one piece from here, one piece from here to make the three piece cake. No. It should be contiguous. This is the rule. So, all IP address should be contiguous.

**3:43:21** · The second rule.

**3:43:22** · \[clears throat\] Block size must be a power of two. As soon as I have written this line, you would have guessed that wastage will be here also. For example, if I wanted, let's say 476 IP addresses, I have to cut out the block of 512 IP address. The remaining will be wasted, but the wastage here is significantly less than the classful addressing.

**3:43:50** · Are you getting the point?

**3:43:51** · So, if you want, for example, three IP addresses, you have to create a block for four IP address. One will be wasted. If you want, let's say 780 IP addresses, you have to create a block of 1024 IP addresses. The remaining will be wasted, but the wastage here is significantly less.

**3:44:11** · Okay?

**3:44:12** · So, the block size should be in the the of two.

**3:44:18** · Third condition.

**3:44:20** · First IP address of the block First IP address of the block must be divisible by the size of block. Now, how you are going to identify whether this is divisible or not, let me tell you a simple concept. Let's say there is a n-bit number and you want to divide it with a let's say some block size. Let's say 2 raised to power k. As you know, the block size must be in the power of two.

**3:44:46** · So, when you divide it with 2 raised to power k, if the last k bits if the last k bits are zero, then it will be divisible. Let me explain again. Here we have n bits and you are dividing with let's say 2 raised to power k. Then, the k bits on the right-hand side and n minus k bits, these k bits will represent the remainder. And these n minus k bit will represent the quotient.

**3:45:19** · Okay? So, these k bits should be zero.

**3:45:25** · Okay?

**3:45:26** · Is the idea clear? It should be like this, 0000 k times. And first IP address of the block, first IP address must be used as block ID.

**3:45:40** · \[clears throat\] It's similar that the first IP address should be used as a network ID in case of classful addressing. Here, the first IP will be used as block ID in case of classless addressing because we are creating blocks. So, to identify the block, we will use the first IP.

**3:45:58** · Okay?

**3:46:00** · Is \[clears throat\] it clear?

**3:46:01** · Let's Let's see which are the valid blocks. If I write 100.100.100.64, 65, 66, 67 till 127.

**3:46:14** · 100.100.100 Do you think this is a valid block?

**3:46:19** · I have I've taught you these three conditions.

**3:46:22** · Do you think this is a valid block?

**3:46:28** · The first condition is satisfied. That these are contiguous.

**3:46:34** · What was the second condition?

**3:46:37** · That the block size must be in a power of two. Is the block size a power of two? Let's check. So, 127 - 64 + 1. These are the number of IP address present here. This is 128 - 64. So, it is 64. Is 64 power of two? Yes, 2 raised to power 6. So, second condition is also satisfied.

**3:46:59** · What about the third condition?

**3:47:01** · What is the block size? 2 raised to power 6. Are the last six bits from the first IP zero? Let's check. How do you write 64 in binary? 1 2 3 4 5 6 and then 7 and then 8. This represents 180 128, this represents 64. So, the last six bits are zero. That's why we can say that first IP address of the block is divisible by the size of the block. What was the size of block? 2 raised to power 6. And we have six bits from the right hand side zeros.

**3:47:35** · I've given you the concept. If you want to divide with 2 raised to power K, you must look that if the K bits from the right hand side are zero. If yes, then it is perfectly divisible.

**3:47:48** · Okay?

**3:47:49** · Now, \[clears throat\] let's understand the representation of CIDR. Representation of CIDR If you have a block size \[clears throat\] let's say 2 raised to power K, then HID will be of six bits. NID will be of 26 bits. Okay, so we will represent 100.100.100 and then 64 because this was the first IP.

**3:48:21** · First IP.

**3:48:23** · And then 26 bits.

**3:48:26** · This will be acting as N. What was N?

**3:48:29** · N was representing the number of NID bits. So, we have 26 NID bits, so N will be 26. Okay, so we will write like this. 100.100.100.01 and then the last six bits will be HID 000000. These are now HID. This represents the block ID.

**3:48:52** · Now, what will be the first host?

**3:48:53** · 000001.

**3:48:55** · What will be the last host?

**3:48:57** · 111110.

**3:48:59** · And in the end 111111, this will become like 127, but these will be the host. Why are we not using this? This will be used for DBA. Because in DBA in DBA network ID here we will have the block ID will remain as it is. And HID will be all ones.

**3:49:31** · Okay?

**3:49:35** · Is it clear?

**3:49:37** · Let's Let's try another example. Do you think this is valid?

**3:49:42** · .128 and then 129 and then 130 till let's say 255. Do you think this is valid?

**3:49:54** · First of all, you have to check is this contiguous?

**3:49:58** · Yes, it is contiguous.

**3:50:01** · What was the second condition?

**3:50:05** · What is the block size? 255 minus 128 plus one. This is 256 minus 128 equals to 128. This is 2 raised to power 7. Block size is in the power of two. So, yes, second condition also is satisfied.

**3:50:18** · What was the third condition?

**3:50:22** · Is the first IP address of the block divisible by 2 raised to power 7? How we are going to check? We will check if the last seven bits if the last seven bits are zero or not.

**3:50:35** · So, convert into binary. How you are going to represent 128?

**3:50:40** · The first bit will be one and then remaining will be zero. And these seven bits are zero. So, yes, it is divisible also. So, this is a valid block. This is a valid block.

**3:50:53** · \[clears throat\] Check again.

**3:50:56** · 100.100.100.1 2 3 till 32. Do you think this is a valid block?

**3:51:06** · Do you think this is a valid block?

**3:51:11** · Let's check. Is it contiguous?

**3:51:15** · Yes, it is contiguous. I think spelling is wrong. g u o u s.

**3:51:19** · This is contiguous.

**3:51:20** · What was the second condition? Size of the block. 32 minus one equals to 32 minus one plus one.

**3:51:28** · Which is 32. This is 2 raised to power 5. This is also valid. What is the third condition?

**3:51:33** · Is the first IP divisible by the size of the block? Now, we can directly see that it is not divisible because for this IP to be divisible the last five bits last five bits should be zero. But, is it zero? No. Because one is represented like this. Last five bits are not zero. So, we will say this is not a valid block. This is not a valid block.

**3:52:03** · Is it clear?

**3:52:08** · Do you have any doubt regarding this?

**3:52:17** · Okay, let's see more example. Suppose we have 100.100.100.68 and then 27. You have to find the number of addresses in a block. Addresses in this block, you have to find the range of IP. Range of IP addresses. You have to find the block ID or you can also call it as network ID. You have to find the first host, last host, and the DB.

**3:52:53** · Try.

**3:53:02** · What you can directly see?

**3:53:05** · You can see that the NID is 27 bits.

**3:53:09** · So, what will be the HID?

**3:53:11** · Five bits because the sum should be 32 bits. So, the number of IP address will be 32.

**3:53:23** · What will be the range of IP address?

**3:53:26** · What will be the range of IP address?

**3:53:28** · Think.

**3:53:34** · And what will be the network ID?

**3:53:38** · Or the block ID?

**3:53:51** · Why I'm not seeing answers in the chat?

**3:53:54** · Is it not simple?

**3:54:02** · Mhm?

**3:54:04** · Okay.

**3:54:05** · I've given you enough time. Let's solve. So, we have to find the range of IP address. First thing you do is convert into binary. So, it will be like 100.100.100 and then 68 will be 64 + 4. So, it will be 01000100.

**3:54:24** · Okay?

**3:54:25** · And 27 bits from the left-hand side will be the NID part. So, these are 24 and then these are NID part and this will be the become the HID part.

**3:54:37** · What will be the block ID?

**3:54:40** · Block ID will be all HID parts should be zero. So, 100.100.100. Just 64. This will not be there.

**3:54:50** · So, what will be the block ID?

**3:54:53** · 100.100.100.64.

**3:54:56** · What will be the first host?

**3:54:58** · 100.100.100.65. What will be the last host?

**3:55:04** · To find the last host, you can like 11110.

**3:55:09** · What is the value of this?

**3:55:12** · 010.

**3:55:13** · What is the value of this?

**3:55:15** · For last host, this is 95, I guess. So, last host will be 100.100.100. No, I guess it is 94.

**3:55:27** · Not 95.

**3:55:29** · 94. 95 would be if it is also one.

**3:55:32** · 94.

**3:55:34** · What will be the DBA? Now you know that in DBA, all HID will be one. So, this will be now become 95. So, for DBA, it will be 100.100.100.95.

**3:55:45** · What is the range of IP?

**3:55:48** · The range of IP will be from 64 to 95. And you can write directly 64 to 95, while 64 represent the block ID. And 95 represents the DBA, and the host are in between here. I thought one example would be enough, but you as you guys are facing problem in this, let's solve another example. Uh one of the address of the block is given as 167.199.128.3 and then 20.

**3:56:17** · Now you have to find the same thing again. Number of address in the block.

**3:56:22** · Range.

**3:56:24** · Block ID. Same same thing. Those same those parameters again. Solve. First of all, you convert it into binary. This is the first thing that you do.

**3:56:38** · From which class does it belong?

**3:56:42** · It doesn't belong to any class, man. This is class less addressing. You focus on this number now.

**3:56:51** · Okay?

**3:56:52** · Try to solve.

**3:57:03** · As you know, an ID is what? 20 bits. So what will be the HID?

**3:57:09** · 12 bits.

**3:57:12** · So how many number of IP addresses? 2 raised to power 12. Number of hosts? 2 raised to power 12 minus 2. Okay, now you convert into it into binary. 167.199.128.3. What is 20? This is 16 and four more. So one This is what 128 is, and then three. Okay, now this was 16, 17, 18, 19, 20. This will act as an ID and the remaining will act as the HID part.

**3:57:47** · Now, how you are going to represent the first address or the block ID?

**3:57:52** · You will convert all HID into zero. So, this is what the block ID is.

**3:57:56** · Now, how are you going to represent the first host?

**3:58:02** · This is becomes the first host. What will be the last host? All host IDs one except the last one. 1 2 3 4 1 2 3 and then this.

**3:58:11** · What will be the DBA?

**3:58:13** · This is the DB.

**3:58:16** · Is it clear now?

**3:58:18** · This is a simple thing, simple case.

**3:58:22** · Okay?

**3:58:26** · \[clears throat\] Anyone have any doubt? You can ask now. Everyone says that this concept is clear.

**3:58:40** · What about subnetting in this?

**3:58:42** · This is the next topic. Subnetting in CIDR is the next topic. We're just going to study that only.

**3:58:48** · Okay? Is it clear?

**3:58:51** · Let's move.

**3:58:53** · Subnetting in CIDR.

**3:58:59** · Okay, let's say the address is this. dot Let's say 14 and then 25. Okay? Network ID is 25. Host ID is seven bits. So, there will be 2 raised to power seven, 128 IP addresses and 126 hosts. Okay? So, if I convert it into binary, 100.100.100. 0000 and then this will be 15 and this will be 14.

**3:59:31** · Okay? For 25, these are 24 and this will be 25. These are NIDs and the remaining are HIDs. Now we have learned in class for addressing how to do subnetting. Anyone remember?

**3:59:47** · Yes, borrowing. So, what are we going to do? We are We are going to borrow bits from the HID part. Let's say we borrow this bit and we name it as subnet ID SID bits. This will become the SID bit and this could be zero or one. What we did now, we just divided the full network into two parts, zero and one. And the remaining bits will be the HID bits.

**4:00:08** · Is it clear?

**4:00:09** · So, 100.100.100.0 and then this will be the SID bit. Let's say this represents zero and the remaining six bits will be for the HID. Okay? All zeros going to represent the SID, subnet ID. 000001, this will become the first host. 000010, this will become the second host. 11111 zero, this will become the last host and 111111, this will become the DB.

**4:00:48** · Is it clear?

**4:00:50** · These are the host.

**4:00:53** · The last one is DB and the first one is SID. Is it clear?

**4:00:58** · Now what about the second subnet? For this, you just change this bit to one and the rest remains same. Okay? So, for the first subnet, we have SID 100.100. 100.0 and now, you know, it will become 26.

**4:01:19** · Initially it was 25, we borrowed one bit and now it is 26. What about DB?

**4:01:25** · 100.100.100.

**4:01:27** · And this was 63. So, 63 26.

**4:01:33** · What about second subnet?

**4:01:35** · What about second subnet?

**4:01:37** · It will become 64 because of this bit and then here 64 + 63, which is 127. 64 will be added because of this bit and the rest remain same.

**4:01:52** · Okay? Is this clear how we do subnetting in CIDR?

**4:01:56** · Now, what about variable length subnet masking?

**4:01:59** · What about variable length?

**4:02:01** · Things remain same. For example, if you want to divide this you borrow one more bit name it as zero and then name it as one. Rest things remain same. Now, five bits five bits will be for the HID part. This will have 30 host, this will have 30 host. One one and then five bits here.

**4:02:23** · Now, again, if all zeros, then this will represent the subnet ID. If all ones, this will represent the DBA and the host will be in between. As we did the variable length subnet masking in the classful addressing, same concept applies here. Now, one thing you must remember is to increase this. Now, here the subnet here the n n will be 26 and for these two, n will become 27 because here you have borrowed two bits.

**4:02:53** · You have borrowed two bits, so n will become 27 from 25. Here you have borrowed one bit, so n will become 26.

**4:03:00** · Is this clear or I should take a neater or neat example for the variable length subnet masking?

**4:03:09** · All clear?

**4:03:19** · Okay. So, let me give you an example to test whether you have got the concept or not.

**4:03:25** · If you if you're not able to solve this, I'll take another example. If you are able to solve this, I'll move forward. Okay?

**4:03:32** · Let's say in a network we have 200.10.11.144 and then 27. The fourth octet of the last IP address of the network which can be assigned to a host will be I want fourth octet of the last IP of a network which can be assigned to a host will be I want a number. I want a number in the chat. Think very carefully. Do not make the mistake because if you do, I'll have to take another example.

**4:04:24** · Okay, 158 158 158 Okay, let's see. People are saying 158. So 200.10 What was the number? We see it again. 11.144 and then here it was 27. So, firstly you convert it into binary. So, 200 .10.11.10010000 Is this correct? This becomes 128 and this is 16 I guess. 16 Yes, it is correct. Okay, now. So, 27 bits for the NID.

**4:05:01** · 8 8 8 24 and then three more. So, this is become This has become the NID part. Now, you have five bits for the HID.

**4:05:12** · Okay.

**4:05:14** · What I want the fourth octet of the last IP address which could be assigned to a host. What could be the last IP address?

**4:05:20** · 1 1 1 1 0 1 0 0. You have just to convert this into decimal, and it is 128. This is 128. And these are these are 30. So, it is 158. You guys are correct. You have got the concept.

**4:05:41** · Is it clear?

**4:05:44** · Okay.

**4:05:45** · So, we have learned about subnetting. In the next lecture, we will learn about supernetting. In the last lecture, we discussed about subnetting. In this lecture, we'll learn about supernetting. Supernetting in both classful and classless addressing. Let's begin with classless. So, we'll start with some examples. I'll solve few of them, and then it will be your turn to solve.

**4:06:12** · 200 200, or let's say 96 86 0 200 96 87 0 200 96 88 0 200 96 89 and then 0. Okay. What are the conditions of supernetting? First of all, you have to check whether the blocks These are block. This is block one. This is block four. Whether \[clears throat\] the blocks are contiguous. Whether the IP address in the blocks are contiguous.

**4:06:47** · Second part. The number of blocks that you are willing to combine should be in power of two.

**4:06:55** · Number of blocks.

**4:06:58** · The third thing is size of supernet should be divisible by first block ID. Which is this one.

**4:07:13** · Okay. Now, check. Is it contiguous?

**4:07:16** · 86 Okay. so first of all, this is a class C network. So this is network ID and the last octet is host ID. So we are going from 86 0 to 255. And then the next host will be from the second block. 87 0 to 255 The next will be from 88 and then 89. So yes, they are contiguous. Are the number of blocks in power of two? Yes, we have four blocks. So yes. Is the size of supernet divisible by the first block ID? What is the size of supernet? We have host ID of one octet.

**4:07:48** · So 2 raised to power 8 IP address in one network and we have four blocks. So 2 raised to power 10. Do we have 10 contiguous zeros from the right hand side in the first block ID?

**4:08:03** · 96. Now we are converting 86, so it will be 0 1 1 No, 0 1 and then 0110. And then 0000 eight zeros. Eight and then nine. Only nine zeros are present and we wanted 10 zeros.

**4:08:29** · Because for the size of supernet for the full supernet being completely divisible by the first block ID we need 10 zeros from the right hand side in the IP address of the first first block ID. But we have nine zeros only, so the third condition is not satisfied.

**4:08:49** · Is it clear?

**4:08:52** · Okay.

**4:08:54** · Let's solve some other other question. \[clears throat\] 198 47 32 0 198 47 33 0 198 47 34 0 198 47 35 and then 0.

**4:09:12** · Now, first condition, is it contiguous?

**4:09:17** · This is Again, this is class C, so this is an ID, this is HID.

**4:09:23** · This is contiguous.

**4:09:24** · We are starting from 32 zero to 255 and the next will be from 33. Next after 256 next will be from 34 and then 35.

**4:09:35** · Okay?

**4:09:36** · So, this is contiguous. Second, how many blocks are there? Four blocks. So, in power of two also.

**4:09:47** · What about third? What is the size?

**4:09:51** · Eight bits of HID, so two raised to the power eight IP address in one block and we have four blocks, so two raised to power 10. Now, let's check whether we have 10 zeros in contiguous fashion from the right hand side in the first block ID. So, zero zero one one two three four five and then one two three four five six seven eight.

**4:10:14** · You know, we have 10 zeros, so third condition is also satisfied. Size of supernet divisible by the first block ID. So, here supernetting can be done.

**4:10:28** · So, what will be the supernet ID? The first block ID. 198 47 32 and zero. And what will be the supernet mask?

**4:10:38** · Network ID will be all one and host ID will be all zero. So, 1255.255 this was all host ID \[clears throat\] and this will become network ID. 123456 00 and then So, this will become 252 and this is zero. So, this is what supernet mask is.

**4:11:08** · Is it clear?

**4:11:12** · Let's solve another question. 128.56.24.0 \[clears throat\] 128.

**4:11:19** · 56.25.0 128.56.

**4:11:24** · 26.0 128.50.

**4:11:27** · 6.27.0 Apply the three condition. Can we do Can we combine and make a supernet of them?

**4:11:57** · Well, shout out to Abhay because he has correctly identified that we cannot apply supernetting here because they all belong to a single network. You all were trying to apply conditions. First, look at them. This belongs to class B. This is an ID. This is HID.

**4:12:19** · \[clears throat\] So, they all belong to a single network. No need to do subnetting. We cannot apply subnetting on a single network.

**4:12:27** · Okay, let's change it a bit. So, this time 0.0.0.0 Now, check. Can we apply subnetting now?

**4:12:39** · So, first of all, are they contiguous?

**4:12:42** · Yes, they are contiguous. Second, how many blocks are there? There are four blocks in power of two. So, yes, they can be combined. Contiguous, power of two condition satisfied. The third one is size of supernet. What is the size of supernet? We have 16 bits in the host ID. So, 2 raised to power 16 and we have four blocks. So, 2 raised to power 18.

**4:13:07** · Now, do we have 18 contiguous zeros from the right hand side in the first block IP ID? Let's check. 128 00111000 and then 1 2 and then 0 and 0. 8 8 16 and then 18. This will become the HID part. This will remain the NID part.

**4:13:31** · \[clears throat\] So, yes, supernetting can be done. What about supernet mask? NID will be all zero, all ones and HID will be all zeros. Again, 255 \[clears throat\] 252 0 0.

**4:13:47** · Is it clear?

**4:13:49** · Okay.

**4:13:51** · \[clears throat\] Let's see the difference between subnet mask and supernet mask. Okay? So, number of ones in the subnet mask either equal to NID or more than NID bits. So, number of ones Why? Because SIDs are also present.

**4:14:18** · Okay?

**4:14:18** · And here, the number of ones in supernet is always less than the NID. Why? Because you see, we are borrowing from the NID this time.

**4:14:29** · Have you realized?

**4:14:31** · For sub For subnetting, we were borrowing from the HID part. You can also write here, for subnetting you can borrow from HID. And for supernet, you have to borrow from NID. That's why in the mask, number of ones is less than the NID and here, the number of ones is greater than equal to NID. Subnet mask is always Always applicable to single network.

**4:15:02** · Single network.

**4:15:04** · Yes, and supernet mask is applicable for two or more networks.

**4:15:11** · Networks.

**4:15:12** · In subnetting we borrow from host ID. We can write like this. And from in supernetting we borrow from network ID.

**4:15:21** · Are the difference clear between subnetting and supernetting?

**4:15:28** · Okay?

**4:15:32** · Now, what about supernetting in classful addressing? Let's take an example. Suppose a company needs 600 addresses. Okay? So, let's check whether these four blocks could be used to form a supernet for this company. 198.47.32.0, 198. 47.33.0, 198.

**4:15:59** · 47.34.0, and 198.47.35.0.

**4:16:05** · Are they contiguous?

**4:16:08** · As this belongs to class C, so this will be an ID, this will be an SID. Yes, they are contiguous.

**4:16:14** · What is the size?

**4:16:15** · Uh total size of the supernet? 2 raised to power 8 into 4. 2 raised to power 10. So, you can check. This will satisfy. And there are four. There are four blocks. So, this is in power of two. Third condition also satisfied. So, can they be merged? Yes, they can be merged. This this supernetting is also easy. You just have to remember the four condition, and you are all good.

**4:16:43** · So, with the end of this topic, all IP addressing is over. What we have \[clears throat\] learnt in IP addressing, let's overview. So, first of all we begin with the properties of IP address. We learned about various classes involved there. We learned about classful addressing. And then, we learned about subnetting. After subnetting, we moved toward variable length subnet masking. Then, we learned CIDR, classless addressing. Then, we learned about supernetting.

**4:17:17** · \[clears throat\] Apart from that, we learned about various concepts like what is DBA, what is limited broadcast address, what is NID, HID, subnet mask, supernet masks. Okay, how we do subnetting, how we do supernetting, how we are going to identify the first host, last host, the network ID, the host ID, the range. We have learned all these type of \[cough and clears throat\] concepts. In the next lecture, we will start with error control.

**4:17:54** · IP addressing is almost over. We'll begin with error control. Before error control, I'll ask you to solve the complete set of DPPs I've provided for IP addressing. I've already given you the solutions. They're in the DPP. No question is that hard that you will not able to understand even after looking at the solution. If you have attended the classes properly, you have made notes, then they won't be that tough. Okay, you will be able to understand.

**4:18:25** · Even if you have any doubt in DPP, I say in each and every lecture, if you have any doubt in DPP or in the lecture, you can ask in the beginning of the lecture or in the end of the lecture, or even while I'm teaching some concept and you face any difficulty while understanding, you stop me right there and ask me. Okay? Don't wait for the topic to get completed and then you'll ask.

**4:18:56** · Yes, there are almost I think six to seven DPPs regarding this IP addressing. You can solve all of them. Each DPP have around five to six problems. So, you'll have around a set of 80 to 100 problems for IP addressing. If you solve all of them, you'll have a very solid understanding on this IP addressing. This module was of IP addressing. After error control, we're going to learn flow control.

**4:19:27** · And then we will learn IPv4 header and fragmentation. Then we'll move toward TCP UDP. Then media access control, routing protocols, supporting IP protocols, application layer, and then if time permits, we will learn about cybersecurity.

**4:19:48** · Okay?

**4:19:49** · Then we'll meet in the next class. One important disclaimer for this module that for this error control, we are not going to look at the security aspect. We will not consider the intentional modification as errors.

**4:20:03** · What do I mean by intentional modification?

**4:20:06** · When integrity is violated, when some person or some hacker intentionally modify the data, that part is not considered an error. When the data received is not same as the data sent due to the noise, this means error has occurred. Okay? So, we will look at two types of errors, single bit error and burst errors. By the name, you could have guessed. Single bit means only one bit is changed from zero to one or one to zero.

**4:20:39** · Let me give an example. 1 2 3 4 5 6 and then 10 and then what I received is 00001010. This was sent and this was received. So one bit is changed. When a single bit is changed, then we say single bit error has occurred. Now what about burst error? When two or more bits in the data unit have changed from one to zero or zero to one. For example, 01001010 and what I received was 01101110.

**4:21:12** · Okay, now this is changed and the last bit which was changed was this. So we call it as burst error when two or more bits in the data unit have changed. And this was the last error and this was the first error. And we call this distance as burst length, burst length. So what is the burst length? Distance between the last error and the first error.

**4:21:44** · And what do I mean by distance? We mean number of bits.

**4:21:47** · Okay?

**4:21:49** · Now, you know, number of corrupted bits, number of bits which were corrupted, depends on what? Can you guess?

**4:21:58** · Number of corrupted bits depends on what? Can you tell me or can you guess the factors?

**4:22:09** · Corruption happens due to noise. So can you guess the factors?

**4:22:14** · Absolutely correct. You have guessed it correctly for the one factor which is noise duration. What can be the other factor? Try to think. Try to think what could be the other factor. Yes. Yes, data rate. For example, let me take an example. Let's say noise happens for this much duration of time and data rate is, let's say, 1 kbps.

**4:22:47** · So, how many bits will be corrupted?

**4:22:53** · 100 bits.

**4:22:56** · K means 10 raised to power three bits per second. Second to second cancel. And then this will result into 100 bits. So, 100 bits were corrupted.

**4:23:05** · Now, by looking at this example, can you guess which error has or which error is more likely to occur? Which error has more probability? Single error or burst error?

**4:23:18** · Obviously, burst error.

**4:23:20** · Burst error is more likely to occur. Okay. Now, in the error control module, we're going to study the two aspect. The first one is error detection and the second one is error correction. You know, detection is way easier than correction. Detecting that these bits are not the bits which sender would have sent.

**4:23:47** · This is detection.

**4:23:49** · And correction means what could be possibly the correct bits instead of these bits which I received. This is what corruption correction is. Okay. So, correction is way difficult than detection. We're going to look at correction also, but detection is easier than correction.

**4:24:06** · Okay. And how do the receiver detect that these bits are not those bits which sender would have sent?

**4:24:15** · How going to receiver detecting?

**4:24:19** · So, they both happens with the concept of redundant bits.

**4:24:25** · Redundant bits.

**4:24:27** · The central concept in detecting or correcting error is redundancy. So, to be able to detect or correct the errors, we need to send some extra bits. We need to send some extra bits with the data. With the data, extra bits are sent. So, receiver going to remove those extra bits which were added by the sender. These redundant bits These redundant bits are known to both sender and the receiver.

**4:24:56** · So, if receiver notice that the redundant bits are intact no error has occurred in the redundant bits, then receiver going to assume that the remaining data would also have been correct. And if there are errors in the extra bits, then the receiver assumes that error would also have been there in the data part also. Okay, so sender added these extra bits and receiver removed those extra bits.

**4:25:23** · Okay?

**4:25:25** · Is it clear?

**4:25:28** · The detection and correction part is clear. What do we mean by detection and what is what do we mean by correction?

**4:25:35** · Correction means we are also guessing, we are also estimating what would have been the correct bits. Okay? So, in error detection, we are only looking to see if any error has occurred. The simple answer would be yes and no. If no If no error has occurred, receiver going to accept those bits. If error has occurred, receiver going to tell the sender to retransmit those bits again. Okay, let me write here. Detection is performed by receiver.

**4:26:06** · If error has occurred then retransmission happens. If no error then receiver will accept those bits.

**4:26:17** · Okay?

**4:26:19** · And for error detection single bit error is same as the burst error. Even if a single bit is changed, receiver going to ask the sender to send the whole data again. Even for a single bit error, receiver going to ask the sender to send the whole data again. Is it clear? So, for detection part, the single error and burst error mean the same. Retransmission will occur.

**4:26:43** · Okay, what about error correction?

**4:26:46** · In error correction, the problem is we need to know we need to know the exact number of bits that are corrupted. We need to know the number of bits that are corrupted and most importantly, the location of the bits. The location of bits and number of bits.

**4:27:07** · For example, if we know that the bit at fourth place has been corrupted, which means whatever we have received, if it is zero, we will change it to one. If it is one, we will change it to zero.

**4:27:18** · Okay?

**4:27:19** · So, this was the basic concept of detection and correction. Correction of error is way more difficult than detection. If we need to correct a single error in a 8-bit data unit, we need to consider eight possible error locations. Are you getting the point? For example, if we received this data, 10101010. Okay? We need to consider eight possible error locations. This could be the error location, this could be, this could be, this could be.

**4:27:50** · Eight possible error location. When we're talking about just a single bit error, we are assuming that only a single bit error can happen.

**4:27:57** · Only a single bit error can happen. And what are the What are the possible locations at which the error can happen?

**4:28:03** · There are eight possible locations.

**4:28:06** · What about a double bit error?

**4:28:10** · Double bit error. Now, we have to choose two locations out of eight.

**4:28:16** · Which means 8C2.

**4:28:18** · 8 \* 7 / 2, which means 28 possible locations this time.

**4:28:25** · What about three-bit error?

**4:28:27** · It will become 8C3. What about four-bit error? 8C4. The number of possible locations going to increase. So, for a K-bit error, in a N-bit data unit, there are NCK possibilities for error location. There are NCK possibilities. I hope you all know how to calculate this NCK. N! / K!

**4:28:57** · (N - K)!

**4:29:01** · Okay?

**4:29:02** · So, I was just giving you an idea that correction is way more difficult than detection. Now, what are the things we are going to study in error control part?

**4:29:13** · Error control, detection, and correction. In detection, we will start with simple parity, simple parity. We will learn 2D parity, 3D and 4D also. Or let's let's keep it to 2D parity only. Checksum, and then CRC. Okay? And for correction, we going to study the Hamming code method. And what Hamming code can do? This is also very simple method. We are we cannot uh just correct any number of bits. It can detect two-bit error.

**4:30:00** · It can detect two-bit error and correct single-bit error. Just one-bit error it could correct. Even for correcting one bit, you going to notice that the method is not easy. Okay? For detection, we'll start with simple parity, 2D parity, checksum, and CRC.

**4:30:20** · Okay, what happens in detection?

**4:30:22** · If error is noticed, the receiver will discard the message and will ask for retransmission. retransmission And for error correction, it has the capability to correct the error. It It do not require retransmission. No retransmission is required. And Hamming code can correct single bit error. I have written this already. One bit error can be corrected.

**4:30:51** · Okay?

**4:30:53** · Now, let's begin.

**4:30:56** · First of all, you need to learn some of the terms. First term is data word. What is data word?

**4:31:02** · Or before that, let's learn some other things. Let's learn the logic for error detection.

**4:31:13** · Okay.

**4:31:14** · In error detection, we What we do? We do block coding. block coding In block coding, we divide our message into blocks. Each of size K bits. Let's say the length of the full is N.

**4:31:30** · So, each of side K bits. And what we do?

**4:31:33** · In each block, we add redundant bits of R. In each block, it's done. R redundant bits are added. Okay? And this each block, we call it as data word. Each block is known as data word. So, in each data word, in each data word, R redundant bits are added. And this whole unit, we call it as code word.

**4:32:03** · Is it clear what we do?

**4:32:05** · We divide the message into K bits, K bits, K bits, K bits, K bits, and then in each block, which we call data word we add our redundant bits. This was data word. And the whole is code word. The whole is code word and the K bits was the data word. So, let's say instead of naming it as N, let's name it as message and let's name the length of the code word is N.

**4:32:39** · Okay, so N means K plus R, which means length of the data word plus redundant bits.

**4:32:45** · Okay?

**4:32:46** · So, in place of sending just data, we send these code word. So, data word are not transmitted. We transmit code word. These code words are what transmitted by sender. Is it clear? What we do? We divide the message into K bits. Each block is known as data word. We add our redundant bits to each data word and then now this whole block we call it as code word and these code words are transmitted.

**4:33:15** · Is it clear?

**4:33:17** · Let me take an example. So, 00 01 1011. Let's say K equals to 2. So, we're going to divide this whole message into blocks of size 2 bits. Okay? So, K equals to 2. Let's take R equals to 1 bit. So, 1 bit will be redundant. So, data word will be 00 and 1 bit redundant bit will be added. So, this will now act as code word.

**4:33:42** · What is the length of code word? N equals to 3.

**4:33:45** · Okay?

**4:33:47** · So, let's say data word is 00 01 10 and 11. These are data words.

**4:33:55** · And what will be the valid code word?

**4:33:59** · Valid code word.

**4:34:03** · We are assuming here that out of the eight possible choices because each this each position have two choices. It could be either zero or one. So, there could be total eight possible code words. Out of these eight possible code words, we are assuming that only four are valid.

**4:34:22** · Only four are valid. Which are valid?

**4:34:23** · 000, 011, or let's say 101. We can also put zero here, but we are just taking an example. 110. So, now these four are valid, and the remaining 001, 010, 100, and 111.

**4:34:42** · These are invalid.

**4:34:46** · So, now what happens?

**4:34:49** · With K bits, with K bits, which means we're talking about the data word, K bits. There can be two two raised to power K combinations. And now we have added K plus R bits, converting it to N bits. So, with N bits, we could have two raised to power N combinations. For example, here we have K equals to two. So, we had these data words.

**4:35:18** · We have these data words. So, we have four data words. And when we added one extra bits, the combination rose to eight data words. And out of these eight, four were valid, and four were invalid. The remaining four were invalid. So, two raised to power N were total. Two raised to power K were valid, so these are invalid code words.

**4:35:48** · You're getting the point?

**4:35:51** · These are valid code words. These are invalid code words. Okay? So, let me write again. Two raised to power K are valid code words. And 2 raised to power K 2 raised to power N minus 2 raised to power K are invalid codewords.

**4:36:15** · Okay? Is it clear? So, with K bits we can create combination of 2 raised to power K data words and with N bits we can create a combination of 2 raised to power N codewords and we know that only \[clears throat\] 2 raised to power K are valid codewords, so remaining are invalid codewords.

**4:36:33** · Now, how does the error detection happen with these?

**4:36:38** · The most important thing is receiver has the list of receiver has the list of valid codewords. Okay? So, the original So, when error happens, the original codewords or the valid ones are changed into invalid ones. And receiver has the list of valid codewords, so receiver going to detect that the error has occurred.

**4:37:07** · Is it clear?

**4:37:08** · So, each codeword sent to receiver may change during the transmission. If the receiver's code If the received codeword is same as that of of valid codeword, then the word is accepted. Okay? So, let's say if sent was 000 and what are the list of valid? Let's say we received also 000. And receiver checks is 000 is in the list of valid codewords. Let's say yes, then the receiver accepts.

**4:37:38** · Now, what about the case when there are multiple there are multiple bits changed. Let's say 000 was sent and we received 011.

**4:37:50** · The sender the sender has sent 000 and we received 000 011. Now, receiver checks again is in the list of valid code word?

**4:37:59** · Receivers Mhm, the list has 011. So, the receiver says, "Okay, it is in the list of valid code word, so I will accept it." Now, what happened?

**4:38:10** · The error remains undetected. If change happen in such a way that the resultant error bits are in the list of valid code word, then the receiver is not able to detect the error.

**4:38:30** · Is it clear?

**4:38:35** · Let me clarify all the scenarios again. If sender sends 000 and receiver receives 000, then receiver accept it. If receiver receives something like this, 001, then receiver rejects it because this is not in the list of valid code word. But, what happens in the case when receiver when error has occurred, but the received word still matches a valid code word list, then the error remains undetected.

**4:39:06** · Okay?

**4:39:08** · Is it clear?

**4:39:10** · Now, we're going to learn the new concept of Hamming distance.

**4:39:21** · Okay?

**4:39:22** · So, Hamming distance is the distance between two binary strings of same size, and it is the number of differences between corresponding bits.

**4:39:31** · So, let's say, if I ask you to calculate the Hamming distance between 000 and 011, then you will say the Hamming distance is two because of these two bits. Let me repeat again, what is Hamming distance?

**4:39:43** · Hamming distance is calculated between the binary strings of same size, and it is the number of differences between the corresponding bits. Corresponding bit is necessary. Okay, so Hamming distance between two binary strings is denoted by dxy. X represent the string one and Y represent the string two.

**4:40:03** · Okay, so if I ask you the Hamming distance between 100 and uh 011, then what will you say?

**4:40:12** · Three. Yes, correct.

**4:40:14** · Three will become the Hamming distance.

**4:40:15** · What about this?

**4:40:16** · d 10101 and 11110.

**4:40:21** · What is the Hamming distance?

**4:40:25** · Three again. Yes, correct.

**4:40:28** · Okay, so what is the mathematical function or how you going to calculate the Hamming distance with the help of XOR gate?

**4:40:39** · I hope you all know what is XOR gate. XOR gate is represented like this. If both inputs are zero, then it represents zero. If both input are one, it represents zero again. If both input are different, then one.

**4:40:59** · Then one. So, if inputs are same, it will result zero. If inputs are different, then the result will be one. So, if you uh to calculate the Hamming distance between, let's say the last question, 11110, then you do the XOR.

**4:41:16** · And now, 01011.

**4:41:19** · Now you calculate the number of ones here. Number of ones means that the input were different. If inputs were different, which means the corresponding bits are different. So, number of ones will represent the Hamming distance. So, we have three ones, so three will become the Hamming distance.

**4:41:36** · Hamming distance can easily be found if we apply XOR operations on the two words and count the number of ones in the result. Is it clear? XOR gate It also represented using this.

**4:41:49** · Okay?

**4:41:51** · Now, what we are interested in, we are interested in the concept of minimum Hamming distance.

**4:41:59** · Minimum Hamming distance.

**4:42:01** · It is the smallest Hamming distance between all possible pair of codewords. Smallest between all possible possible pair of codewords.

**4:42:17** · Okay?

**4:42:19** · So, let's say these are our valid codewords: 010, 101, 110, and 001. Now, what is the minimum Hamming distance between We name it as A, B, C, D. So, between A and B, the Hamming distance is three. Between A and C, the Hamming distance is one. Between A and D, Hamming distance is two. B and C, Hamming distance is two. B and D, Hamming distance is one. C and D, Hamming distance is three.

**4:42:47** · So, one is the minimum Hamming distance. And we have to check for each and every combination. We check first for A and B, then A and C, and then A and D, and then B and C, B and D, and then C and D.

**4:43:03** · Is it clear?

**4:43:06** · Anyone have any doubt till now?

**4:43:14** · Okay? So, why we have learned about the Hamming distance?

**4:43:18** · Because of its uses in error detection and correction also. See here. Let's say if I sent if the sender has sent 010 and the receiver received 110, this is a valid codeword. Error has occurred, but the received codeword matches in the list of valid codeword, so I'm going to say that the receiver won't be able to detect the error. What about this? 010 and it receives 011.

**4:43:50** · Now, this is not in the list of valid codeword. This is invalid codeword. Receiver going to detect it.

**4:43:58** · Detected.

**4:44:00** · These were all one bit error. One bit error, one bit error. Okay? \[clears throat\] Now, all one bit error cannot be detected. All one bit error cannot be detected. Because the minimum Hamming distance was one here. The minimum Hamming distance was one. So, I'll say all one bit error cannot be detected. Okay. Now, let's calculate Hamming distance for another set. 000, 011, 101, 110. The minimum Hamming distance here is two. Now, let's check again.

**4:44:37** · Sender sends 000.

**4:44:38** · Receiver received 100.

**4:44:42** · What is the bit error? Single bit error. Now, this 100 is not in the list of valid codeword. So, I'm going to say receiver has detected the error. Receiver has detected. So, either it received 100 or it received 010 or it received 001. Whatever case you take, receiver going to detect it every single time. Why? Because this time Hamming distance is two among the valid codewords. Initially, the Hamming distance we have taken was just one.

**4:45:12** · So, with just one Hamming distance, one bit error was not detected every time because the received codewords were still getting matched to the valid codeword list. Now, we have changed valid codeword list and we set the Hamming distance equals to two. In that case, every possible one bit error is getting detected. Let's check again for another set. For example, 011. One bit error can be 111 or 001 or 010.

**4:45:42** · None of them is still getting matched in the set of valid code words. How it can get matched? Because here the minimum corresponding change in bits between two valid code word is two. And here the error is just single bit. So, by changing just a single bit you cannot transform this valid code word into some another valid code word. You have to at least change two bits.

**4:46:09** · This was Hamming distance representing that to transform one code valid code word into another valid code word the minimum number of bits you have to change is two. So, when a single bit error occurs none of them get transformed into another valid code word.

**4:46:28** · And this is how receiver detects the error every single time. Is it clear?

**4:46:36** · You can take other cases also. The concept remains same. 001, \[clears throat\] 111, 100. None of them is still getting matched so receiver going to detect it easily that the code word which he is receiving is not in the valid code word list so error has occurred. So, all one bit error all one bit error are getting detected when Hamming distance is two.

**4:47:04** · Two bit error. So, a valid code word when the Hamming distance was two, which means we require two bits to change for valid code word to convert into another valid code word. And if one bit error has occurred it will be invalid code word and receiver can easily detect. And if another bit error has occurred, it can transform into another valid code word and receiver won't be able to detect.

**4:47:31** · What about three bit? If Hamming distance was three-bit, then what?

**4:47:37** · Then again, two-bit error will be still an invalid code word. And a three-bit error can transform a valid code word into another valid code word. So, if Hamming distance is D, which means till D minus one bit errors, receiver can detect. Let me repeat again. Hamming distance means that you require those many bits to convert a valid code word into another valid code word.

**4:48:06** · Even if it is a one bit lesser than the required, the valid code word will remain invalid and receiver going to detect.

**4:48:16** · So, if the Hamming distance is D, till D minus one bit error, it will still result into invalid code word and receiver can easily detect that this received code word is not matching in the list of valid code words, so I'm going to say to the sender that whatever data you have said sent, it is not what I've received, so you have to retransmit again. It will detect the error.

**4:48:40** · Okay? If the Hamming distance is D, till D minus one bit error, it will be detected. And you can say like this also, if we want to detect K bit error, you require K plus one Hamming distance.

**4:48:52** · Is it clear?

**4:48:54** · Okay. So, till now we were talking about detection.

**4:48:58** · What What about correction?

**4:49:01** · If you want to correct K bit error, you require 2K plus one Hamming distance. This is for correction. So, you have to remember these two formulas, that for detection, K plus one Hamming distance is needed, and for correction, 2K plus one is needed. To correct one bit error, you need three Hamming distance. To correct five To correct two bit error, you require five as Hamming distance. Five-bit Hamming distance is required.

**4:49:31** · To correct K-bit error, 2K + 1 Hamming distance is required.

**4:49:36** · Is it clear?

**4:49:38** · Okay.

**4:49:39** · Okay. Now, let's move toward the new concept of simple parity check.

**4:49:45** · Simple parity.

**4:49:48** · What do we do in simple parity?

**4:49:50** · One extra bit, which is known as parity bit, is added to each data word. So, we used to divide the message into KK bits. We call them as data word, and we added our redundant bits. So, here R equals to 1, and we call this bit as parity bit.

**4:50:10** · Okay?

**4:50:11** · Simple parity can detect all single bit error. All single bit error can be detected. They can be detected. And they cannot detect even bit errors. Even number of errors. Can detect all odd number of errors. So, I can just write it like this. Even number of errors are not detected, while odd number of errors are detected. While it is a guarantee that all single bit error will be detected.

**4:50:48** · So, what do we do? Let's first understand the concept of even parity and odd parity. Even parity, odd parity. Even parity means number of ones, including the parity bit, should be even. Number of one, including the parity bit, should be even. Which means number of one, if number of one, excluding the parity bits, are even already, then we set parity bit to zero.

**4:51:20** · If number of parity If number of ones excluding the parity bits are odd, then we set parity bit to one so that by adding this one the number of ones will be even. Let me explain. So let's say if there are three ones, then I'll set parity bit to one.

**4:51:38** · So including the parity bit now it will have four ones. But if it already has if it already has let's say four ones, then I'll set parity bit to zero so that the total number of one still remain even. The same case happens with odd parity. This time if the number of ones are odd, then we set parity bit to zero.

**4:52:06** · Let's say there are three ones, then we're going to set parity bit to zero so that number of ones remain odd. Let me tell again. Excluding the parity bit check if the number of ones are even or odd. If we are talking about even parity and number of ones are already even, then you set parity bit to zero.

**4:52:25** · If the number one were not even, then you set parity bit to one so that including the parity bit numbers become even. While in the case of odd parity, if the number of ones are odd, then you set parity bit to zero. If the number of ones are even, then you set parity bit to one so that including that parity bit number of ones become odd.

**4:52:45** · Is it clear?

**4:52:48** · Okay.

**4:52:50** · Okay. So I have mentioned already this that even number of errors are not detected while odd number of errors are detected.

**4:53:00** · Okay?

**4:53:02** · Let's see an example. For example, data word is 00011011, the same previous one, and we are dividing it again into two parts. Oh, dividing it down again into parts where k equals to two into several parts. Now r equals to one and we call this as parity bit.

**4:53:21** · So, 0 0, 0 1, 1 0, and 1 1. And parity bit will be added. Let's say and the valid code word remains 0 0 0, 0 1 1, and then 1 0 1, and then 1 1 1 0.

**4:53:36** · How these bits are added?

**4:53:38** · So, that number of ones remain even. We are talking about, let's say, even parity. These are data word and this is code word. Here, the number of ones is even. Here, the number of ones is even. Again, even and then again, even including the parity bit. You have to make sure that you do not exclude the parity bit while counting ones for even or odd. You have to include the parity bit also.

**4:54:06** · Is it clear? So, now this is like change 0 0 0. Let's say this is sent and what a receiver received 1 0 0. Okay? So, the number of ones are now odd. While the receiver know that the sender and receiver have already talked upon that we are going to use even parity. And if we receive number of ones as odd, which means error has occurred, which means receiver will ask the sender to retransmit.

**4:54:39** · What about this 0 0 0 and then 1 1 0?

**4:54:42** · This was one bit error and this was two bit error. Number of ones are even. Number of ones are even. So, receiver cannot detect two bit error now because this is included in the list of valid code word or you can even directly say that if the number of ones are even and they have already agreed upon the even parity, so receiver won't be able to detect two bit error.

**4:55:07** · Is it clear? What about three bit error?

**4:55:10** · 0 0 0 and then 1 1 1. Number of ones are odd again, so I'm going to say receiver can detect the 3-bit error. So, as I have said that odd number of errors will be detected and even won't be detected when we are using even parity. So, this is the case for even parity.

**4:55:33** · It's clear?

**4:55:38** · So, when even is changed to odd or odd is changed to even then detection happens. Now, you know \[clears throat\] this is not for just even parity, but this is valid for even and odd parity both. Why? Because even to odd and odd to even, in this case detection happens and this only happens when there are odd number of changes.

**4:56:12** · If you have even number of changes then what will happen? Even will remain even and odd will remain odd. In that case, error gets undetected. That's why I have written here that in simple parity even number of errors remains undetected while odd number of errors get detected. Why? Because odd number of errors change even to odd and then receiver can detect.

**4:56:42** · And odd to even receiver can detect. But what about the case when even number of changes happen?

**4:56:48** · Even remains even and odd remains odd. Whatever be the parity receiver won't be able to detect.

**4:56:56** · Is it clear how simple parity works?

**4:56:59** · Works. It will detect any single-bit error. And regarding odd number of errors, it will detect any odd number of errors, but for even number of errors, it won't be able to detect. For example, two-bit error were not detected, while one and three-bit error were detected.

**4:57:14** · Is it clear?

**4:57:18** · Okay. Now, let's learn about 2D parity.

**4:57:26** · 2D parity.

**4:57:29** · Okay?

**4:57:30** · In 2D parity, what we do or let me tell you the features first. Two-dimensional parity check can detect and correct all single bit error. It can detect and correct also. All single bit error. Single bit error. And what about the errors greater than one bit? So, it can detect it can just detect two-bit and three-bit errors also.

**4:57:57** · And what about four-bit? Sometime it may detect and sometime it may not, but for surety, you can say it will detect two-bit and three-bit error, while it will detect and correct also single bit error.

**4:58:11** · Okay?

**4:58:12** · For four-bit, only some pattern with four or more error can be detected, but for two and three-bit, you can be sure it will be detected. Now, what happens \[clears throat\] in 2D parity? You know, 2D means two-dimensional. So, it's it's sure we will talk about matrix. So, what happens? In 2D parity check code, the information bits are organized in a matrix in rows and column format.

**4:58:42** · For each row and each column, one parity check bit is calculated. How does that happen? Let's see with the help of an example. Suppose we have an original data of this. 010010 010101 100101 Okay, let's take more. 1 1 1 0 1 1 0 0 1 0 0 1. Okay, and now let's say we are dividing into let's say k equals to 6.

**4:59:12** · So, 1 2 3 4 5 6 1 2 3 4 5 6 1 2 3 4 1 2 3 4 5 6 1 2 3 4 5 6 and these parts. So, we have divided into like this. And this will become the first row. This will become the second row. This will become the third row. Fourth row and fifth row.

**4:59:31** · So, I'll arrange like this. 0 1 0 0 1 0 and then the next 0 1 0 1 0 1 and the next 1 0 0 1 0 1 and the next 1 1 1 0 1 1 and the next 0 0 1 0 0 1.

**4:59:53** · Is it clear?

**4:59:56** · So, these will be number of rows. So, number of rows are five number of rows. 1 2 3 4 5. Now, what happens? We are going to calculate the parity. For we will add another row and another column. So, let's take even parity. We will consider even parity.

**5:00:19** · So, these are already even. This is already even. So, 0 will be here. This is odd, so 1 will come here. This is odd again, so 1 will come here. This is 1 2 3 4 5 odd again, so 1 will come here. This is even, so 0 will come. Is it clear? Now, this.

**5:00:39** · Already even, so 0 will come here. And then the second odd, so 1 will come here. 1 1, which means already even, 0 will come here. 0 will come here. 0 will come here. And then already 0 will come here. And then in the end 1 2 3, so 4.

**5:00:56** · Are you getting the point how I'm calculating?

**5:00:58** · See, let's let me explain you first one. Let me explain this case. So, one two three. There are already three ones, which means it is odd. And including the parity bit, which is this one, we have to make it even. So, I have to add one more one so that three one and four one three one and one one count to four ones, which is even. That's why I've written one here.

**5:01:30** · Why I've written one here? Because one two three and this is one again, so it will count to four. That's why we have taken one here. I hope how to calculate parity you know. Let me take some other example. 1 1 1 0 1. Now, tell me what will come here if I'm talking about odd parity.

**5:01:56** · One.

**5:01:57** · Why one? 1 2 3 4 and including the parity bit, it will become five, which is an odd number. What about even parity? If I have taken even parity, then what would be the case? Then 1 2 3 4.

**5:02:11** · Now, it will come zero. Why?

**5:02:15** · For even parity, these four ones are already in even number. That's why it will come zero here. I hope the point is clear how to calculate the parity. Now, let's see how we are going to check for the changes. Let me rename it. This This will be the row parity. And this will become the column parity. Okay. Now, this will become the first row.

**5:02:51** · First row to be transmitted. You know, this will become the data word. Not not data word, this will become the code word. Till here it was data word. And the last bit is a parity bit, so it will act as a code word now. This will become the second row to be transmitted. This will become the third row to be transmitted. So, in this manner transmission will happen.

**5:03:17** · Is it clear?

**5:03:18** · Now, let's talk about the one bit error. Let's talk about the one bit error. Let's say this one get changed to zero.

**5:03:29** · This one get changed to zero. Now, what will happen?

**5:03:32** · Parity bits will be calculated at the receiver end. So, this will remain same.

**5:03:38** · This will remain same. This will remain same. Now, what about this?

**5:03:42** · One one one one. It's already even, so it should have been zero here. So, receiver will notice that there is some error here in this row.

**5:03:53** · Is it clear?

**5:03:55** · Receiver going to notice that there is some error in this row.

**5:03:59** · Okay.

**5:04:00** · Now, what about this? This will remain zero. Now, now what about this?

**5:04:07** · It will also calculate the column parity. This will remain zero. What about this? One one.

**5:04:12** · It's already even.

**5:04:15** · Why it is one here? Receiver going to notice. So, receiver will check there is some error in this column also. So, wherever they intersect, they going to intersect here. Wherever they intersect, that bit will be the corrupted bit. So, receiver know if it has received zero, which means the original bit would have been one. So, in this manner correction happens.

**5:04:45** · Is it clear? Let me explain again. So, what happens? We were given with a original message. This was our original message. We divided the message with k equals to six. Okay? So, this became our data word, data word, data word, data word, data word. We arranged them into rows fashion. In row major order, we arranged them into row major order. And then we calculated the row parity and the column parity.

**5:05:10** · And then this became the row to be transmitted. The second row to be transmitted. The third row to be transmitted. And what receiver did? So, receiver let let me show you what type of message does receiver received. Receiver received like this: 0 1 0 0 1 0 0. 0 0 1 0 0 1 0 0.

**5:05:30** · Receiver received message like this and then 0 1 0 1 0 1 1. And then 1 0 0 1 0 1 1. Like this. This will be the third row which receiver has received. Now, receiver knows that k equals to six. So, it will automatically bifurcate like this. Okay? And what will receiver do now? It will rearrange: 0 1 0 0 1 0 0. 0 1 0 1 0 1 1.

**5:05:57** · And it will assume that these must be the row parity bits. And similarly in the end, it will assume the last one should be the column parity bits. And it will recalculate the row parity bits and column parity bits. And wherever it sees an error, it set up a mark. Let's say the mark came here and here.

**5:06:17** · Okay? These two parity bits were, let's say, different than what receiver calculated. So, receiver will assume that error would have happened in this row and this column. And wherever the intersection will be, receiver assumes that that bit must be corrupted.

**5:06:35** · Is it clear?

**5:06:38** · Okay. Okay now. So, this This the concept of one bit error detection and correction in 2D parity.

**5:06:50** · Now, what about two bit error? What will happen in the case of two bit error?

**5:06:57** · It will form something like this. It will form something like this. Here, it was just like this. In the one in the case of one bit error, receiver clearly know where the intersection is, so it can detect easily and correct also. But here, when there will be two bit error, when there will be two bit error, four of the parity bits will be affected. Two from the row and two from the columns.

**5:07:25** · And now receiver do not know which bit is corrupted because there are now four intersections. And out of those four intersection, only two bits two bits were corrupted. Now receiver do not know which two bits are corrupted, so it will not try to correct it. It will just ask the receiver ask the sender to retransmit it. Receiver going to ask the sender to retransmit it.

**5:07:50** · Are you getting the point why it is not able to correct in the case of two bit error? Let me repeat again. In the case of one bit error, a single parity bit from the row side and a single parity bit from the column side will be affected. So, receiver going to mark those rows and columns.

**5:08:07** · And wherever they intersect, wherever they intersect, receiver knows that this is a single bit This is a single bit that need to be altered or changed for correction. Now in the case of two bit error, in the case of two bit error, two bits from the row side and two bits from the column parity side will be affected. So, receiver going to mark two rows and two columns.

**5:08:35** · And these two rows and two columns going to form four intersection. This one, this one, this one, and this one.

**5:08:43** · And with these four intersection, a receiver have to select two bits which were corrupted. And this one cannot do that because there are six possibilities, 4C2. There are six possibilities receiver cannot pinpoint which two bits were corrupted. So, receiver is not going to trying to correct them. It will just ask the sender that I have received corrupted bits, so you have to retransmit the data, and the sender will retransmit.

**5:09:10** · That's why it can only detect two-bit error. Correction doesn't happen. No correction.

**5:09:23** · Is it clear?

**5:09:24** · So, two-bit error can maximally affect four parity bits. And minimally affect two parity bits.

**5:09:34** · How?

**5:09:35** · How this case?

**5:09:36** · When when error happens like this. That in a single row, two bits were changed. In a single row, two bits were changed, so one parity bits will be changed from here. And two column parity bits will be changed. Okay? So, in that case, in this case, correction can also happen, but it is not guaranteed that the error will happen in a single row only.

**5:10:09** · For generally, we say that for two-bit error, only detection happens and no correction. Two-bit error can maximally affect four four parity bits when the error happens in two different rows. So, when error will happen in two different rows, the honking culture in India is really really bad.

**5:10:27** · \[sighs and snorts\] Ah, \[gasps\] what can we do?

**5:10:29** · So, and I forgot what I was speaking. Yeah. So, in a two-bit error, in two-bit error, the maximal parity bits that can be affected could be four parity bits when the error happens in two different rows. So, when error happen in two different rows, two row parity bit will be affected and two column parity bit will be affected. When in while in this case, error happen in a single row.

**5:10:55** · So, these three These bits will be affected now. Here I've written two bits, but I've made three boxes. What does it mean? Let's say this was zero and this was one. Now, it is changed to one and zero. This parity bit won't be affected. This parity bit won't be affected because number of ones remain the same. So, this won't be counted. Just two column parity bits.

**5:11:23** · Is it clear?

**5:11:26** · Okay. So, with two two-bit maximally can cause four parity bits to change and two minimally.

**5:11:33** · Maximum and minimum. What about three-bit?

**5:11:38** · Maximum six bits.

**5:11:40** · Six parity bits can can be affected and minimum again two parity bits can be affected. What will be the minimum case?

**5:11:47** · The minimum case will be like this. Okay. These are changed. So, this bit won't be affected.

**5:12:00** · This bit will be affected or not?

**5:12:05** · This won't be affected. So, this one and this one. These two parity bits will be changed. That's why even with three bits, the minimum number of bits parity bits that will be affected will be two. Is it clear? So, let me make a table again.

**5:12:26** · With two bits two-bit of error the maximum parity bit and the minimum parity bit that will be affected will be four and two. With three bits, the maximum parity bit that will be affected will be six and the minimum will be still two.

**5:12:41** · Okay?

**5:12:42** · Now, what is the disadvantage of 2D parity that you can directly look at?

**5:12:47** · Can someone guess? What is the disadvantage of 2D parity? Or I can speak like this, in what case the method of 2D parity fails?

**5:13:01** · Absolutely correct. When these parity bits are affected. If some error occur in parity bits, then this is going to not going to work.

**5:13:12** · Is it clear?

**5:13:15** · The concept of simple parity and 2D parity, is it clear or not?

**5:13:20** · If anyone have any doubt, you can ask me now.

**5:13:25** · In simple parity, it was we are just matching that even remains even or even changes into odd. If if the number of ones remain same then the error goes undetected. If the number of one changed, including the parity bit, then we will detect the error. While in case of 2D parity, we divide the message into equal parts, arrange it into rows and columns, check for the row parity and column parity, and we will send this whole row.

**5:13:55** · Receiver going to rearrange this this type of message into matrix again, will calculate the row and column parity again, and we will and receiver going to check if there is a kind of intersection forming. If yes, if it found the mismatch between the calculated parity and the received parity, receiver going to ask the sender to retransmit again. So, this is how detection and correction happens in 2D parity.

**5:14:22** · Is it clear?

**5:14:24** · Okay then, in the next lecture we'll begin with CRC. Let's learn about cyclic codes. In the previous lecture we have studied about linear block codes. In this a valid code word XOR with valid code word will result into valid code word. What about cyclic codes? They are a special type of linear block code in which cyclically shifting a bit will result into another valid code word.

**5:14:59** · Valid code word cyclically shifted will result into another valid code word. For example, if it is written something like this C1 C2 C3 till CN CN C1 C2 C3 till CN-1 This is valid code word. This will also be a valid code word. What about this? CN-1 CN C1 C2 CN-2 This is also a valid code word.

**5:15:31** · Okay?

**5:15:33** · You know the difference between the linear block code and cyclic code?

**5:15:38** · Is it clear?

**5:15:39** · Okay now. So, today we'll move toward CRC.

**5:15:44** · Cyclic redundancy check.

**5:15:48** · Now, what will happen let me tell you with the help of a flowchart. So, this is sender. This is a receiver.

**5:15:58** · Sender have data.

**5:16:01** · And something called divisor. This divisor is common between sender and receiver. They both know what divisor will be. Whatever be the length of divisor, let's say K is the length of divisor. K-1 zeros will be appended. They are not added, they are appended.

**5:16:17** · You know the difference between adding and appending?

**5:16:21** · 1010 Adding zeros is like something like this. 1010 And appending zeros is like this. Okay? So, we are appending zeros. And now this will be sent to divisor for modulo two division. Now what will happen? Divisor will give us the remainder. We call that as CRC. Now these zeros are then replaced by CRC. So, we will have data and the CRC. This will become our code word. And this will be transmitted.

**5:17:01** · This will be transmitted to receiver. Now receiver have data and the CRC. And it also has the access to divisor. So, it will send this to divisor. And divisor will calculate the remainder by performing the same modulo two division. And then the remainder will be checked.

**5:17:24** · Is it zero?

**5:17:26** · Or it is non-zero?

**5:17:28** · If it is zero, then the data will be accepted. And if it is non-zero, which means corruption has happened. Receiver has detected the error and it will ask for retransmission.

**5:17:45** · Is it clear?

**5:17:46** · Let me repeat again. So, let's let's understand with the help of an example. Let's say we have a data 1001001 and we have CRC generator. We call it as divisor also as 1101. So, you know what is K? K equals to four. So, we have to append K minus one zeros to data.

**5:18:15** · So, our new divisor will or the dividend will be dividend will be 1001001 and then K minus one zeros, which means three zeros will be appended here. We know the divisor already. Divisor is 1101. So, we have to perform modulo two division. Let's see how does that happen. 1001 001 and then three zeros.

**5:18:41** · 1101 Now, in modulo two division, what we do?

**5:18:45** · We use XOR instead of subtraction. So, this will come here 1101. One and one, zero. When the inputs are same, it will output zero. When the inputs are different, it will output one. In this case, input are different, so it will output one. And then here zero, zero. And then this will be copied here as it is. 001000.

**5:19:12** · Is it clear?

**5:19:17** · Do anyone have any doubt till now? You can ask.

**5:19:21** · Now, what will happen?

**5:19:22** · This first zero will be ignored and then this will come here again. 1101 zero one zero This is one. 01000 Till now, is it clear?

**5:19:39** · Okay. Then, we will repeat the same process. 1101 zero and then one one one one and then three zeros. Okay, then again 1101 0010000 And then 1101 zero one zero one zero and then one one zero zero it will output 0 1 1. This is 1100. Oh yeah, this is 1101. So, it will also output 1. Now, we have 111 as the CRC. Now, this will be replacing these three bits.

**5:20:28** · So, these instead of 000, it will be 111. Now, what will be this part? Data and then CRC, this will become 1001001 and then 111. This is now our code word. This will be transmitted to the receiver. And then receiver will perform the same modulo 2 division. Let's do that. So, we have this \[clears throat\] Okay, we can do it here also only. 111 and then Let me erase all this part.

**5:21:14** · That's all now.

**5:21:20** · Okay.

**5:21:21** · So, 0 1 0 0 and then this will be copied here 001111. And then 11101 0 1 0 1 and then 0. 1111 1101 0 1 1 1 and then 1 2 3 4 1s. 1101 0 0 1 0 111 1 1101 This will 0 1 1 0 1 1101 and this will be 0000. This time, remainder is what? It's zero, which means no error accepted.

**5:22:12** · Is it clear? We have seen this case till now.

**5:22:16** · What about the case of error?

**5:22:18** · What about the case of error?

**5:22:22** · Let's say this bit Let's say this bit has been changed. Receiver has received this.

**5:22:31** · Now, what will happen?

**5:22:33** · The receiver will calculate this at at its part and then we will see that the remainder this time is not zero. Which means receiver will assume that corruption would have happened somewhere in between and receiver will ask for retransmission. Let's solve this again.

**5:22:55** · 0 1 1 0 00111 1. This will copied here as it is. Okay, then. 1101 00 0 and then 1 011 1101. This is zero again. This is one, this is one, this is zero. And these two will be copied here. So, 11 will come. 1101 0000 and then 1. This is not zero. Which means error has occurred. Retransmission will be asked.

**5:23:36** · Is it clear now?

**5:23:39** · Okay. Now, the same happens in the polynomial notation also. Let's see the polynomial notation. Polynomial notation in CRC.

**5:23:55** · We call data word as DX and then code word as CX and then let's say generator or divisor as GX and syndrome What is syndrome?

**5:24:14** · This is syndrome.

**5:24:20** · And error as EX.

**5:24:24** · Okay? So, what we will do? How we will apply CRC in polynomial notation?

**5:24:31** · Wait a minute. Let's solve here now. We have to first determine the degree of GX. What was the first step in in this binary notation? We saw that what was the length of the divisor. If the length was four, we added K minus one zeros. If the length was K, we added K minus one zeros. Same thing we will replicate here. We have to first access the degree of this polynomial. Degree of generator or divisor.

**5:25:00** · Let's say the degree is R. Okay? Now, we will determine We will determine what? X raised to power R DX is. This is what appending is. Appending of zeros. Okay? Then we will calculate this X raised to power R DX and then GX. And whatever be the remainder, let's say CRC. And then we What will be the code word? Code word will be X raised to power R DX plus remainder. This will become the code word.

**5:25:40** · Is it clear?

**5:25:43** · Okay? You do not forget this step. This is important. This is like appending of zeros. Now, let's solve a question. Let me take a new page.

**5:25:56** · Yeah.

**5:25:58** · Let's say data word is 1001001. Let's say Let's take the same data word. We'll convert this into polynomial. This is x raised to power 0, x raised to power 1, x raised to power 2, x raised to power 3, 4, 5, 6. So, this will be x raised to power 6 plus x raised to power 3 plus x raised to power 1. This is our data word.

**5:26:25** · And what was our generator or divisor?

**5:26:28** · Generator was 1101. This is x raised to power 0, x raised to power 1, x raised to power 2, and x raised to power 3. So, our generator is x raised to power 3, x raised to power 2, plus 1. This is our generator, and this is our data word. Now, what is the degree of this generator? The degree is 3. So, r equals to 3. Now, we have to calculate the code word.

**5:26:52** · What is code word? x raised to power 3 into data word. What is data word? x raised to power 6 and this. So, this will be x raised to power 9, x raised to power 6 plus x raised to power 4.

**5:27:07** · Is it clear?

**5:27:10** · Yeah. Yeah. Yeah. You are correct. I made a mistake here. So, this here should be 1. Because the coefficient of x raised to power 0 is 1. So, it will One will come here. Here will One will come.

**5:27:23** · Yes. Yes.

**5:27:24** · You have spot correctly.

**5:27:26** · Uh okay.

**5:27:28** · So, this was our code word. Now, we will have to calculate the CRC.

**5:27:33** · x raised to power 9, x raised to power 6, and then x raised to power 3. What was our generator?

**5:27:39** · x raised to power 3 plus x squared plus 1. We have to calculate here again.

**5:27:46** · How are we going to do?

**5:27:52** · We have to cancel this x raised to power 9. So, we the quotient will be x raised to power 6. x raised to power 9 x raised to power 8 and x raised to power 6. We multiply this two this and then we put it here. x raised to power 9 is gone. Then we have x raised to power 8, x raised to power 6. This is also gone.

**5:28:15** · So, we'll have x raised to power 8 and x raised to power 3.

**5:28:18** · That's it.

**5:28:20** · Now, we have to create x raised to power 8. So, it will be x raised to power 5. Now, it will come x raised to power 8. x raised to power 7 and then x raised to power 5. Okay? This will be gone. We have x raised to power 7, x raised to power 5 and then x raised to power 3.

**5:28:38** · Now, we have to create x raised to power 4 so that x raised to power 7 get cancelled. This is cancelled. And then we'll have x raised to power 6, x raised to power 4. This is gone. x raised to power 6 5 4 and then 3.

**5:28:55** · Then we'll have x raised to power 3. So, we'll have now x raised to power What was that?

**5:29:01** · 6 5 and x raised to power 3. This is gone, this is gone and this is gone. We'll have x raised to power 4 in the end. So, now this time here we'll have just x. So, x raised to power 4 x raised to power 4 plus x raised to power 3 plus x. This is gone. x raised to power 3 plus x. Then just one here.

**5:29:37** · Then we'll have x raised to power 3 and then x plus 1. Now, x raised to the power 3 is gone. We'll have x squared plus x plus 1.

**5:29:49** · This is what CRC is. Now, this will be added to our divisor. What was our divisor?

**5:29:57** · Not divisor, but the code word. What was our code word? x raised to the power 9, x raised to the power 6 and then x raised to the power 3. This will be added here. So, we'll have x squared plus x plus 1. This is our final code word. This will be transmitted. And receiver receives this. And what receiver going to do? The same thing.

**5:30:25** · x raised to the power 9, x raised to the power 6 3 and then we'll divide it with the same divisor. What was that?

**5:30:33** · x cubed plus x squared plus 1. x cubed plus x squared plus 1.

**5:30:41** · Okay, let's divide.

**5:30:43** · x raised to the power 6, so 9 8 x raised to the power 6. This is gone. We'll have x raised to the power 8. This is also gone. x raised to the power 3.

**5:30:55** · And this.

**5:30:57** · We require x raised to the power 5. x raised to the power 8 and then x raised to the power 7, x raised to the power 5. This is gone. We have x raised to the power 7. x raised to the power 5, x cubed, x squared, x and then 1. And then we require x raised to the power 4.

**5:31:18** · So, x raised to the power 7 x raised to the power 6 and then x raised to the power 4. Now, 5 4 3 2 1 and 0. Then \[cough and clears throat\] we'll require x raised to power 3. x raised to power 6 plus x raised to power 5 plus x raised to power 3.

**5:31:52** · This is gone, this is gone, this is gone. We'll have x 4, x squared plus x plus 1. Then we'll have x. x raised to power 4, x cubed and then x.

**5:32:06** · This is gone.

**5:32:09** · And then we'll have x cubed, x squared, x and then 1. And then we'll have 1. x cubed x squared and then 1. Then we'll have x. We made some mistake somewhere. x should have been cancelled. Here, here, here. x was cancelled here. So, this is just 1. So, we'll have 0 in the end. All of them will be cancelled. So, it \[clears throat\] receives 0, which means accepted.

**5:32:45** · \[sighs\] So, by the time you may have guessed that doing like this in a polynomial notation is lengthier and the chances of cell mistake are also more. So, what is the recommended method? You convert it into code word. So, not code word into binary. So, this will be 1 0 0 1 0 0 1 and then 1 1 1. Now, you can do it very easily.

**5:33:13** · In \[clears throat\] the end you will receive syndrome as 0. This is what syndrome was. Syndrome is 0.

**5:33:20** · Is it clear how CRC works?

**5:33:23** · You have to remember this.

**5:33:25** · Where that was.

**5:33:28** · You have to remember that flowchart which I made, it's lost somewhere. Let me find it.

**5:33:40** · Here it is.

**5:33:42** · \[clears throat\] You have to remember this flowchart, that in the beginning, you would have data and a divisor, which is shared among both sender and receiver. So, sender and receiver both have this divisor. And then, by looking at the size of divisor, you're going to append one lesser zero. So, if the size is K, you're going to append 6 - K 6 - K - 1 zeros.

**5:34:09** · And then, divide this with the help of divisor, performing modulo 2 division, you will get the CRC. Append that CRC in place of those K - 1 zeros. And then, you'll have your code word.

**5:34:21** · This code word will be transmitted to the receiver. Receiver going to perform the same thing, modulo 2 division with the same divisor, and it will receive remainder. If the remainder is zero, which means it has accepted. If the remainder is non-zero, it will ask for retransmission. Receiver will assume that error have happened somewhere.

**5:34:43** · Are you understanding the main theme or the main idea behind this concept?

**5:34:48** · How people have think of that?

**5:34:50** · For example, let's say if you \[clears throat\] divide 18 with four, what you will get?

**5:34:57** · You'll get four fours are 16, and you'll receive two. Now, this two is the remainder. If you are adding this two again at the dividend, what will happen? This will become 20. And now, when you are going to divide again, you will receive remainder as zero. This is what we are doing here.

**5:35:15** · We received some remainder, and then we added that remainder back to the dividend, and then we are dividing the dividend again with the same divisor, and this time now we are receiving remainder as zero. Look here. We started with some We started with some dividend, divided it, received some remainder, added it back, and then divided again with the same divisor, we received the remainder as zero.

**5:35:40** · This process will work perfectly until some error happens. What error that could happen? Instead of 18, it became let's say 19. Now, when two will be added, it will become 21, and you will receive some remainder. So, by this, I can assume that if there is some remainder even after adding that two to the dividend again, there is some remainder, which means error has been there.

**5:36:09** · Okay? So, this was the concept of CRC. I hope it is clear. We have seen both of them, the binomial notation and polynomial notation. Now, let's look at the last method for error detection, which is checksum.

**5:36:26** · What we do in checksum?

**5:36:27** · We break the original message into K number of blocks with N bits in each block. Let's say this was the original message. We break it in K number of blocks with N message N bits in each block. There are K blocks.

**5:36:42** · Okay?

**5:36:43** · Now, what we do?

**5:36:45** · We do the sum of all K data blocks. We do the sum of all K data blocks. And we add the carry to the sum. If there is any carry, so I can write if any. So, if there is any carry, for example, you added and there is some carry, you're going to add this carry back to the sum here again.

**5:37:11** · Okay?

**5:37:13** · And now, of this sum, what you have to do, you have to take complement. Which complement? One's complement. What do we do in one's complement? We just invert all the bits. So, if we have 1010, the one's complement will be 0101. So, we are inverting all the bits.

**5:37:33** · Is it clear?

**5:37:38** · What we are doing here?

**5:37:40** · We will have a message. We'll divide it into key blocks. We'll take the sum. And if there is a carry, we're going to add that back to the sum. And whatever be the resultant, we want to take one's complement.

**5:37:51** · Till now, are the steps clear?

**5:37:53** · Yes. Okay.

**5:37:55** · So, after this complement, whatever be the number, we call it as checksum.

**5:38:01** · Okay?

**5:38:03** · So, can you guess what we are planning to do here?

**5:38:06** · What we are planning is of all these blocks, we're going to take a sum. And of this sum, one's complement means implementing or insisting a negative sign. So, let's say if the sum is 44, then one's complement means we are sending minus 44 with this. Now, what receiver going to do? Receiver going to take the sum again, including the checksum block also. So, block one, block two, block three, these were the data blocks.

**5:38:38** · Now, receiver will also add the checksum block. Let's say the sum of these are 44, as we have calculated before, and then receiver going to add the minus 44 block also. And in the end, in the end, what will happen? Let's say 0000 will come. But as you know, the steps will be same for both. It will also take one's complement of zero. So, it will receive 111111 all.

**5:39:06** · So, if the result is all ones, then we are going to accept, otherwise reject.

**5:39:11** · Did you get it?

**5:39:13** · Let me repeat again. We had a message. We divided it the message into blocks. Let's say this is block one, block two, block three, block four, and block five. We take the sum of all the blocks. And then whatever be the number, let's say the number was 44.

**5:39:29** · So what we're going to do, we're going to implement a minus sign to in front of 44. So this will become minus 44. How did we do that? With the help of one's complement. Now we're going to attach another block, we named it as block six, and we will add minus 44 here. Now this whole will be sent to the receiver. Receiver going to look at it and will divide in the same fashion. B1, B2, B3, B4, B5, and B6 also. Receiver going to do the same.

**5:40:01** · One to six. And then it will receive zero.

**5:40:04** · And you know the process will remain same for both sender and receiver. So what receiver will do, it will also do the one's complement. Now what is the one's complement of zero?

**5:40:12** · One.

**5:40:14** · One one one one one. So zero zero zero zero zero, the one's complement will be one one one. If it is all one, which means the result was zero. Which means error has not occurred, so it will accept. Otherwise, it will reject.

**5:40:30** · Is it clear?

**5:40:31** · What you are planning to do here in checksum? Okay. So the Why we do checksum? Because checksum detects all error involving odd number of bits. All odd number bits error are there. It detects most error involving even number of bits. All odd error and most of the even error are detected.

**5:40:50** · If one or bits of a segment are damaged and the corresponding bit or bits of opposite value in the second segment are also damaged, then you know the sum of those columns will not change. So receiver won't be able to detect those error. That's why That's why I've written most error. But you know it's a rare condition. It's a rare situation that the bits changes in a way that the sum did not change.

**5:41:13** · Because all depends on the sum. If some error occurred and it it is still remain minus 44, then receiver won't be able to detect it. That's why we have written mostly even errors. While in the case of odd, it will never happen. So, all of the odd errors are detected and mostly the most of the even errors are detected.

**5:41:36** · Is it clear?

**5:41:37** · How checksum is done? Now, we can take a detailed example with the help of binary numbers and all, but \[clears throat\] you know, you can do it yourself also.

**5:41:46** · You can take any number like 1 1 0 1 1 0 1 0 and then you can divide it into the parts, you can add them, whatever be the carry, you add that back. And whatever number you received, you going to take one's complement and then you add this one complement back to this number. If you receive zero, which means you are doing correct.

**5:42:10** · You can also try by changing some of the bit here. Let's change it to zero. In that case, you'll find that you won't be able to get zero in the answer. It's an easy thing. It's not that important. Checksum is not that important. CRC was, that's why I've taken numerous example on CRC. You have to understand the concept behind CRC and checksum.

**5:42:29** · Okay?

**5:42:32** · Is it clear?

**5:42:33** · So, this was the end of our error control. I've given you the DPP, you can solve. In the next lecture, we going to begin with flow control. In the last lecture, we have discussed your doubts from the DPP and IP addressing and error control lectures. In this lecture, we'll begin our new module, which is flow control. This is our module three. Okay. We'll begin with the concept of bandwidth.

**5:43:00** · What is bandwidth?

**5:43:01** · Let's say we have the sender and the receiver. Let's name it like this, sender and receiver. This is our transmission medium and we have our message. Now, the time taken the time taken by the sender to place this message on the link is what transmission delay is.

**5:43:22** · The time taken by the sender to place this message on the link is what transmission delay is. What is bandwidth?

**5:43:28** · Number of bits you can place in 1 second. Number of bits place per second. This is what bandwidth is. So, let's say if the message size is 100 bits and the bandwidth is, let's say, 1 bit per second. Then the time taken will be time taken will be 100 seconds. You are placing one bit in 1 second and there are 100 bits, so time taken will be 100 seconds.

**5:43:57** · So, how did we come up with that uh transmission delay? We can also make the formula, message length or we call it as L, message length, divided by the bandwidth. This is the formula of transmission delay. Okay. Now, what about propagation delay? What is propagation delay? The time taken by the message to reach from sender to receiver is what propagation delay is. So, this will be distance upon speed.

**5:44:27** · Let's say the speed is 10 m per second.

**5:44:30** · Let's say the distance is 30 m. So, what will be the propagation delay?

**5:44:34** · 3 seconds.

**5:44:37** · Is it clear? So, transmission delay was 100 seconds and propagation delay was 3 seconds.

**5:44:45** · Okay?

**5:44:47** · So, we have understood the concept of bandwidth. What is bandwidth? Bandwidth represent the rate at which number of bits are placed on the link in 1 second. What is velocity? It represent the rate or distance covered in 1 second.

**5:45:02** · Okay?

**5:45:04** · Is it clear?

**5:45:05** · Now, you may have the doubt that are these 100 bits are placed in one go or it is placed like bit by bit? So, the answer is it's placed bit by bit. As soon as one bit is placed on the link, it start moving. And then the another bit is placed on the link, it start moving. Okay? So, it doesn't work like this that 100 seconds are needed to place them on the link.

**5:45:33** · And then each bit each bit take 3 second, so it's going to take 300 seconds for 100 bits. So, 300 + 100 = 400 seconds. No, it doesn't work that way.

**5:45:45** · Have you heard of the concept of pipelining?

**5:45:51** · What is pipelining? Have you heard of the concept?

**5:45:57** · Yes, things go parallelly. Things go parallelly. As soon as the bit is placed on the link, start moving. And as the first bit is reaching the sender, the second bit would be somewhere in the bit pin. Okay? So, this 3 second, the last 3 second which we are adding is of just the last bit. Okay? If you think more about it, you'll get the idea. Both works are going on parallelly.

**5:46:22** · In the same time, bits are also moving and another other bits are also getting placed at the transmission medium. This 3 bit 3 second is of the last bit. Okay? Now, let's understand more. We have learned for transmission delay, what is propagation delay. Now, there are other delays also like queuing delay and processing delay.

**5:46:44** · Processing delay.

**5:46:45** · Okay? Let me repeat again, what is transmission delay? Amount of time taken to transfer a packet on to the outgoing link is called transmission delay. What is the what was the formula of transmission delay?

**5:46:57** · Length of the message divided by the bandwidth. Let's solve more problems on this. Suppose this is our sender, this is our receiver, and packet size is let's say 1,000 bits.

**5:47:12** · And the bandwidth is 2 bits per second. So, what will be the transmission delay?

**5:47:18** · What will be the transmission delay? 500 seconds. Which is divided L by bandwidth. 500 second will be the transmission delay. Is it clear? So, you have to remember the formula. Packet size or length of the packet divided by bandwidth. Okay. Now, I I think I need to clarify this.

**5:47:39** · What is kilo? What is mega? And what is giga?

**5:47:42** · So, when you're talking about data and when you're talking about bandwidth, they both represent different things. This is very important concept. They both represent different things. So, in the case of data kilo represents 2 raised to power 10, which is 1024. Mega represents 2 raised to power 20, which is 1024 into 1024. And giga represent 2 raised to power 30, which is 1024 raised to power 3.

**5:48:14** · While in case of bandwidth, kilo represents 10 raised to power 3. Mega represents 10 raised to power 6, and giga represent 10 raised to power 3.

**5:48:23** · Is it clear?

**5:48:27** · Is it clear? So, let's say if I give you this question. L is 8 Kbits and the bandwidth is also 8 Kbps.

**5:48:38** · What will be the transmission delay?

**5:48:40** · Is it 1 second?

**5:48:42** · Okay, tell me this.

**5:48:45** · Tell me this.

**5:48:47** · What will be the number?

**5:48:51** · I hope you all know the meaning of this.

**5:48:53** · This is ceiling function. So, what will be the number?

**5:48:56** · What will be the answer of this?

**5:49:01** · This K represents here 1024. And this K represents here just 1000. So, this will be like this, 1.024. This will be two. Did you get it? So, if someone ask what is the transmission delay, you'll reply 1.024 seconds.

**5:49:20** · Okay?

**5:49:21** · Now, what is propagation delay? Amount of time taken to reach a packet from one point to another point. This is called propagation delay. How we calculate this?

**5:49:33** · Distance upon speed.

**5:49:36** · Is it clear? So, you can uh write the formula of propagation delay as distance upon velocity.

**5:49:43** · Okay?

**5:49:45** · So, the total time taken to send a packet from A to B will be transmission delay plus propagation delay. Now, what about this queuing delay?

**5:49:54** · What is queuing delay?

**5:49:56** · And what is the formula of queuing delay? So, the answer is there is no generalized formula of queuing delay. There is no generalized formula for queuing delay. Now, what is queuing delay? Queuing delay is the amount of time the amount of time packet will wait in a queue at the router before being taken up for the processing is called queuing delay. It's called queuing delay. So, uh every router or even receiver also have a buffer queue.

**5:50:31** · A buffer queue where if the speed of the sending is more and speed of processing or con- contemplating by the uh receiver or the router is less, then what will happen? The packet will start waiting at the waiting queue or the buffer queue. You may have heard the line that the buffer is full, the buffer is full. The start The packets will start getting lost. So, this is what buffer means at the router or the receiver.

**5:51:00** · If the speed of sending is more and speed of processing is less, then the packets will keep on arriving and they will wait in the buffer queue. Okay. So, the amount of time the packet has wait in the buffer queue before taken up for the processing is what queuing delay. Is it clear? So, there's no generalized formula for this. Now, we'll move ahead. Now, we'll move ahead.

**5:51:26** · Uh Or should I clarify something before?

**5:51:31** · Let me clarify these things. We have talked We have talked about the OSI layer OSI model. We heard that there was a data link layer in between. In data link layer, we discussed that it was node-to-node layer. Or you can say hop-to-hop layer. Okay. Network layer, we discussed that it was source host to destination host.

**5:51:59** · Destination host.

**5:52:01** · And transport layer was a bit further. It was end-to-end or process-to-process discussion. End-to-end or process-to-process discussion. In data link layer, we had MAC address of 48 bits. In network layer, we have IP address of 32 bits. In transport layer, we have port number of 16 bits. Okay. Is it clear? Let me Let me revise you again. For the OSI model, we had these layers.

**5:52:35** · Application layer, presentation layer, session layer, and then transport layer, network layer, data link layer, and then physical layer. Okay? And then in TCP/IP mode, we have combined these into a single application layer. And then we directly have transport layer, network layer, data link layer, and physical layer.

**5:53:04** · Is it clear?

**5:53:09** · Is it clear? So, what happened during router, when the packets are received to routers, router will only require the services till network layer.

**5:53:21** · While the receiver and the sender will require the services of application layer also. So, router will only require the services of network layer. So, what happens when the packet receive when the packets are received by the routers, and router is busy with processing of some different layer. Let's say router is busy with interacting with data link layer or network layer, and there is another packet at arrival.

**5:53:43** · So, what will happen? The packet will first wait in the queue. And then when this packet will be processed, it will sent forward or it will be forwarded. Now, when another packet was waiting in the queue, that was what the queuing delay was. And when the packet is being processed by these three layers of the router, we call it as processing delay.

**5:54:09** · processing delay.

**5:54:11** · Is it clear?

**5:54:13** · So, the processing delay is the time required for router, or we can also discuss for the destination node. The same thing happen with the destination node also or the receiver also.

**5:54:24** · Receiver or router.

**5:54:26** · Okay? Anything could be in between. For example, we needed some intermediary node in between. So, we are then discussing about the router. If it's direct connection, then we are discussing about the receiver. So, processing delay is \[clears throat\] the time required by the receiver or the router to receive a packet from its input port and remove the header, perform the error detection procedure. This is what happening here.

**5:54:49** · Remove the header, perform the error detection procedure, and deliver the packet to the deliver the packet to the let's say or forward the packet or if it is if it is receiver then it will send the packet to the above layers. Upper layer protocol in case of destination host. And if it is a router then it will send the packet to the output port.

**5:55:11** · If it is a router then it will be received at the input port, will be processed here, and it will be sent to the output port. In case of receiver packet will be received and will be sent to the upper layers. So, this time is what processing delay is. If it is waiting in the queue then it is queuing delay. If it is getting processed then it will be processing delay.

**5:55:42** · Is it clear? Let me also also made make a diagram for you so you that so that you can understand better. Let's take TCP/IP only. So, we have application layer, transport layer, network layer, data link layer, and physical layer. And let's say we have an intermediary node in between. We call it as router one and let's say another node we call it as router two and then we have send receiver.

**5:56:10** · This was sender.

**5:56:12** · And the receiver also have same set of layer, application layer, transport layer, network layer, data link layer, and physical layer.

**5:56:18** · So, what happens?

**5:56:19** · Application layer will start the uses of application layer and then will move to a transport layer, network layer, data link layer, physical layer, and then the packet will be forwarded on this link. The packet will re- reach the outer one. Now, router is a kind of device. We're going to study all the devices later, like router, hub, and all these things. Which require the services till network layer only.

**5:56:45** · Data link layer and network layer. Why?

**5:56:48** · Why? Because it doesn't have to process It doesn't have to process till the application layer and transport layer. It doesn't require the services of application and transport layer. What is the work of router? Forwarding the packet to the responsible uh either router or receiver. So, application layer, transport layer, network layer, data link layer, physical layer, all are used in case of sender.

**5:57:14** · But, physical layer, data link layer, network layer, and then again, data link layer, physical layer, they will be used at the router one. Same case will happen. Physical layer, data link layer, network layer, and then again, data link layer, physical layer. And then, when it will reach the receiver, it will use physical layer, data link layer, network layer, and then transport layer, and application layer.

**5:57:36** · Is it clear?

**5:57:43** · So, we have kind of gone the off topic.

**5:57:46** · I just wanted to explain you how what What do I mean by processing?

**5:57:51** · When When I'm going to say that there will be processing delay, so what do I mean by processing?

**5:57:57** · This This concept I was explaining to you. Okay. Now, let's move back to the delays. So, we have discussed these delays.

**5:58:06** · Trans- transmission delay, L by bandwidth, propagation delay, distance upon speed, queuing delay, the amount of time a packet has waited in the queue, and processing delay is the amount of time taken by the router or the receiver to accept the packet into the input port, process it, and send it to the output port. Okay?

**5:58:28** · We do not have formula of these two. They will be either given in the question or we have to ignore them. If they are not given in the question, then you have to ignore them.

**5:58:37** · \[clears throat\] Is it clear? So, let me give you a tip for the DPP problems that in most of the questions of flow control, when we were talking about the delay problems, what you're going to face is they will try to they will try to play in the game of unit conversion.

**5:59:03** · Okay?

**5:59:04** · They'll try to play in the game of unit conversion. They will give give some data in kbps. Sometimes they will write kbps. What is B and what is small b? The small b mean bits and the bigger B means bytes, which means 8 bits. Sometimes you will forget that for data you have to take 1024 and for bandwidth you have to take 1000.

**5:59:31** · So, you have to be very careful in these concepts of unit conversions and you have to be careful while solving. Let's solve some of the problems here. Let's say the packet size is 1 KB and the channel capacity is 10 raised to power 9 bits per second. So, sometime bandwidth is also called channel capacity. Then, what is the transmission time? You can directly solve.

**5:59:54** · What it will be?

**6:00:04** · No need for exact answer. You can give me approximate also. Okay. So, this is like 1024 bytes and then you have to convert it into bits. Now it is bits. Then, 10 raised to the power 9 bits per second. So, this will be 8192 divided by 10 raised to the power 3 into 10 raised to the power 6 second. Now, this will be microsecond and this will be 8.192 microsecond. Let's solve another question.

**6:00:43** · We'll solve here.

**6:00:45** · Consider a 100 Mbps link between uh let's say Earth station. We call it as sender. And the receiver is satellite.

**6:01:01** · This is receiver.

**6:01:02** · And we have a 100 Mbps links, which means this is bandwidth. And the receiver is the is at altitude of let's say 2100 km. And the signal propagates at the speed of Let's take the speed of light, 10 raised to the power 8 m per second.

**6:01:23** · Okay?

**6:01:25** · Now, the time taken for the receiver to completely receive a packet of 100 bytes transmitted by the sender will be Okay? Try to calculate the time taken by the receiver to completely receive a packet of 1000 bytes will be It's an easy question. You all just have to put up the formulas and you'll get the answer.

**6:01:57** · So, where you will begin at? You will write the formula. What is the time taken? The time taken will be transmission delay and propagation delay. Because the receiver do not have to process here. The receiver is just receiving. We have to tell the time till the receiver have received the packet. We will ignore the scenario where it queuing and processing and all these things.

**6:02:20** · And the queuing delay processing delay are not in the question, so you are going to ignore them already. Now, calculate the transmission delay. You know the formula. L by bandwidth and the processing not processing delay, but propagation delay. You know the formula.

**6:02:38** · Distance upon speed.

**6:02:45** · What is the distance?

**6:02:46** · The distance is 2100 km. And what is the speed? Speed is 3 into 10 raised to power 8 m per second. So, you can convert it either into kilometer or convert that into meter. So, let's convert it into kilometer. So, this will be 5 km per second. Now, what is the packet size? Packet size is 1000 bytes. And what is bandwidth in? Bandwidth is in bits.

**6:03:13** · So, you can convert the packet into bits. So, you will write 8000 bits. Now, you can solve this is so easy now. Tell me the answer.

**6:03:34** · Why so much time you are taking, man?

**6:03:36** · This is so easy.

**6:03:38** · What is propagation delay?

**6:03:39** · Just the division of them. So, this will be 7 into 10 raised to power minus 3 second or 7 ms.

**6:03:48** · Now, what is the transmission delay?

**6:03:51** · Length by bandwidth.

**6:03:53** · So, 8000 divided by 100 into 10 raised to power 6 bits per second.

**6:03:59** · You cancel this.

**6:04:02** · And then And then it will be like 0. 08 ms. How do we go go up with 0.08? This is 10 raised to the power 3 and this is 1,000. This is cancelled. This is 0.08 and this is millisecond. So, what is the total time taken? 7.08 millisecond.

**6:04:27** · Did you get it?

**6:04:32** · Okay.

**6:04:33** · We have a question that here in this in these layers does transferring the data from application layer to presentation layer also take time?

**6:04:45** · Is it what you're asking?

**6:04:48** · No, no, no, no. This doesn't happen like this. Actually, it's not some kind of transfer. Let me explain you. Let me explain you. It's a nice question, okay? This is very natural to ask this. For example, we started with application layer. We had a message, let's say, "Hi."

**6:05:05** · Okay? Now, when it will be transferred to transport layer, it's not a kind of transferred. It just transport layer also has the access at the same time. So, what transport layer will do?

**6:05:17** · Transport layer will add a header. Will add a header. Now, this message is here and transport layer will just add the header. Okay? And we call this this is called message and this is called, let's say, segment in the case of TCP and datagram in the case of UDP.

**6:05:43** · Okay? Now, what happens when it goes to network layer?

**6:05:46** · This remains here.

**6:05:49** · And network layer also had add its own header. So, this is called you can also call this as a datagram or packets. Now, same thing happen again in data link layer.

**6:06:06** · Header is added.

**6:06:08** · But, there's some special thing in data link layer, trailer is also added added. Okay? And then this whole thing will be converted into stream stream of bits by physical layer. So, in this manner, the things goes down.

**6:06:30** · Why we're studying flow control?

**6:06:32** · Because flow control coordinate the amount of data that can be sent before receiving the acknowledgement. What is acknowledgement? It's like a kind of special message that receiver sends to the sender that I have received whatever you have sent. Okay? So, what does flow control flow control coordinates? It coordinate the amount of data that can be sent before receiving the acknowledgement. See, sometimes what happens that sender is sending the data and receiver is receiving it.

**6:07:04** · What receiver do while receiving?

**6:07:06** · It process the data and processing takes time while sender is just sending it. So, sender may send data very high speed. Receiver have a queuing queuing queue for storing those packets while receiver is busy. So, we have a buffer queue. But, what happens sender is sending it a very high speed that the receiver will get overwhelmed even with the queue. The queue will be soon full and the packets will start getting dropped.

**6:07:37** · We will lose those packets. So, this need to be coordinated that receiver should immediately message the sender that is getting overwhelmed. You have to reduce your speed. Okay? So, flow control coordinate the amount of data that can be sent before receiving the acknowledgement. It's a It's a kind of procedure that tells the sender how much data it can transmit before it must wait for an acknowledgement by the receiver.

**6:08:06** · Otherwise, if it is just keep on sending it, the receiver may lose the data. Okay? Because receiver has a limited speed at which at which it can process. Process what? Process the incoming data. And limited amount of memory to which it can store the incoming data. So, receiver must inform the sender before the limits are reached and request that the transmitter to send fewer frames or stop temporarily.

**6:08:34** · Okay?

**6:08:35** · It can message to either reduce your speed or you have to stop temporarily so that I can clear up the buffer by processing those packets. Since the rate of processing is often slower than the rate of transmission, so receiver has a block of memory we we call it as buffer to store incoming data until they are processed. So, receiver will say you have to stop until I process these packets which are already present here in the buffer ready to be processed.

**6:09:03** · Okay?

**6:09:05** · Is it clear? Now, how do we manage all these things? So, we have several protocols. Protocols in flow control.

**6:09:15** · Okay?

**6:09:16** · So, we will discuss three protocols: stop and wait, go back and and selective repeat. Selective repeat or reject. Okay? We call it as ARQ.

**6:09:34** · ARQ. ARQ.

**6:09:36** · So, we will learn these protocols in the next lecture. Till now, if you have any doubt, you can ask me. Okay? So, we'll meet tomorrow in the next lecture. In the last lecture, we have discussed about the delays and the core logic of flow control. In this lecture, we'll begin with the protocols involved in the flow control mechanisms. The first one is a stop-and-wait.

**6:10:06** · As the name suggests, what we do?

**6:10:08** · Here is the sender, here is the receiver. Sender sends some data packet and the receiver will send the acknowledgement. Until the acknowledgement is not received, sender is not going to send another data packet.

**6:10:23** · So, what will happen at the sender side?

**6:10:25** · Sender sends one data packet at the time and will send the next packet only after receiving the acknowledgement for the previous data packet. If the acknowledgement for the previous data packet has come, then it will send another data packet. Is this clear? Now, what will happen at the receiver side? Receive and consume the data packet and after consuming the data packet, acknowledgement must be sent.

**6:10:48** · These are the two rules for the sender side and the receiver side at the primitive primitive stop-and-wait. Let me repeat again. Sender will send the data packet and receiver will acknowledge it.

**6:11:01** · Until the acknowledgement has not come from for the previous data packet, it will not send the next data packet. Is it clear?

**6:11:10** · Okay. Now, there can be some problems with this mechanism. The first problem is what if the data packet sent by the receiver has lost somewhere due to noise?

**6:11:23** · Sender wait for the acknowledgement for infinite amount of time and receiver will wait for the data packet for the infinite amount of time. They will be stuck in deadlock. They will be stuck in deadlock. Okay. This is the first problem which we can encounter, which is of lost data packet. Okay. Now, what about the second problem? Second problem which can be data packet has reached but acknowledgement lost in between because the acknowledgement is also a packet.

**6:11:57** · And it could be lost due to noise. Now, what happened? Acknowledgement is lost in between. So, now sender will wait for infinite amount of time for the acknowledgement. So, this is the problem of lost acknowledgement.

**6:12:11** · Now, what about the third problem? The third problem is delayed acknowledgement. What happened?

**6:12:18** · For example, the acknowledgement got delayed. The sender may assume this acknowledgement for some other packet. So, delayed acknowledgement might be wrongly considered as an acknowledgement for some other packet. So, the third problem which could be of delayed acknowledgement. So, these are the three problems that need to be addressed or resolved by using the new concept of stop and wait ARQ. ARQ, what is ARQ? ARQ means automatic automatic repeat request.

**6:13:03** · What is this that let's say if data package is lost somewhere in between, then sender will set a timer. Because receiver do not know that sender has sent the packet. So, it will not send the acknowledgement. So, what will sender do? Sender will set a timer. When the limit will be reached, sender assumes that either the acknowledgement is lost or my data packet is lost, I have to send it again.

**6:13:28** · Sender will send again. So, this is what automatic repeat request is. Okay? So, let me give you some theoretical points. So, first of all, this stop and wait is a mechanism for flow control. You know, it could also be used for error control. How error control? If error is detected, then stop and wait. Uh it's not how error control is done.

**6:13:57** · Let's understand. Error control in stop and wait ARQ is done by keeping a copy of sent frame. So, whatever frame is sent, the sender will keep a copy of this until it receives an acknowledgement.

**6:14:09** · And sender start a timer when it send a frame. If acknowledgement is not received within the time frame, then the sender assumes that the frame was lost or damaged or some error has occurred because, you know, even if even if the packet has reached the receiver, if there is error, receiver will discard it silently.

**6:14:34** · Discard silently.

**6:14:36** · Sender will never know what was the case. He The case was of lost data packet or the lost acknowledgement or the case was of error, sender won't be able to know. Because the receiver discards silently. Receiver do not send another data packet to say that there has been some error, you have to retransmit. Receiver will discard silently. Sender has a timer with itself. Sender will notice during the timer that acknowledgement has not come.

**6:15:05** · So, sender will retransmit again. So, in this manner, flow control and error control both are achieved with the help of stop and wait ARQ. Okay. Receiver sends an acknowledgement to the sender if it receives the frame correctly without any error. Okay. And suppose if some error has occurred, then sender will keep a timer and will retransmit again when the timer is reached. Okay. Now, about acknowledgement, acknowledgement is always of the next expected frame.

**6:15:42** · Next expected frame.

**6:15:46** · For example, you have data packets in this manner. Let's say 2000, 2001, 2002, in this manner. So, when you will send 2000 to the receiver, receiver will not say, "Yes, I have received 2000. You can send me 2001." Receiver will directly write here, "Give me 2001." When 2001 will be sent to the receiver, receiver will directly ask for 2002. Things goes in this manner. So, acknowledgement will always be of the next expected frame.

**6:16:21** · It's like, "I've got this. You can send the next. I've got this. You can send the next." So, it will always be of next expected frame. And until the sender receives the acknowledgement from the receiver, it will keep the copy of the message sent in its buffer. Is it clear? So, things goes like this. Packet sent, data packet, but it is not uh received by the receiver. It It was lost somewhere in between.

**6:16:49** · We have a timer. Let's say of 60 second. After that, and we also have kept the copy of the packet which was sent so that if some problem arise, this copy can be used here again to send again. And this time it has reached. Another copy is also maintained. The packet is sent and acknowledgement received. Now, this time the copy can be deleted because the receiver have this packet.

**6:17:15** · Okay, so until acknowledgement is received, the copy will not be deleted. Now, this ARQ works on this stop and wait ARQ. Have a stop and wait stop and wait timer. So that buffer may not be full. This is the actual flow control mechanism.

**6:17:39** · Flow control This is stop-and-wait is for flow control that you will not send another frame until you receive the acknowledgement of the previous frame. The next concept which is included in this is time-out timer. This will prevent you from getting stuck in the deadlock. So that sender and receiver may not wait for infinite amount of time. What will be the third concept? The third concept will be of sequence number.

**6:18:06** · So that duplicate packets may not be received. These sequence number are necessary.

**6:18:12** · Sequence number of the data. What is the fourth concept?

**6:18:15** · Sequence number of acknowledgement. Data and sequence number of acknowledgement. So that sender may know that which packet has received and which packet need to be sent again.

**6:18:29** · Is it clear?

**6:18:33** · Let me explain you how they are working as a solution. So first solution, lost data packet.

**6:18:40** · Lost data packet.

**6:18:45** · What happens?

**6:18:46** · We have this data packet which was lost in between. Now, we have time-out timer. As the time-out timer expired, the data packet will be sent again. So, no deadlock. No problem of deadlock. So, stop-and-wait plus time-out timer will protect you from deadlock.

**6:19:05** · What about lost acknowledgement problem?

**6:19:10** · What about lost acknowledgement? You send the data packet. Acknowledgement was lost somewhere in between. You send the data packet again. Now, receiver have received the duplicate packet. Suppose if you didn't didn't have the sequence number of data, receiver will never know that it has received \[clears throat\] a duplicate packet. Until the processing happens and all these things. Did you get it? That's why sequence number of data was necessary.

**6:19:39** · Okay?

**6:19:41** · So, what about lost acknowledgement? As we have sequence number of data packet, we have timeout sequence number concept, sequence number of data packet, we have the concept of stop and wait, and we have the concept of timeout timer. The lost acknowledgement can be solved because this time this time receiver rejects the data packet by saying that it is duplicate. Receiver rejects the duplicate data packet, and this time it will send the acknowledgement again.

**6:20:16** · That I have already received that data packet, you can skip it. Send me the next. Acknowledgement is all always of next.

**6:20:27** · Okay?

**6:20:28** · Now, what about the third problem?

**6:20:31** · Delayed acknowledgement.

**6:20:35** · See this.

**6:20:37** · Suppose we have a data packet one.

**6:20:41** · Okay?

**6:20:43** · And then receiver has sent the acknowledgement, but due to noise it got delayed.

**6:20:49** · What sender will do?

**6:20:50** · Timeout will expire, and it will send the data packet again. Data packet rejected by the receiver by claiming it to be duplicate, and then it will send the acknowledgement by saying that I have already received this data packet, you can send me the next. But the But this acknowledgement came late. And before that data packet two was sent.

**6:21:15** · Due to this acknowledgement, as receiver already told that I have received the data packet, you can send me data packet two. So, this acknowledgement will come here. And then the sender will send data packet two, this was lost somewhere in between. But, acknowledgement from here came.

**6:21:34** · So, what sender sender will assume?

**6:21:36** · Sender will assume that receiver has received this. So, it will send data packet three. And receiver will never know that the sender has already sent data packet two, and sender is thinking that receiver have received the data packet two. What is the solution? That you mark the acknowledgement by giving them number also, just like the sequence number for the data. What we'll do? We will give me We will give these acknowledgement the sequence number.

**6:22:04** · Okay? So, this time it is not just acknowledgement, it will ask for acknowledgement for data packet two. So, when data packet two will be sent and then the acknowledgement for data packet two will come here again. Yeah, I want data packet two.

**6:22:22** · And this time, sender will know that receiver is again asking for data packet two, which means this data packet two was lost somewhere. So, instead of data packet three, this time it will send data packet two only. Is it clear? Let me clarify all these three problems again. So, the first problem was lost data packet. How we solve this? With the help of time out timer.

**6:22:42** · In the first case, when there was just stop and wait, not the ARQ, these cases This is what This is what stop and wait ARQ is. Apart from that, if it is just stop and wait, then it is just stop and wait. These things make stop and wait as stop and wait ARQ.

**6:23:02** · Okay? So, we are solving the first lost data packet problem with the help of stop and wait concept and time out timer. With the help of time out timer, the sender and receiver do not have to wait indefinitely.

**6:23:16** · Okay? Because if there was no time out timer, receiver will be waiting for the data packet, and sender will be waiting for the acknowledgement. Second problem, lost acknowledgement. How are you going to solve that?

**6:23:26** · With the help of sequence number on the data packet, stop and wait and time out timer. Okay? And how you going to solve the delayed acknowledgement? Stop and wait concept. This was the core. And then time out timer for no deadlock. And then sequence number for no duplicate packet. And then sequence number for acknowledgement for no delayed acknowledgement problem.

**6:24:00** · Is it clear?

**6:24:03** · So, what does ARQ means?

**6:24:04** · Could be like automatic request query. It ask again and again again and again.

**6:24:11** · Okay?

**6:24:15** · Now, let's understand the time aspect of stop and wait. Let's say this is our sender, and this is our receiver. Okay? Let me name it as A and this as B. What happens? We have a link in between. Now, A has a frame to share. A will transfer this frame onto the link, and this will be the transmission delay.

**6:24:45** · And this frame will be sent over this link to this receiver B, and the time taken by frame to reach to the receiver B will be propagation delay of the frame.

**6:24:58** · Okay?

**6:25:00** · And now, what will happen?

**6:25:03** · Frame will reach the receiver, that is B, and queuing delay and processing delay will also be included here. Processing delay will also included here.

**6:25:13** · And then, what will happen?

**6:25:14** · B have acknowledgement.

**6:25:18** · B will transfer this acknowledgement on this link. And acknowledgement will travel. This is pro- propagation delay of acknowledgement. And then A will receive the acknowledgement.

**6:25:32** · So, what will be the total time here?

**6:25:35** · The total time here will be transmission delay of the frame, propagation delay of the frame, queuing delay of the frame, propagation Not propagation, we have already counted it. Processing delay of the frame, and then transmission delay of acknowledgement, and then propagation delay of acknowledgement.

**6:25:58** · This is what the total time it will take for the whole process. Do you agree with this or you have any problem?

**6:26:05** · You have any doubt, you can ask now. Let me repeat again. What happens?

**6:26:09** · We have this frame. First of all, the frame will be transferred here onto this uh link. So, the time taken will be transmission delay. Now, \[clears throat\] this frame will travel to the receiver B. Time taken will be propagation delay. And this will wait in the queue or it will take the time to process. So, the queuing delay and processing delay will also be included.

**6:26:33** · And then what will happen?

**6:26:35** · B will generate the acknowledgement. Acknowledgement will be transferred onto this link. So, the transmission delay of acknowledgement will also come. And then the acknowledgement will travel from B to A again. So, propagation delay of acknowledgement will also come. Now, what you can tell is propagation delay does \[clears throat\] not depend upon the size of message. It depends upon what? It depends upon the link speed.

**6:27:02** · It depends upon the link speed or the velocity. And it depends on the distance. So, the distance between A and B remains the same. In both cases, the distance remains the same, and the velocity also remains the same because link is same. So, I can say propagation delay for \[clears throat\] the frame or the acknowledgement will be the same. So, what I can do, I can just multiply it by two and remove this.

**6:27:27** · Is it clear?

**6:27:29** · Okay. Now, in some cases, what happens?

**6:27:32** · Transmission delay of acknowledgement is way way way smaller than the transmission delay of frame.

**6:27:40** · Why so?

**6:27:42** · Can anyone think why so?

**6:27:51** · This is an easy question, very easy question. Why do you think the acknowledgement delay acknowledgement acknowledgement's transmission delay is lesser than the frame's transmission delay?

**6:28:01** · Why do you think so?

**6:28:08** · If you're not able to understand this concept, try to convert this into formula.

**6:28:15** · What is the formula of transmission delay?

**6:28:19** · Message upon bandwidth.

**6:28:21** · Message of acknowledgement is less less less than message of frame divided by bandwidth. You can cancel the bandwidth.

**6:28:29** · What do we know here?

**6:28:30** · That the acknowledgement size is way lesser than the frame size because in acknowledgement, you just mention the number that I want the next frame now. But in the frame, we have the full message. So, message size is way greater than the acknowledgement size. So, in some cases, what we do, we ignore this. We ignore this. And in some cases, these are also ignored.

**6:28:57** · So, what we have the approximated formula of the total time, transmission delay of frame plus two into propagation delay.

**6:29:07** · Okay.

**6:29:08** · This is the total time taken by the frame to be to be transferred on the link and then sent to B and then acknowledgement to be transferred on the link and then sent to A. This is the total time. Now, there comes a concept of efficiency.

**6:29:25** · What is efficiency?

**6:29:26** · Useful time upon total time. And we see or we perceive this efficiency with respect to sender. And when we are talking about the useful time, we are talking about the time at which sender was doing the work.

**6:29:46** · So, out of these times which I mentioned, the transmission delay of frame, the propagation delay of frame, queuing delay, proper processing delay, transmission delay of acknowledgement, and then propagation delay of acknowledgement, where do you think sender was functional?

**6:30:07** · Some people are mentioning transmission delay and propagation delay. No, sender is not responsible for this propagation. Sender is not responsible for the propagation. Sender is just responsible for transmitting or transferring the frame onto the link. And the link will manage the propagation part. It is the duty of transmission medium to propagate the frame from one point to another. Sender's work is just to transfer the frame onto the link.

**6:30:38** · So, what was the useful time according to the sender?

**6:30:43** · Transmission delay of frame. And what is the total time? Transmission delay of frame plus two into propagation delay. You can also write like this. One upon You take this downward. Transmission delay of frame upon transmission delay of frame plus two into propagation delay upon transmission delay of frame. So, you can write like this 1 upon 1 plus 2 propagation delay upon transmission delay. And you call this as A.

**6:31:12** · We are giving just a name so that formula may look simpler. So, this becomes 1 plus 2A. So, this is the efficiency of stop and wait.

**6:31:25** · Is it clear?

**6:31:32** · The total time is also known as round trip time. Round trip time because it goes and then comes back. The data packet goes and acknowledgement comes back. So, this total this total time is called the round trip time.

**6:31:47** · Okay, let me repeat again so that you may understand better. What is the total time?

**6:31:51** · Transmission delay of frame, propagation delay of frame, and then queuing delay of frame, processing delay of frame, and then transmission delay of acknowledgement, and the processing delay of and the propagation delay of acknowledgement. Not the processing delay because processing will happen at the sender side of acknowledgement.

**6:32:18** · So, we are not considering that part. We are just considering round trip time in which the sender is start transferring the frame onto the bandwidth or the link and the link will take the frame to the receiver. Receiver will generate the acknowledgement. Acknowledgement will be sent over the link which will include transmission delay of the acknowledgement and propagation delay of the acknowledgement.

**6:32:45** · We are considering just this time. We call this as the total time or the round trip time.

**6:32:52** · Okay.

**6:32:53** · Now, this and this is same. Propagation delay do not depend upon the message size. So, propagation delay will remain the same for for the frame and the acknowledgement. So, you can just write propagation delay into two. Now, transmission delay of acknowledgement and transmission delay of frame, they have a very large uh difference between them. So, transmission delay of frame is way way way larger than transmission delay of acknowledgement. So, you can just ignore this acknowledgement.

**6:33:27** · Queuing delay and processing delay, if they are mentioned, you will count. Generally, you will notice that they are not mentioned. So, you're going to ignore that also.

**6:33:35** · So, what is round trip time now?

**6:33:37** · Transmission delay plus two into propagation delay.

**6:33:42** · And now now, what is the efficiency?

**6:33:44** · Useful time upon total time. What is useful time? Just the transmission delay of frame. Because this was the time only when sender was working. So, transmission delay upon transmission delay plus two into propagation delay. This becomes 1 + 2a, where a is propagation delay upon transmission delay.

**6:34:03** · Is it clear?

**6:34:10** · Do you have any doubt?

**6:34:12** · You can ask now. Okay. So, we represent efficiency using this symbol. We also call efficiency as line utilization. Or you can also call it as link utilization.

**6:34:30** · Or sender utilization.

**6:34:34** · Okay? And you must remember you must remember that this is an approximated formula, not the exact formula.

**6:34:42** · Approximated formula.

**6:34:46** · Is it clear?

**6:34:50** · So, you can just write simply as efficiency equals to 1 + 2A in approximation.

**6:34:56** · Okay? Now, you may heard of another name that throughput. What is throughput?

**6:35:02** · Throughput Throughput is effective bandwidth or bandwidth utilization or maximum data rate possible.

**6:35:13** · You'll hear the throughput with different name. And what does it mean?

**6:35:16** · Frame size divided by the round trip time. If let's say in some different protocol, 10 frames were transmitted. So, we'll just multiply by this 10.

**6:35:29** · So, what is throughput?

**6:35:31** · The number of bits transmitted in one round trip time. So, you can write like this, frame size upon round trip time.

**6:35:42** · Okay?

**6:35:44** · Now, you have a homework. You have to set up a relation between throughput, efficiency, and bandwidth. We'll discuss it in the next lecture. What is the relation between throughput, efficiency, and bandwidth? You have all the formulas. You have to set up a relation.

**6:36:03** · Is it clear?

**6:36:05** · Okay, then we'll meet in the next lecture. So, the homework from the last lecture was that you have to find the relationship between throughput, efficiency, and bandwidth.

**6:36:18** · Have you solved it?

**6:36:22** · Okay.

**6:36:24** · I'll solve it here again. So, what is throughput actually?

**6:36:27** · What is throughput?

**6:36:31** · Number of bits or the frame size divided by total time. Frame size divided by total time. Okay? So, this was throughput. So, what is the frame size? We call it as L. And what is the total time? Total time is transmission delay of frame and then transmission delay of acknowledgement, propagation delay of frame, propagation delay of acknowledgement, queuing delay and processing delay.

**6:37:02** · For now, we are going to ignore these terms, queuing delay, processing delay, and the transmission delay of acknowledgement by taking the assumption that acknowledgement is way, way smaller than the frame. Now, what we are going to do, this will become transmission delay of frame plus two into propagation delay as propagation delay of frame and acknowledgement is same. Now, we are going to divide and multiply with bandwidth.

**6:37:32** · So, this will become bandwidth into transmission delay of frame as this means this is what?

**6:37:40** · This is transmission delay of frame divided by transmission delay of frame plus two into propagation delay. Now, if I pull up pull this down, then this will become one plus two into propagation delay upon transmission delay. And we call this as A. So, this will now become B upon one plus two A.

**6:38:05** · Now, this is what?

**6:38:09** · This is efficiency. So, I can say that throughput equals to efficiency into bandwidth. Okay, so this is our result.

**6:38:26** · Is it clear?

**6:38:28** · Okay, now you know during the whole time, during the whole time in stop and wait, you are just sending a single packet. Let me explain here. Let's say this is sender and this is receiver. Sender want to send a packet, so this will be the transmission delay. The time taken by the sender to upload the whole packet on the link. Now, let's say this is propagation delay of the acknowledgement or not the acknowledgement, but the frame.

**6:39:02** · And this is the propagation delay of acknowledgement. So, this is what two into propagation delay. So, this is total time. Transmission delay plus two into propagation delay. And this was the useful time. So, we call that the efficiency was transmission delay upon transmission delay plus two into propagation delay. Okay. And then we modified it it into the formula one upon one plus two A.

**6:39:30** · Now, what is one here?

**6:39:31** · One is the number of packets sent. And this one plus two A is the number of packet that could be sent. This is the maximum and this is what actually is done. You know, this is what efficiency is.

**6:39:48** · What is efficiency?

**6:39:49** · For example, you could have read at your best possible capacity, let's say 100 pages of the book, but due to, let's say some distraction or you were lazy or something, you have read just 20 pages. So, this was your efficiency.

**6:40:04** · 20%.

**6:40:05** · Okay.

**6:40:06** · Same case will apply here.

**6:40:08** · What was the maximum possible packets that could be sent? One plus two A. And what were the packets that were actually sent?

**6:40:16** · One, just a single one.

**6:40:19** · Now, why in the stop-and-wait protocol we are not sending multiple packets at once?

**6:40:25** · Just a single packet. Due to a concept of window size.

**6:40:34** · Due to the concept of window size. Now, what is the window that we are talking about?

**6:40:39** · The window is when a packet is sent from sender to receiver, sender keeps a copy of that packet in its window or let's say with itself. And receiver also have one window, which means receiver can only work on a single packet at a time.

**6:40:59** · Are you getting the point?

**6:41:00** · Both sender and receiver have just a window size of one. What if I increase the window size of the sender, which means which means that now sender can send multiple packets. Until the acknowledgement comes, sender can keep the copy of those multiple packets with itself. Initially, in the stop-and-wait protocol, sender sender's window size was just one, which means sender could send a packet and sender will have to keep the copy with itself till the acknowledgement comes.

**6:41:34** · And as you know, the window size was just one, so sender could send just a single packet in one go. What if I increase the sender sender's window size, which means sender can send multiple packets in one go and can still keep the copies of all those multiple packets with itself till the acknowledgement comes.

**6:41:55** · Is it clear?

**6:41:58** · So, in that case, we could have sent multiple packets and in this manner the efficiency improves. And this is exactly the case what happens in the upcoming protocols, which is go-back-N and selective repeat. In go-back-N, the sender window size becomes N.

**6:42:24** · While the receiver window size remains one, which means what does that mean?

**6:42:32** · Which means receiver cannot receive the packet out of order. While in selective repeat the sender window size is also in and the receiver window size is also in.

**6:42:43** · Which means the receiver can receive n packet maybe in out of order fashion. Okay, we are not going to focus about this here. We will read about it when the time will come. Now, did you get the concept what is the relation between throughput, efficiency and bandwidth? We have seen the formulas.

**6:43:01** · Let's revise those formulas. So, initially we begin with transmission delay. What was transmission delay?

**6:43:07** · Message size upon bandwidth. Then we move to propagation delay. What was it?

**6:43:12** · Distance upon speed.

**6:43:15** · Then we know that queuing delay and processing delay didn't have any specific formula. So, we are going to skip that.

**6:43:24** · Now, what was throughput?

**6:43:26** · Throughput was frame size divided by total time. What was total time or round trip time?

**6:43:34** · Transmission delay of acknowledgement transmission delay of frame propagation delay of acknowledgement propagation delay of frame queuing delay and processing delay.

**6:43:47** · Processing delay.

**6:43:48** · This is what the total time is. Now, in some question what they're going to do they're going to give you the transmission delay the of acknowledgement and of frame also. Then you have to figure out yourself that you are going to ignore this acknowledgement's transmission delay or you will take it into the consideration. Let's say if transmission delay of frame is let's say 10 raised to power 6 and transmission delay of acknowledgement is just 10.

**6:44:19** · In that case it is obvious that you're going to ignore this transmission delay of acknowledgement because 10 raised to power 6 plus 10 is almost 10 raised to power 6.

**6:44:29** · Okay?

**6:44:30** · But when this transmission delay of frame is 1000 and transmission delay of acknowledgement is 10, then they are not 1000. Then you have to add them. So in that case when the difference is not that much, you cannot apply this formula 1 upon 1 plus 2a where you directly calculate this and you call this as efficiency. No, you cannot apply this formula directly if transmission delay of frame and acknowledgement are comparable.

**6:45:02** · Okay? Same goes with queuing delay and processing delay. If queuing delay and processing delay are given, then you cannot apply this formula. This was an approximated formula. Okay? Now, the last formula which was throughput equals to efficiency into bandwidth. Till now, if you have any doubt, then you can ask me now. Otherwise, we'll move to the problem solving part.

**6:45:32** · Do you have any doubt?

**6:45:35** · No?

**6:45:36** · Then let's move.

**6:45:39** · You know, in stop and wait what we do?

**6:45:41** · We send the packet and then we're going to wait till the acknowledgement of that packet comes and then we're going to send the other packet.

**6:45:49** · Okay?

**6:45:50** · Now, what happens? Let's say sender want to send 10 packets. This is not a question. Uh the question is the next one. This is just uh the foundation. Let's say the sender want to send 10 packets and every fourth packet is lost. Every fourth packet is lost.

**6:46:08** · So by stop and wait protocol, how many total transmissions will be there?

**6:46:15** · You solve this till now till then. I'm going to write the actual question.

**6:46:20** · Okay? How many total transmissions?

**6:46:41** · Okay, did you solve?

**6:46:47** · 13 transmissions. Yes, you are all correct. So, first, second, third, fourth. Now, this packet is lost, we're going to send it again. Then, fourth, fifth, sixth, seventh. Now, this is first, second, third, fourth packet. So, seventh packet is going to be lost again. So, this is lost again, seventh, eighth, ninth, 10th, and then 10th packet is lost again. So, we're going to send 10th again. So, how many packets we have sent? 10 packets and then three retransmissions. So, total 13 packets are sent.

**6:47:17** · This is clear. Now, let's move to the next question. We have 500 packets and the probability of a packet being lost is 0.2. Or the link having error is 0.2. You can call whatever we we want. Now, using stop and wait protocol, find how many total transmissions will be required. We want to send n packets and the error probability is 0.2.

**6:47:48** · How many total transmissions will be required? And you also have to solve if we have to send n packets and the error probability is p, then how many total transmission we have to uh we will we have we have to send.

**6:48:04** · Okay?

**6:48:05** · I mean, you have to also find the general formula and the specific one.

**6:48:25** · Okay, so we'll begin with let's say 500 packets need to be sent. For example, here 10 packets need to be sent and three need to be retransmitted. So, 5 pack 500 packets need to be sent and how many need to be retransmitted?

**6:48:40** · Those who have errors. How many have errors? 500 and then 0.2. That's the probability. Okay. Now, when these will be retransmitted, they will also going to have errors with them.

**6:48:53** · How many out of them will have errors?

**6:48:59** · 100 into 0.2.

**6:49:02** · Now, when these will be retransmitted, they all they have to face errors. How many errors? What is this? This is 20. So, 20 into 0.2.

**6:49:12** · So, when these will be retransmitted, they will also have to face errors. How many errors?

**6:49:19** · It will keep on. It will keep on going. It will be like an infinite GP. So, 500 and then 100 and then 20 and then four and it will keep on going because whatever packet you send, it will have some error.

**6:49:35** · Okay. So, what's the formula of an infinite GP?

**6:49:42** · So, instead of writing like this, I will use just this. 500 and then these will be the retransmission. 500 0.2 plus 0.2 plus 0.2. This is what? This is 500 0.2 into 0.2. And this is what? 500 0.2 raised to power three. Okay. So, I have taken 500 common and this will keep on going.

**6:50:12** · Now, what is the formula of infinite GP?

**6:50:14** · If A is 0.2 and R is 0.2 what is the formula? A upon 1 minus R 0.2 upon 1 minus 0.2 This is 0.2 divided by 0.8 this is 1 by 4. So, 500 plus Wait a minute. I'm getting a call.

**6:50:37** · Hello.

**6:50:45** · Okay, so 500 plus this is what 125?

**6:50:50** · So, the total transmission that needed to be done will be 625.

**6:50:57** · Is it clear?

**6:50:58** · Now, what about the general formula?

**6:51:02** · You can solve like this NP then NP The first will be N then NP plus NP square NPQ and it will keep on. So, N plus N P plus P square PQ and then it will keep on.

**6:51:20** · So, N plus Now, this time what is A? A is P. What is R?

**6:51:26** · R is again P So, this is P upon 1 minus P. So, this is P upon 1 minus P. So, this is N plus NP upon 1 minus P. When you're going to solve, you'll find the answer is N upon 1 minus P.

**6:51:44** · Is it clear?

**6:51:47** · Okay, so if you have ever encountered question from a stop and wait what you need to focus upon either questions from the delay part or the time calculation you have to focus upon the units. They'll play in the units. You have to focus upon negligibility. That you can consider transmission delay of frame, queuing delay, processing delay negligible or not.

**6:52:20** · Okay?

**6:52:21** · Apart from these two tricks, the most of the questions will be formula based.

**6:52:28** · Is it clear?

**6:52:31** · Is it clear?

**6:52:32** · Apart from that, mhm, you can also see questions like this. That in the stop-and-wait protocol, uh how is efficiency going to depend on the distance and the packet size?

**6:52:51** · Can you solve it?

**6:52:52** · How efficiency going to depend on the distance and the packet size?

**6:52:57** · Okay, so the question can be like this.

**6:53:00** · Uh for example, if efficiency need to be minimum or for the case we can call worst, what should you prefer? Would you prefer longer link length?

**6:53:12** · I should write like this, link length.

**6:53:15** · It should be longer or shorter?

**6:53:19** · And about transmission rate, or you can also call it as packet size or let's say transmission rate.

**6:53:26** · Transmission rate, which means bandwidth, you want lower or higher?

**6:53:33** · What about packet size?

**6:53:37** · You want smaller packets or larger packets?

**6:53:42** · Let's keep the efficiency maximum.

**6:53:44** · For maximum efficiency, what do you want?

**6:53:47** · Link length should be longer or shorter?

**6:53:49** · Transmission rate should be lower or higher? And what about packet size?

**6:53:53** · So, when you discuss about these things, you consider them as individual cases.

**6:53:58** · So, what about link length?

**6:54:00** · What is efficiency first of all?

**6:54:02** · Efficiency is 1 upon 1 + 2a. So, efficiency is inversely proportional to a. Now, what is a? A is propagation delay upon transmission delay. So, I can write like this, transmission delay upon propagation delay, which means efficiency is directly proportional to transmission delay, and efficiency is inversely proportional to propagation delay.

**6:54:24** · Now, link length.

**6:54:28** · Which of the following parameters do you think that link length is related to?

**6:54:32** · Transmission delay or propagation delay?

**6:54:37** · Yes, propagation delay.

**6:54:38** · So, what is propagation delay? Link length, which is distance, upon speed. We will consider speed as constant here. So, this is like speed upon distance. Why? Because it is inversely. Now, this efficiency is directly proportional to speed, and inversely proportional to distance.

**6:55:05** · So, what about link length?

**6:55:07** · We will prefer We will prefer shorter link length. Okay? Because efficiency is inversely proportional to distance. So, for maximum efficiency, we'll prefer shorter distance.

**6:55:26** · Is it clear?

**6:55:27** · You can also think like this, but in a very logical way. For example, this is sender, this is receiver. This was the transmission delay taken, and this was 2 into propagation delay. And only this was the useful time.

**6:55:44** · Only this was the useful time. So, what do I want?

**6:55:47** · I will I will or I would want that PD should \[clears throat\] be minimum, so that TD + 2PD will be minimum. And if the denominator is less, the whole thing increases.

**6:56:02** · So, I would prefer PD to be minimum. And when will PD to be PD will be minimum?

**6:56:07** · When distance is less, then the propagation delay will be minimum.

**6:56:11** · Is it clear?

**6:56:12** · Okay. Now, what about transmission rate?

**6:56:16** · You see, bandwidth will be like L by BW. So, efficiency is directly proportional to transmission delay. What is transmission delay? Packet size upon bandwidth. Which means efficiency is inversely proportional to bandwidth.

**6:56:37** · Is it clear?

**6:56:38** · So, what would I prefer?

**6:56:41** · What would I prefer for the transmission rate? I'll prefer lower transmission rate for the maximum efficiency. What about packet size?

**6:56:49** · Now, N is directly proportional to transmission delay. While transmission delay is directly proportional to packet size. So, N is directly proportional to packet size. So, for maximum efficiency, I want maximum packet size. And you can also think from this.

**6:57:08** · Propagation delay will be considered a constant here. And if I want the useful time to be maximum, I want that the packet size would be so large that sender will spend very high time very high time in uploading the packet onto the link. And transmission and propagation delay will be less. Let me explain again.

**6:57:30** · Which case would you prefer for maximum efficiency?

**6:57:33** · You're going to prefer this case or you're going to prefer this case?

**6:57:37** · Obviously, this case is better when transmission delay is more. Okay. If you're not understanding by this analogy, you can solve with the help of formula. Okay. So, I hope this is enough for stop-and-wait protocol.

**6:57:51** · \[clears throat\] Now, the biggest problem stop and wait protocol faces is that you can send only one packet at a time. You can send only one packet at a time.

**6:58:02** · \[clears throat\] The total total time was transmission delay plus two into propagation delay. This was transmission delay, and this was two into propagation delay. This was the useful time. Okay, this was the total time, and this is the useful time.

**6:58:20** · Okay.

**6:58:22** · So, in \[clears throat\] one transmission delay or in transmission delay second we are sending one packet.

**6:58:30** · Okay, so in one second, how many packets we are sending?

**6:58:33** · We're sending this much packet.

**6:58:37** · We're sending this much packet. And in this much time how many packets we are sending?

**6:58:46** · We are sending TD plus two PD divided by TD packet. This was This was the amount of packet which was sent in one second. So, in this much second these packets we can send.

**6:59:00** · These many packets. Is it clear?

**6:59:03** · So, in \[clears throat\] the total time we can send transmission delay plus two This much packets can be sent in total time. Okay, so if I simplify \[clears throat\] this, this will become transmission delay divided by transmission delay plus two propagation delay divided by transmission delay. This is one, and this is A. So, in total time, these many packets could be sent.

**6:59:29** · In total time, these many packets could be sent. And how many we are actually sending? Just a single packet. That's why the efficiency formula was 1 upon 1 + 2A. The packets which we are actually sending, and the packets we can actually send. We can actually send. This is what we are doing and this is what we can do. The maximum thing or the maximum capacity.

**6:59:53** · These are the number of pages which you have read and these are the number of pages which you could have read at the maximum capability.

**7:00:02** · Is it clear?

**7:00:06** · Okay. So, how we can improve the efficiency?

**7:00:10** · By sending more packet at a time. By sending more packets. Instead of a single packet, we want more packets to be sent. But you know there is a problem. For example, if sender has just a single a single window size, it cannot send multiple packets in one go. For example, sender want to send one, two, three packets.

**7:00:34** · Let's say if it has sent one, two, three packets. Now it can only store a single packet. Let's say it has stored packet one. Now if packet two and packet three are lost, it's lost forever. Sender do not have the copy of these packets. Receiver have not received these packets. They are gone. That's why sender cannot send more than one packet because the sender window size was just one.

**7:00:58** · How can we improve that? By increasing the window size. By increasing the window size. Okay. So, let's say we have increased the window size. We have increased the window size. Let's say window size is now keep any number four. So, \[clears throat\] we have one or you can name the packet like this 0 1 2 3. And then 4 5 we have many packets to send 6 7.

**7:01:28** · Okay. Let's say we have to send \[clears throat\] eight packets and the window size is now four. This is sender. This is receiver. So, now what will happen? Sender will send four packets 1 2 3 4. And as soon as the acknowledgement of zero packet comes it's going to shift the window. It's going to shift the window like this. And it will delete the zero copy from its buffer.

**7:01:56** · Are you getting the point?

**7:01:58** · Why we cannot send multiple packets?

**7:02:00** · Because if some packet is lost and we do not have a copy of it, it's lost forever. That's why now what we have done, we have increased the window size. Now it's going on. The window size is four. So in one go we have sent four packets.

**7:02:15** · And as soon as the acknowledgement of first packet is received, the window is shifted. And as soon as the acknowledgement of this packet is received, we will send another packet named packet four. 0 1 2 3. And zero packet is deleted from the sender side because acknowledgement has been received by the sender that receiver have received zero packet. So there is no point of keeping copy of zero packet.

**7:02:41** · Is it clear?

**7:02:43** · And now what will happen? As soon as the first packet acknowledgement comes, it will again shift the window size. Or shift the window. And then first packet is also deleted. So in this manner it will go. So we call this concept as sliding sliding window concept. And with the help of this concept we going to implement the two upcoming protocols which is GBN and selective repeat.

**7:03:14** · Is it clear?

**7:03:15** · So let's understand the naming also. Let's say we have packet 0 1 2 3. These packets are transmitted and acknowledged acknowledged.

**7:03:27** · Okay?

**7:03:30** · Window contains the packet 4 5 6 7. What does that mean? This means these packet are transmitted but not acknowledged. And and the upcoming packets 8 9 10 11, these packets are neither transmitted nor acknowledged or they are next to be transmitted.

**7:03:50** · Okay, so what does this sliding window concept says? That whatever be the window size, you send those many packets back to back back to back and as soon as the acknowledgement of the initial packets start coming, you shift the window simultaneously.

**7:04:04** · Okay?

**7:04:07** · Is it clear?

**7:04:10** · Now, what could be the maximum window size?

**7:04:14** · Can you guess what could be the maximum window size? The maximum window size could be 1 + 2a. And in stop and wait, what was the window size? The window size was just one.

**7:04:26** · Okay?

**7:04:30** · So, for the maximum window size, we have a concept of sequence number also or sequence number concept.

**7:04:37** · What does it say?

**7:04:38** · That you need to number the packets also. You need to number the packets also. So, for maximum windows, maximum window size, let's say uh 1 + 2a packets. So, the minimum sequence number required will be 1 + 2a because you need to individually uh number a packet. We have discussed why.

**7:05:00** · Because if you do not number the packet, the receiver cannot understand whether it is a duplicate packet or not until it processes it and waste its resources on a duplicate packet. So, we have to number a packet. We have to number acknowledgement also so that the concept of delayed acknowledgement may not fool the sender.

**7:05:20** · We have discussed all of these things, so I'm not going to repeat that. So, maximum window size be a let's say 1 + 2a packet. So, how many sequence number we require? We require 1 + 2a sequence number. You know, for just one bit we can give two sequence number, zero and one. With two bits we can give four sequence number, 00, 01, 10, and 11.

**7:05:43** · So, if we require 1 + 2A sequence numbers, here we require four sequence numbers, so two bits were required. So, if you require 1 + 2A sequence number, how many bits we are going to require?

**7:05:54** · log 2 1 + 2A Okay? This is Till now, if you have any doubt, you may ask.

**7:06:03** · No doubt?

**7:06:05** · So, we'll meet in the next lecture. In the last lecture, we have seen introduction to sliding window protocol. In this lecture, we'll begin with GBN and we'll also understand selective repeat.

**7:06:17** · Okay?

**7:06:18** · By the way, I hope you are all solving the DPPs. I'll consider that this will be the last lecture for flow control module. From the next to next lecture, we'll begin the new module of IPv4 header and fragmentation. But before that, we will solve all of your doubts from the DPPs that you have faced. You can also ask doubt from the previous DPPs of error control and IP addressing.

**7:06:48** · By the way, I have taken one doubt class where we have discussed your doubts, whichever doubt you have asked. In the next lecture, we will do it the same for flow control.

**7:06:57** · Okay?

**7:07:00** · Now, let's begin with sliding window protocol. In this concept, instead of sending one packet and wait for the acknowledgement like we did in stop and wait, we send W packets.

**7:07:12** · We send W packets and wait for the acknowledgement. Where W is what?

**7:07:17** · The sender window size.

**7:07:19** · Sender window size.

**7:07:23** · Okay? So, this was the theoretical concept based on which we will GBN and selective repeat. Now, let's start with GBN, which means go back N.

**7:07:37** · In GBN, the sender window size is N itself. So, if I say GB5, which means I'm talking about the sender window size is five. What about receiver window size?

**7:07:47** · In GBN, receiver window size always remains one.

**7:07:51** · Always remains one.

**7:07:53** · Okay?

**7:07:56** · So, N is the sender window size and receiver window size is always one. Okay. So, if I write like GB10, then receiver window size is one and sender window size is 10. If I write GB15, same here. Sender window size 15 and receiver window size is one. Let's see with the help of a diagram. This is our sender. This is our receiver.

**7:08:23** · Okay?

**7:08:25** · Let's talk about GB5. We have sender window size as five and receiver window size as one.

**7:08:33** · Okay?

**7:08:34** · We We want to send the packet 0 1 2 3 4 5 6. Let's take seven also.

**7:08:43** · Okay?

**7:08:44** · Let me write it \[laughter\] properly. 0 1 1 2 3 4 5 6 7. And if window size is five, which means this will be in a window. So, we were supposed to send these many packets in one go. Like 0 1 2 3 4.

**7:09:08** · Okay. Now, what happened?

**7:09:11** · Zero is received.

**7:09:13** · One is received.

**7:09:14** · Two is received and three is lost somewhere. Three is lost somewhere. Now, when 0 1 2 are received, an acknowledgement will be sent. So, this will be shifted to this. Now, these will be deleted from the sender side and this will be our window. So, when 012 and received, which means five, six, these are already sent. I I think this was our initial. So, 012, which means this will be our window now.

**7:09:51** · Okay? Now, what happened?

**7:09:54** · Three was not received by the receiver. It was lost somewhere. It was lost somewhere uh due to noise. Now, what will happen? Receiver will discard this packet of four silently. Receiver will silently discard four. So, zeroth acknowledgement was received, first acknowledgement was received, second was received, and the third was not received. And you know, these many packets are were already sent. Fifth, sixth, seventh were already sent. Fifth was sent, sixth was sent, and seventh was sent.

**7:10:32** · So, what will receiver do? Receiver will discard them also silently.

**7:10:38** · Receiver will discard them silently. Why so? Why is receiver not accepting these fourth, fifth, sixth, seventh packets?

**7:10:45** · Because receiver has a window size of just one. Which means receiver received the packet zero, sent to the upper layer. Receiver received the packet one, sent to the upper layer. Receiver cannot store two sent to the upper layer. Processed. Now, it's waiting for three. It received four, but you know, upper layer will not receives the packet from receiver in in out of order. The upper layer wants packet in order.

**7:11:15** · And the do not have the window. The receiver do not have space to arrange them. For example, it cannot just keep four, five, six with itself. It has to send the packet to upper layer. Now, three is not received by the receiver. So, receiver is not going to send four, five, six to the upper layer and will say, "I will send the three later." No, this doesn't happen. Because the receiver window size is just one.

**7:11:41** · So, what receiver want? Receiver want these packets in order. Okay? So, receiver is going to discard these packets silently. Receiver will wait for the packet three. But till now, what sender has done? Sender has also sent the packet four, five, six, seven. So, receiver going to discard them also.

**7:12:04** · Okay? Now, what will happen? As receiver has not received three, so receiver will not send the acknowledgement or will not uh tell the sender that I've not received three. This doesn't happen. What will happen? Sender will wait for the acknowledgement of three so that it can slide the window more. Let's say there is another packet.

**7:12:24** · So, that sender is waiting for the acknowledgement of three so that it can slide the window and delete three from its space.

**7:12:31** · But what happened?

**7:12:33** · Receiver has not received three. So, receiver will not send acknowledgement also. Then what will happen? A timeout timer will occur. A timeout will happen. So, when a timeout will happen, rece- sender going to send another packet of three. And then, the whole window will be transmitted.

**7:12:56** · Three, four, five, six, seven. These are sent back-to-back because what was the whole concept of GBN?

**7:13:04** · What was the whole concept of sliding window protocol? That whatever be the window size, you're going to send those packets back-to-back and will wait for the acknowledgement of the sent packet. If you are receiving the acknowledgement, you shift the window size one by one. You shift the window one by one. This is what we were doing. We send zero, we send one, we send two. And then we send three and four also.

**7:13:29** · But what happened? We received the acknowledgement of zero, one, and two, but not of three. So, as the acknowledgement of zero, one, two was received, we have already shifted the window to five, six, and seven. And we have already sent these packets. In the last lecture, I have discussed the terminology.

**7:13:49** · That if the window is on these packets, which means these packets were transmitted but not acknowledged. So, these are the packets which were already transmitted but not acknowledged. So, what receiver going to do when the time What the sender will going to do when the timeout will occur? Sender going to send these packets again, three, four, five, six, seven back to back, back to back, back to back.

**7:14:11** · Three, four, five, six, seven, these are sent. And the same thing will repeat again.

**7:14:17** · Did you get it? Let me explain you again in just uh 1 minute. What happened?

**7:14:22** · Zero, one, two, three, four, five. Zero, one, two, three, four, five, six, seven, eight. Okay. This was our window size. Window size of five. So, what we are supposed to do? We are We are supposed to send these packets back to back. Zero, one, two, three, four. Zero, one, two, three, four. Because this was our window size of the sender.

**7:14:46** · Now, what happened? Receiver received zero, send the acknowledgement. As the acknowledgement was sent, the window will be shifted. Now, five is sent. As the acknowledgement of one is received, the window is again shifted. And one will be deleted. Six will be sent. As the acknowledgement of two is received, again the window is shifted. And two is deleted.

**7:15:15** · Seventh will be sent. But what happened?

**7:15:18** · Receiver received 0 1 2, but 3 is not received. So receiver going to discard them silently. What will happen? Time out will occur because receiver has not received this three. So time out will occur. Sender will assume that as receiver has not received three, receiver must have discarded 4 5 6 7 also. So sender will send these packets 3 4 5 6 and 7. And the same concept will happen again.

**7:15:47** · Let's say this time three is received. So sender going to shift the window size. Three will be deleted and eight will be sent.

**7:15:55** · Did you get it?

**7:16:00** · Okay. So this was the concept of GBN where the sender window size is N. Here, in this case it was five. That's why we were sending five back-to-back packets. And the receiver window size was just one. That's why receiver can cannot receive out of order packets. Can't receive out of order packets.

**7:16:28** · Okay?

**7:16:34** · Is it clear?

**7:16:36** · Let me write here. Out of order not received by the receiver. And you know, the special thing is you have noticed here the timer is maintained. Timer is maintained only for the first frame of the window. Here the timer was maintained only for the frame three. Because if frame three is not received, then this 4 5 6 7 will also be discarded by the receiver. Sender will assume this.

**7:17:03** · So, sender will only maintain the timer for the first frame of the window. So, timer will be maintained for the Let me write here.

**7:17:13** · Second point.

**7:17:15** · Timer maintained for the first frame only. First frame of the window only.

**7:17:28** · Why so?

**7:17:30** · Because if it's its timer expire, then sender assume that the rest of the frames are not received by the receiver. Why? Because out-of-order packets is rejected.

**7:17:41** · Now, what if What if we also increase the receiver window size?

**7:17:47** · Let's say five.

**7:17:50** · What if we also receive What if we also increase the receiver window size to five?

**7:17:55** · And the sender window size is also five.

**7:17:57** · What will happen in this case?

**7:18:01** · 0 1 2 3 4 5 6 7 What was the sender window size? Five. Which means we are supposed to send five packets back-to-back. 0 1 2 And then the same case happened here. Three was not received. And four was sent. Because we are supposed to send five packets, so these five packets are sent in a single go.

**7:18:28** · Now, what happened?

**7:18:30** · Receiver have received like this. 0 1 2 Now, what will happen? 0 1 2 Receiver will also maintain a window. As soon as 0 is received, it will send the acknowledgement of 0 and will shift the window forward. Now, it's 1 2 3 4 5.

**7:18:50** · Now, what will happen in the same case?

**7:18:52** · It will receive one, shift the window forward, receive two, shift the window forward. Now, this is at three. Three has not been received.

**7:19:00** · So, what will happen?

**7:19:02** · What will happen?

**7:19:03** · It will receive the packet four, will consider three as that this packet will be received later when the timeout of the sender will expire. So, this will be received. Four will be received. And as soon as the acknowledgement of one is sent, five will be received also because this is included in the window, six and seven. These packets will be received as they are in the window of the receiver.

**7:19:31** · Five is received. The packet acknowledgement of two will come. Six will be received.

**7:19:38** · And then and then what will happen?

**7:19:42** · As timeout will expire, three will be sent.

**7:19:47** · Okay?

**7:19:48** · Now, what will happen? In this case, timeout will be maintained for each and every packet. In the previous case, the timeout was maintained for the first packet of the frame only. In this case, as you know, receiver can receive out of order packets, so timeout will be maintained for each and every packet of the frame. Is it clear? So, this was the concept of selective repeat because you have to repeat the selected packets only.

**7:20:15** · And why go back N? Why is the naming go back N? Because in this case, you have to send the entire window back because you were sending the entire window back, three, four, five, six, seven. The whole window was being sent again. So, go back how many packets? N, which means the sender window size, the entire window.

**7:20:35** · Did you get it?

**7:20:36** · So, this was the concept of SR protocol. Now, let's solve some of the problems so you can understand better. Let's say in GB3, if every fifth packet is lost, if every fifth packet is lost and we have to send 10 packets, then how many transmissions are required? We have solved a similar question for a stop-and-wait. Consider this as a level up. Try to solve.

**7:21:06** · If it is a GB3 and every fifth packet is lost and the total packet that need to be sent is 10 packets, how many total retransmissions or how many total transmissions will be required?

**7:21:19** · You can begin like this.

**7:21:21** · 1 2 3 4 5 6 7 Okay?

**7:21:26** · So, this will be the window. Now, every fifth packet is lost. So, one will be received, second packet will be received, third packet will be received and as soon as they will be received, the window will be shifted. So, window will keep on shifting. Three and then fourth will also be received and fifth packet is lost. So, window will be here.

**7:21:47** · You know?

**7:21:48** · Third packet was lost. You can you can uh mug this up that only the first packet of the window can be lost. Only the first packet of the window can be lost. These packets were already received. Let's say Let's say third was received. If third was received and fourth was lost, then window would already been shifted here.

**7:22:10** · So, fourth will be lost. So, what will happen here?

**7:22:14** · Let's say if they have asked that every sixth packet is lost, you can just directly assume like this 1 2 3 4 5 will be sent. I'll make the window here. 6 7 8 and then if sixth is lost, then entire window will be retransmitted. For example, in this case it was fifth packet. So, 1 2 3 4 5. So, every fifth packet is lost. This will be the lost packet.

**7:22:38** · And these were the packets that were already been transmitted. What I have told you that the if the window are on these packets, this signify that these packets were transmitted but acknowledgement has not been received. So, fifth packet is lost while sixth and seventh were already been sent. Now, what will happen? Receiver will silently discard sixth and seventh. So, fifth will all fifth, sixth, and seventh will be sent again.

**7:23:06** · Now, what will happen?

**7:23:08** · This was the fifth packet now. 1 2 3 4 5 This packet will again be lost. Then, they will be sent again. 7 8 9 10 And then, what will happen? 1 2 3 4 5 This ninth packet will again be lost. So, nine and 10 will be sent again. Are you getting the point? You have to remember this case.

**7:23:33** · You have to remember this case. Okay, the first packet Whatever they have given you, let's say nth packet is lost. So, you're going to count from 1 to n and you will make a window here. Let's say n n + 1 n + 2 GB3 So, if nth packet is lost these two packets were already sent. Now, what will happen? This n n + 1 and n + 2 will be sent again.

**7:23:59** · Did you get it? This is the same thing which we have done here.

**7:24:03** · What happened?

**7:24:06** · First packet, second packet, third, fourth, and fifth is lost while sixth and seventh were already sent. So, what will be happen What will happen now? 5 6 7 will be sent because the window This whole window will be retransmitted. I hope the point is clear. So, how many transmissions? 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 18 transmissions were needed.

**7:24:33** · How many retransmissions?

**7:24:35** · Eight retransmissions because 10 were the total packets and eight extra transmissions were needed.

**7:24:44** · Did you get it?

**7:24:48** · Okay.

**7:24:50** · Now, let's see the concept of independent acknowledgement and cumulative acknowledgement.

**7:24:56** · Independent and cumulative acknowledgement. What you can guess from the name?

**7:25:04** · Yes, correct.

**7:25:06** · In independent acknowledgement, every packets every packet must have its own acknowledgement from the receiver side. For example, the case which we were discussing before, 0 1 2, each packet was having its own acknowledgement. While in cumulative acknowledgement, just a single acknowledgement can be enough for the whole window, 0 1 2 3.

**7:25:31** · Now, if these are already received, why to increase the Why you have to increase the traffic while you can just say, "Okay, send four." This acknowledgement four means that I have already received 0 1 2 3, you can send four. Okay. So, this works best in the case of GBN.

**7:25:53** · How so?

**7:25:54** · Because if sender is getting the acknowledgement named four, which means sender know that receiver cannot receive in out-of-order fashion. Now, receiver is asking for the packet four, which means receiver has already received 0 1 2 and 3.

**7:26:12** · Okay?

**7:26:14** · So, this was the concept of independent and cumulative acknowledgement. What about stop and wait?

**7:26:20** · Stop and wait uses independent acknowledgement. Stop and wait independent.

**7:26:26** · What about GBN?

**7:26:27** · Cumulative works best.

**7:26:31** · Okay? And acknowledgement number defines the number of next expected frame.

**7:26:39** · Is it clear?

**7:26:42** · And you know, there is some very logical concept or you can say of common sense that acknowledgement number and timeout timer, what will be the relation between them? Who will be more and who will be less? Acknowledgement time, not acknowledgement number, acknowledgement time and timeout time.

**7:27:03** · Who should be more?

**7:27:08** · Yes, obviously timeout time should be more. Why?

**7:27:12** · Because let's say if timeout timer of zeroth packet expired before this acknowledgement four could even come. For example, timeout timer of zero was expired here before this acknowledgement four could come. What will happen? Sender will retransmit unnecessarily, increasing the network traffic. So, this was also a concept I could remember. I thought I could share.

**7:27:35** · Another concept that the sender window size plus the receiver window size should be less than available sequence number. Otherwise, the problem of duplicate packet will come. Why? Because if the available sequence number are less than the sender window size plus receiver window size, then you cannot distinguishly identify each packet or distinctly identify each packet each packet and the problem of duplicate packet could arise.

**7:28:06** · So, this is also a relation that you should remember that sender window size plus receiver window size should be less than the available sequence number. So, you can modify these formulas based on the protocol which we are discussing. For example, if we are discussing GBN, then you can write N here, one here and then available sequence number. So, the sender window size should be less than available sequence number minus one in the case of GBN.

**7:28:38** · Well, what happened in the case of selective repeat?

**7:28:43** · In selective repeat, the sender window size is also n and the receiver window size is also n. This should be less than available sequence number. So, 2n should be less than available sequence number. So, n is less than available sequence number divided by 2. Now, this was in a way. This was in a way. Now, we can also look at opposite way.

**7:29:04** · What is it?

**7:29:06** · What about Let's say, if sequence number is of k bit, which means what could be the maximum sequence number? 2 raised to power k. Now, how we going to divide these sequence number based on the protocol? Let's say, what about GBN and what about uh selective repeat?

**7:29:26** · In GBN, you're going to divide like this, 2 raised to power k minus one will be given to the sender and one will be given to the receiver. What about selective repeat? As you know that the sequence number are divided. Why? Because sender window size is also n and the receiver window size is also n. So, they will be divided equally.

**7:29:46** · 2 raised to power k minus one. This time, this was one here and this one is in the power. 2 raised to power k minus one. Or you can also write like this, 2 raised to power k divided by 2 divided by 2.

**7:30:00** · Is this clear?

**7:30:24** · Okay. Now, we should also discuss the efficiency part. What about the efficiency?

**7:30:31** · In the stop-and-wait this was the case. We were uploading a packet on the link and the packet will come back to us in 2 PD. So, this was the total time and this was the useful time. So, the efficiency was useful time upon total time.

**7:30:45** · Now, what if what if we can increase the sender time?

**7:30:51** · How so? By keeping the sender busy.

**7:30:55** · And how we can keep the sender busy? By giving it the task that you need to upload these many packets back-to-back on the link. How many packets?

**7:31:04** · Equals to receiver or the sorry, sender window size. So, if sender window size is N, which means we can send N packets back-to-back. So, now what will happen?

**7:31:16** · This transmission delay will increase and you know, propagation delay remains the same.

**7:31:21** · So, what will be efficiency now?

**7:31:25** · In the previous case, it was just uploading a single packet. In this case, it is now uploading N packets. So, the efficiency will be multiplied. This will now be the new efficiency. Because it is uploading N packets now.

**7:31:40** · Sender window si- sender window time Uh what I'm saying, man?

**7:31:46** · If it is \[clears throat\] This is now the new efficiency.

**7:31:55** · Is it clear?

**7:31:56** · Let me write very properly. The efficiency has become N into transmission delay of frame divided by transmission delay of frame or you can write total time. Total time and now this will also include the queuing delay, processing delay, and all these concepts. If the difference between transmission delay of frame and acknowledgement is not much, then you cannot ignore. If the difference is much, then you can ignore. I have discussed all these things already.

**7:32:26** · So, what I'm going to do now, we will do the comparison. We'll do the comparison between stop-and-wait, GBN, and selective repeat. First of all, let's understand the concept. What was stop-and-wait? You send a packet, you wait for the acknowledgement. As soon as acknowledgement arrive, you send another packet. Because the sender window size and receiver window size were both one.

**7:32:47** · Neither receiver can receive an out-of-order packet, nor sender can send multiple packets at once. So, this was the case of stop-and-wait. What about GBN? In GBN, sender window size was N, while the receiver window size was just one. So, sender can send multiple packets back-to-back and shift the window as soon as the acknowledgement is received.

**7:33:08** · What if some packet is lost in between?

**7:33:10** · In that case, the whole window will be retransmitted again. Okay. This was the case of GBN.

**7:33:17** · What if we increase the we increase the receiver window size also?

**7:33:23** · So, in SR protocol, window sender size is equals to the receiver window size, and it is N. And SR protocol uses what? Independent acknowledgement. Stop-and-wait used independent, while cumulative acknowledgement were used by GBN.

**7:33:41** · Okay?

**7:33:42** · And the acknowledgement number defines the number of error-free packets received, or the next expected frame.

**7:33:49** · Okay. And one special thing about SR is it can receive out-of-order packet. Why?

**7:33:54** · Because this time, receiver window size is also N. So, we need a special sorting logic at the receiver side. So, if someone ask in which protocol you require a sorting logic at the receiver side, you say SR protocol, because this is the only protocol which we which can receive out-of-order packets.

**7:34:17** · Okay?

**7:34:19** · And, you know, in GBN, timer was maintained by for the first packet of the window only. In SR protocol, timer will be maintained for all of the packets. Okay? So, if first out-of-order delivery or if the packet received is corrupted, then, you know, NAK for the respective packet is sent uh by the sen- by the receiver to the sender.

**7:34:45** · What is this?

**7:34:46** · This is not acknowledgement, which means that, you know, three is not received.

**7:34:50** · So, how sender going to going to know that which packet it has to send?

**7:34:55** · The sender may know with the help of acknowledgement that if acknowledgement is not received by the sender, which means the sender will wait for the timeout timer, and as the timeout timer expires, sender will send again. But, why you have to wait till the timeout timer of the sender expire?

**7:35:13** · What do you can do?

**7:35:15** · If three is not received and the rest of the packets are received, you going to send NAK three. So, what will happen? Sender will search in the window where is three, and will send immediately before even the timeout timer expires.

**7:35:31** · Are all these protocols clear to you?

**7:35:36** · Okay, we have discussed all of the major concept regarding the stop-and-wait, GBN, and selective repeat. So, the homework from the last lecture was that you have to find the relationship between throughput, efficiency, and bandwidth.

**7:35:54** · Have you solved it?

**7:35:58** · Okay.

**7:36:00** · I'll solve it here again. So, what is throughput actually?

**7:36:03** · What is throughput?

**7:36:08** · Number of bits or the frame size divided by total time. Frame size divided by total time. Okay, so this was throughput. So, what is the frame size? We call it as L. And what is the total time? Total time is transmission delay of frame and then transmission delay of acknowledgement, propagation delay of frame, propagation delay of acknowledgement, queuing delay, and processing delay.

**7:36:39** · For now, we are going to ignore these terms, queuing delay, processing delay, and the transmission delay of acknowledgement by taking the assumption that acknowledgement is way, way smaller than the frame.

**7:36:52** · Now, what we are going to do?

**7:36:54** · This will become transmission delay of frame plus two into propagation delay as propagation delay of frame and acknowledgement is same. Now, we are going to divide and multiply with bandwidth. So, this will become bandwidth into transmission delay of frame as this means this is what? This is transmission delay of frame divided by transmission delay of frame plus two into propagation delay.

**7:37:25** · Now, if I pull up pull this down, then this will become 1 plus two into propagation delay upon transmission delay. And we call this as A. So, this will now become B upon 1 plus 2A.

**7:37:41** · Now, this is what?

**7:37:45** · This is efficiency. So, I can say that throughput equals to efficiency into bandwidth. Okay, so this is our result.

**7:38:02** · Is it clear?

**7:38:04** · Okay. Now, you know, during the whole time, during the whole time in stop-and-wait, we are just sending a single packet. Let me explain here. Let's say this is sender and this is receiver. Sender want to send a packet, so this will be the transmission delay. The time taken by the sender to upload the whole packet on the link. Now, let's say this is propagation delay of the acknowledgement. Uh not the acknowledgement, but the frame.

**7:38:39** · And this is the propagation delay of acknowledgement. So, this is what 2 into propagation delay. So, this is total time. Transmission delay plus 2 into propagation delay. And this was the useful time. So, we call that the efficiency was transmission delay upon transmission delay plus 2 into propagation delay.

**7:39:02** · Okay. And then we modified it it into the formula 1 upon 1 plus 2a. Now, what is 1 here?

**7:39:07** · 1 is the number of packets sent. And this 1 plus 2a is the number of packet that could be sent. This is the maximum. And this is what actually is done. You know, this is what efficiency is.

**7:39:24** · What is efficiency?

**7:39:25** · For example, you could have read at your best possible capacity, let's say, 100 pages of the book. But due to, let's say, some distraction or you were lazy or something, you have read just 20 pages. So, this was your efficiency.

**7:39:40** · 20%.

**7:39:42** · Okay?

**7:39:43** · Same case will apply here.

**7:39:44** · What was the maximum possible packets that could be sent? 1 plus 2a. And what were the packets that were actually sent?

**7:39:52** · One. Just a single one.

**7:39:55** · Now, why in the stop-and-wait protocol we are not sending multiple packets at once?

**7:40:02** · Just a single packet. Due to a concept of window size.

**7:40:10** · Due to the concept of window size. Now, what is the window that we are talking about?

**7:40:15** · The window is when a packet is sent from sender to receiver, sender keeps a copy of that packet in its window or let's say with itself. And receiver also have one window, which means receiver can only work on a single packet at a time. Are you getting the point? Both sender and receiver have just a window size of one.

**7:40:41** · What if I increase the window size of the sender, which means which means that now sender can send multiple packets until the acknowledgement comes, sender can keep the copy of those multiple packets with itself. Initially, in the stop-and-wait protocol, sender sender's window size was just one, which means sender could send a packet and sender will have to keep the copy with itself till the acknowledgement comes.

**7:41:10** · And as you know, the window size was just one, so sender could send just a single packet in one go. What if I increase the sender sender's window size, which means sender can send multiple packets in one go and can still keep the copies of all those multiple packets with itself till the acknowledgement comes.

**7:41:32** · Is it clear?

**7:41:34** · So, in that case, we could have sent multiple packets and in this manner, the efficiency improves. And this is exactly the case what happens in the upcoming protocols, which is go-back-n and selective repeat.

**7:41:56** · In go-back-n, the sender window size becomes N, while the receiver window size remains one, which means What does that mean?

**7:42:08** · Which means receiver cannot receive the packet out of order. While in selective repeat, the sender window size is also N, and the receiver window size is also N.

**7:42:19** · Which means the receiver can receive N packet maybe out of order fashion. Okay, we are not going to focus about this here. We will read about it when the time will come. Now, did you get the concept what is the relation between throughput, efficiency, and bandwidth? We have seen the formulas.

**7:42:37** · Let's revise those formulas. So, initially we begin with transmission delay. What was transmission delay?

**7:42:43** · Message size upon bandwidth. Then we move to propagation delay. What was it?

**7:42:48** · Distance upon speed.

**7:42:52** · Then we know that queuing delay and processing delay didn't have any specific formula. So, we are going to skip that.

**7:43:00** · Now, what was throughput?

**7:43:02** · Throughput was frame size divided by total time. What was total time or round trip time?

**7:43:10** · Transmission delay of acknowledgement, transmission delay of frame, propagation delay of acknowledgement, propagation delay of frame, queuing delay and processing delay.

**7:43:23** · Processing delay.

**7:43:24** · This is what the total time is. Now, in some question, what they're going to do, they're going to give you the transmission delay the of acknowledgement and of frame also. Then you have to figure out yourself that you are going to ignore this acknowledgement's transmission delay or you will take it into the consideration.

**7:43:47** · Let's say, if transmission delay of frame is let's say 10 raised to power 6 and transmission delay of acknowledgement is just 10. In that case, it is obvious that you're going to ignore this transmission delay of acknowledgement. Because 10 raised to power 6 plus 10 is almost 10 raised to power 6.

**7:44:05** · Okay?

**7:44:07** · But when this transmission delay of frame is 1,000 and transmission delay of acknowledgement is 10, then they are not 1,000. Then you have to add them. So, in that case, when the difference is not that much, you cannot apply this formula 1 upon 1 plus 2a where you directly calculate this and you call this as efficiency. No, you cannot apply this formula directly if transmission delay of frame and acknowledgement are comparable.

**7:44:38** · Okay? Same goes with queuing delay and processing delay. If queuing delay and processing delay are given, then you cannot apply this formula. This was an approximated formula. Okay? Now, the last formula, which was throughput equals to efficiency into bandwidth. Till now, if you have any doubt, then you can ask me now. Otherwise, we'll move to the problem-solving part.

**7:45:08** · Do you have any doubt?

**7:45:11** · No?

**7:45:12** · Then let's go.

**7:45:15** · You know, in stop-and-wait, what we do?

**7:45:17** · We send a packet and then we're going to wait till the acknowledgement of that packet comes and then we're going to send the other packet.

**7:45:25** · Okay?

**7:45:26** · Now, what happens? Let's say sender want to send 10 packets. This is not a question. Uh the question is the next one. This is just uh the foundation. Let's say the sender want to send 10 packets and every fourth packet is lost. Every fourth packet is lost.

**7:45:44** · So, by stop-and-wait protocol, how many total transmissions will be there?

**7:45:51** · You solve this till now till then. I'm going to write the actual question.

**7:45:56** · Okay, how many total transmissions?

**7:46:17** · Okay, did you solve?

**7:46:24** · 13 transmissions. Yes, you are all correct. So, first, second, third, fourth. Now, this packet is lost. We're going to send it again. Then, fourth, fifth, sixth, seventh. Now, this is first, second, third, fourth packet. So, seventh packet is going to be lost again.

**7:46:38** · So, this is lost again, seventh, eighth, ninth, 10th, and then 10th packet is lost again. So, we're going to send 10th again. So, how many packets we have sent? 10 packets and then three retransmissions. So, total 13 packets are sent. This is clear. Now, let's move to the next question. We have 500 packets and the probability of a packet being lost is 0.2. Or the link having error is 0.2. You can call whatever you you want.

**7:47:10** · Now, using stop and wait protocol, find how many total transmissions will be required. We want to send n packets and the error probability is 0.2. How many total transmission will be required? And you also have to solve if we have to send n packets and the error probability is p, then how many total transmission we have to we will we have we have to send.

**7:47:40** · Okay?

**7:47:41** · I mean, you have to also find the general formula and the specific one.

**7:48:01** · Okay, so we'll begin with let's say 500 packets need to be sent. For example, here 10 packets need to be sent and three need to be retransmitted. So, five pack 500 packets need to be sent and how many need to be retransmitted?

**7:48:16** · Those who have errors. How many have errors? 500 and then 0.2. That's the probability. Okay. Now, when these will be retransmitted, they will also going to have errors with them.

**7:48:29** · How many out of them will have errors?

**7:48:35** · 100 into 0.2.

**7:48:38** · Now, when these will be retransmitted, they they have to face errors. How many errors? What is this? This is 20. So, 20 into 0.2.

**7:48:48** · So, when these will be retransmitted, they will also have to face errors. How many errors?

**7:48:55** · It will keep on. It will keep on going. It will be like an infinite GP. So, 500 and then 100 and then 20 and then four and it will keep on going because whatever packet you send, it will have some error.

**7:49:11** · Okay. So, what's the formula of an infinite GP?

**7:49:18** · So, instead of writing like this, I will use just this. 500 and then these will be the retransmission. 500 0.2 plus 0.2 plus 0.2. This is what? This is 500 0.2 into 0.2. And this is what? 500 0.2 raised to power 3. Okay, so I have taken 500 common and this will keep on going.

**7:49:48** · Now, what is the formula of infinite GP?

**7:49:50** · If A is 0.2 and R is 0.2, what is the formula?

**7:49:57** · A upon 1 minus R. 0.2 upon 1 minus 0.2. This is 0.2 divided by 0.8. This is 1 by 4. So, 500 plus Wait a minute. I'm getting a call.

**7:50:14** · Hello.

**7:50:16** · I am in the class now. I'll talk to you later. There is something.

**7:50:19** · Okay. Okay.

**7:50:21** · Okay, sir. 500 plus This is what? 125. So, the total transmission that needed to be done will be 625.

**7:50:33** · Is it clear?

**7:50:34** · Now, what about the general formula?

**7:50:38** · You can solve like this. NP then NP The first will be N, then NP plus NP square, NP cube and it will keep on. So, N plus N P plus P square, P cube and then it will keep on.

**7:50:56** · So, N plus Now, this time what is A? A is P. What is R?

**7:51:02** · R is again P. So, this is P upon 1 minus P. So, this is P upon 1 minus P. So, this is N plus NP upon 1 minus P. When you're going to solve, you'll find the answer is N upon 1 minus P.

**7:51:20** · Is it clear?

**7:51:24** · Okay. So, if you have ever encounter question from a stop and wait what you need to focus upon either questions from the delay part or the time calculation. You have to focus upon the units. They will play in the units. You have to focus upon negligibility. That you can consider transmission delay of frame, queuing delay, processing delay negligible or not.

**7:51:56** · Okay?

**7:51:57** · Apart from these two tricks, the most of the questions will be formula based.

**7:52:04** · Is it clear?

**7:52:07** · Is it clear?

**7:52:09** · Apart from that, um you can also see questions like this.

**7:52:13** · The in stop and wait protocol, uh how is efficiency going to depend on the distance and the packet size?

**7:52:27** · Can you solve it?

**7:52:29** · How efficiency going to depend on the distance and the packet size?

**7:52:33** · Okay, so the question can be like this.

**7:52:36** · Uh for example, if efficiency need to be minimum or for the case we can call worst, what should you prefer? Would you prefer longer link length?

**7:52:48** · I should write like this, link length.

**7:52:51** · It should be longer or shorter?

**7:52:55** · And about transmission rate or you can also call it as packet size or let's say transmission rate.

**7:53:02** · Transmission rate, which means bandwidth, you want lower or higher?

**7:53:09** · What about packet size?

**7:53:13** · You want smaller packets or larger packets?

**7:53:18** · Let's keep the efficiency maximum.

**7:53:20** · For maximum efficiency, what you want?

**7:53:23** · Link length should be longer or shorter?

**7:53:25** · Transmission rate should be lower or higher? And what about packet size?

**7:53:29** · So, when you discuss about these things, you consider them as individual cases.

**7:53:34** · So, what about link length?

**7:53:37** · What is efficiency first of all?

**7:53:38** · Efficiency is 1 upon 1 + 2a. So, efficiency is inversely proportional to a. Now, what is a? A is propagation delay upon transmission delay. So, I can write like this, transmission delay upon propagation delay. Which means efficiency is directly proportional to transmission delay. And efficiency is inversely proportional to propagation delay.

**7:54:00** · Now, link length.

**7:54:04** · Which of the following parameters do you think that link length is related to?

**7:54:08** · Transmission delay or propagation delay?

**7:54:13** · Yes, propagation delay. So, what is propagation delay? Link length, which is distance upon speed. We will consider speed as constant here. So, this is like speed upon distance. Why? Because it is inversely. Now, this efficiency is directly proportional to speed and inversely proportional to distance.

**7:54:42** · So, what about link length?

**7:54:44** · We will prefer We will prefer shorter link length. Okay? Because efficiency is inversely proportional to distance. So, for maximum efficiency, we'll prefer shorter distance. Is it clear? You can also think like this, well, in a very logical way. For example, this is sender, this is receiver. This was the transmission delay taken, and this was 2 into propagation delay. And only this was the useful time.

**7:55:20** · Only this was the useful time. So, what do I want?

**7:55:24** · I will I will or I would want that PD should be minimum so that TD + 2 PD will be minimum. And if the denominator is less, the whole things increases.

**7:55:39** · So, I'd prefer PD to be minimum. And when will PD to be PD will be minimum?

**7:55:43** · When distance is less, then the propagation delay will be minimum.

**7:55:47** · Is it clear?

**7:55:49** · Okay. Now, what about transmission rate?

**7:55:52** · You see, bandwidth will be like L by BW. So, efficiency is directly proportional to transmission delay. What is transmission delay? Packet size upon bandwidth. Which means efficiency is inversely proportional to bandwidth.

**7:56:13** · Is it clear?

**7:56:14** · So, what would I prefer?

**7:56:17** · What would I prefer for the transmission rate? I'll prefer lower transmission rate for the maximum efficiency. What about packet size?

**7:56:25** · Now, N is directly proportional to transmission delay. While transmission delay is directly proportional to packet size. So, N is directly proportional to packet size. So, for maximum efficiency, I want maximum packet size. And you can also think from this.

**7:56:44** · Propagation delay will be considered a constant here. And if I want the useful time to be maximum, I want that the packet size would be so large that sender will spend very high time very high time in uploading the packet onto the link. And transmission and propagation delay will be less. Let me explain again.

**7:57:06** · Which case would you prefer for maximum efficiency?

**7:57:09** · You're going to prefer this case or you're going to prefer this case?

**7:57:13** · Obviously, this case is better when transmission delay is more. Okay. If you're not understanding by this analogy, you can solve with the help of formula. Okay? So, I hope this is enough for stop-and-wait protocol.

**7:57:28** · \[clears throat\] Now, the biggest problem stop-and-wait protocol faces is that you can send only one packet at a time. You can send only one packet at a time.

**7:57:39** · \[clears throat\] The total total time was transmission delay plus two into propagation delay. This was transmission delay, and this was two into propagation delay. This was the useful time. Okay? This was the total time, and this is the useful time.

**7:57:56** · Okay?

**7:57:58** · So, in \[clears throat\] one transmission delay or in transmission delay second we are sending one packet.

**7:58:06** · Okay? So, in 1 second, how many packets we are sending?

**7:58:09** · We are sending this much packet.

**7:58:13** · We are sending this much packet. And in this much time how many packets we are sending?

**7:58:22** · We are sending TD plus two PD divided by TD packet. This was This was the amount of packet which was sent in 1 second. So, in this much second these packets we can send.

**7:58:37** · These many packets. Is it clear?

**7:58:40** · So, in the total time we can send transmission delay plus two This much packets can be sent in total time. Okay? So, if I simplify this, \[clears throat\] this will become transmission delay divided by transmission delay plus two propagation delay divided by transmission delay. This is one, and this is A. So, in total time, these many packets could be sent.

**7:59:05** · In total time, these many packets could be sent. And how many we are actually sending? Just a single packet. That's why the efficiency formula was 1 upon 1 + 2A. The packets which we are actually sending and the packets we can actually send. We can actually send. This is what we are doing and this is what we can do. The maximum thing or the maximum capacity.

**7:59:29** · These are the number of pages which you have read and these are the number of pages which you could have read at the maximum capability.

**7:59:38** · Is it clear?

**7:59:42** · Okay. So, how we can improve the efficiency?

**7:59:46** · By sending more packet at a time. By sending more packets. Instead of a single packet, we want more packets to be sent. But you know there is a problem. For example, if sender has just a single a single window size, it cannot send multiple packets in one go. For example, sender want to send 1 2 3 packets. Let's say if it has sent 1 2 3 packets. Now it can only store a single packet.

**8:00:15** · Let's say it has stored packet one. Now if packet two and packet three are lost, it's lost forever. Sender do not have the copy of these packets. Receiver have not received these packets. They are gone. That's why sender cannot send more than one packet because the sender window size was just one. How can we improve that? By increasing the window size. By increasing the window size. Okay. So, let's say we have increased the window size.

**8:00:47** · We have increased the window size. Let's say window size is now keep any number four. So, we have one or you can name the packet like the zero one two three. And then four five. We have many packets to send. Six seven. Okay. Let's say we have to send \[clears throat\] eight packets and the window size is now four. This is sender, this is receiver.

**8:01:12** · So now what will happen? Sender will send four packets, 1 2 3 4. And as soon as the acknowledgement of zeroth packet comes, it's going to shift the window. It's going to shift the window like this. And it will delete the zeroth copy from its buffer.

**8:01:33** · Are you getting the point?

**8:01:35** · Why we cannot send multiple packets?

**8:01:36** · Because if some packet is lost and we do not have a copy of it, it's lost forever. That's why now what we have done, we have increased the window size.

**8:01:45** · And now what's going on?

**8:01:48** · The window size is four. So in one go we have sent four packets.

**8:01:52** · And as soon as the acknowledgement of first packet is received, the window is shifted. And as soon as the acknowledgement of this packet is received, we will send another packet named packet four. 0 1 2 3. And zeroth packet is deleted from the sender side because acknowledgement has been received by the sender that receiver have received zeroth packet. So there is no point of keeping copy of zeroth packet.

**8:02:17** · Is it clear?

**8:02:19** · And now what will happen? As soon as the first packet acknowledgement comes, it will again shift the window size or shift the window. And then first packet is also deleted. So in this manner it will go. So we call this concept as sliding sliding window concept. And with the help of this concept, we going to implement the two upcoming protocols which is GBN and selective repeat.

**8:02:50** · Is it clear?

**8:02:51** · So let's understand the naming also. Let's say we have packet 0 1 2 3. These packets are transmitted and acknowledged acknowledged.

**8:03:04** · Okay?

**8:03:06** · Window contains the packet 4 5 6 7. What does that mean? This means these packet are transmitted but not acknowledged. And and the upcoming packets 8 9 10 11, these packets are neither transmitted nor acknowledged or they are next to be transmitted.

**8:03:26** · Okay? So, what does the sliding window concept says? That whatever be the window size, you send those many packets back-to-back back-to-back and as soon as the acknowledgement of the initial packet start coming, you shift the window simultaneously.

**8:03:40** · Okay?

**8:03:43** · Is it clear?

**8:03:47** · Now, what could be the maximum window size?

**8:03:50** · Can you guess what could be the maximum window size? The maximum window size could be 1 + 2A. And in stop-and-wait, what was the window size? The window size was just one.

**8:04:02** · Okay?

**8:04:06** · So, for the maximum window size, we have a concept of sequence number also or sequence number concept.

**8:04:13** · What does it say?

**8:04:15** · That you need to number the packets also. You need to number the packets also. So, for maximum windows, maximum window size, let's say uh 1 + 2A packets. So, the minimum sequence number required will be 1 + 2A because you need to individually uh number the packet. We have discussed why.

**8:04:36** · Because if you do not number the packet, the receiver cannot understand whether it is a duplicate packet or not until it processes it and waste its resources on a duplicate packet. So, we have to number a packet. We have to number acknowledgement also so that the concept of delayed acknowledgement may not fool the sender.

**8:04:56** · We have discussed all of these things, so I'm not going to repeat that. So, maximum window size be a Let's say 1 + 2a packet. So, how many sequence number we require? We require 1 + 2a sequence number. You know, for just one bit, we can give two sequence number, 0 and 1. With two bits, we can give four sequence number, 00, 01, 10, and 11.

**8:05:19** · So, if we require 1 + 2a sequence numbers, here we require four sequence numbers, so two bits we require. So, if we require 1 + 2a sequence number, how many bits we are going to require? log 2 1 + 2a Okay? This is Till now, if you have any doubt, you can ask.

**8:05:40** · No doubt?

**8:05:41** · So, we'll meet in the next lecture. Here, we have addressed the flow control DPP doubts. So, the last class was the doubt class. From this class, we are starting our new module, which is IPv4 header and fragmentation. So, we'll begin with the basics. This is application layer. We start with a message. And then, this is transferred to transport layer. And header is added to the message. Now, this was message, and we call this as segment.

**8:06:14** · So, when segment is transferred to network layer, another header is added. We call it as H1 and this as H2. And we call this as datagram. So, in the module of IP header, we are talking about this header. Okay? So, I'm going to expand this header here. So, what happens? We have version, four bits, four bits. What does this version means? Version means that you are talking about IPv4 header or IPv6 header.

**8:06:50** · Okay? So, how are you going to represent IPv4?

**8:06:54** · We have four bits. You have to represent four. 0100. And what about six? 0110. Is it clear? So, version represents the IP version. IPv4 or IPv6. Then we have header length of four bit again. So, IP header consists of several sections, and we are going to address each of the section in the upcoming classes. Okay, so version, header length, and then we have services of eight bits.

**8:07:33** · And then total length total length of 16 bit. So, each row will be of Can you count?

**8:07:43** · 32 bits or four bytes. Okay, now coming to the next row. We have identification identification number of 16 bits. We have flag of three bits. And fragmentation offset of 13 bits. Okay, so you can divide it into Or let's leave that. This is again four bit, four bytes. 32 bits in total. 32 bits in total and four bit. Each row is of 32 bits.

**8:08:19** · Okay, now what about third row? We have time to live of eight bit. And then protocol of again eight bit. And then header checksum of 16 bit. What about fourth row? We have source IP address of of 32 bits. Yes, we have discussed the section of IP addressing already.

**8:08:46** · What about destination?

**8:08:50** · IP of again 32 bits. So, this is 4 byte and this is 4 byte. Now, till this till this the first row, second row, third row, fourth row, and fifth row we are talking about the mandatory part that should be present in each and every IP header.

**8:09:10** · So, what will be the mandatory part?

**8:09:12** · Five rows of each 4 byte, which means 20 byte part should be mandatory. So, is there any part which is optional also? Yes.

**8:09:23** · So, we have options of 40 Is it bit or byte?

**8:09:30** · 40 byte actually.

**8:09:31** · So, we have options of 40 byte.

**8:09:33** · Okay. Now, if I someone ask what is the minimum IP header size?

**8:09:42** · Then you're going to reply 20 bytes. What is the maximum IP header size? When you're using complete options which is 60 byte.

**8:09:53** · So, what is the minimum IP header size?

**8:09:54** · 20 byte. What is the maximum? 60 byte.

**8:09:57** · Okay. So, this header length actually represent what is the what is the header size?

**8:10:05** · Okay. Now, header length is of 4 bit as you can see. 4 bit can represent till 0 to 15. And we actually have to represent the minimum represent 20 and the maximum should represent 60.

**8:10:23** · How we're going to do? We will set the limit that the header length will range between 4 to 15 and the scaling factor or I should write 5 to 15 and the scaling factor should be 4. So, this will be representing 20 to 60 byte header.

**8:10:41** · Is it clear?

**8:10:42** · See, the header length can be ranging from 20 bytes to 60 bytes. 20 byte is the mandatory part and the 60 byte will be 20 byte plus 40 byte of options. And this header length represent what is the actual header size. And header size could range between 20 to 60, but these four bits can actually represent 0 to 15. That's why we have to use a scaling factor.

**8:11:15** · Is it clear?

**8:11:17** · Okay.

**8:11:20** · Now, you have to actually remember all of this. You have to remember this complete section with the size also. You have to remember each and every section in the order which I have written and you have to also remember the size of each. So, you have to remember that identification bit come in the second row, first section and the size is 16 bit.

**8:11:47** · You have to remember like this, okay?

**8:11:51** · Now, we have discussed about the header length that the header length is actually of four bit. So, it will range from five to 15 actually. Is it clear? So, if I if someone ask if header size is 20 byte, then you will write five in the IP header. What about if it is 32 byte? Then you're going to write eight because the scaling factor is four.

**8:12:19** · Clear?

**8:12:20** · So, here you will write 0101 and here you will write 1000 at this place.

**8:12:30** · Okay? We have already discussed the version of four bits, header length of four bit. Now, what about the services part?

**8:12:37** · So, in services, the interpretation of the third first three bits So, services is of Services is of eight bits. Okay? See here, eight bits. So, in services the first three bits are called precedence bits. First three bits are precedence bits.

**8:12:57** · Precedence bits.

**8:12:59** · Or you can also uh call it as priority.

**8:13:02** · Priority bit.

**8:13:04** · And the next four bit will represent the type of services.

**8:13:08** · Type of services.

**8:13:12** · And the last bit is actually it's funny that it is not used. See, in services, three bit are the priority bit out of eight bits. Three bits are the priority bits, four bits are the uh bits which will represent the type of services, and the last bit is useless.

**8:13:32** · Okay?

**8:13:35** · Okay. Now, what about priority bit?

**8:13:38** · What is the meaning of this priority bit? Priority bit means that what is the priority of your packet?

**8:13:44** · Okay? So, priority field is needed if the router is congested. And we need to discard some datagram. So, those datagram which will have the lowest priority will be discarded first. Okay? For example, the router is congested from all sides. And it has to discard some of the datagrams. So, it will discard the ones with the lowest priority.

**8:14:07** · So, that's why the priority bit. Okay?

**8:14:11** · Now, what about the type of services?

**8:14:14** · So, it is a four-bit subfield, type of services.

**8:14:18** · Okay?

**8:14:19** · Now, out of these four bits each bit each bit have a special meaning. Although bit can be zero or one, but we are not going to represent like something like this 10 uh 10. No. Out of these these four bits only one can be one at a time.

**8:14:37** · And rest three will be zero. Why so?

**8:14:41** · Why so?

**8:14:46** · Think about it.

**8:14:48** · See, this type of services is going to represent some of the services. And only a single service can be on at a time. And the rest three cannot be. That's why it could be either zero or one. So, what does that mean? 0010, which means this service is on. Or the router is priority prioritizing for this facility. Is it clear? So, let me write that in a very clear manner.

**8:15:13** · So, this will be the eight bits of services part. The first three will be the priority bits.

**8:15:21** · PPP The next four DT D T RC These are the type of services. And the last bit is useless. It's not used. Now, what does D means?

**8:15:36** · D means minimum delay.

**8:15:41** · Can you guess what will T mean?

**8:15:46** · Absolutely perfect guess.

**8:15:49** · Maximum throughput.

**8:15:53** · Now, can you guess again what does R means?

**8:15:57** · Yes, high reliability.

**8:16:00** · Instead of maximum Listen, listen. You were typing maximum reliability. Instead of maximum, we call it as high. Okay? High reliability.

**8:16:09** · And what about C?

**8:16:11** · Cost. Yes.

**8:16:13** · Minimum cost.

**8:16:16** · So, when I was saying that out of these four only single can be one. Which means, for example, if we are minimizing the delay, then we will not look at the throughput. We will not look at the reliability, we'll not look at the cost. We will just focus on minimizing the delay.

**8:16:34** · And when when we will look at the minimum cost, we will not care about the delay. We'll not care about the throughput, we'll not care about the reliability, we'll just care about the minimum cost. Okay? So, if I write like this, 0 1 0 0, which means maximum throughput. If I write like 0 0 1 0, which means maximum reliability. 1 0 0 0, minimum delay. 1 0 0 0 1, which means minimum cost.

**8:17:05** · Is it clear?

**8:17:06** · Now, we'll move to the next section, which is total length. We have discussed these three. Version, which means which version you are using, IPv4 or IPv6. Header length can be from 20 to 60. We will use the scaling factor of four. It will begin from five till 20.

**8:17:27** · Not 20, five till 15, because four bit can represent from zero to 15. And the minimum is 20, so we are going to use five. We'll use the scaling factor of four. So, 5 into 4 is 20, and then 15 into 4 is 60. So, this is how header length will work. And then, the services part.

**8:17:43** · The first three bit will be priority bits, the next four bits will be the type of services, and the last will be useless. Now, we are moving on to this, the total length part.

**8:17:52** · Okay?

**8:17:53** · Let's move down. Total length. Okay. So, total length means data plus header. We already have the header length.

**8:18:03** · Now, why is there another section for the total length?

**8:18:07** · Because of the data part also. Okay? So, data plus header will be forming the total length. Now, total length, as you have seen, is of 16 bits, which means it can represent from zero to 65535. I've told you to remember this number. 2 raised to the power 16 minus 1. So, it is 2 raised to the power 16 minus 1, 65535.

**8:18:29** · Okay?

**8:18:30** · Now, \[clears throat\] let's say this was the message from the application layer sent to the transport layer to become the segment. Header is added. And then, this segment will be sent to the network layer segment. And the header will be added again. This is what This is what the total length.

**8:18:55** · Okay?

**8:18:57** · This is what the total length. Now, what could be the total size? The maximum size can be 65535. So, the total size total size including the data which is the segment and the header is 6565535. Now, this is the total size. \[clears throat\] Now, the header is of let's say minimum 20 bytes, then what is the maximum amount of data we can carry? The maximum size maximum data size at network layer This is 65515.

**8:19:34** · What we did? Just subtracted 20. So, this is the maximum amount of data size at network layer.

**8:19:42** · Is it clear?

**8:19:45** · Is it clear? So, this was the use of total length 16 bit. Now, let's move toward the new section, identification number.

**8:19:55** · Identification.

**8:19:58** · Identification.

**8:20:00** · We also call it as datagram number.

**8:20:03** · Datagram datagram number.

**8:20:06** · This is of 16 bits.

**8:20:11** · Okay? Now, what does that mean? What do you mean by identification?

**8:20:14** · So, So, will happen? Each datagram will be associated with a sequence number. And we call it as datagram or identification number. So, this is what I mean by datagram. This was what datagram is. Each datagram will be associated with a specific number. That number is known as identification number. So, we had a message sent to transport layer. Header will be added. This will become the segment and the segment will be sent to the network layer.

**8:20:44** · Header will be added again. Now, this will become the datagram. And each datagram is assigned a specific number. We call it as identification number.

**8:20:54** · It is used to identify all the fragment of the same datagram. Now, what do I mean by fragment?

**8:20:59** · See, let's say our packet size is of 1,000 byte.

**8:21:05** · And the router capacity is of 500 byte only. So, what we will do, we'll divide the packet. We We divide the packet and we call them fragment. Now, what will happen?

**8:21:17** · If the fragments are divided, the identification number should be same so that we can identify that these fragments belong to a single packet. They are not individual packet, they belong to a single packet. So, for that purpose, identification number is used.

**8:21:30** · It is used to identify Identify what?

**8:21:34** · Identify all the fragments of same datagram.

**8:21:41** · Same datagram.

**8:21:43** · So, what will happen? Let's say this was our datagram with identification number of 101. And when will be It will be divided into smaller fragments, all of them will have identification number of 101. So, that we may identify that these fragments belong to the a single datagram or a single packet.

**8:22:04** · Okay?

**8:22:05** · So, what is identification number used for? It is used to identify all the fragment of the same datagram. Okay. So, all the fragment of same datagram will have same identification number.

**8:22:17** · Is it clear?

**8:22:18** · Now, let me clarify more with the help of a diagram. Suppose this is our sender. This was the router in between. And the maximum transfer unit for the router is, let's say, 100 bytes. And this is the receiver.

**8:22:34** · Okay. So, what we will do?

**8:22:36** · Let's say, this was our packet or datagram, and we we have identification number of 100. And the size of the packet is 300 byte. So, what we will do? We'll divide the packet into three sections or three fragments, we will say.

**8:22:52** · Three fragments.

**8:22:53** · \[clears throat\] And each fragment will have identification number of 100, 100, 100. Is it clear? So, when these fragment will reach the receiver, receiver may identify that they all belong to a single datagram. Okay. So, this was identification number used for. Till now, is everything clear? We have discussed five sections.

**8:23:17** · Till now, is it clear?

**8:23:20** · Okay.

**8:23:21** · Let's move to the next section of flag.

**8:23:26** · Flag.

**8:23:28** · See, flag is of just three bit. It's just a three-bit field. One bit, two bit, and three bit. And in these three bit also, the first bit is not used. It's useless. The second bit is called DF, and the third bit is called MF.

**8:23:44** · What is DF and MF?

**8:23:46** · DF is called as don't fragment. And MF is called as more fragment.

**8:23:52** · Okay. So, what does don't fragment mean?

**8:23:55** · If I have set don't fragment bit as one, which means we are saying to the router that you are not going to fragment the packet even if your capacity is 100 bytes. Let's say here my packet was of 300 bytes and the capacity of router is of 100 byte only. And if we have set the don't fragment bit to one, which means we are saying the router that don't you dare to fragment the packet.

**8:24:24** · Okay, if you are not able to forward it, you can send it back, but don't you dare to fragment. So, don't fragment means the router will not fragment it. And what do you mean by more fragment?

**8:24:36** · More fragment means that there are more fragments to come. That this is not just a one packet. Is it clear? So, let me write in a formal way. Don't fragment. This could be zero or one. One means can't be fragmented. Datagram can be I should write properly. Datagram can't be fragmented. And zero means it can be.

**8:25:05** · Okay?

**8:25:08** · Now, what will happen?

**8:25:09** · Let's say this was our sender and this was our receiver. Don't fragment bit is set to one. And we have again 100, let's say 300 byte packet.

**8:25:20** · And the router capacity MTU is 100 byte only. So, what will happen?

**8:25:25** · When this packet will be sent to the router, router will see that I'm not able to forward the 300 byte packet forward because my capacity is of 100 byte only. So, what the router will do? Router will send back an ICMP message. That buddy, you have set the don't fragment bit to one, so I cannot forward it because my capacity is 100 byte only.

**8:25:49** · Okay?

**8:25:51** · So, this was the case of don't fragment.

**8:25:56** · Okay?

**8:25:58** · What if the don't fragment bit is zero now? Let's discuss that case also. So, this was our data. Now, 20 byte header will be there. 20 byte header will be there.

**8:26:12** · So, when this whole packet or the datagram is sent to the router, router will see that the size of the datagram is 320 bytes, while the size of maximum transfer unit of router is 100 byte only. So, what will this do? What will or has change it to 120 byte. So, what will router do?

**8:26:33** · Router will divide the packet into 100 byte, 100 byte of data and 20 byte of header, 100 byte of data and 20 byte of header. You know, header will be added to fragment fragmented packets also. Otherwise, they will not not know or the upcoming routers, because there can be more routers in between.

**8:26:54** · And routers may not know where this packet or this fragment need to be forwarded if fragment do not have the headers. So, headers will be added to packet also and headers will be added to datagram fragment also. Okay? So, these are datagram fragments. And this is packet or datagram. So, header will be added to both of them.

**8:27:22** · So, this was 300 byte of data divided into 100 byte, 100 byte, and 100 byte and 20 byte of header will be added to each of the fragment. Okay? Now, identification number, let's say identification number is 100. So, here also identification number will be 100, 100, and 100. And don't fragment bit was already set to zero.

**8:27:47** · Okay?

**8:27:48** · So, now how many how many bits are actually transferred?

**8:27:55** · How many bits are are actually transferred?

**8:27:58** · 360 120 120 120 so 360 bits or I should say byte. byte So, 360 bytes are actually transferred. So, can you calculate the efficiency?

**8:28:10** · useful bytes upon total byte If you ever catch me uh mixing the word of byte and bits, so please forgive me. It's just a silly mistake. You can understand where I'm referring byte and where I'm referring bits.

**8:28:31** · So, what is the useful byte that should be sent?

**8:28:35** · 300 And what is actually sent?

**8:28:38** · 360. So, what is the efficiency?

**8:28:42** · 0.833 or you can write 83.33%. Okay? So, if someone ask you to find the efficiency in this scenario, then what you can do? So, this was just the packet uh the the data which need to be sent. And what is the actual uh bytes that are sent? 360.

**8:29:04** · Okay? Now, you can you could have guessed that the lesser the router forwarding capacity the more fragments will be, the more headers will be attached, and the more bytes needed to be transferred, lowering the efficiency.

**8:29:21** · Is it clear?

**8:29:22** · Let me repeat.

**8:29:24** · If the forwarding capacity of router is less, then there will be more fragments, more headers will be attached, lowering the efficiency by increasing the total bytes that were transmitted.

**8:29:36** · Okay? So, this was the case of more fragment. Now, oh, sorry, don't fragment. What was What will be for the more fragment?

**8:29:45** · It could be zero or one again, zero or one.

**8:29:49** · \[clears throat\] What does more fragment bit one means?

**8:29:53** · Which means that this is not the last fragment. Which means there are more fragments to come or more fragments after this fragment. And what about zero? That this is the last fragment. Last fragment. So, here don't fragment bit will be zero and more fragment bit will be one. Don't fragment bit will be zero. More fragment bit will be one. Don't fragment bit will be zero and more fragment will be zero here.

**8:30:32** · Why? Because this is the last fragment.

**8:30:36** · Is it clear?

**8:30:38** · Why don't fragment zero here also?

**8:30:40** · Because sender has no problem in breaking down the packets.

**8:30:49** · \[clears throat\] Sender has no problem to let the router break down the packets. So, this router will also have no problem to let other routers break down the packet. Okay, that's why don't fragment bit if set zero by the sender, it will remain zero by the zero for the whole time.

**8:31:07** · But what about more fragment?

**8:31:10** · The last fragment last fragment will have the more fragment bit as zero while the non-last fragment or the previous fragments will have the more fragment bit as one. What does one represent? That this is not the last fragment. There are more fragments after this. And what does zero represent that this is the last or only fragment.

**8:31:33** · Is it clear?

**8:31:35** · Okay. Let's move to the next segment of fragmentation offset of 13 bits. What does fragmentation offset mean?

**8:31:46** · So, let me write here. Fragmentation offset means that indicate the number of data byte ahead of this packet in the ahead of this fragment in a particular packet. Let me repeat. Fragmentation offset will indicate number of data byte data byte ahead of this particular fragment in the packet. For example, for example, let's say this this was the These are the three fragments. Fragment 1, Fragment 2, and Fragment 3.

**8:32:21** · Okay? More Fragment 1 more or you can also write like this. Uh Or it's okay. 1, 2, and 3. This was the last fragment, the first, and the second one.

**8:32:32** · Okay. Now, what will \[snorts\] be the fragmentation offset?

**8:32:37** · How many bytes are ahead of this?

**8:32:41** · How many bytes are ahead of this fragment?

**8:32:47** · How many bytes are ahead of this fragment? Well, this is the first fragment, so none of the bytes are ahead of this fragment, so we will set the fragmentation offset as zero.

**8:32:58** · Now, how many bytes are ahead of this fragment, the Fragment 2? Well, we have the first fragment before Fragment 2, so I'll say 100 bytes are before Fragment 2. So, the fragmentation offset for the second packet will be 100 byte. What about third packet?

**8:33:15** · How many bytes How many bytes are before the Packet 3 or the Fragment 3?

**8:33:21** · I'll say 200 bytes. So, 200 bytes will be the fragmentation offset for Packet 3.

**8:33:28** · \[snorts\] Now, you know, in fragmentation offset, we were only looking at the data byte. Let me write it here properly. Fragmentation offset.

**8:33:38** · What does that mean?

**8:33:40** · The number of data byte data byte ahead of a particular fragment ahead of particular fragment in a packet. For example, 100 bytes or 300 bytes were divided into 100 byte, 100 byte and 100 byte. Now, this was the first packet. How many bytes are ahead of this first packet? Zero.

**8:34:10** · This is the second packet. How many bytes are ahead of this? 100 byte. Now, this is the third. How many bytes are ahead of this? 200 bytes. So, for this, fragmentation offset will be zero. For this, it will be 100. And for this, it will be 200. It will look like this. Zero, 100, and 200. I hope it is clear.

**8:34:32** · Now, what will be the range of this fragmentation offset?

**8:34:35** · As it is of 13 bits, so the range will be from zero to two raised to power 13 minus one. It will be 8191.

**8:34:45** · Zero to 8191.

**8:34:47** · If you have any doubt till now, you can ask. So, we have discussed this fragmentation offset, also. There's more to discuss in fragmentation offset. We will discuss it later when we will discuss the numericals of the that we have a division factor of eight here. Okay, we will discuss that later. Now, the next rows of TTL protocol and error checksum and source IP destination IP options, we will discuss in the next lecture.

**8:35:14** · Till now, if you have any doubt, you can ask.

**8:35:18** · Everything clear?

**8:35:21** · Okay, then.

**8:35:24** · In the last lecture, we have discussed the first two rows of IP header. In this lecture, we are going to discuss the further more rows. So, we'll begin with this TTL, time to live. Okay, this is off eight bit field time to live eight bits.

**8:35:46** · Okay.

**8:35:49** · Now, what is the use of this time to live and what is this?

**8:35:52** · This TTL field is used to control the maximum number of hops visited by datagram to limit maximum hops visited by datagram and why so?

**8:36:08** · Can anyone guess?

**8:36:10** · Limit maximum hop visited by datagram.

**8:36:15** · And this is done to Can anyone guess?

**8:36:20** · Why are we limiting the maximum number of hops visited by datagram? Why are we doing so?

**8:36:31** · Think think of it like this that you have to reach from one place to another and I'm limiting that your car can takes, let's say, X number of turns.

**8:36:41** · Why I'm doing so?

**8:36:47** · Yes, exactly. To avoid infinite looping. Infinite looping should be avoided. So, TTL field is used to control the maximum number of hops visited by datagram to avoid infinite looping. So, when \[snorts\] a source host when a source host sends a datagram it stores a number in this field. Each router that process a datagram So, when this will be passed to router one, let's say that datagram decrements this field by one.

**8:37:20** · And if TTL field reaches zero before the datagrams arrive destination, then what will happen?

**8:37:26** · Then the datagram is discarded and a ICMP message will be sent to the sender that your packet has been discarded due to TTL limit reached.

**8:37:39** · Is it clear what we are doing?

**8:37:42** · Why we are doing so? Let's discuss like this. For example, due to some mistake, the router keeps forwarding the packet. R1 forwards the packet to R2. R2 forwards the packet to R3. And R3 forwards back to R1.

**8:37:55** · What will happen?

**8:37:58** · What will happen? Resources will be wasted. Congestion will increase. Traffic will increase and the network will collapse. To avoid this, what we are doing? We are setting a limit on this time to live. What will happen? Let's say the \[snorts\] TTL limit set by the source is, let's say, TTL limit is six.

**8:38:21** · So, what will happen? When this will send by the router, router will process it. Router will decrement this limit to Before forwarding, router will decrement this limit to five. So, six will be the limit when it is received by the router. And five will become the limit when the router forwards it. Now, this packet reached to R2. When R2 will forward, the limit will be four. So, when R3 will forward, limit limit will be three.

**8:38:49** · In this manner, the soon limit will be zero before reaching the destination. At that time, the packet will be discarded and ICMP message will be sent. ICMP message is like a error message will be sent to the source that your packet has been discarded due to TTL limit reached.

**8:39:08** · Is it clear?

**8:39:10** · Okay. Now, one another point, the TTL limit is only decreased when network layer is touched.

**8:39:24** · Are you getting the point?

**8:39:26** · You remember a few lectures before I have made this diagram. We start with application layer, transport layer, network layer, data link layer, and physical layer on source end receiver. But at the router, we reach only till the network layer, or we require the services of network layer only.

**8:39:47** · So, what will happen?

**8:39:48** · We will reach to network layer and will go down again. If there is some another intermediary node which don't even require the services of network layer, then what will happen? The TTL field will not be decremented.

**8:40:03** · Is it clear?

**8:40:08** · Should you remember the subnetting uh lecture where we have discussed that if router receives a packet, it has to decide that in which network it will forward, network one, network two, network three, or network four. And if there is no match, then it will use the default route.

**8:40:27** · Default route.

**8:40:31** · Okay? Do you remember this?

**8:40:33** · So, and we have routing table.

**8:40:39** · And we had a routing table. Should you remember this concept?

**8:40:42** · So, what will happen? As soon as the packet will be sent to the router, router will process it. And during processing, what will router do?

**8:40:51** · Router will do the end Do the bitwise end between what?

**8:40:56** · Do you remember the concept?

**8:40:58** · Router will do the bitwise ending between what?

**8:41:03** · Exactly.

**8:41:05** · And when the NID will match, what will happen? Router will forward the packet to that network ID, or the net that network. Okay? So, this is what I mean by processing. Now, as soon as the router receive a packet, it will process, and during processing, it will decide at which network it has to forward the packet. And it will forward the packet with a modified header. With a modified header. Forward it with modified header.

**8:41:39** · And what will be modified? TTL will be decreased by one. Is it clear? So that at at one time infinite looping will be prevented.

**8:41:53** · Okay. Now what will happen if the TTL become one at the receiver?

**8:41:58** · Because receiver also have this network layer, physical layer, data link layer, network layer, transport layer, and application layer. You know, let's say we started with TTL value two. Receive TTL value two. And when it is forwarded to the receiver, the TTL value will be one. And when it will be received by the receiver, and you know, network layer will be reached, again modification will happen and TTL will layer will become zero.

**8:42:27** · During this point, if TTL become zero at the receiver, then it will be accepted. If TTL become zero before the receiver, then it will be discarded. ICMP packet will be sent to the sender that your packet has been discarded due to TTL limit reach.

**8:42:46** · Okay, is this point clear?

**8:42:48** · So those who have network layer, only they will be decrementing the TTL field. Okay. For example, here, if you have some LAN cables in between. Now LAN do not require network layer. So is LAN going to decrease the TTL? No. Will router decrease? Yes, because network layer will be reached there. Okay. So I think the TTL part is also clear. Now, we'll move to the next protocol. Okay? Similar to TTL, protocol is also of 8 bits.

**8:43:28** · Okay?

**8:43:29** · So, the 8-bit field tell us which protocol is encapsulated in the IP packet. Which protocol is encapsulated in the IP packet? So, if let's say protocol number is one, then we'll assume that it is ICMP. If it is If it is two, then it is IGMP. If it is 17, then it is UDP. If it is six, then it means TCP.

**8:43:57** · And at the time of traffic, at the time of traffic, some packets must be discarded and some must not be. And some must be uh maintained. Why so?

**8:44:08** · Because the property of these protocols are different. For example, \[snorts\] TCP is reliable.

**8:44:15** · TCP is reliable.

**8:44:16** · TCP will ensure that packet should not be lost. While UDP is not reliable. UDP do not care about the packet, it care about the speed.

**8:44:25** · So, what will happen?

**8:44:27** · If congestion happens, if at the time of traffic, some packet must be discarded. And \[snorts\] we'll notice at the protocol field. If the value is six, which means it is TCP, then we have to ensure that this packet should not be discarded. If the let's say protocol value is one, which means it is ICMP, it's just a error message some going back to let's say some sender. It's not that important.

**8:44:54** · So, the ICMP will be discarded first. And then the IGMP will be discarded. And then UDP will be discarded. And the last priority will be given to TCP. Is this clear? So, the order in in the router eliminate the datagram from the buffer will be this. ICMP packet will be the first to be discarded. Why? It is just an error message. Okay, so this is what protocol means.

**8:45:24** · Is it clear?

**8:45:31** · Now, let's move to our next section of What is the next section?

**8:45:36** · We have completed protocol. The next section is header checksum and it is of what?

**8:45:42** · 16 bits.

**8:45:45** · Header checksum 16 bits. Okay, \[snorts\] we have learned about the checksum.

**8:45:54** · What is checksum?

**8:45:55** · We have discussed already. Let's discuss again. Let's say we have data of 011110111100000000 or 0110. Okay, let's say this is the data. What will happen? We'll divide it into four. Let's say K equals to four.

**8:46:13** · Okay, now what we will do?

**8:46:15** · What is the number in uh decimal? It is seven. What is this in decimal? It's 11. This is 12. This is zero \[laughter\] and this is six. So, what we will do in checksum? We will sum them all. It will be 36 or Yeah, 36. Okay, so the checksum will be 36. Now, if any of the bit is changed, for example, it's it becomes zero to one or one to Let's say this become zero to one.

**8:46:41** · In that case, this will not remain 36.

**8:46:44** · So, what will happen?

**8:46:51** · This will be sent to the receiver.

**8:46:53** · What receiver will do?

**8:46:54** · Receiver, along with the checksum, what receiver will do? Receiver will calculate the checksum again. If receiver also calculate 36, which means there is no error. If receiver calculate something else, let's say some error happened and this bit change from 1 to 0. Now, what will happen? This will become eight and this will become 32.

**8:47:16** · Now, the 32 do not matches with 36. In this case, the error has occurred. What we'll do?

**8:47:22** · We will calculate the checksum for header only. Because the complete part will be covered in the TCP checksum. So, you can understand it by this analogy. Let's say we create a truck, Optimus Prime.

**8:47:40** · So, what will happen?

**8:47:42** · The truck driver will only care about their stuff. They do not bother about what's there in the cart. Okay? So, this is like uh caring for the header part only. You're caring for their cabin only. Okay? So, it will be calculated for header only. And, you know, header changes at every router or every uh intermediary node.

**8:48:06** · Whichever include network layer. Why so?

**8:48:07** · Because TTL value is changed. As TTL value is changed, which means the complete checksum will be changed. And if the whole checksum is changed, it must be calculated at every router. So, it is calculated for header only and will be calculated at every router. Okay? So, the next will be source IP and the destination IP. Source IP, destination IP.

**8:48:33** · Okay?

**8:48:34** · Let me say it formally. As you already know, we have discussed what source IP and destination IP mean in the first module only. So, the 32-bit These are of 32-bit. These 32 bits defines the IP address of the source. This field remain unchanged during the time the IPv4 datagram travel from source host to destination host.

**8:49:01** · Okay?

**8:49:03** · And these source IP and destination IP remains unchanged. The 32-bit field define the IPV4 address of the destination. This also remain unchanged during the time that IP datagram travels from source host to destination host.

**8:49:18** · Is that point clear?

**8:49:20** · I haven't spoken in a very bookish language. You already know what source IP and destination IP is. Okay. Now, one table is important. Let me draw that table.

**8:49:31** · Not changed.

**8:49:34** · Maybe.

**8:49:36** · And definitely changed.

**8:49:38** · Okay.

**8:49:41** · So, what is definitely changed?

**8:49:43** · You have to tell.

**8:49:44** · What is definitely changed among those uh sections of IP header which we have discussed?

**8:49:53** · TTL. Yes, time to live. And header checksum. Yes. We have just discussed this.

**8:50:00** · And what is not changed?

**8:50:03** · Start with the first. Is version changed?

**8:50:06** · Do version changes? No, it do not change. It do not change. Does services or header length change? No, header length is also not changed. Do services changes? No, services are also unchanged. What about identification number? No, they are also not changed. Don't fragment. No, they are also fixed. Well, more fragment maybe changed.

**8:50:30** · Because for the first packet, it could be one and for the last packet it could be zero. So, more fragment may change. What about protocol? Protocol also remain fixed. What about source IP and destination IP? They do not change. Okay. See, you can transfer this header length into here. Okay. What about total length? Well, total length may change as options can change. Okay? So, total length more fragment, you can write fragmentation offset, these may change.

**8:51:06** · Well, which of the section which will be definitely be changed? TTL and header checksum.

**8:51:12** · Okay? Now, what about options, the last section?

**8:51:16** · What about option?

**8:51:19** · Okay? So, the full header the full header is divided between two part, the mandatory part and the options. The mandatory part is of 20 byte and options is of 40 byte. We have already discussed this. Okay? You can also call mandatory part as fixed part and options as variable part.

**8:51:39** · Okay?

**8:51:40** · The fixed part is 20 byte long and the variable part is a maximum of 40 bytes. Okay? Now, what are there in the options? So, options we have we'll discuss them all, strict source routing.

**8:51:56** · We have loose source routing. What is strict loose source strict and loose source routing?

**8:52:02** · A strict source routing means that we are giving exact path that a packet should follow. For example, this was our segment which we received from the transport layer and we added a header here. Okay? So, this is our header. Okay? Now, what What do you mean by strict source routing? That we are telling the driver that you have to follow this strict path only.

**8:52:32** · This path only. And if there is some problem in the path, let's say some construction work is going on, you do not change another path, you tell me as the sender. And how does the driver tell me? With the help of ICMP packet. So, what I'm telling? Let's say this is sender, and this is receiver. These are the routers.

**8:52:58** · Okay?

**8:52:59** · Or I should make like this path.

**8:53:02** · Now, sender has specified strictly that you have to follow this path. But, what happened?

**8:53:10** · There is some problem in this link. So, what will uh this router do? Router will send ICMP packet that there is a problem in the link, and you told me to follow this path only. So, here's the problem. So, ICMP packet will be delivered to the sender. But, route will not change. Okay? The route will remain same.

**8:53:33** · So, in strict source routing, we exactly or specifically tell that these these uh routers should be encountered, or this path should be followed. While in loose source routing, what we'll do? We will say that you have to encounter or you will cross this router. Okay? Then, if you have options, you can follow whatever option you want. These router are fixed that these should come in between. And for the remaining router, it's your choice.

**8:54:05** · And what about strict source? That each and every part is already decided.

**8:54:10** · And source will decide the route, okay?

**8:54:11** · Strict and loose loose, is it clear?

**8:54:15** · What about record routing?

**8:54:21** · What about timestamp and padding?

**8:54:25** · So, these are the features offered by options. Okay. So, we have already discussed what is source routing, strict source routing. So, we started with source router one, router two, router four, and then receiver. Here we have router three. So in strict source routing we exactly tell which routers you have to follow. Okay, so the packet will follow the same path. Okay, and will reach the receiver.

**8:54:58** · In loose source routing we tell the packet that you have to encounter or you will go through the path of R1. And then later you can follow whatever path you want. So loose is similar to strict source routing but it is less rigid. Each router in the list must be visited but the datagram can visit other routers as well.

**8:55:23** · Is it clear? So what about record routing? What is record routing?

**8:55:30** · Record routing.

**8:55:33** · From whichever router the datagram passes through, the datagram will record that I have passed from this router.

**8:55:40** · Is it clear? So record route options is used to record the internet routers that handle the datagram. Okay, so a packet reached router one first. So packet going to register that I have gone through router one. And then when it is went to router two, then the packet going to register that I have now reached router two. So this is what record routing is. Record route options used to record the internet routers that handle the datagram.

**8:56:11** · So it can list up to nine router addresses. This is a fixed limit.

**8:56:16** · Addresses.

**8:56:19** · Okay.

**8:56:22** · Is it clear?

**8:56:24** · Okay, so we have discussed this, this, and this.

**8:56:27** · Now what about timestamp and padding?

**8:56:30** · Somehow the recording was paused here. Let me speak again.

**8:56:34** · During the timestamp what we do, we calculate the delay. For example, a packet arrived at 9:05 a.m. and it leave at or left at 9:10 a.m. So, the delay will be of 5 minutes. So, to calculate the delay at each router, we are using timestamp. What about padding?

**8:56:51** · For example, we studied that for the header length if it is 32 byte, we write at we write as eight. If it has 20 byte, we write it as five. If it is 60 byte, we write it as 15 at the section of this header length. Okay? Now, what if instead of 32 byte, it is 30 byte. So, in that case, we are not going to write 7.5 there.

**8:57:22** · We will add two byte as a padding. We will add these two byte as a padding. And then it will become 32, and then we will write eight there. Okay? So, this was the padding part. Now, we have discussed the whole uh IPv4 header in one go. Let's discuss that again.

**8:57:38** · So, in version, what we do?

**8:57:41** · We write as either four or six in binary to represent IPv4 and IPv6. What about header header length?

**8:57:50** · Header length have the range of 5 to 15. It's of 4 byte. It could have range from 0 to uh 15, but the minimum header length should be 20. And the scaling factor is of four. That's why it began from five and ended at 15 because the maximum header length could be 60 from using 40 bits of 40 bytes of options.

**8:58:14** · Okay? For the services part, we had three bits of priority, four bits for the services, DTRC, delay, throughput, reliability, and cost. And the last bit was useless. What about total length? Total length of 16 bit that represent the data plus the header part. The maximum amount of data that can be there in the network layer will be 65515. Assuming that the header is minimum consisting of mandatory part only.

**8:58:46** · What about identification bit? It is used to identify the different fragments of the datagram. Okay. What about flag?

**8:58:56** · The first bit is useless. Don't fragment suggest that the sender do not allow the routers or intermediary nodes to divide the complete packet into fragments. More fragment means it could be zero or one. Zero means this is the last fragment and one means that there are more fragments to come. What about fragmentation offset? It represent the number of bytes of data that is before transferred to a particular fragment.

**8:59:24** · For example, fragment one, fragment two, fragment three. If you are talking about the fragmentation offset of this fragment two, then you will be writing the number of bytes transferred before fragment two, which means number of bytes of data that is transferred in fragment one. What about TTL?

**8:59:41** · TTL is used to avoid infinite looping.

**8:59:44** · It will be of eight bit only. What about protocol?

**8:59:49** · Again eight bit. It will be used to describe or it is it is used to uh prioritize which all packets that can be discarded in the case of congestion or in the case of traffic. For example, TCP packet is way more important than ICMP error packet. So, we are going to discard ICMP packet first, then in the last the TCP packet.

**9:00:10** · Okay. What about header checksum?

**9:00:14** · It is used for error control for the header part only. And header checksum is calculated at every router. Why? Because header is changed at every router. How so? TTL is changed. TTL is decremented.

**9:00:27** · Okay.

**9:00:27** · And we have source IP, destination IP, and in the end options. In options, we discussed about strict source routing in which there is a strict path given. What about loose source routing? In which it is given that these many routers you must cover and the remaining it's on your choice. Then we discussed about padding. We have just discussed that two bits will be added so that a proper number will be formed. Then we discussed about timestamp.

**9:00:58** · Timestamp is used to calculate the delay part. And then in the end, record routing. We can record that from the packet has encountered which of the routers. Okay? And the limit is nine. We can record nine routers. So, this was our module for IP header and fragmentation. But before ending this module, let's discuss more about fragmentation.

**9:01:25** · Fragmentation offset.

**9:01:28** · Okay? We can uh discuss it with the help of an example. Suppose the IP datagram size is of uh datagram size is of 1,000 bytes. And this arrives at a router. Okay? And the router has to forward a packet on a link whose uh MTU whose MTU is 100 bytes. Okay? Assume that the size of IP header is as you already know, but it's okay that I should mention 20 byte.

**9:01:59** · Okay? The header is 20 byte. Options are not used. Now, tell me the number of fragments that IP datagram will be divided into for transmission. Okay? Now, there's one thing which I have not discussed in the fragmentation offset. We will address that part in here. For example, here we have we have the datagram size the datagram size of 1,000 byte, which means the data is 980 and the header is 20.

**9:02:32** · Okay? And this is transferred to a router which has MTU of 100 byte only.

**9:02:38** · Okay?

**9:02:40** · And then it is sent to the receiver. Now, what happens what happens?

**9:02:46** · How many number of fragments will be there? So, 80 and 20 80 and 20. So, in this manner it will be divided. Now, we want let's say X fragments which has 80 byte of data. And how many fragments we are going to require so that 980 will be the total data transferred. So, 980 divided by 80 this will be 12.25.

**9:03:15** · Now, see here. 12 with with 12 packets with 12 packets or with 12 fragments, how many data you can transfer?

**9:03:26** · How many bytes of data you can transfer?

**9:03:28** · 12 into 80 this is 960. Now, in the last fragment you require 20 byte of data here and then 20 byte of header. So, how many total fragments you require?

**9:03:43** · You should apply the ceiling function for this 0.25. So, we require total 13 fragments.

**9:03:51** · Till now, it's clear?

**9:03:52** · This was not a hard question. Is it clear? Now, one thing which I want to tell that the scaling factor the scaling factor for the header length was four, you know.

**9:04:06** · There is another scaling factor or you can call it as D scaling factor, whatever you want to call for fragmentation offset. The similar concept, fragmentation offset. Let's say if for this this was the case that we have already discussed. So, if you're calculating the fragmentation offset for this packet two, you will be looking at the amount of data.

**9:04:27** · We are not talking about the size of datagram. We are talking about the amount of data, which means this part only this packet one has transferred. So, the number of bytes before this fragment. So, let's say the number of bytes are 800. So, what you will write in the fragmentation offset of this two, you are not going to write 800, you are going to write 100. So, eight will be the scaling factor.

**9:04:51** · Okay? So, if you find that the fragmentation offset is 100, then you're going to assume that the scaling factor is eight. So, 800 will be the amount of data that has been transferred before this particular segment. Okay? So, the scaling factor for fragmentation offset will be eight.

**9:05:09** · Good morning, class.

**9:05:14** · In the last lecture, we have addressed the doubts from the DPV of IP header and fragmentation.

**9:05:22** · Okay?

**9:05:24** · So, as promised, with this lecture, we are starting our new module of TCP UDP. But, before moving on to the TCP UDP part, we must first understand the basic connectionless and connection-oriented protocols.

**9:05:44** · So, can you guess what do you mean by connectionless and connection-oriented?

**9:05:53** · Yes.

**9:05:54** · Everyone would guess this first. Everyone will guess that connectionless and connection-oriented means that we are talking about the physical connection. Connectionless means that we are talking about wireless, and connection-oriented means that we are talking about the wired connection. But, you know, we are not talking about the physical connection here. We are talking about the logical connection. Okay? So, let's say this is a sender and this is a receiver.

**9:06:28** · Okay?

**9:06:30** · So, each and every frame sent by the sender to the receiver if they are somehow logically related, then I'll say it is connection oriented. And if the frames sent from the sender to the receiver are independent, then I'll say it is connectionless protocol. Okay? So, let me speak in the formal way. Let me define in a formal way.

**9:06:55** · Connectionless protocol means frames are sent from one node to another without any relationship between the frames. Each frame is independent, which means there is no connection between the frames. It does not imply that there is no physical link between the nodes. Okay? We are not talking about the physical connection here. We are talking about the logical connection here.

**9:07:20** · Okay? So, what about connection oriented?

**9:07:24** · In connection oriented a logical connection should be first established between the two nodes. Okay? We call it as setup phase. See, this is important. We call it as setup phase where a logical connection is first established. Logical connection is first established. Okay? After all the frames that are somehow related to each other are transmitted, and we call it as transfer phase. And then, the teardown phase where the logical connection is then terminated.

**9:08:00** · We connect, we transfer, we terminate.

**9:08:03** · The frames are numbered and sent in order. So, one another specialty of connection oriented protocols is that frames are sent in order. Why so?

**9:08:18** · Because they are related with each other. They can be numbered like this is frame one, this is frame two, this frame three and four. This is a relation. While in connectionless, there is no relation between the frames. Frames can be received out of order.

**9:08:37** · Okay. So, even if in the case of connection oriented, the frames are received or the frames are not completely received, there are some frames remaining, then receiver will wait and will rearrange them and then deliver to the network layer in order.

**9:08:59** · Are you getting the point?

**9:09:02** · In order delivery to the upper layers is important in the case of connection oriented protocols. While in the case of connectionless, receiver may receive out of order.

**9:09:14** · Is it clear?

**9:09:16** · So, here connectionless and connection oriented means we are talking about the logical connections, not the physical one. Okay. So, now we are ready to start with transport layer.

**9:09:31** · Layer services.

**9:09:36** · Okay. So, transport layer is responsible for process to process process to process or you can also call it as port to port or end to end delivery. End to end communication, which involves delivering message directly to the specific application or process running on the computer.

**9:09:58** · How we are going to identify the process with the help of port number?

**9:10:02** · Okay. We have learned that network layer manages host to host communication ensuring message reach the correct destination on the computer. Okay? Message reach the correct destination on the computer.

**9:10:18** · However, how to forward it to appropriate process?

**9:10:21** · That part is handled by transport layer. We have already discussed all of these things uh before when we discussed about the port numbers.

**9:10:31** · Okay?

**9:10:33** · Clear?

**9:10:37** · In connection in transport layer, we have connection-oriented protocol, connection-oriented, and connectionless, too. In connection-oriented, we have the TCP, Transmission Control Protocol.

**9:10:52** · Transmission Control Protocol.

**9:10:56** · Okay?

**9:10:59** · So, what does TCP do? It establishes a connection with the destination transport layer before the data transfer. We have already discussed that. After the transfer, connection is terminated. We have discussed this. We have setup phase, transfer phase, and termination phase. Okay? And TCP, it is known as a reliable protocol.

**9:11:20** · Reliable protocol. Connection-oriented and reliable is what TCP. Okay?

**9:11:26** · And we have connection-oriented, we have UDP. The full form is User Datagram Protocol. Okay? It is connectionless and non-reliable, but it is fast as it has less overhead.

**9:11:46** · Okay?

**9:11:47** · It stream It treat each segment as independent packet. As it is connectionless, so each frames or each segment is will be considered as independent. And there is no setup phase, teardown phase, so less overhead. It is reliable. Oh, sorry, it is unreliable, non-reliable, but it is fast.

**9:12:12** · Is it clear?

**9:12:14** · Okay. So, in transport \[clears throat\] layer, the key facilities or the key uh responsibilities is flow control and error control. And the most important part is reliability.

**9:12:34** · Okay?

**9:12:38** · So, if I tell you the summary, we studied connectionless and connection-oriented. Connectionless means there is no uh relationship between the frames sent from sender to receiver. Receiver can receive out of order. And connectionless protocol from the transport layer is UDP, while connection-oriented means the frames have relationship among them. Receiver will send in order fashion to the upper layers. And the transmission control protocol is the connection-oriented protocol in the transport layer.

**9:13:18** · Till now, is it clear?

**9:13:20** · Flow control, error control, congestion control also. It is actually included in flow control is the responsibility of transport layer.

**9:13:31** · Okay?

**9:13:34** · We have already discussed about the port numbers. Were you absent in the class?

**9:13:39** · We have discussed this, I think, in the IP addressing somewhere about the port number.

**9:13:50** · Okay. So, let let me repeat again. What happens?

**9:13:55** · For example, in a computer, there are several processes.

**9:14:01** · So, a device received a message. How will the device know that which process is demanding that message?

**9:14:08** · Or for that or for which process is the message received?

**9:14:13** · That is identified with the help of port number. So, port number is useful in identification of the process. It is a 16-bit number. It is a 16-bit number from 0 to 1023. As the range of 16-bit number is 0 to 65535, so from 0 to 1023, they are well-known port numbers. And the remaining are used by the normal users.

**9:14:42** · The famous ones that you should remember is of FTP, of DNS, of Telnet, SMTP, DHCP, POP, POP3, IMAP, HTTP, HTTPS, okay, SNMP. You can remember the port number of all these if you want. For HTTP, can you even remember what was it? 80. For HTTPS, I remember I have told you to find the port number of HTTPS as a homework.

**9:15:21** · Did you find?

**9:15:24** · Yes.

**9:15:26** · 443. What about POP3?

**9:15:31** · 110. What about IMAP? I remember it's it's like 143. What about SNMP? 161. FTP, it has two, 20, 21. What about DNS? 53. What about SMTP? 25.

**9:15:47** · What about DHCP?

**9:15:50** · It has two, 67 and 68.

**9:15:53** · What about Telnet? Do you remember?

**9:15:56** · 22.

**9:15:58** · Okay? These are the famous ones you can remember. Okay? So, 0 to 1023, these are well-known port numbers assigned by IANA. See, these are used by servers. These are used by servers to identify well-known process. For example, uh port number 80 means you are requiring a web service. So, HTTP will be there. So, these numbers are standardized and used to ensure what I should say, client-server communication.

**9:16:31** · There are registered ports. The remaining are from 1024 to later. They are not controlled by the authorities and can be registered to prevent duplication. That's it.

**9:16:42** · Okay?

**9:16:46** · Now, when we are talking about port numbers, I think we should talk more. We should talk about socket address also. So, let's discuss a new concept, socket address. So, you know, socket address is nothing but IP address with port number.

**9:17:10** · With port number.

**9:17:13** · For example, uh IP address is 200 {dot} 23 {dot} 56 {dot} 8 and port number is, let's say, 69. So, when you just club them, they become the socket address. Okay? It's nothing new. IP address and port number, when they are written together, it act as a socket address.

**9:17:35** · Okay?

**9:17:37** · So, that's why I encourage you to ask doubts. If this guy has not asked what is port number, then you would have not known the concept of socket address.

**9:17:52** · Okay?

**9:17:53** · So, is it clear till now? If you have any doubt, you can ask. Okay. Now, we'll move toward the TCP header. Part We have already discussed what IP header is. We discussed the sections. In the same way, we'll begin with TCP header.

**9:18:14** · So, let's begin.

**9:18:17** · We have source port address. Here, we talk about port, not the IP address. Source port address and destination port address in the first row. of 16-bit each. 16-bit 16-bit. So, the first row is again 32-bit, which means four bytes. Okay. The second bit is sequence number. You know, this is alone 32-bit. And then, acknowledgement number. This is again 32-bit. So, again four byte four byte.

**9:19:00** · Okay. Now, what about fourth row?

**9:19:04** · Fourth row is, you know, a bit lengthy or we have header length four bit. We have reserved eight bits. Not eight bits, six bits. And then, we have the flag bits.

**9:19:25** · Urgent pointer.

**9:19:27** · Acknowledgement.

**9:19:30** · We have push flag.

**9:19:32** · We have reset.

**9:19:33** · We have send flag. And we have finish flag. Okay? And then, we have a window size of 16 bits. So, total 6 and 4 10 and 10 and 6 16. So, this is total again 16 and this is 16. 16 16 32.

**9:19:53** · 4 bytes again.

**9:19:55** · And in the end the last row you have checksum of 16 bits. And you know, this is not header checksum. This is now complete checksum data plus header. And we have urgent pointer of 16 bits. So, again 4 bytes. So, these are all the mandatory parts. These are all the mandatory parts. Again 20 bytes. Five rows all mandatory, each of 4 bytes. So, the total will be 20 bytes.

**9:20:32** · Okay.

**9:20:34** · So, in the end you have options again of 40 bytes. Options or padding.

**9:20:42** · Okay.

**9:20:43** · Now let's understand one by one. So, we have discussed uh the source port address and destination port address. As transport layer is process to process uh communication uh layer. So, the process from the sender size sender side will be representing the source port address and the process receiving at the destination side will be the destination port address.

**9:21:11** · Okay.

**9:21:12** · Now what about byte numbering in TCP?

**9:21:18** · Byte numbering in TCP.

**9:21:24** · Okay.

**9:21:26** · TCP assign unique number to each data byte in a connection. Each data byte a unique number is assigned.

**9:21:33** · What happened in the IP protocol?

**9:21:37** · The IP was packet oriented protocol.

**9:21:41** · The TCP or the transport layer is what?

**9:21:44** · Byte oriented. So, what happens?

**9:21:47** · TCP assign a unique number to each data byte. Unique number is assigned to each data byte. Okay, we uh the numbering is independent in each direction. Okay. So, we do not start numbering from zero. We do not start numbering from zero. And you know, we have we have 32-bit to number. Okay, so we do not start from zero and end at 2 raised to power 32 minus 1. We start at a random number.

**9:22:25** · We start at a random number. Let's say we started at 1 1 1 1. Who is stopping? We can start with 1 1 2 3. You can choose any random number and you can start numbering from there.

**9:22:38** · Okay, till now is it clear?

**9:22:39** · So, what I'm saying TCP assign a unique number to each data byte. Unique number to each data byte. And the unique number is of 32-bit. So, how many total numbers can be possible? 0 to 2 raised to power 32 minus 1. And you do not start numbering from zero. You start with some random number.

**9:23:02** · Okay?

**9:23:04** · So, why do we do so? Why do we number each and every byte? To help maintain order and ensure reliable delivery in each TCP connection. You know, TCP is very strict on reliability. So, we are uh you can say we are focusing on each and every data byte. So, that none of the data byte can be lost. That's why we are numbering each and every data byte.

**9:23:27** · Okay?

**9:23:29** · For this, we have a sequence number field in the TCP. Okay? We have discussed the source port address, destination port address. We are discussing this sequence number. So, for byte numbering, we have the sequence number field in the TCP. It is a 32-bit field that specify the number assigned to the first byte in a segment.

**9:23:51** · Okay?

**9:23:52** · So, the range will be from 0 to 2 raised to the power 32 minus 1 by starting from random number. So, during the connection setup, this all happens during the connection setup. Okay? Each side, each side, which is sender and receiver, each side randomly generate a number to prevent duplicate data. Duplicate data and it's also important for the security part that we start with a random number.

**9:24:21** · So, receiver also start with some random number and sender also start with some random number. Okay? To number their bytes. And the next segment is calculated as the sum of the current segment plus the number of byte in the segment. For example, 1 2 3 4 1 2 3 4 5. Let's say five bytes are there in the first segment. So, first segment we started numbering with 1 0 1 0.

**9:24:52** · The next will be 1 0 1 1 1 0 1 2 1 0 1 3 and then 1 0 1 4. Now, the next segment 1 0 1 5. So, we will see like this.

**9:25:09** · The segment one, the this is segment one, this is segment two. So, segment one has the numbering of 1 0 1 0, while segment two has the numbering of 1 0 1 5. Is it clear?

**9:25:21** · So, each data byte is numbered.

**9:25:26** · Okay?

**9:25:28** · What happened in the IP case? In IP case, we count the packet. This is This was packet one. This was packet two. Okay? This was the case in the IP layer. But here, we are counting each and every data byte. That's why we are naming it like this.

**9:25:51** · Okay? The sequence number of next segment is calculated as the sum of the current segment 1010 and the number of bytes in that segment. How many bytes? Five bytes. So, 1015. This is the number.

**9:26:04** · Is it clear?

**9:26:07** · Is the sequence number part clear? In IP, let me write. In IP, every packet is counted. While in transport layer, every byte is counted. What can you guess about the DLL? Here, every bit is counted.

**9:26:36** · Okay?

**9:26:42** · Is it clear?

**9:26:43** · Now, we are moving to on to the next concept of wrap-around time. Wrap-around time. So, although the TCP numbers ranges from 0 to 2 raised to power 32 minus 1, but still, this is not an unlimited range.

**9:27:00** · Okay?

**9:27:02** · What is 2 raised to power 32? It's 4 GB. It's 4 GB. So, TCP allow sequence number to wrap around and start from zero once the maximum number is reached. Are you getting the point? Let's say, if you're starting from zero, you are starting from zero, and then 1 2 3 4 each byte is getting numbered.

**9:27:26** · Okay? And then you end with 2 raised to power 32 minus 1. This is the last byte you can number. Now, what will happen?

**9:27:33** · You can go again start with the zero. Okay? So, that continuous data transmission happens. Is it clear? TCP allows sequence number to wrap around and start from zero once the maximum number is reached. Enabling continuous data transmission. Okay, we call it as wrap around time, the time taken during this whole thing. So, the time taken to exhaust all 2 raised to power 32 sequence number.

**9:28:06** · These are 2 raised to power 32 sequence number. So, the time taken to exhaust all these 2 raised to power 32 sequence number and wrap around to zero is called wrap around time.

**9:28:17** · Is it clear?

**9:28:19** · So, is it a fixed thing or it depends?

**9:28:25** · Is it a fixed thing, the wrap around time is fixed or it depends?

**9:28:34** · Obviously depends, man. Depends on what?

**9:28:38** · It depends on the bandwidth. Depends on the bandwidth.

**9:28:44** · Now, can you guess it is directly dependent or inversely dependent?

**9:28:50** · Yes. Yes, it's inversely proportional to So, you can write wrap around time is inversely proportional to the bandwidth. You can write the formula wrap around time is equals to the total 2 raised to power 32 divided by Let's say the bandwidth is X bytes per second, so divided by X. Is it clear? So, this is what wrap around time is.

**9:29:18** · Wrap around time is equals to 2 raise to power 32 divided by bandwidth in bytes per second.

**9:29:26** · Is it clear?

**9:29:29** · Okay. Now the concept of lifetime of a TCP segment comes in. Lifetime of TCP segment. So it is fixed. The lifetime is generally fixed. It do not depend upon the bandwidth. 180 seconds or 3 minute is generally considered lifetime of a TCP segment. This is the maximum time a TCP segment is expected to take to reach the destination. It do not depend upon the propagation delay. Do not depend upon the bandwidth. Nothing. This is fixed.

**9:30:02** · This is the maximum limit that is set that this will be the time at max taken by a TCP segment to reach the receiver.

**9:30:13** · Okay.

**9:30:15** · Now what will be the consideration for the wrap around? Why I'm discussing this lifetime here?

**9:30:19** · So we will discuss two scenarios. The first one and the second one. The first one is when there will be no problem. And when there will be a problem. If you think you can guess where I'm heading. If wrap around time is generally greater than lifetime \[clears throat\] of a TCP, then there is no issue with reusing of sequence numbers. Because uh till till this will wrap around and and will reach back to zero.

**9:30:59** · The packet will be already dead. The packet will be already dead because wrap around time is greater than the lifetime of the packet. So there is there will be no issue for reusing the sequence number, the duplication problem, nothing. If wrap around time is greater than the lifetime itself, then there will be no problem.

**9:31:22** · What if lifetime is greater than wrap around time, which means the packet is still alive while we are reusing again?

**9:31:32** · If wrap around time is lesser than the lifetime, then the risk of receiver encountering a duplicate packet is it still there?

**9:31:42** · And so it will lead to confusion.

**9:31:45** · Are you getting the point?

**9:31:47** · So this was the concept of sequence number. Let's move to the next, acknowledgement number.

**9:31:55** · Okay?

**9:31:57** · Acknowledgement number.

**9:32:02** · So if the receiver has received, let's say, byte X, successfully received byte X from the sender, then it defines X + 1 as the acknowledgement number. And you know, acknowledgement and data can be piggybacked together. So when receiver will send the data, it will also send that I am expecting the next byte as I have already received the byte X.

**9:32:29** · Is it clear?

**9:32:32** · And acknowledgement number is cumulative, which means the party or the receiver takes the number of the last byte that it has received safe and sound, adds one to it, and announces this sum as the acknowledgement number.

**9:32:46** · Is it clear?

**9:32:48** · So you have to remember one line that piggybacking is possible. Piggybacking is possible. What do you mean by piggybacking? That data and acknowledgement can be sent together.

**9:33:00** · Okay?

**9:33:02** · So this was the concept of acknowledgement number. In the next lecture, we'll begin this row. Header length, reserve, this flags and then window size, check sum, urgent pointer we'll discuss in the next lecture. In the last lecture we have studied till acknowledgement number. In this lecture we'll begin with header length. Now this header length is exactly similar to what we have studied in IPv4.

**9:33:31** · Okay? So here also this is four bit. So the range can be from 0 to 15, but you know the mandatory header should be of 20 byte. And the maximum could be of 60 byte. So you can scale, but this will be into four. This will be five into four. So the range will be from 0 to not from 0 to 15, but from five to 15. And the scaling factor will be four.

**9:34:00** · Okay?

**9:34:03** · Okay. So this was header length. Now checksum. In the IP header we have studied header checksum, which means this was the truck. IP header was giving security for this part only, the header part. But this checksum is giving security for the full. Because this time it's not header checksum, it's checksum, which include data plus the header part. And you know, there's one special thing also. The special thing is IP pseudo header.

**9:34:43** · So it not only provide the security for or the error control mechanism for data and header part, but it's but it also include the IP pseudo header. What is IP pseudo header? It's like a simpler or the minimalistic version of uh IP header. IP pseudo header include the source IP, the destination IP, the reserved, protocol, and the length.

**9:35:07** · Okay?

**9:35:08** · Here, this is TCP header, and the data part is the TCP data.

**9:35:16** · Is it clear?

**9:35:17** · So, this is what checksum here is. In IP, the checksum was just for the header part. But, here, the checksum is for data, header, and pseudo IP header, also.

**9:35:32** · Is it clear?

**9:35:34** · Okay. The next was of window size, window size, or we call we also call it as advertisement window. Well, this is a very important concept for the flow control mechanism. This was for the error control. And in transport layer, and this is important for flow control in transport layer. Okay? So, the basic idea of this is the sender should not send what receiver cannot receive.

**9:36:04** · So, this field defines the size of window in bytes that receiver have reserved for the incoming data from the sender. Is it clear? Let me repeat. For flow control mechanism, what is the basic idea? That sender should not send what receiver cannot receive. So, here, the window size or the advertisement window is the field that defines the size of window in bytes that receiver has reserved for the incoming data from the sender.

**9:36:31** · Okay?

**9:36:33** · And this is of 16 bits. Which means the maximum window size can be 65535 bytes. Okay? So, this value is normally referred as the receiving window, which is determined by the receiving party.

**9:36:54** · Okay?

**9:36:56** · And whatever be the window size or whatever be the window that receiver advertise, the sender must obey the dictation of the receiver in this case. Okay? And you know, this window size is not some static value. It dynamically change based on what sender send to the receiver. Okay? So, it is like uh receiver saying dynamically to the sender that in the current time, I have this much space to uh accept your data and to process it.

**9:37:30** · Do not send Do not send the data greater than this space. Okay? So, this is what advertisement window is. I hope the point is clear.

**9:37:41** · Okay?

**9:37:43** · Okay. So, what will happen in the case when receiver will say, "I do not have any uh advertisement window or my advertisement window is zero byte." So, sender ask the receiver, "What is your advertisement window?" or receiver advertise that this is my advertisement window and in that case it advertise zero byte as the window size. So, what will happen? Will sender uh lose hope and will stop? No. This doesn't happen. Persistent timer comes in.

**9:38:14** · Persistent timers. So, sender is not going to lose hope. It will going to ask again after some time. So, to deal with zero window size deadlock situation, TCP uses what? Persistent timer. Is it okay? So, when the sending TCP uh receives an acknowledgement with a window size of what? Zero byte, it start a persistent timer. So, when the persistent timer goes off, when it goes off, it's going to ask again.

**9:38:41** · Sender uh and how does it ask? By sending a special segment called probe. What do we call it as? Probe. So, this segment contain only one byte of new data. It has a sequence number, but this sequence number is never acknowledged. So, the probe causing the recei- receiving TCP to resend the acknowledgement which was lost.

**9:39:06** · So, what will happen?

**9:39:09** · As soon as receiver will advertise that it has zero byte, sender will ask again as the persistent timer goes off by sending a probe.

**9:39:17** · And how will receiver going to reply?

**9:39:19** · Receiver is going to reply its advertisement window.

**9:39:24** · Okay?

**9:39:27** · Is it clear?

**9:39:29** · Now, let's move towards the flags. First one is urgent pointer.

**9:39:34** · Urgent pointer.

**9:39:37** · First of all, there is difference between urgent pointer and urgent flag. Urgent flag is a value. Urgent flag is like zero or one. This urgent pointer value is only valid when the urgent flag is set. If it is not set, then this will this won't be considered. So, the urgent flag need to be set.

**9:40:01** · And in that case only, urgent pointer is considered active or valid. So, what does urgent pointer indicates? It indicates the position position of the last byte last byte of urgent data.

**9:40:15** · By sending this value to the sequence number. So, what will happen? Let's say if I uh give you some data and I'll say five byte is my urgent pointer value. So, I'll consider that the first initial five bytes are the urgent bytes and these bytes need to be taken special care of. So, this help identify which part of the data is urgent and need immediate attention.

**9:40:40** · Okay?

**9:40:42** · And you know, urgent flag is a part of control flags. TCP has six control flags.

**9:40:49** · Six control flags.

**9:40:51** · So, the first was urgent flag, we have discussed. The second one is push flag. So, what does push say? For example, uh when you are chatting with someone and you type hi. Now, when the push flag flag is not set, the TCP will wait until it has a substantial amount of data to send. For example, it Suppose you have one byte to send. Suppose you have one byte to send. Now, TCP can go with two approaches.

**9:41:19** · Either it can attach all the overhead and send just one byte, or it can wait for some time to receive more data from the upper layer protocols or upper layers so that when it has a substantial amount of data greater than uh a few or greater than a thresh- threshold Now, TCP find it worthy to attach all the overhead and send this whole over the network.

**9:41:47** · Okay. Are you getting the point? When push flag is set, even if one byte has to be sent, it will send one byte immediately. So, when push flag is not set it will wait for a step substantial amount of data to come from the upper layers. And after that, it will send. For the chatting applications. So, when you have to send, let's say, hi, you want that hi should be immediately be sent.

**9:42:12** · The layer should not wait for some more messages to take hi with it. Okay. So, this is the use of push flag. Okay, let me read. Uh push flag is used when immediate data delivery is required. What is required? Immediate data delivery, as I have said uh regarding the chat application. Immediate data delivery is required. Okay. So, by default, TCP will to accumulate enough data to fill a segment before sending it to minimize the network traffic.

**9:42:46** · Why so? Because of this overhead.

**9:42:51** · Look at this.

**9:42:52** · One byte of data and so much of overhead. One byte of data and so much of overhead. Are these packet looking good? No. They will cause traffic in the network. Okay? So, generally what TCP will do, it will wait for some amount of data enough to fill a segment before sending to minimize the network traffic. Okay? So, for interactive application like chat, for push flag need to be set as one. Okay? Third, reset flag.

**9:43:30** · Reset flag.

**9:43:33** · It is used to abort a TCP connection. Abort a TCP connection. In the case when something goes wrong or when the when the connection is deemed invalid.

**9:43:46** · So, in that case, let's say uh when something is wrong or the connection itself is deemed invalid. In that case, you have to abort the whole connection. So, for that, reset flag is used. So, it can be sent by the receiver when the packet arrives unexpectedly or when there is some error detected in the TCP connection. Okay?

**9:44:07** · So, this is to abort. It is sent by a receiver when the packet arrives with some anomaly. Okay?

**9:44:17** · Is it clear?

**9:44:18** · So, let me summarize. First one was the urgent pointer. Or urgent flag. Urgent pointer is the value. For example, five byte. This is the value. So, from the the first initial five bytes will be the urgent bytes that require immediate attention. And this 5-byte is insignificant or invalid if urgent flag is not set to one. Okay, so urgent flag the value of the this sets value of urgent pointer pointer valid.

**9:44:58** · What about acknowledgement? This value or this sets value of acknowledgement field as valid.

**9:45:09** · Okay, what about push?

**9:45:11** · It push the data. What about reset?

**9:45:14** · Reset.

**9:45:16** · It abort the connection or reset the connection.

**9:45:20** · Reset the connection.

**9:45:22** · Now, we have the two remaining flags, that is SYN flag and FIN flag.

**9:45:29** · Now, what is this?

**9:45:30** · So, to understand this, we need to understand the three-way handshake. Okay, but for the sake of the notes, I'll write for SYN, this is used to synchronize sequence number. Synchronize sequence number during connection. Okay, and for FIN, this is used to terminate the connection.

**9:45:50** · Terminate the connection.

**9:45:53** · Okay.

**9:45:54** · These initial two flags are to validate. If these are not set, then the value at the urgent pointer or the value at the acknowledgement field will be considered as garbage value. So, they must be set. Now, let's understand the three-way handshake of the TCP. Okay, so we have a client process. And then we have a client transport layer. Okay, and then we have a server transport layer and the server process.

**9:46:31** · Okay, so client process sends the This we represent as a active open.

**9:46:40** · Active open.

**9:46:42** · And this has connection closed.

**9:46:46** · Connection closed. Okay?

**9:46:49** · Here, as this is a server process, so server is like passive open. We'll understand what is the meaning of this active open and passive open. And then connection opened. So, passive open means server is sitting idle passively. And client, which is active, will send a request to the server for establishing a connection. And server will uh acknowledge the process or acknowledge the request and will establish the connection.

**9:47:23** · Okay? That's why server is passive and client is active. Now, how does that happen? We call this process as three-way handshake. Three-way handshake. Okay? It goes like this. SYN SYN plus acknowledgement and then acknowledgement.

**9:47:44** · So, what do we do?

**9:47:45** · We send a packet. We send a packet with sequence number as you know, we start with random 8,000. And we set the SYN flag as one. So, what we do? We want to synchronize. We want to establish a connection.

**9:48:02** · That's why the client transport layer of the client process is requesting the server transport layer of the server process that we want to open a connection. We want to establish a connection. So, this will be this packet will be sent to the server transport layer.

**9:48:18** · Now, server will again do what?

**9:48:22** · Server will choose is its own sequence number from the random. So, let's say 15,000 is chosen. And then acknowledgement as you know, acknowledgement is of the next expected byte. So, 8,001. And you know, it is acknowledgement and it is synchronization also, as you know. Uh sync sequence number, so this the first packet is SYN. So, SYN flag must be set as one, set as one. So, we have set the SYN flag as one.

**9:48:56** · Now, the second is SYN and acknowledgement from the receiver side. So, we have to set the SYN flag as one and acknowledgement flag as one also. Is it clear? And then what happened till now? The client has requested the server to establish a connection. Server has acknowledged it.

**9:49:19** · And now, what will client do?

**9:49:22** · Client will acknowledge the server's message that yes, I have received your message. So, what will client send back? Now, sequence number will be 8,001 as requested by the as requested by the server or the receiver. And in the end, acknowledgement number is one. So, acknowledgement flag will be set as one. And acknowledgement number will be it has received 15,000, so it will ask for 15,001.

**9:49:59** · Is it clear?

**9:50:02** · And you know, with it sender will also advertise its window. So, let's say 5,000 is the window. Here, sender will also advertise its window. Here, 10,000 is the window, receiving window. Okay? So, let's say if I am sending message to you, so I will advertise my window to you. Okay, sender advertises the window.

**9:50:24** · Okay?

**9:50:26** · So, let's say if I'm sending a message to you, I will also advertise that I have a receiving window size of 10,000 or 5,000.

**9:50:34** · Is it clear? Let me repeat again. So, what what do we do?

**9:50:38** · This is client, this is server. Client sends SYN. It set the SYN flag as one, selects a random sequence number, let's say 8,000. Now, server has received the SYN request that there is some client who want to establish a connection.

**9:50:56** · Server will acknowledge that, and server also want to establish a connection. Why so?

**9:51:02** · Because, you know, in the first lecture we have studied that this is two-lane thing. Because between sender and receiver, between sender and receiver, when sender is sending to the receiver, this is sender, this is receiver. And when receiver replies to the sender, then this becomes sender and this becomes receiver. So, connection should be established both way. That's why here client is establishing the connection.

**9:51:34** · Server acknowledges it.

**9:51:36** · Yes.

**9:51:37** · And then server also asks to establish a connection. That's why SYN is sent. And then client acknowledges it. Now, two-way connection has been sent. Two-lane connection has been sent. And what is the process? Three-way handshake. The first handshake, the second handshake, and the third handshake.

**9:51:56** · Is this clear?

**9:51:58** · So, what happens initially?

**9:52:00** · Client sender is sends SYN packet to the server. Server replies with SYN plus acknowledgement of the packet which client has sent. And then in the third handshake, or in the third way, uh what will client do? Client will acknowledge the SYN packet received by the server. I hope the point is clear.

**9:52:22** · So, this was the case of connection establishment. What about connection termination? The same thing will happen, but this time now, instead of SYN, consider SYN as a request to establish a connection and FIN as a request to terminate the connection. So, what will client do? Client will send a SYN packet asking the server that I want to terminate the connection.

**9:52:44** · Server will say, "Okay, if you want to do so, I also want to terminate the connection cuz there is no point of keeping just a one-sided connection." So, server will send a FIN plus acknowledgement packet and client will also acknowledge the server's FIN packet. So, this was client, this was server. Server initially acknowledges the packet FIN, which was sent by the client, and then the client acknowledges the packet FIN, which was sent by the server.

**9:53:19** · Is this clear? So, SYN is used for request to establish a connection and FIN is used for request to terminate a connection. This is used for establishment and this is used for termination.

**9:53:31** · Is this clear?

**9:53:38** · Is this clear? So, in this case, FIN flag need to be sent, need to be set as one. In this case, FIN and ACK, acknowledgement flag, need to be set as one. In this case, acknowledgement flag need to be set as one. Is this clear? So, you can also create with sequence number, for example, sequence number is X, acknowledgement number sequence number is X, acknowledgement number is Y. Acknowledgement set and FIN is also set.

**9:54:12** · Now, why acknowledgement is set? Because this is we are talking about the connection termination. It must have received some packet from the uh previous case or in previous time scenario. Let's say the time is starting here t equals to zero.

**9:54:28** · Before that time, it must have received some packet from the server. So, that's why acknowledging the packet that I have received the packet which you have sent, and now I want to terminate the connection, that's why I finish set to one.

**9:54:40** · Okay, now what will happen?

**9:54:42** · Server will acknowledge that, "Okay, you want to terminate you want to terminate the connection? That's fine."

**9:54:49** · Now, server will send as this will be Y. Why so?

**9:54:55** · Client is asking for the packet Y. What is acknowledgement? Acknowledgement means I have received the previous packet. Now, I want a packet with sequence number Y. This is what acknowledgement was. Now, client is sending acknowledgement as Y, which means client is expecting Y. Okay, so sequence is Y. Now, acknowledgement number will be this packet was X. Now, server is expecting X plus one. And acknowledgement flag will be set as one. FIN is also set as one.

**9:55:25** · Now, client will send what? Sequence number.

**9:55:29** · Server is expecting X plus one, so client will send a packet with sequence number X plus one. And what client is expecting?

**9:55:36** · It has just received sequence number Y. So, it is expecting Y plus one.

**9:55:42** · What about uh FIN?

**9:55:45** · No, there's no need to set up FIN now.

**9:55:50** · Just acknowledgement.

**9:55:52** · Okay, is it clear? So, for connection establishment, you have to follow SYN SYN plus ACK and then ACK. For connection termination, similarly, you have to follow FIN FIN plus ACK, and then ACK. Few things that you have to be very uh careful for. That initially when you select a sequence number for the SYN, you have to select randomly. That's why here when we started, we selected a random sequence number of 8,000.

**9:56:29** · And then receiver will also select a random sequence number of 15,000.

**9:56:35** · It's okay?

**9:56:37** · We will start randomly. Now, you have to make sure that what does acknowledgement mean?

**9:56:43** · Acknowledgement means next expected frame I have already received your previous frame. Now, I am expecting the next expected frame. That's it. These two concept you have to uh remember.

**9:57:03** · Okay?

**9:57:05** · So, now how many sections of TCP header we have discussed?

**9:57:11** · We have discussed header length, reserved bit these bits these six bits are reserved. We have discussed these flags, we have discussed window size, we have discussed checksum, we have discussed urgent pointer. Now, what about options?

**9:57:25** · Let's discuss them, too.

**9:57:27** · What is option?

**9:57:30** · Here it is again, 40 byte of optional information in the TCP header. Optional info in TCP header. Here we have timestamp. Here we have window size extension. Window size extension and padding. Okay? So, this is not uh that much important. In the next lecture uh or in this lecture also, we can study this SYN flooding attack.

**9:58:00** · What is this?

**9:58:03** · You know, what is SYN? SYN is synchronization. SYN is requesting for establishing a connection.

**9:58:12** · Is it clear? What does SYN means?

**9:58:14** · Requesting for establishing a connection. So, a client sends a SYN packet to a send or to the server. Now, what will server do? Server will acknowledge this and will send a SYN packet to the client. Okay. So, this is how a normal three-way handshake looks like. Okay. Now, what the problem is, client is not interested in making connection. Client is not interested in making connection. See, this happens.

**9:58:49** · This is client.

**9:58:51** · This is server.

**9:58:53** · Client asked the server to establish a connection.

**9:58:57** · And \[clears throat\] what server will do?

**9:58:59** · Server will request the client, "Okay, I'm interested in making the connection. Let's make the connection." So, server will send a SYN packet to establish a connection and acknowledging that, "Yes, I'm interested in making the previous connection." So, this connection will be made. But, for this connection, server is waiting for the acknowledgement from the client side so that so that a proper connection will be made. But, this doesn't happen.

**9:59:28** · So, in a SYN flooding attack, a malicious attackers send numerous numerous, I mean, lots of SYN segments to the server using a fake source IP address. Okay. So, each segment appears to come from a different client. Now, what will happen? So, the server allocate the resources such as some blocks and setting up the timers that, "Yes, in some time that client this client will send me the acknowledgement." Server will keep on waiting for that.

**9:59:59** · It will set up the timers in response from the acknowledgement from the client side. But, this is not going to happen. Client is not interested in making the connection.

**10:00:11** · Okay?

**10:00:12** · So, when no response when when there is no response of this SYN plus ACK to the fake clients, and these clients do not exist. These clients do not exist. These are fake clients to uh disturb the server or to uh somehow deceive the server to allocate its resources on some fake clients. As a result, these responses are lost. These responses are lost. And the server never receive the final acknowledgement to complete the handshake.

**10:00:46** · Now, what are what is the purpose of this SYN flooding attack?

**10:00:51** · The purpose is resource exhaustion. The server waits for the ACK. The server is waiting for this ACK. But, in meantime, consumes resources without establishing an actual connection.

**10:01:10** · So, if many segments are sent, if many SYNs are sent from Let's say, in this case, it was just a single client. What if What if there are multiple clients?

**10:01:21** · They are sending SYN packets. Now, server will send SYN plus ACK. Here also, SYN plus ACK, but no response of this SYN plus ACK. So, what will happen eventually? Server will run out of will lead to denial of service for the legitimate clients. Let's say, these clients are fake, but this one is legitimate. But, as these clients have exhausted the resources of the server, so server will deny the actual service to a legitimate client.

**10:02:00** · Is this clear?

**10:02:03** · In the next lecture, we'll begin with congestion control.

**10:02:07** · Congestion control.

**10:02:10** · Congestion control.

**10:02:13** · Now, we had sender, we have a receiver, and we have transmission medium. Sender will keep on sending at its own speed. Receiver will discard if it is not able to manage. So, sender and receiver are both kind of chill.

**10:02:29** · Now, who is getting tensed? Who is getting stretched?

**10:02:33** · The network medium.

**10:02:36** · And if network medium collapses, the entire system is gone. Okay? So, congestion refers to network state where message traffic becomes so heavy that it slows down the network response time. Okay? So, congestion control. These uh this congestion control will include techniques or mechanism that can either prevent congestion before before it happens, or remove congestion after it has happened. Are you getting the point? So, you can either uh prevent or react after it has happened.

**10:03:24** · Or remove.

**10:03:26** · Prevent before it happens, or remove after it has happened.

**10:03:34** · Okay? Now, how is TCP going to manage the congestion control?

**10:03:40** · Who is first of all responsible for this congestion?

**10:03:44** · Sender, because sender is sending so much of data that receiver cannot process. The receiver cannot match with the sender speed. Receiver is getting overwhelmed. Receiver is dropping the packets. Okay? And the network medium is getting tensed. So, sender is kind of responsible for the congestion. So, how TCP going to prevent? TCP react to congestion by reducing the reducing the sender window size. Okay? TCP uses a combination of GBN and SR protocols to provide reliability.

**10:04:19** · Okay?

**10:04:20** · Now, let's understand the concept of congestion control. What happens actually? So, we have a sender window. The size of sender window is determined by the two factors.

**10:04:34** · Sender window size.

**10:04:36** · This is determined by two factors. The first one is the receiver window size. And the second one is congestion window size.

**10:04:46** · Okay?

**10:04:47** · What is receiver window? Sender should not send data greater than what receiver can process, which means sender should not send data greater than receiver window size. Otherwise, it will lead to dropping the TCP segment. And that will lead to retransmission. So, when receiver going to drop the packets and sender will wait for the acknowledgement and acknowledgement will not come. So, sender will retransmit.

**10:05:14** · Why this this problem has happened?

**10:05:17** · Because the sender window size was greater than the receiver window size. Okay? So, sender window size sender window size should always be less than or equal to the receiver window size. Okay? So, receiver dictates its window size to sender through TCP header. We have already seen this.

**10:05:36** · We have already seen the advertisement window concept. Okay? So, this is necessary. Otherwise, what will happen?

**10:05:44** · If the sender window size is greater than the receiver window size, sender will send more packets what than what receiver can manage. So, receiver will discard the packet or drop the packet. And when acknowledgement will not come, then sender will retransmit, causing pressure on the network medium or causing the congestion.

**10:06:06** · Okay?

**10:06:08** · Now, we have understood the concept of our receiver window. What about congestion window?

**10:06:13** · So, sender should not send data greater than the congestion window size. Otherwise, it lead to the dropping of TCP segment, which cause again the re-TCP retransmission.

**10:06:22** · Are you getting the point?

**10:06:25** · Suppose, the capacity of network medium is five packets.

**10:06:29** · And sender is sending what?

**10:06:31** · 10 packets.

**10:06:32** · So, five packets will be dropped. Now, what will happen? Sender will receive uh no acknowledgement from the receiver, as receiver has not received them. So, what will happen? Again, retransmission.

**10:06:44** · Again, more congestion.

**10:06:46** · So, the sender window size should also be less than the congestion window or yeah, congestion window size. So, to uh merge them, I can write the sender window size should be minimum of what receiver window versus congestion window is. Whichever is minimum, that should be sender window size. For example, receiver window is 10, congestion window is seven. So, the sender window size should be should be lesser than seven.

**10:07:21** · Is this clear?

**10:07:22** · Otherwise, if I have chosen just one of the thing. For example, if it is just less than the receiver. For example, if I take eight, then what will happen? Retransmission will happen due to the congestion. Due to the congestion in network medium. And if I have chosen greater than receiver window, then retransmission will happen due to the dropping of packets at the receiver side causing retransmission.

**10:07:50** · So, this is necessary that the sender window size should be minimum should be less than equal to the minimum of receiver window and the congestion window. Is this clear?

**10:08:04** · Okay. Now, this receiver window size and congestion window size, they are both dynamic. They are not fixed. They are not static. They change with time. Okay. So, we will study the TCP congestion policy.

**10:08:19** · TCP congestion policy.

**10:08:24** · Okay.

**10:08:25** · So, in this policy we have three phases. The first phase is slow start phase.

**10:08:33** · Exponential increase.

**10:08:36** · The second is congestion avoidance phase. Avoidance phase.

**10:08:43** · Additive increase.

**10:08:44** · Additive increase.

**10:08:46** · And the congestion detection phase.

**10:08:48** · Congestion detection phase.

**10:08:54** · Now, what happens?

**10:08:56** · In slow start phase, we start the sender window size. We are trying to determine the sender window size. So, we going to start with one MSS. This What is MSS?

**10:09:06** · The maximum segment size. Maximum segment size. So, we going to start with one MSS.

**10:09:15** · Is this clear?

**10:09:20** · So, here we are saying that this is slow start phase. And here we are saying that this is exponential increase phase. So, uh are not they opposite?

**10:09:32** · Aren't they opposite?

**10:09:34** · No. We are saying it's slow start because we are starting with just one MSS. The sender window size we're starting with just one MSS. And why we're saying exponential increase?

**10:09:44** · Because we are doubling it to MSS and then four MSS. And then eight MSS.

**10:09:53** · Is this clear?

**10:09:55** · So, let me write very formally. So, what is slow start phase? Slow start phase. Or the exponential increase phase. Initially, we set the congestion window size as one MSS. Okay? Now, after receiving each acknowledgement, the size of congestion window increases exponentially. So, after one round trip time, we double it. It becomes two MSS. Then after one round trip time, it becomes four MSS. And then one round trip time, it becomes eight MSS.

**10:10:34** · Okay? Now, what will be the threshold?

**10:10:37** · And we have to wait at some threshold. So, what will be the threshold? Here I will write what is threshold.

**10:10:45** · We'll start with one. We'll keep on doubling it until we reach the threshold. Now, what is the threshold?

**10:10:51** · Maximum number of TCP segment that receiver window can accommodate. It is maximum or the maximum TCP segment that receiver window can accommodate. Receiver window can accommodate divided by two.

**10:11:11** · Okay? So, this is what This is what threshold is. You can also write like this. Receiver window size divided by maximum segment size divided by two. Okay?

**10:11:23** · But, this is the uh threshold. What threshold is? Maximum number of TCP segment that receiver window can accommodate divided by two. Okay. So, if I show you the graph we begin with exponential increase. And then as soon as we reach the threshold we move to the second policy or the second phase, which is congestion avoidance phase. In congestion avoidance, instead of exponential increase, we move toward the additive increase. So, we will increase linearly, linearly, linearly.

**10:11:58** · And then when we will reach the maximum receiver capacity let's say if the capacity is uh 100, then the threshold will be 50. Okay. So, when we will reach the maximum receiver capacity this was half of it, which was threshold. Then we will just keep it fixed. Okay. So, this is what congestion congestion detection phase. I should write in some other Okay. So, this is congestion detection. This was congestion avoidance phase.

**10:12:38** · And this was the slow start phase. Is this clear? In slow start phase, we start with one. That's why we call it as slow start. Otherwise, we will move exponentially. 1 MSS, 2 MSS every round trip time. 4 MSS 8 MSS, 16 until we reach the threshold. After threshold, let's say the maximum is 32.

**10:12:59** · So, what is the threshold? 16. So, as soon as we reach 16 we have reached the threshold and then we will move like this, 17, 18, 19 till we reach 32. And as soon as we reach 32, we have to be ready.

**10:13:15** · Uh constant.

**10:13:18** · Okay.

**10:13:19** · Is this clear?

**10:13:21** · So, this was what the policy is. Now, let's learn more about timers. Okay. So, we have different timers in TCP or UDP. The first is time wait timer. Okay. So, time wait timer, it prevent the issues with late packets after the connection is closed. Okay. We call it as two into lifetime. The value of time wait timer is two into lifetime. Second one is uh keep alive timer.

**10:13:54** · Keep alive timer.

**10:13:57** · This is used for detecting and closing the idle connections. The ones which are not actually being useful. The idle connections. So, for keep alive timer is used for detecting and closing the idle connections.

**10:14:10** · Okay. So, what do we do in this?

**10:14:13** · The server, actually the server periodically checks if the connection is still active or not. Is it active or not? Is it active or not? If there's no response within this timer, let's say the timer is set to 10 minutes, and server will keep on checking is the connection is still active? And there is no response within this 10 minutes, then what will happen?

**10:14:36** · 10 probe messages 10 probe messages will be sent during the interval of or at the interval of 75 second. So, at every 75 seconds, 10 10 probe messages will be sent.

**10:14:54** · Okay.

**10:14:56** · Up to up to. So, it is not uh necessary or it's not fixed for the 10 probes state 10 probe. The maximum 10 probes will be sent. So, as the keep alive timer will go off, during this keep alive timer, the sender the server will keep on checking is the connection is still active?

**10:15:18** · After this keep alive timer, the server will send 10 probes to check before closing the connection.

**10:15:25** · Are you active?

**10:15:27** · Are you active? It will ask 10 times. If no reply is received, the connection is closed. Okay. Persistent timer. We have already discussed it.

**10:15:36** · Persistent timer.

**10:15:41** · This was used in the case of zero window size advertisement. So, if sender ask for the window size of the receiver and receiver reply with a zero, that receiver is not currently able to receive any data packet from the sender, then what will happen? Sender will send just one byte of data. We call it as probe to ask if the receiver is now able to handle or ask the receiver about its current window size.

**10:16:14** · Okay.

**10:16:15** · For example, sender asked the receiver, receiver replied that it is zero. So, now sender is not going to lose hope.

**10:16:21** · What will sender do?

**10:16:22** · It will wait for the persistent timer and then will occasionally checks if the window size of the receiver has changed by sending the probe.

**10:16:31** · Okay.

**10:16:33** · Acknowledgement timer.

**10:16:39** · Okay. This is used to send cumulative acknowledgements with the help of piggybacking. We have discussed what piggybacking was. Sending data with acknowledgement. So, this acknowledgement timer is used to send cumulative acknowledgement efficiently.

**10:16:55** · What do we do in this?

**10:16:56** · So, when the segment arrives, when the segment or data packet arrive, the station start acknowledgement timer.

**10:17:03** · Okay.

**10:17:04** · If all the segment received within this timer are acknowledgement, we call Let Let me give you an example.

**10:17:12** · Sender, receiver.

**10:17:14** · A packet is received. Now, it will start a acknowledgement timer. Let's say 10 packets are received in this acknowledgement timer. So, of all these 10 packets, it will send a cumulative acknowledgement back. Okay? So, as soon as the first packet is arrived, it will start the acknowledgement timer. And within that those timer, I will bundle those packet up and will send a one single cumulative acknowledgement of all those packets which have come within the acknowledgement timer.

**10:17:51** · Is this okay?

**10:17:53** · Is it clear?

**10:17:56** · Okay. So, this was all about TCP. Now, let's move toward UDP. Okay. So, UDP is connection connection less.

**10:18:06** · And what do I mean by connection less?

**10:18:08** · That the frames which are sent are independent from each other.

**10:18:14** · Okay?

**10:18:15** · And receiver can receive those frames out of order. Okay? So, it's connection less, unreliable transport protocol. So, unlike TCP, UDP does not guarantee reliability. But, then why this UDP is used? Because it is simple, for its simplicity, for its low overhead. Okay? So, it provides process-to-process communication using IP address and port numbers. We call it as socket address. We have already seen. Socket address is used.

**10:18:49** · And you know, how is the UDP user datagram will look like?

**10:18:56** · This is UDP datagram. In TCP, we call it as segment. In UDP, we call it as datagram. We have header of 8 bytes. We have eight byte of header. Okay, and the remaining will be the data. Okay, now how is the header how does the header look like? So in header we have just two rows, four byte four byte each.

**10:19:27** · We have source port number, we have destination port number, and we have total length total length and checksum. That's it. UDP is so simple. And you know, even the checksum here is UDP is optional.

**10:19:44** · This is optional.

**10:19:46** · So here in UDP, you have eight byte of header four byte and four byte two rows. In the first row we have source port, destination port. In the second row we have total length and checksum. And even that checksum is header checksum is optional. Okay, so you can directly tell from this what are the features of UDP. First of all, it is lightweight.

**10:20:10** · What do I mean by lightweight?

**10:20:13** · I mean low overhead.

**10:20:16** · Overhead.

**10:20:17** · Fast.

**10:20:18** · Faster than TCP, okay? And it is used for quick communication.

**10:20:23** · Quick communication.

**10:20:25** · Okay, so you know, when we will use the UDP? It is ideal for applications that do not require the heavy interaction between sender and receiver. Okay, so low overhead, it's fast, quick for communication. Okay, and you know, it's connectionless, so there is no numbering on the frames and receiver can receive them out of order.

**10:20:53** · So these were like the pros of UDP. What are the cons?

**10:20:59** · Because as it is so lightweight, it's so it has so lesser overhead. It doesn't have the features which TCP had. It doesn't have uh flow control, inbuilt flow control, error control, or congestion control mechanisms. It relies on a simple checksum for basic error checking, and even that is optional. So, the whole focus of UDP is it's suitable for scenarios with uh short and just a request-response request-response request-response communication.

**10:21:33** · Are you getting the point?

**10:21:35** · It's commonly used in applications when the process include its own error or flow control. So, the process do not rely on the UDP.

**10:21:44** · Okay?

**10:21:45** · And it's preferred for uh real-time interactions, uh real-time applications due to its tolerance for uh fault tolerance, minor if if it has minor data loss delays, then UDP will manage. It's utilized for multicasting and all. Okay? So, this was all about UDP. I think I should make a table for you so that you can understand better TCP and UDP.

**10:22:13** · So, keep this interactive. You also suggest me what are the differences and I'll keep on adding it. So, first of all, we'll start with very basic thing. We'll start with the header.

**10:22:24** · So, TCP header has a dynamic header. Why dynamic?

**10:22:28** · Because it has options. It can range from 20 to 60 byte. It can change, while UDP has just a fixed header of 8 byte. Very simple header consisting of just two rows.

**10:22:40** · Okay?

**10:22:42** · Suggest me.

**10:22:46** · We have completed the TCP and UDP module. Now, whatever differences you remember, type here. And I'll add that.

**10:22:56** · Yes.

**10:22:57** · One point we can end to end flow control end to end flow control we have in TCP. And the in UDP there is no flow control.

**10:23:06** · Another point.

**10:23:07** · Think.

**10:23:10** · Yes, error control.

**10:23:12** · It has error control. There is no error control even checksum is optional.

**10:23:18** · No error control.

**10:23:19** · Okay?

**10:23:21** · What is the most basic difference between them? Or what is the flagship difference between them?

**10:23:28** · Correct. This is connection oriented. And this is connectionless.

**10:23:40** · Think more.

**10:23:41** · What is the property? What is the property of TCP that significantly difference between them or significantly make them different?

**10:23:55** · What is the use case?

**10:23:58** · Think for like that. Yes, reliability. This was the word I was searching for.

**10:24:02** · Reliable and non-reliable.

**10:24:08** · This has sequence number. You can derive more \[clears throat\] differences from the header only. This has sequence number, no sequence number. It has acknowledgement number, it has no acknowledgement number. It's overhead is high. Overhead is high. This has lower head. It keep track of order.

**10:24:31** · In order.

**10:24:32** · Here it is out of order.

**10:24:38** · Okay?

**10:24:40** · We have protocols like HTTP uh HTTP FTP SMTP POP, these are all based on transport layer. And here on UDP we have DNS, we have SNMP, we have TFTP, NFS, RIP, BWP, DHCP, there are so many. So all real-time and multimedia protocols are included in this UDP part.

**10:25:13** · Is this clear?

**10:25:15** · Is this clear? So in the next lecture we will take all your doubts from the DP. The next class will be a doubt class. And from the next to next class we'll begin our new module, media access control. We'll begin our lecture with this. We had data link layer. Data link layer is divided into two parts, the LLC and MAC layer.

**10:25:38** · This LLC is responsible for error control and flow control, while the MAC layer is responsible for the access control.

**10:25:46** · Okay.

**10:25:47** · So we have multiple access protocols. We are going to study this in this module.

**10:25:54** · \[clears throat\] So we'll begin with random access protocols. We'll then move to control access protocols and then centralized access protocols. Random include Aloha. Then we'll study CSMA and then CSMA/CD and CSMA/CA. In controlled access we'll begin with reservation and then polling and then token passing. And then in centralized, FDMA, CDMA, and TDMA.

**10:26:33** · Okay?

**10:26:35** · So \[clears throat\] we'll first talk about links. In links we have studied point-to-point and broadcast link.

**10:26:43** · Broadcast link. What is point-to-point?

**10:26:45** · That we have a sender, we have a receiver. That's it. While in broadcast link this is a shared link. There are several senders and several receivers. These are the nodes A, B, C, D. There are several senders, several receivers. And let's say in the broadcast link at one time sender A sent the message to let's say sender C.

**10:27:09** · And sender D sent the message to receiver B. A sent the message to C and D sent the message to B at the same time. What will happen?

**10:27:18** · Collision will happen. Corruption of bits will be there. Okay? So, we call it as collision. Now you understand this point, let's start random access protocol.

**10:27:30** · What is random access?

**10:27:33** · Give you an idea of what idea does random access protocol gives you. Random access protocol says that any station can send the data at any time. Okay? So, in random access we'll begin with Aloha. In Aloha we'll start with pure Aloha and slotted Aloha.

**10:27:51** · Okay?

**10:27:54** · So, in random access no station is superior to other. These all are of equal priority, equal capability. No station is superior to other station and none is assigned control over the other station. That is no station permit or stop other station to send the data. Is this clear?

**10:28:12** · Okay.

**10:28:13** · And you know, any station can send the data at any time. What Whatever amount of data that it want. Okay? If more than one station tries to send, then there is a access conflict. We call it as collision. And the frames will be either destroyed or will be modified. We call it as corrupted. Corruption will happen.

**10:28:35** · Okay? Now, to avoid collision to avoid collision, one must send data by executing a procedure or they should be in synchronization or some condition defined by the protocol so that collision may be avoided. While in random access, you know, there is no fixed order in which the station sends the data. That's why they are known as random access. Anyone can access the channel randomly. Okay? And each station compete for the channel.

**10:29:05** · Hence, these are also known as contention methods. Here, we have a dedicated channel between the two. Here, it is sharing. So, competition will be there. Am I clear? What do I mean by random access protocol? Any stations can send the data whenever it want. To avoid, we must ensure that there must be some protocol working among them. Okay? So, we'll begin with Aloha.

**10:29:33** · Aloha was developed in the University of Hawaii's Hawaii. I guess in 1972 or 70s was the time. Okay? So, it was basically designed for the wireless LAN.

**10:29:46** · Wireless LAN.

**10:29:48** · But, you know, it can be used in any shared medium. And each station sends equal size frame. Okay? So, in Aloha, we'll study pure Aloha or original Aloha. And the second part is slotted Aloha. In pure Aloha, we allow the station to transmit data at any time whenever they want. The pure Aloha is pure randomness. Here, pure randomness. Anyone can send the data at any time.

**10:30:19** · Hence, you know, collision chances are will be very high. Collision chances will be high in pure Aloha or original Aloha. Now, after transmitting the data packet, the station must wait for the acknowledgement. And you know, So acknowledgement does not arrive after a time out period, the time out has happened and acknowledge have not arrived, then it will be meant that the \[clears throat\] frame has been destroyed or acknowledgement has been destroyed.

**10:30:50** · Is this clear?

**10:30:53** · Now, \[clears throat\] let's draw the diagram again.

**10:30:57** · There are four station competing for this broadcast link. Now let's say if you have to set a time out timer, what time out timer you will send?

**10:31:06** · How will you identify that after this much time if packet has not arrived, I will assume that either the packet \[clears throat\] or the acknowledgement has been destroyed. So what I will count? I will count that from A till D. This will be the propagation delay. So propagation delay will be the propagation delay will be the maximum distance delay.

**10:31:32** · Okay. Now, PD will be the time taken by the packet to reach and one more PD will be the time taken by the acknowledgement to reach. Now two PD can be the time out time. Even after two PD, acknowledgement has not arrived, which means that either the packet was destroyed or the acknowledgement has been destroyed. So I will say time out will be two PD.

**10:31:58** · Is this clear?

**10:32:01** · So after time out, station will send the data again.

**10:32:03** · But you know, if collision has happened, when will collision happen? Let's say A has sent the data and B has also sent the data, collision will happen. What then what?

**10:32:15** · They'll both wait for two PD and then and then they will send again. Let's say there are two stations. They send the data. Let me simplify this. Okay. There are two station A and D. Now they want to send the data to C. They have sent A has also sent B has also sent, but what happened? Collision happened before C can access.

**10:32:39** · Now, what will happen?

**10:32:41** · A and D both will start their time out timer. And both timer timer will expires simultaneously. And both will send again, and the same scenario will repeat.

**10:32:53** · As soon as time out expire, A and D both will send again, and collision will happen again at the same place. And then, what will happen? Again, time out timer will expire, both will send again, and the same case will keep on repeating. So, what is the solution? The station must not send the frame immediately. Immediately, the frames should not be sent. They must wait for some time.

**10:33:15** · Now, what is the better thing to say?

**10:33:17** · They must wait for random time. Let's say again, A and D both decide that they will wait for 5 minutes. Then, the same case will happen. So, A and D should both wait for a random amount of time. Then, A decide, let's say I will wait for 3 minutes, and D D say I will wait for 7 minutes. In this case, collision chances will be reduced. Okay? So, we'll wait for random amount of time.

**10:33:45** · And this this random amount of time is we call as back off time.

**10:33:52** · Back off time.

**10:33:54** · Okay?

**10:33:56** · K, so back off time, the formula of back off time is K into slot time.

**10:34:03** · K into slot time. Now, what is slot time? Slot time is not fixed. Some people uh assume slot time is transmission delay. Some people assume slot time as propagation delay. Some will assume it as round trip time. So, it will be given in the question, or the context will be provided what is slot time. But, the important formula \[clears throat\] is of back off time that back off time is K into slot time.

**10:34:28** · And K will be a random number a random number between 0 to 2 raised to power n minus 1. And n will be the collision number.

**10:34:40** · Collision number.

**10:34:42** · Is this clear? So, K will be the random number from 0 to 2 raised to power n minus 1 while n is the collision number. So, let's say if n equals to 5, which means fifth collision is going on. Okay? So, let me give you an example so that so that you can understand better. Now, let's say what happens is some due in some rare scenario collision is keep on going on.

**10:35:08** · A sender send and collision happens. Sender send and collision happens. So, there should be a limit that even after collision happens, there should be a limit that after that sender cannot send or sender cannot attempt for more. Otherwise, you know, traffic will increase and there is no output. So, we will give sender 15 chance. Or I should write maximum number of attempts for station is 15.

**10:35:40** · Is this clear?

**10:35:41** · Okay. Now, let's take an example so that you can understand. We have A and B. Both want to send and some due to some factor collision has happened.

**10:35:55** · Okay?

**10:35:56** · So, this was data packet of A, this was data packet of B, they both collided.

**10:36:01** · Now, what will happen?

**10:36:03** · They both should back off. What is the collision number? This is the first collision, so n n is 1. n is 1 here again. So, K will be 0 to 2 raised to power n minus 1, which is 0 to 1. So, K can be either 0 or 1. Same case here. K can be either 0 or 1.

**10:36:20** · Okay. Now, again here, if both A and B select the same number, then they will back off for the same amount of time and then collision will happen again. Let's say let's make a table. Let's say A waited for zero, which means A sent immediately. This case. And with this case, there could be two possibility, either B wait either B do not wait.

**10:36:44** · This was the possibility when B do not wait and this is the possibility when B waits. Now, second possibility, A waits. It also have the possibility that B do not wait and B waits. Okay, so don't wait.

**10:37:03** · Wait.

**10:37:05** · Here, don't wait.

**10:37:08** · And this is wait.

**10:37:10** · Are you getting the point what we are doing?

**10:37:13** · In Aloha, we divided the Aloha into two parts, pure Aloha and slotted Aloha. Pure Aloha means pure randomness. A and the A and B can send the data at any time as they are both equal priority. No one is governing the other, so they both send the data and what happens? Collision happens.

**10:37:31** · Now, what is the solution?

**10:37:33** · If collision happens and they send the re- retransmitted packet again at the same time, collision will happen again. So, we need that sender \[clears throat\] from the both sides should wait for a random amount of time so that the time do not matches for both of them and collision do not happen again.

**10:37:54** · Now, what should be time out time?

**10:37:55** · We calculated it as 2 PD. This is the time out time. But, you know, we should wait for the random amount of time before retransmission. So, we calculated it as back off time K into slot time. Okay, slot time will be given in the question. Now, what is K? K is a random number from zero to two raised to power N minus one while N is the collision number.

**10:38:17** · Okay. The maximum number of attempt for the station could be 15, which means the value of n for the maximum can be This is your homework.

**10:38:26** · What is the maximum value of n?

**10:38:28** · If the number of attempts are 15, then how many collision can happen?

**10:38:33** · Okay.

**10:38:35** · Now, A and B, we are considering this case one. A and B both send the data, collision happened, and then they are waiting for a random amount of time. Now, how will they decide the random amount of time? With K. Now, this is first collision, so K will belong to 0 to 2 raised to the power n minus one, while n is one.

**10:38:58** · While n is one, so this is what?

**10:39:04** · This one is here, 2 raised to the power n minus one. So, this is what? 2 raised to the power 1 minus 1, this is 1. So, 0 and 1 could be the possible values of K. Now, A and B will randomly decide that they will choose 0 or 1. 0 means that they do not wait.

**10:39:20** · Here, if K is 0, then back off time is what? 0. Which means they do not wait, and if it is 1, then it will wait for one slot time. Okay. Now, \[clears throat\] see this possibility. 0 and 0, they both do not They both do not wait, which means collision will happen. Here, here also, they both wait for one slot time. Again, it is the same time. So, what will happen? Collision will happen.

**10:39:49** · In the first case, they do not wait, so both will send the packet again, collision will happen. And in the last case, they both wait for the same duration. So, in that case also, collision will happen.

**10:40:00** · In these two cases, in these two cases, collision will not happen. Here, A send immediately and B will wait, so we will call it as A one. And here, A will wait and B send immediately, so we call it as the win for B. Okay. Now, let's calculate \[clears throat\] the probability. Probability of A winning one out of four.

**10:40:27** · One out of four. Okay. Probability of B winning again one out of four. And probability of collision is two out of four, which is 50%.

**10:40:38** · Here, the probability is A and B winning is 25 25%. Is this clear?

**10:40:44** · Now, let's assume let's assume that somehow the collision \[clears throat\] happened again. As the collision probability is 50%, let's say collision happened. What will happen? This time the value of K will become two. Value of K will become not the value of K, but value of N. Well, N represent number of collisions, so value of N will become two.

**10:41:07** · Okay.

**10:41:09** · Now, if value of N is two, K can range from zero to four. Zero to two not four, zero to three. Zero to two raised to power N minus one. So, zero, one, two, and three. This could be the value of N. Or no, not N, K. Value of N was two, and the range of K will be zero to three. Now, we will make the table again.

**10:41:33** · A do not wait while B wait for zero time, which means B also do not wait. B wait for some duration, some duration, and then some duration. Now, what will happen? A waits. A waits zero, one, two, three. Why we have not uh why we have not \[clears throat\] used uh K as zero, one, two, three. This was the case for B only. Why B? We are assuming that A has won.

**10:42:04** · A has A has What is the third form of win?

**10:42:09** · Win, won, won. Okay, so whatever, A has win. And B has lost. So, the number of collision for B will increase, not for the A. So, here also let's say this is packet two. The first packet was destroyed in the collision.

**10:42:28** · This is A, this is B, this is packet two. This is packet two, this is packet two. And now again, what happened?

**10:42:35** · Collision happened.

**10:42:37** · Okay, so N will be remain one for A, and it will become two for B. Why? Because we assume that we assume that A has won. Okay, so in this scenario, what will happen?

**10:42:50** · The value of K for A will be zero and one, while the value of K for B will be zero, one, two, three.

**10:42:56** · Now what happens?

**10:42:59** · The probability of A winning is 62.5%.

**10:43:02** · How?

**10:43:03** · 5/8.

**10:43:06** · Let's check where A is winning. A is winning in all these cases. A is winning in all these cases. We We won't call this as a win, this will be collision. This will be a collision. So, A will win here. And A will win here.

**10:43:29** · Okay.

**10:43:31** · And where A will lose, A is losing here. In this case, A is losing. Here A is winning. And these two scenarios are for the collision. This is the collision scenario. Okay, now if I again write the probability, then probability of A winning is 5/8. Three from here and two from here. And probability of B winning is 1/8 only.

**10:43:59** · Just this.

**10:44:03** · Where Where B A is losing and probability of collision What is probability of collision?

**10:44:10** · One and two.

**10:44:12** · So, 2 by 8. Probability has of collision has reduced to 25% while probability of A winning is 62.5% and probability of B winning is 12.5%.

**10:44:24** · Now, what will happen in the case three?

**10:44:26** · In the case three, we are again assuming that A has won. So, what will happen?

**10:44:32** · This is A, this is B. This time this is packet three. The first two were unfortunately corrupted during collision. Now, collision happens again. So, what will happen? The value of N will remain one and the value of N is three this time. Is it clear? So, K will remain zero and one and for this the value of K will be zero to one, two till seven.

**10:44:57** · Now, what will happen? When you will calculate, you'll find that probability of A winning is this time 81.25%.

**10:45:03** · 13 by 16.

**10:45:05** · Probability of B winning will be 6.25% only and probability of collision will again be halved.

**10:45:13** · 12.5%.

**10:45:15** · Why there are 16 cases?

**10:45:17** · Eight cases and then multiplied by two cases. So, zero and then eight cases and the value of A, this is value of B. Zero one till seven and then again eight cases here, eight cases here, zero to seven.

**10:45:34** · Okay?

**10:45:36** · Let me Let me write here properly. So, initially the probability of collision was 100%. After first collision, the probability reduced to 50%. After second collision, probability reduced to 25% and after third collision, the probability is again halved, 12.5%. So, probability of collision is decreasing exponentially. \[clears throat\] So, back off algorithm is also known as exponential back off.

**10:46:06** · Is it clear?

**10:46:08** · You know, but you can also see a clear cut disadvantage that this back off algorithm suffers from capture effect. What is capture effect?

**10:46:20** · Can you guess?

**10:46:23** · Can you guess what is capture effect?

**10:46:30** · Exactly. Exactly. You can look at the probability of A. Initially, the probability of A was winning was 25%.

**10:46:39** · Look here.

**10:46:40** · The probability of A winning was 25%. In the second case, the probability of A winning is 62.5%. In the third case, the probability of A winning is 81.25%.

**10:46:51** · \[clears throat\] So, initially, both algorithms A and B, I should say both the stations A and B have similar winning probability. Both have the winning probability of 25%. But, if any of the station win in the first collision, then it will have the more probability of winning in the next collision. This is what capture effect is. Probability of A initially was 25%. In the next, it became 62.5%. In the next, 81.25%.

**10:47:22** · And the probability of B will keep on decreasing. Is this clear? We also describe vulnerable time. Vulnerable time for collision.

**10:47:34** · For collision.

**10:47:37** · Okay. So, what is vulnerable time? It's a range of time where collision take place. It is the range of time where collision take place. So, \[clears throat\] So, vulnerable time for pure Aloha will be 2 into transmission delay of the frame.

**10:47:53** · Is this clear?

**10:47:55** · Now, throughput for the pure Aloha. Throughput for the pure Aloha, the formula is S equals to G G into E raised to power minus 2G. While G is the number of frames generated in one transmission delay. Number of frames generated in one transmission delay. This is what this G is. And this is throughput.

**10:48:20** · Okay? Now, what is our mission in any of the case where throughput is involved? We want to maximize the throughput. So, what we'll do? We will put dS by dG equals to zero. So, we are trying to find the value of G where the throughput is maximized. We want to generate as many number of frames in one transmission delay where throughput is maximized.

**10:48:45** · Are you getting the point? That's why we are trying to do this. So, we do do it like this. And when you will solve you'll find that the value of G is 1 by 2. So, when you substitute G equals to 1 by 2 this is the equation that we get.

**10:49:00** · What was the equation? G S equals to G into E raised to power minus 2G. So, half into E raised to power minus this. So, this is what So, this is 1 by 2E. This is 0.184. So, the maximum throughput, if you write it in percentage, is 184%.

**10:49:22** · 184%. So, if you are if you are trying to write this in a simpler format, you can write that if 1,000 frames are sent if 1,000 frames are generated, I should write frames are generated in a network in one transmission delay, then out of these 1,000 frames, 184 frames will be delivered successfully. This is what throughput means.

**10:49:53** · Let me repeat again. So, the throughput of the pure Aloha is G into e raised to power minus 2G. Now, what will happen if we find it by doing ds by dg equals to zero, we solve the equation, we find that g equals to for g equals to half, the throughput is maximized. That this is the maximum throughput one can achieve.

**10:50:14** · Okay? So, \[clears throat\] this 18.4% represent that if 1,000 frames are generated in the network in one transmission delay, then 184 frames will be sent or will be delivered successfully. What is G?

**10:50:29** · Number of frames generated in one transmission delay.

**10:50:32** · Is this clear?

**10:50:33** · So, one Smax Smax occur when G equals to 1 by 2. So, one half of the frames should be generated in one frame transmission time to achieve maximum throughput. Or, I should I can write one frame should be generated in two frame transmission time. Okay? To achieve the maximum throughput. That's why we have written the vulnerable time was two into transmission delay.

**10:51:04** · Okay? So, if one frame is generated by the network in two frame transmission time, then in this situation we will achieve the case of maximum throughput. So, what does your vulnerable time represent? So, it is basically representing that if one frame is generated by the network in two frame transmission time or two transmission delay, then there will be no collision. And if there is no collision, then we will achieve maximum throughput.

**10:51:36** · Is this clear?

**10:51:37** · The case of pure Aloha is clear. Now, what about slotted Aloha?

**10:51:41** · In slotted Aloha, we divide the time of the shared channel into discrete intervals. We call it as time slot.

**10:51:49** · Slotted Aloha.

**10:51:51** · We divide what?

**10:51:53** · We create time slots. As you know, this is not purely random. That's why it is not in the category of pure Aloha. We are imposing one constraint here that any station can transmit the data in any time slot given to this at the beginning. The condition is What is the condition? That the station must start its transmission must start its transmission from the beginning of the time slot. You know, this is now the condition.

**10:52:24** · If the beginning is of the Let me repeat. If the beginning of the slot is make missed If the beginning is missed, then station has to wait until the beginning of the next time slot.

**10:52:36** · Are you getting the point?

**10:52:39** · Now, when will collision here happen?

**10:52:42** · How will collision happen?

**10:52:44** · A collision may occur if two or more station try to transmit the data at the beginning of same time slot.

**10:52:53** · Is this clear?

**10:52:55** · So, what is the only condition here? That we will divide the whole time frame into slots and the only condition is a station must start sending the data from the beginning of the time slot. If the time slot is missed, then you have to wait until the next time slot. Is this clear? In this case, vulnerable time is just single transmission delay.

**10:53:27** · What was in the case of vulnerable time in the case of pure Aloha? It was two transmission delay. Vulnerable time in the case of slotted Aloha will be just transmission delay because we are making time slots here.

**10:53:38** · Okay?

**10:53:39** · In this case, what is the throughput of slotted Aloha?

**10:53:45** · Throughput?

**10:53:47** · S equals to G into E raised to power minus G.

**10:53:51** · As you know, in the previous case, the throughput was uh minus 2G. In this case, as you know, vulnerable time is just TD, so the throughput Aloha throughput of the pure slotted Aloha will be G into E raised to power minus G. So, in this case, when you will do DS by DG equals to zero to find the maximum value, you will find that maximum value is at G equals to one, which means when you will put the value G equals to one, one into E raised to power minus one, so this is just this.

**10:54:21** · In the pure Aloha case, it was 1 by 2E. So, now 36. 8% So, the maximum throughput is 36.8%, which means if 1,000 frames are generated in the network in one frame transmission time, then maximum 368 frames will be delivered successfully. Why so? Because we have imposed a condition here that a frame can only be uh that a frame can only be transmitted at the beginning of a time slot.

**10:54:54** · We have divided the time frame into the slots, and we have imposed a condition that transfer can happen only at the beginning. If the beginning is missed, wait for the next time slot. Last lecture, we discussed about pure Aloha and slotted Aloha. Okay? Let's revise it in just few minutes. Pure Aloha and slotted Aloha. What happens in the pure Aloha? Any station can transmit the data at any time. Randomness is there. Can transmit at any time.

**10:55:26** · Can transmit at any time. And here, in the beginning of the time slot only. Beginning of time slot only. Here the vulnerable time was two into transmission delay of frame. Here the vulnerable time is just the transmission delay of frame. And time out timer both will be time out timer will be two into propagation delay.

**10:55:51** · Okay, what about the throughput?

**10:55:53** · Throughput is S equals to G into E raised to power minus 2G. Here G into E raised to power minus G. The maximum throughput here was 18.4%. Here the maximum throughput is 36.8%. The main advantage of pure Aloha was simplicity in implementation. And main advantage of slotted Aloha is reduction in number of collision than pure Aloha. Number of collision. Okay, so it brings down collision to the half and doubles the throughput than pure Aloha.

**10:56:30** · Okay, so this in random access pure Aloha, slotted Aloha, and then three subcategories of CSMA. So we have done these two and now in this lecture we'll begin with CSMA. Carrier sense multiple access. Okay, so to minimize the chances of the collision, CSMA was developed.

**10:56:54** · How chances of collision can be reduced?

**10:56:57** · It could be reduced if the station sends the medium. Sends the medium or the carrier before trying to use it. What I'm saying? We sense it before. Carrier carrier sense multiple access, which means the station sends the medium or sends the carrier. Sends the carrier before trying to use it. To use it. So CSMA require that each station first sense the carrier before transmitting the data.

**10:57:32** · Okay, and how it will happen? Each station can sense the carrier only at the point of contact. Only at this point of contact. Okay, so it was any station can see whether the data is already flowing or not by the contact where it is connected with the broadcast link. Okay.

**10:57:53** · So, each station can sense the carrier only at its point of contact with the carrier. So, it is not possible for any station to sense the entire carrier. So, entire carrier cannot be sensed.

**10:58:06** · Thus, there is a huge probability or possibility that a station might sense the carrier free while it is actually not. Let's say the data is coming from this direction. The data has not reached this point of contact, but what will A assume? That as there's no data at this point, so A will assume that the carrier is free. So, A will send the data here, and this data coming from here will lead into collision.

**10:58:33** · Okay, so the possibility of collision still exist because of because of propagation delay. Okay, so when a station send a frame, it is still takes small amount of time for first bit to reach every station. So, the station may sense the medium and find it idle. Okay, here in this case, what is the vulnerable time? It is propagation delay this time.

**10:59:01** · Okay, so when a station send a frame and other station trying to send a frame during the same time, then collision will be the result. But, if the first frame of the frame if the first bit of the frame, let's say A is trying to send. A is trying to send. If the first bit of the frame has reached the point where she is. This is the only duration when the carrier is vulnerable.

**10:59:30** · When the first bit sent by A has reached C. And what is propagation delay? The maximum distance. So, the first bit sent by A has reached C. And that means that no matter how many stations are there, all have sensed that someone is already using. We do not have to use this at this moment, otherwise collision will happen. So, for how much time the carrier was vulnerable? The propagation delay only.

**11:00:00** · Okay?

**11:00:01** · After that, the stations will understand the medium is busy. Okay. Now, every station should check before sending. So, we have persistent methods in CSMA. Persistent methods in CSMA. So, first one is persistent. The second one is non-persistent, and the third one is P-persistent.

**11:00:29** · P-persistent.

**11:00:31** · What does persistent means, or one-persistent means?

**11:00:35** · In case of one-persistent CSMA, station will keep on continuously sensing the channel. Once the channel is idle, it will send the frame immediately with the probability one. Are you getting the point? Let's say, this was the time A was sensing that it is it was busy.

**11:00:52** · It was busy.

**11:00:55** · This was the time A was sensing. Now, it will And when A was sensing that it was busy, it was continuously sensing at every moment. As soon as A will find that at this moment, the channel is idle, it will send the data.

**11:01:15** · Are you getting the point? So, the probability of collision is high for this example, you know, because if A is sensing continuously, others are also sensing continuously, which means B is also sensing. And as soon as B will find this idle, and A will also find this idle, they will both send at the same time, collision will happen.

**11:01:31** · So, probability of collision is high in this example. If two station become ready in the middle of a third transmission, both will wait politely until the transmission ends. And as soon as the transmission ends, they will begin transmitting simultaneously, and then collision will occur. Okay, so who uses this one-persistent methods? Ethernet LAN. Ethernet LANs uses this. What about non-persistent method? In non-persistent CSMA, one station is ready with the data, it will sense the channel.

**11:02:05** · For example, A wants to send the data, so A will sense the channel. And if the channel is busy, it will wait for random amount of time. Random amount of time, and will again sense the channel. So, here let me write. In one-persistent, continuous sensing was there.

**11:02:22** · You know, if one channel is doing continuous sensing, then which means others are also doing that. So, others will continuously sense, and as soon as the channel is idle, others will also send the data at the same time. Collision will occur.

**11:02:36** · What about non-persistent?

**11:02:40** · In in non-persistent method, the checking will happen at random amount of time. Let's say, if A is ready to send the data, A will A will sense the channel. If it is busy, it will wait for random amount of time. Well, this is better than one-persistent, because others will also wait for random amount of time. And when randomness is there, the chance of both of them sending the data at the same time will be very low.

**11:03:08** · Is this clear? So, the collision are less compared to the one-persistent. But this this method, you know, will reduce the efficiency of the network because the medium remains idle when there may be station with a frame to send. Let's say all were sensing that all were sensing that at this moment A sensed that this moment B sensed at this moment.

**11:03:35** · C sensed at this moment. All of them sensed that the channel is idle. Let's say B will wait for 10 minutes. A waited for 13 minutes and C waited for let's say 8 minutes. So, during the first 8 minutes during the first 8 minutes, channel was idle and there were stations with the frames to send.

**11:03:59** · But still none of them sent due to the fear of collision. That's why efficiency was reduced. Here in this case, efficiency was high, but the chances of collision were also more. In this case, efficiency are low along with the chances of collision. That's why we came with a middle method, which is p-persistent. So, p-persistent method is used if the channel has a time slot with a slot duration equal to or greater than the maximum propagation time.

**11:04:31** · What is the main crux? Let me explain the main crux. It uses the advantage of both this one-persistent and non-persistent. How so?

**11:04:38** · It will assign a probability. In this method, after the station finds that the channel is idle it will follow this step these steps. With probability P it the station sends the frame. And with probability 1 minus P, the station wait for the beginning of the next time slot and check the line again. So, we are doing both persistent and non-persistent.

**11:05:01** · You know, it's it's similar to what what studied in physics classes that what is the probability that electron is present there or not.

**11:05:10** · Okay?

**11:05:13** · Do you remember?

**11:05:17** · Yes. Yes. Yes.

**11:05:19** · Okay. So, in P-persistent, P is the with P probability it will send the data and with 1 minus P probability, it will it will check for the next time slot.

**11:05:32** · Okay?

**11:05:33** · So, this was the CSMA part. Now, let's move to the CSMA/CD. You know, the most important thing which uh gave birth to this CSMA/CD is let's say collision has happened. A and B were sending the data and collision happened. They both sensed They both sensed the carrier before sending it. And somehow the collision happened as, you know, they send the data in vulnerable time.

**11:06:03** · Let's assume this.

**11:06:04** · And somehow collision happened.

**11:06:06** · Now, what will happen?

**11:06:09** · The frame is big. The first byte or the first bit is is colliding with the first bit of this frame of B. But, you know, as CSMA has not specified what a station should do after the collision, so in CSMA if two stations sense the channel to be idle and begin transmitting simultaneously, then both station data will collide and still station will keep on sending the data.

**11:06:34** · Station will keep on sending the data as it is not specified what they have to do when collision has occurred. So, what is the better way? The better way to save the time and bandwidth is to detect the collision and immediately stop the transmission. This is the strategy which is used in this CSMA/CD.

**11:06:55** · Collision detection.

**11:06:57** · Carrier Sense Multiple Access Collision Detection. CSMA has not specified what you have to do after collision has occurred. So, in CSMA when the first byte is being corrupted the remaining packets are destined to be corrupted. A and \[clears throat\] B cannot do anything to save them because it is not mentioned in the protocol what you have to do when collision has occurred.

**11:07:21** · What if you detect that collision has occurred and you stop sending the frame entirely?

**11:07:28** · You are saving your time and bandwidth. This is what what CSMA/CD is. So, in CSMA/CD, station do not send the entire frame and then look for collision. In the initial cases, what we were doing? We sent the entire frame. The frame has not The acknowledgement of the frame has not been received even after the time out timer, we assume that collision has occurred and we will retransmit it.

**11:07:52** · But here in CSMA/CD, what we do?

**11:07:55** · The station do not send the entire frame and then look for collision. In CSMA/CD, transmitting the frame and detecting the collision are done simultaneously or it is a continuous process. Sender need two different port, one for sending the data. So, there will be two ports. First will be for sending the data. And the second port needed will be for the detection of collision. Detection of collision.

**11:08:29** · So, if collision is detected, that sender immediately stop transmitting the data. And you know there is a special port dedicated to detect the collision, so there is no need for acknowledgement. No need for acknowledgement. Okay? So, if collision is not detected, then it is 100% guarantee that the frame is received by the receiver. Okay? And no copy concept is also there.

**11:08:56** · Which means if one frame is transmitted, sender do not maintain a copy of that frame because station is simultaneously sending the frame and detecting the collision also. If collision is not detected, that means receiver has successfully received the frame. There is no need to keep the copy.

**11:09:16** · Is this clear?

**11:09:18** · Is this clear? There is another concept of jam signal. Let's say there are multiple stations.

**11:09:25** · Okay?

**11:09:28** · There are multiple stations. If collision has occurred somewhere in between, then the other station has right to know that collision has occurred. How will we tell them the collision has occurred? With the help of jam signal. So, jam signal will be sent to all the stations that collision has occurred. It is uh a signal that is used to tell the station that collision has occurred.

**11:10:01** · Okay. Now, you know there's a concept for minimum frame to detect the collision. Why is this concept? Because of the time. Because of the time. Let me explain properly. The transmission delay The transmission delay of frame should be greater than should be greater than propagation delay of frame propagation delay of frame plus transmission delay of jam signal plus propagation delay of jam signal.

**11:10:30** · An important formula. You have to remember this. Transmission delay of frame transmission delay of frame should be greater than propagation delay of frame plus propagation delay of jam signal plus transmission delay of jam signal. Is this clear? So, you can also simplify the formula that the jam signal is similar to acknowledgement. It has a very less size than frame.

**11:10:53** · So, what will What we can write? We can ignore the transmission delay of jam signal and we can write just like this. So, the transmission delay should be greater than two into propagation delay. Okay? You can also with the with the help of this transmission delay, you can expand it like this. Two into propagation delay plus transmission delay of jam signal.

**11:11:17** · So, the minimum frame should be greater than bandwidth into two into propagation delay plus transmission delay of jam signal. Okay? If you ignore this, then the minimum frame will be two into bandwidth into propagation delay. You remember this formula. It is important case.

**11:11:37** · Okay?

**11:11:38** · It is an important case.

**11:11:41** · This is an approximate formula. What about the exact formula?

**11:11:45** · L should be greater than bandwidth into two into propagation delay plus transmission delay of jam signal.

**11:11:53** · What is this?

**11:11:56** · L should be greater than this number. L should be greater than this.

**11:12:00** · So, what is What will be the minimum?

**11:12:01** · The minimum frame size will be B into this.

**11:12:08** · Okay?

**11:12:09** · Minimum frame size for what? Minimum frame size to detect collision to detect collision in CSMA/CD. This is a very important formula. You have to remember this. And then, there is a concept of purging.

**11:12:24** · What do What do you mean by purging?

**11:12:27** · Purging means that uh in the back of algorithm in the back of algorithm even if even if the waiting time is zero, you do not send it immediately. You have to wait for some amount of time so that the remaining corrupted bits should be cleared from the broadcast link. So, this is a very small concept I should I think I should tell you.

**11:12:51** · Okay. So, now the next lecture or what I think I should do is the next lecture will be for CSMA/CA. It is a very important lecture for the Ethernet.

**11:13:01** · Okay? But, in this lecture I'll begin with controlled access protocols. We'll learn about polling, reservation, and what was the last part? The token passing. Polling, reservation, and token passing will complete in this lecture as they are very simple and very small topics. So, we will complete it in this lecture itself. And the last part also, TDMA, CDMA, FDMA, they will also be completed in this lecture. We will do it in the next 10 10 minutes.

**11:13:32** · The next lecture is very important, CSMA/CA for Ethernet. Okay?

**11:13:37** · For now, let's begin with what is polling.

**11:13:42** · Okay?

**11:13:45** · In polling, we have a central node. So, in random access, what we had In random access, we had no authority over the stations. In this controlled access protocol, we have a concept of primary and secondary station. Primary station will control all secondary station. So, we call this as primary station, and the remaining are secondary station, S2, S3, and S4.

**11:14:13** · If the concept of primary and secondary station is missing, then any station who want to send the data, it can send only in the case if all other station give permission. If there is no a leader, then all of them will give permission to a specific sender, and then only the sender can send. What was in the case of random access? Anyone can send. There was no concept of primary or secondary or leader or the follower.

**11:14:38** · Here in this case, we have primary and secondary nodes. And you know, as it works on the democracy, as it works on the leader-based rule, there is no collision concept in this controlled access protocols. They are collision-free. You'll understand when I'll explain you what polling is. So, in polling, let's say P want to Let's say S1 wants to send the data to S3.

**11:15:08** · So, what What do What do we do?

**11:15:11** · S3 is S1 is not going to send data directly to S3. P will do its work. What is the work of P? P will poll. Do you want to send the data? S1 will say, "Yes, I want to send the data." Then S1 will send the data to this P. And then P will send the data to S3.

**11:15:30** · Okay? And then P will ask S2, "Do you want to send the data?" It will send back an ACK NACK that I don't want to send the data.

**11:15:40** · Okay?

**11:15:41** · And whenever P want to send the data, it can directly send. Okay? P is assured that anyone can who can send the data will ask me before sending it. And P, as a leader, will send directly. Is it clear? Let me repeat what happens in polling. In polling, if S1 want to send data to S3, P will ask S1, "Do you have any data to send?" S1 will send the data. P will send the acknowledgement back.

**11:16:07** · Now, P will send the data to S3. Okay? It doesn't happen like this. Let Let me explain in a very formal way manner. So, here is P. Let's say here is S2. So, P will send the poll to S2. S2 will reply, "No, I don't want to send the data." P will send the poll to S1 now.

**11:16:31** · S1 will send the data itself. And then P will send the acknowledgement. Now, what about S3? Will P going to directly send the data to S3? No, it doesn't happen. What we do, we do like this. P will send SEL that you are selected. Get ready to this receive the data. S3 will send the acknowledgement, yes, I'm ready. P will send the data and S3 will send the acknowledgement, yes, I have received the data.

**11:16:58** · Okay, so in this manner, polling works. Every station will send the data through primary station.

**11:17:03** · Two secondary station cannot communicate directly. Common topology used in polling is what?

**11:17:10** · Star topology.

**11:17:12** · Okay, we have discussed in the first class. Common topology used in polling mechanism is star topology. Now, here in this case, you can yourself tell that bandwidth utilization is very low because lot of time is wasting in sending the poll message, receiving the acknowledgement, sending the data. But, you know, what you are getting for this trade-off? No collision. Drawback of the polling is if primary station fails, the system goes down.

**11:17:42** · Is this clear?

**11:17:44** · Now, what about reservation? In reservation method, a station need to make a reservation before sending the data. Time is divided into intervals. Time is divided into intervals. In each interval, reservation frame reservation frame precedes the data frame sent in that interval.

**11:18:01** · Okay, if there are any stations in the system, let's say N stations are there in the system, then there are exactly N reservation mini slots in the reservation frame. Means that every station have its own mini slot. If there are three station, then reservation will station will have three mini slots. Okay, the station that have made the reservation can send their data frames after the reservation time. Let me repeat here again also.

**11:18:30** · In random access, anyone can send anytime. While in controlled controlled manner, there's a concept of polling. We have set up authority. Authority will manage. Here we are talking about the reservation. You have to reserve first that I am going to send and then you will going to send.

**11:18:48** · Is it clear?

**11:18:49** · What about token passing?

**11:18:52** · What about token passing?

**11:18:55** · Here, all stations are logically connected to each other in form of a ring. So, here we will be using the ring topology.

**11:19:04** · Okay?

**11:19:05** · It uses a special frame called \[clears throat\] as token. Okay? So, a station is allowed to transfer the data packet if and only if it has the token. So, in this scenario, only station one can send the token. Uh not token not token. We are talking about the data. The one who has token can send the data. So, here in this case, S1 has the token.

**11:19:27** · S1 will send the data. Now, after the data is sent, the token will be passed. Whenever a station has no more data to send, it will release the token. It will go in a ring fashion. Now, S2 has token. If it has no data to send, it will forward the token. So, in this manner, it will keep on. Okay? And this, you know, this is a best technique for broadcasting.

**11:19:49** · No No concept of acknowledgement because there is no concept of collision here. And if there is no \[clears throat\] collision, then it is sure that the packet will reach.

**11:20:01** · Okay?

**11:20:02** · Now, about channelized, we can study TDMA. In TDMA, the time of the link is divided into fixed size interval called time slots.

**11:20:11** · Time slots.

**11:20:13** · T1, T2, T3. And these time slots are allocated to stations in round robin manner.

**11:20:20** · T1.

**11:20:21** · These time slots are allocated to stations in round robin manner. Do you understand round robin? S1, S2, S3, again S1, S2, S3 in this manner. Okay?

**11:20:31** · So, each station must transmit its data during the time slot allocated to it. So, in case station do not have any data to send, its time slot goes to waste. Okay? So, what is the disadvantage? If any station do not have data to send during its time slot, then the time slot is wasted. And this is reduction in efficiency.

**11:20:55** · Reduction in efficiency. This time slot, which was allocated to such a station which do not have any data to send, could be allocated to some other station willing to send the data.

**11:21:09** · Is this clear?

**11:21:11** · Okay. So, the next lecture is very important of CSMA/CD. We'll study Ethernet in detail. In the last lecture, we have discussed CSMA/CD. We discussed all about Ethernet. And in the end, we ended the lecture with disadvantages of Ethernet, that it is not suitable for interactive application where data size is less. It is not suitable for real-time application as they support deadline, and collision is high in Ethernet.

**11:21:40** · And it is also not suitable for client-server architecture. Why so? Because server is of higher priority than client, and there is no process, or there is no method to set priorities in CSMA/CD.

**11:21:55** · Okay? We also derived the formula for the number of times we need to find the We need to transmit before getting the first succession, or first success. So, average number of collision before the first successful transmission was E. We derived it. Okay?

**11:22:14** · In this lecture, in this lecture, we'll begin with our new module, which is of routing. You already know what routing is. We have discussed in the first module of IPv4 addressing. That routing is static routing. And in this module we will begin or by understanding about the dynamic routing. Now, what is the opposite of routing? The opposite of routing is flooding. That you flood the packet onto the network. What is flooding? Flooding is simple.

**11:22:48** · Suppose A send the packet to B. Now, B is going to send the packet or forward the packet to every outgoing link it has. Okay, so we are about to flood the packet. What are the advantages? No routing is required. Shortest path is always guaranteed as the packet whichever packet arrive at the destination first. Let me explain again. For example, A forwarded the packet to each and every outgoing link it has. And this is the destination.

**11:23:19** · Suppose this packet P1 P1, P2, P3, P4. This packet P1 reached the destination first.

**11:23:27** · So, what destination will do?

**11:23:29** · Destination will look at from which \[clears throat\] as as there is option of record route in the options of record route in the options of header the destination will look that from which router this packet has come from. So, that will become the shortest shortest path.

**11:23:52** · Are you getting the point?

**11:23:53** · Shortest path in flooding is always guaranteed because the packet which arrives at destination first have must have taken shortest path. The third thing is it is highly reliable. If one path is down, the packet will reach the destination by choosing some other path. What is the disadvantages? The disadvantages there is a enormous amount of traffic. And multiple duplicate packets will be received by the receiver.

**11:24:19** · Okay?

**11:24:20** · Mhm. And then we have routing. What is the advantage of routing? The traffic is less. Duplicate packets won't be received by the receiver. And what is the disadvantage? We need some complex routing table or some routing algorithm. And the chosen path may not be And the chosen path may be down. So, it is not highly reliable. Well, shortest path also depends on the algorithm. And some algorithm fail to find the shortest path.

**11:24:48** · Okay. So, I'll begin with the concept of dynamic routing. The first algorithm will be distance vector routing. And the second will be link state routing.

**11:24:58** · What happens in the distance vector routing?

**11:25:00** · We prepare the routing table at every router based on local knowledge. Distance vector routing. We prepare routing table table based on local knowledge. For example, A B C D or Let me properly. Router A router B router C and router D. A B C D.

**11:25:29** · Okay.

**11:25:30** · Now, we will also give cost to the link. 1 7 3 2 11 any random number. Now, router A will or router A will form a routing table. It have a column of destination. It have a column of distance or the cost. It will also make a column for the next hop. Let's say this is the distance.

**11:25:59** · So, for destination to D, for destination to D What is the distance? What is the distance? What is the next hop? D. For destination to C, well, there is no direct link, so I'll write distance is infinity. The destination is C and the next hop is not applicable.

**11:26:19** · What about B?

**11:26:20** · B is the distance is two and the next hop is B only. What about A? The distance is zero and next hop is also A.

**11:26:28** · So, this is what routing table is in the distance vector routing and this will be prepared at each and every router. Each and every router is going to prepare the routing table based on local knowledge. Now, what will happen?

**11:26:43** · This distance vector will be shared. This distance distance vector will be shared among the neighbors.

**11:26:52** · Shared among neighbors.

**11:26:56** · So, A will receive distance vector from B and D. At C, it will receive from B and D. D will receive from A, B, C. Okay. Now, what will happen? The distance vector received from We will We are talking about let's say at A. The distance vector received from B will be and from D will be we can calculate from here.

**11:27:17** · Uh it will be two zero from We are talking about B. Three and seven from B. What about D? It will be one and then seven and then 11 and then for D it will be zero.

**11:27:32** · Okay.

**11:27:33** · Now, what we are doing?

**11:27:34** · This is what we have received This is what we have received from from B and from D. Now, what will not what we will do?

**11:27:42** · We will calculate the distance to reach B and we'll calculate the distance to reach D. What is the uh distance to reach B? The distance is two. And what about D? The distance is one. So, I'll write two and one here. Now, now let's see here. So, from B A to B the minimum from A to B the minimum distance is two. From A to B the minimum distance is two.

**11:28:14** · And from here, the minimum distance is two only. Now, what about Okay. Okay. What What are we planning to do? We will make a new routing table for A. We'll have destination, we'll have distance, and next hop. Okay. Again, A B C D. From For A, the distance zero, the next hop will also be For B, distance will be two.

**11:28:42** · And it's also See here. What are we doing?

**11:28:45** · How are we writing this?

**11:28:47** · We have two methods. The first is Let's say, the first is directly from A. From A to reach B, we require two unit of distance. And with the help of B, we require two unit of distance. You can directly go to B, or with the help of this routing table, you can go to B, and then again go to B. This is a way of saying, okay? So, here also, A to B two, two plus zero.

**11:29:16** · Two, and two plus zero. What is the minimum? They're both same, that's why I've written two. What about C?

**11:29:22** · What about C?

**11:29:23** · So, here it was infinity. So, out of infinity and using method B and D. So, first of all, you have to go up to B, the distance is two, and then you can go to C, the distance is three. And with the help of D, if you want to go, the distance is one. And then, the distance is 11.

**11:29:46** · So, out of these three, what is minimum?

**11:29:48** · The distance from B. So, I will write to reach C, five, and what is the next hop? B.

**11:29:56** · Is this clear? So, what are we doing here?

**11:29:58** · When the routing the distance vector will be shared among the neighbors. A will get to know that there are two paths to reach to C. The first path is this path, and the second path is this path, and the third path was directly from this, but the cost was infinity. So, what A will do, based on the distance vector received, A will check for the minimum. That's what we are doing.

**11:30:21** · So, A will find that B is the path. So, from B So, from B this is what the minimum cost path is. I hope the point is clear.

**11:30:38** · Okay?

**11:30:40** · So, this is how we check. So, this is just the formality. What you will do you will make the routing routing table calculate the distance vector, share it among themselves, they will share it among themselves, and you can directly look from the graph itself. No need to do like this.

**11:30:58** · No need to calculate from this. You can directly look from the graph and will check where is the minimum uh path. Okay? This was the concept of distance vector routing.

**11:31:10** · In distance vector, what happens?

**11:31:12** · We share the distance vector among the neighbors. So, based on the distance vector received from the neighbors a new routing table will be created. A new routing table will be created at A, and same thing \[clears throat\] will happen for D, C, and B itself. Okay? So, when routing table will be created at C the new routing table, it will register that the shortest path to reach from C to A was not infinity.

**11:31:42** · It is from B, 3 + 2.

**11:31:46** · Is it clear?

**11:31:49** · Okay. So, this was the concept of DVR. Let me repeat again. Based on the knowledge you have from the distance vector you receive from the neighbors, you will modify your routing table. You'll modify your routing table, and then you will share that routing table again. But, you know, routing table is not shared, the distance vector is shared. So, from the new routing table, the distance vector, the new distance vector will be shared.

**11:32:16** · And this will keep on going on until convergence is reached. What do I mean by convergence?

**11:32:21** · Convergence means that now there is no more updation in the routing table.

**11:32:29** · Is this clear?

**11:32:31** · Okay. Now, we will move for link state routing. Link state routing. In link state routing, the fundamental difference is we are using flooding instead of sharing just to the neighbors. Sharing just to neighbors.

**11:32:49** · Instead of sharing just to the neighbors, we are using flooding. So, what we will do?

**11:32:54** · Again, the same diagram. A, B, C, D. We will not going to share just the distance vector. We are going to share the whole link state packet.

**11:33:10** · What do we have What do we have in the link state packet?

**11:33:13** · We have sequence number and the link state and the and the local knowledge. What What is local knowledge for A?

**11:33:22** · That you can reach B and D in the cost, let's say two and one. So, you can This is what the link state packet of A. Similarly, you can make the link state packet for C, let's say. You'll write some sequence number, and then you can reach B and D. Let's say this is three, so three, and then you can reach D with 11. So, this is 11. So, this is what link state packet is.

**11:33:44** · And this link state packet will be shared or will be flooded. So, the \[clears throat\] A will send this link state to B. And let's say there are more connections from B. So, B will send the link state packet of A to each and every outgoing link it has. So, it will flood it.

**11:34:00** · And after that after that we'll apply the Dijkstra algorithm to find the shortest path. Here if you have realized if you have realized what we are doing, we are relaxing the edges. We are relaxing it. Initially, we have infinity. And then after just one update, we found that the shortest path is not of infinity but of five.

**11:34:26** · And then we will keep on doing it for the other nodes also. So, we are Which algorithm we are using here? We are using Bellman-Ford. So, in DVR we are using Bellman-Ford. And in link state we are using Dijkstra algorithm. The whole difference in one go. Link state routing. It came in 1980s and it came in 1990s. Here bandwidth required is less because we only send distance vector. Here the whole link state packet is shared.

**11:34:55** · It is based on local knowledge and you know, flooding is involved. So, this will be based on global knowledge because everyone will have the link state of everyone. So, it is based on local not local but global knowledge. This is This uses Bellman-Ford algorithm to relax the edges and this will use Dijkstra algorithm to find the shortest path. Here traffic is very less and here traffic is very high.

**11:35:22** · Here convergence will be slow and uh very low. Here convergence is faster. Faster convergence. Slower convergence.

**11:35:33** · Okay?

**11:35:35** · This uses Routing Information Protocol and this implements OSPF. Open short Open Shortest Path First.

**11:35:45** · Is it clear?

**11:35:46** · Okay. Now, let's move to our next small topic of switching. Okay. So, switching is done at network layer, but uh you know, there's a special concept of circuit switching and packet switching. This is done at network layer, but circuit switching is not done at network layer. It was designed for telephonic network. So, when circuit switching was in one invented, there was no concept of OSI layer.

**11:36:12** · Or TCP IP layer. Okay, so what is circuit switching? So, communication in circuit switch network take place in I should write three phases. The setup phase, and then the data transfer phase, and then the teardown phase.

**11:36:27** · Teardown phase.

**11:36:28** · So, what do we do?

**11:36:31** · What do we do in circuit switching?

**11:36:33** · In circuit switching network, before the actual data transfer can take place, a dedicated a dedicated circuit, or I should write here proper physical path is set up between the sender and the receiver. Okay, here in circuit switching, a proper dedicated path is reserved for data sharing. So, the dedicated path established between sender and receiver is maintained for the entire duration of the conversation. Okay, so reservation of resources must be there. Must be uh present.

**11:37:07** · The facility for reserving the resources for the concept of circuit switching. And these resources can be anything. They can be switches, buffers, uh switch processing time, switch input output port. And these resources, the important thing is they are they remain dedicated during the entire \[laughter\] duration of the data transfer.

**11:37:29** · Okay, so if I have to write the total time taken from the message from source to destination will be setup time, and then transmission time, and then propagation time, and then tear down Teardown time. Set up time will be let's say S. The transmission time will be message by bandwidth. Propagation time will be distance by uh velocity, and then the tear down time let's say be T.

**11:37:59** · Okay? And if X packets are transferred, then X not D.

**11:38:05** · Okay?

**11:38:08** · Is it clear?

**11:38:10** · So, this uh in set in set up time in set up phase what we do, we establish uh we establish a proper physical link. We dedicate the uh resources. We reserve the resources, and they cannot be used by someone else. Okay? And in data transfer phase what we do, in data transfer phase the entire data travels over the dedicated path from sender to receiver that we have set up in set up phase.

**11:38:35** · And you know, data flows are continuous between sender and receiver. As there is a dedicated proper path, there is no addressing involved in the data transfer. That's why no header, nothing. Because it's header is used to identify that what is the source address, what is the destination address, which routing path I should follow. And if I'm giving you a proper physical dedicated path, there is no need for header. No need for overhead.

**11:39:03** · Okay? What about tear down phase?

**11:39:05** · In tear down phase, we deallocate the resources. Circuit disconnection or tear down will happen. So, after the data transfer phase is completed, the circuit is disconnected. Well, so in tear down phase, a signal is sent to each switch to release the resources that my work of data transfer is now done. You can release the resources. So, Now, where is this circuit switching implemented? It's implemented as physical layer because a physical link is being established.

**11:39:40** · Okay? So, if I ask you, what is the advantages of circuit switching? I'll say, a well-defined dedicated path to travel. This is the foremost advantage. You already have resources. There is no waiting time. No waiting time. At any switch, once the circuit is established and data is transferred without any delay. No delay. No overhead of headers, as there is already a dedicated path.

**11:40:12** · Okay?

**11:40:13** · Receiver always receive the data in order. No reordering is required.

**11:40:20** · So, this is what the advantages of circuit switching. But, you know, it's not always the good side. What is the disadvantage?

**11:40:32** · What is the disadvantage you can think of?

**11:40:35** · As the connection is dedicated, it cannot be used to transmit any other system data, even if the channel is free. You have fixed it. Resources are already reserved. Now, if the person who have reser- reserved the resources is not using the resources, they're getting wasted, and some other person who wanted to use the resources will not get the chance.

**11:40:58** · Okay? So, as the connection is dedicated, it cannot be used to transmit any other system data, even if the channel is free. Okay? So, it is I can write it as it is inefficient in terms of utilization of system resources.

**11:41:13** · Okay?

**11:41:14** · And, you know, bandwidth requirement is very high. Bandwidth requirement will be high. The time required to establish a physical link, or I should write my setup phase time is very high.

**11:41:29** · It's too long.

**11:41:32** · The third thing is, as you know, there is a physical path. This is not logical loose source routing something like that. That okay, you can go from these these routers wireless. No. Here the physical path is actually set up. So, it's like the hardware. So, routing decision cannot be changed one the once the circuit is established. If circuit is established, the routing decisions cannot be changed.

**11:42:00** · Did you get it? Now, the second part or the second method of switching is packet switching.

**11:42:09** · So, in packet switching is a method of transferring the message to a network in a form of packets. Okay?

**11:42:15** · So, the message is broken into the whole message is broken into smaller pieces. It could be the fixed or variable size. We call it as packet. And then at the destination, all these packet has to be reassembled. Okay? So, they are It's like fragmentation. All the packets need to be reassembly is required. Reassemble link should be there at the receiver at the destination.

**11:42:40** · Okay?

**11:42:41** · No pre-setup or reservation of resources needed. No reservation is needed or no pre-setup phase. It is just based on store and forward technique. Store and forward technique. And you know, for between source and destination, unlike circuit switching we where we had a proper physical path, here there can be multiple path that a packet can follow. Okay? So, more than one path is possible.

**11:43:07** · Each packet contains source and destination address using which they can independently travel through the network. As you know, there's no strict path, so header is required. And based on that header, each packet can independently travel through the network. Okay? And even the packet belonging to same message, or the same packet the fragments of the same packet can follow different path to reach the destination.

**11:43:35** · Because let's say if there is some congestion in the path, then packets can choose some other path.

**11:43:41** · Is this clear?

**11:43:44** · Is this clear?

**11:43:45** · While in circuit switching packet cannot choose other path, because the there will as there will be no congestion, because the resources are already reserved, there will be no congestion. The path is dedicated, so there they will follow a strict path, and there is no header involved. Okay. So, packet switching was basically designed to overcome the weakness of circuit switched network.

**11:44:09** · Since they were not effective for small messages. For example, if you want to send a very small message, you you won't want to invest time in setup phase that a physical link should be established, and then you send a small message. No. So, for that packet switching is like a boon.

**11:44:29** · What are the advantages of packet switching then?

**11:44:32** · What is the advantage you can think of?

**11:44:34** · It is more fault tolerant. Because let's say if the physical link gets broken, the whole system is down. While here you can follow some other link. So, it is more fault tolerant in case the link is down. There is no setup or teardown phase, no setup or teardown phase involved. Efficiency is better than circuit switching. It is more reliable as destination can detect the missing packet. It is cost effective and cheaper to implement than circuit switching.

**11:45:09** · Now, again not only good side, what are the disadvantages?

**11:45:16** · Reassembling is important, because packet switching doesn't give the packets in order. In order is not there. So reassembling is required. And since the packets are unordered, we need to provide sequence number for each. We need to provide header, so there will be overhead. Transmission delay is more.

**11:45:39** · Okay? There can be delays in this packet switching. In circuit switching, as you know, resources were already reserved, so there was no concept of delay. Here the delay can be there. And packet switching is beneficial only for small messages. For large messages, circuit switching is better.

**11:45:58** · Is it clear?

**11:45:59** · Okay. Before ending the lecture, let's You know the drill. Circuit switching versus packet switching. It has three phases: setup phase, data transfer phase, and teardown phase. It has only one phase of data transfer. No need to set up and no need to teardown.

**11:46:18** · Physical path can be between There is a physical path between source and receiver. There is no physical path in packet switching. All packet use the same physical path. Here there can be multiple path. They can follow different path. Different path can be followed.

**11:46:35** · Okay.

**11:46:36** · Here the reservation should be there. Entire bandwidth is reserved. Entire bandwidth is reserved in circuit switching.

**11:46:43** · Is reserved.

**11:46:45** · And here in packet switching, no reservation.

**11:46:49** · No reservation.

**11:46:52** · And you know, if the bandwidth is not properly used, let's say you have reserved the entire bandwidth and you are not using it at the full capacity, then there will be wastage of bandwidth. And here is no bandwidth wastage. Okay? Since Since packet switching is based on store and forward transmission, this is not based on that. Store and forward.

**11:47:16** · Here congestion can happen in which phase?

**11:47:22** · It can happen during connection establishment phase, setup phase. Okay? Because there there can be multiple people wanted to wanting to reserve a single uh physical path. So, there can be competition, there can be congestion there in the setup phase. Here, the congestion will happen in the data transfer phase. As there is no setup and teardown phase in this.

**11:47:44** · Circuit switching is reliable as there is a proper physical path, no delays, reservation already done, so it is reliable. Here, it is not reliable. So, this is better for sending large messages. And this is for sending small messages. This is fault tolerant. If one link is down, you can follow other path. If physi- if physical link is down, then it's all done.

**11:48:17** · Is it clear?

**11:48:18** · So, this was the concept of packet switching, circuit switching, and we also learned about distance vector routing and link state routing. In the last next lecture, we'll begin with application layer. We'll learn about IP support. We'll learn about OSI.

**11:48:35** · Okay?

**11:48:40** · application layer. So, this application layer is responsible for all the services that internet provides provide to users. So, we can study these SMTP, DNS, FTP, HTTP, POP. ST- SMTP is used for email purposes. This is used for domain domain name to IP addresses. This is used for file transfer. This is file transfer protocol. This is used for web services. POP is used for downloading the email, similarly like IMAP.

**11:49:13** · Okay, so for email, we are going to study email, we're going to study SMTP, POP, and IMAP. Okay? So, let's say this is This is our \[clears throat\] email. This is our sender. Sender will push using SMTP on this sender mail server. This is sender mail server.

**11:49:42** · So, sender will push the email using SMTP on sender mail server. And then, this will be pushed again. This will be pushed again over internet to the receiver mail server. Receiver mail server. And this will be pulled at the receiver end with the help of you can call it as pull or download with the help of POP 3 or IMAP. Let me create a clear diagram here. Sender will push on the sender mail server.

**11:50:21** · And then, this will push again over the internet to the receiver receiver mail server. And then, it will be pulled or downloaded onto the receiver computer. Okay? So, for pushing, we are using SMTP. For here also, we are using SMTP. And for downloading, we can use POP or IMAP. POP 3 or IMAP 4.

**11:50:44** · Is it clear?

**11:50:45** · So, SMTP transfer the mail from sender mail server to receiver mail server. While sending the mail, SMTP is used two times. Okay, between the sender and receiver mail, sender and the sender mail server, and then sender mail server to receiver mail server. Here, it is used two times. Okay? And SMTP is pure text-based protocol.

**11:51:07** · To send multimedia, we use MIME that convert that is used for the multimedia purposes. Now, to receive or download, another protocol is needed between the receiver mail server and the receiver. The most commonly are POP 3 and IMAP4.

**11:51:27** · Is it clear?

**11:51:31** · Is it clear?

**11:51:33** · Okay, you may hear the name of mail transfer agent. So, let's say here is user A. It will send it to user agent. And user agent will call mail transfer agent client. And then this mail transfer of client with the help of internet will communicate to mail transfer agent of server. And then it will send to user agent. And then it will be accessible by user B. Okay, you can also learn about this diagram.

**11:52:02** · \[clears throat\] Okay. So, let me clarify some of the points. The objective of SMTP to transfer the email reliably and efficiently. Reliability and efficiently. What is the port number? Port number is 25. There are two components, user agent and mail transfer agent at both side. Okay, user agent prepare the message. User agent It prepares the message, create the envelope, put the message into the envelope. Okay, mail transfer agent transfer \[clears throat\] the mail across the internet.

**11:52:38** · Okay, so actual mail transfer is being done by mail transfer agent. Mail transfer agent, okay? And to send the mail, system must have a client mail transfer agent. And to receive the mail, system must have server mail transfer agent. Okay, I've already discussed that it is for the text only.

**11:52:57** · Okay?

**11:52:59** · With the help of SMTP and POP, we can send only text messages. 7-bit ASCII text only.

**11:53:08** · Is it clear?

**11:53:10** · So, SMTP cannot transfer other type of data like images, videos, cannot transfer binary files or executive executable files, cannot transfer text data of some different language than English like French, Japanese, Hindi, or Chinese.

**11:53:24** · Uh SMTP is not sufficient to send binary files. Okay?

**11:53:28** · To do that to do that, we call some other protocol MIME, multipurpose Internet Mail Extension. And what does it do? It's a supplementary protocol that allows non-ASCII data, let's say of video or text text well in some different other language or some audio file, video file to convert into ASCII format. Okay? It's a supplementary protocol that allow non-ASCII data to send through SMTP.

**11:54:01** · Is it clear? So, it's used to convert the non-text data to text data and then at the receiver side text data to again the non-text data.

**11:54:11** · Is this clear?

**11:54:13** · One another important part is that this is a stateless protocol. It does not maintain any information of the user. If an email is asked to be sent twice, then server resend it without saying that email has been sent. Okay? It's a stateless. It's a connection oriented.

**11:54:32** · Connection oriented.

**11:54:34** · At transport layer, it uses TCP.

**11:54:37** · Okay?

**11:54:39** · And which TCP? Persistent TCP connection. So, that it can send multiple email at once.

**11:54:47** · Okay?

**11:54:49** · Is it clear?

**11:54:51** · Now, let's learn more about POP POP3. Okay, what is POP3? It's a message access protocol. It is a pull protocol. We have already seen this. It is a pull protocol. It uses port number 110 at TCP.

**11:55:07** · Connection oriented.

**11:55:08** · And again, it uses the same persistent TCP connection. Okay, now there's important difference. As I have told you that you can use either POP3 or IMAP4. Now, what is the difference between them? As they are both pull protocol, IMAP4 is more advanced one. As POP3 do not allow the user to organize to partially check the content of the mail before downloading, while IMAP allows it. Okay, so POP3 have two modes.

**11:55:39** · The keep mode and the delete mode. In delete mode, the mail is deleted from the mailbox after retrieval. While in keep mode, the main mail remains in the mailbox after retrieval. Okay, so whatever mode you choose, it will perform accordingly. The names itself suggest what does that mean. Now, IMAP, it is similar to POP, but it has more features. It's more powerful and more complex. It provides extra functionalities of checking the email prior to downloading.

**11:56:17** · You can search for the content of the email for a specific string prior to downloading. You can even partially download the email. You can create, delete, or rename the mailbox on the mail server. You can create a hierarchy of mailbox. What I mean is you can organize things. Organize. Here, POP3 do not allow to organize.

**11:56:39** · Okay.

**11:56:40** · So, POP IMAP4 is a again a pull protocol uses a port number of 143. Here, the port number was 110. It also uses persistent TCP It is a stateful.

**11:56:55** · Okay?

**11:56:58** · Is it clear?

**11:57:02** · Okay. So, next protocol is DNS, Domain Name System. So, you know, it is easy to remember domain names like google.com. Okay? But, it is not easy to remember the IP addresses. So, IP addresses are even not static. They change based on the location. DNS is a protocol used to convert domain name to IP addresses. It's similar to like your phone book that you can remember the name, but not the numbers.

**11:57:33** · That's why in your phone book, in your contacts, you can search from the name, and that corresponding contact number will be provided to you. The same thing happen here. You can remember the domain name, can remember the website name, but not the IP address. Okay? So, you have heard about several domain names like .com, like .edu, .org, .gov. Okay? So, these are the domains.

**11:58:00** · Okay. So, how does the hierarchy work?

**11:58:02** · Let's see. So, we have root DNS server.

**11:58:06** · Okay?

**11:58:07** · Above that, we have a root server. And there we have a root DNS server. From here, it have .com DNS server, .org DNS server, .edu DNS server. So, this is what root server is. This is what the top-level domain servers are. Top-level domain servers are. And based on this, and then you can extend the hierarchy. For .com, you can have google.com. For .org, you can have uh like ieee.org. For education, you have mit.edu.

**11:58:46** · Okay? So, these are authoritative server. Okay? Now, for querying, we have two type of queries, the iterative queries and the recursive queries. Iterative queries work like this. The host will ask the local DNS server. Local DNS server will search the root server. Root server will reply. And then it will move to top-level DNS server and then that top-level DNS server will reply. And then it will ask the authoritative server and then that will reply.

**11:59:18** · Okay, this is what iterative is. It goes here, ask here, come back, goes here, come back, goes here, come back, and then will return to the host.

**11:59:29** · While in recursive, what will happen?

**11:59:32** · In recursive, the host will ask the local DNS server. Local DNS server will ask the root server. Root server will ask the top-level server. Top-level server will ask the domain uh authoritative authoritative domain server. And then authoritative domain server is not going to reply the host or the local local DNS server. It's going to reply the top level.

**12:00:00** · So, it work in this manner. Are you getting the point?

**12:00:03** · Here, it was working in this manner. It will ask the local server. Local server ask it will reply back to ask it will reply back ask it will reply back and then will reply back to the host. Here, it work like this.

**12:00:15** · It will ask the local server. Local server will ask the root DNS server. Root DNS server will ask the top-level DNS server and then to the authoritative. Then this authoritative will reply to the top-level DNS server. Top-level will reply to root server. Root will reply to local DNS server and local DNS server reply to host.

**12:00:35** · Is it clear?

**12:00:37** · And by default, by default, the DNS uses UDP at transport layer. See, it can either use UDP or it can also use TCP. It depends on the query size. If query size is high, if query size is high, then it use TCP. What is the threshold? 512 bytes. If the query size is greater than 512 bytes, it uses TCP.

**12:01:02** · And by default, if someone ask, then you say UDP. And the query size is generally lesser than 512 bytes.

**12:01:11** · Is it clear?

**12:01:13** · Then we have File Transfer Protocol. Okay? So, it's a standard internet protocol for transferring files over between the computers over TCP IP connections. It uses the port number 20 and 21. 20 is used for data connection, and 21 is used for control connection. Okay? So, control connection remain connected during the entire FTP session, while data connection is open and closed for each file transfer activity.

**12:01:46** · Are you getting the point? So, we have two port here, one control and data. Control remain open for the whole session, while the data port opens and closes at each file transfer activity.

**12:01:59** · Is it clear?

**12:02:01** · So, we call FTP as out of band protocol. As data connection and control information flow over different connections. Data and control information flow over different connection. That's why we call it as out of band. Is it clear? FTP is also a stateful. What are more properties? I can't remember. You know, HMT HTTP HTTP SMTP, they were all in band. And this whichever uses two ports like FTP, 2021, DHCP, they are out of band.

**12:02:49** · While the one which have a single port, they are in band. Okay? FTP is also stateful.

**12:02:57** · Okay?

**12:02:59** · So, yes, this was about FTP. Oh, I remember one thing about the transmission mode transmission modes of FTP. You can transmit in stream mode, block mode, and compressed mode. In stream mode, it's a default mode. This is default mode. Data delivered from FTP to TCP as a continuous continuous flow of a stream or continuous flow of bytes. Here, data is delivered in blocks.

**12:03:32** · And each block have a three-byte header in the beginning. The first byte is called each block have a three-byte header.

**12:03:39** · Three-byte.

**12:03:40** · The first byte is called as block descriptor.

**12:03:46** · Okay?

**12:03:47** · And the next two bytes, what do what do they do? They define the size of block in bytes. Define the size of block. In compressed mode, the if the file is big, data can be compressed. Okay? By removing the spaces, by null characters, these spaces and null characters are usually compressed. Okay? There could be different file types like ASCII file type, EBCDIC file type, image file type.

**12:04:16** · Okay? So, file transfer can use these of the file types across the data connections.

**12:04:24** · Is this clear?

**12:04:28** · Okay? Now, what about HTTP protocol. This is mainly used to access data on the World Wide Web. Used to access data on World Wide Web. Okay, it is also in band. What is the port number? 80 on TCP. It's a state less state less. Okay, so there are two types of There are two types of HTTP, non-persistent and persistent.

**12:04:58** · This is 1.0 and this is 1.1. What do we mean by non-persistent?

**12:05:04** · For each request and response, one TCP connection is made.

**12:05:10** · Is this clear?

**12:05:11** · And for persistent, the server leaves the connection open for more request after sending the response.

**12:05:19** · Is this clear?

**12:05:21** · In non-persistent, what do we do?

**12:05:24** · One TCP connection will be made for each request and response. And in persistent, the server leaves the connection open for more request.

**12:05:33** · Is this clear?

**12:05:38** · Okay. So, the thing is I know I know I know this class is boring. But, we have so many protocols. You can study from uh outside also, but I am just covering the major ones. If you If you want, I can teach more also, but let's say if you are saying that class is getting bored, so we will move towards some of the interesting protocol.

**12:06:02** · IP support protocols.

**12:06:04** · Okay.

**12:06:06** · Here we will study about the ARP, which we have discussed in the class one. We will study about ICMP. We can also study about RARP.

**12:06:14** · Okay.

**12:06:19** · Okay. So, ARP is a communication protocol used to find the MAC address of a device from its IP address. Okay, we have discussed this already.

**12:06:29** · What do we do in ARP?

**12:06:31** · In ARP, we broadcast we broadcast that I know the IP address of yours, but your MAC address is not known. So, this packet will be sent to each and every router present. Not the router, but the host. So, this packet will be sent to each and every host there.

**12:06:49** · Host will match, is this my IP?

**12:06:51** · Then if it is not, then it will ignore. If it is its IP, then it will send the source IP or the source IP of the packet. Let's say the source IP is let's say 10.

**12:07:05** · Okay?

**12:07:05** · I'm keeping some random numbers. So, what it will do?

**12:07:09** · It will attach its MAC address, and it will keep the destination address as 10. This This packet was broadcasted. So, the request is broadcasted, and the reply is unicasted to the specific one who asked for the MAC address. Is this clear? Let me write. Suppose this guy wants to know the MAC address of this guy. So, it will broadcast the packet into the network to all of them.

**12:07:39** · Okay? So, as you know, in ARP, IP address is also mentioned so that the one whose MAC address this guy want to know may know that someone is uh someone is desiring to know my MAC address. So, this packet will be sent to all of them. Is the IP getting matched? No, it will ignore. The IP is getting matched. So, it will attach its MAC address, and it will send or reply back to the requester.

**12:08:12** · Is this clear? So, the request was broadcasted. And the reply will be unicasted.

**12:08:21** · This was ARP.

**12:08:24** · In ARP, what do we do?

**12:08:27** · In ARP, with the help of IP address, we find MAC address. RARP is just the opposite. With the help of MAC address, we find the IP address.

**12:08:39** · Is this clear?

**12:08:42** · Okay.

**12:08:43** · So, this was ARP RARP. Let's discuss about an interesting protocol, ICMP. Okay. We have discussed about it before that whenever some error occurs or the router has some problem and router have to report the problem to the sender, then router uses ICMP packet.

**12:09:04** · Okay.

**12:09:06** · We have discussed this ICMP is used for error reporting of messages. So, error reporting of the messages. So, whenever this datagram is discarded by some intermediate router, let's say here is router one, router two, router three.

**12:09:20** · If it is discarded by some intermediate router, let's say for any reason. Let's say the checksum of it is not matched or let's say uh TTL field, the TTL limit has reached, then router will send the ICMP packet back to the sender to aware the sender that your packet has been discarded. So, this information is sent using ICMP.

**12:09:45** · And the direction of ICMP of for the ICMP is the direction \[clears throat\] of the packet movement for ICMP is from router to sender or receiver to sender. Okay. Sender do not send this to router or sender do not send it to receiver.

**12:10:02** · Either it is sent by the receiver or it is sent by the router. Router may send due to the TTL limit reached. Receiver may send it back due to the mismatch \[clears throat\] in the checksum calculated. Okay. It is used also used for query messages.

**12:10:20** · For example, there are client and server and client want to know whether the server is live or not, then it send ICMP message to the server. It is also used for \[clears throat\] It's also used for echo request and reply. It is used for time stamping request and reply. So, there are several uses of uh ICMP.

**12:10:43** · Okay. And one important factor is let's say if ICMP packet is discarded, then there is no ICMP error message in response to the datagram carrying an ICMP. Because if an ICMP generated for ICMP, and that ICMP is also discarded, then another ICMP is generated. So, in this manner, traffic or congestion is going to increase.

**12:11:06** · So, no ICMP error message generated. I can write no ICMP message for generated for ICMP packet for the \[clears throat\] for the packet which is not the first fragment. So, I can write where more fragment is or not \[clears throat\] the first fragment. Not the first fragment. It is not \[clears throat\] generated for multicast address packet. It is not generated for the having special addresses like 127.0.0 or 0.0.0.1.

**12:11:44** · Okay.

**12:11:46** · Or zero. So, for a special addresses, for multicast, for the packet which is not the first fragment, or for the ICMP packet itself, no ICMP is generated.

**12:11:57** · Okay.

**12:11:59** · So, whenever \[clears throat\] TTL limit is reached, the router will discard the packet and send an ICMP message to the source. You know, this is used for source quench in.

**12:12:12** · What is source quench message?

**12:12:13** · Source quench message is a request to decrease the traffic rate for the messages sending to the host. Or we can say that uh when receiving host detect the rate of sending packet is too high, is too fast, then it send the source a source quench message that the sender that you must stop or you must slow down the pace. I am getting overwhelmed. Okay, so this is what a source quench message is.

**12:12:41** · Okay? If the checksum is not matched, then we call it as parameter problem. Then ICMP packet message is sent. If the destination itself is unreachable, if the destination itself is unreachable, then also ICMP packet is sent.

**12:13:00** · Let's say for redirection that the packet is meant to be sent on some different route and it is present on some different route, then the router will send the packet to the correct route and will also notify the sender that your router uh it will also notify the sender that your packet was on a different or the wrong route and I have sent it to the correct route.

**12:13:24** · \[clears throat\] Is this clear?

**12:13:27** · And you know, there is a very special use case of ICMP. If you think that suppose sender want to know that what packet or what route does the packet has followed? So, what sender can do? Sender can send the set the TTL value as one. What will happen? As soon as it is it is uh encountered by the network layer of router, network will network layer will decrease the TTL value to zero.

**12:13:57** · R1 is the first router. How sender will know? Because source IP will be mentioned as R1, destination IP will be mentioned as the sender itself. Okay? Now, what sender will do the next time it will set the TTL value as two.

**12:14:12** · What will happen now?

**12:14:16** · At R1 TTL value will be set to one and at R2 TTL value will be set to zero. Now R2 will send the ICMP message. Source IP is R2 and the destination IP is sender. So this time sender will know, okay, so first it goes to R1 and then to R2. Then this time it will set the value to three. So value become two here, one here and zero here. So this time R3 will send.

**12:14:41** · Source IP will be of R3. Sender will know that oh, this time it was R3. So this is how sender can record the route the packet is going to follow.

**12:14:54** · Is this clear?

**12:14:58** · Now let's discuss the OSI layer. OSI layer. So initially we have application layer, presentation layer, session layer and then transport layer, network layer, data link layer and then physical layer. These three layers, application, \[clears throat\] presentation and session layer, these are known as user support layers. This mainly deal with the interop interoperability. That is the two different system can communicate. This deals with the user support layer deals with the inter operability.

**12:15:34** · Okay, transport layer is used as interface.

**12:15:39** · Interface.

**12:15:41** · Links two subgroup, links two subgroup. This group and this group. Network support layer, this is what network support layer is. Network support layer and user support layer.

**12:16:00** · User support layer.

**12:16:02** · Okay. So, this So, this deal with the physical aspect. Physical aspect of moving data from one device to another.

**12:16:15** · Is this clear?

**12:16:17** · Okay. So, let's discuss what are the functions of physical layer. It is used for uh it is used for the topology. Responsible for the movement of individual bit from one host to the one hop to the next. It defines topology. It's totally a hardware layer. It defines encoding. Okay? It defines the configuration. What about data link layer? It is It is used for flow control, error control, access control, physical addressing, the MAC.

**12:16:47** · Okay?

**12:16:48** · We have discussed this. What about network layer? It is used for host-to-host connectivity, logical addressing, switching, routing, fragmentation, congestion control. Okay, what about transport layer? It is used for end-to-end connectivity. We have discussed about the ports here. Okay, flow control, error control. Reassembly, segmentation, congestion control. We have discussed whatever the congestion control policies there. Okay? Functions of session layer. It is used to synchronize the sender and receiver. Okay? It's like a network dialogue controller.

**12:17:24** · It also does authentication, authorization. Okay, dialogue control is basically the functionality of session layer.

**12:17:30** · What about presentation layer?

**12:17:32** · Presentation layer is like an advanced functionality layer. Okay? Character translation, encryption, decryption, compression. This is done at presentation layer. And what about application layer? It is responsible for providing services to user like mail services, file sharing, file transfer, and many more. We have discussed this. I suggest you to watch a whiteboard drawing animated video of I think 17 minutes on the OSI. It's for about 5 6 million views.

**12:18:02** · You can watch it on YouTube. It will provide a complete functionality. It's a complete overview of how OSI layer work with synchronization with each other. How they interact with each other. Okay? So this you can watch the 17-minute video. And from this you can assume that your computer networks is over. I have given you the DPP you can solve. The reading material is already with you. You can read.

**12:18:30** · Okay? Then we will take three doubt class. We will address all the doubts. We'll address the PYQ.

**12:18:37** · Okay? Doubts PYQ.