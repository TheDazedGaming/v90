importPackage(Packages.Client.MapleCharacter);

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
				cm.sendNext("#bWelcome to the Job Advancement NPC!");
				} else if (status == 1) {
				if (cm.getPlayer().getLevel() >= 8 && cm.getPlayer().getLevel() <= 10 && cm.getPlayer().getJob().getId() == 0) {
				cm.sendSimple("Looks like you are high enough level to get your first Job Advancement as an Explorer!\r\n\r\n#dChoose A Job #e(CHOOSE WISELY AS THIS WON'T BE UNDONE)#n:\r\n#r#L0#Warrior#l\r\n#b#L1#Magician#l\r\n#r#L2#Bowman#l\r\n#b#L3#Rogue#l\r\n#r#L4#Pirate#l");
				} else  
				if (cm.getPlayer().getLevel() >= 8 && cm.getPlayer().getLevel() <= 10 && cm.getPlayer().getJob().getId() == 1000) {
				cm.sendSimple("Looks like you are high enough level to get your first Job Advancement as a Knight of Cygnus!\r\n\r\n#dChoose A Job #e(CHOOSE WISELY AS THIS WON'T BE UNDONE)#n:\r\n#r#L5#Dawn Warrior#l\r\n#b#L6#Blaze Wizard#l\r\n#r#L7#Wind Archer#l\r\n#b#L8#Night Walker#l\r\n#r#L9#Thunder Breaker#l");
				} else 
				if (cm.getPlayer().getLevel() == 10 && cm.getPlayer().getJob().getId() == 2000) {
				cm.sendSimple("Looks like you are high enough level to get your first Job Advancement as an Aran!\r\n\r\n#r#L10#Aran#l");
				} else 
				if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob().getId() == 100) {
				cm.sendSimple("Looks like you are high enough level to get your second Job Advancement as a Warrior\r\n\r\n#d#eChoose A Job:#n\r\n#r#L11#Fighter#l\r\n#b#L12#Page#l\r\n#r#L13#Spearman#l");
				} else 
				if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob().getId() == 200) {
				cm.sendSimple("Looks like you are high enough level to get your second Job Advancement as a Magician\r\n\r\n#d#eChoose A Job:#n\r\n#r#L14#F/P Wizard#l\r\n#b#L15#I/L Wizard#l\r\n#r#L16#Cleric#l");
				} else 
				if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob().getId() == 300) {
				cm.sendSimple("Looks like you are high enough level to get your second Job Advancement as a Bowman\r\n\r\n#d#eChoose A Job:#n\r\n#r#L17#Hunter#l\r\n#b#L18#Crossbowman#l");
				} else 
				if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob().getId() == 400) {
				cm.sendSimple("Looks like you are high enough level to get your second Job Advancement as a Thief\r\n\r\n#d#eChoose A Job:#n\r\n#r#L19#Assassin#l\r\n#b#L20#Bandit#l");
				} else 
				if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob().getId() == 500) {
				cm.sendSimple("Looks like you are high enough level to get your second Job Advancement as a Pirate\r\n\r\n#d#eChoose A Job:#n\r\n#r#L21#Brawler#l\r\n#b#L22#Gunslinger#l");
				} else 
				if (cm.getPlayer().getLevel() >= 30 && cm.getPlayer().getJob().getId() == 1100) {
				cm.sendSimple("Looks like you are high enough level to get your second Job Advancement as a Dawn Warrior\r\n\r\n#d#eChoose A Job:#n\r\n#r#L23#Dawn Warrior 2#l");
				} else {
				cm.sendOk("You are not within the level requirements for any Job Advancements!");
				cm.dispose();
				}
				} else if (status == 2) {
				if (selection == 0) {
				cm.changeJobById(100);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 1) {
				cm.changeJobById(200);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 2) {
				cm.changeJobById(300);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 3) {
				cm.changeJobById(400);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 4) {
				cm.changeJobById(500);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 5) {
				cm.changeJobById(1100);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 6) {
				cm.changeJobById(1200);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 7) {
				cm.changeJobById(1300);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 8) {
				cm.changeJobById(1400);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 9) {
				cm.changeJobById(1500);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 10) {
				cm.changeJobById(2100);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 11) {
				cm.changeJobById(110);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 12) {
				cm.changeJobById(120);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 13) {
				cm.changeJobById(130);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 14) {
				cm.changeJobById(210);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 15) {
				cm.changeJobById(220);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 16) {
				cm.changeJobById(230);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 17) {
				cm.changeJobById(310);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 18) {
				cm.changeJobById(320);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 19) {
				cm.changeJobById(410);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 20) {
				cm.changeJobById(420);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 21) {
				cm.changeJobById(510);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 22) {
				cm.changeJobById(520);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 23) {
				cm.changeJobById(1110);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 24) {
				cm.changeJobById(1210);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 25) {
				cm.changeJobById(1310);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 26) {
				cm.changeJobById(1410);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 27) {
				cm.changeJobById(1510);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 28) {
				cm.changeJobById(2110);
				cm.resetStats();
				cm.dispose();
				} else if (selection == 29) {
				cm.changeJobById(1110);
				cm.resetStats();
				cm.dispose();
				
				} 
				}
				}
				}