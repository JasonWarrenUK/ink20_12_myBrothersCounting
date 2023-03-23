# theme: dark
# author: Jason Warren

->Intro

======Intro======
Which brother would you like to watch count from one to five? # CLASS: narrator
I'm sure they'll all be very good at it. # CLASS: narrator
+[Max] # CLASS: choice
    ->Max
+[Joe] # CLASS: choice
    ->Joe
+[Ollie] # CLASS: choice 
    ->Ollie
+{not Harry.Gone1}[Harry] # CLASS: choice
    ->Harry
+{Max}{Joe}{Ollie}{Harry} Thanks for playing! 
    ->Ending

======Max======
# Clear
//Cycle
Hi! # CLASS: max
+[Which number comes first, Max?] # CLASS: choice
    ->Answer
=Answer
    {&One.|Two.|Three.|Four.|Five.|I'm done, but I could start again from one if that would make you happy?} # CLASS: max
    +[And then?] # CLASS: choice
        ->Answer
    + [Choose a different brother.] # CLASS: choice
        ->Intro
    
======Joe======
# Clear
//Sequence
Hello. # CLASS: joe
+[Which number comes first, Joe?] # CLASS: choice
    ->Answer
=Answer
    {One.|Two.|Actually I liked one best. I'll stick with that.|One.} # CLASS: joe
    +[And then?] # CLASS: choice
        ->Answer
    +[Choose a different brother.] # CLASS: choice 
        ->Intro
    
======Ollie======
# Clear
//Shuffle    
Alright. # CLASS: ollie
+[Which number comes first, Ollie?] # CLASS: choice
    ->Answer
=Answer
    {~One.|Two.|I'm hungry.|Can we have a break?|This is your fault!} # CLASS: ollie
    +[And then?] # CLASS: choice 
        ->Answer
    +[Choose a different brother.] # CLASS: choice 
        ->Intro
    
======Harry======
# Clear
//Limited   
Will this take long? # CLASS: harry
+[Which number comes first, Harry?] # CLASS: choice 
    ->Answer
=Answer
    {!One.|Two.|->Gone1} # CLASS: harry
    +[And then?] # CLASS: choice 
        ->Answer
    +[Choose a different brother.] # CLASS: choice
        ->Intro
=Gone1
    Fuck this, I'm bored. # CLASS: harry
    +[Harry?] # CLASS: choice
        ->Gone2
=Gone2
    I think he's gone, sorry. # CLASS: narrator
    +[Choose a different brother.] # CLASS: choice
        ->Intro
        
======Ending======
# Clear
# CLASS: end
The End
->END