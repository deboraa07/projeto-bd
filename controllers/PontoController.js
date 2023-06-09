const { request } = require('express');
const Ponto = require('../models/ponto.js');

const addPonto = async (req, res) =>{
    const objeto = {
        nome: req.body.nome,
        descricao: req.body.descricao,
        local: req.body.local,
        lng: req.body.lng,
        lat: req.body.lat
    };

    const ponto = Ponto.build(objeto);
    ponto.save().then(()=>{
        res.status(200).send('Ponto salvo!');
    }).catch(err =>{
        res.status(400).send('Falha ao salvar');
    });

};

const getPontos = async (req, res) =>{
    const pontos = await Ponto.findAll();
    res.status(200).send(pontos);
}

const sincronizar = async(req, res) =>{
    await Ponto.sync();
    res.status(200).send('Sincronizado');
};

module.exports = {addPonto, sincronizar, getPontos};