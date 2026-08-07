---
title: "This Claude Skill Just Killed PowerPoint"
source: "https://www.youtube.com/watch?v=Wjb5UOT_HtI"
creater: "[[Vivek Mishra]]"
published: 2026-08-04
created: 2026-08-07
description: "In this video, I'm breaking down how I built a custom Claude Code skill that generatesAI presentations that actually look good — not the generic, poorly designed slides mostAI tools produce. Every A"
tags:
  - "Yt"
---
# This Claude Skill Just Killed PowerPoint
Source: [YT](https://www.youtube.com/watch?v=Wjb5UOT_HtI)
![](https://www.youtube.com/watch?v=Wjb5UOT_HtI)

In this video, I'm breaking down how I built a custom Claude Code skill that generates  
AI presentations that actually look good — not the generic, poorly designed slides most  
AI tools produce. Every AI presentation tool I tried gave me flat, badly organized  
decks, so I built a skill file to fix that.  
  
I'll walk you through the full workflow step by step: setting up your IDE, installing  
the skill, picking and customizing a theme, and generating slide images with Codex or  
an MCP-connected image tool. This breakdown will show you how to build a fully  
custom, professional AI presentation — shifting your mindset from "AI presentations  
look cheap" to "AI presentations can look agency-made."  
  
🔗 Resources & Useful Links  
\- Claude Presentation Skill (Github Repo): https://github.com/vivekmishraishere/claude-web-deck-ppt  
\- Cursor IDE: https://cursor.com/get-started  
\- Antigravity IDE: https://antigravity.google/download  
\- Codex: https://chatgpt.com/codex  
\- Codex Masterclass (full 3-hour course, mentioned in video): https://youtu.be/UkRE87yDwH8?si=im5thk924sMx5Ylg  
  
📘 Timestamps  
00:00:00 – Introduction: Bad AI PPTs vs Good AI PPTs  
00:00:51 – Why Claude Code + a Custom Skill Is the Real Fix  
00:02:47 – Setting Up Your IDE (Cursor or Antigravity)  
00:04:24 – Installing the Claude Code Extension and Skill File  
00:05:23 – Running the Skill: Building Your First AI PPT  
00:06:01 – Interactive Web Deck vs Real PowerPoint  
00:06:50 – Adding AI-Generated Images with Codex  
00:07:05 – Using MCP Servers, Higgsfield, and the OpenAI API for Images  
00:07:46 – Codex Walkthrough: Naming the Project and Running the Skill  
00:09:42 – Theme Gallery: Live Preview and Customization  
00:11:16 – Building the Deck After Theme Selection  
00:11:34 – Comparing Codex vs Claude Code Output  
00:11:49 – Running npm run dev to View the Generated Deck  
00:14:22 – Opening the Final Deck Locally (Rest, Recovery, Sleep Demo)  
00:15:50 – Auto-Fixing Overlapping Captions and Design Bugs  
00:16:37 – Using Behance for Custom Design References  
00:17:18 – What's Coming Next: Full PPT Course Teaser  
00:19:02 – Outro/Conclusion  
  
📌 What this video covers  
Here's what you'll learn in this video:  
\- Why most AI-generated presentations look cheap, and what actually fixes it  
\- How to install a custom skill into Claude Code inside Cursor or Antigravity  
\- How to run the skill, pick a theme, and customize fonts and colors live  
\- How to generate slide images automatically using Codex or an MCP image tool  
\- How to compare and choose between an interactive web deck and a real PowerPoint file  
  
🚀 Tools & Stack Mentioned  
\- Claude Code  
\- Cursor (IDE)  
\- Antigravity (IDE)  
\- Codex  
\- Hugging Face (image generation via MCP)  
\- OpenAI API  
\- npm  
  
🎯 This is perfect for:  
\- Founders and students who need a professional-looking presentation fast  
\- Freelancers and marketers who want to stop paying for presentation design tools  
\- Anyone curious about installing and using Claude Code skills  
\- Vibe coders who want to combine Claude Code and Codex in one workflow  
\- Anyone who has tried AI presentation tools and been disappointed by the output  
  
Making a presentation that actually looks like someone spent hours on it doesn't have  
to take hours. Once this skill is installed, you can go from a raw topic to a  
polished, animated, on-brand deck in one sitting. If you want a full advanced course  
on this — including animations and deeper customization — tell me in the comments.  
  
👋 WHO AM I?  
  
I'm Vivek Mishra — a performance marketing expert and trainer. I work with  
service-based and e-commerce brands and teach practical skills around marketing,  
AI tools, and digital systems. Everything I teach comes from doing it myself.  
  
📩 Questions? Drop them in the comments — I personally reply.  
  
📸 Instagram: https://www.instagram.com/vivekmishra.ai/  
  
#ClaudeCode #AIPresentations #VibeCoding #Codex #AITools

## Transcript

### Introduction: Bad AI PPTs vs Good AI PPTs

**0:00** · When you try to create a presentation with AI, it looks something like this. But if I create it, or if someone else creates it with an AI creator, it looks something like this. Why is that?

**0:11** · Look at the amazing design. How each element is laid out. Look here, how well it's constructed. It's well organized. And how it 's presented in a PPT format. You can design it all with AI. In fact, there's another presentation here, which you can see is also created entirely through AI. There are countless other designs available here, and you can create them yourself, as you'll find a link to the full template. You can create all these types of PPT templates here, with all the elements clearly displayed: 1, 2, 3, 4, and 5.

**0:47** · You can also see them here. And in this, you need to provide more information.

### Why Claude Code + a Custom Skill Is the Real Fix

**0:53** · The information is packaged, which contains the data you need to display, and you can display it graphically, with great animation.

**1:01** · One solution for creating all this is Claude. But with Claude, you'll need to use a skill. I'll provide the file for this skill in the description of this video. Now, I'll explain how to use it . You just need to go into the code and copy it, and we'll import it. But before that, let me tell you that this system offers a lot of templates. If you want, you can mix them and create your own design . And the best part is that whichever design you like, let's say I went to this design. I went to Preview. It looks fine to me.

**1:31** · But I need a slight color difference. So, I'll go to Customize. In Customize, let's say I want to change the text. So I can change the text and font, whatever I want . Then after that, I can change the theme here, whether I want it to be orange or blue. So, I chose blue. So, done, see the preview. So, I did my preview like this. So, this is how you can run your preview here. And I hope you understand how customizable it is. Everything, including fonts, can be customized. Colors are customizable. Everything is really customizable.

**2:04** · You can even allocate random colors. If you're not sure, you can try using random colors so that your PPT looks great. So, that's how you can design a PPT. But why is making a presentation important? You suddenly have to make a presentation.

**2:22** · Some urgent work has come up in your office. You're a student. You need to make a PPT.

**2:25** · The information needs to be organized well and presented in the way I'm presenting it to you, with a great design that will make people feel like their presentation skills are next-level.

**2:38** · You can make them interactive, too, using images and such. If you create this, you'll get a lot of praise from people, saying, "Brother, what a great job it is, and you can create it in a very short time." So, it's like you provided your instructions, and then I created this skill file . It took me a lot of time. I spent hours working on it, and finally, I've cracked it, and I've brought it to you all with a lot of templates that look very modern and professional. Any updates will be updated in this repo over time. So, let me tell you how to install it.

### Setting Up Your IDE (Cursor or Antigravity)

**3:12** · As I told you, go to the code, copy it, and open any ID. Now, what is an IDE? IDE stands for Integrated Development Environment. If you don't know, please follow my series on vibe coding.

**3:24** · Otherwise, let me tell you about a tool you can use. I use Cursor . It all depends on whether you want to use Cursor or not.

**3:32** · You can write "Download Cursor ID." You can download it for free. Free AI gives you some limited AI experience. We can also connect it to Claude . And I guess using Claude would be better. But I would suggest you download Cursor or you can use Antigravity. You can download any of these and use it inside. So, what are we going to use? We 're going to use Cursor. So, inside Cursor, I'm going to use the Claude Code.

**3:56** · So, what do we do now? Let's open Cursor. I'll search for Cursor.

**4:01** · Then let's open it. I already have it open. So, let me open another new window.

**4:08** · So, I have another window open. So, what are we going to do in this window now?

**4:13** · Go to Open Project. And let's create a new project over here.

**4:18** · So, let's create a project using the urgent PPT and open it. Now, after that, I'll go to Claude Code. So, if you don't know how to set up all this, please watch one of my videos or someone else's videos online . So, you need to come to Claude Code here . Right now, I'm signing in here. Okay? Just authorize and sign in. And let me tell you, in short, if you need to connect Claude Code, it's become very common now. So many people have seen the video, so I don't want to waste any more time on it. Okay?

### Installing the Claude Code Extension and Skill File

**4:50** · I've authorized it . If you want to know more, you'll find an option for extensions here . You can search for Claude Code here. If you search for Claude Code, you 'll find Claude Code here. And you have to install it here. After installing it, you'll find the chat option on the right-hand side of the chat. So you can use it. You can use any ID. Now I'll go here and say "Install," okay? I'll paste it in "Install" and say "Install this skill." I'll just say this, so it installs the skill.

**5:22** · So what do I always do? I manually give it bypass permissions so it can install it. In case you don't know how to bypass it, you can go to Settings. Here in Settings, you'll find the option "Allow Bypass."

### Running the Skill: Building Your First AI PPT

**5:34** · You can check it. And that's how you can do it. Now it 'll do everything, and you'll see the files on the side as soon as it's installed. By the way, you'll notice here that if you say "Claude Skills" directly, it will download it to your root level. So you can see here that the location is ".claude/ skills" folder. Now I told it to do it in this workspace, so now it 's installed in that workspace. So this way you'll see the differences . So now it's installed here. So it will work here.

### Interactive Web Deck vs Real PowerPoint

**6:02** · So I'll say, "Now I want to create a PPT on it." Okay? Now, whatever your topic is, write it here. So now you can see, here I've talked about how to do rest and recovery, because there's a slight difference. For example, when we use mobile phones and think we're getting rest by scrolling through the pages, we're scrolling through reels, watching videos on YouTube, watching movies, etc., that's rest. Actually, rest isn't rest. Taking a walk or taking a nap is actually rest. So, I know these things, I keep going through them.

**6:31** · So, that's why I'm going to do it. I'm going to hit enter and tell it to research this and create a PPT. Okay, so it's going to use our skill, which is our PPT. So, look, it's also asking me a question about the format of the deck. So, we're going to use our interactive web deck. Okay? We shouldn't use actual PowerPoint because actual PowerPoint gives you very poor results, which is what Claude uses. So, as I showed you earlier, this one is the one. Claude created it, but its results aren't that great. Why isn't it great? Because it's obvious that it won't deliver the results I'm working on .

### Adding AI-Generated Images with Codex

### Using MCP Servers, Higgsfield, and the OpenAI API for Images

**7:05** · Because it's not specifically designed, I've trained extensively and built a system with interactive web technology that allows you to replicate it exactly, without any problems. Whether it's an urgent meeting or a presentation, or a pitch deck, you can easily create it.

**7:27** · I'll also explain how to create it with images. If you have any doubts about how to use images, I'll show you in a moment how I used them.

**7:34** · I was thinking of using Codex in parallel. So, using Codex, I'll show you how it 's generated. All the images you see in the PPT were generated by Codex . So, the images you see here were all generated by Codex for the PPT. So, Codex automatically generates images. Otherwise, if you're using Claude Code or something like that, you can use the MCP server . Which MCP server? You can use Hugging Face or any image generation tool like OpenArt. There are many such tools. From there, you can generate images.

### Codex Walkthrough: Naming the Project and Running the Skill

**8:06** · You'll generate it, and CLOT will get the image directly. Or you can use the API key of OpenAI to build all these things. It 's very simple. If you've used white coding, you can do this easily.

**8:21** · But even then, I'd like to show you how I'm currently in Codex.

**8:24** · By the way, I've created a full 3-hour course on Codex. You can check it out. You can see the latest video here, the Codex Masterclass, which is almost 3 hours long. I uploaded it two weeks ago.

**8:36** · You'll find the link to it in the description below. Be sure to check it out. So, I 'll go back to Codex and name the project here: an urgent-ppt and add a folder here. So, our folder was "urgent-ppt." So, let's open it and create a project . So after creating the project, we'll go here and in a new chat window, we'll paste what I wrote there and here I'll say, "Generate Image as Well for the PPT." Okay? So that's what I'm going to say. By the way, I didn't select it. Okay? I should have selected it.

**9:12** · So, it's going to create it automatically. So I'll tell it, "Let me select it." So, you can give Kodak an instruction if you actually want to select it yourself. So, you can say, "Display me the suggestions," then I'll select the one I want. Okay? So, now it will suggest here. So, " Generate Image as Well for the PPT." But after my theme selection. So, we'll write this and say, "Done."

### Theme Gallery: Live Preview and Customization

**9:49** · Now, it's not showing me that here . So, I'll enter this. Here, you can type text.

**9:57** · Run the skill and show me the link locally for the selector section. So guys, I made a mistake: my skill wasn't asking questions . So what did I do? I updated the skill. If you go to the skill, you'll see that I recently made three comments and made some changes. After making those changes, I created this according to your needs.

**10:19** · What text do you have to type? Install this skill into the current workspace, and it will install.

**10:22** · By clicking dot agents dot cursor, you'll see files where the skills, theme gallery, and everything else will be stored. So here, I'll call it "Let's Start PPT." So, this is what you have to do. Now, look at the direct Claude Code created. I 'll show you the results and all the things that have just been created. But first, it will ask you questions like, "What is the deck about Pick Closest?" and others are AI Product Strategy, Board Matrix, Data Pack, Neuroscience Learning Education, Startup Pitch. So, according to which? So, you have to search for that. So I 'll say it's about AI and Tech AI and its downfall. Let's say we 're creating a slightly controversial PPT.

**11:03** · So, you'll see the Theme Gallery will install the entire page and show us locally which presentation type to select . So, all of that is going to happen. This process was done initially, but there was a slight problem, so I made some changes and am showing it to you now.

### Building the Deck After Theme Selection

**11:19** · Okay, everyone, you can see it's open here. This is the built-in browser, after all.

**11:23** · I'll open it externally. So, it will look something like this. You can see it's running on local 33. Here we'll see the preview, etc. Now, select whatever you like. For example, if I want to use this theme, you can click on Use this theme. If you want to do a live preview, do a live preview first. Okay? I've done the live preview here. And here I 'll say "Use this theme." So I can use it. What kind of font do I want?

### Comparing Codex vs Claude Code Output

**11:48** · Actually, this font looks fine to me. But this one looks better to me . Okay? Let's try it in color. It's the default, which is black and white, or I can use color in it. So, yellow, I guess, should be better. I mean, I want to use a little yellow and black in the theme. So this is looking good to me. So, use this theme. Then, okay, now after this, I'll copy the instructions. If you have a topic and an audience, you can do all these things. Otherwise, I 'll copy the instructions.

### Running npm run dev to View the Generated Deck

**12:20** · Otherwise, if you want animation here, or if you want cinematic animation, you can try out animation. So, let's copy the instructions.

**12:28** · After copying, you have to go to your ID. So now I'm here. So, after this, I I'll say, "Let's start building."

**12:39** · Okay, I've already said that. You can do that too. If you don't want to select a design, you can choose not to. No problem. So I told it to write its own content. If you have content, you can provide it. It's all written out: this will be on the first slide, this will be on the second, this will be on the third. So you can provide that too. Now, let me show you what Codex generated and what Claude Code generated. So right now, it's telling me you can run the code. The whole thing is ready. So, I can tell it myself, you can tell the AI to run the code. If you don't know how, I'll do it right now. Here, open the integrated terminal , and do the rest. So, npm run dev. Okay? Let's run it and see how it 's created it. So, you can see the result.

**13:16** · You'll understand why the template I gave you is actually important. Because this way, some designs start to emerge. According to the All Two skill, it 's quite good. It's decent. It's not like it's too stupid. It's good. And if I want to go full screen, I can go full screen. If I want to go in notes, I can have notes here. Which is really good. So here it is under lack of time. It's the most. So you can proceed by doing this. Here there are pointers, physical etc.

**13:43** · So it is also looking good. You can do it. And the music that is coming in the background, that is the notification of the cursor, ignore it. Third, emotional taste. Fourth , fifth, social taste. Sixth, spiritual rest. Most people are immersed in two and three of these, not all seven. Okay? Then, why does scrolling feel like rest and leave you more tired? Okay? So, first is this, second is this. I mean it's pretty good. I mean, as it's coming in, it's fading, meaning it's quite decent. We'll see how decently the slides are coming out.

**14:14** · The platform name is Social Quietly Destroys. So it's all up to you how to do it. So, right now, this has been done without any template selection. If you want, you can also provide your own design . You can go to a website called Behance Behance. Right? Go to Behance and search for PPT templates. So, most likely you'll find it here. So here you can see I've written a presentation, and there are many presentation types available in the presentation. So here you can give ideas.

### Opening the Final Deck Locally (Rest, Recovery, Sleep Demo)

**14:45** · Whatever type of presentation you want, for example, this is a pitch deck presentation. So here you can see it's just like images, text, so you can also provide it in this way as you want. I mean, you want such designs, such alignment. It will attempt to create the entire thing accordingly . So, for the rest of the images, you'll obviously have to use Codex. So, if I go to Codex, Codex can generate and give you the first, second, and third images. If you ask, Codex will do it. If you want a detailed video, I'll provide a complete guide on presentations . It'll be a 1.5-2 hour guide.

**15:16** · If you want to create a truly amazing, next-level presentation, customizable. So that's going to take a long, long time. Okay? So that's it. So, the rest of this is being created here. You can see it's creating images, etc., which is pretty good. It's created before, but it was wrong because of my skill. So, you don't have to make that mistake.

**15:38** · That's why I've already refined the skill and given it to you. So, you'll see it didn't do anything too bad here . Good job. And the speciality of Codex is that it can be played just like that. Which is pretty good. Now let's go to this, open PowerPoint locally. So here you'll see if I open it, it's pretty decent. Meaning, it becomes pretty decent because of the skill file . You can see that the presentation that comes up is a rest, recovery, and sleep. So , I've created a pretty decent presentation. So, you can create decent presentations like this and fill them with images too.

### Auto-Fixing Overlapping Captions and Design Bugs

**16:15** · So, now I'll show you the power of the skill. It'll be ready and you'll see it in a moment . It's probably making some changes, but it's largely done . Let's see, here you have full control. You can move from here or you can use your keyboard arrow keys, which provides very good control. You can move back and forth in it. Which is pretty good. here Tokens aren't free, leveraged cost, value, and gap. So, you can see things with that. You can make these changes. This arrow looks a little odd. It's misaligned. So you can make those changes. Chat wrappers, ah, then it says 1999, 2001, 2010, and then what about this?

### Using Behance for Custom Design References

**16:46** · Now, if it reveals step by step, you can show that too. But this wasn't in the PPT style, it's the theme style, so that's it. Then, watch cash signals, not slogans for habits. Okay? Pretty good. Watch the cash, not the course. Okay? So it looks good. Notes also appear here. If we want, we can click on Notes. So, this will keep changing through each presentation, I think. Yes. So, Notes change too . If you want to reset, you'll come back to the first slide.

**17:17** · So that's how you can build it. You can see it will be created in the same theme as you select. Even after this, it continues making changes. If it detects a problem, it will continue making changes until it gets a satisfactory result. So, okay, let's let it continue. Some captions are overlapping. It's fixing that because I specifically added a check in the skill file to prevent overlapping. So, it's fixing it by checking that . Now you can see what this Claude Code has created. So, let's take a full view here . So, from full view, it becomes the entire full view, like the slide.

### What's Coming Next: Full PPT Course Teaser

**17:48** · And here it starts like this first. It has generated the entire image, etc., which is pretty good. The rest is not scrolling. How to take the rest properly? Okay?

**17:59** · It's a completely black and white theme. Rest recovery sleep. Now, if you tell it to reveal one by one, it will reveal one by one as well. Like, there's a first point, there's a second point. So, you'll have to say this. I've set it up. Okay? So, there 's no problem with that. Like, I showed a presentation in the middle, and it showed the step-by-step process. You can do it like this. One habit can drain your kind of rest. So, there's sensory, mental, social, emotional. That can also be revealed step-by-step. Okay? Schedule recovery before you need it. So, this image is correct. So, I've used a black and white theme. So, you can create a simple presentation this way.

**18:31** · Select any theme you want above the other themes . Obviously, I have some great themes that I've added to my collection. I'll update this further. I will definitely update it. And if you want a really extensive course directly on PPT, an hour and a half long, in which I discuss animations in great detail. I'll take it to a more advanced level.

**18:51** · So definitely tell me in the comment section. Write down the PPT course. So you can see that this is what was used in this PPT which I am speaking right now. It will adjust everything the way you speak. I have put all the instructions in the skill. But you will have to speak a little for some things. Rest more updates will come.

### Outro/Conclusion

**19:07** · So thank you so much guys for watching this video. I will meet you in the next video. So don't forget to write down the PPT full course. And such videos will keep coming regularly.

**19:15** · Subscribe for such videos and see you in the next video. Bye bye and keep learning.