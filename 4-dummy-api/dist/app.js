"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const axios = require('axios');
var GENDER;
(function (GENDER) {
    GENDER["MALE"] = "male";
    GENDER["FEMALE"] = "female";
    GENDER["OTHER"] = "other";
})(GENDER || (GENDER = {}));
function request() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios.get('https://dummyjson.com/users');
            const data = response.data;
            console.log(data);
            return data;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    });
}
;
request();
