---
title: "Steal My Exact AI OS Setup (5 simple tips)"
source: "https://www.youtube.com/watch?v=Ek1NBfnnTH0"
creater: "[[Nate Herk | AI Automation]]"
published: 2026-07-24
created: 2026-08-05
description: "$1000 FREE Hyperagent credits and my ROAST skill: https://hyperagent.com/marketplace/s/ccs01KWCXR3W4_XRNS6AAXVZBT0617?utm_source=youtube&utm_medium=influencer&utm_campaign=NATE-HA&promo=NATE-HAMy pla"
tags:
  - "Yt"
---
# Steal My Exact AI OS Setup (5 simple tips)
Source: [YT](https://www.youtube.com/watch?v=Ek1NBfnnTH0)
![](https://www.youtube.com/watch?v=Ek1NBfnnTH0)

$1000 FREE Hyperagent credits and my ROAST skill: https://hyperagent.com/marketplace/s/ccs01KWCXR3W4\_XRNS6AAXVZBT0617?utm\_source=youtube&utm\_medium=influencer&utm\_campaign=NATE-HA&promo=NATE-HA  
My playbook for growing a $1M AI agency: https://app.aiautomationsociety.ai/opaa-ads-optin  
My FREE resources: https://www.skool.com/ai-automation-society/about?el=AI-OS-5-Tips&hcategory=youtube-videos&utm\_campaign=free-group  
  
My Tools💻  
FREE MONTH voice to text: https://get.glaido.com/nate  
Code NATEHERK for 10% off VPS (annual plan): https://www.hostinger.com/vps/claude-code-hosting  
  
The most common question I get right now is how I keep my AI operating system organized, so in this video I'm breaking down the five tricks I use to keep mine accurate while adding more data every single week.  
  
I cover the four ways context fails (poisoning, bloat, confusion, and clash), the difference between expertise and situational context, and how I treat my CLAUDE.md as a routing file instead of a system prompt. I also run my free OS audit skill on my own setup so you can see exactly how it catches stale data and broken routing.  
  
Sponsorship Inquiries:  
📧 nate@smoothmedia.co  
  
Connect with me:  
https://www.linkedin.com/in/nateherkelman/  
https://x.com/nateherk  
https://www.instagram.com/nateherk/  
  
TIMESTAMPS  
0:00 Intro  
0:39 Running the OS Audit Skill  
1:38 The 4 Context Failure Modes  
4:34 Expertise vs Situational Context  
6:57 Sponsor  
7:58 Audit Results & Skill Walkthrough  
11:56 Tip 1  
16:53 Tip 2  
19:09 Tip 3  
20:15 Tip 4  
22:50 Tip 5  
23:48 Team Syncing & Final Thoughts

## Transcript

### Intro

**0:00** · The number one most common question I've been getting lately is about how I have my AI operating system organized.

**0:05** · Questions about how I should be routing files and how I should have wikis organized and folders organized and where do I put client projects and so many questions around the organization of it. Because the problem is if you don't have it organized, then your agent is going to start to hallucinate things not only to you, but potentially in your skills and when you're having it build automations and stuff like that that could get pretty bad. So today I want to talk to you guys about these five different tricks that I've been using that have helped me keep my AI operating system super accurate, super upto-date, and it allows me to add more and more data every week without sacrificing quality or memory.

**0:35** · So let's not waste any time and just get straight into today's video. All right, so here is an older version of my Herku project that I pulled in just to show you guys a quick skill that I built that I'll be giving you all for free. So look at this. I'm going to go in here and I'm going to run this OS audit skill. Now what's going to happen here is it's going to look through my entire project. It's going to read everything. It's going to look at all of the routing rules, and it's going to tell me all of the areas where there are things that are weak, where I need to make some improvements, where I need to update some data, that kind of stuff.

### Running the OS Audit Skill

**1:04** · Essentially, the deliverable of this audit is an audit. It says, "Hey, here are 10 things I noticed. Here are the 10 fixes. Do you want me to do them? Yes or no." It won't actually do anything yet.

**1:13** · This is just kind of an exploratory phase. It will also create this folder at the root of your project if you don't have one. If you do, it's called audits.

**1:20** · and then it will just chuck in a markdown file that tells you what it found and what the fixes are. And by the way, if you guys want to get this skill for free, just go to my free school community. Link for that is down in the description. Come into here, click on classroom, click on all YouTube resources, and you'll find it in there.

**1:32** · So, while this is running, what I want to do real quick is talk about why this is so important, and then we'll come back and we'll look at the actual audit.

### The 4 Context Failure Modes

**1:38** · So, what I want to talk about today before we get into these five tips are the different methods of context failures. So, four different failure modes of context and then two different context types. So understanding these six different things is going to make the audit make more sense and it's going to just help you in your day-to-day when you're using your AIOS way more. So the first thing is the four failure modes, poisoning, bloat, confusion, and clash.

**2:00** · Basically meaning when your agent tells you something that you know is incorrect or maybe you don't even know, maybe you find out later that it's incorrect. When it makes a mistake because of the context, there are these four reasons.

**2:09** · So let's start with poisoning. Poisoning means you have a false fact somewhere in the context. So imagine this is the context. Imagine this is a false fact that gets dropped in amongst these green facts which are the right ones. The agent looks in there and it will display that back to you or put it in the email to the customer or whatever it is because it was in the context. So the agent inherently is not going to intentionally lie. It's probably going to grab something and then use that as data. But the problem is the data set was poisoned with an incorrect fact.

**2:36** · Now luckily poisoning is the easiest one to fix because basically it's just a matter of having some verification. So making sure that it fact checks everything with a web search or maybe two web searches or fact checks and cross- checks across your live database or maybe if it's not 100% confident it has to just human in the loop. You know what I mean? So poisoning is the easiest to fix. Now let's take a look at bloat. Bloat is when there's so much stuff. There's just way too much data. And this is what I think a lot of you guys start to feel as you scale up your AIOS's and you start to use them more and more.

**3:07** · Now, this one is tough because as you can see, we all know about context rot as far as the window, but we also know about the idea of needle in the haystack, right? The agent is going to look at the data that it's currently loaded in in order to make some sort of decision. And if it has way too much to look at, then it's going to be really hard for it to actually pull out what's relevant and what's not. And there's just going to be some stuff that bleeds in, and you probably don't want it to. The tough thing about bloat is that it's a little bit harder to fix. But when I talk about expertise versus situational, that's something that's really going to help us out here. So just hold on to that thought for a sec.

**3:38** · So anyways, that's bloat. Then we have confusion. This is where there is something in the database. So it's a little bit like poisoning, a little bit like bloat, but it's basically an irrelevant fact or something is completely missing. This is more of the classic hallucination because it tries to fill in the wrong or missing data with its own, which is I know it sounds very similar to poisoning, but poisoning is more so it grabs a fact that is just inherently wrong and confidently delivers it.

**4:03** · Whereas this one is it gets confused because of the facts that it sees and because of facts that it potentially knows are missing and it just answers instead. And then the last one is a clash. Basically meaning you've got old data or you've got two different data sources that have clashing information.

**4:18** · So it doesn't know which one to choose between. Very simple example. In March your policy was always refund. In June your policy is now to never refund. So when a refund question comes up the agent doesn't know which source to trust. So maybe it will trust the old one. Maybe sometimes it trusts the new one. maybe it just makes something else completely up. Now, this next piece that I wanted to talk about is expertise versus situational context and this is also very important and it relates back directly into these four things.

### Expertise vs Situational Context

**4:41** · So, if you guys remember when you think about the whole idea of your second brain and if you use my framework on building your AOS which is the four C's where we basically split this up into having context, connections, capabilities and cadence and you think of the context and the connections as the second brain piece of your AIOS. I think of context as expertise and I think of connections as situational. So let me break that down so it you know actually makes more sense. So expertise context is the things that you actually need all the time. So you know who are you?

**5:12** · What are your goals? What does your business do?

**5:17** · That's expertise context. The way I like to think about this is an analogy of a principal and a teacher. Pretend they're trying to make a seating chart. The principal knows how classrooms should run. They know where the whiteboard is and where the, you know, the door is and they understand how you should build a good seating chart, but the teacher has the situational context of every student. Which student has bad vision and needs to sit closer? Which two students are loud and if they sit next to each other, they're going to laugh the whole class. The teacher has that situational context that you load in just in time.

**5:45** · So here, the way I think about this is expertise context is the rulebook, right? Your policies, your pre-loaded information that needs to be in every single run. Sort of like the system prompt. Whereas the situational context is things that you need just in time. So for example, let's say you have this AIOS and you're curious about um you know a customer support ticket that came in yesterday. You don't need that customer support ticket to always live in the context. There's just no reason for that. What would that do? Well, that would add in probably a bunch of bloat and confusion, right? Or maybe even some clashing, too.

**6:17** · So, what you do is just in time when you realize you have to answer something about this customer, for example, like Thursday at 2 p.m., then you would go use that live lookup, pull the data in because you need it, and then you'd actually be able to enhance or augment the agent's response because it had real-time situational context. So, hopefully those six different concepts make sense. All of that contributes to this audit that we're currently running right now in my AIOS.

**6:44** · And besides that, it just really helps you think about the way you prompt your agent, you organize your agent, and what you give your agent as far as like here's data you should always have in AIOS and here's data that you only need to grab every once in a while. Real quick guys, a quick message from today's sponsor, Hyper Agent. So, a couple of videos back I showed you the council that I built on Hyper Agent and enough of you guys asked for it that I actually put the whole thing up there for you to just go and grab. So, a quick refresher, Hyper Aagent is built by the Air Table team, and it spins up a real cloud machine for every single agent.

### Sponsor

**7:14** · You get a full browser, a shell, and all the tools to go do actual research. So, I used that to build a council of five agents, each with its own persona. So, for example, this week I dropped a course idea into Slack, and then the council went at it. One played the skeptical buyer, one pulled what competitors already charge, and one stress tested the math. Then they came back to me with a verdict, where it was weak, the cheapest way to test it before I build anything, and a few things I honestly didn't want to hear. Now, you could go build this council yourself, just like I did, but now you don't have to because I published my exact council on the Hyper Agent Marketplace.

**7:45** · So, you can sign up, you can install it, and you can run your own idea through it in just one click. And my link gets you $1,000 in free credits to start, which is down in the description. So, go get your ideas roasted, and let's get back to the video. Okay, so this audit finished up in about 2 minutes. So, let me go to the top and let's just read through this real quick. So, here is the OS audit on um July 22nd. It was my third run today.

### Audit Results & Skill Walkthrough

**8:09** · I was testing it out, making some tweaks, but anyways, the knowledge here is current through June 29th, so almost a full month ago. What we have here is the routing integrity is red. There's an OTAA mis route and upped.

**8:21** · We have index truth also red. Red being bad, green being good. Index says 55 folders, but disk has 79. Index has 52 rows. You can see freshness is a red, bloat duplication is a yellow, hygiene's a red, context placement red. A bunch of problems that we need to solve here with our AIOS. It tells us basically why it found all of this information. And what would wrong answer you today? So any postjune 29th business questions would give me a confident June state answer, which would be wrong. If I asked about how Q3 OTAAS are going, it would misoute and it would give me wrong info.

**8:51** · If I asked what's in the projects, it would give me stale data. So, it's showing me all of these issues that are currently living because it did a full audit of our OS. And then it gives us a fix list which says await approval. But we could say, okay, yeah, let's go do A, B, C, and D right now to get everything back up to date and everything actually working the way that it should be. So, look what it recommends. Finish inflight. So, commit the cleanup decisions. Rename the row scale blah blah blah. Those are all things that we could say, "Yep, Opus 4.8, go ahead and do that." We have routing plus index truth.

**9:23** · So, just fixing some of the stuff. We have data catchup. So ingesting more wiki from my Q&amp;As's and from my meetings and stuff like that.

**9:31** · And then it also suggests durability. So having a weekly cron for fireflies which is you know my meeting transcripts, YouTube polls, archive sweeps, quarterly reruns. So it's helping us constantly build this thing to make it better and better. So that was the actual audit deliverable. Let me real quick show you guys the actual skill. So in mycloud in my skills, if I go to my OS audit and I pull up the skillmd, I can do control shiftv. if you guys are in Visual Studio Code, so we can just preview it a little bit better. We have the skill, the description, and the argument hint.

**9:58** · And basically, I'm not going to read all this, but let's take a look at what I'm telling it. So, OS audit, is your AIOS still true? This is your operating manual. Indexes and wiks are claims about what exists and what's current.

**10:10** · The audit checks every claim against reality. Read only, never fix, or rename or delete. Just give a report of what needs to be changed. And this works on any cloud code project. So, here is why I wanted to tell you guys about those different things. Here it goes through the difference between poisoning, bloat, confusion, and clash. And then it also goes through expertise versus situational context. And then we get into the actual steps that this audit will be running. So step zero is prior report and recent evidence. So look for earlier reports inside of the audit folder. If one doesn't exist, then create that audit folder real quick.

**10:39** · You can see that for a large project of 100 plus folders to fan out one explore sub agent per check below, giving each the checks instructions verbatim plus the project route, and then you merge their reports. So utilizing some sub aents here the bigger that your project gets.

**10:55** · So the very first check is routing integrity. Basically does everything it points to exists. So it will read through the cloudmd the local the agent MD. It'll read through these different routing projects or sorry routing files that are basically a table of contents because it's probably more than just one that you have in here especially if you've added in some things like a karpathy wiki or even multiple karpathy wikis. It will also look in the reverse direction. It will see if there are things that are completely misouted, which sometimes happens, and it will spot check everything. Then it will go to index truth. Do the indexes match the disk. Then it will go to freshness.

**11:25** · Are all the data feeds current? So it will look and see if they are fresh, drifting, frozen, retired, or if they're on demand. And it will go through all of your different connections and understand when do you need to pull things in or, you know, do you only do that when kind of like a situational context presents itself. It will look at memory. it will go into looking for bloat, duplication, organization. So, that's basically how this works. I'm not going to read this entire thing out, but the skill is downloadable for free inside of my free school community. The link for that is down in the description.

**11:55** · Okay, so now that we've seen a quick example and some background context on why I built it like this and why that's important, let's talk about these five hacks. So, this first one is CloudMD as a router. So, a lot of you guys are probably when you're building very specific projects, you're using CloudMD sort of like a system prompt.

### Tip 1

**12:14** · sort of like, hey, here's your background. Here's what you do, blah blah blah. And for the most part, that is correct. But the way that I have my um Herk 2 AIOS set up is I have it all under one massive folder. So, if you see right here, let's just call this one my Herk 2 project. Now, what I have inside of Herk 2 is a bunch of folders.

**12:34** · Literally, just a bunch of folders. And then some of those folders have their own folders inside. And some of those folders have their own folders inside there. And that's how I have mine set up. And the reason I like to do it this way is because I like to just be able to push this main folder to GitHub and everything backs up. So for me, that was the easiest and I like it that way. You don't have to do it, but that's honestly the way that I recommend. That also means I could CD into this directory and this has its own cloudmd and so does this one and so does this one. So that's where I can set more like specific project level sort of system prompts if I want.

**13:04** · But this main cloudmd that I use up here, I treat this almost purely as a router. So let me show you guys that. If I go into my Herk 2 and I go to the cloudMD and I preview this here, what do we see is basically this is routing. So I start off saying, "Yeah, hey, you're Nate Herk's AI operating system. Your job is to help him spend less time in operations, blah blah blah." But here is where you actually go to find data. You know, here's where things live. If you need this, you go here. If you need this, you go here. If you need this, you go here. If you need this, you go here.

**13:32** · All of this is basically just a routing table. And then I get into like the knowledge base. Here's the wiki path.

**13:37** · Here's the hot cache. Here's the index.

**13:38** · Here's the GP fallback. Right? Here's the memory system. Here's this. Here's this. Here's this. Here are the tools.

**13:43** · Here's this and this. You know, there's obviously more than this, but here's where my API keys live. Here's where skills and agents live. Here's where decisions live. Here's templates. Here's references. Here's projects. Here's other worlds. And other worlds are basically massive other repos that all that all have their own individual GitHub repo because I like to keep everything synced, right? And so, as you can see, my cloudmd is essentially just a master routing file, just a master table of context. And so I just wanted to show you guys like the way that I kind of have mine set up with my main folders.

**14:13** · And once again, this isn't the most optimal way and there's probably some ways that I could change this up, but this works for me right now. So in my Herk 2, right, I've got obviously a clamd I've got my cloud with all of my pretty much global skills and global sub aents and my settings here that apply to basically this whole project, unless of course I CD into one of these projects.

**14:34** · But, you know, I've got my brainstorms folder, which is anytime I run a grill me session, it saves it here. I've got the herk brain, which is like my first overall wiki. I've got my other worlds, which are all of my other worlds. These are massive projects that I would consider standalone cla projects. So, maybe if you have clients and stuff, this is where you could put that sort of stuff. And then I've got a folder called projects, which is the largest one.

**14:55** · Every single little time that I spin up a new chat and I start brainstorming about something or I want to create some sort of deliverable, it will save it in here. So, I'll show you guys that in a sec. And then I've also got at the root level something called brand assets where I have like brand guidelines, logos, pictures of me, things like that.

**15:10** · So just to show you guys that in here, I'm on the desktop app this time.

**15:14** · Obviously got, you know, different things. I've got agents, I've got cloud, I've gotcodex. So keep in mind all we're building here is a bunch of files and folders, which means you can plug in Hermes, you can plug in codecs, you can plug in anything else. So just keep that in mind. Right now obviously we're kind of focusing on claude. But either way, here's the brand assets one, right? I've got some fonts, I've got some pictures, I've got, you know, PGs here, stuff like that. If I go to my brainstorms, this is where I have some of my brainstorming sessions from the grill me. I can see I've got some audits, I've got my decision log, I've got other things here. Here's my herb brain wiki.

**15:41** · Here is my other worlds with all of these other projects. And pretty much all of these other projects have their own GitHub reposiated with them. And let's see, here's my projects one. So, this is where it starts to get big, right? Like I said, almost everything that I do inside of this project goes in here. So that's why there's so many things in here. And what you'll notice, guys, is there's also one right here called YouTube videos, which if I open this up, this is also massive because every single one of these videos, obviously, I've got different things.

**16:09** · So, you know, in here, I've got like transcripts, I've got, you know, scripts, I've got tests, I've got, you know, sometimes I run a bunch of um like research and I run a bunch of like Python skills for this kind of stuff. So anyways, the point being there's just so many ways I can drill down in here. This is the way that I currently have mine set up. Obviously, I'm trying to optimize it every day and playing around with different things, but this is the way that I've got it set up with one big projects folder with a lot of my work in there. And then I save other things where it makes sense.

**16:37** · But like I said, it doesn't really matter if you have it super flat, so you've got tons of projects at your root, or it doesn't matter if you have one main one that you drill down everything into. All that matters is that you have the right routing rules in place so that you and your agents can find it. Now, moving on to number two, have AI audit itself. So, just what I did there, as you guys saw with this audit, just do this. I obviously built a skill around this, but what I used to do is like at the end of every week when I made a bunch of changes or the end of every month, I'd be like, "Hey, look through everything.

### Tip 2

**17:08** · Like, open up every file, look through my routing rules, and just make sure that everything's still accurate. Make sure that this all makes sense. And you know what? If you don't like how this is set up based on your best practices or based on the way that I talk to you every day, then suggest some changes and let's just, you know, keep iterating and keep scaling this thing up because I know I add a lot of data to you every single week. And right now, you guys probably know that I have a few different capacity wikis. I've got my two main ones, right? I've got my main one for my YouTube transcripts and I've got my main one for my meeting transcripts. And I originally had all of that in one master wiki.

**17:39** · And then it was actually cloud code that suggested, hey, you know, I've noticed that you're putting in these two specific types of, you know, meeting transcripts or specific types of data every single week, like on a specific cadence. You might as well just split those up so that it makes it easier for me to search through data. So, I'm getting less of that, you know, what do we call it? I'm getting less of that bloat. I'm getting less of that confusion. And I'm able to answer you not only quicker and more accurately, but also cheaper because I'm not spending so many tokens, so many of your tokens looking through everything.

**18:09** · So yes, I've made sort of a more formal audit process with that skill that you guys can check out, but you can also just have a conversation, right? I think a really important mindset shift is to realize that everyone's building their own second brains. Everyone's doing a little bit differently and there's not a right way. There's the only way that you're doing this wrong is if you're constantly getting wrong answers and you're not doing anything about it. But besides that, like don't get so stressed out about, oh, you know, I saw Nate do it this way or I saw this other YouTuber do it this way. Just do it however it works for you.

**18:37** · I think a really good test is could you pull up your file explorer, you know, could you pull up your file explorer right here? Could you find like think of something that you did and see if you could find it without searching, without asking Claude, see if you could find it. And if you can follow your different folders and you can find the path yourself, then it's probably set up pretty intuitively where an agent could also do so, especially if it had some routing rules in place. So, I'm constantly making deliverables in here and then I'm just finding them manually because I want to make sure that this is still intuitive to me and that I actually understand my own second brain, my own AIOS.

**19:07** · Okay, moving on to number three. Build automations to update data.

### Tip 3

**19:12** · If you guys remember here, right here in the audit, it said durability weekly cron for these different things. What you'll notice is as you start to use this thing more and more, you're probably going to be telling it frequently, hey, can you go pull that data or hey, can you go do this? And you might realize that this isn't sort of like a just in time sort of situational context thing. Like for my wiki, every single Monday I have a Q&amp;A, I want that in there. Every single Tuesday when I meet with my leadership team, I want that in there.

**19:38** · So why not just set up crrons to automatically pull that stuff in there so that if I for some reason forget to after one of my meetings, I don't have to worry about it. And next time I go talk to my agent, it will already be there. And I know that sounds simple, but it's something that I've noticed a lot of people aren't doing. So definitely set up some sort of crons to pull in the data that you want to always be living inside of your local project.

**20:01** · As you guys know, that's super simple.

**20:02** · All you need is basically the API key and you can say, "Hey, you know what, Claude, go do this for me. Set up this cron, set up this routine or help me push this, you know, script onto modal or whatever it is." You can set that up really easily with natural language.

### Tip 4

**20:15** · Number four is to segment knowledge. So as you guys know, I have two different wikis. I've got my YouTube one, I've got my U meeting transcript one, and I segmented them because they were both starting to grow, and I planned to keep growing those and growing those. So, the more you can segment stuff out, the better.

**20:31** · If you find yourself having little like nodes of knowledge that are going to keep growing that are very distinct and different, then it's so much easier to split those up because now your agent knows, okay, if I have to find something related to, you know, um, Apify for some reason, let me check if Nate's ever made a video about that. and I know exactly to go to his YouTube video transcripts wiki rather than having to search through potentially five or 10x more files in order to find what I'm looking for. So, it's just about how can you narrow the actual context that your agent is going to be looking through?

**21:02** · And a very common question I get around this whole segmenting knowledge idea is where do client projects go and like should I put everything under one folder? And the way that I answer this question is basically that if I was working with a bunch of different clients, I would 100% keep information internally inside of my AIOS and I would segment that by client. So I'd probably have one folder in here.

**21:24** · I'd have one folder here called like, you know, clients. And then I'd have client A, client B, client C. And then in there I'd have different files that refer to what I'm working on with this client. But the caveat here is if I was working on something like a very specific deliverable for this client, I would probably build that out over here because this would maybe be like my client-f facing you know um repo and what I do is I would say okay in here this is where it lives right this lives in my it's typing in a different color.

**21:56** · This lives in my C users you know Nate H whatever inside of a folder called client A. But what I'd have in here would be the internal knowledge like, hey, you know, we started working with this client on June 22nd. He signed the contract on June 25th. This was our project price. Here are the, you know, discovery calls. Here are the here's the scope of work. But here is where I'd have the external stuff, which would be like the actual deliverables that I'd be giving this client so that I could, you know, potentially have him be a collaborator on this repo or I could, you know, push this to a certain environment, whatever it is.

**22:24** · I would keep it segmented a little bit away from my actual internal AIOS, but I would 100% still be giving my AIOS context of this because it still needs to know about this engagement. It just maybe doesn't need to own all of the stuff inside of it when I'm pushing my whole repo, things like that. So, it's very situational and hopefully this is, you know, hopefully you understand like that there's no right or wrong way to do it.

**22:47** · There's just wrong answers that you can get and that's wrong. And then what I have here for number five is to backtrack. I've I've obviously stressed the importance of like when you realize something is wrong, when you realize it searched for five minutes for something it should have found instantly or it searched and said, "Hey, I don't have access to that, but you know it's in there." You have to correct it, right?

### Tip 5

**23:06** · You say, "Hey, you know, you actually have access to that, so please make sure that never happens again. Make sure you're checking things first." But more importantly, have it backtrack. I found a lot of success in that when I say, "You know what? You told me you didn't have access to this, but I know you do."

**23:19** · So, go look through what you did, where you searched, and help me figure out why you didn't find that data right away.

**23:27** · And then once it does that, it says, "You know what? I made a mistake. I'm sorry about that. This is what I did.

**23:31** · This is where I should have looked, and I would have gotten that much faster."

**23:33** · Now that you've had it prove its own mistake and tell you what it did wrong and how to fix it, then just have it fix it. Have it update the routing. Have it maybe even move stuff or reorganize stuff based on what it found when it was backtracking. And that works a lot better than just saying, "Make no mistakes. Don't let that happen again.

### Team Syncing & Final Thoughts

**23:49** · So anyways, I know that second brains and AI operating systems very very hot topic right now and as they should be and a big problem that we're looking at we're talking to businesses about that obviously I know every business is having is once people start building their own second brains and their own AI operating systems how do you sync all the data together at the team level at the department level and that's something that I'm looking into very actively and playing around with. I don't have a great answer for you guys right now besides the fact that I don't think it's a tech problem. I think it's a people problem. I think that you could do this with Google Drive, with Notion, with GitHub.

**24:21** · I think the problem is having people habit shift to syncing data, knowing what to pull in, making their agents read stuff, permissioning.

**24:29** · I think it's a people and a habit problem that we need to figure out before we start pushing like, hey, this is the right way to do it. So, anyways, like I said, looking into it. I'll definitely be bringing more content on YouTube as we start to, you know, figure this out a little bit more. But that's something to be aware of. But I do think that the best thing you can be doing right now is mastering and understanding your own systems so that when you do start to bring this to a team level, it's a bit easier because you've already walked the walk. So, that is going to do it for today. I hope you guys enjoyed this one and if you learned something new, please give it a like. It helps me out a ton.

**24:58** · And as always, I appreciate you guys making it to end of the video and I'll see you on the next one. Thanks guys.