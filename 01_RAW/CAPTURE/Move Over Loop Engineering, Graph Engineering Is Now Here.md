---
title: "Move Over Loop Engineering, Graph Engineering Is Now Here"
source: "https://www.youtube.com/watch?v=Joqh7Tui9B8"
creater: "[[Chase AI]]"
published: 2026-07-22
created: 2026-07-26
description: "⚡Master Claude Code, Build Your Agency, Land Your First Client⚡https://www.skool.com/chase-ai🔥FREE community🔥 https://www.skool.com/chase-ai-community💻 Need custom work? Book a consult 💻htt"
tags:
  - "Yt"
---
# Move Over Loop Engineering, Graph Engineering Is Now Here
Source: [YT](https://www.youtube.com/watch?v=Joqh7Tui9B8)
![](https://www.youtube.com/watch?v=Joqh7Tui9B8)

⚡Master Claude Code, Build Your Agency, Land Your First Client⚡  
https://www.skool.com/chase-ai  
  
🔥FREE community🔥  
https://www.skool.com/chase-ai-community  
  
💻 Need custom work? Book a consult 💻  
https://chaseai.io  
  
Is the loop engineering era already over?  
  
Graph engineering is the latest AI buzzword and in this video I break down what it is, how it works, and if you should even care (you should).  
  
  
⏰TIMESTAMPS:  
0:00 - Intro  
0:38 - Loops vs Graphs  
3:41 - Graph Engineering  
6:53 - Use Cases  
9:51 - Outro  
  
RESOURCES FROM THIS VIDEO:  
➡️ Master Claude Code: https://www.skool.com/chase-ai  
➡️ My Website: https://www.chaseai.io  
  
#claudecode

## Transcript

### Intro

**0:00** · So, last month it was loop engineering and before that it was context engineering and today's new hotness is graph engineering. But, is this something you need to actually understand or is this just the AI hype train doing its thing and slapping a fancy title on a nonsense topic? Well, this video we are going to answer that question and spoiler alert, this is not a nonsense topic.

**0:21** · Now, graph engineering isn't something that's going to apply to every single little thing you build, but it's a concept you are going to want to understand, especially if you're someone who uses complex loops. So, if that sounds like you or it's going to be you in the near future, you're going to want to stick around. So, graph engineering is really just an extension or an evolution of loop engineering. So, very quickly we're going to go over what loop engineering actually is so we're all on the same page. Now, all loops really have three sections to them. Number one is the trigger.

### Loops vs Graphs

**0:52** · How does this thing actually start? Ideally, this is autonomous, it runs every day at a certain time or it's event-based.

**1:00** · Step two is the task. What is it it's actually doing? And then step three, we need some sort of success criteria. So, we're telling it to do something, how did we know if it actually did it correctly? Because if it didn't do it correctly, I want it to run again from the beginning. And ideally, all of its runs and data is stored somewhere so we can even add some sort of like self-improvement aspect to it. But, at bare bones, we need a trigger, it needs to do something, and then we need to be able to like test it to see if it works, and that should be all automatic.

**1:30** · Now, for our example right here, we have a loop that generates a morning report every day for us. So, we have this AI agent, it runs every day at 7:00 a.m.

**1:41** · That's our trigger. Its task is to look at a bunch of different social media platforms, YouTube, Twitter, and Reddit to find information about AI for us, what's trending, and I want it to check my email.

**1:53** · Once it does all that, I want it to consolidate the information and generate a report for me. That is the task. Now, success in this case is a little bit murky. How do we define that report was done correctly? Well, in this case, we have told our loop that, "Hey, the report needs information about this sort of stuff. Needs to be this length.

**2:11** · It needs to include links." So, we've given it some sort of criteria to measure against. So, that is our loop.

**2:19** · Easy enough. It's executed by a single agent. Now, how would we turn this into a graph? How would we go from loop engineering to graph engineering with this same exact task in mind? I still want a warning report completed every single day. Let's take a look.

**2:33** · Because over here on the right is the graph engineered version of that same task. We're trying to get the same report. However, we have increased the amount of agents doing things.

**2:43** · Specifically, we've gone from one agent doing everything to a number of agents doing specific tasks that are also connected to one another. So, we still have the same trigger, you know, every morning at 7:00 this is going to run, but we now have one agent that's looking at YouTube. We have one agent that's looking at Twitter, one at Reddit, and one doing the email, so on and so forth.

**3:05** · Each of these agents is going to get the required information. It's going to synthesize that information on its own, and then it is going to send their synthesis to the report agent, which then collects all that data, further synthesizes it into the report we want.

**3:23** · We could even take this in step further and say we also have a review agent that is going to be the one that takes a look on its own at the generated report, compares it to what we defined as a successful report, and decides, "Do we need to loop through all this again, or can we go ahead and push it to production?" And that is graph engineering in a nutshell. So, let's sort of break that down cuz you're probably like, "Uh, all we did was add a bunch of agents. I don't actually understand what happened." Well, yes, we did add some more agents and there is a reason for that.

### Graph Engineering

**3:55** · The reason graph engineering is a little more complicated isn't because we just want to make things more complicated, it's because we have now taken every single task and we've essentially turned it into an agent that's running its own version of loop engineering.

**4:11** · So before, what do we have? We have loop engineering, right? It's doing all these things, it's checking success criteria, but it was doing that at a very high-level thing and it was doing a bunch of different things at once.

**4:20** · Instead, what we've done with graph engineering is we have zoomed in to one specific task and we now have this guy with just his YouTube analysis and YouTube research, we've turned that into a loop engineered construct as well. Because think about it, while it's reduced to one task, it's still loop engineering. We have a trigger, right? It's still going to be 7:00 a.m.

**4:41** · We have a task. He still needs to find information on YouTube about AI and he still needs to synthesize it. And then three, we still have success criteria.

**4:50** · But because we've turned this into a graph engineered thing, we can get very specific about what success looks like on every step of the journey. So for us, that might be, "Hey, I need you to get at least five sources." And hey, I need that synthesis to at least be two paragraphs long. Or hey, for every single source and every single bit of information you find, I need you to tell me a so what.

**5:13** · Right? So instead of the verification process being like very high-level and trying to cram all of these things into like one sort of, "Hey, this worked.

**5:22** · Hey, this didn't." We've broken it down into discrete sections. And why should you care about that? Well, for one, it's going to increase the quality.

**5:32** · Because instead of having one agent do everything, I instead have one agent doing one thing. And strictly from a context raw point of view and the fact that it's context windows going to be relatively clear versus this guy over here trying to do 10 things at once, it means we're going to get a better output.

**5:47** · Further, it's going to be quicker.

**5:51** · Because instead of one agent doing 10 things, I have four agents in parallel doing four things.

**5:57** · So, it's quicker.

**5:58** · It's more effective, and it's easier to tell when something is failing because I can tell very quickly if this is a YouTube problem versus a Reddit problem.

**6:06** · It's a little harder here to sometimes filter the signal for the noise where it's like, all right, where along the path did we screw up where we didn't like the report and we had to send it back for revision. And again, that's because success criteria can be defined on every single subtask. So, that is kind of what graph engineering is and why you should care. We don't just have one agent, we have a series of agents.

**6:31** · These agents are connected in a number of different ways. We've broken down their tasks individually, sort of an atomic manner, and because it's like an atomic task, we can be very specific with each task in terms of what we want it to do, what success looks like. And again, each of these agents is now essentially their own like loop engineered construct. We've just connected a bunch of loops. So, the next question at this point should be, well, when do I need to use graph engineering versus loop engineering? Because, let's be honest, you don't always need to create some super complicated multi-agent setup like this.

### Use Cases

**7:02** · You just don't. Oftentimes, doing a simple loop is more than enough. But, there are three cases where you are going to want to consider a graph engineered creation.

**7:14** · Well, the first scenario you're going to want to consider that is when we are running into context problems, specifically context rot. If I'm asking what agent to loop over and over and over again, and at each loop I'm having it do, you know, four, five, six, seven, eight tasks, and we're getting to the point where the context window after each run is getting into the 300, 400, 500,000 token range, probably makes sense to just split up the work. There's no reason for us to be subjecting ourselves to lower quality because of that filled up context window when we don't have to. Now, scenario number two is when we need an independent review.

**7:48** · When we talk about proper loops, what we need to do at some point is judge success, that whole success criteria thing. You need to ask yourself, can the agent that created whatever it is we're creating, in this case a report, does it make sense for it to judge the report itself and say this was good, this was not. In the case of a morning report, it probably can. It's probably not that complicated, it's not that high-stakes to say, all right, this report is pretty good. Not to mention it's relatively subjective.

**8:14** · However, if this is something that is high-stakes and we want a second pair of eyes, well, perhaps we need to start leaning into graph-engineered scenarios where we bring in an entirely different agent to take a look at what we created. Perhaps it's not even a Claude code agent, perhaps this is something like GPT-5.6.

**8:33** · Either way, that's a scenario where we have some sort of multi-agent orchestration and graph engineering makes a lot of sense there. And three is timing.

**8:42** · Right? How fast we need this to work. In this case, it makes a ton of sense to have a graph-engineered automation because why am I having one agent look at YouTube, then look at Twitter, and then look at Reddit, and then look at Gmail? Claude code doesn't even do that.

**8:53** · When you run something like deep research, right? Is it sequentially one thing at a time researching all the sources? No, it's deploying like a hundred sub-agents at once to do this. And in fact, virtually all of the things that Claude code creates when you use ultra code and dynamic workflows are some form of graph engineering where we have multiple agents doing things like collecting information. We have multiple agents doing things like synthesis, and we have multiple agents doing things like adversary review of the information we gathered.

**9:22** · At no point in those complicated setups are we just relying on a single loop. Instead, it is a connection of looped agents. But, as I said in the beginning, most things you're going to do don't fall into any of those three categories. And if they don't, there's really no reason to use graph engineering. It's just one tool in our toolbox. Sometimes we need it, sometimes we don't, but there are advantages to doing so. But on the flip side, there are disadvantages where we're just adding complicated steps and complicated infrastructure to something that just doesn't need it. So, that's where I'm going to leave you guys in this video on graph engineering.

### Outro

**9:52** · I hope that gave you some sort of insight into what graph engineering actually is. I think you're going to hear it talked about over and over and over again, but if you understand loop engineering, then just think about it this way. It's just multiple agents running loop engineering. They're just doing it together, and they speak to one another, and it gives our quality a boost. It makes stuff faster, and it's easier for us to figure out what is going wrong where. And if you don't know if you need it for your particular task, the answer is probably no. So, as always, let me know what you thought.

**10:24** · Make sure to check out Chase AI Plus if you want to get your hands on my Cloud Code Masterclass. I'll put a link to that down below.

**10:30** · And besides that, I'll see you around.