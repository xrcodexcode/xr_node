---
title: "Learn 99% Claude & Codex in 25 mins: Context / Harness / Loop Engineering!!"
source: "https://www.youtube.com/watch?v=E0o8JFQf2o0"
creater: "[[Singh in USA]]"
published: 2026-06-23
created: 2026-07-14
description: "Checkout CodeRabbit & make your codebase secure and catch bugs faster: https://coderabbit.link/singhinusaFollow my builder journey - https://x.com/iHarnoorSingh📕 Only book Software Developers nee"
tags:
  - "Yt"
---
# Learn 99% Claude & Codex in 25 mins: Context / Harness / Loop Engineering!!
Source: [YT](https://www.youtube.com/watch?v=E0o8JFQf2o0)
![](https://www.youtube.com/watch?v=E0o8JFQf2o0)

Checkout CodeRabbit & make your codebase secure and catch bugs faster: https://coderabbit.link/singhinusa  
  
Follow my builder journey - https://x.com/iHarnoorSingh  
  
📕 Only book Software Developers need for Interviews: https://geni.us/EJHuJ  
🤝 My Socials & Gear & Recommendations: https://singhinusa.com  
💰 Sponsor Me: https://singhinusa.link  
  
E-mail for BUSINESS INQUIRY & HELP- hello@singhinusa.com

## Transcript

**0:00** · Most people think Claude Code Codex is only for engineers and that is true.

**0:04** · After I read the Reddit post, I figured out that a product manager, a non-tech person, pushed code and that messed up everything. That product manager literally messed up the logging system when you actually figure out where the bugs are happening.

**0:20** · \[music\] It did not even check the project ID and pushed things to wrong project ID because even if you're using Claude Code on a desktop, you have to make sure things are went to the right direction.

**0:29** · That's why today we want to make Claude Code and Codex as simple for everyone watching, for techies and non-techies because right now we are going through phases of number one, context engineering. We figured out context engineering where it was basically prompts, then we moved to harness engineering, basically figuring out your agent. And number three, now we are figuring out loop engineering which became popular after Boris Cherny.

**0:52** · Now what's actually bubbled up, I think again, to the next level of abstraction where I don't prompt Claude anymore. I have loops that are running. They're the ones that are prompting Claude and figuring out what to do.

**1:02** · In 2024, late like December 2024, during the winter break, Opus 4.5 came out and that's where, you know, the true harness journey started because Claude Code was around but not a lot of people were using it. But once the model became really powerful, it became a very strong harness. And since December 2025, I have not written a single line of code at work, so I'm an engineer at Big Tech for reference, or during personal projects.

**1:25** · Wow.

**1:26** · And I have done so many more personal projects after Opus dropped um than before. So I think Opus 4.5 is when harness engineering really started. So that was about six and a half months ago. Uh and now we're sort of seeing the transition to the loop engineering. And Boris Cherny of Anthropic, who's like very popular, uh he mentioned on one of the podcasts that now all he does is run loops. So he just tells the agent what to do and the agents will like spin up a bunch of sub-agents and just act as an orchestrator of those agents or harnesses.

**1:54** · First of all, let me show you the magic you can create if you know context engineering and harness engineering and even loop engineering very well. So, I'm going to start with one of the projects I created was called this research paper breakdown. So, if you Google algorithmic monoculture research paper, I'm going to just show you. Monoculture it's like one of the one of the famous research paper from Stanford. It's about who has more chances to get a job. It's very text heavy. Like it's like basically a PDF.

**2:19** · You can click on GitHub or like it is a very it is like you can see in code form, blog form. It's very text heavy. Now that the magic of context and harness engineering, AI is not just throwing stuff at you. Video, audio, text, but now you can interact with it. So, this is one of the website I made. It's with lot of context engineering.

**2:38** · You can actually like put a research paper. You can have a video here. You put you you this is like how job applications work. Like this is the number of applicants applying left to right dots black dots and green dots accepted, red dots rejected. But this doesn't tell much. This is an introduction. If you want to learn it like to the fullest, you can even learn per position view. If you are white, look at the number of red dots. That means number of chances of you not being considered for the job. If you're Hispanic, it increases. If you're black, it increases a lot. If you're Asian, it decreases.

**3:09** · So, if you are Asian or black, you have kind of a disadvantage in the job market of the US. And this is a research. And this research paper even breakdowns some something else. How many job applications you need to apply. So, I understood it fullest because I engineered it well. So, for example, if you apply for one job, you have 76% chance no one would even look at your application. If you increase it to 10, 6.6.3% chance no one would look at it.

**3:36** · Not until you apply for 20 jobs a day, then you have a positive. It became green. That's when you have a positive chance. So, the paper was concluding that you should apply for at least like how many? 26 jobs a day, then it becomes positive. Like red to green. Then someone will actually look at your application. So, this is the layer you are not learning by reading. You're like interacting, sliding, clicking buttons.

**4:00** · And that's why I am going to introduce start with Claude Workspace. There are a lot of things then when we going to start with first of all context engineering because when you open Claude Workspace there are two ways. I have also my terminal which I interact with. I can I have an alias. So, if I just type CC in any folder, it runs Claude with bypass ask permissions. Or you can go to Claude window. Here you can say bypass permission. This is the fifth mode.

**4:24** · So, why I use the fifth mode not plan mode not auto mode not like any other mode ask permission because when you use number one you have to always say yes. Hey, you're okay to edit this file. It's like very repetitive. It loses the purpose. Most engineers trust Claude that they literally like either use auto mode which is little bit less dangerous than bypass all permissions. So, I'm going to click bypass all permissions.

**4:49** · Now it's going to never ask for approval. It's going to straight build it. So, let's say if you pass this paper attention is all you need one of the most popular one. You paste it. You say make it interactive HTML. And now with loop engineering you can say slash goal that keep running keep running till it's interactive in every understanding every topic that I need to understand.

**5:20** · This is how you can make it possible for this research paper. It'll continue to work. And you can do with Claude Code or Claude Co-work. Claude Code is more powerful than Claude Co-work. Now in today's era, it doesn't matter it doesn't matter you use terminal or you use like this Claude application. You have similar features. Similarly, if you use CodeX, I can show you as well. CodeX is so powerful. It's bit cheaper. So, now you can just go full access. And here an important distinction everyone needs to know is the difference between ChatGPT versus Codex on your computer.

**5:54** · Claude on the website versus Claude Code on your computer. The difference is that if you drag 100 PDFs on Claude or ChatGPT, it will not process it. But, if you're using Claude Code or Codex, you can give it 100 PDFs and Claude Code figures out while those files are locally there. So, that's the biggest advantage. Your entire computer can be accessed with Claude Code and Codex. And it comes with danger as well that you should not allow Claude Code to push your personal data without permission.

**6:29** · And that is one of the reason code reviews are important. Whenever I code, I ask Claude Code to create a PR. PR is pull request on GitHub. And if you remember, Claude Code got leaked couple months ago. And if they had the similar guardrails, it would have never leaked either. To make sure you can actually configure Code Rabbit. And Code Rabbit is one of my favorite code reviewer tool. Why? Because Code Rabbit allows you to not just get PR comments on the pull request itself.

**6:59** · So, on this review before it goes to production, you can get comments. It as It has helped me figure out multiple bugs that Claude and Codex actually cause because you don't want the same model that reviewed code. Just like when we code when I worked at Microsoft, you don't want the same engineer who wrote code review as well. Similarly, we don't want the same model that wrote code review the code as well.

**7:25** · And when you are having a code reviewer, you can have multiple guardrails such as making sure API keys are not leaked, making sure unnecessary bugs are not caused. Because Code Rabbit is already used by 100,000 plus open source repos.

**7:39** · It has helped me prevent multiple bugs on my projects as well. And now they have a CLI as well. So, next time when you're running a loop with Claude or Codex, what you can do is with CLI, which is the interface, CodeRabbit will give you feedback of your code and Claude will immediately in the loop fix that feedback and this will be a loop fixing itself. You don't even need to leave your CLI. You don't need to leave the chat window with Codex or Claude code. It'll automatically get fixed and the best code will be pushed out to production.

**8:10** · So, check out CodeRabbit by going to singleguyusa.link/coderabbit or check out the link in the description below. While Claude is running, I'm going to now introduce the next phase of context engineering that is very important for everyone because I want like this video to reach everyone. Like I gave an example of this Reddit post that like if engineer are given Claude code versus a PM is given Claude code, engineers taking more responsibly, they read every single file, they re- make sure the project ID is correct, they don't push random stuff to production.

**8:40** · So, that's why I want the understanding of Claude code to reach more people that you can be trusted.

**8:48** · Okay, that's why I'm going to go to the next phase of context engineering that is actually connectors, MCP, Gmail apps, all that. What is that? So, if you go to Claude window while this project is literally running, you can actually go to right here plus and then connectors and then here you can have a bunch of apps. I have a lot of connectors I use. For example, there is Excalidraw, there's Gmail, there's Google Calendar, Google Drive, Appify for jobs, Claude in Chrome, you can control Chrome Chrome window. There's linear, there's so much going on.

**9:18** · I'm going to first of all visualize what's possible and then we're going to break it one by one by one. So, first of all, I'm going to show you the Excalidraw connector because I am connected with Excalidraw. Last time I was asking it just just Claude to draw harness versus context engineering. I didn't even draw it. It made it. Okay, number two thing I'm going to show is this dashboard.

**9:37** · This dashboard is not made by me, it's made by Claude and Claude with computer use. If I go back to the application, if you select Claude in Chrome, you can literally while building the app, you can say build this dashboard. It'll make the dashboard as well. I remember when I was in Microsoft, I was making this dashboard query by query. Like every dashboard had would have a query select star from XYZ. You have to figure out the table. I cannot do that. This dashboard So, code plus dashboard plus visuals.

**10:08** · I'm going to give another example. I'm going to show you right now the video I created as well. This is Hyperframe Studio. This if you connect with Hyperframes connector, you play the video. This is a fake Claude's window absolutely built with Claude and I I use Cursor for it because Cursor was cheaper for me. But yeah, you can show people that you're applying for jobs with Claude a fake Claude window in one shot with Hyperframes connector.

**10:36** · This is the power of connector you definitely need to use. So, this with number two we're covering connectors. You can go to Claude, learn the connectors you have, and I have made some of the connectors public on my personal website called skillmake.xyz.

**10:52** · All the connectors I use in terms of for creators, engineers, all of them are there. So, for example, if you want to see Hyperframes in creators, you will search for Hyperframes, it's right there. This is the skill I use, and you can go to Hyperframes website. Just like you don't even go go go there. You just install Hyperframes, like copy this code, copy this, put it in your Claude window, and say using using Hyperframes make fake Claude screen, and it'll do it. It'll make the screen you want. So, this is the power of right connector, right skills.

**11:22** · So, we covered connectors and skills because skills are very important, and I have made so many skills public for you in terms of engineers, DevOps, design, security, all the industries you can get. Even for PMs I've made a lot of skills public and you can find Google as well as I find better skills which are verified because I have a GitHub proof as well. So this skill has 45k stars on GitHub.

**11:45** · So only install trusted skills and there is also a security section I have that allows you to actually in security there is a Nvidia security skill inspector which checks there is no prompt injection or something wrong going with the skill. So you should definitely use skill inspector for it. Usually when I'm coding I want to I want you to know what files to keep track of. So let's say this is skill it project.

**12:12** · I'm going to do uh I'm going to zoom in first of all. I'm going to do ls. You will see ls star.md. If you just do this you will see a lot of md files such as agents.md, cloud.md, design.md, plan.md, readme.md, todos.md. This is how agents remember what is pending. So if you always want to edit that agent is not going haywire, you should actually look at these files. I mean not everyone does it. They just chat with it. But if you want to be a real engineer, you need to look at them. For example, if you want to see what skills are installed on a project level.

**12:43** · So So I showed you that you can have connectors and if when you do slash you can have bunch of skills, right? These are all the skills I have. And if you want a skill on a project level, you can always edit agents.md. So cat agents.md. Here you will see all the skills that are installed on a project level.

**13:01** · And these are all the Gary Tan skills I have installed and I'm such as like office hours, plan see you review, plan design review. I use it often and these default to a pull request that gets reviewed by Claude Rabbit. And with loop engineering, this Claude keeps running.

**13:16** · Claude Rabbit reviews the code. Claude fixes it and goes back and forth and code becomes the best version of itself till it goes to production. That's the loop I run usually. So I say "CC, let's open Cloud Code here {slash} goal until Code Rabbit review finishes.

**13:36** · Keep fixing." You know, something like this loop you can run. Of course, it takes a lot of tokens, so that's why Code Rabbit on pull request is also good enough. So, now so far we could covered skills, we covered connectors, and next I'm going to talk about memory a little bit and compaction. So, there is something called compact {slash} compact in Cloud Code that actually compresses the context so that your Cloud is not using a lot of context. So, compaction at the right time is important. There's also one more thing you need to learn here is fork.

**14:05** · So, a lot of times what happens is, let's say you finished this website. By the way, Attention Is All You Need paper is ready. By the way, the project we built is ready, and cool part is you can go to Attention and click on buttons and learn it. I'm not going to explain the paper here, but the idea is you can interact and learn better. Of course, this website can be better, you can engineer it better, you can get more examples like the one I showed you, but this is really good. By the way, the last website I built with Fable, Fable is gone, that's why it's not as intelligent. You can slide through, learn better what's going on, and of course, it it'll help you learn better.

**14:37** · So, this is the interactive phase. Even Amde Garba talks about building interactive websites to learn better. Now, here the next phase of context engineering is you can fork it. {slash} fork. What does this mean? Fork is a term like GitHub had fork term as well. Let's say you finished a website, you want to have two tangents. Fourth you can do is, let's make it beautiful using Gary Tan design review.

**15:03** · I'm going to say it design review. So, this fork will create a different agent.

**15:08** · If you see, fork created a different agent, and on this agent I can do something else. So, it's we're creating a tangent. We're dividing two parts, and this first tangent I can say, "Do engineering review." So, let's do security review or like CEO review. So, plan CEO review here. So, with the same product ready, two windows got open and you tangent it in two ways. One is CEO review, one is design review. Of course, this is very powerful. You can one side make design better, one side you can make the engineering part of the website better.

**15:39** · So, both are going parallel. This is how you can run parallel agents. Another cool thing you can do is you can say fan out sub agents and solve a bug. So, you know, let's assume you're solving a bug and this way it it'll burn more tokens for sure, but create multiple sub agent as many Claude needs. Another thing you can do is you can go to slash effort.

**16:05** · I think effort is not there. Another thing you can do is if you use the terminal window, you can go slash effort and go to ultra code mode, which is the something they introduced. And in this you can have hundreds of agents. You can literally say workflow create hundreds of agents to solve a problem. A lot. There's multiple ways to burn tokens, but I usually what I do is I go to effort, keep it medium. Now, let's touch upon memory. Memory, if you just Google, it's in dot Claude Claude projects project name memory folder.

**16:35** · So, Claude learns about you and creates a memory directory. So, you can open it. So, I can just I don't even need to figure it out. I can just say go see and then go to Claude terminal take me to my Claude memory location. Or give me path.

**16:54** · I can just chat with it. So, a lot of people like struggle with this information after agents are here. So, that's why I'm going to show just by chatting with agents, it'll tell me the path of my memory. And for this project, this is the path. You can go to new tab. You can say open and it'll open in a finder. This memory folder is opened. So, it's in finder. Now, you can in fact open it.

**17:19** · So, for example, I'm going to first of all zoom in for you all. There's my audience rollout domain memory.md and I can literally open my memory. Let's open with, let's say, text edit.

**17:30** · Uh text edit. I'm going to open with that text editor. This is very lightweight. And here, you can see what Claude remembers about my memory. So, this memory says that I usually push to Cloudflare. I don't Uh I usually use Cloudflare default for this project. So, whenever it says ship, it will use Cloudflare by default. It remembers it.

**17:52** · Number two, it remembers what skills I use, what agent rules I use. I use nano banana for images. It has the API there. So, it remembers a lot of things about you. If you want to edit, you can ask Claude code add this to memory. So, next time it remembers. So, this comes in context engineering as well. Now, finally, let's, my friends, move to harness engineering. So, harness engineering is very interesting.

**18:16** · I want to To explain harness engineering, I'm going to go to cursor and explain something called auto mode. If you have seen auto mode, auto mode basically means instead of choosing models, you can just say auto mode. The cursor window figures out what model to use. If it's a complex If a query is complex, simple, straightforward, whether use a small model, big model. Lot of time, if you like use Opus for all the requirements, it's going to burn more tokens. To save it, that's why cursor created auto mode. On Claude, if you see, it You won't see it.

**18:45** · So, for example, if I say the models, uh let's go to Sonnet. You will see only 4.8 Fable, Sonnet, and Haiku. If you go to more models, that's it. You don't have auto mode on Claude window. In Claude code, you can somehow figure it out. That is where harness engineering comes.

**19:03** · So, harness engineering can be done in the form of hooks. So, hooks are something that, let's say, before this code runs, you will have a if condition that if model will figure out. You will direct the code to Sonnet or like Haiku. Haiku figures out if this problem is difficult, then direct it to Opus. If it's simple or straightforward, Sonnet.

**19:24** · If it's very simple, then Haiku. That's where harness engineering comes and that's why I want to introduce you to another agent called pi.dev. Don't worry about it. It's very straightforward.

**19:34** · This was created because of harness engineering. They wanted We don't want to maintain hooks. Hooks I told you, right? Hooks are the way that you can have an if condition before you say anything to Claude code, it'll go through an if condition which model to use or you can have an if condition what bash processes you want to run or you can have an if condition what automation you want to do. You can do post hook.

**19:54** · That means whenever Claude code is is done, you can automate that it should just ship to production default. So, a lot of automations you can do, but they're done through hooks in Claude code. And someone was like, "We want to create pi.dev. This is a pi harness."

**20:06** · And you know what this does? Instead of writing hooks, it learns from you and automatically updates the harness itself. Basically, it updates the code of Claude code. Let's say if you learning through coding through Claude code, you cannot change the source code of Claude code, right? But pi.dev is different. It updates its own source code. That's why pi.dev became so special and that that redefined harness engineering for all of us. A lot of people use pi.dev for open source models because this this learns itself and you can use it with Claude models as well.

**20:37** · But of course, most people use Claude code because it unlocks the power of Opus and Sonnet model better than any other harness. And same for Codex because Codex unlocks Chat GPT's models better. That's why people use those. But if you're using open source models, I will recommend trying out pi.dev and definitely see the magic it creates. It learns itself. So, this is important part of harness engineering and there's another part of harness engineering I want to touch upon that it has tool calling as well. So, what are tool calling? They They're very similar to connectors I showed you.

**21:09** · Tool calling is the idea that if you have multiple MCPs, and MCPs as in like I in my Claude project have MCP to Cloudflare, Vercel, and you know, there was a study done by Cloudflare code mode. I want to introduce you to code mode, that's very important. If you don't know, you should read about it. It's official.

**21:30** · So, there was a study if you have 2,500 connectors, let's say you have connected with Cloudflare, Vercel, Excalidraw, your Gmail, \[clears throat\] your context window is your Claude is wasting 1 million tokens. So, this study proved that you're wasting 1 million tokens. And if you use Claude If you use Cloudflare's code mode, in one call, it was wasting 50 tools equals to 40,000 tokens before code mode.

**21:56** · And if you have 2,500 tools, I'm going to write down and explain 2,500 tools. That means almost 1 million tokens wasted because you waste tokens figuring out which connector to use, which plugin to use, which skills to use. That's why Cloudflare created code mode. In one layer, if you have a lot of connectors, you can in one layer 99% tokens saved. The code mode figures out which connector to connect to, and it directs you that connector.

**22:25** · Let's say it needs to connect to sometimes Gmail, Outlook, like a lot of similar connectors. Code mode figures out, saves tokens. That's why this was invented, and it consumes, let me fix this. This is created by Claude. It saves and consumes 81% less tokens, and very powerful. So, you should You should definitely try it out and learn about it. That comes in harness engineering as well. More about harness engineering I'm going to introduce you to. That is loop engineering. I showed you loop as well.

**22:56** · Loop, you basically go to code X Claude code. I'm going to show all of them. You You do {slash} goal here. That is goal, and goal comes here. In Claude code, you can do {slash} goal as well. And in cursor, it's called loop. {slash} loop and it'll keep running until it's done.

**23:16** · Very powerful. You don't have to You can You can just design loops. And by That's why Matthew Berman, he created a website called uh forward uh loop.

**23:31** · That's why Matthew Berman, one of the creators, he created a loop library of how to create loops in not prompts, loops. Because a lot of popular folks are saying prompts are dead, but they're only dead for people with unlimited tokens. If you have a lot of tokens, you can definitely like create loops and keep on running the tokens hundreds of times till a project is done. But this is only for people who have unlimited money, unlimited tokens. But for normal folks, loop are not the right way. It's about engineering, saving tokens. That's why there's another skill I want to introduce in engineering in the budget category of Skill Make.

**24:03** · If you go to budget in skillmake.xyz, there are a lot of ways you can save. Like there's headroom, there is caveman. So caveman, what it does is it it it's a skill that reduces the BS coming from Claude code.

**24:15** · It only replies in one word. So it consumes less tokens. So caveman is a way, headroom is a way, Claude code router. Someone created a router that goes to open router token. So open router is by the way a routing platform.

**24:28** · And they've raised billions of dollars by the way. It figures out which It doesn't figure out. You have to figure out which model, but in one API call, it routes to DeepSeek, Opus, etc. So you can write an if condition, if problem is complex, you can use open router to direct to Fable, GPT-5, or open-source models. That's why open router is big. So someone created Claude code router.

**24:49** · Using Claude code, if you connect with open router API, it will route to the right problem based on what problem is hard.

**24:56** · So you can engineer it. So and there is goal as well. So, a lot of ways to actually save tokens in the budget category. And in terms of productivity, my favorite skills are Excalidraw, which I showed you, HTML everything. By default, I make interactive HTML for whatever I want to learn because we're not it's not one-way communication, it's two ways. And most importantly, I use Code Rabbit in the end to get my code review. So, don't forget to check out Code Rabbit and create loops with Code Rabbit so your code is reviewed from a different perspective.

**25:25** · And I can can can vouch enough because it has helped me catch so many bugs produced by Cloud Code and Codex. And definitely check it out with the link in the description below. And thank you so much for watching. I hope you learn at least one thing new from this video.