#!/bin/bash
paramCaminho=$1
paramExtensao=$2

if [ $# -ne 2 ]; then
    echo "Forneca o diretorio espaço a extensão"
    echo "Por exemplo: /home/texto txt"
    sleep 1
    exit
fi
if [ ! -d $paramCaminho ]; then
    echo "Caminho invalido"
    echo "Por favor digite um caminho valido"
    sleep 1
    exit
fi

cd $paramCaminho
for r in `ls *".${paramExtensao}"`; do
    novo=$(echo $r | sed -r "s/_/\-/g")
    mv -v "$r" "$novo"
done