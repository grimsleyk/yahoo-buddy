/**
 * Created by kevin
 * Description: Demo class to handle acctions on 'Nerds'
 */

'use strict';

var NerdModel = require('../models/Nerd');
var Nerd = {};

Nerd.find = function(req, res) {
  NerdModel.find(function(err, nerds) {
    if(err) {
      handleError(res, err);
    } else {
      res.json(nerds);
    }
  });
}

Nerd.create = function(req, res) {
  NerdModel.create(req.body, function(err, nerd) {
    if(err) {
      return handleError(res, err);
    }
    return res.json(201, nerd);
  });
}

// Common functions
function handleError(res, err) {
 return res.send(500, err);
}

// Expose routes for api
exports.register = function (router) {
  router.get('/nerds', Nerd.find);
  router.post('/nerds', Nerd.create);
}


