/*
    This file is part of the HeavenMS MapleStory Server, commands OdinMS-based
    Copyleft (L) 2016 - 2018 RonanLana

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

/*
   @Author: Arthur L - Refactored command content into modules
*/
package client.command.commands.gm0;

import client.MapleCharacter;
import client.MapleClient;
import client.MapleStat;
import client.command.Command;
import constants.ServerConstants;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;
import net.server.Server;

public class InfoCommand extends Command {
    {
        setDescription("");
    }
    
    public void execute(MapleClient c, String[] params) {
        long milliseconds = System.currentTimeMillis() - Server.uptime;
        int seconds = (int) (milliseconds / 1000) % 60 ;
        int minutes = (int) ((milliseconds / (1000*60)) % 60);
        int hours   = (int) ((milliseconds / (1000*60*60)) % 24);
        int days    = (int) ((milliseconds / (1000*60*60*24)));
        DateFormat dateFormat = new SimpleDateFormat("HH:mm:ss");
        dateFormat.setTimeZone(TimeZone.getTimeZone(ServerConstants.TIMEZONE));
        c.getPlayer().yellowMessage("LostStory Server Time: " + dateFormat.format(new Date()));
        c.getPlayer().yellowMessage("Available AP: " + c.getPlayer().getRemainingAp());
        c.getPlayer().yellowMessage("Current Rebirths:" + c.getPlayer().getReborns());
        c.getPlayer().yellowMessage("LostPoints: " + c.getPlayer().getlostPoints());
        c.getPlayer().yellowMessage("LostStory has been online for " + days + " days " + hours + " hours " + minutes + " minutes and " + seconds + " seconds.");
    }
}
