---
title: "Designing & Building PR Review Multi Agent System (3 Hours Build)"
source: "https://www.youtube.com/watch?v=RiN02OXjeeQ"
creater: "[[Ayush Singh]]"
published: 2026-07-22
created: 2026-07-26
description: "In this video, you’ll design & build a production-ready AI Pull Request Review Agent from first principles. Instead of copying an architecture diagram, you’ll learn the engineering loop used to design"
tags:
  - "Yt"
---
# Designing & Building PR Review Multi Agent System (3 Hours Build)
Source: [YT](https://www.youtube.com/watch?v=RiN02OXjeeQ)
![](https://www.youtube.com/watch?v=RiN02OXjeeQ)

In this video, you’ll design & build a production-ready AI Pull Request Review Agent from first principles. Instead of copying an architecture diagram, you’ll learn the engineering loop used to design reliable AI systems that work outside of demos.  
  
You’ll see why a simple LLM + RAG pipeline fails, how senior engineers actually review code, and how that process becomes a multi-agent architecture with retrieval, orchestration, confidence scoring, and human approval.  
  
This is a system design tutorial for AI-native software engineering.  
  
Resources and signups to do:-  
  
TigerData for setting up our all three DBs mentioned in this video:- https://tsdb.co/ayush1 (Remember to signup from this link to get $1000 in credits, even though you can build on free tier but recommended to upgrade so you can work with it flexibly)  
  
Get your design document here:- https://topmate.io/ayush\_singh13/2214687  
  
We're working on a video (Genesis - Harness - This is one of the harness used in this video - https://www.antern.co/blogs/genesis-kit/ )  
  
Github Link of Genesis Kit(Loop that prompts itself) :- https://github.com/ayush488-glitch/genesis-kit  
  
  
In this video  
  
\* Why “LLM + RAG” is not enough for production  
\* How senior engineers review pull requests  
\* Designing AI systems from first principles  
\* Multi-agent architecture for code review  
\* Retrieval and context engineering  
\* Failure-mode analysis using a 2×2 framework  
\* Engineering failures vs. LLM failures  
\* Human-in-the-loop (HITL) review gates  
\* Confidence scoring and evidence-based reviews  
\* Building a reliable orchestration workflow  
\* The Genesis development ritual  
\* Verification-first AI development  
\* Cost-aware AI architecture  
\* Production readiness for AI agents  
  
You'll need following account creds setup :-  
  
TigerData for setting up our all three DBs mentioned in this video:- tigerdata.com/go/kol (Remember to signup from this link to get $1000 in credits, even though you can build on free tier but recommended to upgrade so you can work with it flexibly)  
  
Get your design document here:- https://topmate.io/ayush\_singh13/2214687  
  
We're working on a video (Genesis - Harness - This is one of the harness used in this video - https://www.antern.co/blogs/genesis-kit/ )  
  
Github Link of Genesis Kit(Loop that prompts itself) :- https://github.com/ayush488-glitch/genesis-kit  
  
Technologies & Concepts  
  
OpenAI, GPT, LangGraph, Retrieval-Augmented Generation (RAG), Context Engineering, Multi-Agent Systems, AI Agents, GitHub Pull Requests, Code Review Automation, Human-in-the-Loop (HITL), Software Architecture, System Design, Vector Search, Embeddings, Confidence Scoring, Agent Orchestration, Verification, Evaluation, Prompt Engineering, AI Native Engineering.  
  
If you enjoy deep technical content on AI systems, agentic software engineering, LLM infrastructure, and production architecture, subscribe for weekly videos.  
  
🌟 Connect with me on social media 🌟  
Instagram: https://www.instagram.com/ai.ayush\_singh/  
LinkedIn: https://www.linkedin.com/in/ayush-singh488/  
  
Keywords  
  
AI PR Review Agent, AI Code Review, GitHub PR Review, Multi Agent AI, LangGraph Tutorial, Context Engineering, RAG Tutorial, AI Software Engineering, AI Agent Architecture, Agentic Coding, OpenAI API, LLM Engineering, AI System Design, Production AI, Human in the Loop, Retrieval Augmented Generation, GitHub Automation, AI Coding Assistant, Software Architecture, Engineering Design, AI Workflow, AI Orchestration, Code Review Automation, AI Infrastructure, Genesis Framework, Build AI Agents  
  
#AI #AIAgents #SoftwareEngineering #SystemDesign #LangGraph #OpenAI #GitHub #CodeReview #LLM #ContextEngineering #RAG #AgenticAI #MachineLearning #ArtificialIntelligence

## Transcript

**0:00** · Okay, today we are going to build an agent that reviews your pull requests.

**0:05** · And here's the plan. What we will do, we will take the difference of your code which you have added or deleted. We'll give it to maybe OpenAI or Entropic API key with a completion prompt. And in the prompt, we will write, okay, tell me what's wrong with this code and hopefully expect some good comments out of that LL. And okay, okay, we can do something else as well. We can also add rag. We can pull some relevant files from the repository. We can stuff them into the nice little prompt and then we can call that production ready. Right?

**0:32** · If that's what you came here for, please close this video. I'm seriously please close this video. There are 400 tutorials that do exactly like that. And none of them is the production ready agentic system. Here's what we will do instead. And frankly speaking, it does not starts with tech. It starts with a real senior reviewer who has 20 PRs to review today. And the quality on the first PR is not equals to the quality on the 20th one. And you might imagine some reason why. It might be fatigue. It might be inconsistency. It might be some human judgment.

**1:03** · It might be some missed things in the 20th PR. Or it can be anything which relates to a human. And I want you to think about it. The problem is not to have an agent that can review your code automatically or in automated way. But instead the problem is the selectivity which is which findings does the agent takes and which ones does a human judgment actually get spent on.

**1:28** · Now that one sentence of selectivity is going to be the whole architecture and everything will fall around it. Here's the part which I will also care about is I'm not going to give you a finished game or finished diagram of your architecture that this is how we're going to build it. I'm going to show you how I thought about this process and frankly speaking it's kind of a loop that runs once per component.

**1:49** · What we do is first we'll find a human system that has already solved it which means watching how a senior actually reads a difference of the code which you added or deleted. Then we'll bring the codebased context which a senior reviewer actually thought about building in that particular moment. Then what we will do we will reason across separate concerns. For example, a reviewer might think about security. Maybe they think about quality, they think about correctness, they think about testing, they think about documentation. Every one of them is coming from a different mindset.

**2:20** · And frankly speaking, they are very skeptical. They're providing evidence of the everything which they are talking about so that if at any point of time they get wrong, they can get back to it. And if you read those four statements from the engineering point of view, the codebase context means retriever. Separate concerns means it's not just one reasoner. It has multi- aent architecture.

**2:40** · Every site which is having evidence which means every finding which my agent will make must carry a rational and a confidence and the four agents which will design will not come from okay let's design for agents but actually thinking from what eventually Howard human reviews and then we will take one component of entire

**3:01** · architectures one by one and then we'll ask a single question to every component is what can go wrong and what we will do we'll think from two different perspective ive two different directions. The first one is the engineering direction where it all can fail. For example, let's say you're working on the component of GitHub which is GitHub retries the same delivery all the time. Maybe the security problem that somebody else is sending your request of PR which is not GitHub officially and then you have just 10 seconds to acknowledge to GitHub but your agent takes 90 seconds. All of that is engineering direction failure modes.

**3:35** · In the LM direction we have the let's say the model hallucinates the retrieval pulls the wrong slices every single thing which our LLMs can go wrong and then what we will do for every component we'll put those failures into 2x2 matrix for example what you know you don't know what you will recognize when you see it and what you have never ever considered and we'll do that and the design of the component will start to write itself and then we'll move to the next one for example orchestrator retriever events

**4:04** · gate states five components will run the same loop five times and by the end we'll be having an architecture which is fall tolerance we have designed already till there and only after designing the whole system we will code and frankly speaking we'll not vip code it like other people we'll run our genesis ritual genesis is in harnesses which actually give you an ability to maintain a state and to be able to consciously work with AI to be able to develop your project or to be able to implement your architecture for example Example, a context craft with your invariance.

**4:35** · How does a definition of a done which looks like what each milestone will eventually contain and exactly what will the output of each milestones and then the loop will drive the agent against that spine.

**4:49** · We'll be having five different gates to build that particular loop and an independent verifier that actually verifies whether it has done the work or not. Along with it, we'll integrate systems where it literally asks questions whether you have understood whatever it has written or not. And we'll truly show you how AI native engineering actually works when you actually be mindful about what your AI is doing. And by that point, you're not depending upon your agent to think and code. You're actually directing your agent and still having the full harness of how you're controlling the agent and what your agent is doing.

**5:20** · You'll ship a real system. You'll have a multi- aents running in parallel. You'll be having a human approval queue, a full trace viewer, and a cost dashboard that we're actually going to show you the economics of your LM. But more than that, you will have the loop and the loop moves. We'll point it at a correct previewer and incident agent and anything of that kind. And more than that, you'll also learn how to natively work with AI and still be able to understand what your AI is doing at every single point of time.

**5:48** · So there's a road map in the description. So I'll end this entire course not by building the entire system, but giving you a baseline to build on top of it so that you can actually extend this project and natively work with it. So let's get started with our system design. All right guys, so let's get started with our actually designing the system.

**6:05** · So first of all before we even get towards telling you about hey this is how to think about this is how to write the design the idea of this project is to of course tell you that okay this is how you can design an AI PR review agent but

**6:22** · more importantly I want you to be able to extend this to other problem I want you to be able to extend this to other ideas by your own and that's why I first of all first of all want to share you that this is the lens which is behind the way we think about you know uh this

**6:39** · particular whole system EIP or agent which you can further generalize to any system which you're working on now so we usually have this template and which I have created and the first uh template and the first move is mapping the mess so whenever we will go ahead and when we design the system as well we want to document what actually happens today I mean if you I'm designing an agent which reviews a PR. I want to see that what if that particular AI agent is not there.

**7:13** · What is happening right now? What is happening without that particular particular solution without that particular AI agent? Now let's assume why I do this because as I said that if you remove a component from it, if you remove that okay you want to review a PR. So instead of an AI which is reviewing the PR what you're doing you're having an human to review it.

**7:34** · That's what you're doing right now.

**7:36** · Given that we assume that there is no other AIP review agents uh in the world.

**7:41** · So if you remove that component what is happening what you want to do you want to observe everything which a person is going to do. You want to write those micro decisions which a particular person is going to do. It can be literally anything. It can be okay these micro decisions for for example let's say I will take a very simple example in this case let's say you we we want to

**8:05** · build this agent u a how a particular senior reviewer will go ahead will look at what code the microactions he will take the knowledge base he will recall the knowledge base he will see the architecture decision records he will see the documentation he will see etc etc so what is he doing at this

**8:24** · particular point of time to review a particular PR and then you write every single minute steps of that particular person doing it because when you do that and then you'll figure out okay this is the mess which we need to organize in terms of agentic design and that's the first step there is no concrete step and I and and I always tell tell this to people is AI system design is just that there's a manual work going on you need to look at every possible steps which a human is doing even unconsciously and

**8:55** · then you pick that up and then what you say okay fair enough now what I'm going to do I'm going to go ahead and figure out which is mechanical where human is doing his judgment and where we can you know put LLMs where we can put deterministic ML where we can put anything so we need to figure out that this is what we want to do so the first step which we're going to do in this project is figuring out what happens today right and more importantly I want to understand okay what triggers it basically if my if if what triggers a

**9:26** · senior engineer or some some engineer to review your PR it's like okay as soon as the PR is made he will get some notifications on his GitHub or probably discord alert or slack alert or probably some person is going to say hey I made a PR can you review it and then he will make a comment and then so we want to write all those minute decisions and we're going to do that and we'll explicitly say okay this is where the human is required and this is the mechanical stuff is happening and we'll also figure out where it breaks. Again, I'm not yet on AI.

**9:55** · I'm just on humans reviewing the PR and figuring out what it does, how it does, why it does, and where human fails. That's the first step. Second move, I want to make it more explicit to talk about what is going to my be my trigger and what is going to be my output. And more importantly, I want to just talk about one thing is if a person if a particular uh person wants to review a particular PR, what happens? He gets a Slack notification.

**10:25** · He get a GitHub notification. He gets an email notification. He gets some some person saying, "Hey, can you review my PR? Can you u can you u you know tell me that okay, I have made a PR can you please go ahead and review it?" That's that's what the trigger which I want to give to my agent is I want my agent to be

**10:45** · triggering its workflow at a very precise trigger and it should be a very precise for example the the the way I mean by precise is I want to take one example let's say that you're building some insurance approval agent which approves whether to give the insurance to this person or not right what happens is any email which comes in what will trigger the agent. We don't want that claims comes in. That's not a that's a very vague trigger. We want a very precise trigger.

**11:15** · So in that case, I would be a claim which arrives at this particular email ID and has a word known has a keyword such as claims. Similarly in this we want that okay we want anytime a PR gets posted we should be able to create some GitHub web hook and use the GitHub web hook stuff to be able to get this on our Slack and that particular PR by that particular person probably can be one of our trigger now

**11:43** · it's not just about having a trigger we want to output for example into the our insurance claim example we want to be able to say okay it should be able to produce some output right even in this what it will do it will say okay code eventually a structured PR review is posted the way a human would do is a structured PR will eventually get posted now let's assume like there are several

**12:08** · types a person will eventually think about a particular PR or or maybe any GitHub PR which eventually gets made the first point is that it should be able to think in terms of okay because my PR is posted I should be able to test across the verticals whether it is readable whether it follows a security principles whether it is u you know that the the the the test cases has been added whether it uh whether it actually confirms and works based on architectural style there can be multiple parameters on this particular

**12:36** · engineer might be testing the PR might be reviewing the PR and then he will make a comment and then the person will come the one who makes makes the code and then he will come to this engineer and say that hey this is and clarify if something was not clarified to an engineer or fix it and then send sends it once again.

**12:51** · Now there can be also possible cases where an engineer needs to even revisit some other people right I mean who is more senior to him so that he can understand if he's not able to understand anything or if he's conscious about anything right so he should be able to go ahead and and and post that and if it is an PR open source let's say

**13:10** · that if it is a PR of a big organization they have they have a lot of employees and is an open source GitHub right if a particular engineer finds a very big security vulnerability It should not be able to go and say, "Hey, this is what is going on, right? It should not be able to literally point out the security uh vulnerability right away. It should eventually go or raise something behind the scenes basically not in the public, but more importantly raised to the um directly by via Slack chat or something.

**13:41** · We don't want to talk about what is a security issues publicly into an open PR. People can actually misuse it. So all of that eventually comes down to move number two. And move number three is figuring out at which point of time I've told you multiple steps what a senior engineer will look at the PR and then he will look at the code differences then he will look at its four to five parameters which he wants to test a particular PR based on what whatever is the guidelines of testing a PR right they there can be a multiple

**14:11** · steps which is involved and we'll talk about those multiple steps in a bit but we want to assign each step a component a component can be our trigger which means is deciding that okay this particular component is a trigger now if you want to fetch a data if you want to fetch something we will use or we want to fetch a let's say a GitHub review is

**14:31** · posted so we need to be able to I mean get to know whenever the PR is posted so that that's what our tools APIs and web hooks will come into the play let's say if you're looking to reading unstructured input or writing language and getting to know the intelligence generative piece we'll use LLM let's say that we want to um a score or anything which where we want a deterministic uh point of view. We'll use deterministic machine learning or probably we want to use this. We want to look at the past knowledge bases. So the code can be huge.

**14:59** · So we want to go ahead and say that hey what I want to do is I want to look at the code which is similar right because if somebody has posted a particular PR I should be able to look code which is associated with this PR or even not just associated but because of addition this code what will get impacted? So I want to look at the similar codes similar code uh differences into the databases etc etc.

**15:24** · So I should be able to use uh rag I should be able to use I should be able to fetch such semantic code right here right and there can be a point where I don't want to have a human I mean AI I I want to have a human checkpoint if it deals with the safety if it deals with financial if it deals with legal I just want to have a human checkpoint. So these are few and few components. Now move number four. I will think about what and how much of this system will do it on its own versus how much it will differs to a human.

**15:56** · For example and and and I always tell this tell this to people is it's this is not a default in general. You cannot say fully automated system. You need to be able to think about that what if something goes wrong.

**16:10** · What is the consequence of your error?

**16:12** · And I have a golden rule which I say that if your AI has to deal with if your machine learning systems has to and AI systems has to deal with m financials legals and probably your health you have to have you cannot choose to have a full autonomy. It completely depends on your organization. And whenever you're thinking about designing any system think about what happens if the error comes in.

**16:36** · And I will tell you very honestly even if you get 90 things out of 100 you get 99 things right and that one error is right there which is an kind of enormous consequence of having that error you'll be doomed your system is not right you need to be able to choice and design by choice is telling okay this is how much autonomy I want into this particular system and then move number five is we have a saying that everything will break and this is a life advice as well.

**17:08** · You need to be prepared for everything go going wrong. You have planned something assume that if everything goes wrong you should be having some backup plans. You should be having some roll backs. You should be having some fallbacks. It should you you should be having all the plans ready whatever happens. So similarly we'll design the system and we'll go through every components and we'll say that okay this will break. For example, what happens when the your your LLM hallucinates?

**17:33** · What happens when the API times out?

**17:35** · What happens when we are not able to GitHub API is down? GitHub web hooks are down. What happens if the our agents who are giving some reviews actually conflict with each other? We'll talk about what does it means two parallel agents in a bit. So I would ideally want let's say uh let's take an example.

**17:52** · Let's let's take a very simple example \[snorts\] is if uh if uh let's say your alm lm hallucinates right what will you do after that right? Let's say if API if if if a particular embedding model is not working from open AI I mean it's down for some reason usage is down so your complete system is down right so you need to be able to retry again then circuit breakers you need to be able to say that okay I will switch the models I will I will switch the models to a different embedding models it can be anything right so we want our components

**18:23** · to fail gracefully at least not better but don't get don't stop the whole system to work it should be able to be reliable enough and this is known as the reliability engineering is to be reliable enough so that our models actually perform really well.

**18:37** · Now these are few things. Now there can be multiple failure modes and I will talk about few of the failure modes and then we'll discuss it in detail what will fail in our project of AIPR review agent. The first one itself is hallucination. For example, the model

**18:53** · will state something but falls in a place that matters which means hallucination and and I I don't disagree with you and I always say that uh u hallucination is a feature not a bug but we'll take it hallucination is definitely a consequence if it happens it's it's it's going to be very bad so

**19:11** · the way I will design is against this is that everything which it should produce it should have a citation requirement it should have a fact chair layer it should also give the confidence If the conf conference is below a particular level, you want a human review to review that thing and I will designing it against these requirements.

**19:32** · Then let's say that your model drifts has happened. For example, let's say that you were building some um uh you you build some AI agent. What happens that it was extremely good on your evaluation data set and again we'll design those evaluation data set. But let's say that was a way amazing at your whenever you were building but as soon as it went in the world things changed.

**19:52** · One of the prime example of this particular kind of system is in this LLM case it it might be prompt but if you're from the envelops and core machine learning background you know about this model drift for example let's say that you built an email spam detection system right what happens suddenly the hackers started changing their strategy of how they spam you suddenly the hacker strategy is started changing how they put up you uh put you put your system into a wrong place now it was good when you're trained and we build the system.

**20:23** · But suddenly things were not going well.

**20:25** · So I will have a monitoring dashboard. I will have a alert thresholds. I will have a periodic training. I will have a periodic prompt updates. I will have a rules fallbacks. I will I will just sort it out for the common thing. So I will have those designed for that kind of problem. If my tool and API is timing out, I will have an external system. I will have a timeout and retry. I will have a graceful degradation on the partial data. I will have a circuit breaker on a dead service. And I will discuss about it. If you don't know about this time out and retry circuit breakers and all that, please don't worry. We'll be going through uh through once we reach that component.

**20:57** · For example, let's say feedback loop poisoning. For example, that let's say somebody uh given a feedback to your AIP review agent. What happens that that particular agent is not looking at your feedback and improving further. So we need to be able we need to be able to look at and say that hey you need to be you need to improve yourself. So we'll have minimum evidence threshold that okay you eventually will use those feedbacks which is provided.

**21:29** · Now also there are the times that bad feedback is stored for for example let's say a very junior engineer comes into the place and then reviews a particular PR into that particular tone in a very bad manner.

**21:41** · Then your agent stored that feedback and then improve improved it. So we want to be able to make sure that the feedback is stored is good. Right? Now there are a times when we need to also change. So if a particular feedback is not being used too much, we also need to decay our old feedback. Right? We need we we don't want to use old feedback which is no more helping and increasing our um storage of our embeddings. We we don't want to do that. Right?

**22:09** · For example, there can be orchestration deadlock. For example, let's say that you're having two parallel agents coming together and they don't disagree. So what you say you eventually don't work.

**22:18** · Let's say that um um um what when you usually when when we talk about the parallel agents you'll get to know that usually whenever two parallel agents comes into the place both has to give the answer and then we have a merger which combines the result of both of it.

**22:33** · Now what happens if one of the agent does do not give the input output sorry right so your merger receives just one input or maybe both of the agent do not give any input right so your merger is also failed so how do we do about it how do we make sure that our orchestration deadlock is not happening there's no dead end we want to be able to build our own system around that human bottleneck for example uh we want to make sure that our our uh we have our

**22:59** · auto handling at most of the times but we want to make sure that a humans clears it I mean um escalation so it if it keeps on escalating every single thing we don't want to do that so we should have a priority look at the priority PR if if at all the hit eventually comes we want to have the priority PR for example okay this is what you look at so we need to do the capacity planning and this is an important problem and capacity planning

**23:24** · which is okay how about I mean we are having let's say thousands escalations per day can my human review it no absolutely not so how do you think about it. How do you prioritize? If it is really a thousand escalations per day, how do you think about having a Q prioritization? How do you prioritize your peers according to the \[snorts\] business requirements? Right? So these are the human bottleneck like you cannot have a technically one human to review thousand stuff in a single day. So you need to do a capacity planning.

**23:47** · You need to look at the queue prioritization which once looks at the good one and uh the the another one is the almost right problem. the most of the times I feel that your agent is almost right which means 90% correct but it is kind of 10% subtly wrong. So we want to look at okay uh we want to flag the low confidence output. We want to look at random audits. We should be able to doing maybe every 2 days, every 3 days to our system.

**24:14** · We should be able to rotate our reviewers for for example that we should be changing our models in general. For example, we we also we should be also ch checking with wrong inputs. We should be able to check with new data, new inputs to be able to see that if it is really performing well or not and then test how well it is performing. Right? So these were few failure modes and we'll discuss it in detail once we talk about our system. We still please remember we have not came to the system as of yet. Okay.

**24:39** · So now talking about that not every system eventually needs the same level of human involvement and I always talk about if a full automation is required you want it to fit where it is a routine task it is reversible task the task is of low stakes the human over there can review it periodically it's if it is a human

**25:03** · reviews output which means the system produces and human verifies it before it goes out which means that we're dealing with the reputational stakes so it just makes a draft and then and then does not sense it and baits for the feedback.

**25:15** · Human handles the exception which is going to be the u uh the one which is going to use in our system is system handles the easy cases and human sees the hard one. For example, the one which has an anomalies the system which has a low confidence right human decides and system prepares. For example, systems gets the all context and then human makes the call.

**25:34** · For example, especially in the financial decision, this is an amazing stuff where you take all the data of a particular, let's say you're providing a loan to a particular person, you want to gather all the information and then get all the scores and then finally the human is approving whether to do it or not. And then we have another one which is full human with the AI assist. Now if you understand what we are doing and I want you to work on this any system which you're going to work on that is what is going to be the consequence of error. Right? So let's say a wrong style comment is annoying.

**26:06** · For example, it can be any any stuff which is right there. But if you miss the SQL injection which is going to be dangerous for your system, right? That's that's that's that's going to be dangerous. So if we are able to if if our agent is giving a wrong style of comment is fine. That's that's not much of an issue. But if it is missing a crucial security issue while reviewing the code, it is going to be very dangerous.

**26:34** · Reversibility can an auto posted review can be disputed and removed. But a merged migration cannot be unrun easily. So what is the kind of reversibility for for our kind of system? The system maturity which means new systems need more override, proven ones earn less. So is this a system already there? So can we need to give him more human right? Right. So these are a few factors for example the consequence of error reversibility and system maturity which you look at designing any sort of system.

**27:05** · Now if you start with more human involvement then then you think you need you reduce it as the system proves itself and that's what we mean by system maturity is let's say that you build the system and you increase the and I always say to the people it's fine even if takes a lot of human to build an agent.

**27:23** · It is good actually because you're going to look at your agent very very consciously and as the system matures over the period of time you reduce the human involvement rather than recovering from removing it which is rather than it making expensive mistakes and I'm not telling this just because if I'll tell you a real story at at secondary labs at SPL we had an

**27:47** · amazing uh conversational agent which used to go on LinkedIn and have a conversation with the prospect and we had a very good big client and one of the one the biggest in the United States of America and he eventually came in using our platform and uh what our agent did our agent reached out to his prospects and customer and then he scheduled a dinner and the person was in Netherlands basically the pro the customer was in Netherlands but I mean

**28:12** · we did not imagine that our agent will set up a dinner that Netherlands guy eventually was a good founder he came for a dinner and then maybe after 9 hours that particular guy got to know understand this happened in less than 9 hours. All of that which means that we

**28:27** · even if you would have happened at least 2 days later or 3 days that that was our assumption right that even if it sets any dinner it will take at least 2 to 3 days to schedule anything and by the time we'll catch it up and then we'll say no for that meeting or reschedule that meeting but 9 hours we would have never believed that would happen but that happened we got doomed and after that of course SPL improved itself on more grounding responses and you will talk about assumptions registration uh towards the end why assumptions What actually happened that okay our assumptions failed which means a system failed because our assumptions failed.

**29:02** · If we would have actually made the system in a way to say that no any time even 1 hour even things can be set up we would not have made the mistake which means a system failed because an assumptions failed. Basically having the right assumptions about your system is going to be an extremely and extremely important uh problems and and and design issue we should be having towards the end.

**29:24** · So the way you think about it is cognitive design and that's what we're going to do in part one is spend a lot of time in designing the cognitive structure. Then how do you do the system architecture? What is your architecture?

**29:38** · How do you retry? How do you how do you make it system reliable? what what technology stack are you using and most of the time I see people they're like hey Aush let's just go ahead and use I mean we'll build our system using langraph let's just go ahead and let's use Postgress um you know a QR for for

**29:54** · for for retrieval let's just use any vector databases but there is a certain cost and gain in deciding what technological stack which you want to use for example when we talk about choosing our uh where we'll store our memory we talk about three different data databases. So the cost is obviously cheap but maintaining those three different databases for example reliability failure modes and all that thing is going to be very expensive.

**30:19** · So we want to choose something which is a little bit in the cost but actually does pretty just we need to just maintain one data store rather than maintaining a three different ones and then why are we doing that what is the gain of that what is the sacrifice of that that's how we choose a particular framework framework choosing a particular framework is not a big deal frankly speaking people choose I think people should not be dependent on the framework frameworks are very easy to learn for example we'll see two types of things which data stores to use and how to store and thinking procedure to eventually what to use.

**30:50** · Then we'll talk about okay which orchestration to use whether to use langraph whether to use u a temporal and then we'll talk about okay what architecture level we should use we should talk about modular monolith architecture or should we talk about microservices what happens if we do it microservices right now what happens if we do it modular architecture right now what happens that okay if at all then we talk about okay how easy it is to shift to another framework we don't want to design our whole system around one framework so all of that is

**31:18** · our system architecture we want to build in that particular manner And then we have this other phases which we'll talk about as we go.

**31:26** · All right. So now what we'll do is now you understand a little bit about the mindset which we are going ahead with. Now what I will do is I will give you the first principles itself and I always say that first we to to design the system to understand what we're doing we said okay what if an AIP review agent is not there what my human is doing my human was technically we we

**31:50** · were able to create a steps where it was failing how it could have failed we write down every single thing now we need to think about is before even we do that we need to think about now we'll start to implement every design template the mindset which you produced is from the first principles is why this system exists how a senior engineer will review a particular PR and how do we map the mess to an agentic system right and then what kind of memory so you'll see that transition happening from our mindset to

**32:19** · actually writing our design and please understand most of the times it's just basic look through that's why the experience matters right you want to understand and you want to interview that person who's doing all and all so let's go ahead and work on our part number one the first principles principles is going to be a very interesting conversation and I'm going to take a probably a lot of time discussing about the first principles so

**32:44** · whenever whenever we think about okay hey let's design a system let's say a PR review agent or let's design an a system which or or any kind of agents most people will start okay how do we build it okay this is we should put a rate limiting we should put a security we should put observability all of that is very very important And I'm not neglecting that that level of system design. But the way I think about this, a system design has a lot to deal with product engineering is that you're literally until unless you have a specified problem.

**33:14** · But again, if you're designing a overall system, it again comes down to a very simple thing which is how do you engineer it? And the best way to engineer it, what if if it is not there, right? Whenever we were designing an SBL, right? Even SBL.

**33:30** · Okay, what if Isabel is not there which help us to design our vision but technically speaking when we were designing an SBL conversation layer we're talking about what if that particular thing is not there what happens so similarly what I want to do is I'm going to talk about is why it exists at all and if you answer

**33:53** · it and once you answer it the architecture becomes almost obvious and and and my students will put that in comment box and they will know it Because if you remove something from here, you won't get it right. So you will obviously feel the pain and and as I say, necessity is an feature of invention. That's where is the mother of an invention. So we'll create that necessity intentionally.

**34:18** · Now the thing about it is is is is basically why this system exists at all, right?

**34:29** · which is let's say that you have a team and obviously this is a very very basic u uh understanding that what happens if a team is without an automated review.

**34:39** · So if it is a big team, every pull request waits for a senior engineer attention. For example, you cannot get it if you any mid-level or junior engineers. You need to be able to make a review by the senior. But the resource you have will be very scarce resource.

**34:54** · For example, PR will be queued for hours and days. And I have honestly noticed when I was my at my days at Artifact or ZenML and and other search organizations, it used to take me at least a week to get my to to get proper comments on my PR. Now what companies are doing, they're having code rabbit type of PR review agents giving them the instructions of how they want a particular PR to be reviewed and then that particular agent is at least doing the basic job in figuring out okay this is where you need to fix.

**35:22** · So basically I mean that's what but previously it was pretty slow inconsistent for example uh if there is a several city engineers they might be looking looking at the same issue or another issue on another day etc etc and then let's say and I'll

**35:40** · tell you let's say that you start at one setting and then you start review and doing some work by the time you go to the 10th you will notice obviously that your fatigue your basically ability to do the the same energy with the same intelligence with the same mind at the 10th point will be very low. So what happens because of that inconsistency occurs.

**36:01** · So that's what the fatigue means is the 10th review of the day is not of the day is not the first which means the 10th review is the the intelligence and the level and the quality of review is not equals to what it did with the first because human has a tendency way to get fatigue right and if the cost and the cost if no reviews happens is that you know people spend a lot and lot and lot of time in doing that thing.

**36:29** · So if we remove let's assume that if we just remove removed this and we can feel the problem. Similarly whenever you work on any sort of system remove that thing and then think about what the problem might come. Then think about okay an automated reviewer exists to solve exactly one problem which is reclaiming senior reviewer engineer attention by automating the mechanical part of the review.

**36:54** · So that my human part is reviewing at the actual thing which it needs to rather than u doing a lot of basic stuff or probably something which could be obviously could have been caught or some or or to maintain the inconsistency or to not have the fatigue. So technically we don't want to build a system which does an automated peer review. Instead, we want to have an agent what it will do.

**37:18** · It will reclaim what senior engineer attention by automating the mechanical part of the review. An extremely extremely important statement. What we technically did when we talked about this particular issue of what is happening technically the issue is not hey I just need automated PR. If you notice the issue is all about the senior engineer. And this is one such example.

**37:46** · There can be multiple I mean examples but in this example it was a senior engineer's point of view that hey I want to get or reclaim my stuff. Even even if there are multiple engineers there can be inconsistency there can be fatigue it can be slow it can be if the cost of no review happens is extremely huge. So technically the problem is not to design an agent which does reviews in PR.

**38:09** · The problem is that how can I design an agent that reclaims my senior reviewer attention by automating the mechanical part of the review and human expense is only the judgment where it is genuinely required. That way your inconsistency will not happen and the fatigue will not happen because the person has just had to review the couples right and then keeps on giving feedback to the agent so it improves further.

**38:33** · Now a review agent is not a replacement for the human judgment and I always say this to everybody whenever you design the system don't think about that we have to automate every single part of it. We want to make sure that human judgment is very scarce. Can we can we can we do one thing is put up this particular situation so that human only focuses on where it actually requires.

**38:56** · That's what the whole agenda and this is the power of when we just listed out the problems and if we want to look at the world word selective and again a very very very important word is it should our our AI agent should not surface a PR with n number of reviews correct it should only put out high value findings or something which is very interesting it should not comment every single thing out there.

**39:26** · So we should have the selective review from our agent on the mechanical part so that and if it is possible just give the high value findings where you're very confident and if you're uncertain we will escalate that to a senior engineer and selectivity is the seed of this whole architecture which means what will be given out of this system what will be given out of this agent why it is saying that how are we making sure that it's saying the right thing.

**39:57** · Where are we putting HITL? Where are we putting human in the loop? How are we observing it?

**40:02** · How do I making it secure to so that it does not gives out anything bad? How do we make sure that lot of failure modes which we discussed how to which we'll also discuss again but how do we make it so it's all about how do we make it so and so and so selective so that it works pretty well. And again if we need to carry one thing after this section which is L0 is the system optimizes for surfacing findings worth a senior attention and differing the rest not for maximal output.

**40:31** · It should not just go ahead and blunt out the feedbacks. It should be only selective not coverage is the first principle altogether. And the way we came to this particular statement is say that okay all right let's remove what is not needed and then you will see a new problem coming out of it a new ways a

**40:52** · new way to think about a new problem framing will come out of it so usually most of the system design has to be reframed in a particular situation and that's is going to be one of the most important thing that's why the first principles exists. So now we know okay

**41:07** · we know we understand our problem statement we understand this is what we think about it now what we want to do is we want to think about how a particular human would think about is how a senior engineer would review right so that's what I told is write down every single thing which a particular person would do right so before we do literally any technical part is when you're designing something which is looking genuinely hard most of the times names is just how brain has we have already solved it in the real world.

**41:38** · If you technically see what we are doing, we are doing okay, you can use this agent to find the PR. People were reviewing PR long back as well.

**41:48** · Prepare an agent that creates content.

**41:50** · People were creating content prior as well. Find create an agent that approves a loan. Okay, people were approving the loan before. We want to do one thing. We want to look at the already solved problem and redesign it to make it I mean efficient, automated or maybe where a human could actually just focus on what is judgmental rather than the mechanical part of it.

**42:09** · Right now they do four things in a native which which does not I mean if you just look at the prompt reviewer which will based on the prompt it's giving out the first one is bring the codebased context which is an amazing statement is whenever a particular senior engineer is looking they're looking at the knowledge base to look at what contradicts the past decision if it's something based on architectural style is something based on decisions which this particular thing has not been done then they reason across separate concerns.

**42:42** · There can be a security is it secure enough? There can be correctness. Is it correct enough? Is the test has it covered the test or not?

**42:50** · Whether a documentation passed, whether it is readable or not, each with a different mindset which means that they're thinking from a different different mindsets for reviewing a particular PR and then they stay skeptical which means they do not assume the difference is correct. They site the evidence which is this is wrong because line 40 can be null here not looks off.

**43:14** · It's not just about you know um saying that okay this assume the difference is correct. No they can say that this line can be impacted because that line can also be impacted. So we want to make sure that and and citing evidence is making sure that okay this can be impacted not something this looks off.

**43:34** · Nobody can review and fix it if it just looks off. It should be a very very good evidence across it. So if you think about it what we are technically doing we are saying bringing the codebase means the agent needs retrieval so that it retrieves the right codebase context from the whole repository according to what PR was made right so if the PR made so we want to look at the things which is similar but also look at where it can

**44:00** · also impact that code base then we something we have known as context rag and all which we'll discuss then it should reason across separate concerns Which means that we should not have just one agent to talk about. We should have a several agents such as a security agent, a test agent, a documentation agent, a correctness agent, four or five different agents, right?

**44:21** · And then there should be some master agent which will take all the concerns and put that into up and combine their results in so four people reviewing and then there's one orchestrator which reviews everything and then there's final one which combines the um all the agents output, right?

**44:39** · Then we want to \[clears throat\] say okay it stays skeptical and sites evidence which means every finding needs a rational and a confidence to say that this is why I said it. Now if you really notice we have built we have certainly did not say okay let's look at the context and all there was a thinking framework to come to this particular line the thinking framework was okay how

**45:02** · a senior engineer will review this is how we'll review so can we write that into a statement right for example there can be a security concern could this be exploited there can be quality concern is this logic correct or according to my database what's untested missing edge cases untested brittle a assertions coverage gaps the docs agent will do next. So there are four different mindsets which is looking at the same time right.

**45:25** · So now first we said that the problem from our architecture is we're looking for something that actually selectivity which means looks at the high value findings and optimizes for surface findings worth a senior attention and differing the rest which means less I mean high confident PR should be reviewed and uncertain should be given to the senior engineer. All right. \[snorts\] So in this uh L1 we say okay now what are we going to do?

**45:55** · We're going to say four specialist concerns born from how a human reviews. So we're having security quality agent security agent testing agent and docs agent.

**46:05** · Security agent will say that hey I'm going to test it whether it's secure enough or not. Call the agent where it matches my logic is correct and right according to my architecture design patterns writing code standards and all.

**46:16** · Is everything covered? Is there any missing edge cases etc. And can other people people read it and this is going to be how we will design our multi- aent system but now we are still not there now our next step was what according to our design template is mapping the mess is what happens on a PR today so a

**46:37** · developer pushes a comet then it opens a PR and then waits eventually a reviewer will notice from some notification context switches into the change so that it looks at the um um whatever the changes happen reads the differences sometimes pulls the branch to run it leaves the comment and then the developer it reads.

**46:57** · So what is happening is if you look at the very specific waiting is a pure and pure I mean cost and context switching which means switch the context into into the change. We'll talk about context switching. What exactly does it mean with the help of an example?

**47:18** · But if you want to look at everything a particular guy will do, you want to name two things is what is the trigger and what is the output. And trigger is very simple. A pull request made. So GitHub actually offers a web hook whenever a PR is opened and not GitHub emits a pull request.

**47:38** · So very precise because we if we just want to know whenever the PR is open so right we can just go inside it and pull out the code differences right pull out the whole repository and then pull out the uh comments from that PR guy and then use it for the review right so my input will be GitHub emits a pull request web hook when a PR is open the output is a single structured review posted back to the PR using GitHub pull request web hook with findings attached to the specific files and the lines.

**48:03** · Now please understand a very very important word is this the word known as structured is a very very very strategic work which means we are not just saying that hey it's a blob of pros or anything of that kind it is a list of findings each with a shape which concern raised it how severe it is where in the code why and how sure the agent is we are not

**48:32** · just saying hey this is wrong we are saying where did it come from traceability How severe it is, where in the code evidence citing evidence and why that is, the reasoning behind it so that we can ensure that this is the right reasoning and the confidence behind it which is the evaluation stuff is how confident it is so that we can choose to escalate this to human or post it.

**48:56** · So if you look at the first thing which is agentic type which means output will contain agentic type it can be security quality testing which concerns raised it which means what are the concerns was it security concerns was it quality concerns was it concerns then severity plus category what is the criticals if you have seen the demo critical or information for example um you know if

**49:23** · it is a security issue then it's a critical if it's just a normal docs issued the information that this is something which is already there right critical mind we are missing an edge case very important edge cases so we're looking at what is the severity so in a particular review which will come out of it which concerns raised it how much severe it is how bad and what kind of is and file line and the exact location

**49:47** · which means where it came from what is the line what is the exact location so that we can look at exactly where it is and confidence press rational which is how sure it is and why so that we can um first of all confidence which will uh drives the human review gate but what exact what happens if the confidence is wrong itself it say 90% confident that let's post it but suddenly we found out that oh it's not good so it should it

**50:13** · should have given to human so we should have the rational so that it also explains why the reasoning behind it so that when we review why it went wrong we should be able to go find what exactly happened which is basically makes the finding auditable and disputable and trace it back. What was the reasoning which was wrong? Right?

**50:32** · So if I generalize what we did over here is what is the precise trigger? What is the precise output and the shape of the object that travels between every component. This is the shape of our output which means what is the agent type?

**50:47** · How bad it is? what is the exact location and how sure and confident it is and why right so if we carry our architecture after mapping the mess is the trigger is the GitHub web hook web hook will say hey here's the PR the output is a structured review and the unit that flows through the system is a finding is output with the agent type the severity the category where the files confidence and rational All right.

**51:20** · So how do we think from the industry standard? So if you think about what current people will do is they will just use the difference of the code. They will have the LLM verify the difference and then they will put the comments out.

**51:38** · But we just identified that we want to be able to do several types of reviewing automation. That does not work. It's good for a demo. It it it go looks for a good demo that you lm is producing something. But there's no mechanism to it. First of all, we'll do several type of poor runs. The first one is llinters, which means it cannot reason.

**52:02** · So do we do we use llinters? basically looking at pattern math syntax or style rules to lay to to to to make sure that we have a proper linting of a particular review which means um intent the logic and all that which means that it cannot reason about uh anything it it can just look at whether it is consistent patterns and styles or not even reasoning about intent logic and whether it just there's no semantically.

**52:29** · Then you have another type of review automation is static analysis which is data will flow and the type analysis and then it finds the real bugs. Now it might put out anything which means that it might give you that you put several test cases and it'll find some real bugs which is an extremely good one. But where it will fail? It will fail high false positive rate no codebase wide judgment and cannot read the documentation. We just note that there is some bug which is still people might be doing.

**52:56** · Then we have another type of automation where we single LLM review which means one prompt judges the whole difference what will happen in this pause the video and tell me one mindset for four concerns no grounding in the repo and hallucinates with confidence we don't have any auditing we don't have um um you know it there is no um there is just one agent

**53:19** · which is thinking about from four different angles it's just one one guy so as you know if you give an agent too much of work it won't perform well it does not knows about anything about repository it will hallucinate because the context will get big bigger then there's no auditability there's no observability so the another agent is

**53:35** · agentic fan out can we fan out and fan in this is known as this is one of the agentic design pattern which is known as fan out and fan in pattern what does it mean that you roll out a specialist agents for example to review a PR we are rolling out four different specialist agents security docs tests and quality and then we are fanning in the fanning in means that okay we are combining by an aggregator a aggregator. So this is the system which which I want to use. Of course I can integrate this. Of course I can do this. Of course I can do this for any small task.

**54:06** · But this actually stands out. But what is an issue? We wanted to be able so that it can orchestrate well step by step. Make sure that is reliable. Make sure that it's secure.

**54:17** · Make sure that is I mean failure proof.

**54:20** · Make sure the retrieval is nice. So we need to design a retrieval system accordingly. make sure that we store the memory somewhere etc etc right so the way that we carry out is we'll be carrying out a parallel specialist not a single prompt right okay then the grounding problem and again we are talking about we started with saying our senior review agent and then we figure out okay now we are what what we're doing we're mapping that every component so that it can actually um um writing the solution for it.

**54:52** · So what is a grounding problem in the mess? We saw a senior reviewer does not have this problem because they they know the repo, right? Because they already know the repo, they have the context and everything. So if we give our agent a particular situation which means um um you know a a difference of the code, right? Can we give the full repository in the prompt? Which means can we give that agent of my full repository?

**55:24** · Absolutely yes definitely we can give but we cannot put our full repository in the prompt. So what we are technically doing we're saying can we give this ability for our agent to know my repo before even it reviews. So if we put out everything in the prompt that will exhaust the context window and it will pull out an extremely bad thing.

**55:46** · So what should we do about it? The answer is retrieval. Which means for every difference, the difference is basically I will again explain what is the difference. Difference is basically what you have added plus code or a minus code compared to your actual repo PR I mean rep repository code. So you see that plus green signs and minus red signs. So that is a difference for for that particular review. Can we fetch only the most relevant slices of the code base and put those into the prompt?

**56:19** · This is also known as the context engineering. And we'll talk about this in detail. How are we putting it? Okay.

**56:26** · So, can we do this? So, the grounding problem is solved. So, what we are doing, we're looking at every specific problem from that mess and then we are solving it. So, retrieval is what will turn the stranger into the colleague, which means hey, it is going to give you the ability.

**56:43** · Now what and you obviously know this right? Now what kind of review or what kind of memory does review need? For example, we said that we want to look at retrieving the context. The grounding problem said we want to retrieve the context but it can be a multiple. For example, if you think about from the engineer perspective, the engineer can have a multiple memories.

**57:06** · It can be semantic which means the codebase itself which means the functions the classes etc etc which is right now conventions architectural records and all it can be episodic which means past reviews what was flagged before what was disputed which means that before this PR something would have happened and there can be a procedural review pro procedural memory right which means how this team like things done which means what is the convention it's like a procedural memory in general.

**57:38** · So for the semantic we want for the codebase we want a vector embeddings in the similarity search so that what we can do that we can um whenever a code base comes in we can just compare the vector embeddings with our codebase embeddings and pull out the best ones episodic we

**57:58** · want a timestamped relation rows we'll talk about the memory again in detail when we design when we do the data data engineering flow because data engineering is going to be the very important part that is the next part after the first principles but Time stamp relation knows that at see in 2021

**58:14** · we could have done this but recently 2022 we would have done this right so you want to look at at this after this point of time what has happened what what was flagged so that it can know about my episodic memories and then procedural for example I like to eat dosa right is a I mean sematic okay this this this this person likes to eat it's eats it's dosa because this has a protein and all And frankly speaking, I'm going to continue to \[clears throat\] have this right.

**58:43** · Similarly, it's a very small and high priority that how I like things to be done. I I like to think about reviewing a PR in this particular manner. That's my procedural memory. So every time a new different a PR has to be reviewed, we want to make sure that we are context engineering it right using these kind of memories right here.

**59:03** · So what we are saying we are saying we are semantic memory wants similarity search over embeddings which means a vector store so that we can pull out the best ones best code which is similar to what we want. Episetic memory wants a timeordered curable rows and procedural memory is small and structured which means facts and the rules and we have to write it.

**59:29** · So we need to figure out where are we going to store the semantic where where are we going to store this episodic and where are we going to store the procedural data engineering is the most and important part of the whole system. So if you think about there are three types of data shapes. The first type of data shape is itself is our semantic episodic and procedural. So we want a semantic memory of the repo which will have our vector vector store. We'll talk about what text stack and what we'll be using.

**1:00:00** · Past reviews and findings want a relational shape which is timeordered stuff which means basically timestamp relational rows. Then conventions and decisions want a small structured shape which can be again. So we'll discuss about this again when we design the databases.

**1:00:17** · All right. So how do we trust? Basically when we talk about a human it's very obvious that okay you know they have a you they they say that okay at this line at that line so suppose the agent posts a finding this endpoint is vulnerable to SQL injection conference is 60%.

**1:00:40** · a developer disputes it. Now what if there is no record of why the founding was raised, which context was retrieved, which prompt version ran, what the model returned, what it costed, we cannot defend itself. We can it cannot be debugged. It cannot be improved. If something can be measured, something can be improved.

**1:01:01** · But if we don't have which context was used, what was the version of the prompt, what was the model which was, what was the embedding model, what was the retriever which was used, what what happened at that point of time, we want to trace it all along. So we want to make sure that we want to improve the system. So we want to audit which means without which is trust will require third thing beyond reasoning and grounding known as proof.

**1:01:31** · Which means for every action the agent takes, every span of work, every LM call, every tool call, every decision, it must be recorded as an event in a time order durably which is one of the part of our observability plans and see I am I have not told you why observe the word observability directly.

**1:01:54** · You have felt it why it was required and that's what the beauty of feeling the problem and then doing it. Now the single stream of events is what powers three things which is a trace viewer. We should reconstruct any review end to end. If it has reviewed anything we should be able to know what it did, what it retrieved, the way it did every single trace. We should be able to have an audit trail. It should be able to defend or dispute any findings.

**1:02:18** · And we should also have a economics which means how much it is costing to run the entire system.

**1:02:28** · cost economics while I'll have a separate designs coming al together in future talking about economics token optimization how to design by keeping the token optimization in the mind how to design by keeping the uh cost in the mind how to so here we are designing in a very structured format and see it

**1:02:47** · depends on the business today business says cost is not a problem so your idea should not be on the cost but let's say tomorrow somebody comes and tells say a cost is going to be big problem so even though you design the system you'll design you'll design another deck talking about this is how we'll think about after designing the system okay now this now let's design a system for optimizing our tokens which is caching

**1:03:08** · and all that which is one of our thing which we'll talk about in the later phases I mean not in this particular design maybe in the future designs we have a lot of designs coming which is uh which is going to be amazing okay so we want to have an event spine

**1:03:24** · so that we can trace everything so what technology we can use any observability tool we'll talk about that in a bit which means that we want to make sure how much is costing what is the audit trail how do we trace it that is the fourth data which is which is time series in a particular shape we want to look at every single thing carrying cost latency confidence and outcome so that we can trace it now if you need to trust it we will be al also figuring out when not to trust it because if you remember our problem problem was we want to make sure that our agent does things right.

**1:03:57** · So when not to trust it. Your level 0 said L0 said that system should be selective. L6 gave it the confidence field which we trust and prove which is how much confident it is. Now if we say okay anything beyond this confidence we'll put this to a particular human. We'll put this to a particular uh escalate this to a senior reviewer. So if the confidence if there is no critical the action is post automatically post the review automatically.

**1:04:26** · Maturity owns the autonomy even even initially if the confidence should be at 0.6. So anything below 0.6 you want to go ahead and um you know put that as an uh escalation that's fine but over the time it should mature. Confidence below threshold which is route to a human threshold approval queue. Any critical finding escalate which means literally escalate any critical findings.

**1:04:51** · Developer disputes are posted which means the posted finding is not correct which means record the feedback which is reversibility and learning loop. It should also learn and then improve over the period of a time if somebody disputes that the agent answer is wrong.

**1:05:08** · So we will implement the HRTL gate which is human in the loop. Then we have also discussed there are multiple failure modes. What if the hallucination happens? So for hallucination we have the grounding so that we have the right retrieval we have rational and then we have the confidence. So we are trying our best to not get this failure. Then we have this tool and API timeout which is retrying with back off. Then we have circuit breakers.

**1:05:33** · Then orchestration deadlock which means the aggregator waits forever on a hung agent which means our parall agents four agent they are not giving any output. So my aggregator is waiting. So there should be a timeouts on every node. Okay. So that it should time out after a certain point of time. You have always seen how the timeout works. The almost right problem which means the finding 90% right but subtly misattributed. So we'll be having again confidence threshold HITL right here as a defense human bottleneck.

**1:06:03** · The approval cues grows faster than the reviews clear which means this we should have the escalation rate monitoring on the event spine. If it is too much of escalation which means that my agent needs to increase its intelligence. So we'll be having that monitoring so that my escalation is not too much and we should also do capacity planning if at all.

**1:06:22** · Agent learns a wrong preferences from a few disputes. So minimum evidence threshold before acting on a feedback which means some feedback was given from a wrong engineer but later not every feedback is good. People say right do not take every feedback you should take what you what makes sense. So we'll be having evidence threshold before acting on the feedback and then which is which is the invariant cap which means let's say that GitHub tried once but it failed but then it retried the the the another time which means that it can post two reviews at the same time.

**1:06:52** · We don't want two reviews at the same time. If the reviews are similar, if if two reviews are same, if it is not already into in into our system, we will not go ahead with it, which is we want to ddup ddup before posting, which is making sure that we are not retrying on the same web hook, which is the reliability layer, which is retries, circuit breakers, item treny, ddup, the arguator, everything mapped to the failure mode.

**1:07:23** · Please understand I have not told you why reliability is needed.

**1:07:28** · We just talked about the problems solutions came automatically.

**1:07:32** · Okay. So finally we're getting towards the end of the first principles and I hope that you're really getting it before we even think about designing our data layer. What we said is a pull request triggers the work. It is incued because the trigger must be acknowledged. I'll talk about what is it.

**1:07:50** · It is incued because we're just saying okay it should be looked from the GitHub PR GitHub web hook sends it we store it somewhere we'll talk about this is very very important statement in a bit after the data part we'll talk about this statement an orchestrator fans out the work to four specialists which is running in parallel known as one of the design pattern we are using is fan out and fan in each specialist is grounded by retrieval over the code base so our

**1:08:19** · um we are grounding it using retrieval uh design because it will not hallucinate because if you don't ground it will hallucinate that's why the rag was invented the code base the past reviews and the conventions are three kind of memories which means that we have three data shapes by which we should be grounding it each specialist returns a structured findings with confidence and rational then aggregate

**1:08:42** · mergers merges then and dduplicates them and computes an overall confidence then it applies whether it needs a human or Then posts automatically when confident routes to human when not. Then every action along the way is written to an event spine so that we can trace everything and the whole thing can be traced and audited and priced. And then we have a reliability layer which keeps step degrading to slower but correct path.

**1:09:08** · Right? So we talked about three important databases which is memory. Oh sorry we have three different u the memory semantic episodic and procedural.

**1:09:23** · So here the code base the current code base the past reviews where we'll store the past reviews and the conventions which are procedural memory. So where shall we store our these kind of data sets in which data data shapes and how do we design our data layer and this is going to be another important part and we'll interrogate which is you might be obviously telling okay for for storing

**1:09:48** · um um you know our codebase we'll use probably some vector store then past reviews we'll use some postgress um using time stamp then for conventions we use another one you might be noticing that it's a huge problem there which means okay four but why for it's it it looks good okay we'll be having four different stores they all had very nice capability but what happens is a lot of times as I already told you is

**1:10:13** · each comes with reliability security management you know maintenance and all that if one fails everything goes gets gets round the way so how can we minimize fther from the failures perspective that's what we're going to work on so we'll talk about that uh with you can just see quickly what exactly we have built we have talked about till now then now if we have the principles how

**1:10:38** · can we design our database and we'll be using of and how do we select a particular technological stack and then after data we'll talk about how do you ar I mean assemble all the architecture which we thought about it all right so now we eventually went through our first principles understanding and how to think about the problem.

**1:11:02** · We need to eventually come about data engineering and we call this data models and and you can call this any type of shapes because we talked about one of the most important layers in our problem and in in in in our system is how do we store data? Where do we store data? We have several types of data. So where do we store that? Right? So we'll address that data model and then eventually we'll try to assemble it using an architecture. So it'll be pretty short but I'll take it ahead. So with respect to what we want to do.

**1:11:34** · So basically we saw that agent has over three steps uh stages in general. The first shape is our memory. Now if you look at that memory it has a chunk of code and past reviews and conventions that will help the agent understand a new difference. So basically anytime a new PR is made it needs to look at the chunk of code or something which is uh which it can call.

**1:12:02** · So let's say if if a new PR is made right it has some code it want to pull out all the related code for that particular or anything which is related to that particular code right from your repository. It needs to take out all the past reviews or conventions which might be related to uh you know those kind of um um we call we can really call that as a I mean searching for the right memory from your vector database.

**1:12:35** · Now the second one is the truth. Now the truth means is basically over here is the findings. Basically, let's say that you made a PR and then your AIPR review agent is reviewed that particular thing.

**1:12:48** · It should be able to store somewhere, right? It should be able to store store what was the GitHub review ID, what was the if it was escalated to a human u you know it was escalated to a human and eventually uh you know the findings and the GitHub review and any human decisions and third is the time for

**1:13:09** · every span because we want observability for every time we should have every span LLM call what is a tool call the cost the latency and the decision which eventually happened into that uh eventually to debug if something has happened and and and from you from our design model you understood why observability was super duper important. So these kind of things which we ultimately want to store.

**1:13:31** · So there are three things which we ultimately thought to that there are three shapes basically the memory the truth truth will be the one which eventually once our agent does something it should be able to store somewhere so that we can continuously uh audit and eventually see the reviews and pull it up in a front end or show it in somewhere or maybe use that for a training purpose. So the memory is we are we are we you know you can use somewhere like something like QR and and or any vector database what it does it embeds the code for semantic retrieval.

**1:14:04** · So it uses some LLMs for the embedding and then it embeds the code chunks so that we can retrieve it semantically and then there is a different shape known as truth. Now what does that mean is the postress. So basically for truth data data shape we might be end up using the postgress uh where you'll store the reviews findings human in the loop rows or github ids. Then there's a third one which is the time.

**1:14:29** · Now here you'll store your observability things for example spans lm calls tool calls cost latency etc etc.

**1:14:40** · Now if you understand that you will be okay go ahead let's create a three different data sheet. But in most of the time we try to overengineer something which we should not. For example for this PR what code did we you know retrieve what review did we produce and which model calls it expensive. So if you want to answer this one particular question for this particular PR we need to go ahead with three different stores.

**1:15:08** · The three different app has to query three different systems and then stitch the answer together in Python. Now what does that mean? That I mean it depends on your architectural style. But the cost of doing this is the more you introduce the uh I mean app I mean overall um issues basically more data shapes and more databases to be used into this. The more connections pools you need the more backups you need to have. For example, what if Q run fails?

**1:15:39** · What is postgrids fails? What is what is your one of the data data shifts fails?

**1:15:43** · What if something does not happens? What when does the row gets corrupted? There can be multiple failure modes for the same thing. So for simple question, we are having three different maintenance overload to be still doing all of this issue.

**1:15:58** · Now if you understand the question that is obviously is can we keep the three shapes we don't want to compromise on the shapes which we want but instead of using three different I mean u and and and still not be able to split them between three different durable database.

**1:16:20** · Can we put it into some current store which can handle all three data shapes all together on its own rather than having three different data store per feature now obvious answer is you'll think okay which database is more popular but we don't want the database which is popular we want the one which contains all three I don't want post I want all three reflexives stored all three data shapes into one database

**1:16:47** · itself So we ultimately decided to go ahead with tiger cloud. Now tiger cloud is what it will eventually help us to give a managed postgress compatible database and then we will add the extensions which needs for AI memory and time series agent because it already has the uh you know I mean postgress compatible database.

**1:17:13** · It gives us a manage poss compatible database and then we can further add our couple of more important shapes such as the memory and the time and frankly speaking tiger cloud eventually does that pretty beautifully.

**1:17:33** · The first one is which we needed is vector search for the memory. So as I say that we we are looking for something which can store our semat our code embedding. It should embed our code our main branch and then put it up there so that it can so anytime a new PR comes in it should be able to pull the relevant code and then give it to our LM agent.

**1:17:54** · So PG vector can actually help you help your Postgress to store that list of numbers in a real column. The column is known as code chunks. Let's assume that this is a code chunks which is embedding which is the embedding of this particular content.

**1:18:11** · So our entire code file will be embedded.

**1:18:16** · Now whenever a new PR let's say a charge customer adds I mean comes in it will look at all the things which is closest to this particular PR and then it will take out the one and I hope that you understand how does rag works and I'm I'm I'm not a big fan of teaching you uh rags right now because if you're watching this video I assume that you have understood a little bit about the rag but what I'm saying is it will pull

**1:18:38** · out all the relevant one which is very closer to this PR so that it has the right context rather than taking all the context from the from the back I mean everything code at once which technically you cannot you only taking the one which relates or which effects or which gives the logic.

**1:18:53** · Now a lot of time you know what happens that the your code file can come in millions and billions of embeddings if you're really working on the real database. So the point is okay how do we make it efficient? So PG vector itself I mean we have a PG vector scale from tiger data itself which eventually is like a fast librarian. what it can do it can quickly give us the right set of you know uh the to the embeddings right away it knows where it is.

**1:19:21** · So PG vector scale is an advanced version of PG vector itself where it can actually add an index so that Postgress can find a nearby vectors super duper quickly and that's that's one of the favorite feature which I particularly like of of

**1:19:37** · tiger data and I've been working for with with it for a very very long time and then it has and and if you want to know more about the architecture and how it is built feel free to go to the documentation they have listed very well then then we are adding the disk ANN I mean it sounds complex but let's say that when there are millions and millions of code chunks you cannot search for every I mean shortcut in the RAM forever.

**1:20:00** · What it does disk N&amp;N gives the search structure on the disk and SSD itself and still helps you quickly towards the closest matches.

**1:20:13** · So what it is saying what PT vector scale and discan is doing is because your code can get in millions and millions and millions of lines and millions of embeddings. These two particular feature can actually and these two particular advancement can actually help you out into getting the right embeddings super duper quickly.

**1:20:35** · So we had another shape known as time series which is basically where we want to store for example for this particular chunk we our security agent reviewed it started the security agent called the LLM the cost was this and security agent ended for this particular chunk then for this particular chunk the quality end started it it called and it ended so we

**1:20:57** · want that kind of time series data so we can audit it or we can have the observability we can we can figure out when the LLM call was happen how much did it cost how long did it took what decision was made etc etc etc so tiger data itself gives something as hyper table which can store them as a time chunks behind the scenes now for example it does it looks like a

**1:21:21** · you know a nice little you know uh table for example something like this which is agent events hyper table but in tiger that actually helps you I mean tiger data can actually store as Monday rows Tuesday rows and today's in a separate chunk internally. This is how it is going to be stored and that's becomes another powerful data ship itself.

**1:21:42** · Notice that we are not creating a new database. We are having just one, managing just one and then you just have to design your failure modes around this itself.

**1:21:52** · Now let's say when the dashboard asks for the last hour, it does not need to look for the entire database. It can look at the decent chunk instead of driving the whole history. Amazing point.

**1:22:03** · Then we have a dashboard should not be able to call raw events from scratch every time it calls. If there are 10 million LLM calls, we should be asking what did we spend today? Should not scan, we should not scan all our, you know, 10 million rows on every refresh.

**1:22:23** · So we need to have those dashboards, right? We need to be able to quickly understand instead of going to 10 million rows, we should be able to quickly estimate what did we spend today rather than going to the 10 million rows. So eventually tiger gives something as continuous aggregate is that continuous aggregate is eventually a summary table that tiger keeps updated for us. The raw rows eventually goes in the agent event.

**1:22:47** · So this eventually becomes super duper big in millions and billions and you know overall data we should not be able to score and then figure out how how many of we did we eventually have this continuous aggregate all the period of a time such as cost per minute the P95 latency

**1:23:05** · the tokens total or any such matrix you want to store now the budget card can read your summary first so basically if you remember we said we don't want to cross a certain budget the economics of building an AI agent. So instead of looking at the whole table they can just look at this particular continuous aggregate and say okay if it can just read the summary and say if the today's spend is already above the limit it will block your LLM. It will not let it go ahead.

**1:23:39** · So it eventually gives us one durable database, one backup story, one place to query and one identity that connects memory, truth and time. So previously we have three different dur database. Now we have one store where we can store using PG vector we can store all the chunks events which will eventually help us to store the time time series data

**1:24:01** · for the u you know the observability and then continuous aggregation and agent health and PR cost so that we also we we can monitor our thing very well and even our agent for economics task they can come and say okay did we not cross the other thing or not that's right okay perfect Now we also have something known as Reddus. Now Reddus is basically we'll talk about this Reddis but Reddis will stay because eventually we want to skew our jobs into Reddice itself.

**1:24:34** · So if you want to go ahead so before we start and I will also have to make you do this particular thing. So you can go to any link and then you can go to the link which is provided. The Tiger Cloud can actually give you $1,000 in credits and can you can still to use it for absolutely free for your project task which shows the enterprise level project and the product which you ultimately going to build and frankly speaking Tiger Cloud is only used in a lot of the enterprises and if you put this in a project it's going to be looking amazing.

**1:25:02** · Now you have to do these steps but ultimately I will also when I'll show you that okay if you do not know how to do this you'll how how you can instruct your coding agent to be able to tell you what it requires from your side

**1:25:17** · okay so feel free so you'll be ultimately looking something like this what is your tiger database what is your open AI key and all that we'll talk about what is web hook secret and private keys in general so feel free to read your schemas the way the the the way it looks But now I want to talk about I mean why tiger cloud eventually we are using.

**1:25:38** · So instead of plain pro pro I mean posgress if you were just about to store enough reviews for review road and findings we should quickly use postgress but we also need a fast vector search over code embedding and efficient time series queries over millions of agents events.

**1:25:58** · So what it does tiger cloud keeps the postcris programming model but ads such as time scale db pg vector and pg vector scale that can actually help you to be efficient be time series and over and and and be and do the fast vector search in general and that's why we are using this one and one of the greatest thing which we can use this is because enterprises also uses this and the reason why we are using cute and tig cloud over cuteant is because the vector search is not the ly question this agent asks.

**1:26:29** · A PR review needs vector similarity plus repo filters, freshness, exact identifier matching, review records, cost records, and audit history. Which means that we want to be able to keep this everything at once. We need to be giving everything at once, which means that the the the the retrieval result can live beside the metadata and the review trail ultimately or hyper tables and all that thing.

**1:26:57** · Then you have this disc dis disc I just discussed when you have a millions and millions of thing this particular algorithm eventually helps you to index more of the code bay I mean your your index on SSD while still returning the closest neighbors quickly that's why we're using PG vector scale for large vector memory which eventually the other enterprises uses it and as we discussed

**1:27:20** · the hyper tables and continuous aggregates eventually help us to one is to internally maintain the overall chunks where we can trace it back and one continuous keep us updating and aggregating the summary of tables such as cost per agent latency percentiles tokens and per PR cost.

**1:27:42** · So now once it makes sense I want to go ahead with architecture and I will combine every pieces we talked about and then we'll straight go in how to work with coding agent to be able to code this entire architecture. we have everything to architect and assemble all our thing.

**1:28:03** · So basically the first step which I talked about into my mental model is that there should be some trigger and then there should be some mess to fix the workflow and then there should be some output.

**1:28:22** · So to think about it into these kind of systems we want to have a trigger. Now where is that trigger comes from.

**1:28:30** · If you understand the trigger is basically as soon as somebody creates a PR our EIPR review agent in that particular PR I mean repository should be able to go and write a review. That's our trigger. So technically how do we think about it? So if you search on GPT or anywhere you'll eventually figure out that a GitHub web hook will arrive will get validated and then it'll be cued.

**1:28:56** · So we need to create an ingress handler so that it ingests the PR and then eventually says sure. Now let's understand in a different way. Let's say that you know you have and and this is for the people who do not know about the GitHub web hook. Let's say the PR gets opened. Okay. Now what you do you first of all ingest it and you you'll think about okay how do you ingest it?

**1:29:19** · So whenever you take something whenever you take something you want to make sure that you're taking the right order and if you're from taking it from Amazon you're making sure that it is collecting the right order right you take the order that's it now you close the door and then you do anything else but first of all you take the order make sure that it's from Amazon and then you close the job we can talk in justest into that similar way similarly if you want to make sure that GitHub webbook is Sunday GitHub webbook will send everything it will send PR it will send like It will send stars.

**1:29:51** · It will send every single event which happen into that particular repository. But what we are interested in is we are just interested in PR. So we want to make sure that we were only taking the pull requests. So what it does first of all we want to verify that that particular thing is coming from GitHub.

**1:30:10** · So we will take the signature on the payload and we will reject any or or anyone who is trying to forger before any work and by the way this is one of the security thing where we are ensuring whatever is coming to make sure that is coming from GitHub itself and nobody is exploiting our system then it checks the item potenti key or unaltered key I cannot pronounce this item potenti but there's something synonyium known as unaltered.

**1:30:40** · So this altered key which is basically a retry delivery is basically acknowledge acknowledges and dropped together. It's like verifying your GitHub signature on that payload and your key which is an unaltered key. It's like your OTP.

**1:30:59** · You're verifying both of it which basically is one of the defense so that nobody is basically I mean messing up with your system.

**1:31:11** · and then it will encue the job to radius. And if you don't know about radius while I don't want to take the class of radius right away, but it's a but but inq is basically uh a process of adding a I mean a kind of a new item to the back of the data structure that follows first in and first out which means it's like okay FIFA principle. So it's like adding whatever the things comes from if they're new keys it does not acts in front of them it adds after that.

**1:31:39** · So that if the new PR switch is already there, it does not comes the next time. It is already already there.

**1:31:44** · So it eventually adds cues a job that okay this is the PR which has to be reviewed where it does in Reddus ARQ. Now now if I'm I I don't want to take a I mean session right now in what does and and what you mean by I mean what what why are we using Reddis? Why are we doing this?

**1:32:04** · But basically Reddice is where we'll store our all the job and it's it's like a scratch pad where every time a PR is made it will get stored at Reddis plus ARQ which is ARQ stands for the like something like automatic repeat request. Now what is automatic repeat request is basically an error control protocol which is used in in in in in you know um this networking to make sure that there's a kind of reliable transitions towards unreliable channels.

**1:32:37** · So what it does it it's like accepting the receiver send acknowledgement so the sender can retransmit or corrupted packets. Now the way it works is very very simple. If I want to understand if if I want you to understand it's basically telling okay as soon as the GitHub PR is made it is going to take okay I'll match first of all that is truly come coming from the PR by matching this signature with the item potenti keys and then it will put that

**1:33:06** · up into it will put that it will cue that job into radius and immediately return to GitHub says I'm all right I have received the PR request that's it and the GitHub says sure close the Now the reason why we're doing this and I want to think about it a little bit is why are we doing this particular is why

**1:33:27** · we cannot just take the PR give it to the LM and then directly um you know give it back to your GitHub agent why are we using why are we queuing our job to Reddius now in real world you know what happens first of all you know a lot of PRs will be made so there will be a lot of Q so you'll say okay we'll increase the number of workers we'll work on it but but but if If if you think about it, even there is a bigger constraint. The constraint is very simple is GitHub webbook expects a fast acknowledgement. You should truly say yes, I've received.

**1:33:59** · Yes, I have received in about 10 to 12 seconds. I'm not sure exact number of a time which it waits but for the acknowledgement but you have received we should be able to immediately return because if you wait for your ll to complete it will take more than 30 to 40 seconds and GitHub will throw an error. So we're going to say yes we have received it. I'll come back to you once I have something ready and then you can and then again we'll queueing the job and then it'll be coming and then it'll be publishing up there onto that PR.

**1:34:29** · But the reason why we are doing that is a GitHub PR is eventually comes in it ingresses we have then verifies it cues the job into radius and then it that PR goes to the orchestrator. The reason why we are doing that is again because it is so it it asks for a I need to acknowledge fast

**1:34:49** · and sometimes you know a crashed orchestrator and and or any delayed or orchestrator eventually you know u may not be able to satisfy the GitHub condition because it expects the truly uh quick environment.

**1:35:06** · Now where does this break at 10,000 PRs per minute?

**1:35:12** · Now Q which which is basically the uh depth is basically outgrows the worker drain rate. A single ARQ worker basically the worker which you have which will do the working job will become the quick bottleneck.

**1:35:30** · So what you're doing though we are using the modular monolith answer is extracting the web hook receiver as a stateless ingress service and then the orchestrator as a separate worker pool.

**1:35:45** · So basically there's one receptionist who will keep on saying hey sure give me the order hey sure give me the order hey sure give me the order and store it into the red job basically redis database and then it has a worker in the back end which you call this an orchestrator worker which has a separate worker pool in the back end. So, so basically one by one this receptionist will keep giving to that to that particular u chef to create the food to build the food to cook the food.

**1:36:14** · So just imagine if you just have one sim one guy who's taking the orders and then building the same food he will mess everything up. So there's one receptionist that's why we have a model architecture where it extracts the webbook receiver as a stateless ingress machine or service which stores something in reddis which is arq and then this gives one by one to this orchestrator which is a separate worker altogether.

**1:36:43** · So what does this orchestrator does? So we are using an orchestration platform known as langraph. And I want to think about it a little bit. Why are we using Langraph as an orchestrator system or as an orchestrator system? So basically the orchestration engine it defines the workflow as a directed graph of nodes which is functions of LM calls and edges which is what runs next.

**1:37:08** · So the design pattern we are using here is here we have four specialists right four specialist who is reviewing my code. So if you think about it, it's a quality security testing and basically this docs agent which is eventually doing from a different different perspective. So are they dependent upon each other?

**1:37:29** · Obviously not. So what does it make sense to use basically a good design pattern agentic design pattern for it is basically fan out all your agents parallelly so that everyone can work parallelly because nobody is dependent upon each other my girl. Okay? Nobody's dependent upon each other each other. So it it it it eventually fans out and then then there's one accumulator which accumulates all this all the four workers.

**1:37:59** · So if I show you the way it works is the orchestrator eventually have these four agents security quality test which is running in parallel and then there's an aggregator which merges dudoop and scores and then routes it can either choose to go through I mean uh it will first of all go to the confidence gate if the confidence of review is good it will post on github otherwise it will give human a loop right now the way to

**1:38:27** · think about it is that there There were two different uh you know uh orchestrator which we had to choose. The first one was the lang graph and the second one was temporal. And again we are choosing this because it makes sense. Now where for example if you want to use lang graph where it runs it runs in our python process itself. It does not needs an extra infrastructure which you're coding. A temporal is a separate servers all server altogether. So that's why we are not going ahead with that.

**1:38:56** · If you just want to use parallel fan out because that's a selected design pattern a langraph vig is a first class via the send API basically there's one behavioral pattern which is already there in langraph but in temporal it is supported but is heavier to express

**1:39:16** · if you want to checkpoint for if you want to uh checkpoint to the same radius basically we want to condition to keep on checkpointing while but temporal actually have a very strong guarantees and built-in for the checkpoint so we can start where it failed but lang graph we want to checkpoint to the same radius we already run for the queue so we want to keep on checkpointing there itself the LLM

**1:39:39** · integration is the uh I mean langraph was built for these kind of things so it has an amazing tooling integrations but temporal is very generic it is not LLM specific it is built for creating workflows maturity is okay langraph is new thousands of this unproved But temporal is very very very enterprise level. It is excellent at scale. Operational cost is none beyond the app. But here you need to manage your own server. You need to understand your own work for work workflow shapes etc etc etc.

**1:40:10** · So for right now for our worst case we said okay let's go ahead and use langraph.

**1:40:18** · But does that make temporal a bad candidate? Absolutely not. It depends upon okay for the MVP development we may use langraph. But if at some point of time we feel that we want to use temporal, we should without thinking should be able to switch to temporal. So another major decision our code should not be framework dependent.

**1:40:41** · We should be creating a single safe intercept. Basically a discipline that makes it safe is a single abstract interface which is workflow engine which is an abstract class which has run the workflow resume the workflow and get the state of that particular workflow and then you're extending this abstract class to any implementation which you want whether it can be langraph temporal or any other orchestrator which you want to use.

**1:41:09** · So let's say if the scale demands that you look at temporal after MVP then you quickly extend your workflow engine no code changes because you have not built your entire thing on your langra I mean lang graph you're just going to add a new class of implementation of temporal which is going to run three different stuff which is run resume and get state which is going to extend these three methods and then we can use temporal at that point of time. So the idea is is always and always make sure that you're trying to not make it framework agnostic.

**1:41:40** · You're trying to make it framework agnostic.

**1:41:45** · And as I said that this is what the architecture eventually follows. So this is what our orchestrator will eventually do. But we also need to do the retrieval design because we need to set it up with the right context. We need to set it up with the right context. Now just wait for a second and I want to think about one thing is the design of the retrieval and whatever agents which you're doing it is not perfect.

**1:42:14** · We might have a separate se separate videos courses on how do you design state uh state level agents how do you make sure that you perfect the quality of the agents. Right now our goal is to create end to- end system as an MVP. So that you know but each problem when you say even a single security agent what is the logic behind creating security agent? How are we managing state? How are we removing hallucination? How are you removing disambiguation?

**1:42:43** · How are you making sure that it is basically not taking a lot of time? How are you making sure that it whatever it is going to post is is not unethical. It is is is basically ethical, right? So basically even at high level design you go at every single aspect. Right? Now we just designed very carefully about okay this is how the ingest workflow should look like. In real world you end up sitting and then figure out okay how does my ingress system work? You design your ingress itself.

**1:43:13** · Now once you go to the orchestrator you'll feel spend a lot of your time in designing the logic of my security. How are you orchestrating? You may not choose to go with parallel. You may have a completely different type of architecture. Depends man. I mean that's why you do literature review. So in one of the videos which I'm going to work on is basically I'm going to show you that how do you make reliable agents where we focus on a specific specific agents and write the logic. As of now this is good for the MVP.

**1:43:44** · Similarly we want a retrieval layer. Basically, anytime our agent gets a PR, we need to be able to quickly retrieve the PR difference, get the embedding of that particular PR difference. Then because our code chunks are stored using ENN search and FTS, we should be able to quickly merge it and type please make sure TypeCloud is providing this. Merge this and then give it to the specialist.

**1:44:16** · So basically the PR diff is getting the embedding and this embedding is compared to all the things code which is available in the tiger cloud uh vector store. We are using disk in and in search and fts to be quickly able to identify the top k and merge those code chunks and then give the code chunks the related code retrieved code chunks to the specialist every single specialist.

**1:44:45** · Okay. Now to think about another thing is your every single agent events which is basically for our observability.

**1:44:54** · That's why I said we also want to make sure that observability is up there right there. So observability we are we are using time scale DB hyper table is basically a trace viewer or a trail and cost ledger. It should be able to tell us when the agent started and ended.

**1:45:08** · What was the call? What was the cost to it? What was the you know where where where does that issue happened? where the issue arised. What is you know you can also keep on seeing a rising rejection rate per agent. For example, every all the agents are keep on rejecting your reviews which means not every PR review might be bad right? So and you know you you say that okay something is going wrong but suddenly you also see the developers keeps on disputing your AI agent reviews which means that there can be so we need the observability up there.

**1:45:36** · We have already discussed in detail why we are needing observability but this agents events will eventually help us in getting the right observability.

**1:45:44** · So if you think about the whole system in general the MVP at least in the real world which you'll see is anytime the GitHub PR is posted we're going to ingress very quickly using fast API which compares their signature with with our with our unaltered key add a potenti keys and then says and then what I'm going to do I'm going to post that PR and store that using using in reddis using AR key and incue that into a reddis job and then the separate worker

**1:46:14** · please understand this worker will go and tell to the GitHub PR I'm done but then ARQ worker will pick one job at a time this orchestrator is lang graph it will fan out four different security four different agents that will aggregate it will show his confidence if the confidence is okay it will go ahead and post the GPR if the confidence is not okay it will put this human a loop so the human can go and approve and give comments ments and then further improve

**1:46:46** · and please understand the it is going to be deployed we we are deploying on railway in general so your tiger cloud and time scale da which is time scale db is a one manus post thread which means that you're going to retrieve the whenever the security because we're going to set the retrieve design right so basically the security agent needs the code differences so we're going to use PR difference this architecture embed the the the basic basic in and insertion keywords merge it and then fan out this specialist.

**1:47:15** · Similarly, we're going to use the PG vector scale this events hyper table will be going to be used by our observability dashboard so that we can observe it. So basically we're not I mean managing a different different databases we're just managing a one manage postgress database itself which gives almost all our ability.

**1:47:34** · For example in the economics and tokens in the phases we want to develop PR cost hourly. what is the cost right and then if it if it is beyond our current cost we may not go ahead with that right so this is the whole architecture in general now if I think about it if I want you to tell very quickly how I really want to build this architecture and I will tell you how I come up with these kind of phases the first is the cognitive design I always suggest to the people ship the simplest version first

**1:48:06** · so we want to ship something and then we want to write the system architecture here we have taken a true chance of saying okay we're going to use modular architecture modular architecture and then the ADR says like line graph over temporal we we we always

**1:48:22** · want that this particular confidence should go you know something like this so we want to store all our architecture decision records and then you have the back end and API front end engineering is basically a simple dashboard so that somebody can see which all which of the reviews were sent for the a hitq the back end API B basically our fast API which will validate our signature and id potency keys. The workflow orchestrator which will fan out the four nodes in parallel.

**1:48:49** · Then your LLM and reasoning basically model routing per agent so that it can route your agent and prompt prompt registry because you want to know which prompt was used. And you also want to make sure see what happens a lot of times we are also having a cont prompt of every agent.

**1:49:07** · Right now we want to make we want to keep an updating prompt or logic behind it. Right? So for example for docs agent we don't want to use opus model we want to use simple GLM 5.2 but for security we want fabel model. Right? So we we should be able to route our models right. So we ultimately saying okay that's one then we have a prompt registry which is basically one prompt was good in this and then we created another prompt.

**1:49:32** · So that should be also okay this is the version two of the prompt not override it so that we can also trace the decision back if something went wrong our memory architecture the pagon pg vector scale toolings basically scope I mean basically we should be sandboxing our thing evaluation we should be for

**1:49:51** · let's say that we are pushing the new prompts or new models or literally anything so it should be able to at least pass our golden data set which means that our new system should be at least better than the current system which is already deployed. That's what we mean by golden data set and regression gate blocks. Observability we'll be using open telemetry which will land in the agents even hypert and then we'll be ultimately able to observe and trace everything which is handled.

**1:50:22** · The basically for security we'll be having RBC enforced and audit trail immutable. For reliability, we'll be continuously inte implementing the retries, the circuit breakers, the item potency verified under fault injections so that we have a reliable model in general. We'll be having a separate session on how do you make reliable agents rather than a reliable software engineering and frankly speaking we don't have the knowledge of security reliability. That's where the power of our genesis kits comes.

**1:50:48** · So genesis kits is basically will give you all the required context to code with AI and give the judgment where it is required.

**1:51:01** · Okay, your governance, your developer experience, your CI/CD, your human loop and your continuously learning basically if the if continuous aggregates if there's something needs to be changed right away. So these are the few phases

**1:51:16** · which we'll be focusing throughout the project and frankly speaking I may do few of the phases and I will let you do most of the phases by yourself as well because the idea is if you know how to code and I will show you a generalizable version that you can literally code this entire project right so I'm going to set up a project architecture right now on the machine and then using Genesis kit and then you will see the power of Genesis kit right away so let's get straight into the implementation.

**1:51:44** · We will go ahead and we'll start the implementation.

**1:51:49** · Now what I eventually want is I have actually completed this project coded this project. So I will show you maybe show you few phases code in front of you show you the way to think about etc etc using genesis kit. Now what does genesis kit is? Genesis kit is basically basically the the the loop that prompt itself. You must have already heard about this something known as loop engineering.

**1:52:17** · You must be already heard I mean already heard about this harness engineering while coding with AI right this genesis kit is the framework developed by me and I would suggest you go to some antern.co and then click on blocks and look at I'll also put that in the description box below. There's one genesis which eventually talks about the loop that prompt itself and the structural reasoning is a missing piece of agentic AI.

**1:52:42** · These two blocks are the one of the most important blocks which eventually talks about how to exactly work and code with AI in general and how do we give the state to our agent. So

**1:52:58** · you will understand basically when I initialize this genesis into the project you'll understand this but what I want is if you can pause this video right now read these two blocks and then come back you'll truly understand what genesis is in the behind I want to show you a very quick thing and to show you that very quick thing we have something known as agentic sw kit now agenticsw kit is one of the skills which will help us to take the domain knowledge of something like security engineering reliability engineering distributed systems.

**1:53:28** · It will also I will put up some screenshot of it how it looks in obsidian but it has an enormous number of concepts stored in the LLM wiki ways so that it can explore the right concepts at the right time and it is natively integrated in Genesis kit itself. Now Genesis kit is basically that can actually help you to write plan every single thing for your project.

**1:53:53** · What I'm going to do, I'm just going to copy this entire full on boarding which is basically you don't have to do anything. You just copy your entire full on boarding right here. And then what you want to do is simply come come over here and you know let's say you open claude and I always like this dangerously I mean permissions and of course feel free to do whatever you want and just click on enter. By the way I am a big fan of Hermes. I'm a big fan of codeex.

**1:54:22** · I'm a big fan of I have all my agents running right now. If I just toggle this up, you can see all the panels and my codecs, my Hermes, everyone is working right away. And I I I frankly don't want to I mean I I just want to show using Claude, but this works literally anywhere. You want to use Codex, go ahead and use it. You know, you Hermes, please go ahead. And frankly speaking, I'm the big fan of using Hermes. I'm not a big fan of using claude. I mean a terminal or maybe even codeex.

**1:54:45** · But nowadays I'm trying to be very agnostic because a lot of my models are running on Hermes I mean where I'm using um I mean at least the um bedrock models basically uh open source models there and and most most importantly a kind of model routing this particular cla specifically because I have a subscription so I mean it just gives a generous and because I'm recording this in around 3:00 a.m. in the night so it gives a very generous and nobody's using so it just resets the limit by the morning. So that's why I'm right now using it.

**1:55:16** · But very rarely you will see me using Claude. Uh I mean their terminal and not not because I have any hate towards Claude. Amazing software, amazing stuff they're building. I kind of end up using something where tokens are less. I'm very consistent and very very conservative towards how much tokens I'm spending. I \[snorts\] have one simple rule. If you have generated one token, tell me what was the output of that. If you cannot justify the output, I mean dude, you out. That's that's that's that's my point of view.

**1:55:46** · And sometimes claude does does mis misbehaves and and a lot of time I can just use something like oppus to orchestrate and then probably use client and client recently is is giving a lot of free open source models at $5 a month and actually get lot of my work done using GLM 5.2 uh just having an orchestrator, right?

**1:56:06** · So what I also do is sometimes have let's say and if fable you know right now fable is available to all the people but you can actually use fable to be able to go ahead and uh as an orchestrator and sometimes and and then use GLM 5.2 to write the code. So basically you're doing a lot of things from a cheap price and I I mean at least

**1:56:26** · we'll have a different session on how do we optimize for tokens when working with AI and coding agents but right now Genesis does beautifully at giving you the right context the right state so that you don't double the code every time you start a new session you will be able to use the same project again and again you can start it you can collaborate with your team without losing the context without having the overload of the context without your coding agent hallucinating without coding agent doing whatever without making you understand we want to make sure that every tick which currently has a wall by work working with AI.

**1:56:57** · So first of all there is first of all I want you to understand that if you think that working with AI is like vibe coding no this is not vibe coding here you will take a lot of time in system design itself and then create few step and then eventually come to the cloud itself. So it's it's it's not VIP coding. It's basically how do you harness how do you design loops? How do you design debug loops? How do you design uh um research loops? How do you harness your model?

**1:57:25** · What are the guardrails are you having?

**1:57:26** · What is a token budget? How are you routing your models? How you know basically how are you verifying your model? For example, one of the things which Genesis has is a lot of times your model itself writes its own test cases.

**1:57:39** · But here it will not it will not write its own test case in general. it it will verify because why it's like why it does not write such test cases which is just one feature of Genesis kit is that it's like verifying or writing the exam paper for your own and then verifying your own exam paper you'll automatically write those exam questions which you're already aware of because the teacher creates it because teacher does not knows your reasoning but knows okay this is this this is the input and that is the output this is the test cases which must agree so what I'm going to do I'm

**1:58:10** · going to paste my uh entire prompt from the GitHub repository. And by the way guys, this is an open source repository. Feel free to go ahead contribute as much as possible. We want to make this popular. We want we want to make this a true state of working with any coding agents. No matter what coding agent you're trying to use, GLM, Kimmy, any cheap model, any expensive model, it should be able to use that. And feel free to start it and feel free to fork it and then create a new pull request.

**1:58:38** · We are happily accepting pull requests right now. So if you go ahead and and and and shift it but but before even that I just want to make sure that what model I'm using and I'm 100% sure that it's using Fable and yeah it's using Fable. So I I I tech I tech I technically going to use ous and what I'm going to do I'm going to paste this and I'm going to do a very important aspect over here.

**1:58:58** · I'm going to say can you please make sure that you are not not using oppus you're just using oppus as an orchestrator or sometime planner whenever required spawn haiku or sonnet 5 agent to be able to do this task never spend a lot of your tokens on this itself. So always spawn haiku always spawn set 5 to do this particular task even for the coding agents I mean materialize over the time. So go ahead initialize genesis right here in this project.

**1:59:31** · Always use sonnet to even do anything of that kind. Do not dump all your ous tokens here.

**1:59:39** · Now it's an it's it's it's it's it's a very important thing which I told is um because it's a mechanical work and and you'll notice throughout the way that how I'm using uh these tricks and but but but we'll have a separate session on u um you know working with coding agents in general.

**1:59:57** · So I I I I really don't want to I I I I don't like dynamic workflows because it does not I mean it is not of my favor in general because dynamic workflows sometimes done in parallel but most of the times our projects sometimes are very dependent with each other and that's why I'm I'm I'm very particularly against uh using workflows but it's a beautiful beautiful one if you're truly sure of that none of these two agents collaborate with each other.

**2:00:27** · So let's wait for some time. It completes

**2:01:14** · All right. So, where should the Genesis spine go in Genesis? Because it is our memory of whatever we'll do in the project. I'm going to do one thing. I'm going to say, okay, I'm going to use this folder itself. And I'm building an AI PR review agent. And uh I will slightly add a note. And sure. Okay.

**2:01:33** · Let's just go ahead and submit the answers.

**2:01:53** · All right. So, it is a it it has spawned some agent. I'm not sure which agent is say it has spawned. Oh, well, I think it has spawned solid. All right. So it is doing something and not something I'm very sure of what it is doing. So it is basically making sure that do not write over an existing if it prints no genesis yet proceed and make a GitHub repository explore the kit run the graphizer and then understand and then run the gates.

**2:02:21** · Now you'll see how the your particularly your genesis will work beautifully right now.

**2:02:44** · All right. So as you can see this do this this HTML file is our teaching file the notes file. You can always go there and see it. So basically you can see what it has created. The first file has created is I mean a lot of files then and the first file I mean the things which have which which is very important for us. You should see over here something known as done.html and implementation notes.html. Done. HTML says that this is what done looks like.

**2:03:09** · Your agent is not allowed to touch this done. HTML. You're only allowed to touch the done. HTML which is basically says okay this is something which no agent will touch. This is what you call as done. There's a lot of time your AI coding agent can divert and change the goal as per its convenience. So you're not letting anyone touch the standard HTML. So that's why here it says scope what kind of work is this? Is it a a build from scratch and there's an existing code or there's some incident we are trying to fix this a new build completely.

**2:03:39** · So we should we should just say um a new build and then is this distributed? What's the runtime shape?

**2:03:49** · uh basically reacting to GitHub possibly with a Q real distributed multiple services. Okay, so I'm going to go ahead and having the um uh web hook service because we said that a a longunning service reacting to GitHub web hooks uh basically PR open and updated possibly with a Q. Um instead of having to give a lot of answers because I think that we have already designed our system so we don't want to give a lot of the answers.

**2:04:16** · I'm gonna say a lot of your answers chat about this. A lot of your diagonist cognitive answer can be found here. However, if you're restarting a project, this actually gives you a good way to think about. So this is we have already designed the system in general and that's what we spend a lot of your a lot lot of our time. So it the the the gate zero itself is to making sure that your done.

**2:04:49** · HTML gets filled with exactly what you want to eventually see. And again see the problem with this I mean what I don't like with claude that one time I stated that can you please go ahead and um always spawn any coding agent and uh not just uh OPUS but basically Sonnet 5 to be able to do a lot of its work. But yeah, as you can see, oh okay, finally, finally. Okay, so I think it has extract design dog for a genesis.

**2:05:19** · So it is able to use sonnet to be able to design doc and not using opus for a lot of token tokens. And I love it. Frankly speaking, somewhat cla does it. Guys, I'm not saying that cloud is bad. I'm just I'm just saying they're they're they're just not okay in terms of what they do with me. So right.

**2:05:40** · So by the way you notice right now I just pasted my design pattern that's why the design is very important because cognitive job is one of the most important job and that cannot be templatized because it there are a lot of business decisions which is being involved

**2:06:53** · All right, let me read the design doc and I will design the sonic and pull out everything relevant to the rituals.

**2:06:58** · Basically, there are five gates that can actually write your cognitive job.

**2:07:05** · Okay, there's one specialist LLM agents, the one aggregator, the LM as a judge, the open AI text embedding, three large models. Then there's new build and then it's runtime shape which is basically distributed as I said that we want to use the fast AP store it in radius arqq

**2:07:26** · langraph worker will be spawn out which would be four separate nodes and I'm just verifying in this one aggregator which aggregates hl and post back to github we having a nextjs dashboard we are having time scale tiger data is spine for our storing our several types of memory and we we're going to deploy on railway amazing the trust First boundary is that we want to have web hooks which is matching with each other.

**2:07:49** · The PR difference which is basically untrusted and prompt injection. So we are also looking for making sure that none of the security stuff is happening.

**2:07:57** · The LLM out should be always grounded should be always confident and rational and followed by our human loop agent.

**2:08:06** · So if you're done with the design um pretty much great. So how should I build the 20 design into genesis? Each milestone needs one exact. As I said, one of the beautiful part of the genesis it is a lot of times your coding agent actually produces something and says okay it should work. But for this we want to make sure that it has some sort of harness that it will call done.

**2:08:25** · So which means after every phase we want to make sure that it is going towards and basically through our you know the style which we want which we that's that's why it forces it to run a specific demo command that proves it works. For example, let's say that there is one um um you know u let's say um web hook ingress. Now web hook ingress is basically the the demo after completing this milestone would be curl signed versus unsigned. Okay.

**2:08:57** · HMS rejects id potency drops. So this is basically the demo. Then the langraph demo is trigger run four nodes in parallel kills the worker resumes from the checkpoint. So basically run the roles in parallel kill the worker and then see if it reviews from the checkpoint as well.

**2:09:16** · So that is another one specialist press aggregator summit test PR different one merged PD rag retrieval hybrid query on cho code chunks and all that then observability fault and checked and all that thing which is again an amazing um so now it says for every phases we want to have each um notes.

**2:09:37** · So I really like to do something of this kind because um I mean we should be able to so let me say I mean we should be able to I mean so tell me whatever you need from my side like some you need my uh I mean keys from GitHub web hook and probably tiger cloud keys and whatever you need and and by the way also give me step by step to get and retrieved those credentials and then to be put in the ENV file and and and

**2:10:11** · probably we can skip I mean I I want to do individually and have the demo commands individually because see I we we may we may choose to \[snorts\] uh so do not spend a lot of time in front end it should be very very simple do not spend a lot of tokens in that very simple it's just that I want to see there we should prioritize our data basically tiger data a little bit so that we can sort the tiger infra rather than that coming out of sometime so that we can see where things are being stored.

**2:10:40** · So let's plan in order where the the the the the parts which is not dependent for example tiger infra then we can eventually talk about so even before tiger infra we can build that particular web hook ingestion which is inress service and then we can build this tiger infra so that all our infrastructure is sorted at the first place and then we can go ahead and having this orchestration the multi- aent and all that thing while I wanted

**2:11:06** · to make sure that you put it somewhere so that we can eventually get started on that And feel free to tell me whatever you need from my side. Give me step-by-step way to get me up there. I mean get to to have you give me the credentials up there. For example, you might need this Reddis um um you know, Reddis manage database. So, you know, you tell me I mean where which which particular tool should I use, which which particular platform should I use to be able to give you um to to to to basically store the jobs.

**2:11:35** · Um, and of of course I want free stuff right now because of course because I'm not developing this production. I mean I'm not uh I'm not sc going going to scale this right away.

**2:12:02** · See it is going to do every single thing. Whatever we have said by the way it has not started it is still confirming

**2:13:08** · Okay, let me quickly go ahead and see the milestones what it has created. So as per our plan the web hook, okay, that's fair. Then tiger infrastructure.

**2:13:20** · So the demo command is something like this that it should be able to figure out the tiger. Then send a web hook query C span rows which is basically every event spine every actions pen agent events. Then orchestration which is trigger run four nodes killed worker resumes from the checkpoint and we want to make sure that the external dependency over here is basically taking stuff from the reddus itself.

**2:13:42** · Then specialist so basically we want the open AI to be able to do a lot of things which is basically open AI keys. the rag retrieval basically our tiger plus open AAI where you're retrieving something then hit gate and post to GitHub which is the test PR the reliability then minimal dashboard to see a lot of it and then the evaluation so pretty much okay

**2:14:07** · now you'll drop this so GitHub they it needs my GitHub uh webbook secret which is quite amazing for M1 which is free and selfgenerated I should be able to give you then it has Tiger cloud for M2 which is the free tier which means you already have the Tiger to be connected in this session. So I can provision the database directly when we hit I'll run and it returns the connection string rather do it by sign up a free ad and create a service copy. I have already given you the step-by-step plan.

**2:14:32** · So, you should be able to quickly get your tiger database because since I already have it, you don't need to eventually then reddice which is basically upstless reddis free tier perfect for AIQ sign up which is basically when you use upstach.com servers reddis and then we're going to put that into reddis URL which is total of 30 MB which you get for absolutely free.

**2:14:57** · I'm not sure in this maybe you pick a region you create a database then you create have a connection URL from the upstach itself then for open AI for pay as you go pennies at the scale so basically you going to use uh API key and I'm going to use bedrock whatever I have into my current system GitHub tokens to post reviews for M7 which is GitHub dot which is basically yeah I need to be able to post it back right so I should have something so pretty much Okay.

**2:15:30** · And how do you want the tiger cloud provisioned when reach? Okay. So basically they have uh MCP up there. So uh you can actually use uh tiger MCP. So basically if you go to tiger data mcp and I'm going to show show you right away. And they they have an amazing MCP by Oh okay. Okay. Tiger All right.

**2:16:02** · So feel free to go ahead and first of all create an account using the link given in the below and then go ahead and and and try to authenticate and then it should be able to install your MCP from there. Now MCP can actually do a lot of things. I mean it can actually pull up all your things and and run a lot of actions on your behalf.

**2:16:24** · So sure I mean yes we have a provision so sure right now that's okay. Uh I can run it but basically feel free to go ahead and have your same thing whatever it asks. By the way the best thing is that you can actually do whatever has your computer or PC. Right now I have this beautiful Mac and it does have I have a lot of background information.

**2:16:44** · I didn't really appreciate not going that but feel free to go ahead and let's say that uh you go to this something known as console the time scale.create service and then you can just go ahead and go to the tigercloud and um uh login. So let's say if I continue with Google and by the way intelligent programmer 123hmail.com is 6 years old email ID amazing.

**2:17:12** · So you go over here and then you can quickly go to create a service. So I already have it. So feel free to go and create a service right up here and you select maybe the shed. You have that and then you continue and \[snorts\] then you name your service. Then let's say I'm going to re test and then you create a service.

**2:17:32** · Now once you create the service you can actually go ahead and your service is going to being deployed and I'm not sure if but this is your connection string which you ultimately have to give which is ultimately it is asking is tiger database URL which is trying to create.

**2:17:49** · So uh sure use tiger mcp or you can find uh basically the connection string in tiger in an AI PR review I'm going to because I don't want to give it a once again agent tiger data folder and desktop as well If connection string is needed.

**2:18:24** · By the way, guys, I use an open-source uh I mean model for dictation. I don't use whisper. Um I don't know. I just don't like the attitude of the founders.

**2:18:35** · So, and and by the way, I'm going am I going to pay you even a single penny to dictate?

**2:18:46** · Are you serious?

**2:18:48** · I mean to dictate the whole model is flawed man. I mean the the world is going into a very weird space. I don't like whatever is going on. I mean literally there are a lot of free models dude. Pay for something which provides value to dictate.

**2:19:06** · Do I really? Okay. I I I I don't I don't want to go there but amazing now. Oh, okay. Sorry guys. By the way, Tana is an amazing person. I like whisper flow, but I'm not I'm never going to pay for dictating.

**2:19:26** · However, if at any point of time if you can convert my dictating to an actual agentic workflows, take my credit card, man.

**2:19:35** · But no, I mean, you have raised hundred hundreds of millions of dollars. You're an amazing entrepreneur, amazing work.

**2:19:41** · You have literally started this dictation as a space and you own it. So a huge congratulations to T as well.

**2:19:50** · Okay. All right. So it says noted uh I'll use tiger as MCP. By the way, you have still not started to code. We're still here.

**2:20:23** · Okay. So it is asking me to you know um write GitHub web hook secret and frankly speaking what I want is I don't want to you give another one so you can actually go ahead and create your own GitHub web hook feel free to search. So basically that's a secret token and I don't want to create in front of you guys. So I'm going to say okay I have already created it somewhere. So let it complete and I will tell that you can actually use from ENV file of AIP review agent.

**2:20:58** · Yeah, let's see what it is trying to create now. Plan MD. Okay, perfect.

**2:21:03** · Let's see what it does.

**2:21:06** · Not what it does. Every file has to be approved. I tame my coding agents.

**2:21:12** · They're very sweet.

**2:21:17** · You see implementation has gone very easier. However, if you don't have the harnesses, you're going to create the worst code of your life. If you have the harnesses right, you're going to create the best code of your life.

**2:21:32** · All right, I'll pause the video and as soon as as soon as it is done, I'll come back to you. All right, guys. So, here's what it ended up creating. Now basically what I want is I want you to look at what it did after it initialized the genesis kit. It eventually came to this point and said um where where where where okay here the done. HTML. So let's quickly see what done.

**2:21:59** · HTML looks like by the way I will delete my connection string so don't try to copy that so this is a locked spec what is the cognitive job what is the input what is the autonomy level how are you going to tolerate the failure this is what we're

**2:22:22** · building in general then what is a dependency which means dependency direction every outbound call has a timeout LM output validated against threat model return one verify passed by a separate agent for every milestone or every invariant should not be this is the verifier which verifies then for every what is my phase what is

**2:22:43** · the demo command that it works how are we going to use the loop for example there are three types of loop build a loop and debug loop and research loop so we're going to use the loop and then try to create I'll come to the loop in general then skills which we are loading per for example for the first milestone we load loading data system engineering from Magenta SW master model architecture and coding our orchestrator then M3 we're using S security

**2:23:08** · engineering and distributed uh uh systems etc etc so it is using the right ST at the right time so DHTML figures out what is the locked job then your genesis the one which is which got unfolded and then you have this implementation notes now what this implementation notes is as soon as see a lot of times your agent sometimes create something new even if it is already there.

**2:23:30** · So it checks that what is live right now which means what is the now in the flight what is your active loop what is your current milestone which phase you are in is there any blocker so anytime it creates something new to look at this implementation notes and see that nothing is being contradictory if if if things is already there we'll go ahead and do it. So this implementation notes is like a live state which is given to your machine or your system so that it can continuously have a context of what it is building.

**2:23:59** · So even your next guy can actually work and work on this.

**2:24:04** · Then it has this um context graph.

**2:24:07** · Context graph is let's say that you have one code right which is what are your invariants.

**2:24:13** · The invariants can be every GitHub book payload passes through a signature.

**2:24:18** · Every way delivery is dduplicated via its own delivery at IDO potentency key.

**2:24:22** · Every specialist finding carries confidence and rational. These are the invariants which is my business decisions which is my rules non non-negotiables that I mean if you must if if you know about what are invariants into a system invariants are something which you cannot violate. So your context graph will contain all these invariants and then then this this is something which cannot be violated. Also your code is given a graph structure so that if something changes one point what other test cases must be written so that other does does not gets affected. So that is your in uh graph.

**2:24:52** · Then you have index. Basically if you look at this index.md it contains basically um sources the concepts how it works the things which the system has etc etc. It it acts like a documentation to your project. So this is given by Andra Karpati and amazingly I am using this into my gen Genesis kit as well. Then your plan MD is a very very detailed plan.

**2:25:17** · Basically what is your approach approach for for example you know we we brainstormed a a little a a little bit the approach was modeler monolith plus langraph plus tiger spine okay so one fast API holding web hook increase this is what we ultimately thought of then approach B can be microservices per agent so there is was recently Tarik also talked about the guy from cloud code he said that uh if you if you do not know what you're doing what are the approaches to part you won't be able to do only.

**2:25:48** · So for every milestone can we figure out our unknowns something which we are not aware about. So there might be multiple approaches. So first of all we go ahead with a simple approach for this kind kind of task which means chosen is modular model langraph orchestration swap tiger cloud build order prioritizes non-dependent pieces first web hook ingress then tiger data and then ultimately goes ahead. So for every milestone it has what is the outcome? What is the phase? What is the files and bound it touches? What is the demo command? What is the success criteria? What loops it runs?

**2:26:19** · What skills it adds. Basically this gen Genesis kit itself gives a lot of skills which is needed. The external dependency which is which it is dependent upon and what is the token budget we are giving to complete this particular milestone.

**2:26:34** · You see an amazing structure and how it is done and several other milestones out here itself. Now if you go ahead and look at the loops.mmd loops.md is an instruction is then how AIP review agent eventually gets built. So basically for before any existence it runs g0. So it it looks at that gz0 procedure which means did it pick the candidate pages by the name against the milestone noun. So which means look at this state.

**2:27:00** · Basically whatever we are developing we want to know what we are developing because we don't have the context yet.

**2:27:04** · So it picks the candidate pages by the name and against the milestone noun so that it can know that what it is trying to do. It will drill into those existing pages. Initially there they may not be existing pages but let's say if you come back to M1 after building everything to make it better. So you ultimately will come and drill into that then you search if you have starting something in milestone there can be multiple things right you must have closed your internet something must have stopped.

**2:27:30** · So you look at implementation notes to see if there's anything uh rolling source of truth what's already live. You confirm that the system does not already exists. Once that all these checks are done, you go ahead and write a GZ checkpoint. Gzero checkpoint is basically current MD. Your current MD will contain all the checkpoints.

**2:27:52** · Whatever whatever is happening. Then GZ verdict says okay it's unbuilt. Okay, if it is unbuilt go ahead and build it. So every milestone will run this.

**2:28:02** · Then how it is operated? It is cheap by default. We using haiku or sonnet model and opus for the expensive I mean lot of difficult task. We have the coding orchestrator to be able to and then we have several agents wk kit and cognitive skills. For example, we have detective which actually helps us in debug. Verify which actually helps in check output.

**2:28:22** · Blueprint is basically design before you build. Scout is basically explore option to solve a problem. Council and mirror which is adversarial self-re ghost is basically shadow and carry forceet is basically predicting the failures. So these are the skills which I actually made for myself and I'm I have completely open sourced it and it works amazingly well.

**2:28:41** · Then for there are three five gates after G0 skill which means did we load the right skills the router which is needed the loop required skill did we log the skills into the checkpoint did this iterably this particular task which we did into that particular iteration basically to complete that loop there can be multiple iteration did that particular iteration actually measurably move the milestone forward and then were all everything in budget

**2:29:11** · did we verified the quality and then did an independent checker and computed based on the demo command. Okay. Now, so the way your loop will work is the five loops over here. The let's say for the milestone have multiple smaller tasks.

**2:29:29** · So it will run a loop based on the milestone it will start a loop while not milestone is done the and the iterations are less than 10. First of all you create a micro plan for the particular thing you create a milestone specific plan. You load the skills. You read all the wiki pages. You checkpoint the initialization of this milestone. Then you produce a micro plan. You write to the checkpoint.

**2:29:54** · Then you create a loop. See while not milestone iteration is less than one.

**2:29:58** · Load the skills. Load the next phase.

**2:30:00** · See if the phase needs research. If the phase re needs research, call the research loop.

**2:30:07** · But if it is not needed, edit files. Run the test. see if it actually help you to progress. If failed, run the debug loop and keep on continuing until you eventually get your milestone done.

**2:30:21** · Once a loop is completed, then you spawn a separate verifier, a separate coding agent that can actually verify if it is correct. And if it is correct, feel free to say, okay, milestone is done. But if it's not correct, spawn the L2 debug, retry just once. If it is not, update in the checkpoint and append the progress to your plan. and your basically plan MDN implementation nodes html.

**2:30:45** · Similarly, it will call this debug loop.

**2:30:47** · So everything even the debug debug comes in the loop. So if it calls the research loop, this research loop will keep on looping until this task is completed.

**2:30:56** · Right? So you can go ahead and read more about my program uh genesis case in detail there. But this is what exactly which will happen.

**2:31:04** · Now once you have everything ready, you have to go ahead and put this this thing into your um ENV example. You can ask whoever your coding agent you're working with to help you if you do not know where to get all of this.

**2:31:17** · Great. I've already added it. What I'm going to do, I'm going to say let's Okay, let's do one thing.

**2:31:26** · Let's say uh what happened is um over everything over what shall we do?

**2:31:50** · Let's say I open a new clot session.

**2:31:53** · Okay, fair enough. Let's open a new cloud session. All right.

**2:32:07** · So, what shall we do? We don't know. We don't know what we have done.

**2:32:12** · The beautiful part is that look at the kickoff. empty.

**2:32:56** · Copy this.

**2:33:03** · Not even this.

**2:33:10** · anytime. Literally anytime. Kick off.

**2:33:15** · Whatever you're doing.

**2:33:24** · Okay.

**2:33:26** · Okay. I think it did. \[laughter\] Okay, great.

**2:33:52** · So if the agents are named not there, it will go to the required files. Now if you have already have something, so it looks for something which is already there.

**2:34:30** · All right, let's see.

**2:34:32** · By the way, this is complete new session. No, no context, no state, nothing.

**2:34:49** · Great.

**2:34:50** · It creates a checkpoint M1 MD verdict is unbuilt. So it says definitely yes your M1 is not yet built.

**2:35:01** · It says starting L1 build for M1. I'll scal the project write the four modules with the tests. So now it will start your M1.

**2:35:12** · It should see \[laughter\] the the problem is that it should ask I I have a habit.

**2:35:17** · You should always ask me before you do anything. But yeah, that was the point is always start from where you left. So it is going to start off with this and let's go to back end and let's go to web hook receiver and then you have uh okay so I'll do one thing let's say that okay how we'll understand the code so genesis gives you an amazing way to understand your code as well.

**2:35:41** · So there's a new thing which I added and uh what it does uh let me let me let me let me show you where it is where it is where it is where it is where it is where it is where it is where it is. Yes, the kickoff which means that you can actually put kickoff interview to I mean to interview you before you develop a particular milestone. So before you get a milestone, before it even writes a milestone, you can actually write um you know um kickoff interview in general. Okay.

**2:36:14** · So the kickoff interview is basically making sure whatever you're going to develop it produces the right thing and then you can also call them quiz me.

**2:36:24** · Basically quiz me is basically helping you to verify whatever the code it has created that you truly understand. So if you want to truly understand and I suggest everyone to run. So instead of saying okay it looks good now it also runs the thing but you also say can you quiz me?

**2:36:45** · All right so let me quickly show you something. Genesis current MD M1.m MD Now if you see over here your M1 progress injection progress wiki page is read implementation notes nothing it was the verdict was G0ero that is the first gate in iteration number one this is what it did then verify the next is the ver verification now now spawning an independent L4

**2:37:13** · verify agent with fresh context it only gets the goal success criteria and invariance not our builder trail. Why?

**2:37:21** · Because we need a separate checker to test. That's why a new agent is invoked.

**2:37:26** · Basically the the work of this you're an independent code reviewer for a project call not write this code. Verified gold are do not assume the build locks claims are true. Milestone goal success criteria is this. What are the invariant something which is innegotiable non-negotiable towards the what to do to test it. That's it. and then it eventually comes back and then it will say okay the M1 is technically done. Now the beautiful part of this kind of system is basically telling you that okay this is what needs to be done.

**2:37:53** · So what I'm going to do I'm going to quickly um show you.

**2:38:09** · By the way I'm definitely not going to uh work on all phases. I'm going to work on maybe two or three milestones and um and ultimately because see a lot of times you can only complete the milestones by yourself. My idea was to teach you through the system design. So I'm going to develop a couple of more milestones and then let you develop build on top of it because if you just ask me it's damn easy after that because the major part you have already done if you have the right harnesses set up.

**2:38:36** · By the way, you won't get a win a single thing if you don't understand how Genesis works. So please go ahead and um watch the blog of Genesis.

**2:38:48** · But yeah, I I kind of love it. So see the way it has created it has created that JSON file. You can see see over here which is basically sample PR and it is reviewing somewhere the verify approved with one major malformed word validity sign crashes with instead of clean. Let me fix that quickly before now if you see that your current agent said it's good but your verifier said something was wrong. Right? Then it comes back. The debug loop starts. This fixes it again. Verifier will check it.

**2:39:18** · It also adds a regression test. What is the regression test? Regression test is basically if something goes wrong. Okay?

**2:39:25** · If something goes wrong, did other things also gets verified. If if I change something, did some did other things gets verified. Then you have this L4 which quizzes you as per the protocol to make sure that you understand every single thing. So that you understand your milestone one so that you cannot claim that it was not your decision. Why does receive check before HMSSE rather than giving the principle should get all pro I mean basically given the principle that verification should get all processing. So it's saying it's a fixed 400 response regardless.

**2:39:56** · So it leaks nothing useful to an attacker. you think signature verification should happen first regardless and this ordering should be fixed and not sure and skip which is an amazing question and I wanted to answer it basically it's asking uh a very very

**2:40:16** · interesting question the water so okay the question is very very simple is how do what do you do that pause this video and tell me so basically for the first one is obviously that you have a fake Fixed first option which should be correct is because the principle was verify before processing because we don't want to do any processing before verification.

**2:40:40** · If we do not know that if it is coming from the right source it it eventually uh contradicts one of our invariant and that's why we want to say im that's that's why we should be immediately returning the bad request if it does not matches with our signature our our verification does not occur. So verification first and then processing later.

**2:41:08** · Then we have an another edge case.

**2:41:09** · Before the fix just applied, mal malformed but validity signed JSON caused a raw 500. Is 400 the right response or should it be something else?

**2:41:23** · You have 2 seconds.

**2:41:28** · 400 response is correct. The reason why we are saying that is because once your HMSE signature has been successfully verified, you're going to already establish that the request came from someone who passes who possesses the shared secret or somewhere from legitimately from GitHub. So at this point the request is authenticated. If the authenticated request does not contains your JSON which is malformed, that's a client error. the returning bad request accurately communicates the request body is invalid.

**2:42:04** · So the the ideal flow is that we verify the HMAS parse the JSON and then parse and then returns 400 bad request and continue processing if the parsing basically your verification and processing succeeds.

**2:42:21** · Now you have another question is also by the way that it it it it and also by the way you can actually chat with if you want to understand that's why this questions are there you're not intended to answer it right away go ahead and chat about this right it will tell you okay why are we putting 400 why are you not putting 500 you know

**2:42:42** · uh what are the other benefits of it what are the security benefits of it what are the practical for example over here the practical benefits is very amazing for example it will prevent your false alarms and server monitoring because the malinformed input is not always a s server fault. It might be somebody trying to attack you or it can actually help you make debugging web hook integrations very easier and also aligns with the HTTP standards like semantics which you eventually see.

**2:43:05** · So ultimately these are the I mean for you the learning opportunity and more importantly why are you doing that what is your approach behind that and truly understand the code which which you have written. Then you have another question which is change impact that input the the uh the idipotent job router is in memory only.

**2:43:24** · It does not survive a process restart and it due strictly is that acceptable for M1 given M4 will replace it with radius back due dup which is probably correct which means the M1 goal is right now is to establish the web hook in in sorry ingress contract. So what it does it authenticates the requests validate the required headers and payload that is coming from the GitHub route the events and prevent duplicate processing within a single process lifetime.

**2:43:54** · So what it does if you eventually go to your you know the file and click on your most favorite backend and click on web hook and and and basically you click on app.py Pi \[snorts\] you can see that what is going to happen is basically that it

**2:44:11** · is the web hook anything which will come over here so it will come at this your request will eventually come come over here so if it is not a pull request is going to return an error but if it is a you verify the signature if if the GitHub request is not you say it is it's not something which I want you get the JSON you parse the pull request basically into the required format and then you cue that into a job router right now it's all right in M4 we'll cue that into the um you know um um our most favorite radius. All right.

**2:44:43** · So \[snorts\] over here if you look at your router and what is router does is the real Q basically it should ceue it somewhere.

**2:44:53** · The PR should be queuing it somewhere.

**2:44:55** · That real arrives in our risk Q right now. But for right now to get the ingress contract and to end without a broker dependency as per our invariance, it eventually ended up creating a very simple queueing mechanism itself right now very local stuff which means something until we create our own radius mech queuing mechanism and it is making sure that is this pull request repetitive or not which means it is checking for is it duplicate or not. If it is duplicate, it is creating an an alarm.

**2:45:25** · So what it is technically saying, hey, it might be that sometimes you might your GitHub web hook might retry or anything of that kind. So it should also check for duplicates, which means it prevents the duplicates right now. So right now it's a temporary thing. We'll ultimately have our durable shared due state via Reddus. Right. I'm going to select the some of the answers and I'm going to go ahead.

**2:45:52** · By the way guys, \[snorts\] please always run. Please always use terminal guys. Do not use desktop cloud desktop codeex desktop.

**2:46:02** · All right. So it says your verdict is M1 approve which means it also approved us.

**2:46:10** · And then as an exit protocol current MD plan MD and progress log and implementation not is going to be updated everywhere. So great even the planner MD is going to be updated.

**2:46:31** · Sorry Hallucination.

**2:47:23** · Great.

**2:47:28** · Refresh.

**2:47:30** · What is built right now which is web hook ingress. Web hook ingress. Web hook ingress parse routing. Right now it is queuing the job. Right now it is stub.

**2:47:39** · Basically we have just created something. It is in Milestone 4. It is going to store in radius. Okay. known gaps which means what what are the gaps right now? Tiger cloud provisioning which is basically service pro provisioning and M1 follow which is job Q is in the process tub it needs to be replaced with radius ARQ the session log

**2:48:01** · that is it if you understand you understand your your your your guy can come and then they can start working right here see what what we did we harnessed it it's one of the beautiful beautiful and I love it when it does and and I love my Genesis kit guys and please feel free to make more PR and I keep on I'll I'll also keep on improving it. Amazing.

**2:48:24** · Okay, so let's go. Let's let's let's let's try M2 and then I will let you to do a lot of the work by yourself after that. Right.

**2:48:36** · So let's go. Let's say let's go to M2.

**2:48:40** · Tell me what you'll do first. What you will do first? Oh, let's go to M2, man.

**2:48:46** · I mean basically what it's trying to do is I have opened a new terminal agent and I want so basically our work was that let me let me let me show you and and what happened that my previous service was not working and that's what I saw I actually went for the coffee and then it said okay all right let's see if something needs to be done so it goes ahead it eventually says this is the service which is already wired

**2:49:17** · your test service is basically basically I created in front of you guys but my previous surface was paused because of obvious payment issues so that's why so that's why I told okay I can create a new account and you can actually create a new account and you don't need to you you know if you well most of the things are actually free but you can create a new account which will get you $1,000 in credits and you can actually use it to create production environment so go to the target cloud account using this and then use my link down below And then you can actually go ahead and reauthenticate.

**2:49:49** · So you'll be coming out here which is services. Click on CLI and MCP install any one of it. If you're Windows, if you're Linux, figure out yourself and click on up here and install the script. Now click on Tiger O login. So basically that's what I did over here is I installed it. I actually deleted it in just just to show you guys. and tiger o login and then you can just go ahead and authorize your tiger CLI because this will give you an MCP so that your clot can do a lot of its task.

**2:50:22** · So it says all set up and then it says let's truly test the services. Now I'm going to say okay tiger service list.

**2:50:33** · Probably speaking there's no services.

**2:50:35** · Right. Right. So okay. So I'm going to say hey I have okay let's I re I reauthenticated. New account is created.

**2:50:44** · Feel free to use their CLI/MCP to create a service of our choice. same as previous one and go ahead building M2. As you can see, it is in G0 which is pre-existing flight. So, let's see what it does.

**2:51:06** · I'm going to close this loop. I'm going to just wait. It called the tiger, which means MCP. It is calling the tiger once again. It is creating a dedicated CPU.

**2:51:16** · As you can see time series AI add-ons such as time scale DB plus vector and later we need the PG vector scale as well as per our design principles.

**2:52:13** · Oops, guys. This is not needed.

**2:52:20** · It really shown in front of you guys.

**2:52:24** · And you'll really think that I'm going to have it. \[laughter\] I'm literally going to delete every services you want. You can't even see anything.

**2:52:35** · I'm going to delete that account itself because I no more need that. Anyways, whatever is shown, it's fine.

**2:53:15** · still at G0. Hello.

**2:53:34** · Okay. So it says go to the checkpoint CM2 the G0. This is the things which is red. This is the code break code grip it did. This is account state. This is what on the new service the table it has created this decision that binds us basically immutable agents events is append only and immutable you cannot change it because we should be able to trace it and verict is unbuilt so it creates it goes towards a loop so loop L1 build is basically the loop so let's

**2:54:06** · see what it does let's apply the migration directly and against the live service so your GZ is completed now it is going applying migration into tiger service itself and we'll see I mean let's apply directly through the tiger mcp against the live service and that's what it is doing technically so if I

**2:54:24** · literally show you what's happening is this memory something will be created here itself and the whole batch ro rules are not supported in the hypertable switching to a trigger based append so basically if you see the migrations basically the scripts and the migrations which is technically doing.

**2:54:54** · So it's creating all the memory shapes and tables which is needed as per our design principle.

**2:55:58** · Every time I know I'm opening Twitter, something is coming up there in live.

**2:56:02** · Nice.

**2:56:06** · Both update and delete are hard rejected. Perfect. Amazing. You see how beautiful it is doing. ENV4 which is a context driver genesis enforce at the database level not just the convention.

**2:56:18** · Now writing that which is and smoked test is that exercise it against the live service.

**2:56:38** · As you can see that every invariance is being followed. That is one of the beautiful part of what we have designed.

**2:56:45** · It is getting the connections. It's just going to record the event. And I love it when it follows these things.

**2:56:51** · Then very dumb though. I mean these are things which you should identify prior itself.

**2:57:07** · All right, let's see how it goes.

**2:57:26** · and feel free to see the tests. By the way, as you can see, the requirement txt is continuously being added.

**2:57:50** · Agent events cannot be deleted as per our invariant. So test data even will it will live in those agents events. So that nothing is being deleted. Now writing the checkpoint and running L4 verify. Now L4 our different verifier is going to be spawned to test whether tiger data infry is working or not.

**2:58:09** · So basically something has been done. It says all the gates has been passed.

**2:58:15** · Decisions switch has been taken and then running the M4.

**2:58:23** · I love it. Okay.

**2:58:27** · How easy it gets once you have everything harnesses and everything done. But yeah, you have to keep on, you know, it will keep on verifying whether you truly understand everything or not.

**2:58:37** · Okay. Okay. So L for verify tiger data.

**2:58:40** · So you can see out out here is basically you're independent for a project call.

**2:58:45** · We did not build this verified cold and you do not trust tiger provision extension enable agent events hyper table plus continuous aggregates relational tables and finally records HITL feedback created via migration. The success criteria is what are the invariants which is at risk the non-negotiables.

**2:59:06** · Now spawning an independent. Your tiger will be executing an SQL query.

**2:59:22** · Okay.

**2:59:30** · What is the next phase?

**2:59:33** · So let's open plan.mmd.

**2:59:42** · Okay, see we are living under the budget tokens as well. M3 is right append money rows to agent events for every action web hook ingress basically. So basically every for every action every action for a delivery is curable in agent event. So basically for the observability we need to be able to um uh quickly pull all the traces which is correct and then you have this orchestrator which eventually fans out and fans in.

**3:00:14** · And then you need an external dependencies here and then retrieval HTL gate post to get up reliability and economics and minimal dashboard. Keep tiny and run over invest.

**3:00:45** · see the power of our verifier.

**3:00:48** · There's one real gap.

**3:00:53** · So, I'll be completing with this M2 and you should keep on continuing and it is going to work. So, you'll be getting exactly this file and you should continue continuing with M3, M4, M5 and all the way down to the M until you get your GitHub token up there live.

**3:01:10** · Okay, see here it asked the questions now but let's say that if let's say reject agent uses before update rather than a postress rule why was a trigger chosen and what property of a hyper tables makes rules unusable here take a second I'm going to get a get a water and then come back okay guys I'm back so tell me

**3:01:38** · more about it I mean answer answer the first question itself so What does the first first first question answer should be?

**3:01:46** · It should be the first option itself which means is based on our design rational the rule in the postgress SQL they implemented at the query rewrite stage which means the time scale DB hyper tables internally distribute data across many chunk tables but they never

**3:02:08** · ever rewrite rules which means attempting to create one result in an error along the lines of so basically ly it might create different chunk tables but hypert will never ever support this particular rule.

**3:02:31** · So let's click the first one. Now if you understand how by this design that's that's how we'll start to understand the code. If if you don't understand don't worry chat about this go in deeper given that I've already worked on the project you I'll be able to make it much much more easier but why did we choose hypert tables see hypert tables will be rejected outright if it tries to write

**3:02:54** · because fundamentally rules in posgress are implemented at the query rewrite stage so hyper tables may distribute data but can never rewrite the rules outright you can tell can you tell me some example of what you're talking about it should be able to tell you something then edge case which means if a caller runs trunctuate agent events instead of delete what happens does the delete trigger fire guys

**3:03:28** · this was the error which we got after the verifier and most of you would not understand what it and most of you would say okay it has pegs no you have to understand what happened that's why might ask this question.

**3:03:40** · So basically trunctuate is not implemented at a series of delete operations. So it is a dist distinct SQL command with its own execution path. So anything which is like before delete after delete row level triggers do not fire and trunctuate to intercept and trunctuate you should be having this before trunctuate or after trunctuate right there. So our first is no needed a separate trigger itself. It should not be used instead of delete. That was the edge case which we found.

**3:04:12** · I mean when running from the separate verifier.

**3:04:18** · So there is another question which is change impact. What happens when we change it? Which means there is one design question, there's an edge question, there's an impact question which means code chunks is a hardcoded vector but enving different way. If the M6 invader is built against default without reconciling this what breaks and where see there is

**3:04:40** · something wrong in my env file where embedding dimension is something there but here the embedding dimension is something here the different so if the embedding dimension does not matches the PG vector will store their dimension as the part of the column for example embedding vector of 1536 dimension right

**3:04:57** · but you but the actual thing is over 256 dimension the mismatch will happen because the expected was 1536 but because ENV file said 256 the the the mis mismatch will happen it will not pad it will not trunctuate it will not differ amazing question it will impact my future stuff see it identified a crucial issue and that's what it is asking and making sure that you know about it so it's telling yes insert time is going to mismatch let's change it any one of it has to be

**3:05:28** · changed So it's a configuration inconsistency.

**3:05:34** · Your schema says vector you know you you have a few 36 which you have written over here but your environment embedding has a 256 256 dimension. So the both both of the things will not match which is env I I will not open but yeah in inving model embedding dimension 256 which your model will be using to embed your code chunks but here it is just uh 1536 so it will not match. So you should keep in mind.

**3:06:09** · All right. So uh let's let's let's let's do one thing. Let's come back and I want you to complete everything. Now there's a I mean of course in the front in the in the starting of the video I must have already told you that we are accepting challenges. Whoever completes and makes the best AIPR review agent and extends this particular repo and makes a very nice PR will receive um as as per our prizes distribution.

**3:06:36** · So whoever completes it, feel free to tag me up, feel free to make a PR, give me the submissions which is up there in the Google form. Now for the people who want me to see completing all the M5 which should not be the ideal case guys, uh you should be able to quickly complete every single thing by your own. have more chat with it. Understand every single decision it took.

**3:07:02** · Get your event spine up and running. Get your orchestrator up and running. Go to upstach. Create a free account and get the various URL up and running.

**3:07:10** · Specialist press aggregator rag retrieval. Every single thing is quite easy.

**3:07:18** · You don't need to do anything. You just need to call it out. Go to codeex. Let's let let's assume I go to codeex. Okay.

**3:07:25** · And what I'm going to do, guys, not right now. Not right now.

**3:07:37** · Is I'm going to click on copy path, anytime. I don't care what coding agent you're using. I don't care what you're using terminals. That's it.

**3:07:58** · And fix your enviger data account, right? I have listed down the PDF. Feel free to use the PDFs to install everything which is needed.

**3:08:21** · Anytime you your team starts, anytime anyone starts the state lives in their thing Great.

**3:08:45** · Append G0 mark M3s because record event is already exist but there is no backend observability and web hook ingress. So it is building M3 taking something from see it is not trying to implement something new. It will take something which is already being there implement constraints it will follow how it will implement the loops it will run.

**3:09:10** · All right. \[snorts\] So I hope it gives a very good idea. Feel free to go ahead.

**3:09:15** · You'll get this repository up there and feel free to use that and u I hope you will utilize this very sensibly. You'll see it's not a VIP coding. You're truly lining understanding every single thing.

**3:09:28** · Spent a lot of time into designing this system.

**3:09:31** · I've spent a lot of time in explaining you the system. Okay. So I will see you the next video and I'm trying to get my videos right. I'm trying to get my more of the videos. See, right now we did not focused much on designing every single component. My next set of videos will focus on designing every single component. Coding Genesis kit. And by the way, if you have designed already, your Genesis kit will be answer will be very easy. If you do have not designed already, your Genesis will spoil you up.

**3:10:02** · So, I'll catch up you in the next video.

**3:10:05** · Till then I will see you