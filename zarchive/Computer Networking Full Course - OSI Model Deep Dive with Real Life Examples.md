---
title: "Computer Networking Full Course - OSI Model Deep Dive with Real Life Examples"
source: "https://www.youtube.com/watch?v=IPvYjXCsTg8"
creater: "[[Kunal Kushwaha]]"
published: 2022-01-17
created: 2026-07-25
description: "Learn how the internet works in this complete computer networking course. Here we cover the fundamentals of networking, OSI model deep dive, networking protocols, devices, tools, and more with real-li"
tags:
  - "Yt"
---
# Computer Networking Full Course - OSI Model Deep Dive with Real Life Examples
Source: [YT](https://www.youtube.com/watch?v=IPvYjXCsTg8)
![](https://www.youtube.com/watch?v=IPvYjXCsTg8)

Learn how the internet works in this complete computer networking course. Here we cover the fundamentals of networking, OSI model deep dive, networking protocols, devices, tools, and more with real-life examples.  
  
Take part in the learning in public initiative! Share your learnings on LinkedIn and Twitter with #DevOpsWithKunal & don't forget to tag us!  
  
Complete DevOps playlist: https://www.youtube.com/playlist?list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak  
Complete Java DSA playlist: https://www.youtube.com/playlist?list=PL9gnSGHSqcnr\_DxHsP7AW9ftq0AtAyYqJ  
  
➡️ Connect with me: https://www.techwithkunal.com  
  
\=========================================  
Timestamps:  
0:00 Introduction  
4:50 How it all started?  
17:38 Client-Server Architecture  
22:00 Protocols  
24:20 How Data is Transferred? IP Address  
34:23 Port Numbers  
42:25 Submarine Cables Map (Optical Fibre Cables)  
48:00 LAN, MAN, WAN  
52:20 MODEM, ROUTER  
55:47 Topologies (BUS, RING, STAR, TREE, MESH)  
1:01:34 Structure of the Network  
1:06:33 OSI Model (7 Layers)  
1:29:00 TCP/IP Model (5 Layers)  
1:30:20 Client Server Architecture  
1:38:18 Peer to Peer Architecture  
1:39:52 Networking Devices (Download PDF)  
1:43:05 Protocols  
1:50:22 Sockets  
1:51:10 Ports  
1:53:12 HTTP  
2:00:00 HTTP(GET, POST, PUT, DELETE)  
2:04:44 Error/Status Codes  
2:06:30 Cookies  
2:11:00 How Email Works?  
2:19:00 DNS (Domain Name System)  
2:32:24 TCP/IP Model (Transport Layer)  
2:47:35 Checksum  
2:49:00 Timers  
2:54:00 UDP (User Datagram Protocol)  
3:02:05 TCP (Transmission Control Protocol)  
3:09:10 3-Way handshake  
3:13:40 TCP (Network Layer)  
3:21:50 Control Plane  
3:24:30 IP (Internet Protocol)  
3:38:45 Packets  
3:41:42 IPV4 vs IPV6  
3:49:50 Middle Boxes  
3:52:32 (NAT) Network Address Translation  
3:55:40 TCP (Data Link Layer)  
  
#networking #osimodel #internet #course

## Transcript

### Introduction

**0:04** · hey everyone welcome back to another video and in this video we're doing a complete computer networking course which is important for the current boot camps that I'm running and the future boot camps as well because if you're a developer then networking is you know important uh how networking works even if you're a mobile developer or a web developer for example or like we're doing the devops boot camp right now right um so it's crucial right it's

**0:30** · extremely important so the the a little bit of like a motivational thing that I'll tell you is when I started with like computer science in my in my college I had the thrill of uh you know like how things are working so I used to look at like what is RAM how does RAM

**0:45** · work how do computers work what are the computer architectures what happens when the computer starts up how does the internet work when I type www.google.com how does it display the web page what are all the internals and everything so in this little story that I mentioned there are a lot of components how computers work how this thing works how that things works and so on and so forth this is the sort of mindset you need to have if you want to be a great you know like developer and like uh be an extraordinary student if

**1:14** · you will so in this video we'll learning about how internet works okay computer networking so please watch it completely it's going to be a long video because it's going to cover like everything about how internet internet works so we look at like what is internet basic stuff how it's how it started right what were the early days like how it has evolved over the years and then technical uh technical deep types so

**1:37** · what happens when you enter a URL what is a URL how it gets resolved what is a server what is a client what is the you know protocol what are the protocols The OSI model and how actually how things are working you know in a story format because even though we'll be learning about the textual uh textbook stuff obviously but that is something everyone can teach there is something you can find everywhere um one thing I'll try to put it in a way is um make learning fun as I always do in every single of my one of my videos uh storytelling uh uh

**2:10** · format right so that you have fun while learning so we're starting with the internet and uh this is the complete D boot camp that we are currently going on so you can check out the links in the description we also have a complete data structure algorithms boot camp for interview preparation so for that you can also find the links in the description and then you can clear uh any Fang interview with that preparation it's free everything is free so make sure you check it out all right so when

**2:34** · we talk about like computer networks right what does it mean what what do we mean by computer network in in simple terms it's it's just uh computers connected together right that's it someone in my college also if they ask me some technical definition or whatever right oh no you know that movie uh 3D it's it's a movie Bollywood movie they ask what is a machine and that that guy literally like says a lot of things I have never been that guy I could not care less uh about the big big

**3:02** · definitions okay what is computer uh so there computers computer also has a full form if you didn't know commonly oriented machine particularly used for training Education and Research that's the uh full form of computer I I I memorized it because in my high school my teacher they used to ask us this thing every day so anyway uh what is a

**3:25** · network computers connected together that is a network no no problem that is a network right then what is the internet so internet is basically a collection of these computer networks okay so my computer is connected to my sister's computer her computer is connected to someone else's computer and our computers are connected to like you know the Wi-Fi or whatever and that is connected to other people's computers and sort of like this these this connection of con computers connecting with computers this connection is basically spread across like you know houses cities countries so

**3:55** · on and so forth so this entire connection on a global scale it's known as the internet okay so I don't think I have to draw anything about it but uh this is a network computer a connected to computer B okay if this is like spread across a

**4:15** · large region or countries or whatever know everyone connected to each other like whatever like this is the internet okay so internet is a comp collection of computer networks let's look at like uh we all know this right we all know what computer is we all know these basic basic definitions and everything but let's look at uh what do we actually mean like how did it start and uh how

**4:44** · are they actually connected that is what we are going to be focusing on this course let's look at how it all started so let's talk about how the internet started let's go to you know the very beginning of uh of this era so what happened was that the Cold War was going on and there was the United States and the the Soviet Soviet Union and they they were like battling with one another like who is going to be the very first okay so when it came to you know um

### How it all started?

**5:12** · launching the world's first satellite so the United States and you know the Soviet Union uh you know Russia they were like hey um who is going to launch the very first satellite we want our names to be written in history for example so Russia won the Soviet Union uh one they launched Sputnik in around 1950s somewhere 1957 to be precise so

**5:35** · that was the very first satellite but now the the US were like okay this is not cool we wanted to be the first how so what do we do how do we not miss out on further opportunities like for example we want to be the first to you know step on the moon we want to be the first on this or that or whatever right so you us was like okay this is not cool this is not working we want it to be the first uh so the US government they created a uh a program arpa so arpa is known as advanced research projects agency okay so they were like hey you

**6:07** · are supposed to you know uh do all the scientific uh discoveries and keep our country number one okay so what happened was that uh arpa you know they they wanted to like have a some sort of a way to communicate with each other okay so

**6:24** · arpa had like facilities they had their buildings or whatever okay so they had their buildings in ious parts of the United States okay but they were like Hey how do we communicate with them it's becoming very difficult you know buildings are so much far far away from each other so they developed something called the arpanet okay so arpanet was basically uh

**6:45** · uh there were like four uh four places where these computers you can say were first was at like MIT okay second was at like Stanford

**7:02** · third was at I believe UCLA and there was one more uh University of Utah they were like connected to each other or whatever okay something like that so now

**7:18** · basically this is what they had so they were like hey we can now communicate with one another we want to sell some files or what you know whatever you want to do you can do it they were using PCP for this transmission control protocol what what is TCP it's a very important topic TCP IP IP addresses UDP and you

**7:34** · know file file the the the how simple mail transfer protocol all these things we'll be covering in detail okay so don't worry TCP forget about what TCP is let me tell you what it like what what do we mean by these protocols and stuff so basically in simple terms um you are sending an email to someone okay they that may require some steps obviously I'm sending

**8:03** · an email to someone it will require some steps it like hey first send this email over here then send this email to that person they will then download it from the server and then they will read that email or whatever that will happen okay you want to talk to your friend okay so you're talking to your friend hey you connect with a friend make a establish a connection then you send your video they receive your video they send your they send their video you receive their video and you're talking on video conferences and some of the frame rates drop or whatever happens when network is not stable right you

**8:35** · want to send a file that is very important and you don't want anything to be removed from that file while it's being transferred okay you're like hey I want to send these special secret documents and uh obviously all the data has to be sent no data should be lost okay so this is what you can say different type of things I am trying to send over the Internet make sense email video

**9:00** · secure files so many things different types of things I'm trying to send over the Internet so different types of rules will be required okay there might be some rules set by someone hey if you're sending a secure file the internet should make sure that 100% of the data that you have sent to your friend will be delivered if you're video conferencing with your friend then the internet can drop a few pictures or frame rates because it does not matter that much

**9:29** · okay so these rules that are set up by people how a particular data is being sent these are known as protocols similar there's this TCP protocol IP protocol UDP so many other things okay now you know what TCP IP UDP and stuff the category is individually what it is we'll look into later on what is the difference between TCP UDP how email works and everything else okay sound good so this was like

**9:59** · the very first computer sorry internet stuff okay cool this organization is still available like there still like they have been renamed but they are still in practice okay so that's basically about it and uh after that you know as Years Years progressed uh more and more inter uh more and more computers were added more and more locations were added to the aranet and

**10:23** · uh that's it yeah started falling like DCP IP just write IP over here as well that's it okay as simple as that so right now we are in the very early stage of the internet it does not have like really with like consumers or what it's more like research focused okay you're only able to talk to one another like this okay via some protocols we still use like tcpip but how it has changed quite a lot let's look into that okay

**10:54** · cool so one problem happened was that but uh as this was a research project many people wanted to share their like research papers and stuff which was not really working in this particular domain okay so basically the idea was

**11:14** · that um I want to be able to share some documents that reference like some other documents or whatever okay so what happens is that uh I want to send a research paper from MIT to standard transfer for example this is a research paper it has a link in it this link is linking to another research

**11:39** · paper Okay so this automated sharing this was missing previously okay so someone is like hey imit has sent me a document on uh about something like uh you know um

**11:59** · apples or something and there's some other information about apples in another document I need some sort of a way that I just click this link and it will Point me towards that document then that research paper or whatever comes into picture www the worldwide web you must have heard about Tim burners right so Tim burners uh you

**12:24** · know developed the worldwide web okay so worldwide web is a project that basically stores these documents okay okay you can store and you can access these documents via the worldwide web all right you can actually check out the very first website that was created as well let me show you okay this is the world's first website info.ch hypertex www. pro.

**12:53** · HTML so don't confuse yourself with worldwide web K what is worldwide web where is it stored okay whatever no it's just a universal like it's it's allowing you access to all these documents and it has all these links okay if I click on

**13:10** · technical how to provide data okay you have plain text files you have script and things like that okay you have to make a server we all know we we learning how how to make servers and everything worldwide web you can see on Wikipedia as well it's where do documents and other web resources are identified bya a url url like this you

**13:33** · know we all know about what a URL is which may be interl by hyperlinks there are so many links that are interlined in this web page and they are accessible over the Internet that's it that is the worldwide web a collection of all these pages and everything okay and it's published by web

**13:55** · servers you can host your own server Okay so now you know where this all these things is stored on web servers how servers work we'll cover later on okay so URLs and everything uh URL and everything we'll talk more about more about later but uh this is basically about it this was the world's first website okay this is it but you'll be like Kunal

**14:21** · there's a problem here there is no search engine like how do I search for something if I want to search for something how do I search for it you can't you can't search for anything in this so This option was not available okay so to answer your question how did we search for things then you couldn't okay you just go to hyperlinks from hyperlinks you can you could save it in like some indices but it could not scale to like you know when there were like so many pages coming up and things like that so in the end they had to develop

**14:52** · search engines Yahoo I believe was the very first one um but you can check out more about it like in the history of search engines you can go to Wikipedia and you can check it out then we had search engines and now that's it that we are now you know in the history of internet now now a lot lot more things are coming up you know like web 3 and things like that and so so on and so forth like I'm not sure like uh you know uh where we'll where we'll head up but uh but you know where we're going so

**15:21** · yeah that's the modern internet now we have search engines and everything but that's like the brief history okay now let's learn about you know the protocols thing that I was mentioning so you might have a question Kunal why even we want protocols why do we need these rules you

**15:36** · know so imagine you are making an application okay and someone else in some other country is making an application you have some different rules about how your application can communicate with some other one's application they have a different rule like I will con communicate with another applications in a different way so can you really communicate with each other

**15:57** · no no you can't that is why it is extremely important to have like a set of rules and regul regulations okay so these rules and regulations who writes these I'm talking about I want to send an email okay so every single person who sends an email to another person across the world you know have there have a

**16:19** · that email is being sent using a set of rules and regulations okay first this will happen then this will happen then this will happen but who made these rules who controls these rules who creates the new rules the internet Society right now I'm just telling you all the cool stuff but uh how it works how the every step happens that we'll cover later on okay so the internet society as you can see over here uh this is the internet society and they are the ones who are responsible for all these

**16:50** · things okay so how do we actually make submissions we can do that by RFC RSC means I believe request for comments okay so you can set a document like hey I have this idea about some feature of the internet or whatever you can please you know check it out so you can submit it on on this page it's usually submitted by you know very high professionals or whatever but anyone can submit submit until unless they have like an like till they have an idea okay so the internet

**17:20** · Society comes up with all these rules and stuff you can learn more about them over here internet society.org okay so now let's talk a little bit more about some technical terms we know like how internet started now and everything but only mentioning about these protocols right the protocols and how the like we know what is happening but we don't know how it's happening like I know what the internet is how it started but we still don't know how it works so

### Client-Server Architecture

**17:49** · before that let's You Know cover a few terms and stuff so you may have heard about servers okay what is a server you may have may have heard about a client so what is a client so example you have your computer right this is you you have your uh computer and um you write here

**18:11** · google.com Okay you click enter it sends a request to the Google server and Google sends back a response to your computer

**18:31** · client server okay you write google.com again this is a very broad explanation every single D construction of it like a deep dive of how this is happening internally what are the actual steps that are being taken and I will actually make the picture clear in your mind how the internet works okay A little bit of a spoiler alert you know the various countries and various continents across the world we are connected via wires

**19:04** · these wires are laid underground under the ocean that's how we are literally connected so internet is not like in the cloud it's actually under the sea I'll tell you more how these things work internally later on but the simple idea is right now let's focus on what we are doing okay then then I'll talk you talk to you talk to you about how we are doing it so basically you write google.com Okay Google it it it this basically your

**19:32** · computer sends a request to the server Google's server okay and the server gets that response Ser is like okay I got your response uh I got your request here's what you wanted there you go take all these take all these things it sends back a web page and a bunch of other things a response is sent back to you

**19:59** · okay so does this mean that you cannot be the server yourself when you're like your own computer cannot be a server it definitely can be that is known as when you work on Local Host and stuff okay so your same computer can actross a server also and a client also okay let's just give you an example of this okay here let me write

**20:25** · google.com web page loaded how what happened so there's a bunch of things inspect ele inspect so inspect basically shows me all the things Network I'll refresh so many things happened okay in this one request these many things happened okay a get request was made and get request was made and so on and so forth and these are all the things you know like status 200 means everything is okay and everything so you got like HTML

**20:57** · uh and uh you got like J some JavaScript and PNG and HTML Json files and so on so forth so all these things we got back from Google and it created this web page okay let's do a deep dive into this like how this thing is working and how google.com gets resolved to IP addresses or forget about IP addresses let's talk about what are IP addresses okay what are these protocols and everything let's and what is this like status code what is this get what is this um you know

**21:29** · post and get let if I refresh it you can see there's get there's post what is this method what is this domain what is this status code what is this indicator initiator what is this type and what does this mean by like this transferred what is this B and KB what is this size what is this thing what are these milliseconds everything will

**21:51** · cover okay so if you want to see all the HTML that we got and everything and you can see like what is this thing everything we cover right now okay so let's do it okay so before that let's talk a little bit about protocols that I mentioned previously so what are protocols Protocols are just um rules

### Protocols

**22:09** · that are defined by the internet Society okay they're like hey these are the rules this is how data is transferred and everything okay so there are some like basic basic protocols there's like TCP which we'll look into details okay so TCP is known as transmission control protocol Okay so so the idea is that it will ensure that the data will reach its destination and it will not be like uh

**22:37** · corrupted on the way okay so there's something you definitely want the person to get completely you should use it will be using TCP in your applications okay there might be another examples like UDP so when you do not care about if 100% of the data is reaching your friend or not whomever you want to send the data for example video conferencing okay so not all data may be reaching and that is totally fine by this that is totally fine by us another

**23:09** · one is HTTP UDP means uh user datagram protocol the next protocol is hyper text transfer protocol okay this is being used by web browsers the worldwide web okay so it basically defines um the format of the um you know uh the data that is

**23:37** · being transferred between your like uh when we talking about www so web clients basically and web servers okay clients and servers Okay cool so when a client over here in this you can see sends a request to a server so these particular things like Client Center request to a server server will send something back all of these things are uh given inside HTTP how the server

**24:05** · will send back the data that is also a rule that is given in HTTP okay we'll talk more about that later HTTP https and everything okay cool so it's basically about it but don't worry we'll go into details of it as well like how it works and everything okay okay one more thing that we'll cover later on and I'm just giving you a brief about is how data is transferred

### How Data is Transferred? IP Address

**24:28** · okay um you know everything in online is like uh in computers everything is zero and one okay so it's it doesn't make sense to send the entire data at once suppose you want to send a large file over the Internet do you send the entire file in just one single go no it comes in chunks isn't that correct same things happen with these sorts of things like uh when you loading a web page watching a movie online or whatever data you'll be getting will be in packets

**25:00** · okay sound good let's refresh so you can see these are like individual calls and you're getting different different packets of data all right okay so we have to cover about packets also packets are to be covered there's

**25:20** · one more thing when you write google.com Okay how does it find which server to connect to or whatever okay so basically these computers and servers they are all identified via something known as an IP address so you can think of it as your uh phone book okay so in computers what

**25:43** · happens is that uh sorry in like phone numbers what happens is you have your so many friends right you have let's say 200 contacts and uh when you call want to call someone you just dial their name okay just like hey call Mommy and it will call your m okay or call suchin or someone okay anyone you want to call do you type their number all the time no so what is happening actual value is some number 9 9 91 1 1 9 something like that this is

**26:13** · being linked to a name okay name like John or something you want to call John you just call John and it will directly dial this number this is the same thing for IP addresses and stuff okay all the devices that are connected together you are watching me right now okay you are connected to YouTube right now okay so YouTube server

**26:40** · okay you are interacting with the YouTube server so every single device on the internet that can talk to each other they have something known as an IP address okay IP address so example um X x x x this is a format and

**27:01** · every single X can have the numbers from 0 to 255 okay you write google.com it will be resolved to a particular IP address I hope it makes sense what is an IP address okay sound

**27:22** · good so we'll talk in detail about IP address there are like classes of IP address that are reserved for example okay that no one can use or whatever okay and how it actually like Works Cool sound good if you want to check IP addresses of your own computer you can you can do that as well you can use the curl command and you can use like the

**27:47** · command C if config do me- s you can use this command it will give you your IP address of your um the internet internet provider okay so how does this work Kunal do everyone have the same IP address or what is the IP address of my devices if my device is connected to

**28:12** · uh if let's say you are at your house you have a router like a modem and a router and uh um you you you have like four devices connected to your Wi-Fi so all these four devices are they going to have the same IP address or different IP address or how is it going to work work okay let's think about this this is how it actually works this is your internet service provider okay mine is AEL for example Okay Internet service provider okay your

**28:42** · internet service provider gives you a modem or something okay your modem and router or whatever okay this is going to have a global IP address

**28:59** · all the devices connected to this Wi-Fi modem are going to have the same IP address for everywhere around the world okay inside this modem device one may be connected device 2 may be connected and device 3 may be connected so the modem will give IP addresses to these as well

**29:30** · okay these are known as local IP addresses okay these are known as local IP addresses how does it do it DHCP Dynamic

**29:47** · host configuration protocol this is also a set of rules and regulations only I will talk to you about DCP as well in like in the later of this courses right now I'm just setting the stage taking my time and just setting the stage we'll cover it in detail so modem and it allow it assigns these IP addresses using DHCP

**30:11** · protocol okay that's basically about it okay so this is a global IP address so if anyone wants to if you make a request to google.com Google will actually see This Global IP address so if this device one makes a request or device two makes a request request for Google it will only be like okay this one single device is making a request okay

**30:44** · cool okay and when the request comes back from Google so this is connected to the internet I'll talk about how isps work and everything later on so you send a request to Google your ISP will send a request to google.com Okay it will return back the

**31:04** · request okay now this modem will decide the router will decide who was the one who had the request was it device one device two device 3 it does that using natat Okay network access

**31:22** · translator I wrote it down over here somewhere yeah okay so like hey device one had Google Chrome open on its Tab and uh that is the something that requested this okay sound good cool okay but now modem and router is

**31:52** · like okay I know device one was the one that made a request but which application in device one made the request how do we figure that out you're running let's say mongodb you make some request and you want data to be get got you want the data to be back in mongodb or you're running your own server on your system you make a request to the internet and the data when it comes you want it to come to your own server or application whatever you're running you're gaming some for example

**32:22** · you're gaming you're chatting to someone in an online game that is installed on your computer you send request to the internet the internet gives back the message of your friend and now your router is like okay I know it's it needs to be sent to kunal's device but how do I know where do I need to send this message do I send to the game or the browser or whatever where do I send it so IP address is a very important Point IP address decides which device to send the data but how do we decide which

**32:54** · application to send the data in that device we that we do that using ports okay because one single computer can be running many internet applications and when the internet sends the data to that computer the computer has to decide okay fine I have gotten the data but which application requested this data you do you make a you make

**33:20** · the you know all the all these will be having obviously the same IP address because they're on the same device okay but how do these applications differ using port numbers okay that is basically what a port number is so if you're talk if you're talking to your friend using uh you know some some application some chat application or something so you will be having an IP address you you and your friend you and your friend are talking

**33:50** · to each other okay you will have an IP address and you will have a port number your friend will also have an IP address and a port number IP address will determine where your computers are located port number will be denoting which application you are using to

**34:11** · communicate okay so IP address will identify the computer but Port will be identifying the application okay cool let's talk a little bit about about ports okay so ports are are basically 16

### Port Numbers

**34:28** · bit numbers okay uh if you don't know what bits are check out the mathematics uh video I did in the data algorithms boot camp there I have covered in detail uh number Theory and everything so 16bit means what if a port number is a 16bit number so 16bit basically means you can have 16 cells um and each every cell can contain what zero or one so

**34:59** · how many total numbers can you create 2 to^ 16 okay so total port numbers that are possible are 2 to^ 16 just something around

**35:14** · 65,000 okay something around 65,000 port numbers uh are available okay sound good we know that web pages are using which particular uh protocol HTTP don't worry how it's using it I'm just telling you I'm asking what is it using how it's working everything I'll cover later on okay so we know web pages are using

**35:40** · HTTP okay so there should be some sort of port number defined for it if you're browsing on the web you say google.com request is sent to Google Google sends the request back now your request is on your device but it does not know where to send it do I send it to the web browser do I send it to the email do I send it to some game you're playing where do I send it for that a port is defined so all the HTTP stuff that you do that will happen on Port

**36:15** · at it's well defined these are well-known ports okay it's defined by people all right sound good if you are running mongod DB okay DB I believe the port for this is 27017 correct me if I'm wrong I'm not sure okay so ports that are from zero till uh one23 these are reserved

**36:48** · ports what do we mean by reserved ports reserved Port means that if you have your own application created you created your own application and you're like hey I will host my application on Port at you can't do that it's already reserved for HTTP stuff okay sound good port number 1024

**37:18** · till something like 49 152 they are also registered but they are registered for applications some some some specific applications like mongodb my SQL okay so SQL has every SQL Server that you run on your applic on your system it has a port of 1433 port number okay the remaining ones you can use

**38:00** · okay sound good remaining you can use okay that's basically about it but we'll dive deep into it as well so this was just basic stuff right now we'll obviously dive deep into everything okay so when we talk about like the internet you you have your own like computer over here let's say okay your friend has a computer in some other other country and you're connected somehow okay say

**38:32** · internet this is a cloud okay so you all are connected like these you know big big things on the initial scale you're connected with your internet service provider ISP so an ISP is a person that connects you with the entire of the internet a company or whatever like I'm using A10 okay but before we dive into it let's talk a little bit more about like how do we measure it right so when when we say that what is the speed of your internet service provider like I'm like 350 Mbps

**39:03** · or whatever write that okay so what do we mean by this what do we mean by if your speed is let's say 1 Mbps Mbps what is it what does it mean it's very simple what what is the full form of MVPs is it megabytes per second no it's meab bits per second bits bit one single bit is 0 or 1 okay so 1 Mbps means 1

**39:33** · megabits you can transfer per second Mega means one with six zeros so 1 1 2 3 4 5 6 bits per second can be

**39:48** · transferred 1 gbps is what 9 bits 10 to power 9 bits per second 1 kbps is what 10 to power what KB means th000 yeah 1,000 bits per second very small very

**40:18** · slow Okay cool so when you when you send the data okay so you send the data back you send the data from one computer to another computer let's talk about you you are sending data from one computer to another computer that is known as upload

**40:42** · when someone sends data to you and you're downloading that called download okay the download speed upload speed that's basically what it's about okay so check it out uh you can

**40:58** · check out ukla speed test or whatever random speed tests and you can check out your internet speed okay so now let's talk about let's start talking about because it's such a complex topic I don't want to rush into it because people are like I don't understand OSI model or whatever and how it's actually linking towards one another so that's why I'm building it up okay now let's talk about how does this thing happens how does the communication between two computers and things like this happen there are two ways via which it happens okay one is the guided way and one

**41:29** · another one is the unguided way guided way means what guided way means like uh there's a set of path already defined for example for example two computers are connected with a wire that's the guided way what is the unguided way uh communication is happening but there's no like one single path for example Wi-Fi Bluetooth okay internet when I am

**41:57** · talking to someone from the UK okay I send the request to like my ISP ISP sends it to UK UK gives it back okay how are our countries connected so on the minute details how it happens I look into later on now let's look into how the bigger picture happens how are countries connected with one another okay because it's super fast this transmission and everything that happens it's super fast how

### Submarine Cables Map (Optical Fibre Cables)

**42:27** · this is how it's actually a website that you can go to submarine cable.com so literally they have uh they have wires running across the ocean from one country to another wires are running down the ocean so you can see in India India fromwhere from Chennai

**42:52** · coochin and uh yeah somewhere from the south you can see we are connected to Sri Lanka and uh this is uh Mumbai so from Mumbai we are connected to like Dubai Oman UAE and we're also connected to I believe somewhere in Singapore so we're connected to Malaysia and stuff and that's how it sort of like works okay so there's like a big

**43:20** · um you know entity in like countries that controls this big stuff in India I believe it's startup I could be wrong but you can this is something this information you can find online who controls it from India and then they the bigger entity they give it to like smaller entities and then they give it to internet service providers and internet service providers give the control to us that's how it works on a larger scale so this is literally inside like uh inside the ocean here you can

**43:54** · see some Marine cables are inside the ocean this is one of the cable it's from Spain UK and the United States cool easy SW let look one in India over here let's check this

**44:21** · one okay 28,000 kilom is the length of this cable it's running from a lot of places wow Japan South Korea and China and

**44:37** · Malaysia India UAE Israel um Italy and UK one single wire spread across continents how fascinating is this you can see this as well submarine

**45:00** · cables this is how it's inside the water so internet is not like above above us it's actually under the ocean this is basically the somebody in cable Google also owns a lot of this right uh Google has its own like search engine and whatever they own a lot of such cables right so Google is like also pretty pretty famous in this

**45:26** · they have have like a lot of cables underground some people askal don't sharks or something you know they cut this cable or fish fishes don't they cut these cables um no they don't because it's actually very heavily guarded okay and it's actually I believe buried on the ocean floor so animals can't get to it okay so if you want to learn more about it you can um how the you know data is uh like how computers get connected so physically they get connected in this way you know you can look at like your

**45:58** · optical fiber cables for example optical fiber cables okay how these things work and all these other things coaxial cable coaxial cables or

**46:13** · whatever okay you can take a look into this other than that this is the wireless one so in the wireless we are already familiar with it what is the wireless stuff Wireless stuff consists of um like radio channels for example right so I'm talking about uh example Bluetooth which is for short range Bluetooth is there then we have

**46:46** · Wi-Fi okay and if you want to talk about like longer ranges for that we have like 3G 4G like LTE now we have 5G also something like that okay so that's basically about it now you'll be like why do you have why do we have these you know why can't we just use satellites why do we have to put cables under the ocean so many long long cables across the world because it's faster than satellite okay

**47:17** · currently also there isn't like I haven't given you the actual feeling of how the internet thing you know actually works how how the protocols happen and what are various stages and the all the things that I mentioned like you will have your Global IP and you know you will get the request and it will transfer it to your local computer and

**47:37** · then it will transfer it to your application or whatever so how these things happen internally we haven't covered it yet we will cover it later on in this video itself when we talk about the OSI model okay so there are some layers in the OSI model and we'll cover every single layer in detail before that I want to give you a refresher on what we learned in high school okay in high school we learned a little bit about computer okay so I just told you how countries are connected let's do a little bit of a refresher of how various things are connected okay so we know there's something known as a local area network

### LAN, MAN, WAN

**48:09** · Lan okay so we know there's a local area network I'm just writing down pointers you can Google it like uh like yourself what is this small uh house for a small house or office if you have like some devices connected that is known as local

**48:25** · area network Okay small here does not mean that there's only five computers you can connect or 10 computers you can connect okay you you can even come you can you connect 10,000 computers if you want okay but it just basically means it's like in an area Okay Okay cool so that's basically it

**48:48** · and uh let's also look at some of the concepts of like Lan or how how these computers let's say connected it's very general knowledge we have worked with this before um you have uh if you have game you know gamed with your people like folks before you can connect it VI ethernet okay so how by ethernet ethernet

**49:10** · cable right they're like network adapters and ethernet switches because there are so many ways to connect to the outside world uh via Wi-Fi via like Bluetooth via Ethernet or whatever there needs to be some sort of a device to manage this that's known as a like a network adapter like network card s for example okay or how you can connect on a local area Wi-Fi also yeah Wi-Fi works you can connect by Wi-Fi

**49:36** · also okay now in high school we also learned about man metropolitan area network which is across the city it's very simple stuff across a city okay I'll cover in detail how ISP helps us in you know connecting us to the internet internet service providers okay then there's a wide area network okay of across countries for

**50:11** · example okay cool all right so wide area network basically allows you know for you to connect over countries okay typically using optical fiber cables optical fiber

**50:37** · cables okay so we all learned about this in the in high school but how does it relate to the Internet so internet is actually a collection of all these three a lot of local area networks that are connected to each other using Metropolitan networks that are connected to each other using wide area

**51:03** · network okay so this wide area network there are two more things I want to mention over here one is known as

**51:18** · Sonet okay Sonet basically means Synchro uh synchronous Optical networking okay so it basically carries the data uh using optical fiber cables hence it can cover larger distances second one is frame

**51:44** · relay now what is frame relay it's basically a W for you to connect your local area network to The Wider area like the internet okay so that was about it okay let's talk a little bit more about this thing in detail a little bit more terms before we move forward to how the internal implementation and everything is done okay right now also we have learned a lot of terms and I'm writing it down over here the video is recorded I'll be adding time stamps so you can add on it

**52:17** · add on to it like come back revisit and whatever so when I talk about modems and stuff okay what is a modem when I talk about router what is router router so a modem is basically used to convert digital signals into analog signals and vice versa okay for example the Digital Data

### MODEM, ROUTER

**52:40** · that you have on your computer a modem can convert that into an electrical signal so that you can transfer it over let's say some telephone lines or some other uh you know uh other modem at the receiving site for example and that will recover the Digital Data like an image okay sound good or and a router is

**53:04** · basically a device that routes the data packets the packet thing we talked about right based on their IP addresses okay when we talk about OSI model we'll know that it works on the network layer and uh they connected to like the the lands that we just talked about in the B area networks okay so how this data is rooted

**53:27** · and everything what is a packet what is consistent inside a packet and everything I'll cover shortly okay but uh what we're trying to say over here is that uh like for now that is what you need to take into consideration we talk about modem okay cool we already talked about

**53:45** · like how the client and server model works and everything so we talked about like what modems and routers and these all devices and stuff we'll cover later when we talk about OSI model and everything okay so the client server model we know uh client makes a request server will send a response we had a you know uh we had it written over here somewhere right okay cool um we talked

**54:09** · about IP addresses a little bit right we talked about uh what are an IP what is an IP address and it sort of like resolves you know uh it's like a phone book phone book of the internet if you will okay and um we can basically

**54:24** · remember the domain name and it will uh point to the computer or a server of that IP address okay one more thing I talked to you about was internet service provider okay so internet service providers are companies that provide us access to the internet okay so internet service providers are basically connected to larger internet service providers that provide service to them like I mentioned previously okay so in India the the top

**54:53** · level you know uh they are like top level is internet service providers in the world and there are only a few these are known as Tire one or tier one um internet service providers uh in India we have the tier one service provider Tata okay tier 2 internet service provider can be like airel or whatever okay so there's a long cable from Chennai uh for Tata in like Chennai

**55:19** · to Singapore and stuff okay so repeated it multiple times hence you should not get uh not get confused and um yeah on a bigger picture that's basically about it cool let's move

**55:38** · forward okay now one more thing we studied in uh in high school which is also very basic stuff which is uh how computers are connected various ways they are connected right so topologies you have studied this in high school as well topologies just a little bit of Rev don't want to leave out anything Canal you left out this thing you left out that thing or whatever okay so the number one topology very simple one everyone knows this bus topology okay so every system in the bus

### Topologies (BUS, RING, STAR, TREE, MESH)

**56:11** · topology it's like connected to one like a cord or like a backbone okay for example so here we can have let's say a a backbone is like this and computers are connected to it like this computers are connected this is bus topology okay but what is the problem here it's very simple if if this gets broken this link gets broken then uh it will like U spoil the entire network okay and also since everything

**56:43** · is being transmitted via this cable this one over here um only one person can send data at a particular time okay so this is the bus topology this is sometimes how computers are connected okay second one is also pretty simple which is known as uh ring

**57:05** · topology ring so as the name suggests computers are connected in a ring with one another okay so in this for example you want to send data from here to here it's very simple it will go via this wire okay but in ring topology what is happening is that every system communicates with one another

**57:27** · okay so if Target from let's say computer a to computer F or something like that it would have to go through computer B and computer C also okay

**57:49** · cool but what are the limitations here now one more limitation here is if one of the cables break then that's it you won't be able to transfer data uh what is the second limitation a lot of lot of unnecessary

**58:06** · like you know um calls are being made so if you want to send data from a to F it's making calls to B and C also so that's also not good right that's that's a limitation all right cool let's talk

**58:23** · about another one another topology how are other computers are connected star topology okay so what is the star topology there there is one controlling device one Central device that is connected to all the

**58:39** · computers all computers are connected to that only if computer a wants to send something to computer B then um it will just communicate via this device over here this is a centralized device

**59:00** · cool what are some of the limitations if the central device fails then computer system will go down your network will go down okay there's another one fourth one what is the fourth one tree topology it's sort of like a combination of bus and star topology

**59:29** · okay so some some some star networks connected like a bus so bus basically contains one single one like this and every single one can have like itself a star topology computer computer computer centralized device computer

**59:51** · computer computer so many many Star are connected in a bus sort of a m okay so little bit has little bit more fall tolerance and everything number five mesh okay so mesh is basically something that uh every single computer will be connected to every single computer okay

**1:00:26** · so every single computer is connected to every single computer what are the limitations it's expensive so much wire being used okay if you want to add one more computer then you'd have to connect that computer with every single computer so scalability issues

**1:00:58** · right that's it yeah okay so this was about topologies okay now basic stuff are done and now let's talk about the main stuff um which is also extremely important a lot of terms I'll be sharing over here that are going to be useful during the you know devops boot camp like you know like DNS IP addresses cookies uh OSI model model

**1:01:26** · and all these other things okay now this is a new new like segment of this uh course now we're talking about the network in uh like the structure of the network basically okay so structure of network we'll talk about the OSI model let's talk about the structure of network how things work internally what are all the processes involved and so many other things like protocols how everything works internally what does it look like see that as well structure of

### Structure of the Network

**1:01:59** · the network let's imagine it with a real world scenario because I mentioned initially I'll do that internet is very complex okay we all know that so it would make sense to break it down into smaller pieces okay so how can we break it down into smaller pieces let's see you you order some food okay you order some thing you order

**1:02:29** · food okay to the restaurant you call the restaurant or you order it on your app and the restaurant gets your order very simple right now you given the order to the restaurant the restaurant will uh they will like you know um take your order and prepare your order okay so restaurant will take your order and they will then prepare your order for example okay and

**1:03:01** · then they will sort of like let's say um you know send it to the Delivery Agent okay a restaurant example is actually a bit complicated um let's say we talk about Amazon okay so you order something online okay you order something online

**1:03:27** · make sense you give it to Amazon and Amazon will be like okay we got it and Amazon will take care of it okay then Amazon is like okay we have got your order and now Amazon will ship your order to your local delivery

**1:03:47** · agent okay your delivery company delivery company let's say if you're ordering is coming from the United States so it will be having delivery company from the United States from there your order will be sent out then your order will be

**1:04:07** · transported transported okay now your order has arrived in India your order has arrived in India it will again be transported to the delivery company

**1:04:22** · responsible right to the delivery company that is responsible over here delivery company or whatever okay and that delivery company in turns will then provide it to Amazon like hey Amazon um the package is going to be delivered or whatever you can deliver it so let's let's imagine Amazon is like directly delivering it and this company is only for Country wise country wise distribution okay then you get your Amazon from order received

**1:04:57** · okay this is the internet this is how we can imagine the internet so basically you request some files you request let's say a video from YouTube a movie or something right you can you can do that and YouTube will take care of it YouTube is going to be like okay this is what you want let me see how we can do it it is going to prepare all the data and it will give it to you in terms of transportation from its server then it will reach the server in your country it will be like okay this is all everything and now it's received to

**1:05:29** · you okay so this is basically what we are trying to do this layer where you get the order and everything this is the application

**1:05:45** · layer from which you are interacting the very first so application layer can be like your WhatsApp Messenger it's an application inter internally how this complex thing is working do you really know no we don't know all we know is how to use the application WhatsApp okay so this was a general analogy now let's look into the details of it let's look into how this thing works how the internet works this is the main part OSI

**1:06:16** · model very important part this is how the internet works main part this transportation of data you send a message and the message is received to your friend this this part is the internet okay let's see how it happens

### OSI Model (7 Layers)

**1:06:35** · okay so let's talk about how it works how the internet works okay so the OSI model stands for open systems interconnection model okay so the idea is that um it it was developed uh so that uh you know uh there was like a standard way uh of about how two let's say two or more computers communicate with each other okay s good so it's just like it's

**1:07:05** · a it's a standard for how people and how servers or whatever communicate with each other okay so there are a few layers in this OSI model internet is very complex a lot of things happen Okay so right from checking out an application and a messenger sending an application sending a message that that message will be you know uh sent to your isps or whatever and then it will be sent to your friend in another country and then it will determine which where your friend is which device which application very complex let's divide it into

**1:07:37** · steps okay so there are seven layers in the USI model how many layers seven layers first is the application layer I'll go into details of every single layer but right now let's look at the overview then we will check at check out every single layer independently okay application layer presentation layer third one is session

**1:08:08** · layer transport layer Network layer data link layer and then at the last physical layer OSI model is the most important topic for interviews they ask you ask you in many many interviews

**1:08:28** · my friend was asked about it in the in his Facebook interview so OSI model is extremely important please take care of it okay so here are seven layers of OSI model every single layer will have like different like you know protocols and things and devices and everything being used which we'll cover into in details

**1:08:45** · okay so in detail we're going to cover this thing let's look into the abstract of it first just like in simple terms let's look into it okay then we'll look at every layer in detail first one is the application layer okay let's talk about the application layer what is the application I don't feel like writing I'm just dictating you can write the notes on your own okay so application layer basically it's implemented in what

**1:09:12** · software it's implemented in software as the name suggests it's an application so the folks who are the users they will interact with their application send messages files or emails or whatever application layer contains the applications okay like browsers and messaging applications and so on and so forth okay so you send your data over from

**1:09:39** · application layer to presentation layer you sent a message that message was sent to presentation layer now okay now what is the idea of presentation layer so the the

**1:09:55** · presentation layer basically uh so in the application layer when I talk about like having software systems or you know like like Network applications and stuff like a Skype or Chrome or or whatever so obviously application layer protocols have some you know application layer protocols like uh like HTTP and like file transfer protocol so on and so forth tnet I'll talk more about these protocols later on okay in detail okay

**1:10:20** · and DNS and everything we we'll talk more about that later for now just focus on the above thing so it will have your data it will give the data to presentation layer like hey presentation layer take this data presentation layer will take the data whatever your message you're trying to send to your friend in another country it will get the data from the application layer and this data will be in form of what like words and characters and letters and numbers and so on and so forth right so the presentation layer is going to convert these characters and stuff into machine representable binary

**1:10:52** · format okay from asky to something like ebcd I okay this is known as translation okay a few more things happen for example before the data is transmitted further it goes under like encoding like I me I just mentioned encoding encryption okay so changing the

**1:11:15** · data so that it's only readable to the person that the data was sent to okay that thing is happening over here how this happens internally can like okay you're saying data is encrypted then how does my friend know how to encrypt or decrypt it or whatever no don't worry about that I'll cover that later on when we directly just talk about presentation layer right now in this module we are learning what every layer does how it does it I'll check out uh I I'll share with you later on okay so it encrypts

**1:11:46** · the data it also provides abstraction okay it also provides abstraction so basically uh it abstraction I've converted in object progamming but this presentation layer uh is basically going to assume that uh

**1:12:04** · if I send the data downwards okay then it will take care of it okay the data over here is also compressed so that it's easier to transport over like large and like reduce the traffic and everything so data is also compressed this can be lossy or lossless it depends um but like uh yeah so we talked about encryption compression translation right

**1:12:32** · cool sound good here SSL protocol is used SSL we'll talk more about like later secure sockets layer for encryption and description decryption okay so SSL what is it what are these HTTP tet or so many

**1:12:48** · terms you mentioned what are these protocols right now just think of it as protocol right now just focus on what these layers are doing okay then your data is sent to session layer okay okay so then your data is sent to session layer now the session layer protocol basically helps in setting up and managing the connections and it enables you know like the sending and receiving of data followed by termination of the connected

**1:13:17** · sessions okay so before a session is established it will do some sort of authentication and stuff server you know many times it asks for username and and password that happens quite a lot of times that is known as like authentication okay and then authorization takes place so whether you have permission to access the file on a server or not that depends okay sound good okay so with the session

**1:13:43** · layer also this is like the similar stuff session layer assumes that the layers below it will do their work session layer assumes that there's a layer let's say transport layer below it and it will be like okay if I just establish a session the data Transportation will be done by the transport layer it assumes it so session

**1:14:03** · layers work is this thing okay maintaining for one more example can be when you're shopping from flipcart or amazon.com okay there's a session being created for your computer and the flip cart server or whatever okay and when everything happens it logs you out and payment is done that's basically the idea of session layer okay how it works

**1:14:25** · internally we'll we'll obviously look uh look into like later on the data packets are used and everything is used so on and so forth okay cool next is the transport layer so data is transferred from session layer to transport layer now transport layer basically it's like okay transport is going to hey application layer got some data and then it presented that data then the session was established and now it's my part to work with this data and make sure it's transported to the friend easily

**1:14:56** · okay so it has its own like protocol of how data will be transferred like UDP and TCP after this overview I'll tell you a little bit more about protocols okay so Protocols are nothing but how data is transferred okay so it does it in three way there's one part known as segmentation so data that is received from the session layer it will be divided into small data units called

**1:15:18** · segments okay and we talked about port numbers right so every segment will contain the source and the destination port number number and a sequence number port number we already know what it is right so correct application the data will be received to the correct application like WhatsApp or Google Chrome or whatever sequence number basically helps to reassemble the segments in the correct order we all

**1:15:39** · know that all the data will not be transferred as once it will be transferred into chunks for that it has a sequence number I'll actually show you this sequence number also we'll have some commands lined up okay the next thing is flow control flow control basically transport layer control the amount of data that is being transferred so the server is you know having 40 mvpn but the client has server is sending at 40 MVPs but the client is receiving at uh 20 MVPs so then that's not going to

**1:16:09** · work okay it'll be like hey slow down also one more thing it works on is error control some data packets got lost or corrupted data or whatever so how it works with that this is also something we'll see in detail okay when we learn about transport layer in detail right now I'm just telling you the overview okay and it adds something known as a check sum to every data segment okay that way it can figure out whether the data that was received by a friend was good or not okay so there's like uh connection

**1:16:40** · oriented transmission like TCP and there's a connection connection less oriented transmission called UDP UDP is faster because it it does not provide any feedback if data is lost or not it's like okay whatever data you're sending keep sending that is why some data packets get lost in UDP for example video conferencing or gaming but in TCP

**1:17:01** · it's like when your friend receives the data your friend will send an acknowledgement hey Kunal uh internet I've got the data it means 100% data transferred don't worry so uses of TCP like email and file transfer protocol so on and so forth okay so that's basically about we learn more about like check sum and like segments and all these other things later on after that what happens is uh it gets transported so in here we'll be learning about UDP and TCP okay please make notes yourself okay

**1:17:36** · um I can like can I don't want to like uh ruin it but uh please make like notes yourself and I have I'm sharing everything so you can make like make make notes yourself okay so now we come at Network layer so Network layer is pretty simple so Network layer basically works for the transmission of theed data segments from one computer to another that is located in a different

**1:18:02** · network okay so basically here till now here we're talking about our own network right now but now when you're talking about sending this to the network layer now this is communic communicating with other computers outside this is where the router lives router lives over here router lives over here okay make your own

**1:18:35** · notes from video okay so this thing like router lives over here and stuff uh things like that you can make your own notes okay what is the function of uh Network layer logical addressing so IP

**1:18:51** · addressing done in the network layer is known as logical addressing because you all know every computer has their own IP address Network layer assigns the senders and receivers IP address uh to every segment and it forms an IP packet now Kunal why why is it assigning the senders and receivers IP address to the packet the data packets that it's receiving so that every data packet can reach the correct

**1:19:19** · destination okay sound good and also it performs routing so moving one data packet from source to destination okay it's based on like IP uh like IP addresses and things like that okay cool so it perform some sort of a you know like logical uh addressing and then it will transport the data okay we'll learn about how it does

**1:19:49** · it in detail like subnet masking and routing from packet one to packet B how it happens internally everything we cover later on okay okay so it determines like okay Kunal um you know you have your own uh

**1:20:05** · Network computer and there's your friend's computer what is the best path to take to send from data from your computer to your friend's computer what is the greatest path like I can take some routing protocols and stuff there a d algorithm that it may be using which we'll learn more about later so all these routing protocols and like transportation of packets and everything happens at the network layer load balancing also happens over here right to make sure that this it's not overloading okay cool after that the

**1:20:34** · data is transported to data link layer data link layer basically allows like you to directly communicate with the computers and hosts okay okay so data link layer will receive the data packet from the network layer and this data packet contains the IP addresses of both the sender and the receiver which is you already talked about now at the data link layer it's

**1:20:58** · actually doing two kinds of addressing logical addressing that is done at you know like the uh like the at the network layer which is about IP addresses and stuff um so when the sender and receivers IP addresses are assigned to form a packet so let's let's draw this only okay no problem no problem we can draw this particular thing how it works at the network layer okay no problem so we have your own computer you have your computer a okay you have your computer a

**1:21:23** · it has a IP address of let's say something like uh 16811 okay it is connected to your network like this network number one your Wi-Fi okay it's connected to your Wi-Fi now here it's sending a message to let's say Facebook okay the data packet okay so a data Facebook will have its own server like 1921 168.3 point1 or

**1:21:50** · for example it's the IP address of the Facebook server every pack it will contain three things it will contain the sender and receiver so if this is a receiver uh I have to draw it somewhere over here if this is a receiver Okay computer B 192 16 8.2.1 okay so this IP address 192.168.1.1

**1:22:25** · subnet mask this thing is known as a packet so as you can see whenever a packet is transported like this it will be like having the IP address of sender and receiver okay then it will be transported to next person that is

**1:22:42** · basically how it works so in in data link layer what happens is when you receive the data over here this will obviously be at the network layer once you have received the data and whenever you're working with routers or whatever that's Network layer but now the idea is which application to send this data to this is know as physical addressing this is done as done at data link layer the physical addressing not The Logical networking addressing no the physical addressing and what are the physical addresses you may have heard about those Mac addresses okay now Mac addresses of

**1:23:14** · sender and receiver are assigned to the data packet Mac addresses okay to form a frame so frame is basically a data unit of the data link layer what is a MAC address you may ask Mac address is a it's a 12-digit alpha

**1:23:36** · numeric number of the network interface of your computer it's not like your computer has only one uh Mac address no your computer's Bluetooth may have some other network Mac address your computer's Wi-Fi may have another Mac address so on and so

**1:23:51** · forth okay so data link layer performs two functions it will allow the all the upper layers of the OSI model to access the uh the these frames and stuff like it will pass on these frames whatever things that I just mentioned and it also controls how the data is placed and

**1:24:07** · received uh from the Medias using such using things known as media access control so basically techniques used to get the frame on and off Media and like error detection and stuff okay things like that so what does data link layer do data link layers adds Mac addresses in a frame and in a packet calls it like a frame and uh pushes that frame in like

**1:24:32** · you can then transport that frame all all right I'll I'll cover this in detail uh later on but let's move forward okay and then in the end we have our physical layer okay physical basically contains of Hardware this is the hardware section and here you actually have like your some mechanical like wires or something mediums and here uh it transmits uh

**1:24:54** · the bits from electrical signals it does not have like packets or datagrams like or segments and things like that we talked about so you work with uh cables and stuff in this okay so data that you get from the above it will be like in the form of zeros and ones physical layer is going to convert this into you know and transport it over like wires and your local local media it can be like an electrical signal or something a light signal in the optical fiber cable or whatever or a radio signal in case of Wi-Fi or something okay so the physical

**1:25:26** · signal uh the physical layer receives the signal converts it into like some at the receiver section okay so when the data is received to someone okay at that particular point of time the physical layer will receive the signal convert it into bits pass it to the data link layer uh as a frame and then frame will be you know moved to higher higher higher higher layers let's look at how it this things works like the order of execution how everything works okay let's see how this thing works a little bit easily so

**1:25:54** · I'm just going to I am going to write it over here so you send a message this is

**1:26:12** · you and this is your friend okay how it how this thing actually works so you have your application layer okay it will transport the message to your presentation layer okay the presentation layer will do its thing transport it into the session layer session layer will transport it into the transport layer and transport layer will make it into like packets and segments and stuff so divide it into like packets and stuff into the network layer okay

**1:26:44** · Network layer will also bundle it okay assign the IP addresses so Network layer assigns the IP addresses sends it into the data link layer dat data link layer will assign the like mac addresses and stuff and send it to the

**1:27:00** · physical router okay now your physical router will send it to the physical router of your friend via that okay so your physical router of your friend you can see this is not happening like directly I I'll just show you right now okay

**1:27:18** · so how the IP addresses are resolved and everything we'll cover later on okay so your physical layer it will be like in your data link layer now it will give it to data link layer data link layer will give it to the network layer okay Network layer will give it to like the transport and then transport will uh add the session layer okay session to presentation presentation to application and your friend will receive your message presentation to

**1:27:52** · application okay this is how how it works each layer it will be like okay it will imagine that I am talking to the session layer of my friend or I am talking to the presentation layer of my friend or me if my friend are chatting on WhatsApp so we'll be like I'm talking to the my friend's WhatsApp number okay but internally it's the route it takes is this thing that I just mentioned this is the route okay it's like a conceptual way okay so

**1:28:24** · first it starts from application layer and the data is preed and everything and then it's transferred to the physical layer now this physical router will try to find the physical router of your friend using all the routing techniques and everything and all these other things and then it is goes back again till the application layer that's as simple as it is how it works okay that is the OSI model I

**1:28:49** · talked in detail about every single layer and uh that's it okay so that was the OSI model there's one more model another model another model this is known as the TCP IP model what is the difference between tcpip model and OSI model okay it's

### TCP/IP Model (5 Layers)

**1:29:15** · mostly similar uh it's just a little bit of a difference in like the layers and stuff so it is basically known as uh the Internet Protocol suit okay and it was developed by the uh the American like the uh arpa thing that I mentioned previously okay the idea is

**1:29:36** · that it's sort of like similar uh to like uh OSI model but uh the layers are reduced not from not like they're not seven layers it's like having five layers only now okay so the layers are application layer

**1:29:55** · transport layer Network layer data link layer and physical layer okay so you can see that the OSI models application presentation and session layer in this are merged into one okay so this is more like used practically and the OSI model is more like uh concept based okay Theory okay and uh that is it yeah

### Client Server Architecture

**1:30:29** · let's see now uh basically now we're going to do a deep dive into these layers okay so we in detail see how these things work internally and like a little bit more um you know Hands-On approach and see how things work internally okay let's start with the very first one let's talk about application layer okay what is

**1:30:48** · application layer we already covered okay but now it's time to get into the details of it so what is the what are like the responsibilities of this layer what do we do in this layer and like why why does this layer exist so s simple it's like the main like layer where users interact with right these are the layers where users interact with it it consists of applications right it Con

**1:31:11** · consists of like uh uh various applications like your web browser so basically this users interact with this okay we all know we all it's very simple this is very simple users interact with this okay for examp example if you're talking about you know WhatsApp where does WhatsApp lie application layer WhatsApp your browsers Etc okay so

**1:31:37** · you write your message you send your data and everything it's available in the like application layer is the one that you use to interact with it okay so the where is the application it's on like your devices okay where does it lie on your devices where on on your devices okay so application layer has like uh uh now imagine this okay how

**1:32:03** · data is transferred how data is communicated what type of data is transferred using which types of like steps and rules and regulations this is dependent on protocols we already covered this there are many protocols like HTTP like file transfer email protocol um and uh like UDP for videos and TCP or whatever right um so

**1:32:24** · application layer has some protocols okay let's let's we we'll also learn about like protocols here protocols and we'll also learn about the client server infra uh client server uh architecture also in this chck architecture okay because the idea is that whenever you send a request to some particular server they should be knowing like uh how to deal with that request

**1:32:54** · okay if you want to talk to your particular server if the client wants to talk to the server the server should know what type of you know request I'm getting what do I have to reply so there should be a set of rules regul rules and regulations this is what is known as protocols let's look into it a little bit more detail okay so we already cover about this like in in in brief we talked about there's like a client and then there's like a you know a server and something like that so you have a client like this okay so let's see how applications like talk to each other there okay um and how applications are

**1:33:27** · like in the in the networking system where applications lie and how does it work so you have your client over here you have your server over here we already made this diagram previously client sends a request server sends a response back we saw this in action also in the Firefox browser what is a server server is

**1:33:50** · basically a system that uh let's say you know um controls your uh the website you're hosting for example okay so basically this is the client server architecture so here basically the application that we're talking about has two parts client part and a server side

**1:34:11** · part okay and these are known as processes and they communicate through each other Okay cool so process will be running on this application and then another process will be running on like the client and another process will be running on server these will be communicating with each other okay so if you want to host your own server okay then uh obviously like

**1:34:36** · uh you should have like some uh reliable IP address right uh which can be reached via bya clients okay and um you should be also having uh like um you know High availability your you don't want your servers to you down client on the other hand is uh you know uh folks who are using and who are consuming these resources us we are like you're making a request to Google you are a client okay so that's basically about it

**1:35:08** · so when you make a request to like youtube.com Okay hey you're like hey YouTube uh show show me some videos or whatever so you are the client and the YouTube server is like the server and it sends you the data back so when I'm

**1:35:23** · talking about servers of YouTube or Facebook or Microsoft or coo for example so we have a lot of servers we don't have just one server we have a lot of servers they they're like a lot of servers because this is like such a big company right so many folks are using if all the folks are contacting just one

**1:35:44** · single server the server will go down happens many time when a result are announced so many students are trying to make request to the server and the servers are not not really fast or like not really enough websites crash same thing happened like you know uh so many like people try to buy PS5 websites crash games the shop was not working at PS5 pre-order

**1:36:08** · launch okay so these are known as these servers the collection of servers in a big company it's known as a data center okay it's like at a really big scale okay so when we talk about data centers we talk about like it's a collection of huge number number of computers okay it may have like static IP addresses addresses that do not change they have like very good you know internet connection that does not go down and high upload speed because you

**1:36:35** · know uh there are also companies that are like renting their servers like Cloud providers which you talk talk more about later in the future of the devops boot camp okay you can actually do this thing that you're seeing on the screen right making a request to the server even though you type google.com but if you're in your terminal you just write ping google.com or something

**1:36:53** · so you can see it's taking it in chunks packets that I talked about these are the sequences these are the time to live so something we'll cover later on okay no packet was lost 11 packets were received I told you about packets right these are those packets every packet is a size of 64 bytes these are the IP addresses of like Google

**1:37:16** · server this maybe different for you because Google does not have just one server they have many servers okay and this something like the sequence so in order to make sure that data packets are received in sequences there are the

**1:37:32** · sequence number I mentioned previously time to live is something I'll let you know later on how it how this thing actually works okay so that ping that basically you saw that was uh it it measures the round trip time for messages sent from the originating host to the destination of the computer and that are echoed back this entire time is known as pink ping time okay so

**1:37:56** · questions I asked I got asked once like can we reduce this ping time not really because you're getting the best possible ping time signals are traveling at the speed of light through like cables and satellites Etc so you're getting the best possible time cool all right so this was about the client servers architecture there's one more way in which uh applications are connected from end systems this is known as peer to-peer AR architecture or P2P okay so first is client server second is P2P peer to peer in

### Peer to Peer Architecture

**1:38:29** · this what happens is various devices uh applications that are running on various devices they get communicated uh they get connected with each other so there's no one server or a large data center or whatever okay so example in your college there may be many computers the computers will be connected to one another something like this

**1:38:54** · something like that this is peer to-peer communication there's no one dedicated server but uh there's like a lot lot more the key advantage over here is that um you know you can scale it very rapidly okay and it's it's like a little bit like a decentralized network as well

**1:39:11** · okay so here what is happening is gal what is client and what is server over here in this since this is also serving as a client and a server every single computer can be termed as a client as well and a server as well well a good example for this can be bit

**1:39:27** · torrent right bit torrent you may have heard about like uh you know in bit torrent there's like seeding and stuff so how torrent works we'll cover more about that later on like how torrent works okay but torrent is a good example of this okay hybrid also exists some are PE to perer and also having some sort of a centralized database that is also

**1:39:49** · possible cool so that was basically about peer to peer all right now before we move forward I just want to give you a quick overview of all these networking like devices that we use it's a pretty straightforward you can find the definitions like online I also have like a nice little PDF open over here the first one is like repeater so a repeater basically is at the physical layer we already know what the physical layer is now and the its job is to regenerate the

### Networking Devices (Download PDF)

**1:40:13** · signal over the same network because the signal before the signal becomes too weak or corrupted okay so it can be transmitted over the same network okay um and an important point to note over here is that it does not amplify the signal so when the signal becomes weak they copy the signal bit by bit and it reach regenerate to its original

**1:40:33** · strength okay it's a two Port device okay so there are like two ports available um Hub basically is a multi-port repeater okay instead of just two Port it has multiple ports and it connects multiple wires coming from different branches for example the connector in like the star topology that we mentioned okay so it cannot like filter the data uh so the data packets will be sent to like all connected devices um in in other words it says that the collision domain of all host connected to HUB remains one okay and

**1:41:03** · also they do not have the intelligence to find out what are the best path for the data packets so Hub is like a repeater only okay and the job is the is to regenerate the signal over the same network because it before it becomes too weak it will regenerate the network okay it will not amplify it or whatever but in Hub it's basically a multi-port repeater okay you can learn about the types of Hub or whatever Bridge operates

**1:41:26** · at the data link layer we talked about the data link layer in detail we talked about Mac addresses right at the data link layer we'll obviously cover data link layer in detail but a bridge is type of a repeater have we covered yeah repeater is over here and it has an additional functionality that it can filter out content by reading the Mac addresses of the source and destination we know that at the data link ler the Target and packets what we have that contain the Mac addresses of what sender

**1:41:52** · and receiver okay so it's able to filter that out switch is a multi-port bridge okay um with a that can basically boost the performance and efficiency okay so it is also at data link layer because it's a bridge so bridges are at data link layer so it is also at a data link layer and it can perform like error checking and before forwarding the data so it makes it very efficient right cool router we

**1:42:19** · already covered what are routers at Network layer we already covered it no problem gateway gateway is as the name suggests a pass a passage to connect two networks together that may work upon different networking models okay so for example uh here it's saying that uh it's sort of like one network will may may working on some different protocol another Network May working on different protocol it can basically connect that

**1:42:43** · okay brouter is basically a bridge and router combined you can say right and it offers functionality of both bridg and router and this is like a nice little diagram for you okay so it's it's very simple nothing nothing you know major in this so I just wanted to mention like the um basic use cases of these things as well you can take a screenshot of this if you want and uh yeah cool okay now uh one more

### Protocols

**1:43:08** · thing that I promised I will go into details was protocols so we all know what protocols are network protocols let's talk about protocols and by the way we're on application layer only right now okay protocols so every application will have some sort of a protocol if you're working with web develop web web web or something just browsing the internet you will be following like tcpip protocol HTTP for example right if you're sending someone a file then there's file transfer protocol if you're sending an email then there's simple mail transfer protocol so on and so forth okay so what are some of the protocols let's

**1:43:40** · divide it into like categories I've already explained what protocols are so I won't like go into you know details details of it um we talked about packets and and protocols what protocols are and stuff let's talk about like web protocols when we talk about protocols

**1:43:55** · protocols okay how it works and everything okay just talk about TCP I protocols for example okay so here you can have like uh HTTP okay hyper transfer protocol so it defines how uh you know the the HTML

**1:44:14** · page like how data is transferred for example HTML pages and things like that I also mentioned briefly about DHCP uh Dynamic host control protocol it basically allocates the IP addresses to your uh de people and devices that are connected to your network right and I gave you a little nice diagram of that as well everything was covered file transfer protocol okay how the files are uh how how the files can be transferred but I don't think this is being used anymore because files can now be transferred over HTTP right um there's

**1:44:46** · one more called simple mail transfer protocol this we'll see in detail how how emails work okay if you want to send a an email on receive an email how how it works using the simple mail transfer protocol okay it's used to send the emails to receive the emails you have pop 3 shout out to Dan Pop uh check out popcast pop and uh yeah and iMac

**1:45:12** · okay so these are used to receive emails what else what else Protocols are there um SSH secure sh okay so if you want to log into a terminal of someone else's computer for example you can use SSS for that so we'll be using this heavily uh I'll be using the C Cloud instances and we'll be using that um in order to you know um log into your computer and things like that okay um all right so that's

**1:45:46** · SSH and there's one more called I believe there are so many so you can Google it virtual network computing it's for graphical control okay that's it there's one more called tnet okay outside of like DCP I there's one called tnet so tnet is basically a terminal uh emulation that enables a user to connect to a remote host or a device using the Tet client okay usually it's over Port

**1:46:14** · 23 Port 23 let me write the port over here as well okay so for example uh typing like Tet host name would connect you would connect like a user to a host name that is called like host name okay so if I say tet Kunal like it will connect me to a host name called Kunal so it enables users to manage an account or a device remotely okay it's a very low level protocol okay all right um

**1:46:46** · cool one more thing in like HTTP and https and stuff s means secure so I'll talk more about that later we got data that is like encoded for example like utf8 and stuff okay these are the standards of encoding in tet it is like not encoded or encrypted okay so all these things are handled at the application layers is that what we're talking about right now UDP already mentioned a lot of times how it works I'll cover in detail I'm just listing it out right now so it's a connectionless session um like a stateless collection

**1:47:16** · does not maintain the state okay data may be lost in this okay during the lifetime of the connection cool uh let's look into like a little bit more detail of like some of these uh protocols okay so now we have let's say applications okay and uh we're still on the application layer so obviously we're talking about applications so one thing we have to cover over here is uh how do these applications like talk to each other okay so there are like a few terms when we talk about like applications so

**1:47:49** · basically let's talk about uh let's say we talk about about um WhatsApp okay so when we talk about WhatsApp this is known as our program like our application so our program is WhatsApp okay now this program WhatsApp will have some processes in it okay so for example you're sending a message okay or record a video These are known as processes of my

**1:48:22** · program prr okay so what is a program a program is just like your application okay for example WhatsApp and um you know Amazon or Flipkart or uh email service or whatever okay that's a program an application process is what Pro process is like um um you know uh like uh one of

**1:48:43** · the features of the program for example right or a running instance of a program okay so one program can have like many many processes running at one okay you're recording a video while sending a message for example okay and uh there's one more thing called um a thread you may have heard about thread so thread is a lighter

**1:49:06** · version of a process okay so when we talk about like uh one process it can have like multiple running threads okay so what is the difference between like here I can say this has like some thread sending a message can have like like set up um you know the

**1:49:27** · uh page or something recording a video open camera open camera or something so the only difference between a thread and a process is that the thread is only doing one single job okay so you have multi- LEL multi-threading uh know multi-threaded programs where multiple threads are working simultaneously that's basically what the idea of a thread is okay now now how do

**1:49:53** · these uh things communicate with each other so we know that you have your application running on your phone and then there are so many billions and millions of phones in the world how does the internet determine you know which message is being sent from you want to send a message from your WhatsApp to someone else's WhatsApp how would it communicate over the Internet okay so here we are talking

**1:50:15** · about addresses so IP addresses and port numbers we already talked about IP addresses we'll talk about port numbers in a in a single single second there's one more thing known as sockets okay so sockets are basically like uh you know um when you need to send messages from one system to like another system okay

### Sockets

**1:50:36** · um we can use sockets for that so it's not like you're continuously like you know it's not like the client server stuff but it's more like um um it's a software process it's not like you have have something like like a hardware socket or whatever okay so

**1:50:53** · uh it's basically like uh the interface that is there between like the processes that I mentioned and the internet for example that's known as a socket okay so interface between uh process and the internet okay that's basically what a

**1:51:09** · socket is and let's talk about ports you already know about IP addresses but let's talk about like ports a little bit more in detail so let's see okay let's talk about ports we already about about ports IP addresses tells which device we are working with ports tell us which application we are working with now there may be possibility that many processes are running of one application you have many Chrome windows open okay so like Kunal I know like this data that

### Ports

**1:51:38** · you have requested whatever is coming from my friend needs to go to Google Chrome but which instance of Google Chrome which process of Google Chrome browser number one browser number two like tab number one two three or four or five how do we determine this thing there's this thing known as eeral ports for this e eepl Emeral ports Emeral ports so

**1:52:04** · basically the idea is that let's say you have a you know port at reserved for uh for your HTTP so what the application like it will do internally is it will assign itself random number port numbers and it will work with that if the multiple application instances are running okay once the process is done it will be freed okay sound good cool so once the application is no no longer using it the port will be free now these eeral ports e Epal ports uh

**1:52:37** · they can exist on the client side but on the server side you have to know the port number okay so servers uh you know you should have like defined well defined fixed port numbers because clients need to know about it internally internally they may use on its own like after the client has given the request then internally they can use these e eal ports but yeah that's basically about it cool so that was about how this

**1:53:07** · communication stuff happens all right so we're still on the application layer and we talked a little bit about the brief let's talk about HTTP in detail HTTP what is HTTP and how it works all right so HTTP I know we have covered this before but you still may be having a doubt K what is HTTP what is this protocol what is the difference between HTTP and TCP and UDP and tcpip and what

### HTTP

**1:53:35** · is this thing Kun what is www and HTTP okay you may be having this question let's look into it HTTP is very simple I taught I taught you about client serval uh speaking is hard I taught you about

**1:53:52** · client server architecture okay you have a client I'll draw this diagram one more time because it's very important you have a client here you have your server here I gave you a little bit of an example of like you know when you write google.com it gives you surf so you request something and the server will send you a response okay so this happens using the

**1:54:15** · HTTP protocol you are like Kunal you are now annoying me please tell me what is HTTP protocol I've actually tell you told pretty much a lot of times but here it goes again it is a client server protocol okay and it tells us how you

**1:54:30** · request this data from the server and it also tells us how the server will send back data to the client so when you make a request when a client makes a request to the server that is known as an HTTP request and when the server

**1:54:46** · sends back a response to the client oh you wanted the Google web page here you go I'll send you a bunch of stuff that is known as an HTTP response okay so basically these are application layer protocols okay so every application layer protocol also requires some transport layer protocol okay so this is basically an application layer protocol HTTP okay has

**1:55:15** · some methods like HT methods like get method push method so you want to get something so you use the get request you want to post something when you submit a form you use the post request for example so here we know that uh what are some of the transport layer protocols TCP and UDP okay transmission control protocol user datagram protocol we have learned about this in brief that uh UTP

**1:55:40** · like uh is used in like video conferencing and stuff so here uh HTTP actually uses TCP okay so HTTP now you know what it is uses TCP transmission control protocol inside it for example okay

**1:55:59** · because TCP makes sure that uh all the data is received and everything okay sttp does not store the state it's a stateless protocol okay stateless protocol so server will not store any information about the client by default Okay cool so example if the Ser if this client is making request again and again and again server will not treat that as like a one single you know client okay

**1:56:34** · cool awesome okay so that's basically about it this is an you know this application Layel protocol application layer protocol it's in the application layer obviously and it uses this in the transport layer HTTP uses this in the transport layer transport layer application

**1:57:04** · layer okay sound good TCP when we learn about it this is actually connection oriented it does not have to you know we don't have to lose any of the data that we are sending that is why a connection has to be made with the servers um and then once the connection has been made then you can exchange your data or whatever okay that is basically about it

**1:57:28** · okay so whenever something we get in response for in the website we know that web pages www when we talked about it what is it it's just a collection of web pages so on web pages you see links you see text you see documents you see videos you see images you see objects all of these things have their own specific URL that is known as worldwide web let's try to see it okay so let's try to to see this thing um if I just talk about this thing if I say open image in new

**1:57:58** · tab so this is a Google image you can see this image itself has its own URL so here this is the protocol https this is the URL okay and this this particular thing is the link to the resource this Google.com is the URL and

**1:58:17** · this is the link to the resource of the basically google.com is the URL L okay and in This Server these are the folders and stuff and it contains the PNG file over here Google logo okay you can also add some arguments like you know many of times you have some arguments or something like that so you can add arguments over here as well so over here if I talk about this thing so you can see that it has um the file question mark type is equal

**1:58:49** · to I or something like that this question mark stuff it's actually pretty common you go to amazon.com okay so here you can see it has a little bit off or if I just go to youtube.com Okay um I play Mr Bean or

**1:59:14** · something so here you can see here's some argument video is so you go to this URL and the argument is question mark after question mark everything you put is a argument so video is equal to this video ID hence it will play this video ID okay cool and in this photo I'm

**1:59:32** · talking about the request and response you can see that as well refresh click on any particular thing let say this one so you can see these are the response headers these are all the things you got into response these are the request headers okay host name is there tle uh

**1:59:52** · and uh so many cookie and connection and cache control so many things are available okay okay I'm just going to move it because I know you can't see um let me move it somewhere how do I how do we move it yeah I can do itth to the left for

### HTTP(GET, POST, PUT, DELETE)

**2:00:15** · example okay um and I'll just going to expand this made a request refresh okay how to get this thing just right click inspect okay you just you can do this in Google Chrome also click on any link you can see the status if I just go back okay inspect uh Network refresh so you can

**2:00:33** · see type of method get post get get get get get post get post get Etc okay let's talk about the types of these methods okay so we have when we talk about like HTTP methods what is what what is the method when I'll first of all tell us that the method is basically that is telling the server what to do okay if you have get get method so you made a get request let's say we say something like that HTTP methods okay talk about first one let's

**2:01:01** · say get so get basically means that you are requesting some data hey give me the web page give me this YouTube video or whatever second one is post method something like hey I am a client and I am giving something to the server like a web form when you register somewhere username password or whatever that is a post request okay and then there's something known as put okay put as

**2:01:29** · well cool so it basically puts data at a specific location there's one known as delete as well if you want to delete data from the server you will send a delete request delete request is available there okay so these are just some sort of a ways like in order to do it okay sound

**2:01:50** · good will learn more about it when we do like web development and stuff or if you know about web development you might be knowing about this already okay so here let's look at any one of the requests let's say this one okay so here you can see it's saying it's a post request to this URL okay no problem okay and here you

**2:02:08** · can see the request headers and the response so what did we send to the Like This Server okay so it's saying over here you can see accept accept encoding it encodes accepts this encoding accept language if you want to see what all these tags represent just click on the question mark it will open up MD and web docs okay so it says accept language request HTTP header indicates the natural language uh uh that the client prefers for example here it says

**2:02:38** · English okay and here it says accept like what type of response are you trying to accept so here it's saying let's say I'm only trying to accept text HTML application stuff okay encoding is mentioned over here connection keep alive is mentioned over here right so this the type of the

**2:03:00** · connection so here you can see more about it cool keep alive keep alive General head allows the sender to hit about hint about the the connection may be used to set a time out and a maximum amount of requests for example okay so for

**2:03:19** · example if uh if you if you're talking about the connection to be like closed I believe as well then it's nonpersistent okay here it's saying that this allows us uh to hint about like how the connection may be used to set a timeout

**2:03:35** · okay so you can set up a timeout and the amount of request like after this many amounts or whatever okay so you can set a timeout and the maximum number of requests that can be sent on this connection before closing it you can mention that okay so these are the responses that is also something we'll see later

**2:03:54** · on okay there you go sound good that's basically about it okay similarly you can see what we got as a response from the server if I zoom in a little bit I'm not able to zoom in over here let me just check yeah I can I can as I got a response okay so here you can see that uh the encoding the content length what is the type of the content the date you know the server and uh the

**2:04:24** · cookie information so on and so forth everything is available over here this is the raw raw one okay these are the status codes stock this is the HTTP version HTTP version

**2:04:40** · this is like the uh status code let's talk about the status quotes a little bit more okay so when you send a request to the server you need some sort of a way to know whether the request was successful or did it fail or something like that or what happened okay for that there exist status codes status codes exist for that for example 200 means that the request was successful okay and we have everything 404 means what it you know you could not find it okay uh 400 means like it's a it's a bad bad request right um and uh

### Error/Status Codes

**2:05:10** · 500 means like there's some internal server error for example so there's like a class for this like uh error codes okay or status codes they are like some classes for this status codes if it lies in like the 100

**2:05:25** · range okay these are basically like uh informational category codes okay and if it lies like information related informational category when we're talking about 200 ranges success codes okay when we're talking about 300 range codes these are for redirection purposes redirecting

**2:05:53** · when we talk about 400 CES this is the client error that's something you did client error like you may press the false URL or whatever 500 means server

**2:06:08** · error okay then that there's a error with the server cool so we saw request in like the real world and that was basically about uh about HTTP requests and stuff so so many types get put to you know post and stuff like that all right let's

**2:06:25** · move forward okay now let's move forward so we're still talking about the application layer we start talking about like HTTP let's let's give you let me ask you a question now so I told you that this is like stateless over here you can see that HTTP is stateless protocol means you're visiting a website you visit the website again and again it will not maintain the state of you every time you visit a website it'll be like hey it's a new person visiting a website or whatever but you might be confused like that's not how it works in the real world if I'm making like if I log to

### Cookies

**2:06:55** · Amazon or something and then I close the browser and then I start the browser again and I go to that particular website again it will stay it will save my session right it will save the items in the cart you will still be logged in it will not ask you to log out and log in again right does that happen when you log out so when you close the browser it automatically logs you out no right so like Kunal us saying HTTP stateless with

**2:07:20** · every time you visit state state is not saved uh but you're still saying that this state saving Behavior exists like this we have noticed it ourself how does it happen the answer is cookies cookies what is a cookie cookie is a unique string okay it is a unique string so basically it is stored on the

**2:07:47** · client's browser our browser it is stored over there it's a file that is stored in my browser okay stored in my browser okay when the first time this cookie is set when you visit the application on a website you visit for the very first time it will set a

**2:08:07** · cookie okay and after that whenever you make a new request in that requests header a cookie will be sent then the server will know oh this request is coming from Kunal and Kunal has sent me this cookie let me check my database then the server will check the database and it will find the uh the state for that the server will know like who is

**2:08:36** · contacting okay so you will send the request in a HTTP you know in an HTP HTTP request you will send the cookie and in the response this will be cookie there going to be a cookie stored in your browser and there's going to be some cookie data in the server okay user value basically okay this cookie user value is kunal's Cookie for example okay so let's see how a little

**2:09:04** · bit more how it works in detail so here you can see in the response whenever a server wants to set up a cookie here you can see in the response it has a tag called set- cookie it has some URL and names and like some path and stuff like that and here it has the expiration date

**2:09:21** · so this is the expiration date for the cookie just like you know like cookies expire here also cookies expire that's basically how it works okay you can see in this header or here you can see the string over in this header as well that's it we talked about headers already okay but sometimes like cookies

**2:09:40** · uh you know can be misused by like websites and companies and things like that to you know just track you when you visit the website and show you like what or whatever like it it's not everyone is comfortable with such things right Knowing When you visit the website or whatever okay there's one more thing known as third party

**2:10:01** · cookies in Safari and stuff you know in browsers you may see some options at times like uh uh you want to disable third party cookies or whatever okay so third party party cookies basically cookies that are set for the URLs that

**2:10:19** · you do not visit okay for example you visit uh flipcart.com or some other website xyz.com it has it an integrated like um you know um ad for example for some other website so that way some website may use your cookies the website you may not have visited so try to Google about this on your own like how to block third party cookies what all measures you can take and how some

**2:10:45** · companies are you know managing cookies and uh what all ways they use cookies for so Google about it okay so that was about like HTTP okay that was it about HTTP um one more thing that in application layer what are applications do we interact with email also right so let's see how email works how email

### How Email Works?

**2:11:10** · works so what is the application Level protocol for email for sending email it's SMTP as I mentioned previously uh it's known as simple mail transfer protocol okay it's used to send email to people and in order to receive it you can use something like pop 3 or something okay so this is the application layer protocol at the application layer but how is the data going to be transported which transport layer protocol do we use PCP or UDP in

**2:11:42** · UDP we know some data will be lost do you want your email data to be lost emails are very important things you want to be you want to send entire email right how TCP Works how UDP works I will teach you in transport layer okay so forget about that right now just think about what it's doing TCP and UDP what TCP and UDP are doing the how how it's

**2:12:06** · happening we are talking about application layer now okay so I'll be teaching you how application layer protocols work so I taught you how HTTP works now I'm teaching you how email works okay so which transport layer protocol will email use TCP or UDP TCP

**2:12:23** · because we want the entire data available to us isn't that what we want so that is what happens if I'm talking about s uh SMTP like simple mail transfer how to send the email so basically the email clients like I'm if I'm using Google do gmail.com or whatever they will have their own servers they will have their own servers

**2:12:44** · so let's say you're sending an email from yahoo.com to gmail.com then what will happen is that you are send sending the data this is the sender okay so what will happen is that the sender is going to send the email to the senders SMTP server senders SMTP server the email will live over here for a while okay it will then make a connection with the receivers SMTP

**2:13:18** · server you can get the data of the server as well uh information which I'll show you later on okay after the connection is established this is transferred to This Server this is the

**2:13:33** · receiver now when the receiver logs into the system as you may see whenever you log into an email client when you Lo log into your email application and refresh it it's below it says downloading email from server in iPhone it does right that's basically what it does after that receiver is like he is it downloading something then it downloads the new emails that is how it works so internally it's using TCP how

**2:14:00** · TCP Works will cover in transport layer right now this is what is happening so you push the email to your server that will connect to by by the way if both the receivers are on the same uh you know account for example both are using uh Google gmail.com then

**2:14:17** · this thing does not happen this thing this connection thing does not happen directly transferred it okay cool and there may be many scenarios in which like uh error handling may be required like message not delivered or something like that right so it uh sometimes happens that um

**2:14:35** · you know if the if this server is offline the receiving server is offline right then this sending server will keep on trying after a few for a few few few days before it gives up okay we'll talk more about that how error handling happens in like TCP okay so that is basically about it when

**2:14:55** · we talk about these servers you can actually um take a look at the uh you know um the the name server lookup you can use the name server lookup command and you can find the uh name and the IP address of the SMTP servers for various domains try to see that okay so you can use this I'm saying uh ands look up type mxin Mail Exchange it basically means SMTP servers and for gmail.com there you got all the

**2:15:25** · information sound good all right okay so we learned about SMTP which is used to send emails now let's look how you can download emails so one is known as Pop okay pop uh pop basically means uh post office protocol okay basically this is how it works um you first connect the

**2:15:47** · client connects to the pop server okay using TCP you can connect it it uses uh Port uh I believe uh 110 so you can connect it on Port 110 it does all the author authorization you can obviously you have a username and password right and then the client asks the servers for all the emails hey give me all my new emails that are unread or whatever okay so you have your client you have the pop

**2:16:16** · server okay you uh authorize it connect and author authoriz and then you transact all the emails transact all the emails get all the emails okay and after that you can update it okay so you can close this session and the server will make update on your command right so for example if you uh ask it to delete something it will delete it okay

**2:16:49** · cool one point I i' like to make is that uh the the other folders like uh sent items and drafts and all these are things these are not synced when we're using this protocol pop Okay cool so you can either download

**2:17:08** · the emails and then delete those right from the server um or you can uh download and keep the emails like on the server as well cool notice something if you download the emails and delete all the emails from the server then emails will only be available on this client it will not be available on any new device you use okay the second one is

**2:17:33** · IMAP is also used to get get your emails it's known as Internet message access protocol okay it's a little bit more complex but uh it allows you to view your emails on multiple devices okay so obviously emails will be kept on the server forever and it will not be like deleted unless you delete it you know manually right um local copies

**2:17:58** · will be you know available on various various devices and you can sync all your folders as well and all these other things okay so example I use my you know Mac OS like if I'm using an email on my if I delete an email from my iPhone it will be deleted from my Mac and my iPad

**2:18:15** · whatever okay sound good so that's basically about how email works you all know about the email stuff like the message and subject and you know um headers and bodies and things like that so you all already like know about it so no worries cool that's basically about it all right uh that was it about emails

**2:18:40** · and uh yeah pretty much about it all right let's move forward one more thing I want to cover in application layer is uh when we talk about uh IP addresses and and uh URLs right so we did not talk about that in detail so what is the URL what is this. i. edu.org domain level

### DNS (Domain Name System)

**2:19:01** · names or DNS which I was talking about earlier let's talk about that okay now let's talk about we talked about like uh this is an important point now let's talk about like uh we know that uh when we when we type www.google.com it connects us with the Google server that has some IP address okay so it's sort of like um you know phone in your phone book you have contacts names and every name has a phone number similarly you have like your uh domain names and every domain

**2:19:31** · name will have like a IP address associated with it okay but now the question is Kunal where is this being stored where is this phone book stored and how does it find when you type google.com how does it find that server that is the real question now okay comes into picture DNS it's a very very important topic

**2:19:56** · DNS okay cool awesome so DNS basically means domain name system domain name system okay so basically domain names are mapped to IP addresses we know that

**2:20:20** · and uh we use a service uh let's say they're stored in some database or whatever and uh we use a service to look up into these databases the most popular service for this is domain name system DNS okay so when you enter google.com uh it will use DNS to find

**2:20:41** · the IP address of Google's server okay cool okay so you'll be like Kunal how how is this a part of app application layer how does that work well because you know it's very difficult for us to remember the um you know the IP addresses so that's why we use uh the domain names so what happens is when you type www.google.com HTTP protocol is going to

**2:21:08** · take that domain name it's going to use DNS okay domain name system it's going to use that I'll tell you how it uses it but let's see how what it's doing so it's going to use it and it's going to convert that URL into the IP address and after that it will connect to the server make sense google.com you type in the browser okay HTTP we already covered HTTP is HTTP will take that URL and it

**2:21:31** · will try to find its IP address and once the IP address have been has been found then it will connect to that server so what is DNS T thing so it's basically a directory a database service for example let's say we have some friends in the world who have some big big databases that have a store of all the AR record of all these things like Okay Google's ww.google.com has a server

**2:21:56** · name this thing or this thing this is the IP address for that so on and so forth so we ask our friends hey HTTP asks the friends hey you are a DNS directory service database can you please tell me I if I have a google.com can you please give me the uh IP address for it it'll be like yeah sure let's look into this in a little bit more detail there are so many URLs in the world right there are so many URLs if we

**2:22:19** · had just one single database that's not going to be enough for us because where would you put it okay where would be would be located and what if that's database goes down you will not be able to resolve any D any any domain name right so and also everyone will be

**2:22:38** · directly trafficking on that database only so these databases are divided into like various classes of domains okay let's see what these classes are so when you type something like this let's say okay so something you have like let's say mail.google.com or something so you have like a mail service of google.com this is known as the

**2:23:09** · subdomain okay what is a subdomain subdomain is basically like a a part of the bigger domain okay Google has a mail service so Google is the this is the main domain this is the this is is known as the second level

**2:23:27** · domain and what is this this is the top level domain I'll tell you the differences one second this is the top level domain okay now let's talk about this so instead of storing everything in one database there are multiple databases for these three categories okay the top ones are known as your root servers root DNS

**2:23:56** · servers okay root DNS servers this is like the first point of contact for your query and anything like uh whenever you write a domain name okay after your local system we'll talk more about that later okay so this is the root DNS server they have their top level domains do uh IO for example dotorg for example

**2:24:19** · Dot com for example so on and so forth top level domains okay these it's these themselves have something like student.

**2:24:35** · or com classroom.org something like that do like google.com or something okay so these are second level domains we talked about this over here second level domain okay so that is basically about it so the root DNS servers are the main ones the first point of contact okay so how it actually works

**2:25:04** · let's see let me tell you a little bit more so what happens is that uh when we talk about root DNS servers so you can actually check out all like who is actually maintaining the root DNS servers like who is maintaining it we can check that out on this website so you can go to this website root servers.

**2:25:24** · org and here you can see that uh around 32 are here the you know root DNS servers around 162 are somewhere over here around 10 are here and so on and so forth around six are here there's five around New Delhi there's one in uh New Delhi the it's operated by internet systems uh Consortium for example this

**2:25:49** · is the ipv and IPv6 IP addresses by the way we will talk about ipv4 versus IPv6 as well okay number of instances so on and so forth so here are the root DNS servers okay and then we can talk about these top level domains like.org and uho

**2:26:08** · or whatever companies have their own such uh as well right some companies they have their own uh such such uh domain names right so basically um this one the top level domain okay the top level servers this is basically uh organization type specific so is being used for commercial organizations edu for educational institutions org for like nonprofit organizations for example right but it is now open to General use also okay uk.

**2:26:43** · us.in or country specific okay so these the database for this is stored like they are uh these are the ones that are managed by I can internet Corporation for assigned names and numbers organization I can so you can go to I can.org and once you go to I can.org you can see that they are the ones who register all of these uh top

**2:27:09** · level domains I can so now you know the answer where these are stored I can okay okay so what happens when we uh put google.com in our website okay what will happen let's see when we write google.com this is your computer okay this is your computer you write google.com What will happen so the idea is that first it will check in its own computer first I will check in my own

**2:27:45** · computer okay so basically what happens is whenever you a website for the first time it will store the value of its IP address that it has found in your local cache local database on your system somewhere why because you don't want to search for it again and again you may visit google.com again and again do you want to visit it do you want to search for it in the entire you know Globe again and again no imagine you are not

**2:28:14** · able to find it imagine we are not able to find it let's say in the in the local system then what what happens then basically uh it's going to look it in the um not in the local C after it's not find in the local cach then in the local DNS server okay so users local DNS server okay so

**2:28:39** · the local DNS server is basically uh the first point of contact okay okay so for example many times it's your internet service provider this is one more point so your local DNS server your internet service provider for example local server so what happens is one one thing I want to share is your internet service provider actually has information of all the websites you visit it does not matter if you're turning on incognito mode or whatever they they know everything okay and if

**2:29:11** · something bad happens then they are liable to tell the police and the government everything okay so next is your local DNS server if if you are not able to find it over there as well then it is going to check in the root server in the root server like if you're searching for Doom it will search in the root server hey do you have a do com in the root server somewhere in the root

**2:29:35** · server that we just mentioned okay then root server is going to be like hey I don't have a com please ask the top level domain so top level domain is going to be like okay it's going to be like it's going to be like nope I don't have it is going to check the top level

**2:29:55** · domain okay and top level domain obviously it's going to have all the Dooms and iOS and do nets and orgs so this will give you the IP address answer it will give you the IP address okay okay sound good and then this will connect to the server of

**2:30:28** · google.com these are the steps step number 1 2 3 4 5 6 that's it as simple as that

**2:30:43** · okay sound good that is basically about it okay cool one thing I'd like to mention over here is that you cannot buy a buy a domain name okay you you can only rent it okay for example if you're renting it via go godaddy.com then GoDaddy Etc they pay some amount to like I can and we pay amount to like GoDaddy and stuff so that's it

**2:31:08** · yeah cool some organizations have their own top level domains like I was mentioning previously like Google has a DOT Google right fire is owned by Amazon for example okay you cannot buy by a domain name you can only um like uh you know um rent it okay cool okay you can

**2:31:29** · also see the messages you know received by the DNS servers you can use the dick command for that so there you go okay this is basically consisting of uh this IP address is basically um the one that is stored in my local cache okay so you can check out the man page of dig and you can say it's a DNS lookup

**2:31:52** · utility okay so it's a domain information grouper is a flexible tool for integrating interrogating DNS name servers it performs the DNS lookups and displays the answers that are returned from the name servers that were queried okay so there you go all right okay so that was about the very first layer of the TCP model okay where are all our layers where are the layers

**2:32:23** · here we go these are the layers of TCP model first we talked about application layer now let's talk about the transport layer okay you all are pretty much aware of let's say data link layer should not be a problem physical layer like basic understanding should not be a physical means the physical stuff okay even

### TCP/IP Model (Transport Layer)

**2:32:43** · though we'll dive into details of this as well but what if someone asks you what is the difference between transport layer and network layer what is the work done by transport layer and what is the work done by Network layer by now you may know like a little bit of an information but you will definitely 98% be having a doubt what are the differences between transport and network what are these two doing what is happening hence now let's look into it in detail now let's look into transport layer

**2:33:17** · okay second one which is transport layer I told you before first I will tell you in brief in short about every layer and now I'm doing a deep dive in every layer okay so transport layer let's say you are texting your friend you're using Whatsapp or something and you're texting your friend this is you this is your friend

**2:33:52** · you're using Whatsapp or something some messenger okay you're using some messenger your friend is also some using some Messenger application okay you write your message and you send it to your friend like this okay and then your friend receives the message what is happening we already talked about the application layer how WhatsApp is interacting with the internet we talked about that but what is the role of the transport layer

**2:34:21** · this this thing that is happening like one message being transferred from one computer to another the transportation part is done by Network layer okay from one computer from one computer to another computer this transportation is done by what network layer and what is done by transport layer then transport layer is the layer

**2:34:46** · that lies over here inside the devices so the role of the transport layer is to take the information whatever message your friend is sending from the network to the application understood so from one network to another network if data needs to be transferred that is done by that part is done by Network layer the actual transportation from one computer to another but within that computer

**2:35:15** · transportation of the data from the network to the applications that is done by transport layer okay so Network layer is going to take care of delivering this message from one computer to another but when the message is received on this computer which application do I send this message to Whatsapp Google Chrome or what that is done by whom transport layer okay sound good

**2:35:50** · cool so it's sort of like providing it pro it's providing us an abstraction okay we talked about abstraction a lot so that's basically about it okay for example you are you and your friends live in different countries okay you send your friend a box okay so you will send your box the Box you will send the package for your friend this is the Box this you will send first to your ker company courier company in your or country and then this

**2:36:22** · cier company will send it over to another courier company of another country courier company of another country and that courier company in that same country will send the box to your friend okay send the box to your friend this is you so this is transport layer

**2:36:50** · transport layer this is Network layer from one device to another device data transferred it it uses the network layer but within the same devices okay within this device and within this device that is happening on transport

**2:37:12** · layer okay so transport layer only works with like first it's working on its own application then it trans then it it's basically giving the data to the network layer okay I'm an application I put WhatsApp in the message and then that transport layer basically will give it to network layer like hey this is the message please give it to my friend Network layer to network layer will be transferred to your friend's phone and then your friend's phones Network layer will transport the data back to transport layer which in turn will give it back to your WhatsApp

**2:37:44** · application okay so that's basically about it okay now ask where is this transport layer if you want to visualize this where does it locate where is it located so on your devices right on your end systems computers or whatever that is where transport layer is okay so transport layer has some protocols we've already talked about this we have talked about TCP and UDP okay so TCP is basically um you know um

**2:38:12** · uh it handles uh like uh 100% of like data can be sent like if something is missing if some data is like if you want want like entire data to be sent we talked about what TCP is already um and in the order the data will be sent and everything in UDP that's not the case data data that is being sent may not be in order some data packets will be lost things like that okay so let's look into

**2:38:35** · what TCP is and what UDP is okay so these are some of the use cases of the transport layer so for example if you want to connect one application to another application if they're even across the world and stuff so you can visualize it in terms of transport layer

**2:38:51** · um you can uh make sure like your entire data is being sent it also you know divides the datas into like when we talked about previously segments right so we we'll be looking into what segments are and how this data is being transferred we'll look into what is TCP IP and how does it make sure so basically if you're sending to your friend 15 files in different applications so Network layer will send those files but those different

**2:39:16** · different files need to be sent to which particular application of your friend right that depends on transport layer okay now let's talk about how this thing happens Kunal we're talking about end systems we're talking about devices you are telling us that uh the role of Transport layer is to basically take the data like whatever you have received from Network to applications and from applications to network okay on the end system only how it travels on the air

**2:39:40** · from one country to another that will be looking into Network layer but in in transport layer what is happening that um let's say you are sending a friend like a file over WhatsApp and you're video conferencing them on Skype and you're sending them an email also okay so you're sending your friend like there's a message okay there's a mail and there's

**2:40:04** · a video call three things are happening with your friends at the same time this is all happening on your system okay this is all happening on your system now for your friend they also need to receive a message on their WhatsApp or whatever okay they need to receive an email or something or whatever like whatever you want to call it or a online file or something okay I can just call it a file you're sending a file let's say for example okay you're sending a file for

**2:40:33** · example and you're video calling them as well so all of this data I know will be traveled through the internet how it travels on the internet that we'll look into later on but first let's focus on how you know our computers will determine that which type of how to send these three types of data to the network and

**2:40:56** · how will our friend determine like when the network of your when your friend's device has gotten the data how will that determine which application to send which data we are sending data in a bundle right okay so this thing is known

**2:41:11** · as multiplexing and this thing is known as D multiplexing so multiplexing is what multiplexing will allow us to send all all these messages and things to uh a lot of destinations so three messages we are sending to three three applications three destinations just via one medium okay for example you put something in a box you you are sending your friend uh cookies and a PlayStation

**2:41:38** · and a mobile phone you put this in a box and you give your friend the Box okay so transport layer has a multiplexer you're sending all these three items in the multiplexer transport layer Multiplex

**2:41:57** · okay transport layer Multiplex and this will pass it to the D multiplexer so one is multiplexer and one is D

**2:42:13** · multiplexer so D Multiplex is just opposite of Multiplex obviously okay so applications will be sent to like here you have the D multiplexer and basically it will pass it to WhatsApp and your browser and your video call Skype or whatever okay so this is multiplexing this is Dem multiplexing as simple as

**2:42:36** · that okay but how does it work internally how does it happen what is it that we use to refer to Applications tell me that what is it that we use to refer applications what is it we use to refer machines IP addresses and what is it that we use to refer applications I covered this already port numbers okay we also covered about

**2:42:59** · sockets what are sockets sockets are just like some some sort of like a connection between two application like a Gateway okay between the application and the what network that's how applications are connected okay so if this message application wants to send something to another message application it will give it to the socket it will give it to the socket over here this will give it to sockets this will also have sockets over

**2:43:32** · here and these sockets have port numbers okay so you all know that these things are traveling in packets okay data travels in packets we all know that we have covered this previously okay so data travels in packets we know that okay so the transport layer will

**2:43:58** · attach transport layer will attach these port numbers these socket port numbers that's why it knows where the application is coming from and to which application do you need to send the data okay cool okay okay and there's one

**2:44:20** · more thing transport layer another point I want to add over here is that transport layer also takes care of concession control congestion control congestion is

**2:44:36** · what congestion is traffic you know when so many cars align or something and so many people are there and the the the space is limited the entry is limited but so many people are trying to get in then there's like a lot of congestion so that's basically what it means so in transport layer happens in like Network layer also in transport layer also so for example network uh has a lower bandwidth but you are sending data packets so rapidly some packets will get lost and stuff this is known as congestion okay so basically it will try

**2:45:09** · to like uh send the packets at like a slower rate and things like that it's going to take note of all these other things okay sound good so it uses some algorithms for it you can check it out congestion control algorithms since we're talking about transport layer so this will be built into which which protocol transport layer protocol like TCP and UDP so here it's saying that uh congestion control

**2:45:42** · algorithms built in TCP okay cool okay let's move forward now we all have a good understanding of Transport layer now okay you send the data to network layer and in your friend's house Network layer will send the data to transport layer so transport layer to network layer and then the data travels through the world then Network layer to transport layer gave a very nice understanding to you okay let's think about your friend let's think about your friend you are sending this data from Network layer to network layer

**2:46:14** · sometimes it may be possible that data gets corrupted in between Maybe possible nothing is perfect right we all have flaws so sometimes it may be happen like get data gets corrupted you are sending data into what you're sending data in segments we have looked we have looked at this term called segments before right so in say data packets for example okay so these B data packets can be lost for example right or something like uh

**2:46:38** · you're sending some files um and you're sending a file obviously you know can't send an entire file so you send the file in packets some for example one are you sending an a file and something that you said obviously you want it to arrive in that order only how would it would it be that something you said previously arrives first and something you said said like much earlier arrives at last okay if I'm saying hi my name is Kunal and your friend gets received it something like this my high Kunal name

**2:47:11** · is that is also not cool right so what you want you want your friend to get all the data if something is lost you want to know like okay I was sending this message and these packets were lost due to some error or whatever and uh you also want to make sure that your data that is you're sending to your friend is in order okay so how do we work with this transport layer protocols they take care of this using something called check sums check

### Checksum

**2:47:44** · sums okay sound good so what is a check sum so basically you are sending some data to your friend Che some you can imagine is like a number okay a random number or whatever so basically you have your computer you're sending a data to your friend data to your friend using this data you will calculate a particular string value or something okay that we'll call check

**2:48:09** · sum okay then your friend receives this data friend receives the data so friend gets the data and since the check sum was calculated using this data and basically this data will have a check sum associated with it this this one only check sum so now when you're sending this data over to your friend you will attach the check sum that you calculated in your

**2:48:35** · home and when your friend receives the data they will also calculate the check sum using the same algorithm if the value is different then something is gone wrong if the value is same then it's cool okay sound good that is basically about

**2:48:53** · it there's one more thing that um uh this was about like if correct data is given or not or whatever okay and uh like if data is not being corrupted or something like that okay but you have to also understand that uh what if the segments are being like you know the the the the packets and data packets and things like segments you're talking about what if they get lost or something how would I know that my packets have received to my friend something known as

### Timers

**2:49:26** · timers ERS okay so what will happen you are at here you are with your friend like you have you have a computer over here this is this is you okay and this is your friend

**2:49:53** · okay cool and basically you are trying to send you are trying to send your friend a a data data packet okay so data travels in packets so let's say first packet is being sent to your friend okay your friend is going to be like um okay I got the packet and your send will send you like a confirmation but when you send your packet to a friend you will start the timer

**2:50:24** · okay you will start the timer your friend be like okay I have gotten the packet I got it so now you will know okay my friend got the packet now let's say you send another packet over here and let's say in between only this packet got lost in between only it got lost obviously timer will be started and when you receive it back back timer end timer end when you send it again

**2:50:54** · timer start again so my timer is running this will never receive over here and after some time since it never receive your friend will not be able to say hey I got the packet back so hence timer will expire and you will know that this packet two was not sent okay sound good so this is known as timer retransmission

**2:51:24** · timer okay it's known as retransmission timer sound good all right imagine that you are sending something to your

**2:51:44** · friend okay so you are sending please don't get confused now with t CP or UDP or whatever what are transport layer protocols what are HTTP what is application layer protocol everything I explain to you in details with real world examples so you send let's say data packet number one okay your friend is going to you start the timer your friend is going to like hey I got it you end the timer then you send it again packet number two you will start the timer your

**2:52:11** · friend will let's say send you back again but let's say this friend does not tell you like while it's receiving back like hey I got packet number two so you have not received that and timer will let's say expire for me I don't know now that if they received it or not so I'll treat it as that they did not receive packet number two I'll try to send another packet number two now this person has two packet number twos

**2:52:40** · duplicate duplicate packets are available are you able to understand what is happening okay how do we solve this problem problem we solve this problem using sequence

**2:52:58** · numbers sequence numbers okay so unique like identification uh like a value number will be provided every every packet every segment will get it okay so that's why how we can identify okay you got a segment with number two uh number two was already present with us so it's a duplicate one all right okay so that was

**2:53:23** · basically about how it works so we looked into detail about HTTP and like application layer and what transport layer is what it does how it does it only thing we need to look now is uh we need to look at uh in details uh about TCP uh about UDP about uh IP addresses

**2:53:42** · we haven't looked into that much um like obviously we'll look at we'll look at that uh in the network layer and uh the data link layer and the physical layer is nothing so it's it's just like physical devices so not much to cover over there uh but this is the only thing remaining right now okay so

### UDP (User Datagram Protocol)

**2:54:01** · let's start with uh protocols deep diving into protocols now uh what are the transport layer protocols we are still on transport layer so what are the transport layer protocols TCP and UDP what are the application layer protocols HTTP and stuff right right um what is the um Network layer protocol IP Internet Protocol uh so we'll uh we'll take a look at all of these okay cool

**2:54:31** · first let's start with the um transport layer protocol so since we are transport layer we know where transport layer works and let's look into UDP now UDP UDP stands for user datagram protocol is it recording

**2:54:56** · yes okay let's learn about user datagram protocol so what is UCP UDP it's basically pretty simple it's uh the transport layer protocol right and uh it basically uh uh you all know what it is like it's used to transport you know like data in the transport layers like from Network to transport layer and from transport layer to network right but the problem is that uh here your

**2:55:26** · data may not be delivered okay data may or may not be delivered okay data may change on the

**2:55:44** · way data may change on the way okay data may not be in order when your friend receives the data data may not be in order so this is the problem so obviously if you want to send some documents emails or whatever do these Technologies use UDP then no if they use UDP then your email may come in different order or some data will be lost or whatever important files will be you know corrupted or something like that right sound good

**2:56:18** · all right so let's see how it happens so basically uh it is a connectionless protocol connection less

**2:56:33** · protocol okay means no connection will be established between the two computers and it will still send like the data in TCP it will be like hey let me make sure there's a connection between these two and after that I will send data which I'll look into later on okay connectionless protocol okay and this thing that I mentioned over here this thing this thing to check something so check sum is used for what to to check whether the data has been corrupted or not okay UDP uses this so UDP uses this

**2:57:05** · UDP uses check sums UDP uses check sums okay so you will know whether the data has been corrupted or not but UDP will not do anything about it okay it's corrupted there's an error okay no problem it is what is it what it is okay so let's look at this particular header and uh this particular like uh the packet that we'll be sending so UDP

**2:57:36** · packet what does it look like uh previously we mentioned port numbers um obviously if you're talking about like transport layer in transport layer we have port numbers where are those we mentioned it somewhere over here sockets and sockets have uh transport layer will

**2:57:54** · attach these socket port numbers it is written over here okay so every data packet will have a port number your port number and your friend's port number so your Source port number and your uh destination port

**2:58:15** · number destination port number in a packet will be available okay the length of the packet the length of this datagram it's known as datagram length of data gr will also be added okay and what else check

**2:58:35** · sum check sum will also be added so these are all the additional things that will be added and then obviously your data will be added what data you are sending okay this is what is added if you want to check the size of this then uh this is 2 bytes um this is also 2 bytes 2 bytes 2

**2:58:54** · bytes and the data is also I believe uh 2 bytes okay so 1 2 3 4 this is total eight bytes and then you have your data oh no data cannot data is not two bytes two bytes is very less um data is like if you're talking about the total size right so let's see total size total size is equal to 2 to^ 16 and

**2:59:18** · uh this particular thing okay the the header this is known as the header something that is attached to you this is header uh this is 8 bytes okay um so total size of data is 2

**2:59:39** · to^ 16 - 8 which is equal to what 6,000 65,000 something these many bytes this is the size of the data that you can send in one packet Okay cool so that's basically how it happens same thing we mentioned previously that's it these all things we mentioned okay that was it no initial connection or whatever just like we mentioned previously it happens like that same check some Theory okay so why

**3:00:12** · do we use it because UDP is like faster right because it's not like always checking for hey did you get the data or whatever okay sound good cool all right so that was about UDP and it's a lot lot uh faster that's why we that's why we use it and that's uh pretty much about it

**3:00:38** · good and when we talk about uh DNS uh use cases of UDP use cases um it's very fast let me just write some use cases um video conferencing apps video conferencing apps and the DNS thing we talked about previously this also uses UDP because it's

**3:01:04** · fast okay gaming gaming also uses UDP okay cool okay you can actually use a command to see all these data packets that are coming in and out of your computer okay so you can say TCP dump and I can say only give me five packets okay if you remove five this my- C5 then it will show you all like that are coming okay I I want I only want to see five so here you go five packets captured and uh there you go it has all

**3:01:38** · the information see udb packet okay sequence is there length is there and so many other things uh IP is there AWS it's coming from somewhere right um that's pretty much about it okay so

**3:01:56** · these are the ec2 instances these are ec2 instance we'll talk more about these things later right uh cloud computing later in the course okay so don't worry about that okay so that was UDP now let's talk about TCP protocol so TCP means transmission control protocol uh we have already looked at it in brief and we're talking about HTTP so HTTP uses TCP right and we we know like let's

### TCP (Transmission Control Protocol)

**3:02:20** · talk about TCP I'll write I'll I'll make a new page for this okay because this is an important topic it's also asked in interviews quite a lot explain TCP how it works okay transmission control protocol uh TCP transmission control protool

**3:02:51** · transmission control protocol we already looked at UDP and now it's time to look at uh TCP so we know that it's being used in sttp and it's like very uh you know uh like the data we have is uh you know is stays with us so what do it what does it do like what is the use case of of TCP obviously uh we talk about TCP so it's on the transport layer so we know it's from uh taking the data from your transport to your network and from Network to your transport layer okay so

**3:03:22** · basically it allows us to do that it's at like the transport layer protocol okay transport layer protocol it does the same thing that UDP does but differently okay when you um uh you know

**3:03:37** · when you get the data when you get the data in the transport layer from where application layer so you create data segments okay so application layer sends data application layer sends lot of raw data let's say sends lots of raw data and

**3:04:00** · TCP segments this data means divide it in chunks or something divide in chunks add headers you know check sums so on and so forth all these are things okay it may also collect the data from Network

**3:04:32** · layer uh when Network layer dist for example you have a data uh and transport layer passes the N data to what layer Network layer Network layer May divide that data into more smaller chunks so at the receiving end of your friend those more smaller chunks will be put into one okay check

**3:04:54** · video I can't write this so have you can check this video when you look at notes okay sound good so it also provides one more thing which is congestion control that we talked about previously congestion control okay sound good cool it's takes care of two things takes care of um when data does not

**3:05:31** · arrive okay so it will work with that sometimes data may not be delivered so in that case we have to work with it and also rearranges and maintains the order basically okay maintains the order of data maintains the order of data and we looked at it previously how it does it using sequence number Okay

**3:05:57** · cool so TCP is pretty pretty awesome we can use it in various various places like we can transfer some PDFs you know um email and uh the HTTP uses it so web browsing and uh so many other things like email and email service and things like that okay so what are the email application layer protocols MTP right pop IMAP we talked about these previously so these application layer protocols use which transport layer protocol TCP okay what are some of the

**3:06:32** · features features features uh it's uh it's pretty straightforward so basically UDP was connectionless this is connection oriented means first a connection has to be established and then you can send data okay cool it is also um you know um uh it also provides

**3:07:03** · us um like um error control okay so error control we talked about this obviously error control okay con congestion control we've talked about this also congestion control right um it also is there's one more thing like uh bidirectional okay I mean like duplex full duplex full duplex so what do we mean by

**3:07:36** · full duplex basically this means that uh you are two computers connected to each other you can send one file from computer a to computer B computer B can then send another file like this or you both can send files simultaneously

**3:07:59** · okay sound good cool notice something that using TCP there can only be two end points like this okay so you cannot like send one message to 10 computers no they they all will be having their own TCP connection one TCP connection only two between two

**3:08:18** · computers okay so that's basically about it okay so let's talk about this connection thing can you're saying it first establishes a connection between two computers and then it transfers data how this connection happens so you already know about like data segments this is the one that looks like for uh UDP for TCP it's a little bit more uh complex

**3:08:40** · okay so if you want to look into like the details of it you can uh you can check it out uh you know the research papers for that so I won't be going into much details of it because it has a lot of things obviously if it's connection oriented then obviously lot more details are required but basically it has the same thing like the source and the destination port number the data obviously will be there um it will add a sequence number and an acknowledgement

**3:09:05** · number okay and obviously your check sum and stuff so the sequence number and acknowledgement number are the two two different things that we have looked into right now so what does it mean so basically first I will tell you verbally then I'll draw the diagram what happens is that the client will request the server you will request your friend's computer hey I want to establish a

### 3-Way handshake

**3:09:26** · connection with you then your friend server will respond back to you you're like yeah sure I want to establish a connection with you too and then you will respond back to your friend okay cool uh I accepted and uh connection established three-way handshake this is known as three-way handshake three-way handshake very important concept and also asked in interviews three-way

**3:09:51** · handshake okay your computer let's say this is the client this is the server okay so you will send a connection request and uh in your connection request you're going to send it to your server you will send the connection request you are going to send a flag which is known as a synchronization flag this is a flag that you send synchron ization flag it means that

**3:10:19** · a new connection is being established this is nothing this is just like a flag a value inside the header that's it don't ask me what a header is okay we already covered over here this thing okay cool the server will like oh I have got a new sin flag what do we do it also sends a sequence number so we know it's in order so sin flag and a sequence number will be sent okay let's say that the sequence number is something like 32 random number okay so sequence

**3:10:50** · numbers are random numbers uh the question is why because um if the sequence number were not random then it would make it very easy to guess and anyone would be able to make connection with the server and hackers could uh you know uh take advantage of this so security purposes sequence numbers are random okay um server will be like uh

**3:11:12** · okay sure I have got your sin flag and I will send you a m flag it will also have a sequence number of random something like 85 not I think it takes the

**3:11:30** · sequence flag it takes the sequence number from the client does some mathematical calculations on it yeah do some maths on 32 and that will give you another number that's going to be its sequence number

**3:11:49** · okay so that's how it works with its sequence number and then client will be like okay um I have gotten it and I acknowledge it now client will again send the acknowledgement flag this will also send sin flag because it is also starting a new connection and then acknowledgement and uh the sequence number okay example let's say this is

**3:12:13** · 56 okay so it will send a sequence number first it was 32 the next time it sends a request it will be 32 + 1 sequence number will be 33 okay sound good cool it will also send an acknowledgement number there's a sequence number there's also an acknowledgement number acknowledgement number is equal to sequence number plus one previous sequence number + one so 33

**3:12:44** · and here acknowledgement number is going to be equal to what previous sequence number which was 56 um + 1 okay 57 that's it and then the connection will be established and then they will be talking to each other that's

**3:13:03** · basically how it works this is a three-way handshake if you want to look into details what this header looks like I already mentioned it contains like the acknowledgement flag sin flag there are so many other flags as well that you can check the you know internet for more more information uh there's the reset flag is there there's a finish flag is there right so all these flags are available over there so you can check it out and the check sum is also available in this um which basically works in the same way and that's it okay so that was about TCP and I

**3:13:37** · believe that was about transport layer also uh so that's it and now let's look into the network layer Network layer cool by the way if you're enjoying the tutorial make sure you like share and subscribe and comment and share with your friends it will mean a lot okay so we know that application layers sends the data to trans transport

### TCP (Network Layer)

**3:14:00** · layer so the data that is in the transport layer so I'll just write it down over here in the transport layer the data we have is in segments okay in the network layer the dat we have the data it travels in the form of packets and then the data link layer the data link layer has uh

**3:14:27** · frames we we'll look on into all of these packets uh sorry uh segments we have already looked into now it's time for packets and Frames okay so what works at the network layer routers here we work with routers so here we work with

**3:14:49** · routers okay we've already covered what routers are so basically this is the part where your data actually travels from one place to another be that like across the world okay so that is pretty much about it and let's say how let's see how we can uh how we can do that okay so let's see how it happens so when we're talking about routers let's say so many routers our router and everyone is connected together and you are let's say over here let me just uh erase this thing um just give me a

**3:15:21** · second and let's see if we are over here somewhere okay um okay so you are over here your friend is over here point a point B you have to send data from computer a to computer B okay so many routers are connected in between so many routers are connected to each other so many routers are connected like this something like this okay many routers are connected to each other sound good

**3:15:53** · this is basically about it so what happens is that uh this entire internet thing okay just like like the global global internet um every single router that you see over here has its own network address so

**3:16:15** · every device we know has its own what IP address Mac address so these also have their own network address so Network address basically means that um it basically allows us to send these like data packets so if you're sending a data packet over here you send it to this one uh Network 1 for example so what this network 1 is going to do it's going to check in its routing table

**3:16:47** · okay it's going to check in its uh in its routing table or forwarding table forwarding table is a part of a routing table uh that basically consists of every destination address okay so for example let's let me

**3:17:05** · explain it to you I know it's a little bit confusing but let's see so what does a packet contain let's first look into that so it will contain the network layer address of the destination it will contain the network layer address of the person who is sending it and what information you want it to send okay so when you send your packet over here you send your packet from here to here this

**3:17:30** · will check this router will check it will check its forwarding table it like oh I have received this packet uh and this packet needs to be at this particular location let me just check my forwarding table real quick let me check my forwarding table oh this uh this particular destination it's uh somewhere around East so it will send it over here like this this is known as forwarding table

**3:17:57** · so routing table forwarding table don't get confused in this this is known as hop by hop forwarding hop by hop forwarding hopping routers to routers until it reaches the correct router okay so this will be like okay I have received N1 will like N1 router uh

**3:18:18** · it will be like hey I have received a packet is this packet for me it's going to be like a packet is going to be like no it's not it's actually for some other destination uh Network layer address so like oh okay uh then let me see where that is in my forwarding table you're like okay let me just check it and then it will move ahead okay sound good so this forwarding

**3:18:39** · and these routing tables actually live inside your routers okay sound good cool okay so forwarding table comes inside a routing table a routing table may have multiple paths so if you want to reach uh Point number c okay how do

**3:18:58** · you reach Point number c you can go from here from here from here all these information will be available in routing table then what is forwarding table forwarding table only contains One path okay it will be like okay you want to go from here to here check it so it's a much much more faster way okay and it's uh it exists inside

**3:19:18** · your routers these forwarding tables and stuff okay so forwarding table it's just a data structure okay okay so it will be like hey please send it the data over here they like okay let me check if this data is for me it will be like no it's not okay send it to your you know checking the forwarding table it like okay forwarding table is saying that this particular IP address lies somewhere over here it will send it here then it will send like let's say if these were connected Also let's say if these were connected also will send here it will

**3:19:49** · send it here and data will be then received okay so every single router will have its own network layer address okay every device has its own Mac address but when you talk about the network interface um it also has its own like some some some logical address are being being

**3:20:15** · created okay cool so that's basically what we mean by it let me explain it to you so there may be a particular Network when we talked about IP addresses we talked about IP addresses right there are like there's four parts to it let's say one of the parts is like 192.168 2 300 and3 or something okay something like that so this thing is basically known as

**3:20:45** · the network address of your device Network address it basically tells which network your device resides in and this is the device address okay I hope it clear now we'll obviously look more into IP addresses later on ipv4 IPv6 and everything we'll we'll cover it okay and this is how routing takes

**3:21:13** · place okay okay now another important doubt you may be having Kunal that is fine you have your routing tables in your routers and that's trying to forward things over here and here what if someone adds a new router in there you know some some locality or whatever and you want to you would that be included in the routing table also how

**3:21:33** · would that be happening and who creates these routing tables who is adding these destination addresses and everything how does my router know where to forward data packets or whatever who is creating these tables we know how it's working but who who created these tables where did it come from okay so who creates these tables control

### Control Plane

**3:22:00** · plane in the network layer there's something known as control plane so what happens is that control plane is used to you know build these uh these routing tables and uh every router you can think of it as a graph okay so every router is a node and the links between the routers are edges of the graph okay routers are

**3:22:24** · what very very big graph you can imagine it these are the nodes of the graph if you're not aware of how no what are nodes and graphs and all these algorithms then uh please check out my DSA boot camp we'll be covering it over there so routers are nodes and uh the edges the links are the edges the links between routers are the edges

**3:22:49** · okay so there are two types of routings that you use to create the tables first is the static routing this is basically adding addresses manually now obviously this is like time consuming and uh if a if a new address

**3:23:07** · is added then you would have to change that it's not adaptive really okay so that's basically static routing you manually add all these routes okay if you want to go to this network address then you go it via over here here here here here you add it manually in the routing table okay cool the second one is dynamic

**3:23:32** · routing Dynamic routing this sort of like evolves okay when there's a change in network it will evolve accordingly okay the algorithms they use are some what like this you know bman Ford dyra path finding algorithms they

**3:23:51** · that those algorithms have been used in finding these paths to various algorithms and routers literally D algorithm has been used in this so some people ask what are the uses of these algorithms we're learning in data structures the entire internet is built on that all right

**3:24:08** · cool sound good okay now let's talk about protocols in application layer we talked about protocols transport layer we talked about two protocols TCP and UDP um there's one more protocol in the network layer that takes place which is Internet Protocol or IP so what is the network layer protocol if someone asks you it's the Internet Protocol okay IP so Internet Protocol here we'll learn about IP addresses Internet Protocol

### IP (Internet Protocol)

**3:24:40** · IP okay now what is the Internet Protocol you know when we talk about the TCP IP model that we talked about about the entire five layers that we were talking about in that the IP part is the Internet Protocol so it basically is the network the protocol that lies in the networking layer it we here we work with like you know how this uh this thing the the routing stuff that I mentioned happens uh this uh the control plane stuff and the IP addresses mainly okay so these are known as IP hosts okay so this is known as an IP address so IP

**3:25:14** · addresses basically let's uh talk a little bit more about that first so when we talk about IP addresses what are IP addresses currently we are talking about version fours okay we'll talk about version like uh uh the six version six uh later on first let's talk about the ones that we have been using so far so ipv4 IP address version 4 let talk about that so these are 32 bit numbers okay with four words

**3:25:46** · okay what is an IP address we already know it defines a server a client a node or a router okay uniquely defines okay what is IPv6 this is the future okay so basically 32bit may be like uh even though 2^ 32 unique numbers that's a lot of numbers right but uh still it may be possible that some someday we run out um that's why we have like some more you know features and additional functionalities and IPv6 address say these are 128

**3:26:20** · bits okay so we'll talk more about that later okay so when we talk about like IP address 5.

**3:26:31** · 6.9.4 so this is an 8 bit number okay this is another 8bit number 8 bit number 8 bit number 8 4 are 32 so what is five in binary five in binary is 1 0 1 0 0 0 0 uh 1 2 3 4 5 6 7 8 8

**3:26:54** · Bits okay similarly 8 Bits here 8 Bits here 8 Bits here that calls a you know an IP IP address okay cool now let's talk about it like we know that IP addresses are like you know used to identify your devices or whatever but when I told you about this hopping Kunal one device will

**3:27:17** · go over to another to over to another to another so is it like my router in my house takes part in this hopping is it like uh you know I am serving someone else's traffic also is that how it's happening the answer is not really so what happens is that

**3:27:36** · instead of hopping on your individual routers this routing path you may be confused Kunal this does not seem like doable you know it's like all of our devices are connected like you know one other my router is connected to my neighbor's router is that what you're saying in a way you can you know make that connection but the routing like this hopping things actually happens over the internet service

**3:28:03** · providers okay so the routing table and stuff that I mentioned it does not have like every single information of every single person's router in the world that's not like how it works so the basic idea is is that it has blocks of addresses not individual addresses blocks of IB addresses okay and these

**3:28:24** · blocks of IP addresses are assigned to the internet service providers like airel Reliance tataa or whatever okay this is known as what subnetting this is the thing I told you about right over here this is the network address and this this this is the device address so so all the devices that are in the same network will start from

**3:29:16** · whenever a router will forward a packet like this it should know the subnet of the destination Okay cool so the internet Society or whatever they created classes for this okay they created classes for this

**3:29:35** · so there are three types of like class address you can say IP address of Class A is there Class B is there and class C is there there's also class D and E D and E

**3:29:50** · are also there okay let me just write it down in a nice way class of IP addresses class is just a basic range class of IP addresses so if I'm talking about class A B C D E all the classes starting from like zero 0 0 0 till uh 127 dot what is

**3:30:21** · the maximum value 255.255 255 okay then we have 128.

**3:30:28** · 0.0.0 then we have 1920. then we have 2240 point0 and then we have 240. z.0 point0 starting from this till 192 -1 191 223 239 and what is the last 255 do 255

**3:30:53** · 255 255 so on and so forth you get the idea do 255 255 255 255 255 255 255 255

**3:31:09** · 255 okay sound good so this is B basically what we mean so this is the network address Network address we already already mentioned right that last last one will represent the you know your host address and this is the network address the first three numbers okay sound good cool all right okay now comes up comes into picture one more thing called subnet masking okay so what is subnet

**3:31:42** · masking subnet masking basically means that uh the subnet mask is going to mask the the the network part of the thing that we talked about okay the IP address Network part of the IP address and it will leave for us to use the host part okay the device part for example if I have an IP address like a network part of a uh of a of this IP address for example Class C so Class C IP address basically means that uh um

**3:32:17** · if we only want to have this thing so for example a subnet mask for class 3 is 255.255.0.0 that is basically what it means okay meaning I can add any numbers over here so all the devices that will be 255.255 do any numbers over here that means that it belongs to IP address of Class C so don't have this confusion why are we using IP addresses classes or whatever because we want to be able to

**3:32:48** · tell which particular category it belongs to okay sound good okay there are also like variable length Subs available okay but we can look into like uh into into that later on all right okay so what do we mean by variable length subnets so variable length subnet basically means that uh you can set your own length of the let's say the network

**3:33:21** · um subnet Network okay for example here it's saying that you can add items over here and here numbers over here and here so if you have a subnet like this 1 2.0.0 Das 31 so this basically means that first 31 bits are basically my Subnet part okay rest remaining

**3:33:48** · remaining okay sound good for example if you have something like 1920.

**3:33:58** · 1.024 so to Total we have 32 bits uh 24 are already occupied by the subnet remaining eight okay so starting will be what starting of the IP address that you can have over here is the first eight would be the same first first 24 bits would not change because these are the subnet 0.1.0 ending will be and then you can have 0 9 1920. 1.1 1920. 1.2 so ending

**3:34:31** · can be 19201 255 total how many do you have 256 so if there's a subnet of uh size 24 bits then remaining bits are eight so you can have total 256 to H part8 okay that's basically

**3:34:52** · what a subnet is and this is how it's allocated to IP addresses but now the question is how do we allocate it to IP addresses like who allocates it okay how do we allocate which particular IP sorry uh not IP addresses um internet service providers isps okay so initially what

**3:35:10** · was happening was that it was on first come first sub basis okay so larger B bigger bigger organizations like there was uh MIT and Stanford and stuff and you know IBM was really po really popular in terms of like the internet age so they all got the class one IP address block okay this one this

**3:35:35** · one okay so it was on like first come first Ser basis but then what did they try to do they say like okay we are not going to worry about these classes and structure we are just going to focus on uh this thing the you know

**3:35:53** · um like we are not going to worry about like the variable length uh subnet masking we can work on that okay so the internet Society uh the IET if uh they are the ones um the internet engineering task force okay um so they are the ones who assign these IP addresses to your isps and stuff okay so they don't worry

**3:36:16** · about the classes or whatever they are just like we are going to assign the IP addresses based on regions why because they want to minimize the number of let's say hops when you're finding your IP addresses and stuff okay so that's one of the reasons why they don't work with like you know they don't assign it based on classes they assign it based on regions all right okay some of these ipv4 addresses that we're talking about are reserved they are like special addresses for example uh the first bit

**3:36:43** · is reserved to let's say uh special one or reserved ones let's talk about this reserved addresses okay so first one is 127 0.0.0.0 8 means first eight bits are reserved these can be anything so an example can be Local Host Local Host is what 127.0.0.1 so these are known as loop back addresses loop back

**3:37:16** · addresses why is it known as loop back because the processes that are going to be running on your machine you know using your the TCP IP protocols it will allow you to contact the same processes so your device will act as client also and server also you know Local Host these are those for testing purposes if you are a developer you definitely know what Local Host is but now you know the story behind it okay so it's it's it cannot be down it will always be up if the computer is running then you will have your Local Host up and and um you

**3:37:47** · you can have like as many of loop back addresses if you as you want okay sound good all right okay so now let's look at how these things the the the packets thing we talked about right the uh data travels in packets and uh let's see how it travels and what is consisting inside a packet so one thing I'd like you to you know if you want to learn more about how it works internally then obviously learn watch you know check the research papers of how the internet packets uh you know I address packet the IP IP version for packets

**3:38:18** · work so we have already seen two packets um one was for TCP and one was for UDP now the those are segments and uh the transport layer chunks are called Data chunks are called segments there was segments I believe uh this one is called packets in network layer the IP version four data packets they known as packets okay so packets so apart from the data the

### Packets

**3:38:46** · header is of 20 bytes okay so packets header is of 20 bytes of 20 bytes okay it contains the IP version and the you know the total length for example so like IP version the total

**3:39:06** · length it contains it contains an ident uh identification number for example uh in the previous example we saw some Flags this also contains some Flags if you're working with tcpip right and uh so many other things like protocols you can Google it about yourself okay check \[Music\] some and addresses etc etc there's one more thing that contains which I'll talk about is

**3:39:36** · TTL time to live Etc so what is time to live basically you know that your packets are traveling on various IP addresses like various routers it's it's hopping hopping hopping it may be possible that sometimes a packet may be like uh you know in a loop or something and may not reach after so many hops so that is what time to live means let's see in a in a in some detail let's see that so if I go to my terminal and I say ping

**3:40:08** · google.com Okay so this is what time to live is TTL okay so means after like 60 hops if it is not reached then the packet will be dropped zero packet loss right now but uh in case it was not then it was drop and this is a sequence number sequence number I mentioned to you right the packet is coming in sequence it has a sequence number or whatever this is that this is that thing okay let's move forward so that's what basically time to live is so so that pet is not roaming inside the network forever if after some particular

**3:40:41** · hops it's not leaving it's not reaching the destination then it will be dropped okay okay so this is a little bit more about packets you can you can Google about it okay and how these packets like travel and everything we have covered that already you know like IP like routers they do hopping and obviously now you know about time to live so whenever you are doing a Hopping it will decrease the value of time to live and it has the check sum values and uh

**3:41:06** · things like that okay so that's basically about it if you want to learn more about it you can learn about and watch the research papers and uh dive deep into it like how these packets work like even at a minute level uh but I think this is more than enough to understand like how the internet works okay two things one thing I already mentioned to you was about uh this is the thing that I already mentioned which was DHCP okay so now we're talking about like let's talk about like the data link layer okay so let's talk about data link

**3:41:36** · layer okay okay now that we have learned about IP version 4 let's talk a little bit more about IP version 6 IP IP V6 okay IP V6 so ipv4 means it's 2^ 32 okay so two

### IPV4 vs IPV6

**3:41:54** · 32 bits IP V4 is 32 bits so in ipv ipv4 is 32 bits means 2^ 32 unique IP addresses you can create which is almost something like 4.3 billion IP addresses unique okay so initially people thought this was enough okay but now as more and more people are using the internet and smartphones and things like that we may run out okay so this is a new internet new version of IP addresses called

**3:42:25** · IPv6 okay IPv6 it is actually four times larger than ipv4 okay four times larger so how many unique addresses can be form in IP V6 2 to power 3 into 4 sorry 32 into four which is equal to a lot of numbers like

**3:42:51** · uh that's a lot it is a lot of number I can't even write it down so 2 ra to power some 128 just Google it okay so this is 3.4

**3:43:06** · into 10 to power 38 numbers that's a lot of numbers these many unique IP addresses you can form okay cool but there are some cons Associated to it some of the like pros and cons stuff cons that are associated with this is it is not Backward Compatible because it's a new technology okay not I mean people are using it some folks are using it and

**3:43:37** · stuff but that the devices that are already covered configured like over your IP version 4 cannot access like websites or servers that may be configured with ipv 6 okay also a lot of you know like it's

**3:43:56** · going to require some efforts okay this is the reason why the entire world has not shifted on IPv6 yet okay cool because isps would have to shift would have to shift

**3:44:17** · lot of Hardware work work okay sound good cool so let's talk about it um how is it

**3:44:34** · represented so there are actually eight eight numbers and every single number is a hexadecimal digit okay represents like 16bit parts of the addresses okay hexadecimal okay sound good so here we have like something like a a a a a a a a

**3:45:04** · 1 2 3 4 5 6 7 8 and this is a hexade decimal okay sound good so this is 128 bits so if I'm talking about you know like 32 into 4 128 and

**3:45:25** · 128 I'm saying dividing into 8 so what do we get over here 16 so it's a 16bit number hexadecimal this is a 16bit string over here of hexadecimal okay sound good

**3:45:47** · all right that's basically about it okay so we won't be diving deep into IPv6 but uh an example if you want to take an example and heade decimal I can take something like something like a b f e something like that okay f001 3 2 1 0 9 1 8 2 something like that

**3:46:24** · obviously 0 0 1 2 3 4 5 6 1 three something like that I ran out of paper but you get the idea it's one of the examples so you see this is a little lot big number okay sound good

**3:46:49** · cool and you know in previous IP addresses we had something like like 127 0.0.0 -8 8 basically means you know the subnet that is prefixed prefix so in this also we can do the same we can do the same representation here also okay exactly the same like that

**3:47:13** · some can be fixed let's say say first two are or let's say you know we have the first uh first four are fixed for example okay so you can have like a b Fe e f o 001 32 and

**3:47:34** · 9182 okay after this I can just say rest are fixed so let's say 60 sorry first 60 are fixed and then rest as it is okay no it will be three no it will four that's fine yeah about four something like that sound good make it smaller like I

**3:47:56** · think that's sounds good okay so if all the values are zero so for example if all the values are zero you can just represent it as zero or if you put just one zero over here or you put no zeros over here that is also fine so basically if you're just having like dot dot so basically 0 0 0 0 0 0 0 0 0 0 0 0 0 something like this uh

**3:48:20** · basically is equal to 0 0 0 if I have one over here and 9 over here something like this 1 9 okay you can also write this as like this somehow means this between

**3:48:35** · is full of zeros okay how many zeros that depends on like how many numbers you may have in front or back okay cool let's move forward okay so you can learn more about it and how uh you know companies are utilizing ipv4 IPv6 and

**3:48:58** · how the government is you know transporting it like deciding whom to give and what all are in use right now you can research more about it later on but we are not going to worry about that because we are working with ipv4 and during the course also we'll working with ipv4 okay one more thing I want to mention is that right now we have learned about the computers that interact with each other and the routers but there's one more thing that interact with the network packets that come from the network layer these are known as middle

**3:49:29** · boxes okay so these are like uh extra devices that also interact with the IP packets okay so mostly you will find these like you know let's say in the network layer but they can also be in the transport layer first one such first

**3:49:45** · such device is firewall may have heard about firewall okay so let's see what a firewall is okay so so far we have learned about like two types of devices one is like the end systems or computers and another one another one is what the routers but there's one more type of device that comes in between which are known as middle boxes so middle boxes are like uh you know um they they also

### Middle Boxes

**3:50:10** · uh work with like you know your packets that are being coming so you can allow some packets and reject some packets and modify these packets so on and so forth all right so some of these they operate over like in the network layer but they also exist in the transport layer so one of these middle box that we look into is a fireball so middle box is AR there just like a middle like devices apart

**3:50:32** · from your computer and uh the routers that also work with packets so for example using a fireball there are like two types of fireballs right so there's one that is connected to like the global internet and one that is connected to your own network right so what firewall does is it provides like filters so you are uh you are get given like some filters like okay all the IP packets that that are coming to my network uh they can be filtered out based on let's say the address okay so if you have someone who who IP address is coming

**3:51:03** · from a specific address you want to block that spe so you can block that uh you can modify the packet for example some IP address coming it's coming it's going to location destination a you want to change it to destination B you can change its header or something like that you can uh you know set some rules on

**3:51:21** · like the port numbers like okay on this port numbers we're not allowed to have uh you can set Flags so for example in the new connection we saw that a sin flag is required right um so you can be like okay block all the sin flag so that no one can make a new connection and like similarly like port numbers and protocols so on and so forth right so there are like two types of firewalls there's a stateless firewall and there's a stateful uh firewall so the stateless firewall will obviously do not maintain a state um and a stateful firewall will

**3:51:53** · uh you know see the packet and maintain its state means it store it stores it in its cash memory so all the other that will come uh you know for it it will basically be like okay we have received some sort of a similar packet we can allow this one or deny this one or whatever so since it's using cash memory and something like that it's a little bit more efficient so where is this in the network it's basically uh in the um you know um there's like two types of it so one is like the the one that is hosted uh

**3:52:24** · you know by the host and end systems and one that is in the network so it's in the network layer as well and uh it's in the transport layer as well okay so the second middle box that we're looking at is called a network address translator okay Network address translation which is known as natat so what is natat so basically natat is a method of mapping an IP address space into another by modifying the network address IP information in the header of the packet

### (NAT) Network Address Translation

**3:52:54** · okay so the idea is something like this that you have your own IP addresses over here right and you have a Nat over here Network address translation so it will modify the addresses so to the outside world the address of the devices will look like 150150 0.1 that is connected to the internet okay now since the IDs are coming from this network initially the host ID was 10.0.0.0 but Nat actually modified it for the internet now the ID is coming from 150. 150. 0.1

**3:53:27** · so now all the IDS in your network can be worked as a private IP this is the basically what Nat is okay sound good so why did this happen so basically uh you know um to slow down the consumption of IP addresses we can only have like 2 H 30 to so that's basically one of the reasons okay so some Enterprise uh you know networks also use this and you can learn more about how you can send a message over a net okay so that's

**3:53:57** · basically about it all right so whenever you're getting some packets or something like this Nat will have like U like its own like you know uh memory or something where it's going to save it and then it's going to pass it over over the internet you can learn more about it like there's a lot of types of uh nads as you can see uh you know like applications for example so it's used in routing in load balancing right um and uh also some

**3:54:22** · issues and limitations you can also learn about like how it works the implementation so like a two-way communication and IP header contains the IP source and destination IP address this is something we already know and uh you know so many things like you can do so you can have private IP addresses and everything like that okay and translation process and visible of visibility operation everything you can types of knats you can see on this screen right over here and methods of

**3:54:50** · translation and all these other things so it's a pretty big topic and definitely you know out of out of our scope but uh a good information like how it works and everything was important to important to give so same thing like U you know the the source address of the packet that you'll be having uh that that is replaced by the public address right and then the Chuck sum is also updated and then it's sort of like carried out via TCP or UDP okay and when

**3:55:18** · you receive a packet uh then uh you know you get it from the public internet and the the natat will be like okay where do I have it in my table we have gotten it from the public internet and then it is forwarded in your own internal Network so that's about Nat and that's another type of middle box so this was about like the network layer and now the second last layer so let's talk about data link layer of TCP

### TCP (Data Link Layer)

**3:55:47** · okay so let's talk about data link layer and what it does so the data packets that we received from the network layer the data link layer is responsible to send these packets over a over a physical link okay sound good cool

**3:56:09** · so it will just transport like your data between like connect devices for example for example you have your own router I mentioned this previously you have your router okay your router has some IP address that is provided by your ISP some devices are connected to that router these devices have their own IP

**3:56:35** · addresses so there's going to be a subnet available over here and new IP addresses are going to be allocated to this how does this happen I've mentioned this previously DHCP okay it's known as Dynamic host configuration protocol okay so dynamic or you can Google it yourself Dynamic host configuration protocol so whenever a new devic is added to your router or whatever it will connect your new device basically your new

**3:57:07** · device is going to connect to the DHCP server okay he's going to be like hey I need some uh IP address can you please uh allocate me some of the some of the IP addresses okay and every uh DHCP server will have some pool of IP addresses pool of IP

**3:57:34** · addresses a b c d IP addresses so it's going to assign some IP address to your new device okay okay so since we're talking about the data link layer we are now not like talking about Network like in the networking how it was done now we're talking about the actual physical presence like how data will be transferred to like the devices that are connected together for example various lands okay so one more thing happens is that um there may be many um you know devices connected in

**3:58:07** · your land okay many devices connected together okay many devices connected let's say in a local area network for example okay okay so even though two computers are being found out together or whatever using the IP addresses and subnets of the IP uh internet service providers or whatever but at the data link layer they communicate with each other using the data link layer address

**3:58:39** · okay something known as the data link link layer address so every device that will have like you know an IP address they will also have the data link layer address so all the you know if you're sending from one place to another they may know their own data link address

**3:58:57** · like of the destination also so basically what happens is how it uh you know happens you can manually allocate data link address data link layer address to devices but it also happens sometimes like automatically okay for example devices are connected to one Lan let's say device number one 2 3 and 4 so

**3:59:17** · device number one 2 3 and four let's say device number one needs to send something to device number four okay so device number one will check in its own cache hey do I have the um you know the data link layer of device number four it's going to be like no you don't when it does not have it then it's going to uh ask in the in the all the like the devices that are connected over here okay this is known as arp cach arp

**3:59:52** · cache okay this is known as ARP cache so all the devices I repeat all the devices that will be connected in this will receive a message from this device what will be the message message will be a packet okay or a frame since we are in data link layer so data link layer transfers in frames Let's see we we wrote it down over here some here data link layer frames okay so what

**4:00:18** · does a frame contain another good question frame basically contains what the data link layer of from where the data is coming of the sender so data link uh layer address of sender and IP address of

**4:00:38** · destination now it's going to be like hey is the IP add of the destination can you pleas send me the data link layer of the destination it's going to be like yeah sure how about that that's it and that's how it sort of like updates it so similarly when it gets new data it updates it cash and this is known as address resolution

**4:00:59** · protocol okay this is what is known as address resolution protocol cool all right okay and it is these data link layer addresses that we are talking about the data link layer when we we're talking about the data link layer addresses okay the data link layer addresses this thing is known as Mac address of your devices when you're talking about ethernet and stuff this is also known as your Mac addresses it identifies the

**4:01:30** · device so Mac address is not of your device it's actually of the component so your Wi-Fi may have a different Mac address okay uh your Bluetooth may have a different Mac address right so this is basically about Mac addresses so it

**4:01:47** · sends all the Mac addresses like okay which one do I want to go to it will go to that one so as you can see data link layer works very closely with the physical layer okay it takes a lot of you know like if you if you talk about physical layer how that works that will take a lot of time because that in that then we'll talk about Electronics okay and hardware and stuff

**4:02:08** · this is more about the computer networking part that we're talking about okay so if you're into electrical and Hardware stuff then definitely research more about it okay so Mac address like when you make a request and when the data comes back to your router the it the router it will basically attach the correct private IP address to the data packets ensuring that they got to the

**4:02:32** · computer in device the router will do this because all those private IP address that I talked about they actually correspond to the correct Mac address only okay so this thing that I talked about the data link layer address those are the Mac addresses okay so the router will assign like IP addresses and Mac addresses to it and that way we'll make sure like it reaches the correct particular device okay so since like the

**4:02:54** · public and the private IP address will you know remain the same but the MAC address will keep on changing as data will travel from one device to another so Mac address is like a 12-digit alpha numeric string it's called as media Access Control okay and uh it it's a

**4:03:10** · unique identity for a particular network interface it's used by all E Network Technologies like ethernet Wi-Fi Bluetooth and so on and so forth Okay cool so you can also block some of the devices like okay this Mac address device is blocked or this device is you know allowed or whatever you can do that using Mac addresses as well I hope you are now able to understand how data travels from like the network layer to the data link layer and the data link layer is the one that works with Mac addresses okay it works at your router level and with the physical devices okay

**4:03:42** · so it converts these into like zeros and ones of bits and transfers it into your physical devices using all the protocols everything we just mentioned okay address resolution protocol and everything so we talked about protocols in like uh all the layers we have talked about all the protocols in every layer and where every layer Works everything is covered remember like the command we did if config you can use that command to check your Mac address also okay so that's basically about it and uh yeah

**4:04:11** · that's the data link layer and that's address resolution protocol protol and then comes like the physical layer so actually data gets converted into electrical signals and then get sent to your devices or whatever okay so I was in short about how you know not in short we covered a lot of things how the the internet works uh if you want more if you look look at more at like the uh data link layer part you can check out how it does like the uh for example uh

**4:04:38** · uh there's this thing called like framing okay the framing uh like working with the frames how those get converted and everything it also does error detection okay just mentioning some few things you can check in in brief like uh that was it

**4:04:54** · and that's how the you know internet works and uh I'm super excited and if you just a few things we are doing complete devops boot camp so uh like in depth I taught you all these things I'll teach you that as well so first of all make sure you like share subscribe right now and comment right now and you can take a photo of this and and uh then you can like maybe yeah you can take a photo and then you can uh like um you

**4:05:24** · know add it on socials you can use the hash devops with Kunal the Twitter bot will retweet so it's a our learning in public initia that initiative that we always support and I believe that was about it now the next thing will be more Hands-On approach are required so you can check out various uh other how to you know get into more into networking and things like that you can take networking certifications and all these other things so yeah that's something you can do but I believe for then how the internet works this was a good understanding we covered everything about OSI model about uh every single

**4:05:57** · layer and tcpip how the internet works what our IP addresses and good visualization as well this is more than enough to get started with the boot camp because in the boot camp we'll be doing Hands-On stuff so when we do Docker we'll do Docker networking when we do kubernetes we'll do kubernetes networking so networking will come again and again and again and again and again all right and now just research and Google and have fun and try to you know

**4:06:22** · paint the picture in your mind how it works but again very important share on socials like share subscribe and comment down below and please share I it's it's a hours and hours long video it made a lot of took a lot of efforts so if you share it's only more motivation for me to create more amazing content share with your friends sharees on socials share what you learned write a blog on it if you want and I'll see you in the next one please do subscribe and like as well and comment and have a great day

**4:06:52** · \[Music\]