A                     p                       selects all p elements.                                                                                 plate                       Select the plates
A                     p                       selects all p elements.                                                                                 bento                       Select the bento boxes
#id                   ul#long                 selects ul id="long"                                                                                    #fancy                      Select the fancy plate
A  B                  #fancy  span            selects any span elements that are inside of the element with id="fancy"                                plate apple                 Select the apple on the plate
#id  A                #cool span              selects all span elements that are inside of elements with id="cool"                                    #fancy pickle               Select the pickle on the fancy plate
.className            .neato                  selects all elements with class="neato"                                                                 .small                      Select the small apples
A.className           ul.important            selects all ul elements that have class="important"                                                     orange.small                Select the small oranges
...                   ...                     Combine what you learned in the last few levels to solve this one!                                      bento orange.small          Select the small oranges in the bentos
A, B                  p, .fun                 selects all p elements as well as all elements with class="fun"                                         plate, bento                Select all the plates and bentos
*                     p *                     selects any element inside all p elements.                                                              *                           Select all the things!
A *                   ul.fancy *              selects every element inside all ul class="fancy" elements.                                             plate *                     Select everything on a plate
A + B                 div + a                 selects every a element that directly follows a div                                                     plate + apple               Select every apple thats next to a plate
A ~ B                 A ~ B                   selects all B that follow a A                                                                           bento ~ pickle              Select the pickles beside the bento
A > B                 A > B                   selects all B that are a direct children A                                                              plate > apple               Select the apple directly on a plate
:first-child          div p:first-child       selects all first child p elements that are in a div.                                                   orange:first-child          Select the top orange
:only-child           ul li:only-child        selects the only li element that are in a ul.                                                           plate :only-child           Select the apple and the pickle on the plates
:last-child           ul li:last-child        selects the last li elements inside of any ul.                                                          .small:last-child           Select the small apple and the pickle
:nth-child(A)         div p:nth-child(2)      selects the second p in every div                                                                       plate:nth-child(3)          Select the 3rd plate
:nth-last-child(A)    :nth-last-child(2)      selects all second-to-last child elements.                                                              bento:nth-last-child(3)     Select the 1st bento
:fisrt-of-type        span:first-of-type      selects the first span in any element.                                                                  apple:first-of-type         Select first apple
:nth-of-type(a)       .example:nth-of-type(odd) selects all odd instances of a the example class.                                                     plate:nth-of-type(even)     Select all even plates
:nth-of-type(An+B)    span:nth-of-type(6n+2)  selects every 6th instance of a span, starting from (and including) the second instance.                plate:nth-of-type(2n +3)    Select every 2nd plate, starting from the 3rd
:only-of-type         p span:only-of-type     selects a span within any p if it is the only span in there.                                            plate apple:only-of-type    Select the apple on the middle plate
:last-of-type         p span:last-of-type     selects the last span in every p.                                                                       .small:last-of-type         Select the last apple and orange
:empty                div:empty               selects all empty div elements.                                                                         bento:empty                 Select the empty bentos
:not(X)               :not(.big, .medium)     selects all elements that do not have class="big" or class="medium"                                     apple:not(.small)           Select the big apples
[attribute]           [type]                  selects all elements that have a type="anything". attribute                                             [for]                       Select the items for someone
A[attribute]          a[href]                 selects all a elements that have a href="anything" attribute.                                           plate[for]                  Select the plates for someone
[attribute="value"]   input[type="checkbox"]  selects all checkbox input elements.                                                                    [for="Vitaly"]              Select Vitalys meal
[attribute^="value"]  .toy[category^="Swim"]  selects elements with class toy and either category="Swimwear or category="Swimming".                   [for^="Sa"]                 Select the items for names that start with 'Sa'
[attribute$="value"]  img[src$=".jpg"]        selects all images display a .jpg image.                                                                [for$="ato"]                Select the items for names that end with 'ato'
[attribute*="value"]  [class*="heading"]      selects all elements with "heading" in their class, like class="main-heading" and class="sub-heading"   [for*="obb"]                Select the meals for names that contain 'obb'

//A                                     //div                           selects all div elements.                                                     //plate
//A                                     //p                             will select all p elements.                                                   //bento
//A/B                                   //div/a                         will select all a elements. within a div.                                     //plate/apple
//*                                     //*                             will select all elements.                                                     //*
//*/A                                   //*/div                         will select all div elements with atleast one parent element                  //*/apple
//*[@id="Element ID"]                   //ul[@id="long"]                will select <ul id="long">                                                    //plate[@id="fancy"]
//A/B                                   //*[@id="fancy"]/span           will select any <span> that is a descendant of any element with id="fancy"    //plate/apple
//*[@id="id"]/A                         //*[@id="cool"]/span            will select all <span> elements that are inside of elements with id="cool"    //plate[@id="fancy"]/pickle
//*[contains(@Attribute, "value")]      //*[contains(@class,"neato")]   selects all elements with class="neato"                                       //apple[contains(@class, "small")]
//A[contains(@Attribute, "value")]      //input[@placeholder="Name"]    will select all elements with <input> that have placeholder="Name"            //orange[contains(@class, "small")]
...                                     ...                             ...                                                                           //bento/orange[contains(@class, "small")]
//A | //B                               //a|//p|//div                   will select all a, p and div elements                                         //plate | //bento
//A/*                                   //ul[@id="fancy"]/*             will select every element inside all <ul id="fancy"> elements.                //plate/*
//A/following-sibling::B                //div//following-sibling::a     will select every a element that directly follows a div                       //plate/following-sibling::apple
//A/preceding-sibling::B                //p/preceding-sibling::div      will select every element with <div> that directly precends a p               //plate/preceding-sibling::pickle
(A)[index]                              (//a)[2]                        will select second A                                                          (//pickle)[3]
//A/B                                   A//B                            will select all B that are a direct children A                                //plate/apple
last()                                  //div/*[last()]                 selects all the last elements within <div> elements.                          //plate/*[last()]
//A[last()]                             //div/*[last()]                 selects all the last elements within <div> elements.                          //plate/apple[last()]
//A[last()-N]                           (//div)[last()-3]               selects the 4th last <div> element.                                           //plate/apple[last()-1]
//*[@attribute]                         //*[@type]                      selects all elements that have a type="anything". attribute                   //*[@for]
//A[@attribute]                         //input[@disabled]              selects all input elements with the disabled attribute                        //plate[@for]
//*[@attribute="value"]                 //input[@type="checkbox"]       selects all checkbox input elements.                                          //*[@for="Vitaly"]
//B[@attribute="value" and otherAttb="other value"]/A                                               //input[@type="text" and @placeholer="username"]                           selects all text input elements with placeholder username.
//*[stars-with(@attribute, "value")]                                                                //toy[starts-with(@category,"Swim")]                                       selects elements with class toy and category "Swimwear"
//substring(@attribute, string-length(@attribute) - string-length("end text") +1) = "end text"]     //img[substring(@src, string-length(@src) - string-length('.jpg')+1 ) '.jpg' ]    selects all images display a .jpg image.