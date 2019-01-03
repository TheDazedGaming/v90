/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client.command.commands.gm3;

import client.MapleCharacter;
import client.MapleClient;
import client.command.Command;

/**
 *
 * @author Administrator
 */
public class GivePunishCommand extends Command {
    {
        setDescription("");
    }

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter player = c.getPlayer();
        if (params.length < 2) {
            player.yellowMessage("Syntax: !givep <playername> <Punish Points>");
            return;
        }

        MapleCharacter victim = c.getChannelServer().getPlayerStorage().getCharacterByName(params[0]);
        if (victim != null) {
            victim.getClient().addPunish(Integer.parseInt(params[1]));
            player.message("Punish Point given.");
        } else {
            player.message("Player '" + params[0] + "' could not be found on this channel.");
        }
    }
}