//	HYPE.documents["index"]

(function(){(function k(){function l(a,b,d){var c=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(k),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),c=h,false==!0&&(c=""),b.type="text/javascript",b.src=c+"/"+d,a.appendChild(b)):window[b].push(k),c=!0);return c}var h="index.hyperesources",c="index",e="index_hype_container";if(false==!1)try{for(var f=document.getElementsByTagName("script"),
a=0;a<f.length;a++){var b=f[a].src;if(null!=b&&-1!=b.indexOf("index_hype_generated_script.js")){h=b.substr(0,b.lastIndexOf("/"));break}}}catch(n){}if(false==!1&&(a=navigator.userAgent.match(/MSIE (\d+\.\d+)/),a=parseFloat(a&&a[1])||null,a=l("HYPE_552","HYPE_dtl_552",!0==(null!=a&&10>a||false==!0)?"HYPE-552.full.min.js":"HYPE-552.thin.min.js"),false==!0&&(a=a||l("HYPE_w_552","HYPE_wdtl_552","HYPE-552.waypoints.min.js")),a))return;
f=window.HYPE.documents;if(null!=f[c]){b=1;a=c;do c=""+a+"-"+b++;while(null!=f[c]);for(var d=document.getElementsByTagName("div"),b=!1,a=0;a<d.length;a++)if(d[a].id==e&&null==d[a].getAttribute("HYP_dn")){var b=1,g=e;do e=""+g+"-"+b++;while(null!=document.getElementById(e));d[a].id=e;b=!0;break}if(!1==b)return}b=[];b=[{name:"myDrag",source:"function(hypeDocument, element, event) {\t\n\tc = [100, 400, 100, 200];\n\t\n\t\n\tp = element.parentNode;\n\tpX = p.getBoundingClientRect().left;\n\tpY = p.getBoundingClientRect().top;\n\tgX = event['hypeGestureXPosition'];\n\tgY = event['hypeGestureYPosition'];\n\t\n\teW = element.getBoundingClientRect().width;\n\tc[1] = c[1] + eW;\n\teH = element.getBoundingClientRect().height;\n\tc[3] = c[3] + eH;\n\n\t\n\tnX = gX - pX - (eW/2);\n\tnY = gY - pY - (eH/2);\n\tif(nX > c[0] && nX < c[1] && nY > c[2] && nY < c[3])\n\t{\n\telement.style.left = nX + 'px';\n\telement.style.top = nY + 'px';\n\t}else if(nX > c[0] && nX < c[1] && (nY <= c[2] || nY >= c[3]))\n\t{\n\t\telement.style.left = nX + 'px';\n\t}else if((nX <= c[0] || nX >= c[1]) && nY > c[2] && nY < c[3])\n\t{\n\t\t\telement.style.top = nY + 'px';\n\t}\n\t\n}",identifier:"5"},{name:"hide",source:"function(hypeDocument, element, event) {\t\nhypeDocument.getElementById(\"inst\").style.display = \"none\";\nwindow.free=0;\nwindow.score =24;\t\n}",identifier:"50"},{name:"show",source:"function(hypeDocument, element, event) {\thypeDocument.getElementById(\"inst\").style.display = \"block\";\n\n\t\n}",identifier:"51"},{name:"win",source:"function(hypeDocument, element, event) {\t\n\tdocument.getElementById(\"sc\").innerHTML = \"\";\nvar textBox = document.getElementById(\"sc\");\ntextBox.innerHTML = textBox.innerHTML + (window.score); \n\n\n}",identifier:"52"},{name:"brick1",source:"function(hypeDocument, element, event) {\twindow.brick=1;\n\t\n}",identifier:"67"},{name:"brick2",source:"function(hypeDocument, element, event) {window.brick=2;\t\n\t\n}",identifier:"68"},{name:"brick3",source:"function(hypeDocument, element, event) {\twindow.brick=3;\n\t\n}",identifier:"69"},{name:"brck4",source:"function(hypeDocument, element, event) {\t\n\twindow.brick=4;\n}",identifier:"70"},{name:"brick5",source:"function(hypeDocument, element, event) {\t\n\twindow.brick=5;\n}",identifier:"71"},{name:"brick6",source:"function(hypeDocument, element, event) {window.brick=6;\t\n\t\n}",identifier:"72"},{name:"brick7",source:"function(hypeDocument, element, event) {\twindow.brick=7;\n\t\n}",identifier:"73"},{name:"brick8",source:"function(hypeDocument, element, event) {\twindow.brick=8;\n\t\n}",identifier:"74"},{name:"brick9",source:"function(hypeDocument, element, event) {\twindow.brick=9;\n\t\n}",identifier:"75"},{name:"brick10",source:"function(hypeDocument, element, event) {\twindow.brick=10;\n\t\n}",identifier:"76"},{name:"brick11",source:"function(hypeDocument, element, event) {\t\n\twindow.brick=11;\n}",identifier:"77"},{name:"brick12",source:"function(hypeDocument, element, event) {\t\n\twindow.brick=12;\n}",identifier:"78"},{name:"free",source:"function(hypeDocument, element, event) {\nif (window.brick==1) {window.score =window.score-1;window.free = window.free+3;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"fn\").style.display = \"none\";}\n\nif (window.brick==2) {window.score =window.score-1;window.free = window.free+3;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"rwp\").style.display = \"none\";}\n\nif (window.brick==3) {window.score =window.score-1;window.free = window.free+3;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"tr\").style.display = \"none\";}\n\nif (window.brick==4) {window.score =window.score-1;window.free = window.free+2;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"tru\").style.display = \"none\";}\n\nif (window.brick==5) {window.score =window.score-1;window.free = window.free+2;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"ga\").style.display = \"none\";}\n\nif (window.brick==6) {window.score =window.score-1;window.free = window.free+2;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"gu\").style.display = \"none\";}\n\nif (window.brick==7) {window.score =window.score-1;window.free = window.free+2;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"go\").style.display = \"none\";}\n\nif (window.brick==8) {window.score =window.score-1;window.free = window.free+4;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"wp\").style.display = \"none\";}\n\nif (window.brick==9) {window.score =window.score-1;window.free = window.free+2;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"sii\").style.display = \"none\";}\n\nif (window.brick==10) {window.score =window.score-1;window.free = window.free+2;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"ra\").style.display = \"none\";}\n\nif (window.brick==11) {window.score =window.score-1;window.free = window.free+12;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"ha\").style.display = \"none\";}\n\nif (window.brick==12) {window.score =window.score-1;window.free = window.free+3;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"rp\").style.display = \"none\";}\n\nif (window.brick==13) {window.score =window.score-1;window.free = window.free+3;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"np\").style.display = \"none\";}\n\nif (window.brick==14) {window.score =window.score-1;window.free = window.free+3;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"lp\").style.display = \"none\";}\n\nif (window.brick==15) {window.score =window.score-1;window.free = window.free+3;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"ds\").style.display = \"none\";}\n\nif (window.brick==16) {window.score =window.score-1;window.free = window.free+2;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"san\").style.display = \"none\";}\n\nif (window.brick==17) {window.score =window.score-1;window.free = window.free+2;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"race\").style.display = \"none\";}\n\nif (window.brick==18) {window.score =window.score-1;window.free = window.free+2;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"sex\").style.display = \"none\";}\n\nif (window.brick==19) {window.score =window.score-1;window.free = window.free+2;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"one\").style.display = \"none\";}\n\nif (window.brick==20) {window.score =window.score-1;window.free = window.free+4;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"RB\").style.display = \"none\";}\n\nif (window.brick==21) {window.score =window.score-1;window.free = window.free+2;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"sr\").style.display = \"none\";}\n\nif (window.brick==22) {window.score =window.score-1;window.free = window.free+2;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"ra2\").style.display = \"none\";}\n\nif (window.brick==23) {window.score =window.score-1;window.free = window.free+12;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"ha2\").style.display = \"none\";}\n\nif (window.brick==24) {window.score =window.score-1;window.free = window.free+3;if (window.free>=12){hypeDocument.showSceneNamed('happy', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nhypeDocument.getElementById(\"dp\").style.display = \"none\";}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\t\n}",identifier:"79"},{name:"br13",source:"function(hypeDocument, element, event) {window.brick=13;\n\t\n}",identifier:"169"},{name:"br14",source:"function(hypeDocument, element, event) {\twindow.brick=14;\n\t\n}",identifier:"170"},{name:"br15",source:"function(hypeDocument, element, event) {\twindow.brick=15;\n\t\n}",identifier:"171"},{name:"br16",source:"function(hypeDocument, element, event) {\twindow.brick=16;\n\t\n}",identifier:"172"},{name:"br17",source:"function(hypeDocument, element, event) {\t\nwindow.brick=17;\t\n}",identifier:"173"},{name:"br18",source:"function(hypeDocument, element, event) {\t\n\twindow.brick=18;\n}",identifier:"174"},{name:"br19",source:"function(hypeDocument, element, event) {\twindow.brick=19;\n\t\n}",identifier:"175"},{name:"br20",source:"function(hypeDocument, element, event) {\t\n\twindow.brick=20;\n}",identifier:"176"},{name:"br21",source:"function(hypeDocument, element, event) {\twindow.brick=21;\n\t\n}",identifier:"177"},{name:"br22",source:"function(hypeDocument, element, event) {\t\nwindow.brick=22;\t\n}",identifier:"178"},{name:"br23",source:"function(hypeDocument, element, event) {\t\nwindow.brick=23;\t\n}",identifier:"179"},{name:"br24",source:"function(hypeDocument, element, event) {\twindow.brick=24;\n\t\n}",identifier:"180"},{name:"LibCon",source:"function(hypeDocument, element, event) {\t\n\twindow.idol =prompt('Conservative =1,Liberal =2');\nwindow.idol=parseInt(window.idol,10);\nif ( window.idol==2 ) { hypeDocument.showSceneNamed('con', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nelse {hypeDocument.showSceneNamed('lib', hypeDocument.kSceneTransitionCrossfade, 1.1)}\n}",identifier:"190"},{name:"next",source:"function(hypeDocument, element, event) {\twindow.free=0\n\twindow.next=1\n\tif ( window.idol==2 ) { hypeDocument.showSceneNamed('lib', hypeDocument.kSceneTransitionCrossfade, 1.1)}\nelse {hypeDocument.showSceneNamed('con', hypeDocument.kSceneTransitionCrossfade, 1.1)}\n\n\n\t\n}",identifier:"192"},{name:"HidNext",source:"function(hypeDocument, element, event) {\t\nif (window.next ==1)\t{hypeDocument.getElementById(\"hide\").style.display = \"none\";}\n}",identifier:"193"}];d={};g={};for(a=0;a<b.length;a++)try{g[b[a].identifier]=b[a].name,d[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(m){window.console&&window.console.log(m),
d[b[a].name]=function(){}}a=new HYPE_552(c,e,{"3":{p:1,n:"happy_2x.jpg",g:"54",o:true,t:"@2x"},"1":{p:1,n:"images_2x.jpg",g:"13",o:true,t:"@2x"},"4":{p:1,n:"images-1.jpg",g:"82",o:true,t:"@1x"},"2":{p:1,n:"happy.jpg",g:"54",o:true,t:"@1x"},"0":{p:1,n:"images.jpg",g:"13",o:true,t:"@1x"},"5":{p:1,n:"images-1_2x.jpg",g:"82",o:true,t:"@2x"}},h,[],d,[{n:"Intro",o:"114",X:[0]},{n:"con",o:"86",X:[1]},{n:"lib",o:"1",X:[2]},{n:"happy",o:"21",X:[3]}],[{A:{a:[{p:4,h:"50"}]},o:"118",p:"600px",x:0,cA:false,Z:400,Y:600,c:"#FFFFFF",L:[],bY:1,d:600,U:{"183":{V:{"Main Timeline":"198"},W:"198",n:"Symbol 2"}},T:{"167_pressed":{i:"167_pressed",n:"167_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#B3EECC",s:"#18EA00",o:"194"},{y:1,i:"g",s:"#B3EECC",z:0,o:"194",f:"c"}],f:30},"198":{b:[],c:"183",z:0,i:"198",a:[],n:"Main Timeline",s:"183",f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["195","196","183","194","197"],v:{"196":{G:"#000000",aU:8,c:38,d:25,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",K:"Solid",t:16,L:"Solid",Z:"break-word",M:4,i:"sc",w:"<br>",N:4,j:"absolute",x:"visible",O:4,k:"div",y:"preserve",bF:"183",P:4,z:1,aS:8,aT:8,a:9,b:13},"197":{aV:8,w:"<span id=\"docs-internal-guid-d1677bbf-d8d5-c379-69ce-2502f7314629\"><p dir=\"ltr\" style=\"line-height:1.38;margin-top:0pt;margin-bottom:0pt;\"><span style=\"font-family: Arial; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-position: normal; font-variant-caps: normal; font-variant-numeric: normal; font-variant-alternates: normal; font-variant-east-asian: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\"><b><font size=\"4\">We have all retreated to the safety and comfort of our respective boxes and here we sit in The Divided States of America. I am tired of being separated from my neighbors, my friends, my country by these boxes. I long to return to my country, The United States of America. Play the box games and let us try to free ourselves from our boxes. Your score is the the combined score in both games. You have to play both games to get a score. High score wins</font></b>.</span></p><div><span style=\"font-family: Arial; color: rgb(0, 0, 0); font-style: normal; font-variant-ligatures: normal; font-variant-position: normal; font-variant-caps: normal; font-variant-numeric: normal; font-variant-alternates: normal; font-variant-east-asian: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\"><br></span></div></span>",x:"visible",a:87,Z:"break-word",b:40,y:"preserve",j:"absolute",z:29,k:"div",s:"Helvetica,Arial,Sans-Serif",aT:8,d:250,c:406,aS:8,t:13,G:"#000000",aU:8,r:"inline"},"194":{b:316,z:30,K:"Solid",c:282,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#18EA00",aU:6,P:1,aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aN:"167_pressed",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"190"}]},F:"center",G:"#000000",aP:"pointer",w:"Do you consider yourself Libral or Conservative<br>",x:"visible",I:"Solid",a:115,y:"preserve",J:"Solid"},"195":{aV:8,w:"<br>",x:"visible",a:254,Z:"break-word",b:181,y:"preserve",j:"absolute",z:32,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",aT:8,k:"div",aS:8,t:16,r:"inline",aU:8,G:"#000000"},"183":{cS:true,x:"visible",a:9,cA:false,b:16,j:"absolute",bX:false,c:78,k:"div",z:31,cL:"183",d:68,bY:1,cK:{a:[{b:"198",p:3,z:false}]},bZ:180,cM:true,cV:[]}}},{o:"113",p:"600px",x:1,cA:false,Z:400,Y:600,c:"#FFFFFF",L:[],bY:1,d:600,U:{"183":{V:{"Main Timeline":"198"},W:"198",n:"Symbol 2"}},T:{"93_pressed":{i:"93_pressed",n:"93_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#929597",o:"202"},{y:1,i:"g",s:"#E8EBED",z:0,o:"202",f:"c"}],f:30},"107_pressed":{i:"107_pressed",n:"107_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#EF823B",o:"221"},{y:1,i:"g",s:"#E8EBED",z:0,o:"221",f:"c"}],f:30},"198":{b:[],c:"183",z:0,i:"198",a:[],n:"Main Timeline",s:"183",f:30},"109_pressed":{i:"109_pressed",n:"109_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#EF9D85",o:"206"},{y:1,i:"g",s:"#E8EBED",z:0,o:"206",f:"c"}],f:30},"101_pressed":{i:"101_pressed",n:"101_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#F03E01",o:"213"},{y:1,i:"g",s:"#E8EBED",z:0,o:"213",f:"c"}],f:30},"94_pressed":{i:"94_pressed",n:"94_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#EF745E",o:"205"},{y:1,i:"g",s:"#E8EBED",z:0,o:"205",f:"c"}],f:30},"88_pressed":{i:"88_pressed",n:"88_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#FFC675",o:"208"},{y:1,i:"g",s:"#E8EBED",z:0,o:"208",f:"c"}],f:30},"90_pressed":{i:"90_pressed",n:"90_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#EDD784",o:"217"},{y:1,i:"g",s:"#E8EBED",z:0,o:"217",f:"c"}],f:30},"92_pressed":{i:"92_pressed",n:"92_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#EF6131",o:"199"},{y:1,i:"g",s:"#E8EBED",z:0,o:"199",f:"c"}],f:30},"105_pressed":{i:"105_pressed",n:"105_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#EF977F",o:"210"},{y:1,i:"g",s:"#E8EBED",z:0,o:"210",f:"c"}],f:30},"111_pressed":{i:"111_pressed",n:"111_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#EF5113",o:"201"},{y:1,i:"g",s:"#E8EBED",z:0,o:"201",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"99_pressed":{i:"99_pressed",n:"99_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#EEA200",o:"220"},{y:1,i:"g",s:"#E8EBED",z:0,o:"220",f:"c"}],f:30},"97_pressed":{i:"97_pressed",n:"97_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#EEB726",o:"214"},{y:1,i:"g",s:"#E8EBED",z:0,o:"214",f:"c"}],f:30}},bZ:180,O:["216","196","183","205","213","206","210","199","201","220","217","221","214","208","202","212","219","215","204","209","200","218","203","207","211"],v:{"200":{c:463,d:32,I:"Solid",J:"Solid",K:"Solid",g:"#BCC8C3",L:"Solid",M:2,w:"",N:2,A:"#FF2600",x:"visible",j:"absolute",B:"#FF2600",k:"div",O:2,C:"#FF2600",z:6,P:2,D:"#FF2600",a:95,b:58},"221":{G:"#000000",aU:8,c:77,d:11,I:"Solid",aN:"107_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:16,g:"#EF823B",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"tr",w:"Talk Radio<br>",N:1,aA:{a:[{p:4,h:"69"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:18,aS:8,aT:8,a:356,b:62},"213":{G:"#000000",aU:8,c:59,d:11,I:"Solid",aN:"101_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:16,g:"#F03E01",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"ra",w:"Rage<br>",N:1,aA:{a:[{p:4,h:"76"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:25,aS:8,aT:8,a:202,b:308},"205":{G:"#000000",aU:8,c:59,d:11,I:"Solid",aN:"94_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:16,g:"#EF745E",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"ha",w:"Hate<br>",N:1,aA:{a:[{p:4,h:"77"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:26,aS:8,aT:8,a:110,b:310},"199":{G:"#000000",aU:8,c:33,d:11,I:"Solid",aN:"92_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:16,g:"#EF6131",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"go",w:"God<br>",N:1,aA:{a:[{p:4,h:"73"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:22,aS:8,aT:8,a:507,b:197},"218":{p:"no-repeat",c:48,q:"100% 100%",d:48,I:"Solid",J:"Solid",K:"Solid",L:"Solid",h:"82",M:1,bN:{a:[{p:4,h:"5"}]},N:1,aI:"50%",A:"#D8DDE4",x:"visible",O:1,j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:4,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",P:1,a:223,aL:"50%",b:135},"201":{G:"#000000",aU:8,c:40,d:11,I:"Solid",aN:"111_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:14,g:"#EF5113",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"gu",w:"Guns<br>",N:1,aA:{a:[{p:4,h:"72"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:21,aS:8,aT:8,a:504,b:156},"214":{G:"#000000",aU:8,c:141,d:10,I:"Solid",aN:"97_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:16,g:"#EEB726",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"rwp",w:"Right Wing Pundits<br>",N:1,aA:{a:[{p:4,h:"68"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:17,aS:8,aT:8,a:195,b:62},"206":{G:"#000000",aU:8,c:179,d:14,I:"Solid",aN:"109_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:16,g:"#EF9D85",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"sii",w:"Self Imposed Ignorance<br>",N:1,aA:{a:[{p:4,h:"75"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:24,aS:8,aT:8,a:303,b:308},"219":{G:"#FF2600",aU:8,c:449,aV:8,d:20,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:24,Z:"break-word",v:"bold",w:"Try to get the Angry Guy out of his box<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:12,aS:8,aT:8,a:79,b:-5},"210":{G:"#000000",aU:8,c:40,d:34,I:"Solid",aN:"105_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:14,g:"#EF977F",L:"Solid",Z:"break-word",aP:"pointer",M:1,w:"White<br>Power<br>",N:1,aA:{a:[{p:4,h:"74"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:23,aS:8,aT:8,a:505,b:242},"183":{cS:true,x:"visible",a:-6,cA:false,b:12,j:"absolute",bX:false,c:77,k:"div",z:29,cL:"183",d:78,bY:1,cK:{a:[{b:"198",p:3,z:false}]},bZ:180,cM:true,cV:[]},"202":{b:59,z:15,K:"Solid",c:12,L:"Solid",d:266,aS:8,M:2,N:2,aT:8,O:2,g:"#929597",aU:8,P:2,i:"rp",aV:8,j:"absolute",k:"div",A:"#FF2600",B:"#FF2600",Z:"break-word",r:"inline",C:"#FF2600",s:"Helvetica,Arial,Sans-Serif",aN:"93_pressed",D:"#FF2600",t:16,aA:{a:[{p:4,h:"78"},{p:4,h:"79"},{p:4,h:"52"}]},G:"#000000",aP:"pointer",w:"Republican&nbsp;<br>Party<br>",x:"visible",I:"Solid",a:63,y:"preserve",J:"Solid"},"196":{G:"#000000",aU:8,c:38,d:25,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",K:"Solid",t:16,L:"Solid",Z:"break-word",M:4,i:"sc",w:"<br>",N:4,j:"absolute",x:"visible",O:4,k:"div",y:"preserve",bF:"183",cM:true,z:1,aS:8,P:4,aT:8,a:9,b:13},"215":{c:54,d:247,I:"Solid",J:"Solid",K:"Solid",g:"#C8CCCE",L:"Solid",M:2,N:2,A:"#FF2600",x:"visible",j:"absolute",B:"#FF2600",P:2,k:"div",C:"#FF2600",z:11,O:2,D:"#FF2600",a:504,b:94},"207":{c:600,d:400,I:"None",J:"None",K:"None",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:0,b:-8},"211":{aV:8,w:"&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <font color=\"#0433ff\">&nbsp;</font>To free him remove the bricks from his box by clicking on them.<br>&nbsp;Some bricks are greater barriers then others and &nbsp;their removal frees you quicker and gives you a higher score.<br>",x:"visible",a:126,Z:"break-word",b:242,y:"preserve",j:"absolute",z:1,k:"div",s:"Helvetica,Arial,Sans-Serif",aT:8,d:36,c:331,aS:8,t:10,G:"#000000",aU:8,r:"inline"},"203":{c:398,d:198,I:"Solid",e:1,J:"Solid",bL:0,K:"Solid",L:"Solid",M:6,w:"",N:6,A:"#000000",x:"visible",j:"absolute",B:"#000000",k:"div",O:6,C:"#000000",z:3,P:6,D:"#000000",a:95,b:95},"216":{aV:8,w:"Score<br>",x:"visible",a:10,Z:"break-word",b:0,y:"preserve",j:"absolute",z:31,k:"div",s:"Helvetica,Arial,Sans-Serif",aT:8,d:15,c:42,aS:8,t:13,G:"#000000",aU:8,r:"inline"},"208":{b:61,z:16,K:"Solid",c:77,L:"Solid",d:11,aS:8,M:1,N:1,aT:8,O:1,g:"#FFC675",aU:8,P:1,i:"fn",aV:8,j:"absolute",k:"div",A:"#000000",B:"#000000",Z:"break-word",r:"inline",C:"#000000",s:"Helvetica,Arial,Sans-Serif",aN:"88_pressed",D:"#000000",t:16,aA:{a:[{p:4,h:"67"},{p:4,h:"79"},{p:4,h:"52"}]},G:"#000000",aP:"pointer",w:"Fox News<br>",x:"visible",I:"Solid",a:94,y:"preserve",J:"Solid"},"220":{G:"#000000",aU:8,c:33,d:11,I:"Solid",aN:"99_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:14,g:"#EEA200",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"ga",w:"Gays<br>",N:1,aA:{a:[{p:4,h:"71"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:20,aS:8,aT:8,a:506,b:106},"212":{aV:8,w:"Click and Drag Him<br>",x:"visible",a:184,Z:"break-word",b:25,y:"preserve",j:"absolute",z:13,k:"div",s:"Helvetica,Arial,Sans-Serif",aT:8,d:13,c:165,aS:8,t:12,G:"#000000",aU:8,r:"inline"},"204":{c:406,d:36,I:"Solid",J:"Solid",K:"Solid",g:"#C1C4C7",L:"Solid",M:2,N:2,A:"#FF2600",x:"visible",j:"absolute",B:"#FF2600",P:2,k:"div",C:"#FF2600",z:9,O:2,D:"#FF2600",a:95,b:305},"217":{G:"#000000",aU:8,c:71,d:11,I:"Solid",aN:"90_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:16,g:"#EDD784",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"tru",w:"Trump<br>",N:1,aA:{a:[{p:4,h:"70"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:19,aS:8,aT:8,a:455,b:62},"209":{c:406,d:36,I:"Solid",J:"Solid",K:"Solid",g:"#C1C4C7",L:"Solid",M:2,N:2,A:"#FF2600",x:"visible",j:"absolute",B:"#FF2600",P:2,k:"div",C:"#FF2600",z:8,O:2,D:"#FF2600",a:95,b:305}}},{o:"3",p:"600px",x:2,cA:false,Z:400,Y:600,c:"#FFFFFF",L:[],bY:1,d:600,U:{"183":{V:{"Main Timeline":"198"},W:"198",n:"Symbol 2"}},T:{"32_pressed":{i:"32_pressed",n:"32_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#FFC675",o:"222"},{y:1,i:"g",s:"#E8EBED",z:0,o:"222",f:"c"}],f:30},"40_pressed":{i:"40_pressed",n:"40_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#EEA200",o:"224"},{y:1,i:"g",s:"#E8EBED",z:0,o:"224",f:"c"}],f:30},"42_pressed":{i:"42_pressed",n:"42_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#EF6131",o:"229"},{y:1,i:"g",s:"#E8EBED",z:0,o:"229",f:"c"}],f:30},"18_pressed":{i:"18_pressed",n:"18_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#929597",o:"226"},{y:1,i:"g",s:"#E8EBED",z:0,o:"226",f:"c"}],f:30},"198":{b:[],c:"183",z:0,i:"198",a:[],n:"Main Timeline",s:"183",f:30},"47_pressed":{i:"47_pressed",n:"47_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#EF745E",o:"244"},{y:1,i:"g",s:"#E8EBED",z:0,o:"244",f:"c"}],f:30},"35_pressed":{i:"35_pressed",n:"35_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#EEB726",o:"230"},{y:1,i:"g",s:"#E8EBED",z:0,o:"230",f:"c"}],f:30},"41_pressed":{i:"41_pressed",n:"41_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#EF5113",o:"227"},{y:1,i:"g",s:"#E8EBED",z:0,o:"227",f:"c"}],f:30},"45_pressed":{i:"45_pressed",n:"45_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#EF9D85",o:"238"},{y:1,i:"g",s:"#E8EBED",z:0,o:"238",f:"c"}],f:30},"43_pressed":{i:"43_pressed",n:"43_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#EF977F",o:"233"},{y:1,i:"g",s:"#E8EBED",z:0,o:"233",f:"c"}],f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30},"38_pressed":{i:"38_pressed",n:"38_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#EDD784",o:"239"},{y:1,i:"g",s:"#E8EBED",z:0,o:"239",f:"c"}],f:30},"46_pressed":{i:"46_pressed",n:"46_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#F03E01",o:"241"},{y:1,i:"g",s:"#E8EBED",z:0,o:"241",f:"c"}],f:30},"36_pressed":{i:"36_pressed",n:"36_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#E8EBED",s:"#EF823B",o:"234"},{y:1,i:"g",s:"#E8EBED",z:0,o:"234",f:"c"}],f:30}},bZ:180,O:["196","183","231","244","241","238","233","229","227","224","239","234","230","222","226","228","232","242","237","236","225","235","243","240","223"],v:{"238":{G:"#000000",aU:8,c:179,d:13,I:"Solid",aN:"45_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:16,g:"#EF9D85",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"sr",w:"Self Rightous Blinders&nbsp;<br>",N:1,aA:{a:[{p:4,h:"177"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:24,aS:8,aT:8,a:289,b:309},"242":{c:63,d:247,I:"Solid",J:"Solid",K:"Solid",g:"#C8CCCE",L:"Solid",M:2,N:2,A:"#FF2600",x:"visible",j:"absolute",B:"#FF2600",P:2,k:"div",C:"#FF2600",z:11,O:2,D:"#FF2600",a:505,b:90},"234":{G:"#000000",aU:8,c:81,d:11,I:"Solid",aN:"36_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:16,g:"#EF823B",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"ds",w:"Daily Show<br>",N:1,aA:{a:[{p:4,h:"171"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:18,aS:8,aT:8,a:370,b:61},"226":{b:49,z:15,K:"Solid",c:12,L:"Solid",d:295,aS:8,M:2,N:2,aT:8,O:2,g:"#929597",aU:8,P:2,i:"dp",aV:8,j:"absolute",k:"div",A:"#FF2600",B:"#FF2600",Z:"break-word",r:"inline",C:"#FF2600",s:"Helvetica,Arial,Sans-Serif",aN:"18_pressed",D:"#FF2600",t:16,aA:{a:[{p:4,h:"180"},{p:4,h:"79"},{p:4,h:"52"}]},G:"#000000",aP:"pointer",w:"D<br>e<br>m<br>o<br>c<br>r<br>a<br>t<br>i<br>c&nbsp;<br><br>P<br>a<br>r<br>t<br>y<br>",x:"visible",I:"Solid",a:62,y:"preserve",J:"Solid"},"239":{G:"#000000",aU:8,c:71,d:11,I:"Solid",aN:"38_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:16,g:"#EDD784",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"san",w:"Sanders<br>",N:1,aA:{a:[{p:4,h:"172"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:19,aS:8,aT:8,a:475,b:61},"230":{G:"#000000",aU:8,c:141,d:10,I:"Solid",aN:"35_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:16,g:"#EEB726",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"lp",w:"Left Wing Pundits<br>",N:1,aA:{a:[{p:4,h:"170"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:17,aS:8,aT:8,a:205,b:61},"222":{b:61,z:16,K:"Solid",c:77,L:"Solid",d:11,aS:8,M:1,N:1,aT:8,O:1,g:"#FFC675",aU:8,P:1,i:"np",aV:8,j:"absolute",k:"div",A:"#000000",B:"#000000",Z:"break-word",r:"inline",C:"#000000",s:"Helvetica,Arial,Sans-Serif",aN:"32_pressed",D:"#000000",t:16,aA:{a:[{p:4,h:"169"},{p:4,h:"79"},{p:4,h:"52"}]},G:"#000000",aP:"pointer",w:"NPR<br>",x:"visible",I:"Solid",a:101,y:"preserve",J:"Solid"},"243":{c:398,d:198,I:"Solid",e:1,J:"Solid",bL:0,K:"Solid",L:"Solid",M:6,w:"",N:6,A:"#000000",x:"visible",j:"absolute",B:"#000000",k:"div",O:6,C:"#000000",z:3,P:6,D:"#000000",a:95,b:95},"235":{p:"no-repeat",c:48,q:"100% 100%",d:48,I:"Solid",J:"Solid",K:"Solid",L:"Solid",h:"13",M:1,bN:{a:[{p:4,h:"5"}]},N:1,aI:"50%",A:"#D8DDE4",x:"visible",O:1,j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:4,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",P:1,a:223,aL:"50%",b:135},"227":{G:"#000000",aU:8,c:40,d:11,I:"Solid",aN:"41_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:11,g:"#EF5113",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"sex",w:"Sexism<br>",N:1,aA:{a:[{p:4,h:"174"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:21,aS:8,aT:8,a:507,b:156},"183":{cS:true,x:"visible",a:-9,cA:false,b:8,j:"absolute",bX:false,c:87,k:"div",z:30,cL:"183",d:81,bY:1,cK:{a:[{b:"198",p:3,z:false}]},bZ:180,cM:true,cV:[]},"231":{aV:8,w:"Score<br>",x:"visible",a:7,Z:"break-word",b:-3,y:"preserve",j:"absolute",z:29,k:"div",s:"Helvetica,Arial,Sans-Serif",aT:8,d:15,c:42,aS:8,t:13,G:"#000000",aU:8,r:"inline"},"196":{G:"#000000",aU:8,c:38,d:25,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",K:"Solid",t:16,L:"Solid",Z:"break-word",M:4,i:"sc",w:"<br>",N:4,j:"absolute",x:"visible",O:4,k:"div",y:"preserve",bF:"183",cM:true,z:1,aS:8,P:4,aT:8,a:9,b:13},"223":{G:"#000000",aU:8,c:337,aV:8,d:37,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:12,Z:"break-word",i:"inst",w:"<span style=\"color: rgb(0, 0, 0); font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: normal; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; background-color: rgb(255, 255, 255);\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</span><font color=\"#0433ff\" style=\"font-size: 10px;\">&nbsp;</font><span style=\"color: rgb(0, 0, 0); font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: normal; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; background-color: rgb(255, 255, 255);\">To free him remove the bricks from his box by clicking on them.</span><br style=\"font-size: 10px;\"><span style=\"color: rgb(0, 0, 0); font-family: Helvetica, Arial, sans-serif; font-size: 10px; font-style: normal; font-variant: normal; letter-spacing: normal; line-height: normal; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; word-spacing: 0px; background-color: rgb(255, 255, 255);\">&nbsp;Some bricks are greater barriers then others and &nbsp;their removal frees you quicker and gives you a higher score.</span><br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:1,aS:8,aT:8,a:116,b:241},"244":{G:"#000000",aU:8,c:59,d:11,I:"Solid",aN:"47_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:16,g:"#EF745E",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"ha2",w:"Hate<br>",N:1,aA:{a:[{p:4,h:"179"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:26,aS:8,aT:8,a:110,b:310},"236":{c:406,d:36,I:"Solid",J:"Solid",K:"Solid",g:"#C1C4C7",L:"Solid",M:2,N:2,A:"#FF2600",x:"visible",j:"absolute",B:"#FF2600",P:2,k:"div",C:"#FF2600",z:8,O:2,D:"#FF2600",a:95,b:305},"228":{aV:8,w:"Click and Drag Him<br>",x:"visible",a:184,Z:"break-word",b:25,y:"preserve",j:"absolute",z:13,k:"div",s:"Helvetica,Arial,Sans-Serif",aT:8,d:13,c:165,aS:8,t:12,G:"#000000",aU:8,r:"inline"},"240":{c:600,d:400,I:"None",J:"None",K:"None",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:0,b:-8},"232":{G:"#FF2600",aU:8,c:449,aV:8,d:20,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:24,Z:"break-word",v:"bold",w:"Try to get the Angry Guy out of his box<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:12,aS:8,aT:8,a:79,b:-5},"224":{G:"#000000",aU:8,c:40,d:11,I:"Solid",aN:"40_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:11,g:"#EEA200",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"race",w:"Racism<br>",N:1,aA:{a:[{p:4,h:"173"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:20,aS:8,aT:8,a:506,b:106},"237":{c:406,d:36,I:"Solid",J:"Solid",K:"Solid",g:"#C1C4C7",L:"Solid",M:2,N:2,A:"#FF2600",x:"visible",j:"absolute",B:"#FF2600",P:2,k:"div",C:"#FF2600",z:9,O:2,D:"#FF2600",a:95,b:305},"229":{G:"#000000",aU:8,c:39,d:22,I:"Solid",aN:"42_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:11,g:"#EF6131",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"one",w:"One Percent<br>",N:1,aA:{a:[{p:4,h:"175"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:22,aS:8,aT:8,a:508,b:192},"241":{G:"#000000",aU:8,c:59,d:11,I:"Solid",aN:"46_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:16,g:"#F03E01",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"ra2",w:"Rage<br>",N:1,aA:{a:[{p:4,h:"178"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:25,aS:8,aT:8,a:196,b:309},"233":{G:"#000000",aU:8,c:47,d:63,I:"Solid",aN:"43_pressed",aV:8,s:"Helvetica,Arial,Sans-Serif",J:"Solid",r:"inline",K:"Solid",t:11,g:"#EF977F",L:"Solid",Z:"break-word",aP:"pointer",M:1,i:"RB",w:"Rainbow<br>Power<br>",N:1,aA:{a:[{p:4,h:"176"},{p:4,h:"79"},{p:4,h:"52"}]},O:1,x:"visible",j:"absolute",y:"preserve",k:"div",P:1,z:23,aS:8,aT:8,a:507,b:241},"225":{c:473,d:32,I:"Solid",J:"Solid",K:"Solid",g:"#BCC8C3",L:"Solid",M:2,w:"",N:2,A:"#FF2600",x:"visible",j:"absolute",B:"#FF2600",k:"div",O:2,C:"#FF2600",z:6,P:2,D:"#FF2600",a:95,b:58}}},{A:{a:[{p:4,h:"193"}]},o:"31",p:"600px",x:3,cA:false,Z:400,Y:600,c:"#FFFFFF",L:[],bY:1,d:600,U:{"183":{V:{"Main Timeline":"198"},W:"198",n:"Symbol 2"}},T:{"191_pressed":{i:"191_pressed",n:"191_pressed",z:1,b:[],a:[{f:"c",y:0,z:1,i:"g",e:"#B7FCCD",s:"#00F900",o:"252"},{y:1,i:"g",s:"#B7FCCD",z:0,o:"252",f:"c"}],f:30},"198":{b:[],c:"183",z:0,i:"198",a:[],n:"Main Timeline",s:"183",f:30},kTimelineDefaultIdentifier:{i:"kTimelineDefaultIdentifier",n:"Main Timeline",z:0,b:[],a:[],f:30}},bZ:180,O:["196","183","248","250","249","251","245","246","252","247","253","254"],v:{"247":{p:"no-repeat",c:48,q:"100% 100%",d:48,I:"Solid",J:"Solid",K:"Solid",L:"Solid",h:"54",M:1,bN:{a:[{p:11}]},N:1,aI:"50%",A:"#D8DDE4",x:"visible",O:1,j:"absolute",aJ:"50%",k:"div",C:"#D8DDE4",z:4,B:"#D8DDE4",D:"#D8DDE4",aK:"50%",P:1,a:223,aL:"50%",b:187},"253":{c:398,d:198,I:"Solid",e:1,J:"Solid",bL:0,K:"Solid",L:"Solid",M:6,w:"",N:6,A:"#000000",x:"visible",j:"absolute",B:"#000000",k:"div",O:6,C:"#000000",z:3,P:6,D:"#000000",a:95,b:95},"196":{G:"#000000",aU:8,c:38,d:25,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",K:"Solid",t:16,L:"Solid",Z:"break-word",M:4,i:"sc",w:"<br>",N:4,j:"absolute",x:"visible",O:4,k:"div",y:"preserve",bF:"183",cM:true,z:1,aS:8,P:4,aT:8,a:9,b:13},"245":{G:"#000000",aU:8,c:388,d:18,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",K:"Solid",t:16,L:"Solid",Z:"break-word",M:3,w:"<br>",N:3,A:"#FF2600",O:3,x:"visible",j:"absolute",y:"preserve",k:"div",C:"#FF2600",z:7,B:"#FF2600",D:"#FF2600",aS:8,P:3,aT:8,a:95,b:305},"251":{G:"#000000",aU:8,c:42,d:230,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",K:"Solid",t:16,L:"Solid",Z:"break-word",M:2,w:"<br>",N:2,A:"#FF2600",O:2,x:"visible",j:"absolute",y:"preserve",k:"div",C:"#FF2600",z:8,B:"#FF2600",D:"#FF2600",aS:8,P:2,aT:8,a:505,b:95},"248":{aV:8,w:"Score<br>",x:"visible",a:26,Z:"break-word",b:-3,y:"preserve",j:"absolute",z:12,k:"div",s:"Helvetica,Arial,Sans-Serif",aT:8,d:15,c:41,aS:8,t:13,G:"#000000",aU:8,r:"inline"},"183":{cS:true,x:"visible",a:0,cA:false,b:13,j:"absolute",bX:false,c:83,k:"div",z:13,cL:"183",d:67,bY:1,cK:{a:[{b:"198",p:3,z:false}]},bZ:180,cM:true,cV:[]},"254":{c:605,d:391,I:"None",J:"None",K:"None",L:"None",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",k:"div",O:0,C:"#D8DDE4",z:2,P:0,D:"#D8DDE4",a:0,b:4},"252":{b:355,z:5,K:"Solid",c:43,L:"Solid",d:15,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#00F900",aU:6,P:1,i:"hide",aV:6,j:"absolute",aI:4,k:"div",aJ:4,aK:4,aL:4,A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",aN:"191_pressed",D:"#A0A0A0",t:13,aA:{a:[{p:4,h:"192"}]},F:"center",G:"#000000",aP:"pointer",w:"Next&nbsp;<br>",x:"visible",I:"Solid",a:241,y:"preserve",J:"Solid"},"246":{G:"#000000",aU:8,c:452,d:11,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",K:"Solid",t:16,L:"Solid",Z:"break-word",M:2,w:"<br>",N:2,A:"#FF2600",O:2,x:"visible",j:"absolute",y:"preserve",k:"div",C:"#FF2600",z:6,B:"#FF2600",D:"#FF2600",aS:8,P:2,aT:8,a:95,b:64},"249":{G:"#FF2600",aU:8,c:73,aV:8,d:24,r:"inline",s:"Helvetica,Arial,Sans-Serif",t:18,Z:"break-word",v:"bold",w:"I\u2019m Free<br>",j:"absolute",x:"visible",k:"div",y:"preserve",z:9,aS:8,aT:8,a:248,b:8},"250":{G:"#000000",aU:8,c:5,d:261,I:"Solid",aV:8,r:"inline",s:"Helvetica,Arial,Sans-Serif",J:"Solid",K:"Solid",t:16,L:"Solid",Z:"break-word",M:2,w:"<br><br>",N:2,A:"#FF2600",O:2,x:"visible",j:"absolute",y:"preserve",k:"div",C:"#FF2600",z:10,B:"#FF2600",D:"#FF2600",aS:8,P:2,aT:8,a:70,b:64}}}],{"183":["196"]},g,{},null,false,true,-1,true,true,true,true);f[c]=a.API;document.getElementById(e).setAttribute("HYP_dn",
c);a.z_o(this.body)})();})();
