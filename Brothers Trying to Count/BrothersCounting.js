var storyContent = ﻿{"inkVersion":19,"root":[[{"#":"theme: dark"},{"#":"author: Jason Warren"},{"->":"Intro"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"Intro":[["^Which brother would you like to watch count from one to five? ",{"#":"CLASS: narrator"},"\n","^I'm sure they'll all be very good at it. ",{"#":"CLASS: narrator"},"\n","ev","str","^Max","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Joe","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Ollie","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^Harry","/str",{"CNT?":"Harry.Gone1"},"!","/ev",{"*":".^.c-3","flg":5},["ev",{"^->":"Intro.0.32.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"CNT?":"Max"},{"CNT?":"Joe"},"&&",{"CNT?":"Ollie"},"&&",{"CNT?":"Harry"},"&&","/ev",{"*":".^.^.c-4","flg":3},{"s":["^Thanks for playing! ",{"->":"$r","var":true},null]}],{"c-0":["^ ",{"#":"CLASS: choice"},"\n",{"->":"Max"},{"#f":5}],"c-1":["^ ",{"#":"CLASS: choice"},"\n",{"->":"Joe"},{"#f":5}],"c-2":["^ ",{"#":"CLASS: choice"},"\n",{"->":"Ollie"},{"#f":5}],"c-3":["^ ",{"#":"CLASS: choice"},"\n",{"->":"Harry"},{"#f":5}],"c-4":["ev",{"^->":"Intro.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.32.s"},[{"#n":"$r2"}],"\n",{"->":"Ending"},{"#f":5}]}],{"#f":1}],"Max":[[{"#":"Clear"},"^Hi! ",{"#":"CLASS: max"},"\n","ev","str","^Which number comes first, Max?","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"#":"CLASS: choice"},"\n",{"->":"Max.Answer"},{"#f":5}]}],{"Answer":[[["ev","visit",6,"%","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"ev","du",5,"==","/ev",{"->":".^.s5","c":true},"nop",{"s0":["pop","^One.",{"->":".^.^.41"},null],"s1":["pop","^Two.",{"->":".^.^.41"},null],"s2":["pop","^Three.",{"->":".^.^.41"},null],"s3":["pop","^Four.",{"->":".^.^.41"},null],"s4":["pop","^Five.",{"->":".^.^.41"},null],"s5":["pop","^I'm done, but I could start again from one if that would make you happy?",{"->":".^.^.41"},null],"#f":5}],"^ ",{"#":"CLASS: max"},"\n","ev","str","^And then?","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Choose a different brother.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"#":"CLASS: choice"},"\n",{"->":".^.^.^"},{"#f":5}],"c-1":["^ ",{"#":"CLASS: choice"},"\n",{"->":"Intro"},{"#f":5}]}],{"#f":1}],"#f":1}],"Joe":[[{"#":"Clear"},"^Hello. ",{"#":"CLASS: joe"},"\n","ev","str","^Which number comes first, Joe?","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"#":"CLASS: choice"},"\n",{"->":"Joe.Answer"},{"#f":5}]}],{"Answer":[[["ev","visit",3,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","^One.",{"->":".^.^.29"},null],"s1":["pop","^Two.",{"->":".^.^.29"},null],"s2":["pop","^Actually I liked one best. I'll stick with that.",{"->":".^.^.29"},null],"s3":["pop","^One.",{"->":".^.^.29"},null],"#f":5}],"^ ",{"#":"CLASS: joe"},"\n","ev","str","^And then?","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Choose a different brother.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"#":"CLASS: choice"},"\n",{"->":".^.^.^"},{"#f":5}],"c-1":["^ ",{"#":"CLASS: choice"},"\n",{"->":"Intro"},{"#f":5}]}],{"#f":1}],"#f":1}],"Ollie":[[{"#":"Clear"},"^Alright. ",{"#":"CLASS: ollie"},"\n","ev","str","^Which number comes first, Ollie?","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"#":"CLASS: choice"},"\n",{"->":"Ollie.Answer"},{"#f":5}]}],{"Answer":[[["ev","visit",5,"seq","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"ev","du",4,"==","/ev",{"->":".^.s4","c":true},"nop",{"s0":["pop","^One.",{"->":".^.^.35"},null],"s1":["pop","^Two.",{"->":".^.^.35"},null],"s2":["pop","^I'm hungry.",{"->":".^.^.35"},null],"s3":["pop","^Can we have a break?",{"->":".^.^.35"},null],"s4":["pop","^This is your fault!",{"->":".^.^.35"},null],"#f":5}],"^ ",{"#":"CLASS: ollie"},"\n","ev","str","^And then?","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Choose a different brother.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"#":"CLASS: choice"},"\n",{"->":".^.^.^"},{"#f":5}],"c-1":["^ ",{"#":"CLASS: choice"},"\n",{"->":"Intro"},{"#f":5}]}],{"#f":1}],"#f":1}],"Harry":[[{"#":"Clear"},"^Will this take long? ",{"#":"CLASS: harry"},"\n","ev","str","^Which number comes first, Harry?","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"#":"CLASS: choice"},"\n",{"->":"Harry.Answer"},{"#f":5}]}],{"Answer":[[["ev","visit",3,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"ev","du",2,"==","/ev",{"->":".^.s2","c":true},"ev","du",3,"==","/ev",{"->":".^.s3","c":true},"nop",{"s0":["pop","^One.",{"->":".^.^.29"},null],"s1":["pop","^Two.",{"->":".^.^.29"},null],"s2":["pop",{"->":"Harry.Gone1"},{"->":".^.^.29"},null],"s3":["pop",{"->":".^.^.29"},null],"#f":5}],"^ ",{"#":"CLASS: harry"},"\n","ev","str","^And then?","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Choose a different brother.","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":["^ ",{"#":"CLASS: choice"},"\n",{"->":".^.^.^"},{"#f":5}],"c-1":["^ ",{"#":"CLASS: choice"},"\n",{"->":"Intro"},{"#f":5}]}],{"#f":1}],"Gone1":[["^Fuck this, I'm bored. ",{"#":"CLASS: harry"},"\n","ev","str","^Harry?","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"#":"CLASS: choice"},"\n",{"->":"Harry.Gone2"},{"#f":5}]}],{"#f":1}],"Gone2":[["^I think he's gone, sorry. ",{"#":"CLASS: narrator"},"\n","ev","str","^Choose a different brother.","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":["^ ",{"#":"CLASS: choice"},"\n",{"->":"Intro"},{"#f":5}]}],{"#f":1}],"#f":1}],"Ending":[{"#":"Clear"},{"#":"CLASS: end"},"^The End","\n","end",{"#f":1}],"#f":1}],"listDefs":{}};