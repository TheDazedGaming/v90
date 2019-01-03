@echo off
@title Drop Spider
set CLASSPATH=.;cores\*
java -server -Dwzpath=wz\ SpiderDropFetcher\src\dropspider.Main
pause