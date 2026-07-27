---
title: "I Stopped Prompting Claude Code. Now Loops Do It For Me (Loop Engineering)"
source: "https://www.youtube.com/watch?v=yaJAMagc_sE"
creater: "[[Builders Central]]"
published: 2026-07-25
created: 2026-07-25
description: "In this video, we covered:First, what a loop actually is.Second, the 5 building blocks every loop needs.Third, we'll build two real loops in a coding agent.Old model:You → prompt → agent → respo"
tags:
  - "Yt"
---
# I Stopped Prompting Claude Code. Now Loops Do It For Me (Loop Engineering)
Source: [YT](https://www.youtube.com/watch?v=yaJAMagc_sE)
![](https://www.youtube.com/watch?v=yaJAMagc_sE)

In this video, we covered:  
First, what a loop actually is.  
Second, the 5 building blocks every loop needs.  
Third, we'll build two real loops in a coding agent.  
  
Old model:  
You → prompt → agent → response → you → prompt → agent → response → you...  
  
New model:  
You → design loop → loop prompts agent → agent works → loop checks → loop prompts again → done.  
  
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_  
Follow Builders Central on Instagram: https://www.instagram.com/builders.central/

## Transcript

**0:00** · So, for 2 years, this is how you got value from a coding agent. You write a prompt, \[music\] you wait, you read the response, you write the next prompt, and you wait again. But, a few weeks ago, Boris Cherny, \[music\] who's the guy who built Claude code at Anthropic, said this.

**0:12** · I don't prompt Claude anymore. I have loops that are running. They're the ones that are prompting Claude. My job is to write loops.

**0:17** · And not just him, \[music\] Peter Steinberg, the creator of open claw now at open AI, said the same thing. You shouldn't be prompting coding agents anymore. You should be designing loops that prompt your agents. Now, \[music\] this went viral with millions of views, and most people had the same reaction. What does that even mean? So, today, I'm going to show you \[music\] exactly what that means.

**0:38** · This is called loop engineering. So, think of it this way. You're no longer the assembly line worker at a factory.

**0:44** · You're the one who owns the factory. You don't type the next instruction. You design the system that types the instructions for you. The old model used to work like this. You prompt, agent, response. \[music\] You prompt, agent, response, and the cycle continues. But, the new model is you design loop, loop prompts agent, agent works, loop checks, loop \[music\] prompts again, and done. So, in this video, here's what we'll cover. First, what a loop actually is.

**1:09** · Second, the five building blocks that every loop needs. Third, we'll build two real loops \[music\] in a coding agent. And finally, when loops make sense and when they're just going to burn your money. So, let's go. So, starting with the burning question, what \[music\] is a loop? So, a loop is just four steps that repeat. Discovery, execution, checking, and deciding. So, discovery means find work, a failing test, a new issue, or a pending task.

**1:33** · Execution means doing the work. Checking means \[music\] did it work? And deciding means are we done or do we need to go again? That's it. Now, here's the difference between a script and a loop.

**1:42** · A script says do step A, then step B, then step C. A fixed sequence with no decisions. A loop on the other hand says look at the current state, decide what to do, do it, check the result, and decide if we need to do another round. This is actually a lot closer to a tiny engineering process than a bash script.

**1:58** · Let's talk about the lineage because this isn't new. This is just newly productized. For example, in 2022, the react paper from Princeton and Google, reason, act, observe, \[music\] repeat. One model, one loop, a human watching.

**2:10** · Then in 2023, we got auto GPT. Remember that? You gave an agent a goal, it prompted itself in a loop, and it also spun forever and did absolutely nothing useful. And that's where the skepticism of agents are a boy came from. Then in 2025, we had the Ralph loop, a bash one-liner that runs Claude in a loop until test pass. It was hacky, but it worked. Then in 2026, we got slash goal.

**2:30** · Now, this ships as a first-class feature inside coding agents. Now, let's move on to the five primitives. So, every loop that actually works has only five parts. One is the trigger. Now, this is what starts the loop. A schedule, a webhook, \[music\] you typing slash goal, something has to kick it off. Then we move on to the second part, which is work trees.

**2:49** · Now, these are isolated git branches, so parallel agents don't step on each other's files. Two agents, \[music\] two branches, and no collisions. Third, we have skills. Project knowledge the agent reads every single run. Your conventions, your stack, your we don't need to do this because of that one incident. Then we move on to connectors.

**3:06** · MCP tools that let the agent reach your real systems. GitHub, Slack, Linear, basically your database. And last, we have memory. Now, this is the state that survives between the runs. A to-do.md, a progress file, something on disk. The key insight here is that the model forgets everything between the runs. Its context window is wiped clean, but \[music\] the repo doesn't forget, and that's the trick. You put state in files. The agent reads them, does work, updates them, and the next run picks up exactly where you left off. All right, enough theory, let's get to building something.

**3:35** · Now, before we build, quick context on what's available in Claude Code right now. So, the first thing that we have is forward slash goal. Now, this keeps Claude working until a condition is met. So, forward slash goal, all tests pass. Now, Claude runs the tests, see what fails, makes a fix, runs again, and keeps going until everything is green. Then it stops \[music\] on its own.

**3:57** · Okay, so I have this repo of mine. So, let's try to run npm test to see how successful tests look.

**4:03** · Okay.

**4:09** · All right, so it returned three successful tests. Not bad. The only rule that it has is the goal has to be verifiable. Now, all tests pass works because there's a command that returns yes or no. Make the code better doesn't work.

**4:23** · There's no way to measure better. The loop spins forever and declares victory after just one change. Now, let's move on to the second command. The second thing that we have is {slash} loop. Now, this \[music\] runs a prompt on a schedule. Now, this doesn't stop, okay? This keeps working on the interval until you kill it.

**4:44** · So, to summarize, {slash} goal is finish line driven and it stops when the condition is met. And {slash} loop is clock driven and runs until you stop it. Now, you need to pick {slash} goal when there's a clear done state and pick {slash} loop when you want something to happen on repeat. So, you'll see both in these demos. So, let's get started.

**5:00** · Okay, so we're going to start with the simplest loop possible. Now, I built this library for one of my projects. It's a phone validation and OTP utilities. So, we open sourced it because honestly every Indian developer needs this stuff. All right, so two test files. Phone validation and OTP generation. Now, we're running the tests.

**5:17** · Show me what's failing. Okay, now from Claude's response we can see that we're having five failures. Five tests \[music\] failing across two files. Look at these. OTP returns five digits instead of six. And then for length four it runs three instead of four. Okay.

**5:30** · Okay, so the normal flow for something like this would be I read the error, I tell Claude to fix it, it runs tests again, I read the next error, and I tell Claude to fix it. And you can see how strenuous that can be.

**5:40** · Now, what I'm going to do is take a step back. Claude reads all of the source files. All four bugs are now clearly commented. Fixing them Okay, all 15 tests have passed. Four fixes applied. And this took 26 \[music\] seconds. Four bugs. Now, that's the simplest loop, a goal with a finish line. Now, good goals sound boring. All tests passed, no lint errors, build succeeds. \[music\] Boring, measurable, verifiable. But, that's what loops can actually check.

**6:07** · So, now I want something that's a little more useful, but we're going to be using the same repo. Now, I want a loop that runs every morning and tells me what's on fire, what's blocking the build, and what I should work on first. But first, let me show you something. Okay, so there's three open items. Now, this is from yesterday's run. The skill ran, wrote the file, and now it's sitting here waiting for me. This is the memory primitive in action. The model forgot everything, but the file didn't. When the skill runs again, it can differentiate against this. What's new, what got stuck, what's fixed. So, let me show you \[music\] how to set this up.

**6:37** · Show me the daily triage skill file. And there it is. The skill that runs morning triage, checks GitHub issues for bug and enhancement labels, checks the latest CI run, and rewrites to-do.md with a prioritized action list. So, CI failures first, capped at 10 items, and timestamp at the bottom. I wrote it once, and the agent reads it every single time. Okay, so step two is obviously going to be running the skill that we just achieved.

**7:02** · \[music\] So, run the daily triage skill. I'm now loading the skill, running GH commands. It's pulling open issues from GitHub, checking the CI status. Ooh, CI is failing. Okay, it's getting the specific failing tests. Okay, now it's writing to to-do.md. Shows me the to-do Okay, showed me the updated to-do.md file. Okay, there it is. CI failure surfaced at the top. The OTP expired bug was reintroduced.

**7:33** · Someone \[music\] pushed a breaking change. All right, so that's the loop. It reads the old state, compares the new state, and updates. So, now that we've got this, we're going to schedule it. So, I want this to run every morning without me.

**7:45** · \[music\] So, Claude asked if I want a cloud schedule instead.

**7:49** · Yes.

**7:51** · This is how it's going to be running even if my laptop is closed. All right. So, there it is. 9:00 a.m. IST daily checks, CI checks, GitHub issues, rewrite to-do.md. The prompt is baked in and the agent knows exactly what to do. Works for me.

**8:06** · Perfect.

**8:08** · And now, Claude literally creates the routine. Now, I wake up, the to-do.md is already waiting, and this is where {slash} loop and {slash} goal are different. So, {slash} goal has a finish line. It tests \[music\] if the test passed, it stops. {slash} loop, on the other hand, runs on a clock. It doesn't stop. Two commands, two different jobs, but both are loops. And this is the loop mindset. I wrote the skill just once. I scheduled it once, but the loop runs every morning. I didn't prompt anything.

**8:34** · The loop did. So, here's the thing. Everyone's going to say that this is just automation. But, automation says, "Do step A, then B, then C." Fixed.

**8:43** · Linear. There's no decisions. A loop, on the other hand, says, "Look at the state, figure out what to do, do it, check if it worked, and decide what's next." The agent isn't following a script. It's running a process. We started with prompt engineering, then we moved on to context engineering, and now we're finally at a time where we have loop engineering. Each layer wraps the one before. Prompts got you a single good response.

**9:05** · Context got you the right information in the window, and loop engineering makes the whole thing run itself. And here's what Boris Johnson actually means when he says that my job is to write loops.

**9:15** · He's saying that the leverage point has moved. He's not saying that the work got easier. The skill isn't writing the perfect prompt anymore. The skill is designing the system that writes the prompts. So, like I said before, you're not the assembly line worker. You're the factory owner. And just like any factory, your job is now quality control on what the factory ships, improving the assembly line, and knowing when to shut it down before it starts burning money.

**9:39** · Because a loop running unattended is also a loop making mistakes that go unattended. Now, the goal is not an agent that works mysteriously overnight.

**9:47** · The goal is a narrow automation with a clear finish line, a verification step, and a human at the end who actually reads what it shipped. So, guys, if you want to try it, you can start here. One goal or a command on something measurable. All tests pass, no lint errors, and build succeeds. And please, don't start with overnight loops. Start with a 3-minute loop that you can watch.

**10:06** · And once that works, add a skill. And once the skill works, schedule it. And that's your first factory. And if you want the daily triage skill file from this video, I'll drop it in the pinned comments. It's copy-paste ready. So, drop in the comments what you'd automate first. Is it the CI triage? Is it the code review? And I'll see you in the next one. And until next time, keep building and keep experimenting.