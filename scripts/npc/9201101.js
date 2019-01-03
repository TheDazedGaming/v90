importPackage(Packages.Client.MapleCharacter);
importPackage(Packages.Client.AbstractMapleCharacterObject);
var status;
 
function start() {
        status = -1;
        action(1, 0, 0);
}

function action(mode, type, selection) {
        if (mode == -1) {
                cm.dispose();
        } else {
                if (mode == 0 && type > 0) {
                        cm.dispose();
                        return;
                }
                if (mode == 1)
                        status++;
                else
                        status--;
    
                if(status == 0) {
				        cm.sendSimple("I am #bT-1337#k. Click one of my options to learn more about the Rebirth System.\r\n\r\n#b#L0#What is a Rebirth?#l\r\n#L1#How do I obtain a rebirth?#l\r\n#L2#Party Play Rebirth!#l\r\n#L3#Solo Play Rebirth!#l");
					} else if (status == 1) {
					if (selection == 0) {
						cm.sendPrev("A rebirth in LostStory is...\r\n\r\nWhen you reach level 225 you can reset your level back to 1 and job to a beginner so you can become another job. You can still use your skills from the previous job.\r\n\r\nIf you would like to know how to Rebirth please click the #b `Back`#k button and then the option #b`How do I obtain a rebirth`.");
					} else if (selection == 1) {
						cm.sendPrev("There are 2 ways to obtain a rebirth...\r\n#d#eParty Play#n leaves you with a remaining 200 AP for Adventurers and Arans and a remaining 150 AP for Knights of Cygnus. #eSolo Play#n leaves you with a remaining 150 AP for Adventurers and Arans and a remaining 100 AP for Knights of Cygnus.#k\r\nDescribed below is the first way(Party Play):" +
						"\r\n#rAdventurers and Arans:\r\n#bCharacter Level: #r225\r\n#bLost Points: #r50\r\n#bMaple Leaves: #r100\r\n#bZakum Certificate: #r1\r\n#bPianus Certificate: #r1\r\n#bPapulatus Certificate: #r1\r\n#bTarga's Foot: #r3\r\n#bScarlion's Foot: #r3\r\n#bGolden Egg: #r5\r\n\r\n#rKnights of Cygnus:\r\n#bCharacter Level: #r150\r\n#bLost Points: #r35\r\n#bMaple Leaves: #r75\r\n#bZakum Certificate: #r1\r\n#bPianus Certificate: #r1\r\n#bPapulatus Certificate: #r1\r\n#bTarga's Foot: #r3\r\n#bScarlion's Foot: #r3\r\n#bGolden Egg: #r3\r\n#k\r\nDescribed below is the second way(Solo Play):" +
						"\r\n#rAdventurers and Arans:\r\n#bCharacter Level: #r225\r\n#bLost Points: #r50\r\n#bMaple Leaves: #r100\r\n#bPianus Certificate: #r1\r\n#bPapulatus Certificate: #r1\r\n#bDark Token: #r1000\r\n\r\n#rKnights of Cygnus:\r\n#bCharacter Level: #r150\r\n#bLost Points: #r35\r\n#bMaple Leaves: #r75\r\n#bPianus Certificate: #r1\r\n#bPapulatus Certificate: #r1\r\n#bDark Token: #r750");
					} else if (selection == 2) {
						cm.sendSimple("You chose Party Play! What Job Class are you?\r\n\r\n#d#L4#Adventurer#l\r\n#L5#Aran#l\r\n#L6#Cygnus#l");
					} else if (selection == 3) {
						cm.sendSimple("You chose Solo Play! What Job Class are you?\r\n\r\n#d#L7#Adventurer#l\r\n#L8#Aran#l\r\n#L9#Cygnus#l");
					}
					} else if (status == 2) {
					if (selection == 4 || selection == 5) {
						if (cm.getPlayer().getLevel() == 225) {
						cm.sendSimple("#ePARTY PLAY#n\r\nWhat would you like to Rebirth into?\r\n\r\n#r#L10#Adventurer#l\r\n#L11#Aran#l\r\n#L12#Cygnus#l");
						} else {
						cm.sendOk("I don't think you have reached the Max Level to rebirth. Keep training to level 225.");
						cm.dispose();
						}
						} else if (selection == 6) {
						if (cm.getPlayer().getLevel() == 150 && cm.getPlayer().isCygnus()) {
						cm.sendSimple("#ePARTY PLAY#n\r\nWhat would you like to Rebirth into?\r\n\r\n#r#L10#Adventurer#l\r\n#L11#Aran#l\r\n#L12#Cygnus#l");
						} else {
						cm.sendOk("I don't think you have reached the Max Level to rebirth or you are not a Cygnus Class. Keep training to level 150.");
						cm.dispose();
						}
						} else if (selection == 7 || selection == 8) {
						if (cm.getPlayer().getLevel() == 225) {
						cm.sendSimple("#eSOLO PLAY#n\r\nWhat would you like to Rebirth into?\r\n\r\n#r#L13#Adventurer#l\r\n#L14#Aran#l\r\n#L15#Cygnus#l");
						} else {
						cm.sendOk("I don't think you have reached the Max Level to rebirth. Keep training to level 225.");
						cm.dispose();
						}
						} else if (selection == 9) {
						if (cm.getPlayer().getLevel() == 150 && cm.getPlayer().isCygnus()) {
						cm.sendSimple("#eSOLO PLAY#n\r\nWhat would you like to Rebirth into?\r\n\r\n#r#L13#Adventurer#l\r\n#L14#Aran#l\r\n#L15#Cygnus#l");
						} else {
						cm.sendOk("I don't think you have reached the Max Level to rebirth or you are not a Cygnus Class. Keep training to level 150.");
						cm.dispose();
						}
						}
						} else if (status == 3) {
						if (selection == 10) {
						if (cm.getReborns() == 0 && cm.getlostPoints() >= 50 && cm.haveItem(4001126, 100) && cm.haveItem(4001083, 1) && cm.haveItem(4001084, 1) && cm.haveItem(4001085, 1) && cm.haveItem(4001241, 3) && cm.haveItem(4001242, 3) && cm.haveItem(4031284, 5)) {
						cm.getPlayer().setLevel(1);
						cm.changeJobById(0);
						cm.gainlostPoints(-50);
						cm.gainItem(4001083, -1);
						cm.gainItem(4001084, -1);
						cm.gainItem(4001085, -1);
						cm.gainItem(4001241, -3);
						cm.gainItem(4001242, -3);
						cm.gainItem(4001126, -100);
						cm.gainItem(4031284, -5);
						cm.gainReborns(1);
						cm.resetStats();
						cm.getPlayer().setRemainingAp(200);
						cm.getPlayer().updateRemainingSp(0);
						cm.setWorldRates();
						cm.dispose();
						} else {
						cm.sendOk("You do not meet all of the requirements or you have already made your rebirth!");
						cm.dispose();
						}
						} else if (selection == 11) {
						if (cm.getReborns() == 0 && cm.getlostPoints() >= 50 && cm.haveItem(4001126, 100) && cm.haveItem(4001083, 1) && cm.haveItem(4001084, 1) && cm.haveItem(4001085, 1) && cm.haveItem(4001241, 3) && cm.haveItem(4001242, 3) && cm.haveItem(4031284, 5)) {
						cm.getPlayer().setLevel(1);
						cm.changeJobById(2000);
						cm.gainlostPoints(-50);
						cm.gainItem(4001083, -1);
						cm.gainItem(4001084, -1);
						cm.gainItem(4001085, -1);
						cm.gainItem(4001241, -3);
						cm.gainItem(4001242, -3);
						cm.gainItem(4001126, -100);
						cm.gainItem(4031284, -5);
						cm.gainReborns(1);
						cm.resetStats();
						cm.getPlayer().setRemainingAp(200);
						cm.getPlayer().updateRemainingSp(0);
						cm.setWorldRates();
						cm.dispose();
						} else {
						cm.sendOk("You do not meet all of the requirements or you have already made your rebirth!");
						cm.dispose();
						} 
						} else if (selection == 12) {
						if (cm.getReborns() == 0 && cm.getlostPoints() >= 35 && cm.haveItem(4001126, 75) && cm.haveItem(4001083, 1) && cm.haveItem(4001084, 1) && cm.haveItem(4001085, 1) && cm.haveItem(4001241, 3) && cm.haveItem(4001242, 3) && cm.haveItem(4031284, 5)) {
						cm.getPlayer().setLevel(1);
						cm.changeJobById(1000);
						cm.gainlostPoints(-35);
						cm.gainItem(4001083, -1);
						cm.gainItem(4001084, -1);
						cm.gainItem(4001085, -1);
						cm.gainItem(4001241, -3);
						cm.gainItem(4001242, -3);
						cm.gainItem(4001126, -75);
						cm.gainItem(4031284, -5);
						cm.gainReborns(1);
						cm.resetStats();
						cm.getPlayer().setRemainingAp(150);
						cm.getPlayer().updateRemainingSp(0);
						cm.setWorldRates();
						cm.dispose();
						} else {
						cm.sendOk("You do not meet all of the requirements or you have already made your rebirth!");
						cm.dispose();
						}
						} else if (selection == 13) {
						if (cm.getReborns() == 0 && cm.getlostPoints() >= 50 && cm.haveItem(4001126, 100) && cm.haveItem(4001085, 1) && cm.haveItem(4001084, 1) && cm.haveItem(4000524, 1000)) {
						cm.getPlayer().setLevel(1);
						cm.changeJobById(0);
						cm.gainlostPoints(-50);
						cm.gainItem(4001084, -1);
						cm.gainItem(4001085, -1);
						cm.gainItem(4000524, -1000);
						cm.gainItem(4001126, -100);
						cm.gainReborns(1);
						cm.resetStats();
						cm.getPlayer().setRemainingAp(150);
						cm.getPlayer().updateRemainingSp(0);
						cm.setWorldRates();
						cm.dispose();
						} else {
						cm.sendOk("You do not meet all of the requirements or you have already made your rebirth!");
						cm.dispose();
						}						
						} else if (selection == 14) {
						if (cm.getReborns() == 0 && cm.getlostPoints() >= 50 && cm.haveItem(4001126, 100) && cm.haveItem(4001085, 1) && cm.haveItem(4001084, 1) && cm.haveItem(4000524, 1000)) {
						cm.getPlayer().setLevel(1);
						cm.changeJobById(2000);
						cm.gainlostPoints(-50);
						cm.gainItem(4001084, -1);
						cm.gainItem(4001085, -1);
						cm.gainItem(4000524, -1000);
						cm.gainItem(4001126, -100);
						cm.gainReborns(1);
						cm.resetStats();
						cm.getPlayer().setRemainingAp(150);
						cm.getPlayer().updateRemainingSp(0);
						cm.setWorldRates();
						cm.dispose();
						} else {
						cm.sendOk("You do not meet all of the requirements or you have already made your rebirth!");
						cm.dispose();
						}
						} else if (selection == 15) {
						if (cm.getReborns() == 0 && cm.getlostPoints() >= 50 && cm.haveItem(4001126, 75) && cm.haveItem(4001085, 1) && cm.haveItem(4001084, 1) && cm.haveItem(4000524, 750)) {
						cm.getPlayer().setLevel(1);
						cm.changeJobById(1000);
						cm.gainlostPoints(-35);
						cm.gainItem(4001084, -1);
						cm.gainItem(4001085, -1);
						cm.gainItem(4000524, -750);
						cm.gainItem(4001126, -75);
						cm.gainReborns(1);
						cm.resetStats();
						cm.getPlayer().setRemainingAp(100);
						cm.getPlayer().updateRemainingSp(0);
						cm.setWorldRates();
						cm.dispose();
						} else {
						cm.sendOk("You do not meet all of the requirements or you have already made your rebirth!");
						cm.dispose();
						}
						
						}
					}
					}
					}