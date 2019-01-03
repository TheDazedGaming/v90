/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
package net.opcodes;

public enum RecvOpcode {
    CUSTOM_PACKET(0x3713),//13 37 lol
    
    LOGIN_PASSWORD(1),
    SERVERLIST_REREQUEST(4),
    CHARLIST_REQUEST(5),
    SERVERSTATUS_REQUEST(6),
    ACCEPT_TOS(7),
    SET_GENDER(8),
    AFTER_LOGIN(9),
    REGISTER_PIN(10),
    SERVERLIST_REQUEST(11),
    VIEW_ALL_CHAR(13),
    PICK_ALL_CHAR(14),
    CHAR_SELECT(19),
    PLAYER_LOGGEDIN(20),
    CHECK_CHAR_NAME(21),
    CREATE_CHAR(22),
    DELETE_CHAR(24),
    PONG(25),
    CLIENT_ERROR(26),
    STRANGE_DATA(27),
    RELOG(28),
    REGISTER_PIC(30),
    CHAR_SELECT_WITH_PIC(31),
    VIEW_ALL_PIC_REGISTER(32),
    VIEW_ALL_WITH_PIC(33),
    PACKET_ERROR(38),
    
    CHANGE_MAP(43),
    CHANGE_CHANNEL(44),
    ENTER_CASHSHOP(45),
    MOVE_PLAYER(46),
    CANCEL_CHAIR(47),
    USE_CHAIR(48),
    CLOSE_RANGE_ATTACK(49),
    RANGED_ATTACK(50),
    MAGIC_ATTACK(51),
    TOUCH_MONSTER_ATTACK(52),
    TAKE_DAMAGE(53),
    GENERAL_CHAT(55),
    CLOSE_CHALKBOARD(56),
    FACE_EXPRESSION(57),
    USE_ITEMEFFECT(58),
    USE_DEATHITEM(59),
    MONSTER_BOOK_COVER(63),
    NPC_TALK(64),
    REMOTE_STORE(0xFFF),
    NPC_TALK_MORE(66),
    NPC_SHOP(67),
    STORAGE(68),
    HIRED_MERCHANT_REQUEST(69),
    FREDRICK_ACTION(70),
    DUEY_ACTION(71),
    
    ADMIN_SHOP(0xFFF),
    
    ITEM_SORT(76),
    ITEM_SORT2(77),
    ITEM_MOVE(78),
    USE_ITEM(79),
    CANCEL_ITEM_EFFECT(80),
    USE_SUMMON_BAG(82),
    PET_FOOD(83),
    USE_MOUNT_FOOD(84),
    SCRIPTED_ITEM(85),
    USE_CASH_ITEM(86),

    USE_CATCH_ITEM(88),
    USE_SKILL_BOOK(89),
    USE_TELEPORT_ROCK(0x54),
    USE_RETURN_SCROLL(0x55),
    USE_UPGRADE_SCROLL(97),
    DISTRIBUTE_AP(98),
    AUTO_DISTRIBUTE_AP(0xFFF),
    HEAL_OVER_TIME(99),
    DISTRIBUTE_SP(101),
    SPECIAL_MOVE(102),
    CANCEL_BUFF(103),
    SKILL_EFFECT(104),
    MESO_DROP(105),
    GIVE_FAME(106),
    CHAR_INFO_REQUEST(108),
    
    SPAWN_PET(109),
    CANCEL_DEBUFF(110),
    CHANGE_MAP_SPECIAL(111),
    USE_INNER_PORTAL(112),
    TROCK_ADD_MAP(113),
    REPORT(0xFFF),
    QUEST_ACTION(118),
    
    SKILL_MACRO(121),
    
    SPOUSE_CHAT(0xFFF),
    USE_ITEM_REWARD(0xFFF),
    MAKER_SKILL(0xFFF),
    USE_REMOTE(0xFFF),
    
    ADMIN_CHAT(0xFFF),
    PARTYCHAT(0xFFF),
    
    WHISPER(138),
    MESSENGER(140),
    PLAYER_INTERACTION(141),
    PARTY_OPERATION(142),
    DENY_PARTY_REQUEST(143),
    
    GUILD_OPERATION(146),
    DENY_GUILD_REQUEST(147),
    ADMIN_COMMAND(148),
    ADMIN_LOG(149),
    BUDDYLIST_MODIFY(150),
    
    NOTE_ACTION(0xFFF),
    USE_DOOR(0xFFF),
    
    CHANGE_KEYMAP(156),
    
    RPS_ACTION(0xFFFE),
    RING_ACTION(0xFFFE),
    WEDDING_ACTION(0xFFFE),
    OPEN_FAMILY(0xFFFE),
    ADD_FAMILY(0xFFFE),
    ACCEPT_FAMILY(0xFFFE),
    USE_FAMILY(0xFFFE),
    ALLIANCE_OPERATION(0xFFFE),
    BBS_OPERATION(0xFFFE),
    ENTER_MTS(0xFFFE),
    USE_SOLOMON_ITEM(0xFFFE),
    USE_GACHA_EXP(0xFFFE),
    CLICK_GUIDE(0xFFFE),
    ARAN_COMBO_COUNTER(0xFFFE),
    MOVE_PET(0xFFFE),
    PET_CHAT(0xFFFE),
    PET_COMMAND(0xFFFE),
    PET_LOOT(0xFFFE),
    PET_AUTO_POT(0xFFFE),
    PET_EXCLUDE_ITEMS(0xFFFE),
    MOVE_SUMMON(0xFFFE),
    
    SUMMON_ATTACK(205),
    DAMAGE_SUMMON(206),
    
    BEHOLDER(0xFFFE),
    MOVE_DRAGON(0xFFFE),
    
    MOVE_LIFE(220),
    AUTO_AGGRO(221),
    
    MOB_DAMAGE_MOB_FRIENDLY(0xFFFE),
    MONSTER_BOMB(0xFFFE),
    MOB_DAMAGE_MOB(0xFFFE),
    
    NPC_ACTION(234),
    ITEM_PICKUP(239),
    
    DAMAGE_REACTOR(242),
    TOUCHING_REACTOR(243),
    
    TEMP_SKILL(0xFFFE),
    MAPLETV(0xFFFE),//Don't know
    SNOWBALL(0xFFFE),
    LEFT_KNOCKBACK(0xFFFE),
    COCONUT(0xFFFE),
    MATCH_TABLE(0xFFFE),//Would be cool if I ever get it to work :)
    MONSTER_CARNIVAL(0xFFFE),
    PARTY_SEARCH_REGISTER(0xFFFE),
    PARTY_SEARCH_START(0xFFFE),
    PLAYER_UPDATE(0xFFFE),
    
    CHECK_CASH(267),
    CASHSHOP_OPERATION(268),
    COUPON_CODE(269),
    GUEST_LOGIN(0x02),
    PLAYER_DC(0x0C),
    NAME_TRANSFER(0x10),
    WORLD_TRANSFER(0x12),
    CLIENT_START_ERROR(0x19),
    OWL_ACTION(0x42),   //sends most searched info to client
    OWL_WARP(0x43),     //handles player warp to store
    //USE_OWL_ITEM(0x50), ... no idea
    //lolno
    WATER_OF_LIFE(0x75),
    MULTI_CHAT(0x77),
    WEDDING_TALK(0x8B),
    WEDDING_TALK_MORE(0x8B),
    NEW_YEAR_CARD_REQUEST(0x9F),
    CASHSHOP_SURPRISE(0xA1),
    PLAYER_MAP_TRANSFER(0xCF),
    OPEN_ITEMUI(0xEB),
    CLOSE_ITEMUI(0xEC),
    USE_ITEMUI(0xED),
    MTS_OPERATION(0xFD),
    USE_MAPLELIFE(0x100),
    USE_HAMMER(0x104);
    private int code = -2;

    private RecvOpcode(int code) {
        this.code = code;
    }

    public int getValue() {
        return code;
    }
}
