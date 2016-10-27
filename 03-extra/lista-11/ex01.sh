#!/bin/bash
if [ "$1" = "" ]; then
  echo "Para executar o script é necessario um parametro numerico"
  sleep 1
  exit
fi
  bolaDaVez=$1;
  resto=0;
  total=0;
while [ $bolaDaVez != 0 ]; do
  resto=$((bolaDaVez % 10))
  total=$((total + resto))
  bolaDaVez=$((bolaDaVez / 10))
done
  echo "A soma dos digitos dados é: $total" 
