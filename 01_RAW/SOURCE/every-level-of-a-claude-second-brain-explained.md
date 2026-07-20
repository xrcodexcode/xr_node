---
title: "Every Level of a Claude Second Brain Explained"
source: "https://www.youtube.com/watch?v=DTCyvo6cC54"
creater: "[[Nate Herk | AI Automation]]"
published:
created: 2026-07-12
description: "My FREE AI OS Course: https://www.skool.com/ai-automation-society/about?el=second-brain-levels&hcategory=youtube-videos&utm_campaign=free-groupFull courses +..."
tags:
  - "Yt"
---
# Every Level of a Claude Second Brain Explained
Source: [YT](https://www.youtube.com/watch?v=DTCyvo6cC54)
![](https://www.youtube.com/watch?v=DTCyvo6cC54)

My FREE AI OS Course: https://www.skool.com/ai-automation-society/about?el=second-brain-levels&hcategory=youtube-videos&utm\_campaign=free-groupFull courses +...

## Transcript

### Intro

**0:00** · Today, I'm going to explain the different levels of building your own AI second brain. You can see here we have a visual of three very different types of data. This one is where we have our context really starting to form and we're starting to see some relationships and we're starting to see some different nodes and entities form. And then as we continue to scale this up, add more knowledge, more knowledge, more relationships, we start to get something that looks a little bit more like this where we have clearly different clusters and inside of all of these nodes we can see how they relate to each other.

**0:24** · And then over here we're taking all of those relationships a step farther and we're able to then start to see how everything really pieces together rather than just having files that sort of link back to each other. This is relationship mapping. And so really the idea of an AI second brain has blown up because we're all trying to get as much information out of our heads into our systems as possible. That's the true value. Your moat is your data, it's your IP.

**0:47** · But the process of organizing that into a system so that you can use it with a bunch of different AI models and so that it can actually recall things in a way that makes sense rather than just hallucinating or spending a bunch of your time and tokens trying to look through everything. That's the issue. So clearly all of this is my real data and this is what the actual project looks like. It is my Hercule project. I have a bunch of folders and files here and at the end of the day that's basically all it is. It is markdown files that are organized in a way that I understand and that my agents understand.

**1:13** · And so yes, I'm going to walk you guys through what I have here and how it works, but I also have this other project where I'm going to show you if you're starting from scratch or if you feel like maybe you're in between level two and three, how we can actually look at the differences and what it might look like to scale up your own systems and start to add context in different ways. So super excited to dig into this today and I don't want to waste any of you guys' time, so let's just start looking at these five levels and how they differ. All right, so every level of a Claude Code second brain and I'm going to be obviously kind of referring to Claude Code a lot, but keep in mind this can be used with any AI model.

**1:46** · I use my second brain all the time with Codex as well. I use it with Hermes Agent. This can be used by different agent harnesses because it's just files and folders. So, what is the actual job of a second brain? A lot of people probably define this differently, but the way that I think about it is that it's a place for me to save notes, meeting recordings, ClickUp threads, stuff like that. I can save it there, and then it helps me basically ingest it and get it into the right spots so that it can actually find it later. And so that's really the thing to think about is can your agent find it again, and could you find it again?

**2:16** · Because if the answer is no, then you probably don't have the right routing or folder architecture set up, which is what I'm here to talk about today. And one other sort of mindset thing that I want to get out there before we dive into these five levels is that you kind of have to work backwards. You want to reverse engineer based on the question. So this will start to make more sense as we get into it, but really what you should be thinking about is how do I want to use this data in the future? Because how it's going to be accessed and recalled determines the way that you put it in in the first place.

**2:46** · For example, a basketball hoop and a basketball. We know what shape the hoop is, and we know that the ball needs to go through. So why would we ever design the ball to be a giant square? Because it just wouldn't fit through the hoop, so that would make no sense. So you need to start with the end in mind a little bit. Once again, I will show you exactly what I mean by that as we continue on.

**3:06** · Because remember, we're trying to get to the point where your second brain knows everything about your business, about you, your relationships. It knows everything to the point where it probably can recall stuff better than you can because it has a better memory, and it can search through things way faster than you can. So we've got five different levels to talk about, and they each kind of have different questions.

### The 5 Levels Overview

**3:25** · So level one is, can you find the file or the info by looking for an exact word or name? Level two is, can you pull everything on a certain topic together?

**3:33** · Level three is, I search for different words than I wrote, so semantic search, you're searching for meaning rather than an exact word match. And then trace relationship chains. Can you ask about topic X, and then trace that all the way back to topic A? And then level five is just kind of making this whole second brain thing super autonomous to the point that you don't even have to think about it. And by the way, this isn't me saying that number five is best. I have some arguments about why I do not currently sit on level five.

**3:59** · The point I'm trying to make here is each level is different and you want to find the simplest level or the lowest level that actually fits your needs. If you don't have a pain point in your system, then I don't really think there's a need to go experiment or develop a new sort of, you know, architecture. If there's not pain, then why create more? Okay, so level one is pretty simple and this is where you always start. So you start with a claw.md or if you're using codex or something, you would start with an agents.md.

### Level 1

**4:28** · But you start with a claw.md which is kind of, you know, that gets loaded up.

**4:31** · That's almost like the system prompt for that session for that project. And then you've just got a bunch of folders and files. But the key part there is the claw.md is kind of treated as a router.

**4:39** · So yes, you've got some, hey, this is your role, here is what's important, but you also have routing rules. If you ever need to find information about me personally, look in this folder. If you need information about our quarter one priorities, look in this folder. Because if you've ever had a point where you ask Claude to do something and then it asks you, hey, can you give me more info? I don't know what you're talking about, but you know there's files and folders in your project, then you probably just didn't give Claude the knowledge to go look there. It's not just going to go search your entire code base automatically. I mean, you wouldn't want it to do that cuz it's going to waste your time and your tokens.

**5:08** · So if it doesn't know if something lives somewhere, then it's probably not going to be able to find it. So when this is properly set up, you will stop having to re-explain things, you will talk to it and it will just know where to go look and why. But the problems with this is that if it grows too big, it can start to get messy and feel ignored. And this is typically more of like an exact words type of search depending on the way that you route. So if I open up my um example project here, let's open up level one.

**5:34** · So in level one, what you can see, pretend this is its own Claude project, we've got a claw.md. So let me click into that. We can see here it says, this file loads automatically every time you open Claude Code in this folder. It is the one file that tells the AI who you are, how you work, and where things live. At level one, this file plus a few folders is your entire second brain. So, here's kind of like that basic knowledge, and then right here, it's this simple, where things live. In the context folder, always true background about you and how you work, read this first. Projects, decision log, and that's basically it. So, right here you can see there's a context folder, we have an about me file, which you could grow.

**6:06** · We have stack and conversations file. We have decisions, so this is a decision log where you can have your Claude at MD always append new decisions and dates whenever you make a big change to your project or to your life or to your business. And then we have projects, so this is where you could have a markdown file or even folders within the projects for all of your ongoing projects, all of your ongoing clients, whatever it is, however you want to organize it, that's where you can have some projects. And you can even start to organize these things by dates if you want. So, if you want to just have one that's for like May, and then you have all of those stuff, and you have one for June.

**6:35** · The thing that I really want to stress here with level one, and the thing that I answer a lot in my community in the comments, is that there is not yet a standard way that has been proven the best way to set up your projects or your second brain besides some of the most common things like your contexts and your Claude at MD and your, you know, whatnot. But, the point I'm trying to make there is don't see what I do and think that that's the right way, or see what someone else you watch does and think that that's the only right way.

**7:02** · All that matters is do you have proper routing in place, and does it make sense to you, and does it make sense to your AI? Okay, so let's say I have my Hercule project right here, and I need to find something in here, but I can't ask AI for some reason. What I need to find is easy because I understand the drill downs.

**7:18** · You know, I understand my base folders, and let's say I'm looking for the HTML slide deck I built for my ranking Claude code features video. I would come into here and I say, okay, I know that's a project, so I'll go there.

**7:29** · Within my projects, I've got another project for YouTube videos, I'll open that up. And now I know I made this video right here, May 30th Claude code top 50 features. In here, I have the actual tier list deck, and when I open that up, now I have the slide deck, and not only can I find it easily, but my agent can find it because it all makes sense and I have routing rules. Real quick, guys, if you're watching this video, you're probably interested in building your own AI operating system.

**7:52** · Lucky for you, I have a full free course on that in my free school community. The link for that is down in the description. Join the free school community, hop in here, take the 7-day challenge, build your own AI operating system, and apply these principles into building your second brain, which will make your AI operating system even more powerful. So, link's in the description.

**8:07** · Let's get back to the video. Awesome.

**8:08** · Okay, so that is how you start. Now, as you move up to level two, you might be able to start to work in some things like the LLM Wiki, which is what I've got set up for a few different things.

### Level 2

**8:18** · This is the whole Karpathy LLM Wiki, which I did make a full video about if you want to check that out. I'll tag that right up here. But, this is when you start to have more files and and they start to take a bit of a different shape, and you want to organize them together in a bit of a different way.

**8:31** · So, it could be really good for researching all on a certain project. It could be really good for, you know, a few of the ones that I've got set up is my YouTube transcripts all live in their own Wiki. I've got all of like my meeting transcripts that live in their own Wiki. So, for example, this is the Obsidian view of my Wiki for all of my YouTube video transcripts. You can see here if I go to Wiki, you can see there's main concepts like agentic workflows, AI coding market, context window. And all of these in here start to relate back to other tools and concepts and videos and stuff like that.

**8:59** · So, we've got the sources, we've got platforms, we've got um context management techniques. And all of this was auto-created by our Claude code when I told it to ingest this YouTube transcript into our Wiki. So, I'm not going to dive super super deep into all of this right now, but definitely check out that YouTube video I linked. Now, what else is cool about this is this transcript Wiki actually lives within my main Herc 2 project. So, here's Herc 2.

**9:22** · If I go right here to Other Worlds, and then I go down to YouTube OS, and I click into the transcript Wiki right here, this is what we were just looking at in Obsidian. We could see the concepts, we could see the comparisons, we could see the sources, techniques.

**9:35** · This is what we were looking at in Obsidian. So, all Obsidian is is it basically just visualizes your markdown files. You see here, wiki, concepts, comparisons, techniques. This is what we were just looking at. All we get now is we just get a visual view of all that.

**9:48** · And so, the reason I wanted to bring that up as well is because I think a lot of people obviously get pretty infatuated by that visual view. And obviously, I started the video with that because I think that's what hooks a lot of people in. But, all that really matters is can your system grab that and give it to you? If you are a visual person and you really want that view, then by all means, install Obsidian and set it up. It's super easy. But, I'm saying that you don't always need that visual layer if it's not beneficial to you. I hardly ever open Obsidian, just to be honest, because I know that it all lives here and I know that my second brain and my OS can find all of that.

**10:20** · So, anyways, in level two here, let's look at this. It's very similar in shape to level one. It's just building on top of it because now we have our claw.md, which starts to route to some other things because it routes to the wiki and it still routes to contexts, projects, decisions, but it's also routing to references and memory.md. So, we're just starting to add a bit more of these routing rules inside of the claw.md.

**10:41** · We can grow the context, we can grow the decisions, we can grow projects and references, and we can also start to get this idea of memory. And what's really cool about this is you can turn on auto memory in Claude Code. And the AI will basically start to write this file and update it on its own. So, you don't have to think about it. If you come in here and you do {slash} memory, it'll say auto memory on or off. And if it's off, if you want to turn that on, just turn it on. And now, one thing to think about is I mentioned earlier that we want to make our second brains tool agnostic.

**11:08** · And this is one thing that's pretty specific about Claude Code is it uses claw.md and it uses this memory.md and it keeps that updated on its own. So, if you wanted to move this over to Codex, what you would do is you would first of all transition your claw.md. You'd make a copy of it called agents.md. As you can see here in my Herc 2, I've got my, if I scroll down, claw.md right here, and then I've got agents.md right here.

**11:29** · And they're essentially the exact same file. Just so Codex can read this one and Claude code can read this one. But because Claude code keeps that auto memory, all you need to do is make sure you have that memory.md file and just tell Codex, "Hey, by the way, for memories, look in our memory.md file."

**11:43** · It's all about the routing there.

**11:44** · Anyways, just felt like that was important to throw out. But at a certain point, when you have these, you know, wikis, they do start to degrade a little bit. Because what's what's great about them is that they have indexes, right?

**11:53** · So, when your AI starts to look in the wiki, it knows, "Okay, if the user's asking about a genetic workflow, I'm probably going to start here. And then from here, I'm going to drill down and read this to see what else is important to them." Maybe they're asking about the WATC framework, and then I can drill into that. And maybe from there, I need to learn a little bit more about the Claude at MD system prompt, and then I will drill into that. So, there are relationships here a little bit, but this isn't the same as like semantic relationships or knowledge graph relationships that have more meaning.

**12:22** · This is more about just actually following a trail and reading the page in its entirety. And I'll be fully honest with you guys, I pretty much sit my entire PERC 2 project in this level, in level two.

**12:34** · Because this has been working really well for me. Like I mentioned earlier, I haven't felt a pain yet big enough to switch over to level two. And here's what I meant by that. My wiki has links, isn't that a knowledge graph? Not exactly. Because this doesn't have connections of how they are related, like this is endorsed by this or this has cron to here. These just have connections because it's like a a see also. It's like backlinks. So, they're very similar, and yes, they can achieve a similar effect, but it's still a little bit different.

**13:02** · Anyways, let's take a look at level three, which is where you start to do things like semantic search. Whether you do that in Obsidian, whether you do that with Pine Cone or Supabase, however you start to grab the actual semantic search, that is what level three is. And so, just as a quick visual for you guys, let's take a look at this quadrant cluster of images. So, every one of these vector points is an image. And what we see in here is the payload is stuff like the file name, the URL, the name of the author or the artist, and the URL.

### Level 3

**13:32** · But, we don't actually see like what's in the image. We don't get a description. So, what we have to do is we have to organize these images by meaning or by similarity. So, when I open up this graph and we start to visualize the stuff here, what you see is that we have this main image, these owls, these kind of like I don't even know. Um it's a very trippy style, like hallucinogenic style. Anyways, then this one is kind of similar, right? It's got those colors, it's got the paints. This one is also similar, but they're not the same. They just share similarities.

**13:58** · And as we start to expand these more and more, we can start to get into different styles. So, this one has like some creepy eyes and mushrooms or whatever.

**14:07** · This one is kind of more down that fantasy lane. And as we start to build out more of these relationships and meanings, we can expand and grow away from them. And so, Quadrant really just gives you a visualization here. I mean, it's a it has clusters and vector store.

**14:21** · But, \[snorts\] the reason I pulled this up as a demo is just because we start to see the actual relationships form here based on meaning. And that's what's important about semantic search is that we're no longer doing keyword matching, we're searching based on meaning. So, here in my YouTube transcript second brain, if I go to the smart lookup over here, this is very different from just the regular search. So, for example, if I search here for um feedback, let's say.

**14:45** · We're actually doing a match on the word feedback, and it's only showing me where that word actually appears inside of our second brain. But, if I come over here in the smart lookup and I search for feedback, we are getting matches that have things in here that mean feedback. So, live test results, cloud code skills, which was uh talking about evaluations and stuff. So, there's a big difference between keyword matching and semantic search, you know, similarity matching.

**15:11** · This one over here is saying X equals X, and this one is saying X is similar to X, Y, and Z. And so, this all just goes back to vector databases. I've talked so, so much about vector databases, so I'm not going to dive super deep in.

**15:22** · I've got so many resources on my channel. But basically, what it is is we take a document, so let's just say YouTube transcript, we chunk it up, and then each chunk is ran through an embeddings model. And the embeddings model puts that chunk of text onto like a three-dimensional space where space is related to meaning. And so it decides, okay, this chunk is about a company, so we're going to put it up here. This chunk is about finances, so it's going to go here. And we start to see these vectors form near other similar vectors.

**15:50** · Now, do you guys remember how I said earlier, like you want to think about how is the data going to be used? What type of questions are you going to ask?

**15:56** · This is a reason why that's so important. So think about this. Let's say I put my meeting transcript of March 5th meeting into my second brain. And I put those in as, you know, vectorized chunks. So let's say when I vectorize that meeting, we actually get, you know, like 20 chunks. It actually creates 20 chunks, or however many that is. And then when I say, "Hey, Mr. AI agent, can you summarize the meeting on March 5th?"

**16:20** · It will basically search for March 5th meeting summary, and it will pull chunks that are similar to March 5th meeting summary. And then even if it gets the right chunks, it's going to only summarize those five chunks. It's not able to look at the entire meeting summary, or sorry, like meeting transcript in entirety. So it doesn't really know a summary. It might be missing a lot of key information.

**16:38** · Now yes, there are things you can start to play with there like metadata and other things like that to make these results better, but at the end of the day, people kind of assumed that a vector database was some magic solution where it could always pull back what you need, but that is very false. And I mean, think about it like this. Let's say we have a table, and we say, "Hey, which week did we have the highest sales?"

**16:58** · Okay, the agent looks for highest sales, it maybe grabs this chunk outlined in gray of data, and then it looks at, "Okay, week six here was the highest sales, so that must be the answer." But in reality, you can see week 14 was higher, week 19 was higher. So when you need something that has actual full context, then you can't do the vector database chunking. That's where you'd rather just have a markdown file of March 5th, and then all this agent would have to do is read that entire markdown file and then give you a summary. And that's just going to be more accurate.

**17:27** · So, in this project, if we open up level three, you can see it's very similar because you can still have context files, decision files, you can still have all that, and then you might identify, "Okay, actually, this one specific unit of my business, maybe my YouTube transcripts, maybe I want just that to be a vector database, but I still want my context and my projects and my decisions to be markdown files."

**17:49** · So, another point I'm trying to make here is just because you have a second brain, and just because you have a massive, you know, folder here with a bunch of folders and files, doesn't mean that the whole folder needs to be one style. It doesn't mean that everything needs graph rack. It doesn't mean that everything is just LLM Wiki. It means that you're able to decide, based on the type of data and the way you use it, how can you structure this specific folder in the way you want it. So, here we have a vector index folder, and we click on the house search works. It works by chunking, embedding, search, hybrid, re-ranking.

**18:18** · There's some things you can get really, really nitty-gritty on when it comes to semantic search. But what vector retrieval is really, really good at is looking at tons and tons of data, typically just like a lot of text, and when you need a very specific answer, something that's very similar. So, if you had a thousand rules that you needed to store, and you basically said, "Hey, um can you remind me what rule 17 was?"

**18:39** · That might be a really good use case for vector search because it's able to search for rule 17, pull in those chunks, and just give you a little snippet because it would be a waste of time and tokens for your agent to read the entire markdown file of all 1,000 rules if you just needed rule 17. So, that's kind of the difference there.

**18:54** · Like I said, I've got so many videos on vector stuff on my channel, but really you could say, "Hey, to your cloud code agent, I have this data. Here's how I want to use it. Do you think this would be better for now as markdown files, or should I do semantic search? Like what would actually make more sense here?" And it will help walk you through the way that you should actually set that up. So, now I hope you guys are starting to understand why I said, you know, moving up on or I'm sorry, like moving up on levels, moving down doesn't necessarily mean better. It's all about figuring out what is the pain point with what you're currently doing and where would a different level help you out and fix that pain point.

### Level 4

**19:27** · Okay, so now let's take a look at level four. This is where we start to get into like knowledge graphs and relationship graphs, which typically are going to be the most complex and sometimes the most expensive as well. If you're doing it on a certain platform, you could always use open source software, but anyways, knowledge graphs.

**19:42** · And I also want to be up front. I've played with these a lot, but I do not actually use these on the day-to-day because I found out just other ways to use routing files and wikis that fit my needs. Now, my work is very different than what a lot of you guys' work may be. Mine is very project-based and it is very, you know, content-heavy. I don't have a massive CRM to manage with a bunch of different businesses and clients, you know? And if I did, maybe a knowledge graph would make a lot more sense and it probably would.

**20:06** · But typically, the cool part about that is if you identify that you needed a knowledge graph, let's say for all your projects, you needed you wanted to put all of this in a knowledge graph, the data probably already exists here.

**20:19** · And that's the thing about building out these relationships in your knowledge graph is that the system, whatever software you use, is typically going to be pretty good at embedding that and creating that. But the problem that you have to solve is you have to give it enough data. And so, one thing that I really like to do is I like to have these brainstorm sessions, as you can see. And what I do with these brainstorm sessions is I use a skill called Grill Me. So, if you see here, I have a skill called Grill Me, which I originally got from Matt Pocock. I customize it a little bit. I'll leave the skill for Grill Me in my free school community.

**20:47** · The link for that is down in the description. All you have to do is hop in here, go to classroom, click on all YouTube resources, and you can find all the skills and everything like that. But the skill, what that does, is it basically just grills me. It interviews me relentlessly about a certain topic and it creates a brainstorm file here.

**21:02** · It only stops when it knows everything about it. So, if you wanted to start building up a knowledge graph for all your clients and businesses, just say "Grill me about client A. Grill me about client B. Grill me about business A."

**21:12** · And it would just ask you questions and you can feed it files. You can give it stuff. You can feed it in transcripts.

**21:16** · You can feed it in, you know, contracts, whatever it is. And that's how you can start to form a lot of data.

**21:22** · Hey guys, me again. Real quick, I'm editing this video and I realized that I needed to throw out one thing here, which is that obviously, if you're putting all of this data and you're sending it all to Anthropic, to Claude models, then that's not private. So, if you feel comfortable with that, that's fine. I am putting a lot of my data in there and it is my business stuff and that's what I'm doing.

**21:41** · But, if you don't feel comfortable with that or you, you know, don't want to send client data, of course you don't, then maybe you want to do that through open-source models and maybe Claude code isn't where you have the second brain that has every single piece of information about you and your business and your client's business. So, the point I'm trying to make here is just this is what I'm doing. I'm obviously aware of the fact that my data goes to Anthropic when I process it through Claude. And if you guys are doing that, then you should also be aware of that. But, there are other options if you can't do that. So, I wanted to throw that out there.

**22:08** · I am planning to make a ton of videos here soon about local AI and open-source models and all this stuff cuz it's a really, really exciting space that I think is going to start becoming bigger and bigger. So, yeah, keep that in mind.

**22:20** · Back to the video. I think sometimes that's a misconception about how I got here and how people build their own AI OS or second brain is that they think the problem is the system not retrieving it great, which sometimes it is, but sometimes it seems like the bigger problem is getting everything out of your brain into the system. So, before you blame AI, take a look at your folders and files and say, "Is this actually holistic? Is this Does this have all the nuance that I have in my brain?" Anyways, from there, when you open up level four, you can see that it's it's, you know, very similar still.

**22:52** · We're just adding on a few things. You can see here we've added an agents.md, which is the exact same as the claude.md. And what else is cool is you can literally just reference inside of your claude.md at agents.md and then you can delete all this because this basically just like injects that file into here. But I just wanted to show that. But anyways, you can see we're still following the same principles. We have a wiki. We've also added a knowledge graph layer. We've still got the same where things live with the routing with all these just regular folders and boring markdown, but boring is beautiful. You can see that our memory is still here. It's starting to grow, and we just keep building on top of this.

**23:23** · So what one thing we added here as you can see was our knowledge graph folder. And so what happens here is we get different entities, right? So like we can see okay Jordan is a person. Acme is a company. And then we can start to form relationships between all these things. So Jordan works at Acme. Acme is endorsed by Postpilot. Postpilot is a competitor of Cadently. And it starts to build out not only these entities, but it shows you how they're all related.

**23:45** · And so that's why when I said that I really like using, you know, this um what's it called? LLM Wiki is because I have enough of that feel of all these relationships because I've put so much time and effort into ingesting these in the right way and giving it context. The thing about this one is that it has to read every single file it wants. Maybe it was looking at AI video production and all it needed to know was ElevenLabs, it still would have read this entire file first. And so that's where sometimes the knowledge graph is actually more lightweight in that sense.

**24:16** · And this is the example I showed at the beginning of the video where we have Lightrag. And forgive me, I'm going to have to blur some of this stuff out because this is like legitimately my entire second brain in our business. But as I really zoom in here and this kind of slows down my computer because there's so much. But what you'll notice is that we actually start to get relationships. I probably shouldn't have done this with so much data, but you can see like we have this collaborates with that. We have this builds that. And so if I really started to open up all of these little you know, circles, we could see what was going on and how they're all related.

**24:45** · We could see that our 7-day AI challenge it was provided from YouTube. It connects to the onboarding process of AIS Plus.

**24:54** · It was developed by Aiden. And so we can basically follow around these relationships, as you see. And even though it's pretty much the same data that you see here in Obsidian, we're not getting that same level of relationships between these different entities. So, anyways, if you guys want to see, you know, a full breakdown video on something like Logseq or um Graphir or all the other solutions that there are out there for more of a knowledge graph relationship graph, then let me know.

**25:14** · But, that is kind of the difference there. So, if you don't need those sort of relationship chains, and you're not worried about that semantic type of relationships, then you probably don't need to use something like a knowledge graph. And then, level five, we have more of the always-on Brain OS, and something like Gbrain. Garry Tan, CEO of Y Combinator, he created this thing called Gbrain, which pairs really well with G stack. But, Gbrain is kind of the idea of everything we've talked about here. Wikis, routing, relationships, tools.

### Level 5

**25:41** · But, Gbrain has kind of that always-on element, because it is like constantly syncing and refreshing memories and adding more stuff. So, adding in Gbrain to something like a Hermes agent would be really, really good. You could still do it in cloud code, but you'd have to handle those crons and get all that stuff set up, which is why I don't currently run Gbrain at the moment, but I have been playing around with it with my Hermes agent. So, anyways, the point here is that it's very similar to everything else we've just talked about. It's just having that auto-updating feel, more of the autonomous, always-on feel.

**26:10** · But, I will say, another thing that I kind of that kind of scares me about that is you have this whole dilemma of, you know, when do you have too much context? And when does it get to the point where it's actually doing more damage than it's doing good? And the reason I bring that up is because I am in complete control of what my second brain ingests. I will run a skill to go grab all of my meeting transcripts from the week. I will say, "Hey, here's something. Help me figure out like how many brains are about this, and then let's ingest it together." And for me, I really like being in that control, because in my mind, there's a big difference between a few types of data.

**26:41** · If you guys remember in my like AI OS videos, I've talked about the four C's. So, context, connections, capabilities, and cadence. And for the second brain, I mainly think about it as just these first two. So, context and connections. And so, when I think of context, that's stuff like, you know, what my business has done. So, if I come into here, into my my second brain, and you can see here if I go to um up at OTAs. So, OTAs are basically just our projects for the quarter. And so, here I can see all the Q1 ones, right? I can look at all those and I can click at them and see decisions that we've made in the statuses. And I can also see Q2 OTAs. So, I can see what's going on here.

**27:12** · And my second brain's able to see that because that has been basically those are locked in decisions.

**27:17** · This is what we're doing this quarter, and then I'm updating the statuses of that stuff. So, that's like context.

**27:22** · That's what's going on in the business.

**27:23** · But when it comes to connections, if I go back to this, this is more of like the real data that isn't as evergreen.

**27:29** · This is stuff that changes. This is like Slack threads. This is emails. This is a customer data. And that type of data you don't want to ingest into a second brain because that's just noise then. Then you have to go back every month and like delete old stuff. So, the way that I like to think about my actual second brain is stuff that I'm not going to delete. This is stuff that is like, okay, in a year, will it be good for me to have this memory in here? Yes.

**27:51** · Otherwise, it's just adding noise. So, when you're adding data into your project, think about it like the context and connections. Think about if this is kind of like more evergreen, holistic data, or if this is more things that are going to change next week. So, you probably shouldn't pull it in, but you should make sure that your second brain has access to go grab it. So, that way if I said to my second brain, "Hey, can you just take a look real quick at what John and I were talking about last week about, you know, OTA number seven?" It would first go to our OTA file, and it would search through there and it it would try to find it there.

**28:20** · If it couldn't find it there, it would look through the Wiki and it would look through meeting transcripts and see what we talked about there. And if it couldn't find it there, it would finally go to ClickUp itself, pull real data in from me and John's conversations, and see if the answer lived there. And so, that in my mind is still a second brain because I'm able to ask a vague question, and the second brain knows exactly where to look in what order to find that real-time data, and then give me back the answer that I need. That's the question I ask myself is, "Does this thing understand where my data lives and where to look, and can to give me accurate answers. So, as far as finding your level, remember your whole project doesn't fit into one level.

### Finding Your Level

**28:51** · Maybe this folder's level two, maybe this folder's level four, maybe this folder's level three. Here's some things to think about. If you were re-explaining your setup and you need to find things by exact words or files, look at level one.

**29:03** · If you have 30 plus notes and you keep forgetting what's in them, look at level two. That's where you sort of like ingest them and get that wiki with relationships. If your project is just completely whiffing on notes that you know exist and your routing isn't working, then maybe you want to look for something more like a semantic search that doesn't rely on an exact word level match. If you're looking for relationships and to be able to follow chains of questions and thoughts, then you probably want to look for something like a knowledge graph. you're running agents offline and you've got so much data and you want to sync up a bunch of Hermes agents together, then you probably are looking for something like level five, something like G brain.

**29:31** · And another topic that I get some questions about, which I'm not going to fully address in this video, but I will briefly bring up is the fact that you are building your own second brain OS.

**29:43** · So are other people on your team. The next question is, how do you actually make sure that everyone's data is syncing together and how do you have more of like your team second brain?

**29:51** · There's a lot of different ways to solve that. I think once again, it's not an issue of, oh, do we use Google Drive or Notion or GitHub or cloud plugins? I think the issue to figure out with your team is how do we actually make sure that we all have it shift so that this stuff is actually useful and not just noise. How do we make sure that process owners are updating their docs and syncing their stuff there? How do we make sure that other people are pulling from that rather than always just pinging the same people for questions and answers all the time? I think the adoption and the change management question is the bigger one.

**30:19** · The tech and the way it actually functionally rolls out is a little bit less. But what I do know is that you getting set up with your own first and understanding how it works, how you should route, how you should make the decisions of where the data should live, that's the first hurdle. You can only solve the team-wide problem once you feel comfortable about the way you run it every single day and then it works for you. That is going to do it for today. Like I said, you guys can grab all the skills and everything that you need from this free community.

### Final Thoughts

**30:46** · The link for that is down in the description. I will also include the slide deck if you guys are interested in flipping through. So, if you guys enjoyed the video or you learned something new, please give it a like. It helps me out a ton. And as always, I appreciate you guys making it to the end of the video, and I will see you all in the next one.

**30:58** · Thanks, guys.