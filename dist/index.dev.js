"use strict";

var express = require("express");

var app = new express();
app.use(express["static"]("./page"));
app.listen(8088);