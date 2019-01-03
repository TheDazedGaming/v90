/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package client.command.commands.gm3;

import client.command.Command;
import client.MapleClient;
import client.MapleCharacter;

public class GetPunishCommand extends Command {
    {
        setDescription("");
    }

    @Override
    public void execute(MapleClient c, String[] params) {
        MapleCharacter player = c.getPlayer();
        if (params.length < 1) {
            player.yellowMessage("Syntax: !checkp <playername>");
            return;
        }
        MapleCharacter victim = c.getWorldServer().getPlayerStorage().getCharacterByName(params[0]);
        if (victim != null) {
            player.message(victim.getName() + "'s account name is " + victim.getClient().getAccountName() + ".");
            player.message(victim.getName() + " has " + victim.getClient().getPunish() + " Punish Points.");
            player.showHint("Each Point represents 1 infraction. Follow the TOS.");
        } else {
            player.message("Player '" + params[0] + "' could not be found on this world.");
        }
    }
}
