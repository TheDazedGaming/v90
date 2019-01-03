/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net;

import client.MapleClient;
import tools.FilePrinter;
import tools.StringUtil;
import tools.data.input.SeekableLittleEndianAccessor;

/**
 * @author ExtremeDevilz
 */
public class ClientErrorHandler implements MaplePacketHandler {

    @Override
    public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
        if (slea.available() >= 6L) {
            slea.skip(6);
            short badPacketSize = slea.readShort();
            slea.skip(4);
            int pHeader = slea.readShort();
            String pHeaderStr = Integer.toHexString(pHeader).toUpperCase();
            pHeaderStr = StringUtil.getLeftPaddedStr(pHeaderStr, '0', 4);

            String Recv = new StringBuilder().append("\r\n").append("SendOP(38): ").append(" [").append(pHeaderStr).append("] (").append(badPacketSize - 4).append(")").append(slea.toString()).append("\r\n\r\n").toString();
            FilePrinter.printError(FilePrinter.PACKET_HANDLER + "ClientErrorHandler.txt", Recv);
        }
    }

    @Override
    public boolean validateState(MapleClient c) {
        return true;
    }
}
