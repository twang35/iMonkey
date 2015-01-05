function textChosen() {
	document.getElementById("loadText").style.display="none";
	document.getElementById("textLoaded").style.display="inherit";
}

function loadShort() {
	document.getElementById("todo").innerHTML = shortStuff;
	todo = [].slice.call(document.getElementById("todo").innerHTML.toUpperCase());
	textChosen();
}

function loadRandJ() {
	document.getElementById("todo").innerHTML = romeoAndJuliet;
	todo = [].slice.call(document.getElementById("todo").innerHTML.toUpperCase());
	textChosen();
}

function loadSonnet18() {
	document.getElementById("todo").innerHTML = sonnet18;
	todo = [].slice.call(document.getElementById("todo").innerHTML.toUpperCase());
	textChosen();
}

function loadGettysburg() {
	document.getElementById("todo").innerHTML = gettysburg;
	todo = [].slice.call(document.getElementById("todo").innerHTML.toUpperCase());
	textChosen();
}

var shortStuff = "Shall I compare thee to a summer's day?<br>\
No, no summer's day for you!"

var gettysburg = "Gettysburg Address<br>\
<br>\
Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.<br>\
<br>\
Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battlefield of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.<br>\
<br>\
But, in a larger sense, we can not dedicate, we can not consecrate, we can not hallow this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth."

var sonnet18 = "Sonnet XVIII<br>\
<br>\
Shall I compare thee to a summer's day?<br>\
Thou art more lovely and more temperate:<br>\
Rough winds do shake the darling buds of May,<br>\
And summer's lease hath all too short a date:<br>\
Sometime too hot the eye of heaven shines,<br>\
And often is his gold complexion dimm'd;<br>\
And every fair from fair sometime declines,<br>\
By chance or nature's changing course untrimm'd;<br>\
But thy eternal summer shall not fade<br>\
Nor lose possession of that fair thou owest;<br>\
Nor shall Death brag thou wander'st in his shade,<br>\
When in eternal lines to time thou growest:<br>\
So long as men can breathe or eyes can see,<br>\
So long lives this and this gives life to thee."

var romeoAndJuliet = "SCENE V. Capulet's orchard.<br>\
<br>\
Enter ROMEO and JULIET above, at the window<br>\
JULIET<br>\
Wilt thou be gone? it is not yet near day:<br>\
It was the nightingale, and not the lark,<br>\
That pierced the fearful hollow of thine ear;<br>\
Nightly she sings on yon pomegranate-tree:<br>\
Believe me, love, it was the nightingale.<br>\
ROMEO<br>\
It was the lark, the herald of the morn,<br>\
No nightingale: look, love, what envious streaks<br>\
Do lace the severing clouds in yonder east:<br>\
Night's candles are burnt out, and jocund day<br>\
Stands tiptoe on the misty mountain tops.<br>\
I must be gone and live, or stay and die.<br>\
JULIET<br>\
Yon light is not day-light, I know it, I:<br>\
It is some meteor that the sun exhales,<br>\
To be to thee this night a torch-bearer,<br>\
And light thee on thy way to Mantua:<br>\
Therefore stay yet; thou need'st not to be gone.<br>\
ROMEO<br>\
Let me be ta'en, let me be put to death;<br>\
I am content, so thou wilt have it so.<br>\
I'll say yon grey is not the morning's eye,<br>\
'Tis but the pale reflex of Cynthia's brow;<br>\
Nor that is not the lark, whose notes do beat<br>\
The vaulty heaven so high above our heads:<br>\
I have more care to stay than will to go:<br>\
Come, death, and welcome! Juliet wills it so.<br>\
How is't, my soul? let's talk; it is not day.<br>\
JULIET<br>\
It is, it is: hie hence, be gone, away!<br>\
It is the lark that sings so out of tune,<br>\
Straining harsh discords and unpleasing sharps.<br>\
Some say the lark makes sweet division;<br>\
This doth not so, for she divideth us:<br>\
Some say the lark and loathed toad change eyes,<br>\
O, now I would they had changed voices too!<br>\
Since arm from arm that voice doth us affray,<br>\
Hunting thee hence with hunt's-up to the day,<br>\
O, now be gone; more light and light it grows.<br>\
ROMEO<br>\
More light and light; more dark and dark our woes!<br>\
Enter Nurse, to the chamber<br>\
<br>\
Nurse<br>\
Madam!<br>\
JULIET<br>\
Nurse?<br>\
Nurse<br>\
Your lady mother is coming to your chamber:<br>\
The day is broke; be wary, look about.<br>\
Exit<br>\
<br>\
JULIET<br>\
Then, window, let day in, and let life out.<br>\
ROMEO<br>\
Farewell, farewell! one kiss, and I'll descend.<br>\
He goeth down<br>\
<br>\
JULIET<br>\
Art thou gone so? love, lord, ay, husband, friend!<br>\
I must hear from thee every day in the hour,<br>\
For in a minute there are many days:<br>\
O, by this count I shall be much in years<br>\
Ere I again behold my Romeo!<br>\
ROMEO<br>\
Farewell!<br>\
I will omit no opportunity<br>\
That may convey my greetings, love, to thee.<br>\
JULIET<br>\
O think'st thou we shall ever meet again?<br>\
ROMEO<br>\
I doubt it not; and all these woes shall serve<br>\
For sweet discourses in our time to come.<br>\
JULIET<br>\
O God, I have an ill-divining soul!<br>\
Methinks I see thee, now thou art below,<br>\
As one dead in the bottom of a tomb:<br>\
Either my eyesight fails, or thou look'st pale.<br>\
ROMEO<br>\
And trust me, love, in my eye so do you:<br>\
Dry sorrow drinks our blood. Adieu, adieu!<br>\
Exit<br>\
<br>\
JULIET<br>\
O fortune, fortune! all men call thee fickle:<br>\
If thou art fickle, what dost thou with him.<br>\
That is renown'd for faith? Be fickle, fortune;<br>\
For then, I hope, thou wilt not keep him long,<br>\
But send him back.<br>\
LADY CAPULET<br>\
[Within] Ho, daughter! are you up?<br>\
JULIET<br>\
Who is't that calls? is it my lady mother?<br>\
Is she not down so late, or up so early?<br>\
What unaccustom'd cause procures her hither?<br>\
Enter LADY CAPULET<br>\
<br>\
LADY CAPULET<br>\
Why, how now, Juliet!<br>\
JULIET<br>\
Madam, I am not well.<br>\
LADY CAPULET<br>\
Evermore weeping for your cousin's death?<br>\
What, wilt thou wash him from his grave with tears?<br>\
An if thou couldst, thou couldst not make him live;<br>\
Therefore, have done: some grief shows much of love;<br>\
But much of grief shows still some want of wit.<br>\
JULIET<br>\
Yet let me weep for such a feeling loss.<br>\
LADY CAPULET<br>\
So shall you feel the loss, but not the friend<br>\
Which you weep for.<br>\
JULIET<br>\
Feeling so the loss,<br>\
Cannot choose but ever weep the friend.<br>\
LADY CAPULET<br>\
Well, girl, thou weep'st not so much for his death,<br>\
As that the villain lives which slaughter'd him.<br>\
JULIET<br>\
What villain madam?<br>\
LADY CAPULET<br>\
That same villain, Romeo.<br>\
JULIET<br>\
[Aside] Villain and he be many miles asunder.--<br>\
God Pardon him! I do, with all my heart;<br>\
And yet no man like he doth grieve my heart.<br>\
LADY CAPULET<br>\
That is, because the traitor murderer lives.<br>\
JULIET<br>\
Ay, madam, from the reach of these my hands:<br>\
Would none but I might venge my cousin's death!<br>\
LADY CAPULET<br>\
We will have vengeance for it, fear thou not:<br>\
Then weep no more. I'll send to one in Mantua,<br>\
Where that same banish'd runagate doth live,<br>\
Shall give him such an unaccustom'd dram,<br>\
That he shall soon keep Tybalt company:<br>\
And then, I hope, thou wilt be satisfied.<br>\
JULIET<br>\
Indeed, I never shall be satisfied<br>\
With Romeo, till I behold him--dead--<br>\
Is my poor heart for a kinsman vex'd.<br>\
Madam, if you could find out but a man<br>\
To bear a poison, I would temper it;<br>\
That Romeo should, upon receipt thereof,<br>\
Soon sleep in quiet. O, how my heart abhors<br>\
To hear him named, and cannot come to him.<br>\
To wreak the love I bore my cousin<br>\
Upon his body that slaughter'd him!<br>\
LADY CAPULET<br>\
Find thou the means, and I'll find such a man.<br>\
But now I'll tell thee joyful tidings, girl.<br>\
JULIET<br>\
And joy comes well in such a needy time:<br>\
What are they, I beseech your ladyship?<br>\
LADY CAPULET<br>\
Well, well, thou hast a careful father, child;<br>\
One who, to put thee from thy heaviness,<br>\
Hath sorted out a sudden day of joy,<br>\
That thou expect'st not nor I look'd not for.<br>\
JULIET<br>\
Madam, in happy time, what day is that?<br>\
LADY CAPULET<br>\
Marry, my child, early next Thursday morn,<br>\
The gallant, young and noble gentleman,<br>\
The County Paris, at Saint Peter's Church,<br>\
Shall happily make thee there a joyful bride.<br>\
JULIET<br>\
Now, by Saint Peter's Church and Peter too,<br>\
He shall not make me there a joyful bride.<br>\
I wonder at this haste; that I must wed<br>\
Ere he, that should be husband, comes to woo.<br>\
I pray you, tell my lord and father, madam,<br>\
I will not marry yet; and, when I do, I swear,<br>\
It shall be Romeo, whom you know I hate,<br>\
Rather than Paris. These are news indeed!<br>\
LADY CAPULET<br>\
Here comes your father; tell him so yourself,<br>\
And see how he will take it at your hands.<br>\
Enter CAPULET and Nurse<br>\
<br>\
CAPULET<br>\
When the sun sets, the air doth drizzle dew;<br>\
But for the sunset of my brother's son<br>\
It rains downright.<br>\
How now! a conduit, girl? what, still in tears?<br>\
Evermore showering? In one little body<br>\
Thou counterfeit'st a bark, a sea, a wind;<br>\
For still thy eyes, which I may call the sea,<br>\
Do ebb and flow with tears; the bark thy body is,<br>\
Sailing in this salt flood; the winds, thy sighs;<br>\
Who, raging with thy tears, and they with them,<br>\
Without a sudden calm, will overset<br>\
Thy tempest-tossed body. How now, wife!<br>\
Have you deliver'd to her our decree?<br>\
LADY CAPULET<br>\
Ay, sir; but she will none, she gives you thanks.<br>\
I would the fool were married to her grave!<br>\
CAPULET<br>\
Soft! take me with you, take me with you, wife.<br>\
How! will she none? doth she not give us thanks?<br>\
Is she not proud? doth she not count her blest,<br>\
Unworthy as she is, that we have wrought<br>\
So worthy a gentleman to be her bridegroom?<br>\
JULIET<br>\
Not proud, you have; but thankful, that you have:<br>\
Proud can I never be of what I hate;<br>\
But thankful even for hate, that is meant love.<br>\
CAPULET<br>\
How now, how now, chop-logic! What is this?<br>\
'Proud,' and 'I thank you,' and 'I thank you not;'<br>\
And yet 'not proud,' mistress minion, you,<br>\
Thank me no thankings, nor, proud me no prouds,<br>\
But fettle your fine joints 'gainst Thursday next,<br>\
To go with Paris to Saint Peter's Church,<br>\
Or I will drag thee on a hurdle thither.<br>\
Out, you green-sickness carrion! out, you baggage!<br>\
You tallow-face!<br>\
LADY CAPULET<br>\
Fie, fie! what, are you mad?<br>\
JULIET<br>\
Good father, I beseech you on my knees,<br>\
Hear me with patience but to speak a word.<br>\
CAPULET<br>\
Hang thee, young baggage! disobedient wretch!<br>\
I tell thee what: get thee to church o' Thursday,<br>\
Or never after look me in the face:<br>\
Speak not, reply not, do not answer me;<br>\
My fingers itch. Wife, we scarce thought us blest<br>\
That God had lent us but this only child;<br>\
But now I see this one is one too much,<br>\
And that we have a curse in having her:<br>\
Out on her, hilding!<br>\
Nurse<br>\
God in heaven bless her!<br>\
You are to blame, my lord, to rate her so.<br>\
CAPULET<br>\
And why, my lady wisdom? hold your tongue,<br>\
Good prudence; smatter with your gossips, go.<br>\
Nurse<br>\
I speak no treason.<br>\
CAPULET<br>\
O, God ye god-den.<br>\
Nurse<br>\
May not one speak?<br>\
CAPULET<br>\
Peace, you mumbling fool!<br>\
Utter your gravity o'er a gossip's bowl;<br>\
For here we need it not.<br>\
LADY CAPULET<br>\
You are too hot.<br>\
CAPULET<br>\
God's bread! it makes me mad:<br>\
Day, night, hour, tide, time, work, play,<br>\
Alone, in company, still my care hath been<br>\
To have her match'd: and having now provided<br>\
A gentleman of noble parentage,<br>\
Of fair demesnes, youthful, and nobly train'd,<br>\
Stuff'd, as they say, with honourable parts,<br>\
Proportion'd as one's thought would wish a man;<br>\
And then to have a wretched puling fool,<br>\
A whining mammet, in her fortune's tender,<br>\
To answer 'I'll not wed; I cannot love,<br>\
I am too young; I pray you, pardon me.'<br>\
But, as you will not wed, I'll pardon you:<br>\
Graze where you will you shall not house with me:<br>\
Look to't, think on't, I do not use to jest.<br>\
Thursday is near; lay hand on heart, advise:<br>\
An you be mine, I'll give you to my friend;<br>\
And you be not, hang, beg, starve, die in<br>\
the streets,<br>\
For, by my soul, I'll ne'er acknowledge thee,<br>\
Nor what is mine shall never do thee good:<br>\
Trust to't, bethink you; I'll not be forsworn.<br>\
Exit<br>\
<br>\
JULIET<br>\
Is there no pity sitting in the clouds,<br>\
That sees into the bottom of my grief?<br>\
O, sweet my mother, cast me not away!<br>\
Delay this marriage for a month, a week;<br>\
Or, if you do not, make the bridal bed<br>\
In that dim monument where Tybalt lies.<br>\
LADY CAPULET<br>\
Talk not to me, for I'll not speak a word:<br>\
Do as thou wilt, for I have done with thee.<br>\
Exit<br>\
<br>\
JULIET<br>\
O God!--O nurse, how shall this be prevented?<br>\
My husband is on earth, my faith in heaven;<br>\
How shall that faith return again to earth,<br>\
Unless that husband send it me from heaven<br>\
By leaving earth? comfort me, counsel me.<br>\
Alack, alack, that heaven should practise stratagems<br>\
Upon so soft a subject as myself!<br>\
What say'st thou? hast thou not a word of joy?<br>\
Some comfort, nurse.<br>\
Nurse<br>\
Faith, here it is.<br>\
Romeo is banish'd; and all the world to nothing,<br>\
That he dares ne'er come back to challenge you;<br>\
Or, if he do, it needs must be by stealth.<br>\
Then, since the case so stands as now it doth,<br>\
I think it best you married with the county.<br>\
O, he's a lovely gentleman!<br>\
Romeo's a dishclout to him: an eagle, madam,<br>\
Hath not so green, so quick, so fair an eye<br>\
As Paris hath. Beshrew my very heart,<br>\
I think you are happy in this second match,<br>\
For it excels your first: or if it did not,<br>\
Your first is dead; or 'twere as good he were,<br>\
As living here and you no use of him.<br>\
JULIET<br>\
Speakest thou from thy heart?<br>\
Nurse<br>\
And from my soul too;<br>\
Or else beshrew them both.<br>\
JULIET<br>\
Amen!<br>\
Nurse<br>\
What?<br>\
JULIET<br>\
Well, thou hast comforted me marvellous much.<br>\
Go in: and tell my lady I am gone,<br>\
Having displeased my father, to Laurence' cell,<br>\
To make confession and to be absolved.<br>\
Nurse<br>\
Marry, I will; and this is wisely done.<br>\
Exit<br>\
<br>\
JULIET<br>\
Ancient damnation! O most wicked fiend!<br>\
Is it more sin to wish me thus forsworn,<br>\
Or to dispraise my lord with that same tongue<br>\
Which she hath praised him with above compare<br>\
So many thousand times? Go, counsellor;<br>\
Thou and my bosom henceforth shall be twain.<br>\
I'll to the friar, to know his remedy:<br>\
If all else fail, myself have power to die.<br>\
Exit";