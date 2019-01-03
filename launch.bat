@echo off
@title HeavenMS
set CLASSPATH=.;cores\*
java -Xmx2048m -Dwzpath=wz\ net.server.Server
pause